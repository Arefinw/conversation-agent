// src/mastra/workflows/transcription-step.ts
import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { geminiTranscribeTool } from "../tools/transcription-tool";

export const transcriptionStep = createStep({
  id: "transcription-step",
  description: "Transcribe an audio file with Gemini and return segments.",
  inputSchema: z.object({
    fileUrl: z.string().describe("Path to the audio file"),
    resourceId: z.string(),
  }),
  outputSchema: z.object({
    conversationText: z
      .string()
      .describe("The screenplay-formatted transcript string"),
  }),
  execute: async ({ inputData, runtimeContext }) => {
    const { fileUrl, resourceId } = inputData;
    console.log("fileUrl", fileUrl);
    console.log("resourceId", resourceId);

    const result = await geminiTranscribeTool.execute({
      context: { fileUrl },
      runtimeContext,
    });

    const conversationText = result.segments
      .map((s) => `[${s.timestamp}] ${s.speaker}: ${s.content}`)
      .join("\n");

    return { conversationText };
  },
});
