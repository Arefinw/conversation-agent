import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
  Type,
} from "@google/genai";
import { z } from "zod";
import "dotenv/config";

// Zod schema
export const transcriptionSchema = z.object({
  segments: z.array(
    z.object({
      speaker: z.string(),
      timestamp: z.string(),
      content: z.string(),
    }),
  ),
});

// Interface
// export interface TranscriptionSegment {
//   speaker: string;
//   timestamp: string;
//   content: string;
// }

// export interface TranscriptionResult {
//   segments: TranscriptionSegment[];
// }

type TranscriptionResult = z.infer<typeof transcriptionSchema>;

// Initiate gemini setup
const ai = new GoogleGenAI({});

// Prompt
const prompt = `
      Process the audio file and generate a detailed transcription.

      Requirements:
      1. Identify distinct speakers (e.g., Speaker 1, Speaker 2, or names if context allows).
      2. Provide accurate timestamps for each segment (Format: MM:SS).
      3. Detect the primary language of each segment.
    `;

/**
 * Uploads an audio file to Google Gemini and generates a structured transcription
 * with speaker identification and timestamps.
 *
 * @param filePath - The relative or absolute path to the .mp3 file on your local system.
 * @returns A Promise that resolves to a `TranscriptionResult` object containing the segments.
 *
 * @throws {Error} If the AI returns an empty response or fails to process the file.
 *
 * @example
 * ```ts
 * try {
 *   const data = await transcription("./meeting_recording.mp3");
 *
 *   data.segments.forEach(seg => {
 *     console.log(`${seg.timestamp} - ${seg.speaker}: ${seg.content}`);
 *   });
 * } catch (error) {
 *   console.error("Transcription failed:", error);
 * }
 * ```
 */
export async function transription(
  filePath: string,
): Promise<TranscriptionResult> {
  const myfile = await ai.files.upload({
    file: filePath,
    config: { mimeType: "audio/mp3" },
  });

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: createUserContent([
      createPartFromUri(myfile.uri!, myfile.mimeType!),
      prompt,
    ]),
    config: {
      responseMimeType: "application/json",
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
    throw new Error("Empty response");
  }

  // Parse the response text as JSON to get an actual object
  const jsonResponse = JSON.parse(response.text) as TranscriptionResult;
  // console.log(jsonResponse);
  // console.log(JSON.stringify(jsonResponse, null, 2));
  return jsonResponse;
}
