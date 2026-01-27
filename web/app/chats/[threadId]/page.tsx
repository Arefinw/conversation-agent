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

        const currentUserID = data.user.id;
        setUserId(currentUserID);

        // Fetch all threads for the sidebar
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads?resourceId=${currentUserID}`,
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
    id: threadId,
    transport: new DefaultChatTransport({
      api: process.env.NEXT_PUBLIC_MASTRA_BASE_URL + "/chat",
      prepareSendMessagesRequest({ messages }) {
        // FIX: Read userId (resource) from the last message's metadata
        // This mirrors the working logic in your ChatsDashboardPage
        const lastMessage = messages[messages.length - 1];
        const metadata = lastMessage?.metadata as
          | { resource?: string }
          | undefined;

        return {
          body: {
            messages,
            memory: {
              thread: threadId,
              // Use the metadata value passed in sendMessage, fallback to "unknown"
              resource: metadata?.resource || "unknown",
            },
          },
        };
      },
    }),
    onFinish: () => {
      // Refresh threads to update "Last Updated" times
      if (userId) {
        const refreshThreads = async () => {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads?resourceId=${userId}`,
          );
          if (res.ok) {
            const threadList = await res.json();
            setThreads(threadList);
          }
        };
        refreshThreads();
      }
    },
  });

  // -- 3. Fetch History for the current thread --
  useEffect(() => {
    if (!threadId || !userId) return;

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads/${threadId}`,
        );
        if (res.ok) {
          const data = await res.json();
          let messagesArray;

          if (Array.isArray(data)) {
            messagesArray = data;
          } else if (
            data &&
            typeof data === "object" &&
            Array.isArray(data.messages)
          ) {
            messagesArray = data.messages;
          } else if (
            data &&
            typeof data === "object" &&
            Array.isArray(data.data)
          ) {
            messagesArray = data.data;
          } else {
            console.warn("Unexpected API response format:", data);
            messagesArray = [];
          }

          if (messagesArray.length > 0) {
            const transformedHistory = messagesArray.map((m: any) => ({
              id: m.id,
              role: m.role || m.type || "assistant",
              parts: [
                {
                  type: "text",
                  text: m.content || m.text || m.message || JSON.stringify(m),
                },
              ],
            }));
            setMessages(transformedHistory);
          } else {
            // Welcome message if new
            if (messages.length === 0) {
              setMessages([
                {
                  id: "welcome-message",
                  role: "assistant",
                  parts: [
                    {
                      type: "text",
                      text: "This is a new conversation. Ask me anything about the conversation analysis!",
                    },
                  ],
                },
              ]);
            }
          }
        } else if (messages.length === 0) {
          setMessages([
            {
              id: "fetch-error",
              role: "assistant",
              parts: [{ type: "text", text: "Failed to load chat history." }],
            },
          ]);
        }
      } catch (e) {
        console.error("Failed to load history", e);
        if (messages.length === 0) {
          setMessages([
            {
              id: "exception-error",
              role: "assistant",
              parts: [
                {
                  type: "text",
                  text: "An error occurred while loading history.",
                },
              ],
            },
          ]);
        }
      }
    };

    fetchHistory();
  }, [threadId, userId, setMessages]);

  // -- 4. Handlers --
  const handleNewChat = () => {
    router.push("/chats");
  };

  const handleSelectThread = (selectedThreadId: string) => {
    router.push(`/chats/${selectedThreadId}`);
  };

  const handleSubmit = async () => {
    // FIX: Ensure userId exists before sending
    if (!input.trim() || !threadId || !userId) return;

    // FIX: Pass userId in metadata so transport can read it dynamically
    sendMessage({
      text: input,
      metadata: { resource: userId },
    });

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
