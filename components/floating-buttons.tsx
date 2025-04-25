"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MessageSquare,
  HelpCircle,
  ChevronUp,
  MessageCircle,
  ExternalLink,
  Phone,
} from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/+254795198141"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bg-[#25D366] text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Help Options Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="floating-button bg-primary text-primary-foreground">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem asChild>
            <Link
              href="/support"
              className="flex w-full cursor-pointer items-center"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Live Chat</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/support"
              className="flex w-full cursor-pointer items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>Help Center</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/contact"
              className="flex w-full cursor-pointer items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="floating-button bg-secondary text-secondary-foreground"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
