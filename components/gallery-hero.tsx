import { ArrowRight } from "lucide-react";

export default function GalleryHero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          System Aesthetics
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore our projects, team, office spaces, and events through our
          curated collection of images.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
