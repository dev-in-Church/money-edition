"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Calendar,
  MapPin,
  Tag,
} from "lucide-react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";

interface GalleryModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  onClose,
}: GalleryModalProps) {
  const [index, setIndex] = useState(currentIndex);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Safety check to prevent accessing undefined images
  if (!images || images.length === 0 || index >= images.length) {
    return null;
  }

  const currentImage = images[index];

  const handlePrevious = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext, onClose]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent
        className="max-w-[95vw] w-[1200px] p-0 overflow-hidden bg-background/95 backdrop-blur-sm"
        ref={dialogRef}
      >
        {/* Add DialogTitle for accessibility */}
        <DialogTitle className="sr-only">
          Image: {currentImage.title}
        </DialogTitle>

        <div className="flex flex-col md:flex-row h-[80vh]">
          {/* Image container */}
          <div className="relative flex-1 bg-black flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={
                  currentImage.src || "/placeholder.svg?height=800&width=1200"
                }
                alt={currentImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Info sidebar */}
          <div className="w-full md:w-[350px] p-6 overflow-y-auto border-l">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{currentImage.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-muted-foreground mb-6">
              {currentImage.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{formatDate(currentImage.date)}</span>
              </div>

              {currentImage.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{currentImage.location}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="capitalize">{currentImage.category}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-auto">
              <Button variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="text-xs text-muted-foreground mt-6 text-center">
              Image {index + 1} of {images.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
