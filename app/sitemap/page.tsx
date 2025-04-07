import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | eUNITA",
  description:
    "Navigate through all pages of our website with our comprehensive sitemap.",
};

// Define the site structure for the sitemap
const siteStructure = [
  {
    title: "Main Pages",
    links: [
      { title: "Home", href: "/" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Pricing", href: "/pricing" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile Development", href: "/services/mobile-development" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "Database Solutions", href: "/services/database-solutions" },
      { title: "Cloud Services", href: "/services/cloud-services" },
      { title: "DevOps", href: "/services/devops" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "Our Company", href: "/about" },
      { title: "Our Team", href: "/about/team" },
      { title: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { title: "Help & Support", href: "/support" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Layers className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-muted-foreground">
            Find your way around our website with this comprehensive sitemap
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteStructure.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>
                  {section.links.length} page
                  {section.links.length !== 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="transition-colors hover:text-primary"
                    >
                      <Link href={link.href} className="block py-1">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
