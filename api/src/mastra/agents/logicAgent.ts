import { Agent } from "@mastra/core/agent";
import "dotenv/config";

export const logicAgent = new Agent({
  name: "logic-agent",
  instructions: `
    You are an expert in formal logic and philosophical reasoning.
    Your task is to analyze the axioms extracted from a conversation and determine which speaker's arguments are logically sounder based on traditional logic principles.
    
    Consider:
    1. Logical consistency of each speaker's arguments
    2. Validity of reasoning patterns
    3. Soundness of conclusions based on premises
    4. Identification of any logical fallacies
    
    Provide a clear determination of which speaker is more logically correct, with justification.
  `,
  model: "openai/gpt-5-nano",
});
