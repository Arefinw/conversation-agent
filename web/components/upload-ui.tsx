import { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
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
    <div className="flex-1 flex flex-col items-center justify-center h-full p-8 animate-in fade-in zoom-in duration-500">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-serif font-bold text-primary tracking-tight">
            Audio Analysis AI
          </h1>
          <p className="text-muted-foreground">
            Upload a recording to generate transcriptions, axioms, and logical
            determinations.
          </p>
        </div>

        <div
          className={cn(
            "relative group flex flex-col items-center justify-center w-full h-64 rounded-3xl border-2 border-dashed transition-all duration-300 bg-card/50",
            {
              "cursor-pointer": !isBusy,
              "cursor-not-allowed opacity-60": isBusy,
            },
            dragActive && !isBusy
              ? "border-primary bg-primary/5 scale-[1.02] shadow-lg"
              : "border-border hover:border-primary/50 hover:bg-card",
          )}
          onDragEnter={isBusy ? undefined : handleDrag}
          onDragLeave={isBusy ? undefined : handleDrag}
          onDragOver={isBusy ? undefined : handleDrag}
          onDrop={isBusy ? undefined : handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={handleChange}
            accept="audio/*"
            disabled={isBusy}
          />

          <div className="flex flex-col items-center gap-4 text-center p-6 transition-all">
            <div
              className={cn(
                "p-4 rounded-full bg-background shadow-sm ring-1 ring-border transition-transform duration-300",
                isBusy ? "animate-pulse" : "group-hover:-translate-y-1",
              )}
            >
              <Loader2
                className={cn("size-8 text-primary", {
                  "animate-spin": isBusy,
                  hidden: !isBusy,
                })}
              />
              <UploadCloud
                className={cn("size-8 text-primary", { hidden: isBusy })}
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg font-medium text-foreground">
                {isUploading
                  ? "Uploading..."
                  : isProcessing
                  ? "Analyzing Audio..."
                  : "Click to upload or drag and drop"}
              </p>
              <p className="text-sm text-muted-foreground">
                MP3, WAV, or M4A (Max 50MB)
              </p>
            </div>
          </div>
        </div>

        {isProcessing && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm rounded-lg border border-yellow-200 dark:border-yellow-800/50">
            Running conversation workflow... This includes transcription, vector
            embedding, and logical analysis.
          </div>
        )}
      </div>
    </div>
  );
}
