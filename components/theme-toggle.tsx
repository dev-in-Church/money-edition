"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

// Import the client component with no SSR
const ThemeToggleClient = dynamic(
  () => import("./theme-toggle-client").then((mod) => mod.ThemeToggleClient),
  {
    ssr: false,
    loading: () => (
      <Button variant="ghost" size="icon" className="h-10 w-10">
        <span className="sr-only">Toggle theme</span>
      </Button>
    ),
  }
);

export function ThemeToggle() {
  // Return the client-only component
  return <ThemeToggleClient />;
}
