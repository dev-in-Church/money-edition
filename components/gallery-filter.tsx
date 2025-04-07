"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { galleryCategories } from "@/lib/gallery-data";
import {
  Monitor,
  Building2,
  Users,
  CalendarDays,
  Cpu,
  LayoutDashboard,
  ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Map of category icons
const categoryIcons: Record<string, React.ReactNode> = {
  all: <ImageIcon className="h-4 w-4 mr-2" />,
  projects: <LayoutDashboard className="h-4 w-4 mr-2" />,
  office: <Building2 className="h-4 w-4 mr-2" />,
  team: <Users className="h-4 w-4 mr-2" />,
  events: <CalendarDays className="h-4 w-4 mr-2" />,
  technology: <Cpu className="h-4 w-4 mr-2" />,
  workspace: <Monitor className="h-4 w-4 mr-2" />,
};

export default function GalleryFilter({
  selectedCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {galleryCategories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "capitalize",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-muted"
          )}
        >
          {categoryIcons[category.id] || <ImageIcon className="h-4 w-4 mr-2" />}
          {category.label}
        </Button>
      ))}
    </div>
  );
}
