"use client";

import { useParams } from "next/navigation";
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
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  BarChart,
  Award,
} from "lucide-react";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  // This would normally come from a database or API
  const caseStudyData = getCaseStudyData(slug);

  if (!caseStudyData) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Case Study Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The case study you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="mt-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  {caseStudyData.category}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {caseStudyData.title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {caseStudyData.description}
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
                  src={
                    caseStudyData.mainImage ||
                    "/placeholder.svg?height=600&width=800"
                  }
                  alt={caseStudyData.title}
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
              <p className="text-muted-foreground">{caseStudyData.overview}</p>

              <h3 className="text-2xl font-bold tracking-tighter mt-6">
                The Challenge
              </h3>
              <p className="text-muted-foreground">{caseStudyData.challenge}</p>

              <h3 className="text-2xl font-bold tracking-tighter mt-6">
                Our Solution
              </h3>
              <p className="text-muted-foreground">{caseStudyData.solution}</p>
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
                        {caseStudyData.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Client</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudyData.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Completion Date</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudyData.completionDate}
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
                    {caseStudyData.technologies.map((tech, index) => (
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
              {caseStudyData.results.map((result, index) => (
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
      {caseStudyData.testimonial && (
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
                  {caseStudyData.testimonial.quote}
                </blockquote>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={
                      caseStudyData.testimonial.image ||
                      "/placeholder.svg?height=100&width=100"
                    }
                    alt={caseStudyData.testimonial.author}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium">
                    {caseStudyData.testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {caseStudyData.testimonial.position}
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
                Visual highlights from the {caseStudyData.title} project.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {caseStudyData.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={image.url || "/placeholder.svg?height=400&width=600"}
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
                Explore more case studies similar to {caseStudyData.title}.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudyData.relatedProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=400&width=600"
                      }
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

// Helper function to get case study data based on slug
function getCaseStudyData(slug: string) {
  // This would normally come from a database or API
  const caseStudies = {
    "ecommerce-platform": {
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
      mainImage:
        "/placeholder.svg?height=600&width=800&text=E-commerce+Platform",
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
    },
    "healthcare-app": {
      title: "Healthcare App",
      category: "Mobile Development",
      description:
        "Patient management app for a leading healthcare provider with appointment scheduling and medical records.",
      overview:
        "We developed a comprehensive healthcare application for a leading medical provider that allows patients to schedule appointments, access their medical records, communicate with healthcare professionals, and manage prescriptions.",
      challenge:
        "The client needed to modernize patient engagement while ensuring strict compliance with healthcare regulations including HIPAA. They wanted to reduce administrative overhead and improve patient satisfaction.",
      solution:
        "We built a secure, HIPAA-compliant mobile application using React Native with a Node.js backend. The app features end-to-end encryption for patient data, seamless integration with existing electronic health record systems, and an intuitive user interface.",
      mainImage: "/placeholder.svg?height=600&width=800&text=Healthcare+App",
      duration: "8 months",
      client: "HealthPlus Medical Group",
      completionDate: "November 2022",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Firebase",
        "Express",
        "OAuth 2.0",
      ],
      results: [
        {
          icon: "chart",
          value: "40%",
          label: "Reduction in missed appointments",
        },
        {
          icon: "check",
          value: "65%",
          label: "Increase in patient engagement",
        },
        { icon: "award", value: "4.8/5", label: "App store rating" },
      ],
      testimonial: {
        quote:
          "The mobile app developed by eUNITA has revolutionized how we interact with patients. User engagement has increased by 200% since launch, and our administrative staff can now focus on providing better care instead of managing appointments.",
        author: "Michael Chen",
        position: "Product Manager, HealthPlus Medical Group",
        image: "/placeholder.svg?height=100&width=100&text=MC",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Login+Screen",
          alt: "App login screen",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Appointment+Booking",
          alt: "Appointment booking interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Medical+Records",
          alt: "Medical records view",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Doctor+Chat",
          alt: "Doctor communication interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Prescription+Management",
          alt: "Prescription management",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Notifications",
          alt: "App notifications",
        },
      ],
      relatedProjects: [
        {
          title: "Fitness Tracker App",
          category: "Mobile Development",
          description:
            "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
          image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
          slug: "fitness-tracker",
        },
        {
          title: "Banking App",
          category: "Mobile Development",
          description:
            "Secure mobile banking application with transaction history, bill payments, and account management.",
          image: "/placeholder.svg?height=400&width=600&text=Banking+App",
          slug: "banking-app",
        },
        {
          title: "Educational Platform",
          category: "Web Development",
          description:
            "Online learning platform with course management, video streaming, and student progress tracking.",
          image:
            "/placeholder.svg?height=400&width=600&text=Educational+Platform",
          slug: "educational-platform",
        },
      ],
    },
    // Add more case studies as needed
    "financial-dashboard": {
      title: "Financial Dashboard",
      category: "Enterprise Software",
      description:
        "Real-time financial analytics dashboard for an investment firm with data visualization and reporting.",
      overview:
        "We developed a comprehensive financial analytics dashboard for a leading investment firm that provides real-time data visualization, portfolio management, and automated reporting capabilities.",
      challenge:
        "The client needed to consolidate financial data from multiple sources, provide real-time analytics for investment decisions, and generate comprehensive reports for clients and regulatory compliance.",
      solution:
        "We built a secure, scalable dashboard using React, D3.js, and a Node.js backend with a PostgreSQL database. The solution features real-time data processing, interactive visualizations, and automated report generation.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Financial+Dashboard",
      duration: "7 months",
      client: "Global Investments Ltd.",
      completionDate: "January 2023",
      technologies: [
        "React",
        "D3.js",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
      ],
      results: [
        { icon: "chart", value: "85%", label: "Reduction in reporting time" },
        {
          icon: "check",
          value: "45%",
          label: "Increase in data processing efficiency",
        },
        { icon: "award", value: "99.99%", label: "System reliability" },
      ],
      testimonial: {
        quote:
          "The financial dashboard developed by eUNITA has transformed how we analyze and present data to our clients. The real-time visualizations and automated reporting have saved countless hours and improved our decision-making process.",
        author: "Jennifer Morgan",
        position: "CIO, Global Investments Ltd.",
        image: "/placeholder.svg?height=100&width=100&text=JM",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
          alt: "Dashboard main view",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Portfolio+Analysis",
          alt: "Portfolio analysis screen",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Real-time+Charts",
          alt: "Real-time data visualization",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Report+Generation",
          alt: "Automated reporting interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Data+Integration",
          alt: "Data source integration",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Mobile+Dashboard",
          alt: "Mobile responsive dashboard",
        },
      ],
      relatedProjects: [
        {
          title: "Banking App",
          category: "Mobile Development",
          description:
            "Secure mobile banking application with transaction history, bill payments, and account management.",
          image: "/placeholder.svg?height=400&width=600&text=Banking+App",
          slug: "banking-app",
        },
        {
          title: "CRM System",
          category: "Enterprise Software",
          description:
            "Custom customer relationship management system for a sales team with pipeline management and analytics.",
          image: "/placeholder.svg?height=400&width=600&text=CRM+System",
          slug: "crm-system",
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
    },
    "logistics-management": {
      title: "Logistics Management System",
      category: "Enterprise Software",
      description:
        "End-to-end logistics and supply chain management system for a global shipping company.",
      overview:
        "We developed a comprehensive logistics management system for a global shipping company that handles route optimization, inventory tracking, delivery scheduling, and supply chain analytics.",
      challenge:
        "The client needed to modernize their logistics operations, reduce delivery times, optimize shipping routes, and provide real-time tracking for customers across their global network.",
      solution:
        "We built an integrated logistics platform using Angular, .NET Core, and SQL Server with microservices architecture. The system features real-time GPS tracking, AI-powered route optimization, and comprehensive analytics.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Logistics+Management",
      duration: "10 months",
      client: "Global Shipping Solutions",
      completionDate: "August 2022",
      technologies: [
        "Angular",
        ".NET Core",
        "SQL Server",
        "Redis",
        "Docker",
        "Kubernetes",
        "Azure",
        "Machine Learning",
      ],
      results: [
        { icon: "chart", value: "32%", label: "Reduction in delivery times" },
        { icon: "check", value: "28%", label: "Decrease in fuel costs" },
        { icon: "award", value: "99.8%", label: "On-time delivery rate" },
      ],
      testimonial: {
        quote:
          "The logistics management system developed by eUNITA has transformed our global shipping operations. We've seen a significant reduction in delivery times and operational costs while improving customer satisfaction through reliable tracking.",
        author: "Emily Rodriguez",
        position: "CTO, Global Shipping Solutions",
        image: "/placeholder.svg?height=100&width=100&text=ER",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Dashboard",
          alt: "Logistics dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Route+Optimization",
          alt: "Route optimization interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Tracking+Map",
          alt: "Real-time tracking map",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Inventory+Management",
          alt: "Inventory management",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Analytics",
          alt: "Supply chain analytics",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Mobile+Tracking",
          alt: "Mobile tracking application",
        },
      ],
      relatedProjects: [
        {
          title: "Inventory Management System",
          category: "Enterprise Software",
          description:
            "Comprehensive inventory system for a manufacturing company with barcode scanning and forecasting.",
          image: "/placeholder.svg?height=400&width=600&text=Inventory+System",
          slug: "inventory-management",
        },
        {
          title: "E-commerce Platform",
          category: "Web Development",
          description:
            "A custom e-commerce solution with advanced inventory management for a retail chain.",
          image:
            "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
          slug: "ecommerce-platform",
        },
        {
          title: "Delivery Tracking App",
          category: "Mobile Development",
          description:
            "Real-time package tracking app for a logistics company with barcode scanning and delivery confirmation.",
          image: "/placeholder.svg?height=400&width=600&text=Delivery+App",
          slug: "delivery-app",
        },
      ],
    },
    "real-estate-platform": {
      title: "Real Estate Platform",
      category: "Web Development",
      description:
        "Property listing and management platform with virtual tours and agent portals.",
      overview:
        "We developed a comprehensive real estate platform that allows property listings, virtual tours, agent management, and client communication for a national real estate agency.",
      challenge:
        "The client needed to modernize their property listing process, provide immersive virtual tours during the pandemic, and streamline communication between agents and potential buyers.",
      solution:
        "We built a feature-rich platform using React, Node.js, and MongoDB with 360° virtual tour integration, CRM functionality for agents, and an AI-powered property recommendation system.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Real+Estate+Platform",
      duration: "9 months",
      client: "National Realty Group",
      completionDate: "May 2022",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Three.js",
        "AWS",
        "Elasticsearch",
        "WebRTC",
      ],
      results: [
        {
          icon: "chart",
          value: "215%",
          label: "Increase in online property views",
        },
        { icon: "check", value: "45%", label: "Reduction in time-to-sale" },
        { icon: "award", value: "4.9/5", label: "Agent satisfaction rating" },
      ],
      testimonial: {
        quote:
          "The real estate platform developed by eUNITA has revolutionized how we showcase properties and connect with clients. The virtual tour feature became essential during the pandemic and continues to be a major competitive advantage.",
        author: "Alexandra Torres",
        position: "Director of Digital Strategy, National Realty Group",
        image: "/placeholder.svg?height=100&width=100&text=AT",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Property+Listings",
          alt: "Property listing page",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Virtual+Tour",
          alt: "360° virtual tour interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Agent+Portal",
          alt: "Agent management dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Property+Details",
          alt: "Detailed property information",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Client+Communication",
          alt: "Client messaging system",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Mobile+View",
          alt: "Mobile responsive design",
        },
      ],
      relatedProjects: [
        {
          title: "E-commerce Platform",
          category: "Web Development",
          description:
            "A custom e-commerce solution with advanced inventory management for a retail chain.",
          image:
            "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
          slug: "ecommerce-platform",
        },
        {
          title: "CRM System",
          category: "Enterprise Software",
          description:
            "Custom customer relationship management system for a sales team with pipeline management and analytics.",
          image: "/placeholder.svg?height=400&width=600&text=CRM+System",
          slug: "crm-system",
        },
        {
          title: "Educational Platform",
          category: "Web Development",
          description:
            "Online learning platform with course management, video streaming, and student progress tracking.",
          image:
            "/placeholder.svg?height=400&width=600&text=Educational+Platform",
          slug: "educational-platform",
        },
      ],
    },
    "fitness-tracker": {
      title: "Fitness Tracker App",
      category: "Mobile Development",
      description:
        "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
      overview:
        "We developed a feature-rich fitness tracking application that helps users track workouts, monitor nutrition, set goals, and connect with a community of fitness enthusiasts.",
      challenge:
        "The client needed a comprehensive fitness solution that would differentiate itself in a crowded market by offering personalized workout plans, accurate nutrition tracking, and engaging social features.",
      solution:
        "We built a cross-platform mobile app using Flutter with a Firebase backend. The app features machine learning for workout form analysis, integration with wearable devices, and gamification elements to increase user engagement.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Fitness+Tracker+App",
      duration: "7 months",
      client: "FitLife Technologies",
      completionDate: "April 2023",
      technologies: [
        "Flutter",
        "Firebase",
        "TensorFlow Lite",
        "Google Fit API",
        "Apple HealthKit",
        "Node.js",
        "MongoDB",
      ],
      results: [
        { icon: "chart", value: "1.2M+", label: "App downloads in first year" },
        { icon: "check", value: "68%", label: "User retention rate" },
        { icon: "award", value: "4.7/5", label: "App store rating" },
      ],
      testimonial: {
        quote:
          "eUNITA delivered a fitness app that exceeded our expectations in every way. The machine learning features for form correction and personalized workout recommendations have been particularly well-received by our users.",
        author: "Jason Kim",
        position: "CEO, FitLife Technologies",
        image: "/placeholder.svg?height=100&width=100&text=JK",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Dashboard",
          alt: "Fitness dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Workout+Tracking",
          alt: "Workout tracking interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Nutrition+Log",
          alt: "Nutrition logging",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Form+Analysis",
          alt: "Workout form analysis",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Social+Feed",
          alt: "Community social feed",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Progress+Charts",
          alt: "Progress visualization",
        },
      ],
      relatedProjects: [
        {
          title: "Healthcare App",
          category: "Mobile Development",
          description:
            "Patient management app for a leading healthcare provider with appointment scheduling and medical records.",
          image: "/placeholder.svg?height=400&width=600&text=Healthcare+App",
          slug: "healthcare-app",
        },
        {
          title: "Educational Platform",
          category: "Web Development",
          description:
            "Online learning platform with course management, video streaming, and student progress tracking.",
          image:
            "/placeholder.svg?height=400&width=600&text=Educational+Platform",
          slug: "educational-platform",
        },
        {
          title: "Banking App",
          category: "Mobile Development",
          description:
            "Secure mobile banking application with transaction history, bill payments, and account management.",
          image: "/placeholder.svg?height=400&width=600&text=Banking+App",
          slug: "banking-app",
        },
      ],
    },
    "cloud-migration": {
      title: "Cloud Migration",
      category: "Cloud Solutions",
      description:
        "Migration of legacy systems to cloud infrastructure for a financial services company.",
      overview:
        "We successfully migrated a financial services company's legacy on-premises infrastructure to a secure, scalable cloud environment, improving performance and reducing operational costs.",
      challenge:
        "The client needed to modernize their aging infrastructure while ensuring zero downtime, maintaining strict financial regulatory compliance, and improving disaster recovery capabilities.",
      solution:
        "We implemented a phased migration strategy using AWS, containerization with Docker and Kubernetes, and automated CI/CD pipelines. The solution included comprehensive security measures and real-time monitoring.",
      mainImage: "/placeholder.svg?height=600&width=800&text=Cloud+Migration",
      duration: "12 months",
      client: "Financial Services Inc.",
      completionDate: "December 2022",
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "ELK Stack",
        "Python",
        "Go",
      ],
      results: [
        {
          icon: "chart",
          value: "42%",
          label: "Reduction in infrastructure costs",
        },
        { icon: "check", value: "99.99%", label: "System availability" },
        { icon: "award", value: "85%", label: "Faster disaster recovery" },
      ],
      testimonial: {
        quote:
          "Their expertise in cloud migration saved us thousands in infrastructure costs while improving our system reliability and security. The eUNITA team handled the complex migration with minimal disruption to our operations.",
        author: "Emily Rodriguez",
        position: "CTO, Financial Services Inc.",
        image: "/placeholder.svg?height=100&width=100&text=ER",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Cloud+Architecture",
          alt: "Cloud architecture diagram",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Migration+Dashboard",
          alt: "Migration progress dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Monitoring+System",
          alt: "Real-time monitoring",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Security+Controls",
          alt: "Security implementation",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Performance+Metrics",
          alt: "Performance comparison",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Disaster+Recovery",
          alt: "Disaster recovery testing",
        },
      ],
      relatedProjects: [
        {
          title: "Financial Dashboard",
          category: "Enterprise Software",
          description:
            "Real-time financial analytics dashboard for an investment firm with data visualization and reporting.",
          image:
            "/placeholder.svg?height=400&width=600&text=Financial+Dashboard",
          slug: "financial-dashboard",
        },
        {
          title: "Serverless Architecture",
          category: "Cloud Solutions",
          description:
            "Implementation of serverless architecture for a high-traffic e-commerce platform.",
          image:
            "/placeholder.svg?height=400&width=600&text=Serverless+Architecture",
          slug: "serverless-architecture",
        },
        {
          title: "Microservices Implementation",
          category: "Cloud Solutions",
          description:
            "Transition from monolithic architecture to microservices for a SaaS platform.",
          image: "/placeholder.svg?height=400&width=600&text=Microservices",
          slug: "microservices",
        },
      ],
    },
    "inventory-management": {
      title: "Inventory Management System",
      category: "Enterprise Software",
      description:
        "Comprehensive inventory system for a manufacturing company with barcode scanning and forecasting.",
      overview:
        "We developed an advanced inventory management system for a manufacturing company that streamlines stock tracking, automates reordering, and provides predictive analytics for demand forecasting.",
      challenge:
        "The client was struggling with inventory discrepancies, stockouts, and excess inventory costs. They needed a solution that would provide real-time visibility across multiple warehouses and integrate with their existing ERP system.",
      solution:
        "We built a comprehensive inventory management system using .NET Core, SQL Server, and React with barcode/RFID scanning capabilities, automated reordering, and machine learning for demand forecasting.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Inventory+Management",
      duration: "8 months",
      client: "ManufactureCo Industries",
      completionDate: "July 2022",
      technologies: [
        ".NET Core",
        "SQL Server",
        "React",
        "TensorFlow",
        "Azure",
        "Power BI",
        "RFID",
        "Barcode Scanning",
      ],
      results: [
        { icon: "chart", value: "75%", label: "Reduction in inventory errors" },
        { icon: "check", value: "32%", label: "Decrease in carrying costs" },
        { icon: "award", value: "99.2%", label: "Inventory accuracy" },
      ],
      testimonial: {
        quote:
          "The inventory management system developed by eUNITA has streamlined our operations and reduced errors by 75%. It's been a game-changer for our business, allowing us to optimize stock levels and improve cash flow.",
        author: "Robert Martinez",
        position: "Supply Chain Director, ManufactureCo Industries",
        image: "/placeholder.svg?height=100&width=100&text=RM",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Dashboard",
          alt: "Inventory dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Barcode+Scanning",
          alt: "Barcode scanning interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Stock+Levels",
          alt: "Real-time stock levels",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Forecasting",
          alt: "Demand forecasting analytics",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Warehouse+Map",
          alt: "Warehouse mapping",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Mobile+Scanner",
          alt: "Mobile scanning application",
        },
      ],
      relatedProjects: [
        {
          title: "Logistics Management System",
          category: "Enterprise Software",
          description:
            "End-to-end logistics and supply chain management system for a global shipping company.",
          image: "/placeholder.svg?height=400&width=600&text=Logistics+System",
          slug: "logistics-management",
        },
        {
          title: "E-commerce Platform",
          category: "Web Development",
          description:
            "A custom e-commerce solution with advanced inventory management for a retail chain.",
          image:
            "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
          slug: "ecommerce-platform",
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
    },
    "educational-platform": {
      title: "Educational Platform",
      category: "Web Development",
      description:
        "Online learning platform with course management, video streaming, and student progress tracking.",
      overview:
        "We developed a comprehensive educational platform for a leading online learning provider that offers course creation tools, interactive learning experiences, and detailed analytics for educators and students.",
      challenge:
        "The client needed to create an engaging online learning environment that could support various content types, track student progress effectively, and provide meaningful analytics to improve course effectiveness.",
      solution:
        "We built a feature-rich platform using Next.js, Node.js, and PostgreSQL with video streaming capabilities, interactive assessments, and a robust analytics dashboard for educators.",
      mainImage:
        "/placeholder.svg?height=600&width=800&text=Educational+Platform",
      duration: "9 months",
      client: "EduTech Learning",
      completionDate: "June 2023",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "WebRTC",
        "AWS",
        "Redis",
        "Socket.io",
        "TensorFlow",
      ],
      results: [
        { icon: "chart", value: "87%", label: "Course completion rate" },
        {
          icon: "check",
          value: "65%",
          label: "Increase in student engagement",
        },
        { icon: "award", value: "4.9/5", label: "Educator satisfaction" },
      ],
      testimonial: {
        quote:
          "Working with eUNITA was a pleasure from start to finish. They understood our requirements perfectly and delivered a solution that exceeded our expectations. The platform has transformed how we deliver online education.",
        author: "Jennifer Lee",
        position: "Operations Manager, EduTech Learning",
        image: "/placeholder.svg?height=100&width=100&text=JL",
      },
      gallery: [
        {
          url: "/placeholder.svg?height=400&width=600&text=Course+Dashboard",
          alt: "Course dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Video+Streaming",
          alt: "Video streaming interface",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Interactive+Quizzes",
          alt: "Interactive assessments",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Progress+Tracking",
          alt: "Student progress tracking",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Analytics",
          alt: "Educator analytics dashboard",
        },
        {
          url: "/placeholder.svg?height=400&width=600&text=Mobile+Learning",
          alt: "Mobile learning experience",
        },
      ],
      relatedProjects: [
        {
          title: "Healthcare App",
          category: "Mobile Development",
          description:
            "Patient management app for a leading healthcare provider with appointment scheduling and medical records.",
          image: "/placeholder.svg?height=400&width=600&text=Healthcare+App",
          slug: "healthcare-app",
        },
        {
          title: "Fitness Tracker App",
          category: "Mobile Development",
          description:
            "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
          image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
          slug: "fitness-tracker",
        },
        {
          title: "E-commerce Platform",
          category: "Web Development",
          description:
            "A custom e-commerce solution with advanced inventory management for a retail chain.",
          image:
            "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
          slug: "ecommerce-platform",
        },
      ],
    },
  };

  return caseStudies[slug] || null;
}
