"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await authClient.getSession();
        if (data?.user) {
          router.push("/chats");
        } else {
          router.push("/login");
        }
      } catch (error) {
        // In case of error, redirect to login
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Loader2 className="animate-spin h-10 w-10 text-primary" />
    </div>
  );
}
