"use client";

import "@/app/globals.css";
import { useState, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { useRouter, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// AI Elements Imports
import {
  PromptInput,
  PromptInputBody,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";

import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";

import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";

export default function IndividualChatPage() {
  const router = useRouter();
  const params = useParams();
  const threadId = params.threadId as string;

  // -- State --
  const [userId, setUserId] = useState<string | null>(null);
  const [threads, setThreads] = useState<any[]>([]);
  const [input, setInput] = useState("");

  // -- 1. Auth & Initial Load --
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) return router.push("/login");
        setUserId(data.user.id);

        // Fetch all threads for the sidebar
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads?resourceId=${data.user.id}`,
        );
        if (res.ok) {
          const threadList = await res.json();
          setThreads(threadList);
        }
      } catch (e) {
        router.push("/login");
      }
    };
    init();
  }, [router]);

  // -- 2. AI SDK Hook --
  const { messages, setMessages, sendMessage, status, stop } = useChat({
    id: threadId, // Associate chat state with the thread ID
    transport: new DefaultChatTransport({
      api: process.env.NEXT_PUBLIC_MASTRA_BASE_URL + "/chat",
      body: {
        threadId: threadId,
        resourceId: userId,
      },
    }),
    onFinish: () => {
      // Optional: Refresh threads to update "Last Updated" times if needed
    },
  });

  // -- 3. Fetch History for the current thread --
  useEffect(() => {
    if (!threadId || !userId) return; // Ensure userId is available for the fetch

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads/${threadId}/messages`,
        );
        if (res.ok) {
          const history = await res.json();
          const transformedHistory = history.map((m: any) => ({
            id: m.id,
            role: m.role,
            parts: [
              {
                type: "text",
                text: m.content,
              },
            ],
            // Assuming Mastra messages are compatible or can be transformed
          }));
          setMessages(transformedHistory);
        } else if (messages.length === 0) {
          // If fetching fails and we have no messages, maybe show a loading message
          setMessages([
            {
              id: "initial-load",
              role: "assistant",
              parts: [
                {
                  type: "text",
                  text: "Loading analysis...",
                },
              ],
            },
          ]);
        }
      } catch (e) {
        console.error("Failed to load history", e);
      }
    };

    fetchHistory();
  }, [threadId, userId, setMessages]); // Add userId to dependencies

  // -- 4. Handlers --
  const handleNewChat = () => {
    router.push("/chats");
  };

  const handleSelectThread = (selectedThreadId: string) => {
    router.push(`/chats/${selectedThreadId}`);
  };

  const handleSubmit = async () => {
    if (!input.trim() || !threadId) return;
    sendMessage({ parts: [{ type: "text", text: input }] });
    setInput("");
  };

  // -- Render --

  if (!userId) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Sidebar */}
      <AppSidebar
        threads={threads}
        activeThreadId={threadId}
        onSelectThread={handleSelectThread}
        onNewChat={handleNewChat}
        className="h-full"
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        <Conversation className="flex-1 pb-32">
          <ConversationContent className="max-w-3xl mx-auto pt-8">
            {messages.map((message: any, index: number) => (
              <div key={message.id || index} className="mb-6">
                {/* Render Tools if any */}
                {message.parts?.map((part: any, i: number) => {
                  if (part.type?.startsWith("tool-")) {
                    return (
                      <Tool key={`${message.id}-${i}`}>
                        <ToolHeader
                          type={part.type}
                          state={part.state || "output-available"}
                        />
                        <ToolContent>
                          <ToolInput input={part.input || part.args || {}} />
                          <ToolOutput
                            output={part.output || part.result}
                            errorText={part.error}
                          />
                        </ToolContent>
                      </Tool>
                    );
                  }
                  return null;
                })}

                {/* Render Text */}
                {message.parts?.some((p: any) => p.type === "text") && (
                  <Message from={message.role}>
                    <MessageContent
                      className={cn(
                        "shadow-sm",
                        message.role === "user"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-card",
                      )}
                    >
                      <MessageResponse>
                        {
                          message.parts?.find((p: any) => p.type === "text")
                            ?.text
                        }
                      </MessageResponse>
                    </MessageContent>
                  </Message>
                )}
              </div>
            ))}
            <ConversationScrollButton className="bg-primary text-primary-foreground hover:bg-primary/90" />
          </ConversationContent>
        </Conversation>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background via-background to-transparent">
          <div className="max-w-3xl mx-auto">
            <PromptInput
              onSubmit={handleSubmit}
              className="bg-card border border-input shadow-lg rounded-xl overflow-hidden"
            >
              <PromptInputBody>
                <PromptInputTextarea
                  onChange={(e: any) => setInput(e.target.value)}
                  value={input}
                  placeholder="Ask follow-up questions about the analysis..."
                  disabled={status !== "ready"}
                  className="min-h-[50px] max-h-[200px] text-base"
                />
              </PromptInputBody>
            </PromptInput>
            <div className="text-center mt-2 text-xs text-muted-foreground">
              AI can make mistakes. Verify logical determinations.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
