"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  BarChart,
  Award,
} from "lucide-react";

export default function EcommercePlatformCaseStudy() {
  const router = useRouter();

  // This would normally come from a database or API
  const caseStudy = {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A custom e-commerce solution with advanced inventory management for a retail chain.",
    overview:
      "We developed a comprehensive e-commerce platform for a retail chain with over 50 physical stores. The solution included advanced inventory management, multi-channel sales integration, and a customer loyalty program.",
    challenge:
      "The client needed to unify their online and offline sales channels, manage inventory across multiple locations, and provide a seamless shopping experience for customers. Their existing system was outdated and couldn't handle their growing business needs.",
    solution:
      "We built a custom e-commerce platform using React, Node.js, and MongoDB that integrated with their existing POS systems. The solution featured real-time inventory tracking, automated reordering, and a unified customer database.",
    mainImage: "/placeholder.svg?height=600&width=800&text=E-commerce+Platform",
    duration: "6 months",
    client: "RetailGiant Inc.",
    completionDate: "March 2023",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "Express",
      "AWS",
      "Stripe",
    ],
    results: [
      { icon: "chart", value: "150%", label: "Increase in online sales" },
      { icon: "check", value: "35%", label: "Reduction in inventory costs" },
      { icon: "award", value: "99.9%", label: "System uptime" },
    ],
    testimonial: {
      quote:
        "The e-commerce platform developed by eUNITA has transformed our retail business. Sales have increased by 150% in the first year, and our inventory management is now seamless across all channels.",
      author: "David Wilson",
      position: "Director of Digital, RetailGiant Inc.",
      image: "/placeholder.svg?height=100&width=100&text=DW",
    },
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600&text=Homepage",
        alt: "E-commerce homepage",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Product+Page",
        alt: "Product detail page",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Checkout",
        alt: "Checkout process",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
        alt: "Admin dashboard",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Inventory+Management",
        alt: "Inventory management",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Mobile+View",
        alt: "Mobile responsive design",
      },
    ],
    relatedProjects: [
      {
        title: "Real Estate Platform",
        category: "Web Development",
        description:
          "Property listing and management platform with virtual tours and agent portals.",
        image:
          "/placeholder.svg?height=400&width=600&text=Real+Estate+Platform",
        slug: "real-estate-platform",
      },
      {
        title: "Inventory Management System",
        category: "Enterprise Software",
        description:
          "Comprehensive inventory system for a manufacturing company with barcode scanning and forecasting.",
        image: "/placeholder.svg?height=400&width=600&text=Inventory+System",
        slug: "inventory-management",
      },
      {
        title: "Cloud Migration",
        category: "Cloud Solutions",
        description:
          "Migration of legacy systems to cloud infrastructure for a financial services company.",
        image: "/placeholder.svg?height=400&width=600&text=Cloud+Migration",
        slug: "cloud-migration",
      },
    ],
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  {caseStudy.category}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {caseStudy.title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {caseStudy.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Discuss a Similar Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">View More Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={caseStudy.mainImage || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={800}
                  height={600}
                  className="aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-3">
            <div className="grid gap-4 lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Project Overview
              </h2>
              <p className="text-muted-foreground">{caseStudy.overview}</p>

              <h3 className="text-2xl font-bold tracking-tighter mt-6">
                The Challenge
              </h3>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>

              <h3 className="text-2xl font-bold tracking-tighter mt-6">
                Our Solution
              </h3>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Project Duration</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Client</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Completion Date</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.completionDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Results & Impact
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Measurable outcomes and business impact delivered by our
                solution.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.results.map((result, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <CardHeader>
                    {result.icon === "chart" && (
                      <BarChart className="h-12 w-12 text-primary" />
                    )}
                    {result.icon === "check" && (
                      <CheckCircle className="h-12 w-12 text-primary" />
                    )}
                    {result.icon === "award" && (
                      <Award className="h-12 w-12 text-primary" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-4xl font-bold">
                      {result.value}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {result.label}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 text-6xl text-primary/10">
                  "
                </div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-primary/10">
                  "
                </div>
                <blockquote className="relative z-10 px-6 py-4 text-xl font-medium italic text-muted-foreground md:text-2xl">
                  {caseStudy.testimonial.quote}
                </blockquote>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={caseStudy.testimonial.image || "/placeholder.svg"}
                    alt={caseStudy.testimonial.author}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {caseStudy.testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Project Gallery
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Visual highlights from the {caseStudy.title} project.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {caseStudy.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    className="aspect-video object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Related Projects
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore more case studies similar to {caseStudy.title}.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.relatedProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/portfolio/${project.slug}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can create a similar solution for your
                business needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
