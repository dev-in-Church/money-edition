"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Server,
  Shield,
  Users,
  Briefcase,
  FileText,
  Phone,
  ChevronDown,
  Menu,
  Home,
  Info,
  DollarSign,
  MessageSquare,
  Layers,
} from "lucide-react";

const mainNavItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Services",
    href: "#",
    icon: Layers,
    dropdown: true,
    items: [
      {
        title: "Web Development",
        href: "/services/web-development",
        icon: Globe,
        description: "Custom websites and web applications",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-development",
        icon: Smartphone,
        description: "iOS and Android applications",
      },
      {
        title: "Custom Software",
        href: "/services/custom-software",
        icon: Code,
        description: "Tailored software solutions",
      },
      {
        title: "Database Solutions",
        href: "/services/database-solutions",
        icon: Database,
        description: "Database design and optimization",
      },
      {
        title: "Cloud Services",
        href: "/services/cloud-services",
        icon: Cloud,
        description: "Cloud migration and management",
      },
      {
        title: "DevOps",
        href: "/services/devops",
        icon: Server,
        description: "Streamline your development pipeline",
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: Briefcase,
  },
  {
    title: "About",
    href: "#",
    icon: Info,
    dropdown: true,
    items: [
      {
        title: "Company",
        href: "/about",
        icon: Users,
        description: "eUNITA mission and values",
      },
      {
        title: "eUNITA Team",
        href: "/about/team",
        icon: Users,
        description: "eUNITA professionals",
      },
      {
        title: "Careers",
        href: "/about/careers",
        icon: Briefcase,
        description: "Join eUNITA team",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: DollarSign,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: FileText,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: MessageSquare,
  },
];

const secondaryNavItems = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    title: "Sitemap",
    href: "/sitemap",
  },
  {
    title: "Help & Support",
    href: "/support",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple scroll handler - just detect if we've scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      {/* Secondary Navigation - Always visible */}
      <div className="w-full border-b">
        <div className="container flex h-9 items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              <Shield className="mr-1 inline-block h-3 w-3" />
              ISO 27001 Certified
            </p>
            <p className="hidden text-xs text-muted-foreground md:block">
              <Phone className="mr-1 inline-block h-3 w-3" />
              +254 795 198 141
            </p>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-4">
              {secondaryNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "w-full bg-background",
          scrolled &&
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">eUNITA</span>
            </Link>
            <nav className="hidden md:flex md:gap-1 lg:gap-2">
              {mainNavItems.map((item, index) => {
                const Icon = item.icon;
                return !item.dropdown ? (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                ) : (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent",
                          pathname?.startsWith(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-[240px] lg:w-[320px]"
                    >
                      {item.items?.map((subItem, subIndex) => {
                        const SubIcon = subItem.icon;
                        return (
                          <DropdownMenuItem key={subIndex} asChild>
                            <Link
                              href={subItem.href}
                              className="flex flex-col items-start p-3"
                            >
                              <div className="flex items-center">
                                <SubIcon className="mr-2 h-4 w-4 text-primary" />
                                <span>{subItem.title}</span>
                              </div>
                              {subItem.description && (
                                <span className="ml-6 text-xs text-muted-foreground">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {/* Use the client-only ThemeToggle component */}
            <ThemeToggle />

            <Button asChild className="hidden md:flex">
              <Link href="/gallery">Gallery</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <Link href="/" className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  <span className="font-bold">eUNITA</span>
                </Link>
                <div className="mt-6 flex flex-col gap-4">
                  {mainNavItems.map((item, index) => {
                    const Icon = item.icon;
                    return !item.dropdown ? (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center text-sm font-medium"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </Link>
                    ) : (
                      <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center text-sm font-medium">
                          <Icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </div>
                        <div className="ml-6 flex flex-col gap-2 border-l pl-2">
                          {item.items?.map((subItem, subIndex) => {
                            const SubIcon = subItem.icon;
                            return (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="flex items-center text-sm"
                              >
                                <SubIcon className="mr-2 h-4 w-4 text-primary" />
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <Button asChild className="mt-2">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
                <div className="mt-6 border-t pt-4">
                  {mounted && (
                    <>
                      <p className="mb-2 text-xs font-medium mt-4">Legal</p>
                      {secondaryNavItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="mt-2 block text-xs text-muted-foreground hover:text-foreground"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
