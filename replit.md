# PIAP - Plataforma de Intermediação para Automação Personalizada

## Overview

PIAP is a platform that connects clients with electronic circuit developers and 3D designers to create personalized automation projects. The application is built as a full-stack web application using a modern tech stack with React frontend, Express backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for frontend bundling
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with CSS variables for theming

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server
- **API Structure**: RESTful endpoints for project requests
- **Error Handling**: Centralized error middleware

### Database Schema
The application uses two main entities:
- **Users**: Basic user authentication (username/password)
- **Project Requests**: Client project submissions with details like project type, budget, description, and timeline

### Key Features
- Landing page with hero section, about, how-it-works, and project form
- Project request submission form with validation
- Responsive design optimized for mobile and desktop
- Toast notifications for user feedback
- Portuguese language interface

## Data Flow

1. **Project Submission**: Users fill out a comprehensive form with project details
2. **Validation**: Client-side validation with Zod schemas, server-side validation on submission
3. **Storage**: Project requests stored in PostgreSQL via Drizzle ORM
4. **Retrieval**: API endpoints to fetch all projects or specific project by ID
5. **Error Handling**: Graceful error handling with user-friendly messages

## External Dependencies

### Production Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Extensive Radix UI component library
- **Form Handling**: React Hook Form with resolvers
- **Date Utilities**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database Migrations**: Drizzle Kit for schema management
- **Code Quality**: TypeScript strict mode enabled
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

The application is configured for deployment on Replit with:

### Development Environment
- **Port**: 5000 for local development
- **Hot Reload**: Vite dev server with HMR
- **Database**: Environment variable-based connection to PostgreSQL

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist` directory
- **Static Assets**: Express serves frontend build in production
- **Database**: Production PostgreSQL database via environment variables

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Auto-scaling**: Configured for autoscale deployment target
- **Environment**: Separate development and production configurations
- **Build Process**: npm run build creates production-ready assets

The architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining production readiness with optimized builds and scalable deployment configuration.