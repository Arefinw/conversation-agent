"use client";

import "@/app/globals.css";
import { useState, useEffect } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import { UploadUI } from "@/components/upload-ui";
import { Loader2, Sparkles } from "lucide-react";
import "dotenv/config";

// 1. Define the specific structure of your workflow data
type WorkflowStepResult = {
  steps: Record<
    string,
    {
      status: "success" | "failed" | "running";
      output: {
        threadId: string;
        resourceId: string;
      };
    }
  >;
};

// 2. Define a custom interface for the Mastra part to fix the TS error
interface MastraDataPart {
  type: "data-workflow";
  data: WorkflowStepResult;
}

export default function ChatsDashboardPage() {
  const router = useRouter();

  // -- State --
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [threads, setThreads] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // -- 1. Auth & Initial Load --
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) return router.push("/login");

        setUserId(data.user.id);
        setUserName(data.user.name || data.user.email);

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
  };

  const handleSelectThread = (threadId: string) => {
    router.push(`/chats/${threadId}`);
  };

  const handleLogout = async () => {
    await authClient.logout();
    router.push("/login");
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
    onFinish: (message) => {
      // A. Find the part with type 'data-workflow'
      const rawPart = message.message.parts.find(
        (part) => part.type === "data-workflow",
      );

      if (rawPart) {
        // B. Cast the generic part to our Mastra interface
        const workflowPart = rawPart as unknown as MastraDataPart;

        // C. Access the data exactly like the demo snippet
        const stepResult = workflowPart.data;
        const steps = Object.values(stepResult.steps);

        // D. Get the last step (which contains your final outputSchema)
        const lastStep = steps[steps.length - 1];

        // E. Validate and Redirect
        if (lastStep && lastStep.status === "success") {
          const { threadId, resourceId } = lastStep.output;

          if (threadId && resourceId) {
            console.log("✅ Workflow Output Received:", lastStep.output);
            router.push(`/chats/${threadId}`);
          }
        }
      }
    },
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
    } catch (error) {
      console.error(error);
      alert("Failed to process audio.");
      setIsProcessing(false);
    }
  };

  // -- Render --

  if (!userId) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground font-sans">
      {/* Sidebar - Wrapper to ensure strict sizing if AppSidebar relies on flex */}
      <div className="hidden md:block flex-shrink-0 h-full border-r border-sidebar-border bg-sidebar">
        <AppSidebar
          threads={threads}
          activeThreadId={null}
          onSelectThread={handleSelectThread}
          onNewChat={handleNewChat}
          onLogout={handleLogout}
          userName={userName}
          className="h-full w-[260px]" // Standard sidebar width
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-background">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl flex flex-col items-center space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
            {/* Greeting / Brand Header (Only show when not processing) */}
            {!isProcessing && (
              <div className="text-center space-y-3">
                <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What can I help you with?
                </h2>
                <p className="text-muted-foreground">
                  Upload an audio file to start a new conversation.
                </p>
              </div>
            )}

            {/* Upload Component */}
            <div className="w-full">
              <UploadUI
                onUploadComplete={handleUploadComplete}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
