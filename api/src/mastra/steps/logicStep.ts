import { createStep } from "@mastra/core/workflows";
import { z } from "zod";

export const logicStep = createStep({
  id: "logic-step",
  inputSchema: z.object({
    conversationText: z
      .string()
      .describe("The screenplay-formatted transcript string"),
    analysis: z.string().describe("The axiom analysis from previous step"),
  }),
  outputSchema: z.object({
    reasoning: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    const { conversationText, analysis } = inputData;

    const logicAgent = mastra.getAgent("logicAgent");

    const response = await logicAgent.generate({
      role: "user",
      content: `Conversation:\n${conversationText}\n\nAxiom Analysis:\n${analysis}\n\nBased on traditional logic principles, determine which speaker's arguments are more logically sound and provide your reasoning.`,
    });

    // Parse the response to extract determination and reasoning
    // This is a simple approach - you might want to use a more sophisticated parsing method
    const responseText = response.text;

    // Simple extraction - in a real scenario, you might want to parse structured output
    return {
      reasoning: responseText,
    };
  },
});
