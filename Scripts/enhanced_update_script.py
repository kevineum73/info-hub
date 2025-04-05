#!/usr/bin/env python3
import sys
import os
import time
import json
import psutil
from datetime import datetime
import multiprocessing
import signal
import logging
from concurrent.futures import ThreadPoolExecutor, as_completed
from functools import partial
import random

# Add necessary paths
sys.path.append('/apps/common/connectors')
from secureforce_connector import JiraConnector
from secureforce_connector import JiraConnectorProdConfig
sys.path.append('/apps/common/logger')
sys.path.append('/apps/common/notification')
import customapplog
from conf import config

# Constants and configuration
CONFIG = {
    'MIN_WORKERS': 2,
    'MAX_WORKERS': 10,
    'INITIAL_WORKERS': 3,
    'BATCH_SIZE': 50,
    'MAX_RETRIES': 5,
    'CHECKPOINT_INTERVAL': 100,  # Save checkpoint after processing this many tickets
    'CHECKPOINT_FILE': 'jira_update_checkpoint.json',
    'RATE_LIMIT_DELAY': 30,  # Seconds to wait when rate limited
    'CPU_THRESHOLD': 80,  # CPU percentage to trigger worker reduction
    'MEMORY_THRESHOLD': 75  # Memory percentage to trigger worker reduction
}

