# Project Plan: Conversational Audio Analysis Agent

### 1. Project Goal

The goal of this project is to create a web application that allows users to upload an audio file containing a conversation, receive a detailed AI-powered analysis, and then interact with that analysis in a conversational manner.

### 2. Core Components

*   **Frontend:** A Next.js application responsible for user authentication, file uploads, and rendering the chat interface.
*   **Backend API:** A `Mastra` framework-based application that handles the AI processing logic, including workflows and conversational agents.
*   **Database:** A PostgreSQL database with `pgvector` extension for storing user data, chat history, and vector embeddings for Retrieval-Augmented Generation (RAG).

### 3. High-Level User Flow

1.  **Authentication:** The user logs into the web application.
2.  **Upload:** The user is presented with an interface to upload an audio file.
3.  **Processing:** The system processes the audio file through a multi-step AI workflow. The UI will show a processing state.
4.  **Initial Analysis:** Upon completion, the UI displays a summary of the analysis in a new chat session.
5.  **Conversational Q&A:** The user can ask follow-up questions about the transcription, the analysis, or the logical conclusions, and receive answers from an AI chat agent.

### 4. Detailed Technical Workflow

This workflow is divided into two main phases: **Phase 1: Analysis Workflow** and **Phase 2: Conversational Interaction**.

---

#### **Phase 1: Analysis Workflow**

This phase begins when the user uploads an audio file and ends when the initial analysis is presented.

1.  **Trigger (Frontend - `UploadUI`)**:
    *   The user selects and uploads an audio file.
    *   The `handleUploadComplete` function in `page.tsx` is invoked.

2.  **Thread Creation (Frontend -> Backend)**:
    *   The frontend makes a `POST` request to the `/api/threads` endpoint on the backend.
    *   This creates a new chat thread associated with the user and the uploaded audio file, storing metadata.

3.  **Workflow Invocation (Frontend -> Backend - `conversationFlow.ts`)**:
    *   The frontend makes a `POST` request to the `/api/conversation` endpoint, passing the `filePath` of the audio.
    *   This invokes the `conversationWorkflow` on the Mastra backend.

4.  **Workflow Execution Steps (Backend)**:
    *   **Step A: `transcriptionStep`**: The audio file is transcribed into text, including speaker diarization and timestamps.
    *   **Step B: `axiomStep`**: The transcribed text is analyzed to extract key claims, arguments, or "axioms" made by each speaker.
    *   **Step C: `RAGStep`**: The transcription and extracted axioms are processed. Vector embeddings are generated and stored in the `pgStore` (PostgreSQL) in the `conversation_rag` index. This step populates the knowledge base that the chat agent will use later.
    *   **Step D: `logicStep`**: The system performs a higher-level logical analysis on the extracted axioms to form a judgment or conclusion about the conversation. The output is a structured `reasoning` string.

5.  **Displaying Results (Backend -> Frontend)**:
    *   The `conversationWorkflow` completes and returns the final output (e.g., `{ reasoning: "..." }`) to the frontend.
    *   The `handleUploadComplete` function constructs a new "assistant" message containing the analysis and updates the chat state, transitioning the UI to the active chat view.

---

#### **Phase 2: Conversational Interaction**

This phase begins after the initial analysis is displayed, allowing the user to ask questions.

1.  **User Input (Frontend)**:
    *   The user types a question into the `PromptInput` component.
    *   The `handleSubmit` function calls `sendMessage` from the `@ai-sdk/react` `useChat` hook.

2.  **API Request (Frontend -> Backend)**:
    *   The `useChat` hook sends the user's message and the conversation history to the `/chat` endpoint on the backend API.

3.  **Agent Invocation (Backend - `chatAgent.ts`)**:
    *   The `/chat` endpoint is routed to the `chatAgent`.

4.  **Agent Execution (Backend)**:
    *   **Instructions**: The `chatAgent` operates under the instruction to act as a knowledgeable assistant with full access to the conversation's analysis.
    *   **Context & Memory**: The agent receives the last 20 messages from the conversation history via its `Memory` configuration.
    *   **Tool Use (RAG)**: To answer the user's question, the `chatAgent` utilizes its `vectorQueryTool`. It formulates a search query based on the user's question and executes it against the `conversation_rag` index in `pgStore`. This retrieves the most relevant snippets from the original transcription and analysis.
    *   **LLM Prompting**: The agent combines its instructions, the conversation history, and the retrieved RAG context into a final prompt for the LLM (`openai/gpt-5-nano`).
    *   **Response Generation**: The LLM generates a response, which is streamed back to the frontend.

5.  **Displaying Response (Frontend)**:
    *   The `useChat` hook receives the streaming response from the agent and continuously updates the message content in the UI, providing a real-time conversational experience.
