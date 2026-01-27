import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { PostgresStore, PgVector } from "@mastra/pg";
import { chatRoute, workflowRoute } from "@mastra/ai-sdk";
import { registerApiRoute } from "@mastra/core/server";
import { axiomAgent } from "./agents/axiomAgent";
import { logicAgent } from "./agents/logicAgent";
import { chatAgent } from "./agents/chatAgent";
import { conversationWorkflow } from "./workflows/conversationFlow";
import "dotenv/config";

const storage = new PostgresStore({
  connectionString: process.env.POSTGRES_URL,
});

const pgStore = new PgVector({
  connectionString: process.env.POSTGRES_URL,
});

export const mastra = new Mastra({
  workflows: { conversationWorkflow },
  agents: { axiomAgent, logicAgent, chatAgent },
  storage,
  vectors: { pgStore },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  telemetry: {
    // Telemetry is deprecated and will be removed in the Nov 4th release
    enabled: false,
  },
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: { enabled: true },
  },
  server: {
    apiRoutes: [
      // GET: List all chats for the sidebar
      registerApiRoute("/threads", {
        method: "GET",
        handler: async (c) => {
          const mastra = c.get("mastra");
          const agent = mastra.getAgent("chatAgent");
          const memory = await agent.getMemory();

          const resourceId = c.req.query("resourceId");

          if (!resourceId) {
            return c.json({ error: "Missing resourceId" }, 400);
          }

          const threads = await memory?.getThreadsByResourceId({
            resourceId,
            orderBy: "createdAt",
            sortDirection: "DESC",
          });

          return c.json(threads ?? []);
        },
      }),

      // GET: Get messages for a thread
      registerApiRoute("/threads/:threadId", {
        method: "GET",
        handler: async (c) => {
          const mastra = c.get("mastra");
          const agent = mastra.getAgent("chatAgent");
          const memory = await agent.getMemory();
          const threadId = c.req.param("threadId");

          if (!threadId) {
            return c.json({ error: "Missing threadId" }, 400);
          }

          const messages = await memory?.query({
            threadId,
          });

          return c.json(messages ?? []);
        },
      }),

      chatRoute({
        path: "/chat",
        agent: "chatAgent",
      }),
      workflowRoute({
        path: "/conversation",
        workflow: "conversationWorkflow",
      }),
    ],
    middleware: [
      {
        path: "/chat*",
        handler: async (c, next) => {
          const runtimeContext = c.get("runtimeContext");

          if (c.req.method === "POST") {
            try {
              const clonedReq = c.req.raw.clone();
              const body = await clonedReq.json();

              if (body?.data) {
                for (const [key, value] of Object.entries(body.data)) {
                  runtimeContext.set(key, value);
                }
              }
            } catch {}
          }
          await next();
        },
      },
    ],
  },
});
