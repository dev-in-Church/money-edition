import type { Metadata } from "next";
import GalleryClientPage from "./GalleryClientPage";

export const metadata: Metadata = {
  title: "eUNITA | Gallery",
  description:
    "Browse our collection of projects, team, office spaces, and events.",
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
