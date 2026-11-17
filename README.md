# CampusFlow

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</p>

<p align="center">
  <strong>Campus organization, communication, and student support in one place.</strong>
</p>

CampusFlow is a progressive campus management web application that brings schedules, appointments, faculty information, notifications, feedback, and chat support into one responsive experience.

It is built with React and TypeScript, powered by Supabase, and configured as a Progressive Web App (PWA) for installable, app-like use.

## Repository

- **GitHub:** https://github.com/KM-CODES23/campusflow-system
- **Default branch:** `main`
- **Original project:** https://github.com/CampusFlow-F/campusflow-system

> No public website URL is currently configured in the repository metadata.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Application Pages](#application-pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Supabase Setup](#supabase-setup)
- [Progressive Web App](#progressive-web-app)
- [Available Scripts](#available-scripts)
- [Development Notes](#development-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview

CampusFlow centralizes common academic life activities into a modern dashboard. It combines scheduling, campus navigation, faculty discovery, feedback, notifications, messaging, profile management, and authentication.

The application supports protected routes through a custom authentication provider and uses React Query for server-state management. Supabase provides authentication and database services, with SQL migrations stored in the repository.

## Key Features

### Campus Dashboard

- central landing dashboard
- schedule overview
- notifications and reminders
- profile access
- responsive navigation

### Scheduling and Appointments

- appointment scheduling interface
- schedule viewing
- campus schedule management components

### Faculty and Campus Support

- faculty directory
- map and location components
- Google Maps integration support
- campus chatbot assistance

### Communication and Feedback

- feedback submission system
- notification center
- push notification controls
- chatbot support interface

### Authentication

- sign-in and account creation through `/auth`
- authentication state provider
- protected route support
- profile menu and account controls

### Progressive Web App

- service worker registration
- installable PWA support
- app-like experience on supported devices
- PWA installation button

## Application Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Dashboard / Index | Main CampusFlow experience |
| `/auth` | Authentication | Sign in or create an account |
| `*` | Not Found | Fallback for unknown routes |

The main dashboard is composed of feature-rich components rather than a large number of separate routes.

## Main Components

- `AppointmentScheduler` — schedule and manage appointments
- `BackgroundSlideshow` — visual background experience
- `ChatBot` — conversational campus assistance
- `Dashboard` — main campus dashboard
- `FacultyDirectory` — faculty discovery and information
- `FeedbackSystem` — collect user feedback
- `GoogleMap` — Google Maps integration
- `MapComponent` — campus map experience
- `NotificationCenter` — campus and system notifications
- `PWAInstallButton` — prompt PWA installation
- `ProfileMenu` — authenticated user controls
- `ProtectedRoute` — restrict access to authenticated users
- `PushNotificationToggle` — enable or disable push notifications
- `ScheduleViewer` — display campus or personal schedules

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite 7
- React Router 6
- TanStack React Query
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React

### Backend and Data

- Supabase
- Supabase JavaScript client
- SQL migrations

### Forms and Validation

- React Hook Form
- Zod
- Hookform resolvers

### Additional UI

- Recharts
- Date-fns
- Sonner
- Embla Carousel
- Vaul
- Next Themes

## Project Structure

```text
campusflow-system/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── AppointmentScheduler.tsx
│   │   ├── BackgroundSlideshow.tsx
│   │   ├── ChatBot.tsx
│   │   ├── Dashboard.tsx
│   │   ├── FacultyDirectory.tsx
│   │   ├── FeedbackSystem.tsx
│   │   ├── GoogleMap.tsx
│   │   ├── MapComponent.tsx
│   │   ├── NotificationCenter.tsx
│   │   ├── PWAInstallButton.tsx
│   │   ├── ProfileMenu.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── PushNotificationToggle.tsx
│   │   └── ScheduleViewer.tsx
│   ├── config/
│   ├── hooks/
│   ├── integrations/
│   │   └── supabase/
│   ├── lib/
│   ├── pages/
│   │   ├── Auth.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── supabase/
│   ├── migrations/
│   └── config.toml
├── .env
├── components.json
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or Bun
- A Supabase project

### Clone the Repository

```bash
git clone https://github.com/KM-CODES23/campusflow-system.git
cd campusflow-system
```

### Install Dependencies

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

### Start the Development Server

```bash
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173
```

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Environment Variables

The repository includes a `.env` file, so copy or update it locally when configuring your own Supabase project. Typical Supabase Vite variables include:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For Google Maps or map-related functionality, also add any required public API configuration if it is introduced by the implementation:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Do not place service-role keys or private secrets in a Vite frontend environment variable. Vite variables prefixed with `VITE_` can be exposed to the browser.

## Supabase Setup

CampusFlow includes Supabase configuration and SQL migrations under:

```text
src/integrations/supabase/
supabase/migrations/
supabase/config.toml
```

### Apply Database Migrations

If you have the Supabase CLI installed:

```bash
supabase login
supabase link --project-ref your-project-ref
supabase db push
```

The migration directory contains schema changes for the application. Review the SQL before applying it to a new or existing project.

### Authentication

The app uses an authentication provider and protected route component. Supabase Auth must be enabled and configured for the site URL used during development or deployment.

Typical configuration:

- enable email/password authentication
- add `http://localhost:5173` to allowed local URLs
- configure production redirect URLs
- enable row-level security for application tables

## Progressive Web App

`src/App.tsx` registers `/sw.js` as a service worker when the app loads.

The PWA provides:

- install button support
- app-like browser behavior
- service worker registration
- offline or cached access when configured by the service worker

Additional PWA files or icons should be placed in `public/` and referenced consistently in `index.html` and the service worker configuration.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Development Notes

- React Query is created once in `src/App.tsx` and used through a provider.
- Application-wide notifications use both Sonner and the custom toaster component.
- Routing uses React Router and includes a catch-all not-found page.
- Authentication state is managed under `src/hooks/useAuth`.
- Supabase integration files are located under `src/integrations/supabase`.
- UI primitives are organized under `src/components/ui`.
- Tailwind theme styles are maintained through the project CSS and configuration files.

## Security Recommendations

Before deploying CampusFlow:

- keep Supabase secrets outside the browser
- enable Supabase Row Level Security
- review all database policies
- restrict allowed authentication redirect URLs
- protect sensitive tables and storage buckets
- do not commit real private keys or service-role credentials
- add `.env` to `.gitignore` if it is not already ignored
- rotate credentials if they have been exposed in Git history

## Roadmap

Potential next improvements:

- add role-based student, lecturer, and administrator dashboards
- expand course and timetable management
- improve real-time notifications
- complete push notification backend setup
- integrate campus events and announcements
- improve chatbot knowledge and conversation history
- add map route navigation
- add end-to-end tests
- add CI/CD deployment
- improve PWA offline behavior
- add automated database backup and restore documentation

## Contributing

1. Fork the repository
2. Create a feature branch:

```bash
git checkout -b feature/campusflow-improvement
```

3. Make and test your changes
4. Commit the changes:

```bash
git add .
git commit -m "Improve CampusFlow feature"
```

5. Push the branch:

```bash
git push origin feature/campusflow-improvement
```

6. Open a pull request

## License

No license is currently included in the repository. Add a `LICENSE` file before reusing or distributing the project under an explicit open-source license.

## Author

**KM-CODES23**

- GitHub: https://github.com/KM-CODES23
- Repository: https://github.com/KM-CODES23/campusflow-system
