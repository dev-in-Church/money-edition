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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Layers,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-16 md:pt-24 lg:pt-32">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  Trusted by 500+ companies worldwide
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Business with Custom Software Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We build innovative software that solves complex business
                  challenges and drives growth. From web and mobile apps to
                  enterprise systems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[
                    { image: "/svg/Apple.svg" },
                    { image: "/svg/AWS.svg" },
                    { image: "/svg/Google.svg" },
                    { image: "/svg/Twitter.svg" },
                  ].map((i) => (
                    <div
                      key={i.image}
                      className="inline-block h-8 w-8 p-1 overflow-hidden rounded-full border-2 border-background bg-white shadow-lg"
                    >
                      <Image
                        src={`${i.image}?height=32&width=32&text=${i}`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">4.9/5</span> from 200+ reviews
                </div>
              </div>
            </div>
            <div className="relative mx-auto aspect-video max-w-[600px] overflow-hidden rounded-xl border bg-background p-1 shadow-xl lg:ml-auto lg:p-2">
              <Image
                src="/images/services/hero1.jpg?height=600&width=800&text=Dashboard+Demo"
                alt="Product screenshot"
                width={800}
                height={600}
                className="aspect-video rounded-lg object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="text-sm font-medium">Watch our product demo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </section>

      {/* Clients Section */}
      <section className="border-y bg-muted/40 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight">
                Trusted by world-class innovative companies
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {[
                { image: "/svg/LinkedIn.svg" },
                { image: "/svg/AWS.svg" },
                { image: "/svg/Google.svg" },
                { image: "/svg/Twitter.svg" },
                { image: "/svg/Google-Cloud.svg" },
                { image: "/svg/Android.svg" },
                { image: "/svg/microsoft.svg" },
                { image: "/svg/Postman.svg" },
                { image: "/svg/Facebook.svg" },
                { image: "/svg/Sketch.svg" },
              ].map((i) => (
                <div key={i.image} className="flex items-center justify-center">
                  <Image
                    src={`${i.image}?height=64&width=64&text=Logo+${i}`}
                    alt={`Client Logo ${i}`}
                    width={34}
                    height={34}
                    className="h-9 w-9 sm:h-16 sm:w-16 object-cover"
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                End-to-End Software Development
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive software development services tailored to
                your business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Custom websites and web applications built with the latest
                  technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Progressive web apps</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/web-development">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>
                  Native and cross-platform mobile applications for iOS and
                  Android.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Native iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cross-platform solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>App store optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/mobile-development">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Custom Software</CardTitle>
                <CardDescription>
                  Tailored software solutions designed to address your specific
                  business challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Enterprise applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Integration solutions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/custom-software">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Database Solutions</CardTitle>
                <CardDescription>
                  Robust database design, optimization, and management services.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Database architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Data migration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/database-solutions">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>
                  Cloud migration, infrastructure setup, and management.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cloud migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Infrastructure as code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Serverless architecture</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/cloud-services">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>DevOps</CardTitle>
                <CardDescription>
                  Streamline your development pipeline with DevOps practices.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>CI/CD pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Containerization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Infrastructure monitoring</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/services/devops">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How We Work
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven development process ensures successful project
                delivery.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements and define project scope.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We create wireframes and prototypes for your approval.",
                icon: <Layers className="h-10 w-10 text-primary" />,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our engineers build your solution using agile methodologies.",
                icon: <Code className="h-10 w-10 text-primary" />,
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy, test, and provide ongoing support.",
                icon: <Zap className="h-10 w-10 text-primary" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <div className="absolute -top-2 left-0 right-0 text-center">
                  <span className="inline-block rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="absolute -right-4 top-10 hidden h-0.5 w-8 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Case Studies
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Impact Highlights
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how we've helped businesses transform with custom software
                solutions.
              </p>
            </div>
          </div>
          <Tabs defaultValue="all" className="mt-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "E-commerce Platform",
                    category: "Web Development",
                    description:
                      "A custom e-commerce solution with advanced inventory management.",
                    image:
                      "/apps/ap.png?height=400&width=600&text=E-commerce+Platform",
                  },
                  {
                    title: "Healthcare App",
                    category: "Mobile Development",
                    description:
                      "Patient management app for a leading healthcare provider.",
                    image:
                      "/apps/ap1.png?height=400&width=600&text=Healthcare+App",
                  },
                  {
                    title: "Financial Dashboard",
                    category: "Enterprise Software",
                    description:
                      "Real-time financial analytics dashboard for investment firm.",
                    image:
                      "/apps/ap2.png?height=400&width=600&text=Financial+Dashboard",
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
                        <Link href={`/portfolio/${index + 1}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "E-commerce Platform",
                    category: "Web Development",
                    description:
                      "A custom e-commerce solution with advanced inventory management.",
                    image:
                      "/apps/ap3.png?height=400&width=600&text=E-commerce+Platform",
                  },
                  {
                    title: "Corporate Website",
                    category: "Web Development",
                    description:
                      "Modern website with CMS for a multinational corporation.",
                    image:
                      "/apps/ap4.png?height=400&width=600&text=Corporate+Website",
                  },
                  {
                    title: "Online Learning Platform",
                    category: "Web Development",
                    description:
                      "Interactive learning platform with video courses and assessments.",
                    image:
                      "/apps/ap5.png?height=400&width=600&text=Learning+Platform",
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
                        <Link href={`/portfolio/${index + 1}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              {/* Mobile case studies content */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Healthcare App",
                    category: "Mobile Development",
                    description:
                      "Patient management app for a leading healthcare provider.",
                    image:
                      "/apps/ap6.png?height=400&width=600&text=Healthcare+App",
                  },
                  {
                    title: "Delivery Tracking App",
                    category: "Mobile Development",
                    description:
                      "Real-time package tracking app for logistics company.",
                    image:
                      "/apps/ap7.png?height=400&width=600&text=Delivery+App",
                  },
                  {
                    title: "Fitness Tracker",
                    category: "Mobile Development",
                    description:
                      "Comprehensive fitness tracking app with social features.",
                    image:
                      "/apps/ap8.png?height=400&width=600&text=Fitness+App",
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
                        <Link href={`/portfolio/${index + 1}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="enterprise" className="mt-8">
              {/* Enterprise case studies content */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Financial Dashboard",
                    category: "Enterprise Software",
                    description:
                      "Real-time financial analytics dashboard for investment firm.",
                    image:
                      "/apps/ap9.png?height=400&width=600&text=Financial+Dashboard",
                  },
                  {
                    title: "Inventory Management System",
                    category: "Enterprise Software",
                    description:
                      "Comprehensive inventory system for manufacturing company.",
                    image:
                      "/apps/ap10.png?height=400&width=600&text=Inventory+System",
                  },
                  {
                    title: "HR Management Platform",
                    category: "Enterprise Software",
                    description:
                      "Employee management and HR automation platform.",
                    image:
                      "/apps/ap11.png?height=400&width=600&text=HR+Platform",
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
                        <Link href={`/portfolio/${index + 1}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/portfolio">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to
                say.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "eUNITA transformed our business with their custom software. Their team was professional and delivered on time.",
                author: "Billy Aura",
                position: "CEO, AURA LOGISTICS",
                image: "/images/clients/aura2.jpg?height=100&width=100&text=SJ",
              },
              {
                quote:
                  "The mobile app they developed for us exceeded our expectations. User engagement has increased by 200% since launch.",
                author: "Michael Chen",
                position: "Product Manager, HealthPlus",
                image: "/user.jpg?height=100&width=100&text=MC",
              },
              {
                quote:
                  "Their expertise in cloud migration saved us thousands in infrastructure costs. Highly recommended!",
                author: "Emily Rodriguez",
                position: "CTO, LogisticsPro",
                image: "/user.jpg?height=100&width=100&text=ER",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="absolute -left-3 -top-3 text-6xl text-primary/10">
                    "
                  </div>
                  <CardDescription className="relative z-10 text-base">
                    {testimonial.quote}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our custom software solutions can help you
                achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
