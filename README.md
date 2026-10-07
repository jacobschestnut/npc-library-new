# NPC Library

NPC Library is a full-stack web application for creating, managing, and organizing NPCs for tabletop role-playing games. The application provides a centralized library for character data, allowing users to create detailed NPC profiles and record audio clips for character voices.

The project was built to explore full-stack application architecture, authentication, relational data modeling, cloud storage, and browser-based audio recording.

## Features

- **NPC Management**
  - Create, edit, and delete NPCs
  - Store detailed character information
  - Organize NPCs within a personal library
  - View individual NPC profiles

- **Authentication & Authorization**
  - User authentication through Supabase
  - User-specific NPC data
  - Row Level Security (RLS) policies to protect database records

- **Audio Recording**
  - Record NPC dialogue directly in the browser using the MediaRecorder API
  - Upload recorded audio to cloud storage
  - Associate audio clips with individual NPCs
  - Retrieve and play previously recorded clips

- **Responsive UI**
  - Responsive interface built with Tailwind CSS
  - Client-side React components for interactive functionality
  - Dynamic NPC library and profile views

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend & Database

- Next.js API Routes
- Supabase
  - PostgreSQL
  - Authentication
  - Row Level Security (RLS)

### Storage

- AWS S3
  - Audio file storage
  - Cloud-based retrieval of recorded audio

### Browser APIs

- MediaRecorder API
  - Captures microphone input
  - Generates audio files for upload

## Architecture

The application follows a full-stack Next.js architecture with Supabase providing authentication and relational database functionality.

```text
Next.js / React
      |
      v
Next.js API Routes
      |
      +----------------+
      |                |
      v                v
  Supabase           AWS S3
      |                |
 PostgreSQL        Audio Files
 Auth
 RLS