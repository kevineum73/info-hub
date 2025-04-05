# InfoHub - Knowledge Sharing Platform

A modern information sharing website inspired by platforms like Stack Overflow, Quora, and Medium.

## Project Vision

InfoHub aims to be a comprehensive platform where users can:
- Ask questions and get expert answers
- Share valuable knowledge through articles
- Create and participate in topical communities
- Find and bookmark quality content

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: TailwindCSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Content**: Markdown support for rich content

## Project Structure

```
info-hub/
├── app/                 # Next.js app directory
│   ├── api/             # API routes
│   ├── components/      # UI components
│   ├── utils/           # Utility functions
├── public/              # Static assets
├── prisma/              # Database schema
```

## Features Roadmap

### Phase 1: Core Functionality
- User authentication (sign up, login, profile)
- Question & Answer system
- Basic article publishing
- Content search
- User profiles

### Phase 2: Enhanced Features
- Community spaces
- Reputation system
- Comments and discussions
- Tags and categories
- Bookmarking

### Phase 3: Advanced Features
- Content moderation tools
- Analytics dashboard
- Notifications system
- API for third-party integrations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
