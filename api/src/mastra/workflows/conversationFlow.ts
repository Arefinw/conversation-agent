// src/mastra/workflows/conversation-workflow.ts
import { createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";
import { transcriptionStep } from "../steps/transcriptionStep";
import { RAGStep } from "../steps/RAGStep";
import { axiomStep } from "../steps/axiomStep";
import { logicStep } from "../steps/logicStep";

export const conversationWorkflow = createWorkflow({
  id: "conversation-workflow",
  inputSchema: z.object({
    fileUrl: z.string(),
    resourceId: z.string(), // Keep resourceId for potential future use or logging
  }),
  // Output is now just a success flag from the save step
  outputSchema: z.object({
    threadId: z.string(),
    resourceId: z.string(),
  }),
})
  .then(transcriptionStep)
  .then(axiomStep)
  .then(logicStep)
  .map(async ({ getStepResult, getInitData }) => {
    const transcriptionResult = await getStepResult("transcription-step");
    const axiomResult = await getStepResult("axiom-step");
    const logicResult = await getStepResult("logic-step");
    const init = await getInitData();

    return {
      fileUrl: init.fileUrl,
      conversationText: transcriptionResult.conversationText,
      analysis: axiomResult.analysis,
      reasoning: logicResult.reasoning,
      resourceId: init.resourceId,
    };
  })
  .then(RAGStep)
  .commit();
