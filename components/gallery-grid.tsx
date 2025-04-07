"use client";

import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <Card
          key={image.id}
          className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => onImageClick(index)}
        >
          <CardContent className="p-0 relative">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg mb-1 line-clamp-1">
                {image.title}
              </h3>

              <p className="text-white/80 text-sm line-clamp-2 mb-2">
                {image.description}
              </p>

              <div className="flex items-center text-white/70 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatDate(image.date)}</span>

                {image.location && (
                  <>
                    <span className="mx-2">•</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="truncate">{image.location}</span>
                  </>
                )}
              </div>
            </div>

            <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full capitalize">
              {image.category}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
