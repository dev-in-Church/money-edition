"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define the page component with proper default export
export default function EducationalPlatformPage() {
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
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Education</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Adaptive Learning Platform
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                A personalized educational platform that adapts to each student's learning style and pace, resulting in
                a 42% improvement in learning outcomes.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium">National Education Group</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="font-medium">8 months</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <p className="text-sm text-muted-foreground mb-1">Users</p>
                  <p className="font-medium">250,000+</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Educational Platform Dashboard"
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
                The National Education Group needed a modern, adaptive learning platform to replace their outdated
                system that couldn't keep up with evolving educational needs. Students were disengaged, and educators
                lacked insights into student performance.
              </p>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive educational platform that personalizes content based on individual learning
                styles, progress, and goals. The system uses AI to identify knowledge gaps and adjust difficulty levels
                in real-time, keeping students challenged but not overwhelmed.
              </p>
              <p className="text-muted-foreground">
                The platform includes interactive lessons, gamification elements, progress tracking, and a robust
                analytics dashboard for educators to monitor class and individual performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="bg-primary/5">
                  React
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  Node.js
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  GraphQL
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  AWS
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  WebSockets
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Adaptive learning paths</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Real-time progress tracking</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Interactive content creation tools</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Gamification elements</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Parent/teacher portal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>The client faced several challenges with their existing educational system:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>One-size-fits-all approach that didn't address individual learning needs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Low student engagement and high dropout rates</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Limited insights into student performance and knowledge gaps</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Difficulty scaling content creation across multiple subjects</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Poor integration with existing school management systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We developed a comprehensive solution that addressed each challenge:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>AI-powered learning paths that adapt to each student's strengths and weaknesses</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Gamification elements including points, badges, and leaderboards to boost engagement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Advanced analytics dashboard with predictive insights for educators</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Content creation platform with templates and collaborative tools</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>API-first architecture for seamless integration with existing systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Implementation Process</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold mb-2">Discovery & Research</h3>
              <p className="text-sm text-muted-foreground">
                Conducted extensive research with students, teachers, and administrators to understand pain points and
                requirements.
              </p>
            </Card>

            <Card className="p-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold mb-2">Design & Prototyping</h3>
              <p className="text-sm text-muted-foreground">
                Created interactive prototypes and conducted usability testing with actual students and teachers.
              </p>
            </Card>

            <Card className="p-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">
                Built the platform using agile methodology with bi-weekly releases and continuous feedback.
              </p>
            </Card>

            <Card className="p-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">4</span>
              </div>
              <h3 className="font-bold mb-2">Deployment & Training</h3>
              <p className="text-sm text-muted-foreground">
                Rolled out the platform in phases with comprehensive training for all stakeholders.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-primary/5">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Results & Impact</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">42%</h3>
              <p className="text-muted-foreground">Improvement in learning outcomes</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">68%</h3>
              <p className="text-muted-foreground">Increase in student engagement</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">35%</h3>
              <p className="text-muted-foreground">Reduction in dropout rates</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">250k+</h3>
              <p className="text-muted-foreground">Active users</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">89%</h3>
              <p className="text-muted-foreground">Teacher satisfaction rate</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">5x</h3>
              <p className="text-muted-foreground">Return on investment</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="rounded-full overflow-hidden w-20 h-20">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Dr. Sarah Johnson"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div>
                <blockquote className="text-lg italic mb-4">
                  "This platform has revolutionized how we teach and how our students learn. The adaptive technology
                  ensures every student gets the support they need, and the analytics give us unprecedented insights
                  into learning patterns. It's been transformative for our institution."
                </blockquote>
                <div>
                  <p className="font-bold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Chief Academic Officer, National Education Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Student Dashboard"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Learning Module"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Analytics Dashboard"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Content Creation Tool"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Mobile App View"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Gamification Elements"
                width={640}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=360&width=640"
                  alt="Healthcare System"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Healthcare</Badge>
                <h3 className="font-bold text-lg mb-2">Integrated Healthcare System</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A comprehensive EHR system with patient portal and telemedicine capabilities.
                </p>
                <Link href="/portfolio/healthcare-system">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=360&width=640"
                  alt="AI Recommendation Engine"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">AI</Badge>
                <h3 className="font-bold text-lg mb-2">AI Recommendation Engine</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Machine learning system that provides personalized content recommendations.
                </p>
                <Link href="/portfolio/ai-recommendation-engine">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=360&width=640"
                  alt="Mobile Fitness App"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Mobile</Badge>
                <h3 className="font-bold text-lg mb-2">Mobile Fitness App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cross-platform fitness tracking application with social features.
                </p>
                <Link href="/portfolio/mobile-fitness-app">
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your educational platform?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise in educational technology can help you create engaging, effective learning
            experiences for your students.
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
  )
}
