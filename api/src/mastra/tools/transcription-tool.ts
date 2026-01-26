// src/mastra/tools/transcription-tool.ts
import { createTool } from "@mastra/core/tools";
import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
  Type,
} from "@google/genai";
import { z } from "zod";
import "dotenv/config";

// 1. Define the Output Schema (Reusing your existing Zod schema)
const transcriptionSchema = z.object({
  segments: z.array(
    z.object({
      speaker: z.string(),
      timestamp: z.string(),
      content: z.string(),
    }),
  ),
});

// 2. Create the Tool
export const geminiTranscribeTool = createTool({
  id: "gemini-transcription",
  description:
    "Uploads an audio file to Gemini, identifies speakers, timestamps, and transcribes text.",

  // Input: What the workflow/agent needs to provide
  inputSchema: z.object({
    fileUrl: z
      .string()
      .describe("The absolute or relative path to the audio file"),
  }),

  // Output: What the tool returns to the workflow/agent
  outputSchema: transcriptionSchema,

  // Execution Logic
  execute: async ({ context }) => {
    // Initialize Gemini (Ensure GOOGLE_API_KEY is in your .env)
    const ai = new GoogleGenAI({});

    // Upload file
    console.log(`Uploading file: ${context.fileUrl}...`);
    const myfile = await ai.files.upload({
      file: context.fileUrl,
      config: { mimeType: "audio/mp3" },
    });

    // Define the specific prompt
    const prompt = `
      Process the audio file and generate a detailed transcription.
      Requirements:
      1. Identify distinct speakers (e.g., Speaker 1, Speaker 2, or names if context allows).
      2. Provide accurate timestamps for each segment (Format: MM:SS).
      3. Detect the primary language of each segment.
    `;

    // Call the model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-09-2025",
      contents: createUserContent([
        createPartFromUri(myfile.uri!, myfile.mimeType!),
        prompt,
      ]),
      config: {
        responseMimeType: "application/json",
        // This is the Google-specific schema for the JSON mode
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            segments: {
              type: Type.ARRAY,
              description:
                "List of transcribed segments with speaker and timestamp.",
              items: {
                type: Type.OBJECT,
                properties: {
                  speaker: { type: Type.STRING },
                  timestamp: { type: Type.STRING },
                  content: { type: Type.STRING },
                },
                required: ["speaker", "timestamp", "content"],
              },
            },
          },
          required: ["segments"],
        },
      },
    });

    if (!response.text) {
      throw new Error("Empty response from Gemini");
    }

    // Parse and return
    const jsonResponse = JSON.parse(response.text);

    return jsonResponse;
  },
});
