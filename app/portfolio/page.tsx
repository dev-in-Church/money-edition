import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Portfolio | eUNITA",
  description: "Explore our portfolio of successful software development projects across various industries.",
}

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our successful projects and see how we've helped businesses transform with custom software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="mx-auto max-w-5xl">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise Software</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Solutions</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "E-commerce Platform",
                    category: "Web Development",
                    description: "A custom e-commerce solution with advanced inventory management for a retail chain.",
                    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
                    slug: "ecommerce-platform",
                  },
                  {
                    title: "Healthcare App",
                    category: "Mobile Development",
                    description:
                      "Patient management app for a leading healthcare provider with appointment scheduling and medical records.",
                    image: "/placeholder.svg?height=400&width=600&text=Healthcare+App",
                    slug: "healthcare-app",
                  },
                  {
                    title: "Financial Dashboard",
                    category: "Enterprise Software",
                    description:
                      "Real-time financial analytics dashboard for an investment firm with data visualization and reporting.",
                    image: "/placeholder.svg?height=400&width=600&text=Financial+Dashboard",
                    slug: "financial-dashboard",
                  },
                  {
                    title: "Logistics Management System",
                    category: "Enterprise Software",
                    description:
                      "End-to-end logistics and supply chain management system for a global shipping company.",
                    image: "/placeholder.svg?height=400&width=600&text=Logistics+System",
                    slug: "logistics-management",
                  },
                  {
                    title: "Real Estate Platform",
                    category: "Web Development",
                    description: "Property listing and management platform with virtual tours and agent portals.",
                    image: "/placeholder.svg?height=400&width=600&text=Real+Estate+Platform",
                    slug: "real-estate-platform",
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
                    title: "Cloud Migration",
                    category: "Cloud Solutions",
                    description:
                      "Migration of legacy systems to cloud infrastructure for a financial services company.",
                    image: "/placeholder.svg?height=400&width=600&text=Cloud+Migration",
                    slug: "cloud-migration",
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
                    title: "Educational Platform",
                    category: "Web Development",
                    description:
                      "Online learning platform with course management, video streaming, and student progress tracking.",
                    image: "/placeholder.svg?height=400&width=600&text=Educational+Platform",
                    slug: "educational-platform",
                  },
                ].map((project, index) => (
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
                    <CardFooter>
                      <Button variant="outline" asChild>
                        <Link href={`/portfolio/${project.slug}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Web Development */}
            <TabsContent value="web" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Web development projects */}
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=E-commerce+Platform"
                      alt="E-commerce Platform"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Web Development</Badge>
                    </div>
                    <CardTitle>E-commerce Platform</CardTitle>
                    <CardDescription>
                      A custom e-commerce solution with advanced inventory management for a retail chain.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/portfolio/ecommerce-platform">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Add more web development projects as needed */}
              </div>
            </TabsContent>

            {/* Mobile Apps */}
            <TabsContent value="mobile" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Mobile app projects */}
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Healthcare+App"
                      alt="Healthcare App"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Mobile Development</Badge>
                    </div>
                    <CardTitle>Healthcare App</CardTitle>
                    <CardDescription>
                      Patient management app for a leading healthcare provider with appointment scheduling and medical
                      records.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/portfolio/healthcare-app">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Add more mobile app projects as needed */}
              </div>
            </TabsContent>

            {/* Enterprise Software */}
            <TabsContent value="enterprise" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Enterprise software projects */}
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Financial+Dashboard"
                      alt="Financial Dashboard"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Enterprise Software</Badge>
                    </div>
                    <CardTitle>Financial Dashboard</CardTitle>
                    <CardDescription>
                      Real-time financial analytics dashboard for an investment firm with data visualization and
                      reporting.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/portfolio/financial-dashboard">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Add more enterprise software projects as needed */}
              </div>
            </TabsContent>

            {/* Cloud Solutions */}
            <TabsContent value="cloud" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Cloud solution projects */}
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Cloud+Migration"
                      alt="Cloud Migration"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Cloud Solutions</Badge>
                    </div>
                    <CardTitle>Cloud Migration</CardTitle>
                    <CardDescription>
                      Migration of legacy systems to cloud infrastructure for a financial services company.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/portfolio/cloud-migration">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Add more cloud solution projects as needed */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our custom software solutions can help you achieve your business goals.
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
  )
}
