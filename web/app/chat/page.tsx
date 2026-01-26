"use client";

import "@/app/globals.css";
import { useState, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { useRouter } from "next/navigation"; // 1. Import router
import { authClient } from "@/lib/auth-client"; // 2. Import auth client

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

export default function ChatPage() {
  const router = useRouter();
  // 3. Add state to track authentication status
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [input, setInput] = useState("");

  // 4. Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await authClient.getSession();

        if (!data) {
          // If no session, redirect to login
          router.push("/login");
        } else {
          // If session exists, stop loading and show chat
          setIsCheckingAuth(false);
        }
      } catch (error) {
        // Fallback for network errors
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: process.env.NEXT_PUBLIC_MASTRA_BASE_URL + "/chat",
    }),
  });

  const handleSubmit = async () => {
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  // 5. Show a loading screen while checking auth
  if (isCheckingAuth) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // 6. Render the Chat UI only after auth is confirmed
  return (
    <div className="w-full p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message: any) => (
              <div key={message.id}>
                {message.parts?.map((part: any, i: number) => {
                  if (part.type === "text") {
                    return (
                      <Message key={`${message.id}-${i}`} from={message.role}>
                        <MessageContent>
                          <MessageResponse>{part.text}</MessageResponse>
                        </MessageContent>
                      </Message>
                    );
                  }

                  if (part.type?.startsWith("tool-")) {
                    return (
                      <Tool key={`${message.id}-${i}`}>
                        <ToolHeader
                          type={part.type}
                          state={part.state || "output-available"}
                          className="cursor-pointer"
                        />
                        <ToolContent>
                          <ToolInput input={part.input || part.args || {}} />
                          <ToolOutput
                            output={part.output || part.result}
                            errorText={part.errorText || part.error}
                          />
                        </ToolContent>
                      </Tool>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
            <ConversationScrollButton />
          </ConversationContent>
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-20">
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e: any) => setInput(e.target.value)}
              className="md:leading-10"
              value={input}
              placeholder="Type your message..."
              disabled={status !== "ready"}
            />
          </PromptInputBody>
        </PromptInput>
      </div>
    </div>
  );
}
