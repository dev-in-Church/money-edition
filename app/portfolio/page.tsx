"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Search,
  Filter,
  Briefcase,
  Code,
  Smartphone,
  Globe,
  Database,
  Server,
} from "lucide-react";

// Define project types
type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  industry: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
};

// Sample projects data
const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    category: "Web Development",
    industry: "Retail",
    description:
      "A comprehensive e-commerce solution with advanced product filtering, cart functionality, and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "2",
    title: "Healthcare Mobile App",
    slug: "healthcare-app",
    category: "Mobile Development",
    industry: "Healthcare",
    description:
      "Patient-centered mobile application for appointment scheduling, medical records access, and telemedicine consultations.",
    technologies: ["React Native", "Firebase", "Express", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "3",
    title: "Enterprise CRM System",
    slug: "enterprise-crm",
    category: "Custom Software",
    industry: "Business Services",
    description:
      "Customized customer relationship management system with advanced analytics and automation capabilities.",
    technologies: ["Angular", ".NET Core", "SQL Server", "Power BI"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "AI Recommendation Engine",
    slug: "ai-recommendation-engine",
    category: "Custom Software",
    industry: "E-commerce",
    description:
      "Machine learning-powered recommendation system that analyzes user behavior to suggest relevant products.",
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "5",
    title: "Educational Platform",
    slug: "educational-platform",
    category: "Web Development",
    industry: "Education",
    description:
      "Interactive learning platform with course management, progress tracking, and virtual classrooms.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Banking Mobile App",
    slug: "banking-app",
    category: "Mobile Development",
    industry: "Finance",
    description:
      "Secure mobile banking application with transaction management, budgeting tools, and biometric authentication.",
    technologies: ["Flutter", "Spring Boot", "PostgreSQL", "Plaid API"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "7",
    title: "Healthcare Management System",
    slug: "healthcare-system",
    category: "Custom Software",
    industry: "Healthcare",
    description:
      "Comprehensive healthcare management system for hospitals and clinics with patient records, billing, and resource management.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "8",
    title: "Financial Dashboard",
    slug: "financial-dashboard",
    category: "Web Development",
    industry: "Finance",
    description:
      "Real-time financial analytics dashboard with customizable widgets and reporting capabilities.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "9",
    title: "Logistics Management Platform",
    slug: "logistics-management",
    category: "Custom Software",
    industry: "Transportation",
    description:
      "End-to-end logistics management solution with route optimization, inventory tracking, and delivery management.",
    technologies: ["Angular", "Node.js", "MongoDB", "Google Maps API"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "10",
    title: "Real Estate Platform",
    slug: "real-estate-platform",
    category: "Web Development",
    industry: "Real Estate",
    description:
      "Property listing and management platform with virtual tours, appointment scheduling, and document management.",
    technologies: ["Next.js", "Strapi", "PostgreSQL", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "11",
    title: "Fitness Tracker App",
    slug: "fitness-tracker",
    category: "Mobile Development",
    industry: "Health & Fitness",
    description:
      "Comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "12",
    title: "Cloud Migration Project",
    slug: "cloud-migration",
    category: "Cloud Services",
    industry: "Technology",
    description:
      "Enterprise-level migration from on-premises infrastructure to cloud-based architecture with minimal downtime.",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "13",
    title: "Inventory Management System",
    slug: "inventory-management",
    category: "Custom Software",
    industry: "Retail",
    description:
      "Automated inventory management system with barcode scanning, stock alerts, and supplier management.",
    technologies: ["React", "Node.js", "MongoDB", "Redis"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "14",
    title: "Mobile Fitness App",
    slug: "mobile-fitness-app",
    category: "Mobile Development",
    industry: "Health & Fitness",
    description:
      "Personalized fitness application with AI-powered workout recommendations and nutrition tracking.",
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "Node.js"],
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [mounted, setMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter projects based on search term and active tab
  useEffect(() => {
    let result = projects;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          project.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeTab !== "all") {
      result = result.filter((project) => {
        if (activeTab === "featured") return project.featured;
        return project.category.toLowerCase() === activeTab.toLowerCase();
      });
    }

    setFilteredProjects(result);
  }, [searchTerm, activeTab]);

  // Get unique categories for tabs
  const categories = [
    "All",
    "Featured",
    "Web Development",
    "Mobile Development",
    "Custom Software",
    "Cloud Services",
  ];

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "web development":
        return <Globe className="h-4 w-4" />;
      case "mobile development":
        return <Smartphone className="h-4 w-4" />;
      case "custom software":
        return <Code className="h-4 w-4" />;
      case "cloud services":
        return <Server className="h-4 w-4" />;
      case "database solutions":
        return <Database className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  if (!mounted) {
    // Return a simple loading state
    return (
      <div className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our successful projects across various industries and
          technologies. Each case study demonstrates our expertise and
          commitment to delivering exceptional results.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter Options
        </Button>
      </div>

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.toLowerCase().replace(" ", "-")}
              value={category.toLowerCase().replace(" ", "-")}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 border"
            >
              {getCategoryIcon(category)}
              <span className="ml-2">{category}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="mb-2">
                      {getCategoryIcon(project.category)}
                      <span className="ml-1">{project.category}</span>
                    </Badge>
                    {project.featured && (
                      <Badge variant="secondary" className="mb-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.industry}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/portfolio/${project.slug}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help bring your vision to life with our
          expertise in software development.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
