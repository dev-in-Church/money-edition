"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { galleryImages, type GalleryImage } from "@/lib/gallery-data";
import GalleryHero from "@/components/gallery-hero";
import GalleryFilter from "@/components/gallery-filter";
import GalleryGrid from "@/components/gallery-grid";
import GalleryModal from "@/components/gallery-modal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function GalleryClientPage() {
  const [mounted, setMounted] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Set mounted state on client side
  useEffect(() => {
    setMounted(true);
    setImages(galleryImages);
    setFilteredImages(galleryImages);
  }, []);

  // Filter images based on category and search query
  useEffect(() => {
    if (!mounted) return;

    let result = [...images];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((image) => image.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (image) =>
          image.title.toLowerCase().includes(query) ||
          image.description.toLowerCase().includes(query)
      );
    }

    setFilteredImages(result);
  }, [selectedCategory, searchQuery, images, mounted]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(12); // Reset visible count when changing category
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(12); // Reset visible count when searching
  };

  // Handle image click
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background animate-pulse"></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <GalleryHero />

      <section className="container mx-auto px-4 py-12">
        {/* Filters and search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <GalleryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 w-full md:w-[250px]"
            />
          </div>
        </div>

        {/* Gallery grid */}
        {filteredImages.length > 0 ? (
          <>
            <GalleryGrid
              images={filteredImages.slice(0, visibleCount)}
              onImageClick={handleImageClick}
            />

            {/* Load more button */}
            {visibleCount < filteredImages.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No images found</h3>
            <p className="text-muted-foreground">
              Try changing your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Image modal */}
      {selectedImage !== null && (
        <GalleryModal
          images={filteredImages}
          currentIndex={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
