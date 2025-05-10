"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the page component with proper default export
export default function BankingAppPage() {
  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                Finance
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Secure Mobile Banking Application
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                A secure, feature-rich mobile banking solution with biometric
                authentication and real-time transaction monitoring.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium">First National Bank</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="font-medium">9 months</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">
                    User Adoption
                  </p>
                  <p className="font-medium">+85%</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/eunita_ph.jpg?height=720&width=1280"
                alt="Banking App Interface"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-4">
                First National Bank needed a modern mobile banking solution to
                meet the evolving needs of their customers and stay competitive
                in the digital banking landscape. Their existing system was
                outdated, lacked security features, and offered a poor user
                experience.
              </p>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive mobile banking application with
                state-of-the-art security features, intuitive user interface,
                and a wide range of banking services. The app includes biometric
                authentication, real-time transaction monitoring, budgeting
                tools, and seamless integration with the bank's core systems.
              </p>
              <p className="text-muted-foreground">
                The solution has significantly improved customer satisfaction,
                increased mobile banking adoption, and reduced operational costs
                for the bank.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="bg-primary/5">
                  React Native
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  Node.js
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  GraphQL
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  AWS
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  OAuth 2.0
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  Biometrics API
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Biometric authentication</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Real-time transaction alerts</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Bill payment & transfers</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Budgeting & financial insights</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Mobile check deposit</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>ATM/branch locator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to modernize your financial services?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise in secure financial applications can
            help you deliver exceptional digital banking experiences to your
            customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/services/custom-software">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
