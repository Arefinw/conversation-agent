# GEMINI.md - Project Context

This file provides instructional context about the project for the Gemini AI assistant.

## Project Overview

This is a full-stack application designed for conversational AI analysis of audio files. The project is a monorepo with two main components: a `web` frontend and an `api` backend.

The application allows users to sign up, log in, and upload an audio file. The backend then processes this file through a multi-step AI workflow, including transcription, analysis, and logical determination. The user can then engage in a chat conversation with an AI agent to ask follow-up questions about the analysis.

### Core Technologies

-   **Frontend (`web/`):**
    -   Framework: Next.js 16 (App Router)
    -   UI: React, shadcn/ui, Tailwind CSS
    -   AI SDK: Vercel AI SDK (`@ai-sdk/react`)
    -   Authentication: `better-auth`
    -   Database ORM: Drizzle ORM

-   **Backend (`api/`):**
    -   Framework: Mastra (`@mastra/core`)
    -   Language: TypeScript
    -   AI: Google Gemini (`@google/genai`)
    -   Database ORM: Drizzle ORM
    -   Key Features: The Mastra framework orchestrates AI agents (`chatAgent`, `logicAgent`), workflows (`conversationWorkflow`), vector storage, and Retrieval-Augmented Generation (RAG).

-   **Database:**
    -   Engine: PostgreSQL
    -   Vector Search: `pgvector` extension

## Architecture

1.  **User Authentication:** The `web` app uses `better-auth` with a PostgreSQL database to manage users.
2.  **File Upload:** The user uploads an audio file through the Next.js frontend.
3.  **Workflow Trigger:** The frontend sends the file path to the `api` backend, triggering the `conversationWorkflow`.
4.  **AI Processing:**
    -   The workflow transcribes the audio.
    -   It runs an analysis step (`axiomStep`).
    -   It uses a Retrieval-Augmented Generation step (`RAGStep`).
    -   A final `logicStep` produces a determination.
5.  **Conversational Chat:** The results are displayed, and the user can start a conversation. The frontend `useChat` hook communicates with the `chatAgent` on the backend to provide follow-up answers.
6.  **Data Persistence:** Chat history, threads, and user data are stored in the PostgreSQL database. Vector embeddings for RAG are stored using `pgvector`.

## Building and Running

### Prerequisites

-   Node.js (>=22.13.0)
-   pnpm
-   Docker

### 1. Backend API (`api/`)

The API requires a running PostgreSQL database with the `pgvector` extension. A Docker Compose file is provided for convenience.

```bash
# Navigate to the api directory
cd api

# Start the postgres database in the background
docker-compose up -d

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

The API will be running on the port configured by the `mastra` framework (typically `http://localhost:4000`).

### 2. Frontend Web App (`web/`)

The web app requires the backend API to be running.

```bash
# Navigate to the web directory
cd web

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

The web application will be available at `http://localhost:3000`.

## Development Conventions

-   **Monorepo:** The project is structured as a monorepo with separate `api` and `web` packages.
-   **Database Migrations:** Drizzle Kit is used for database migrations. Schema changes should be made in `web/auth-schema.ts` and `api/...` (schema location for API is not explicitly defined but is managed by Mastra/Drizzle). Migrations are generated with `pnpm drizzle-kit generate` and should be applied manually or via a startup script.
-   **Styling:** The frontend uses Tailwind CSS and `shadcn/ui`. New components should follow existing conventions.
-   **AI Development:** The backend `mastra` framework uses a declarative, workflow-based approach. New AI capabilities should be added by creating or modifying "Steps" and chaining them in a "Workflow". Agents define the conversational logic.
-   **Environment Variables:** Both applications rely on `.env` files for configuration (e.g., `POSTGRES_URL`, `NEXT_PUBLIC_MASTRA_BASE_URL`). Refer to the source code for required variables.
