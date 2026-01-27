// src/mastra/test-transcription-step.ts
import { z } from "zod";
import { createWorkflow } from "@mastra/core/workflows";
import { transcriptionStep } from "../mastra/steps/transcriptionStep";
import { transcriptionSchema } from "../mastra/agents/audio";

// Wrap your step in a simple workflow
const transcriptionWorkflow = createWorkflow({
  id: "transcription-workflow",
  inputSchema: z.object({
    filePath: z.string(),
  }),
  outputSchema: transcriptionSchema,
})
  .then(transcriptionStep)
  .commit();

async function main() {
  const run = await transcriptionWorkflow.createRunAsync();

  const res = await run.start({
    inputData: {
      filePath: "Brian and Stewie Talk Suicide.mp3", // or your test file
    },
  });

  //   console.log(JSON.stringify(res, null, 2));

  //   if (res.status === "success") {
  //     console.log("Transcription result:", res.result);
  //   }
}

main().catch(console.error);