class JiraUpdater:
    def __init__(self, log_name='enhanced_update_PIAM'):
        self.logobject = customapplog.getcustomlogger(log_name)
        self.secureforcejira = JiraConnectorProdConfig()
        self.jiraconnector = None
        self.processed_ids = set()
        self.current_workers = CONFIG['INITIAL_WORKERS']
        self.start_time = None
        self.checkpoint_data = {
            'processed_ids': [],
            'processed_count': 0,
            'last_updated': None
        }
        self.load_checkpoint()

    def connect_to_jira(self):
        """Establish connection to Jira with retry logic"""
        max_retries = 3
        retry_count = 0
        
        while retry_count < max_retries:
            try:
                self.jiraconnector = JiraConnector(self.secureforcejira, self.logobject)
                self.logobject.info("Successfully logged into SecureForce Jira")
                return True
            except Exception as e:
                retry_count += 1
                wait_time = 2 ** retry_count  # Exponential backoff
                self.logobject.warning(f"Jira connection attempt {retry_count} failed. Retrying in {wait_time}s. Error: {e}")
                time.sleep(wait_time)
        
        self.logobject.error(f"Failed to connect to Jira after {max_retries} attempts.")
        return False

    def load_checkpoint(self):
        """Load checkpoint data if exists"""
        if os.path.exists(CONFIG['CHECKPOINT_FILE']):
            try:
                with open(CONFIG['CHECKPOINT_FILE'], 'r') as f:
                    self.checkpoint_data = json.load(f)
                    self.processed_ids = set(self.checkpoint_data['processed_ids'])
                    self.logobject.info(f"Loaded checkpoint with {len(self.processed_ids)} processed tickets")
            except Exception as e:
                self.logobject.error(f"Failed to load checkpoint: {e}")

    def save_checkpoint(self):
        """Save current progress to checkpoint file"""
        self.checkpoint_data['processed_ids'] = list(self.processed_ids)
        self.checkpoint_data['last_updated'] = datetime.now().isoformat()
        
        try:
            with open(CONFIG['CHECKPOINT_FILE'], 'w') as f:
                json.dump(self.checkpoint_data, f)
            self.logobject.info(f"Saved checkpoint with {len(self.processed_ids)} processed tickets")
        except Exception as e:
            self.logobject.error(f"Failed to save checkpoint: {e}")

    def adjust_workers(self):
        """Dynamically adjust worker count based on system resources"""
        cpu_percent = psutil.cpu_percent()
        memory_percent = psutil.virtual_memory().percent
        
        # Reduce workers if system is under heavy load
        if cpu_percent > CONFIG['CPU_THRESHOLD'] or memory_percent > CONFIG['MEMORY_THRESHOLD']:
            if self.current_workers > CONFIG['MIN_WORKERS']:
                self.current_workers -= 1
                self.logobject.info(f"Reducing workers to {self.current_workers} due to high system load (CPU: {cpu_percent}%, Memory: {memory_percent}%)")
        # Increase workers if system has capacity
        elif cpu_percent < CONFIG['CPU_THRESHOLD'] * 0.7 and memory_percent < CONFIG['MEMORY_THRESHOLD'] * 0.7:
            if self.current_workers < CONFIG['MAX_WORKERS']:
                self.current_workers += 1
                self.logobject.info(f"Increasing workers to {self.current_workers} due to available resources (CPU: {cpu_percent}%, Memory: {memory_percent}%)")
        
        return self.current_workers

    def update_ticket_with_retry(self, issue):
        """Update a Jira ticket with retry logic for failures"""
        # Skip if already processed
        if issue.key in self.processed_ids:
            self.logobject.debug(f"Skipping already processed issue {issue.key}")
            return 0
        
        retry_count = 0
        while retry_count < CONFIG['MAX_RETRIES']:
            try:
                fields = {"Raised due to": "PIAM"}
                self.jiraconnector.update_issue(issue, fields)
                self.processed_ids.add(issue.key)
                self.checkpoint_data['processed_count'] += 1
                
                # Save checkpoint at intervals
                if self.checkpoint_data['processed_count'] % CONFIG['CHECKPOINT_INTERVAL'] == 0:
                    self.save_checkpoint()
                    
                elapsed = datetime.now() - self.start_time
                rate = self.checkpoint_data['processed_count'] / max(elapsed.total_seconds(), 1)
                self.logobject.info(f"Updated issue {issue.key}: set Raised due to = PIAM (#{self.checkpoint_data['processed_count']}, {rate:.2f} tickets/sec)")
                return 1
            except Exception as e:
                retry_count += 1
                
                # Check for rate limiting
                if "rate limit" in str(e).lower() or "too many requests" in str(e).lower():
                    wait_time = CONFIG['RATE_LIMIT_DELAY'] + random.uniform(0, 5)
                    self.logobject.warning(f"Rate limited when updating {issue.key}. Waiting {wait_time:.1f}s")
                else:
                    wait_time = min(2 ** retry_count, 60)  # Exponential backoff capped at 60 seconds
                    self.logobject.warning(f"Failed to update issue {issue.key} (attempt {retry_count}/{CONFIG['MAX_RETRIES']}). Retrying in {wait_time}s. Error: {e}")
                
                time.sleep(wait_time)
        
        self.logobject.error(f"Failed to update issue {issue.key} after {CONFIG['MAX_RETRIES']} attempts.")
        return 0

    def process_tickets(self):
        """Process all matching tickets with pagination and dynamic workers"""
        jql_query = 'project = Test AND issuetype = "Platform Vulnerability" AND "Raised due to" != "PIAM"'
        self.start_time = datetime.now()
        processed_ticket_counter = 0
        start_at = 0
        
        try:
            # First query to get total count
            issues = self.jiraconnector.search_issue_test(jql_query, start_at, CONFIG['BATCH_SIZE'])
            total_issues = len(issues)
            self.logobject.info(f"Initial search found {total_issues} issues to process")
            print(f"Found {total_issues} issues to process")
            
            while issues:
                # Adjust worker count based on system load
                worker_count = self.adjust_workers()
                
                self.logobject.info(f"Processing batch of {len(issues)} issues with {worker_count} workers")
                with ThreadPoolExecutor(max_workers=worker_count) as executor:
                    futures = {executor.submit(self.update_ticket_with_retry, issue): issue for issue in issues}
                    for future in as_completed(futures):
                        result = future.result()
                        processed_ticket_counter += result
                
                # Get next batch using pagination
                start_at += len(issues)
                self.logobject.info(f"Fetching next batch starting at {start_at}")
                issues = self.jiraconnector.search_issue_test(jql_query, start_at, CONFIG['BATCH_SIZE'])
                
                # Progress update
                if issues:
                    percent_complete = (processed_ticket_counter / total_issues) * 100 if total_issues > 0 else 0
                    print(f"Progress: {processed_ticket_counter}/{total_issues} ({percent_complete:.1f}%)")
                    self.logobject.info(f"Progress: {processed_ticket_counter}/{total_issues} ({percent_complete:.1f}%)")
                
        except Exception as e:
            self.logobject.error(f"Failed during ticket processing: {e}")
        
        # Final checkpoint save
        self.save_checkpoint()
        return processed_ticket_counter

    def run(self):
        """Main execution method"""
        self.logobject.info('Enhanced Update Raised due to PIAM Script STARTED')
        print("Starting enhanced Jira update script")
        
        if not self.connect_to_jira():
            self.logobject.error("Could not connect to Jira. Exiting.")
            return 1
        
        start_time = datetime.now()
        processed_ticket_counter = 0
        
        try:
            processed_ticket_counter = self.process_tickets()
        except KeyboardInterrupt:
            self.logobject.warning("Script interrupted by user. Saving checkpoint and exiting.")
            self.save_checkpoint()
        except Exception as e:
            self.logobject.error(f"Failed to process tickets: {e}")
        
        end_time = datetime.now()
        duration = end_time - start_time
        avg_rate = processed_ticket_counter / max(duration.total_seconds(), 1)
        
        self.logobject.info(f"SCRIPT COMPLETE! Duration: {duration}")
        self.logobject.info(f"Tickets processed: {processed_ticket_counter}")
        self.logobject.info(f"Average processing rate: {avg_rate:.2f} tickets/second")
        
        print(f"Total processing time: {duration}")
        print(f"Tickets processed: {processed_ticket_counter}")
        print(f"Average rate: {avg_rate:.2f} tickets/second")
        
        return 0

def setup_signal_handlers(updater):
    """Setup handlers for graceful shutdown"""
    def signal_handler(sig, frame):
        print("\nReceived shutdown signal. Saving checkpoint before exit...")
        updater.save_checkpoint()
        sys.exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

if __name__ == '__main__':
    updater = JiraUpdater()
    setup_signal_handlers(updater)
    exit_code = updater.run()
    sys.exit(exit_code) 