// src/mastra/tests/test-full-workflow.ts
import { mastra } from "../mastra/index";

async function main() {
  const workflow = mastra.getWorkflow("conversationWorkflow");
  const run = await workflow.createRunAsync();

  const res = await run.start({
    inputData: {
      filePath: "Brian and Stewie Talk Suicide.mp3",
    },
  });

  const step = res.steps["RAG-step"];
  if (step.status === "success") {
    // Now TypeScript knows this is a StepSuccess, so .output exists
    const output = step.output;
    console.log("RAG step result", output);
  } else if (step.status == "failed") {
    // Here it's a StepFailure; no .output
    console.error(step.error);
  }

  if (res.status === "success") {
    console.log("Reasoning:", res.result.reasoning);
  }
}

main().catch(console.error);
