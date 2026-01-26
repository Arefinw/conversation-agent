import { Plus, MessageSquare, AudioWaveform } from "lucide-react";
import { cn } from "@/lib/utils";

interface Thread {
  id: string;
  title: string;
  createdAt: string;
}

interface AppSidebarProps {
  threads: Thread[];
  activeThreadId: string | null;
  onSelectThread: (id: string) => void;
  onNewChat: () => void;
  className?: string; // Added className prop
}

export function AppSidebar({
  threads,
  activeThreadId,
  onSelectThread,
  onNewChat,
  className, // Destructure className
}: AppSidebarProps) {
  return (
    <aside
      className={cn( // Apply className here
        "w-[260px] h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col shrink-0 transition-all duration-300",
        className,
      )}>
      {/* Header / New Chat */}
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 px-4 py-3 rounded-lg transition-all shadow-sm font-medium"
        >
          <Plus size={18} />
          <span>New Analysis</span>
        </button>
      </div>

      {/* Thread List */}
      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1 scrollbar-thin scrollbar-thumb-sidebar-accent">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          History
        </div>

        {threads.length === 0 && (
          <div className="text-sm text-muted-foreground px-4 py-4 text-center italic">
            No history yet.
          </div>
        )}

        {threads.map((thread) => (
          <button
            key={thread.id}
            onClick={() => onSelectThread(thread.id)}
            className={cn(
              "w-full text-left px-3 py-3 rounded-md text-sm truncate flex items-center gap-3 transition-all border border-transparent",
              activeThreadId === thread.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border shadow-sm font-medium"
                : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
            )}
          >
            <div className="bg-background/50 p-1.5 rounded-md border border-sidebar-border/50">
              <AudioWaveform size={14} className="opacity-70" />
            </div>
            <span className="truncate">{thread.title}</span>
          </button>
        ))}
      </div>

      {/* User Footer (Optional) */}
      <div className="p-4 border-t border-sidebar-border bg-sidebar/50">
        <div className="flex items-center gap-3 text-sm font-medium text-sidebar-foreground/80">
          <div className="size-8 rounded-full bg-gradient-to-tr from-sidebar-primary to-purple-400"></div>
          <div>User Account</div>
        </div>
      </div>
    </aside>
  );
}
