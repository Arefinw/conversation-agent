"use client";

import "@/app/globals.css";
import { useState, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { useRouter, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import { Loader2, User, Bot, ArrowUp } from "lucide-react";
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
        const lastMessage = messages[messages.length - 1];
        const metadata = lastMessage?.metadata as
          | { resource?: string }
          | undefined;

        return {
          body: {
            // FIX: Only send the latest user message.
            // The backend uses 'threadId' (in memory) to recall the rest.
            messages: [lastMessage],
            memory: {
              thread: threadId,
              resource: metadata?.resource || "unknown",
            },
          },
        };
      },
    }),
    onFinish: () => {
      if (userId) {
        const refreshThreads = async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads?resourceId=${userId}`,
            );
            if (res.ok) {
              const threadList = await res.json();
              setThreads(threadList);
            }
          } catch (error) {
            console.error("Failed to refresh threads:", error);
          }
        };
        refreshThreads();
      }
    },
  });

  // -- 3. Fetch History --
  useEffect(() => {
    if (!threadId || !userId) return;

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MASTRA_BASE_URL}/threads/${threadId}`,
        );
        if (res.ok) {
          const data = await res.json();
          console.log("Body JSON", data);
          let messagesArray = data.uiMessages || [];

          if (messagesArray.length > 0) {
            setMessages(messagesArray);
          } else {
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
    if (!input.trim() || !threadId || !userId) return;
    sendMessage({
      text: input,
      metadata: { resource: userId },
    });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // -- Render --

  if (!userId) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="animate-spin h-10 w-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="hidden md:block flex-shrink-0 h-full border-r border-sidebar-border bg-sidebar">
        <AppSidebar
          threads={threads}
          activeThreadId={threadId}
          onSelectThread={handleSelectThread}
          onNewChat={handleNewChat}
          className="h-full w-[260px]"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-background">
        {/* Scrollable Conversation Area */}
        <Conversation className="flex-1 overflow-y-auto">
          <ConversationContent className="max-w-3xl mx-auto px-4 pt-4 pb-40 space-y-8">
            {messages.map((message: any, index: number) => {
              const isUser = message.role === "user";
              return (
                <div key={message.id || index} className="group relative">
                  {/* Render Tools if any */}
                  {message.parts?.map((part: any, i: number) => {
                    if (part.type?.startsWith("tool-")) {
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="mb-4 pl-0 md:pl-12"
                        >
                          <Tool>
                            <ToolHeader
                              type={part.type}
                              state={part.state || "output-available"}
                            />
                            <ToolContent>
                              <ToolInput
                                input={part.input || part.args || {}}
                              />
                              <ToolOutput
                                output={part.output || part.result}
                                errorText={part.error}
                              />
                            </ToolContent>
                          </Tool>
                        </div>
                      );
                    }
                    return null;
                  })}

                  {/* Render Text Message */}
                  {message.parts?.some((p: any) => p.type === "text") && (
                    <div
                      className={cn(
                        "flex gap-4 w-full",
                        isUser ? "flex-row-reverse" : "flex-row",
                      )}
                    >
                      {/* Avatar */}
                      <div
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border",
                          isUser
                            ? "bg-muted text-muted-foreground border-transparent"
                            : "bg-primary text-primary-foreground border-primary",
                        )}
                      >
                        {isUser ? (
                          <User className="w-5 h-5" />
                        ) : (
                          <Bot className="w-5 h-5" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <Message
                        from={message.role}
                        className="flex-1 max-w-[85%]"
                      >
                        <MessageContent
                          className={cn(
                            "px-5 py-3.5 rounded-2xl shadow-sm text-base leading-relaxed",
                            isUser
                              ? "bg-secondary text-secondary-foreground rounded-tr-sm"
                              : "bg-card text-card-foreground border border-border rounded-tl-sm",
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
                    </div>
                  )}
                </div>
              );
            })}
          </ConversationContent>
          <ConversationScrollButton className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md bottom-32" />
        </Conversation>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background to-transparent pt-10 pb-6 px-4 z-20">
          <div className="max-w-3xl mx-auto space-y-3">
            <PromptInput
              className="relative w-full rounded-3xl border border-input bg-card shadow-lg ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all"
              onSubmit={handleSubmit}
            >
              <PromptInputBody className="relative flex w-full items-end p-3 pl-4">
                <PromptInputTextarea
                  onChange={(e: any) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  value={input}
                  placeholder="Ask follow-up questions about the analysis..."
                  disabled={status !== "ready"}
                  className="min-h-[24px] max-h-[200px] w-full resize-none bg-transparent py-3 text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  rows={1}
                />
                <div className="flex shrink-0 ml-3 pb-1">
                  <button
                    onClick={handleSubmit}
                    disabled={!input.trim() || status !== "ready"}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ease-in-out",
                      input.trim()
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                        : "bg-muted text-muted-foreground cursor-not-allowed",
                    )}
                  >
                    <ArrowUp className="w-5 h-5" />
                  </button>
                </div>
              </PromptInputBody>
            </PromptInput>

            <p className="text-center text-xs text-muted-foreground/60 font-medium">
              AI can make mistakes. Verify logical determinations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
