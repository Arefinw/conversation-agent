import { useState } from "react";
import { UploadCloud, Loader2, FileAudio, ArrowUp } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

interface UploadUIProps {
  onUploadComplete: (url: string, fileName: string) => Promise<void>;
  isProcessing: boolean;
}

export function UploadUI({ onUploadComplete, isProcessing }: UploadUIProps) {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Convex mutations
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const getFileUrl = useMutation(api.files.getFileUrl);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  const processFile = async (file: File) => {
    setIsUploading(true);
    try {
      // 1. Get a secure URL to upload the file to
      const uploadUrl = await generateUploadUrl();

      // 2. Upload the file to the secure URL
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();

      // 3. Get the public URL of the uploaded file
      const url = await getFileUrl({ storageId });

      if (!url) {
        throw new Error("Could not get file URL.");
      }

      // 4. Pass the URL to the parent component
      await onUploadComplete(url, file.name);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("File upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const isBusy = isUploading || isProcessing;

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className={cn(
          "relative group flex flex-col items-center justify-center w-full rounded-2xl border transition-all duration-300 overflow-hidden",
          // Height and spacing
          "min-h-[160px] p-8",
          // Colors & Borders
          dragActive
            ? "border-primary bg-primary/5 ring-2 ring-primary/20"
            : "border-border bg-card hover:bg-muted/30 hover:border-primary/50",
          // Cursor
          isBusy ? "cursor-not-allowed opacity-80" : "cursor-pointer",
        )}
        onDragEnter={isBusy ? undefined : handleDrag}
        onDragLeave={isBusy ? undefined : handleDrag}
        onDragOver={isBusy ? undefined : handleDrag}
        onDrop={isBusy ? undefined : handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
          onChange={handleChange}
          accept="audio/*"
          disabled={isBusy}
        />

        <div className="flex flex-col items-center gap-4 text-center relative z-0">
          {/* Icon Circle */}
          <div
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
              isBusy
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110",
            )}
          >
            {isBusy ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : dragActive ? (
              <ArrowUp className="w-6 h-6 animate-bounce" />
            ) : (
              <FileAudio className="w-6 h-6" />
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-1">
            <p className="text-base font-medium text-foreground">
              {isUploading
                ? "Uploading audio..."
                : isProcessing
                  ? "Analyzing conversation..."
                  : "Upload Audio File"}
            </p>

            {!isBusy && (
              <p className="text-sm text-muted-foreground">
                <span className="hidden sm:inline">Drag and drop or </span>
                <span className="underline decoration-primary/50 underline-offset-2">
                  browse
                </span>
              </p>
            )}

            {/* Minimal file specs */}
            {!isBusy && (
              <p className="text-xs text-muted-foreground/60 mt-2">
                MP3, WAV, M4A up to 50MB
              </p>
            )}
          </div>
        </div>

        {/* Status Bar / Progress Indicator */}
        {isBusy && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted overflow-hidden">
            <div className="h-full bg-primary animate-progress-indeterminate origin-left" />
          </div>
        )}
      </div>

      {/* Contextual Info (Replaces the yellow box) */}
      {isProcessing && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse">
          <UploadCloud className="w-4 h-4" />
          <span>Generating transcriptions and analyzing logic...</span>
        </div>
      )}
    </div>
  );
}
