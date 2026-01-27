"use client";

import "@/app/globals.css";
import { useState, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import { UploadUI } from "@/components/upload-ui";
import { Loader2 } from "lucide-react";
import "dotenv/config";

export default function ChatsDashboardPage() {
  const router = useRouter();

  // -- State --
  const [userId, setUserId] = useState<string | null>(null);
  const [threads, setThreads] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // -- 1. Auth & Initial Load --
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) return router.push("/login");

        setUserId(data.user.id);

        // Fetch Threads for the sidebar
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

  // -- 2. Handlers --

  const handleNewChat = () => {
    // On this page, "New Chat" just ensures the upload UI is visible and ready.
    // Since it's always visible, this could be a no-op or reset any upload-specific state.
  };

  const handleSelectThread = (threadId: string) => {
    // When a thread is selected from the sidebar, navigate to its dedicated chat page.
    router.push(`/chats/${threadId}`);
  };

  // State to hold the current audio data
  const [currentAudioData, setCurrentAudioData] = useState("");

  const { error, status, sendMessage, messages, regenerate, stop } = useChat({
    transport: new DefaultChatTransport({
      api: process.env.NEXT_PUBLIC_MASTRA_BASE_URL + "/conversation",
      prepareSendMessagesRequest({ messages }) {
        const metadata = messages[messages.length - 1].metadata as {
          audioUrl?: string;
          userId?: string;
        };
        return {
          body: {
            inputData: {
              fileUrl: metadata.audioUrl,
              resourceId: metadata.userId,
            },
          },
        };
      },
    }),
  });

  const handleUploadComplete = async (audioUrl: string) => {
    if (!userId) return;
    setIsProcessing(true);

    try {
      console.log("audio url", audioUrl);
      console.log("user ID", userId);

      // Set the current audio data to be used by the transport
      setCurrentAudioData(audioUrl);

      // Send a simple message to trigger the conversation
      await sendMessage({
        text: `Process audio file: ${audioUrl}`,
        metadata: { audioUrl, userId },
      });

      // C. Redirect to the chat list page since the thread will be created by the backend
      router.push("/chats");
    } catch (error) {
      console.error(error);
      alert("Failed to process audio.");
      setIsProcessing(false);
    }
    // No need to set isProcessing to false if we are navigating away
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
        activeThreadId={null}
        onSelectThread={handleSelectThread}
        onNewChat={handleNewChat}
        className="h-full"
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        <UploadUI
          onUploadComplete={handleUploadComplete}
          isProcessing={isProcessing}
        />
      </main>
    </div>
  );
}
