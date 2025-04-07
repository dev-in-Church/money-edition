"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search page with query parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 py-16 text-center">
      <div className="space-y-6 max-w-3xl">
        {/* Error code */}
        <h1 className="text-9xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          404
        </h1>

        {/* Error message */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h2>

        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>

        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Suggestions */}
        <div className="py-4">
          <h3 className="text-lg font-medium mb-3">You might want to:</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>• Check the URL for typos</li>
            <li>• Go back to the previous page</li>
            <li>• Visit our homepage</li>
            <li>• Contact our support team</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button variant="outline" size="lg" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft size={18} />
            Go Back
          </Button>

          <Button asChild size="lg" className="flex items-center gap-2">
            <Link href="/">
              <Home size={18} />
              Homepage
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>

        {/* Search box */}
        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="search"
              className="w-full p-4 pl-10 text-sm border rounded-lg bg-background border-input focus:ring-primary focus:border-primary"
              placeholder="Search our website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2.5 bottom-2.5">
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

