import { Agent } from "@mastra/core/agent";
import "dotenv/config";

export const axiomAgent = new Agent({
  name: "axiom-agent",
  instructions: `
    You are an expert analytical linguist. 
    Your goal is to analyze a transcription and extract the fundamental "axioms" or core claims 
    made by each speaker. List them clearly by speaker.
  `,
  model: "openai/gpt-5-nano",
});
