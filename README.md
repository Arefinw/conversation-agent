# Conversation Agent

This is a full-stack application designed for conversational AI analysis of audio files. The project is a monorepo with two main components: a `web` frontend and an `api` backend.

The application allows users to sign up, log in, and upload an audio file. The backend then processes this file through a multi-step AI workflow, including transcription, analysis, and logical determination. The user can then engage in a chat conversation with an AI agent to ask follow-up questions about the analysis.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](httpss://nodejs.org/) (>=22.13.0)
- [pnpm](httpss://pnpm.io/)
- [Docker](httpss://www.docker.com/)

### Installing

A step by step series of examples that tell you how to get a development env running

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/conversation-agent.git
    cd conversation-agent
    ```

2.  **Install dependencies for both frontend and backend:**

    ```bash
    pnpm install
    ```

## Running the application

You can run the frontend and backend separately or together using the root `package.json` scripts.

### Running the Backend (API)

The API requires a running PostgreSQL database with the `pgvector` extension. A Docker Compose file is provided for convenience.

1.  **Start the PostgreSQL database:**

    ```bash
    pnpm run docker:up
    ```

2.  **Run the API development server:**

    Navigate to the `api` directory and run the dev script:

    ```bash
    pnpm run dev
    ```

    Or from the root directory:

    ```bash
    pnpm --filter api run dev
    ```

    The API will be running on the port configured by the `mastra` framework (typically `http://localhost:4111`).

## Important Note for Frontend Development

For the frontend application (`web`) to function correctly, especially during development, you **must** run the Convex development server in a separate terminal. This sets up the local Convex environment for your frontend to interact with.

```bash
pnpm run convex:dev
```

### Running the Frontend (Web)

The web app requires the backend API to be running, and the Convex development server (`pnpm run convex:dev`) to be active in a separate terminal.

1.  **Run the web development server:**

    Navigate to the `web` directory and run the dev script:

    ```bash
    pnpm run dev
    ```

    Or from the root directory:

    ```bash
    pnpm --filter web run dev
    ```

    The web application will be available at `http://localhost:3000`.

### Running Both Concurrently

You can start both the API and the web development servers with a single command from the root directory.

**Important:** Ensure you have `pnpm run convex:dev` running in a separate terminal for the frontend to work correctly.

```bash
pnpm run dev
```

## Building for Production

To build both applications for production, run the following command from the root directory:

```bash
pnpm build
```

## Starting for Production

To start both applications in production mode, run the following command from the root directory:

```bash
pnpm start
```

This will start both the API and the web application. Make sure you have built the applications first.
