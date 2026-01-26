import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { createVectorQueryTool } from "@mastra/rag";
import { ModelRouterEmbeddingModel } from "@mastra/core";
import "dotenv/config";

const embedder = new ModelRouterEmbeddingModel("openai/text-embedding-3-small");

const vectorQueryTool = createVectorQueryTool({
  vectorStoreName: "pgStore",
  indexName: "conversation_rag",
  model: embedder,
  enableFilter: true,
});

export const chatAgent = new Agent({
  name: "chat-agent",
  instructions: `
    You are a knowledgeable assistant that has access to a complete analysis of a conversation.
    The analysis includes:
    1. The original transcription with timestamps and speakers
    2. The extracted axioms/claims from each speaker
    3. A logical judgment about which speaker's arguments are more sound
    
    Users may ask questions about:
    - Specific parts of the transcription
    - The axioms extracted from the conversation
    - The logical judgment and reasoning
    - Comparisons between speakers
    - Clarifications about the analysis
    
    Always refer back to the provided information when answering questions.
    If a question cannot be answered based on the provided information, politely say so.
  `,
  model: "openai/gpt-5-nano",
  memory: new Memory({
    options: {
      lastMessages: 20,
    },
  }),
  tools: { vectorQueryTool },
});
