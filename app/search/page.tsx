import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Search Results | eUNITA",
  description: "Search results for your query",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || "";

  // This would normally connect to your search API or database
  // For now, we'll just display a message with the search query

  return (
    <div className="container py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Search Results
        </h1>

        <p className="text-muted-foreground mb-8">
          Showing results for:{" "}
          <span className="font-medium text-foreground">"{query}"</span>
        </p>

        {/* In a real implementation, you would map through search results here */}
        <div className="bg-muted/40 rounded-lg p-8 text-center">
          <h2 className="text-xl font-medium mb-4">Search Functionality</h2>
          <p className="text-muted-foreground mb-4">
            This is a placeholder for search results. In a production
            environment, this would connect to your search API or database to
            display actual results for "{query}".
          </p>
          <p className="text-sm text-muted-foreground">
            To implement a full search solution, you could use:
          </p>
          <ul className="text-sm text-muted-foreground mt-2 space-y-1">
            <li>• Algolia</li>
            <li>• Elasticsearch</li>
            <li>• MeiliSearch</li>
            <li>• Or a custom database query solution</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
