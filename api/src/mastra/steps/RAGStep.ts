// src/mastra/steps/RAGStep.ts
import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { MDocument } from "@mastra/rag";
import { embedMany, generateId } from "ai";
import { ModelRouterEmbeddingModel } from "@mastra/core";
import { format } from "node:path";

export const RAGStep = createStep({
  id: "RAG-step",
  inputSchema: z.object({
    fileUrl: z.string(),
    conversationText: z
      .string()
      .describe("The screenplay-formatted transcript string"),
    analysis: z.string(),
    reasoning: z.string(),
    resourceId: z.string(),
  }),
  outputSchema: z.object({
    threadId: z.string(),
    resourceId: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    const { fileUrl, conversationText, analysis, reasoning, resourceId } =
      inputData;

    const chatAgent = mastra.getAgent("chatAgent");
    const memory = await chatAgent.getMemory();
    const thread = await memory?.createThread({ resourceId });
    const threadId = thread!.id!;

    const content = `# Conversation Analysis

## Conversation Text
${conversationText}

## Analysis
${analysis}

## Reasoning
${reasoning}
`;

    await memory?.saveMessages({
      messages: [
        {
          id: generateId(),
          type: "text",
          role: "assistant",
          content: {
            parts: [
              {
                type: "text",
                text: fileUrl,
              },
            ],
            format: 2,
          },
          createdAt: new Date(),
          threadId: threadId,
          resourceId: resourceId,
        },
      ],
    });
    await memory?.saveMessages({
      messages: [
        {
          id: generateId(),
          type: "text",
          role: "assistant",
          content: {
            parts: [
              {
                type: "text",
                text: content,
              },
            ],
            format: 2,
          },
          createdAt: new Date(),
          threadId: threadId,
          resourceId: resourceId,
        },
      ],
    });

    const doc = MDocument.fromText(conversationText);
    const chunks = await doc.chunk({
      strategy: "recursive",
      maxSize: 512,
      overlap: 50,
      separators: ["\n\n", "\n", " "],
    });

    const embeddingModel = new ModelRouterEmbeddingModel(
      "openai/text-embedding-3-small",
    );

    const { embeddings } = await embedMany({
      model: embeddingModel,
      values: chunks.map((chunk) => chunk.text),
    });

    const vectorStore = mastra.getVector("pgStore");
    const indexName = "conversation_rag";

    await vectorStore.createIndex({
      indexName: indexName,
      dimension: 1536,
    });

    await vectorStore.upsert({
      indexName: indexName,
      vectors: embeddings,
      metadata: chunks.map((chunk) => ({
        text: chunk.text,
        source: "conversation",
        threadId: threadId,
        resourceId: resourceId,
      })),
    });

    return {
      threadId: threadId,
      resourceId: resourceId,
    };
  },
});
