"use client";

import { useEffect, useState } from "react";
import { Layers } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative">
        <div className="absolute -inset-10 animate-pulse rounded-full bg-primary/20 blur-xl"></div>
        <div className="relative flex flex-col items-center">
          <Layers className="h-16 w-16 text-primary animate-bounce" />
          <h1 className="mt-4 text-2xl font-bold money-text-gradient">
            eUNITA
          </h1>
          <p className="mt-2 text-muted-foreground">
            Loading amazing things...
          </p>
          <div className="mt-6">
            <LoadingSpinner size="lg" />
          </div>
          <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
