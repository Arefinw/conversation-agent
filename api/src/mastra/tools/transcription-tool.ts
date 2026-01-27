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
import fs from "fs";
import path from "path";
import { tmpdir } from "os";
import { pipeline } from "stream/promises";
import { createWriteStream } from "fs";

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

// Helper function to download a file from a URL
async function downloadFile(url: string): Promise<string> {
  // Import node-fetch dynamically to avoid issues in environments where it's not available
  const { default: fetch } = await import("node-fetch");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.statusText}`);
  }

  // Determine file extension from URL or content-type
  const contentType = response.headers.get("content-type") || "";
  let extension = ".mp3"; // default
  if (contentType.includes("audio/mpeg")) {
    extension = ".mp3";
  } else if (contentType.includes("audio/wav")) {
    extension = ".wav";
  } else if (contentType.includes("audio/m4a")) {
    extension = ".m4a";
  } else if (contentType.includes("audio/mp4")) {
    extension = ".mp4";
  }

  // Create a temporary file
  const filename = path.join(tmpdir(), `audio_${Date.now()}${extension}`);

  // Download and save the file
  await pipeline(response.body!, createWriteStream(filename));

  return filename;
}

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

    let tempFilePath: string | undefined;

    try {
      // Check if fileUrl is a remote URL or local path
      let filePath = context.fileUrl;

      if (context.fileUrl.startsWith("http://") || context.fileUrl.startsWith("https://")) {
        // Download the remote file to a temporary location
        console.log(`Downloading remote file: ${context.fileUrl}...`);
        tempFilePath = await downloadFile(context.fileUrl);
        filePath = tempFilePath;
        console.log(`Downloaded to temporary file: ${filePath}`);
      } else {
        // Local file path
        console.log(`Using local file: ${context.fileUrl}`);
      }

      // Determine the mime type based on the file extension or content type
      let mimeType = "audio/mpeg"; // default
      if (filePath.endsWith('.wav')) {
        mimeType = "audio/wav";
      } else if (filePath.endsWith('.m4a')) {
        mimeType = "audio/x-m4a";
      } else if (filePath.endsWith('.mp4')) {
        mimeType = "audio/mp4";
      }

      // Upload the file to Google AI
      console.log(`Uploading file: ${filePath} with mime type: ${mimeType}...`);
      const myfile = await ai.files.upload({
        file: filePath,
        config: { mimeType },
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
    } finally {
      // Clean up temporary file if it was created
      if (tempFilePath && fs.existsSync(tempFilePath)) {
        try {
          fs.unlinkSync(tempFilePath);
          console.log(`Cleaned up temporary file: ${tempFilePath}`);
        } catch (cleanupError) {
          console.error(`Failed to clean up temporary file: ${cleanupError}`);
        }
      }
    }
  },
});
