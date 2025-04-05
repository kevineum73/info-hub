# Script Documentation: Update "Raised due to" Field to PIAM

## Overview
This script identifies Jira tickets in the Test project that are Platform Vulnerabilities without "PIAM" in the "Raised due to" field, then updates them to set this field to "PIAM".

## Requirements
- Python 3.x
- Custom modules:
  - `/apps/common/connectors/secureforce_connector`
  - `/apps/common/logger/customapplog`
  - `/apps/common/notification/conf`

## Workflow
1. Connects to SecureForce Jira using production configuration
2. Searches for tickets matching criteria:
   - Project = Test
   - Issue type = "Platform Vulnerability"
   - "Raised due to" ≠ "PIAM"
3. Updates tickets in parallel (3 concurrent workers)
4. Continues until all matching tickets are processed
5. Logs progress and results

## Key Components

### Configuration
- Uses SecureForce Jira production configuration
- Custom logging via `customapplog`

### Main Functions
- `process_tickets()`: Orchestrates the ticket search and update process
- `update_raised_due_to(issue)`: Updates individual tickets

### Multithreading
- Uses `ThreadPoolExecutor` with 3 workers for concurrent processing
- Processes tickets in batches until none remain

### Error Handling
- Captures exceptions at multiple levels
- Logs errors with details
- Exits with code 1 if Jira connection fails

### Monitoring
- Logs start/end times and total duration
- Counts and reports successfully processed tickets
- Provides real-time updates on remaining issues

## Execution
Run the script directly: `python update_raised_due_to_PIAM.py` 