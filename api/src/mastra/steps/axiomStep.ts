import { createStep } from "@mastra/core/workflows";
import { z } from "zod";

export const axiomStep = createStep({
  id: "axiom-step",
  inputSchema: z.object({
    conversationText: z
      .string()
      .describe("The screenplay-formatted transcript string"),
  }),
  outputSchema: z.object({
    analysis: z.string(),
    conversationText: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    const { conversationText } = inputData;

    const axiomAgent = mastra.getAgent("axiomAgent");

    const response = await axiomAgent.generate({
      role: "user",
      content: conversationText,
    });

    return { analysis: response.text, conversationText: conversationText };
  },
});
