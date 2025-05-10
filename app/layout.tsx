import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingButtons from "@/components/floating-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eUNITA | Software Development Company",
  description:
    "Professional software development services for businesses of all sizes. Custom solutions, web development, mobile apps, and enterprise software.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/eunita_logo11.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
