import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
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
import {
  CheckCircle,
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | eUNITA",
  description:
    "Custom web development services for businesses of all sizes. Responsive websites, web applications, e-commerce solutions, and more.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Web Development Services
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Custom websites and web applications built with the latest
                  technologies to help your business thrive online.
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
            </div>
            <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/web1.jpg?height=600&width=800&text=Web+Development"
                alt="Web Development"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Web Development Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of web development services to meet
              your business needs.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Responsive Websites</CardTitle>
                <CardDescription>
                  Custom websites that look great and function flawlessly on all
                  devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mobile-first design approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cross-browser compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Fast loading speeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>SEO-friendly structure</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Web Applications</CardTitle>
                <CardDescription>
                  Powerful, interactive web applications that solve complex
                  business problems.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>User authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Database integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>API development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce Solutions</CardTitle>
                <CardDescription>
                  Online stores that drive sales and provide excellent customer
                  experiences.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Secure payment gateways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Customer accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Order tracking</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Progressive Web Apps</CardTitle>
                <CardDescription>
                  The best of both worlds: websites with app-like functionality.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Offline functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>App-like experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Fast performance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CMS Development</CardTitle>
                <CardDescription>
                  Content management systems that make updating your website
                  easy.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>User-friendly interfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom content types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Role-based permissions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Media management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Website Maintenance</CardTitle>
                <CardDescription>
                  Ongoing support to keep your website secure, up-to-date, and
                  performing well.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Security updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Content updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Regular backups</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technologies We Use
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We leverage the latest technologies to build fast, secure, and
              scalable web solutions.
            </p>
          </div>
          <Tabs defaultValue="frontend" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="cms">CMS</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="frontend" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "React",
                    logo: "/svg/React.svg?height=80&width=80&text=React",
                  },
                  {
                    name: "Next.js",
                    logo: "/svg/Next.js.svg?height=80&width=80&text=Next.js",
                  },
                  {
                    name: "Vue.js",
                    logo: "/svg/Vue.js.svg?height=80&width=80&text=Vue.js",
                  },
                  {
                    name: "Angular",
                    logo: "/svg/Angular.svg?height=80&width=80&text=Angular",
                  },
                  {
                    name: "TypeScript",
                    logo: "/svg/Typescript.svg?height=80&width=80&text=TypeScript",
                  },
                  {
                    name: "Tailwind CSS",
                    logo: "/svg/Tailwind-CSS.svg?height=80&width=80&text=Tailwind",
                  },
                  {
                    name: "SASS",
                    logo: "/svg/Sass.svg?height=80&width=80&text=SASS",
                  },
                  {
                    name: "Redux",
                    logo: "/svg/Redux.svg?height=80&width=80&text=Redux",
                  },
                  {
                    name: "GraphQL",
                    logo: "/svg/GraphQL.svg?height=80&width=80&text=GraphQL",
                  },
                  {
                    name: "Webpack",
                    logo: "/svg/Webpack.svg?height=80&width=80&text=Webpack",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="backend" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Node.js",
                    logo: "/svg/Node.js.svg?height=80&width=80&text=Node.js",
                  },
                  {
                    name: "Express",
                    logo: "/svg/Express.svg?height=80&width=80&text=Express",
                  },
                  {
                    name: "Python",
                    logo: "/svg/Python.svg?height=80&width=80&text=Python",
                  },
                  {
                    name: "Django",
                    logo: "/svg/Django.svg?height=80&width=80&text=Django",
                  },
                  {
                    name: "PHP",
                    logo: "/svg/PHP.svg?height=80&width=80&text=PHP",
                  },
                  {
                    name: "Laravel",
                    logo: "/svg/Laravel.svg?height=80&width=80&text=Laravel",
                  },
                  {
                    name: "Ruby on Rails",
                    logo: "/svg/Ruby-on-Rails.svg?height=80&width=80&text=Rails",
                  },
                  {
                    name: "Java",
                    logo: "/svg/Java.svg?height=80&width=80&text=Java",
                  },
                  {
                    name: "Spring Boot",
                    logo: "/svg/Spring.svg?height=80&width=80&text=Spring",
                  },
                  {
                    name: ".NET",
                    logo: "/svg/NET.svg?height=80&width=80&text=.NET",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cms" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "WordPress",
                    logo: "/placeholder.svg?height=80&width=80&text=WordPress",
                  },
                  {
                    name: "Drupal",
                    logo: "/placeholder.svg?height=80&width=80&text=Drupal",
                  },
                  {
                    name: "Joomla",
                    logo: "/placeholder.svg?height=80&width=80&text=Joomla",
                  },
                  {
                    name: "Shopify",
                    logo: "/placeholder.svg?height=80&width=80&text=Shopify",
                  },
                  {
                    name: "Magento",
                    logo: "/placeholder.svg?height=80&width=80&text=Magento",
                  },
                  {
                    name: "Strapi",
                    logo: "/placeholder.svg?height=80&width=80&text=Strapi",
                  },
                  {
                    name: "Contentful",
                    logo: "/placeholder.svg?height=80&width=80&text=Contentful",
                  },
                  {
                    name: "Sanity",
                    logo: "/placeholder.svg?height=80&width=80&text=Sanity",
                  },
                  {
                    name: "Ghost",
                    logo: "/placeholder.svg?height=80&width=80&text=Ghost",
                  },
                  {
                    name: "Prismic",
                    logo: "/placeholder.svg?height=80&width=80&text=Prismic",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Development Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to ensure successful project
              delivery.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements and define project scope.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We create wireframes and prototypes for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our engineers build your solution using agile methodologies.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy, test, and provide ongoing support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Web Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful web development projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                description:
                  "A custom e-commerce solution with advanced inventory management.",
                image:
                  "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
              },
              {
                title: "Corporate Website",
                category: "Web Development",
                description:
                  "Modern website with CMS for a multinational corporation.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Corporate+Website",
              },
              {
                title: "Online Learning Platform",
                category: "Web Development",
                description:
                  "Interactive learning platform with video courses and assessments.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Learning+Platform",
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
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/portfolio">
                View All Web Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our web development
              services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "How long does it take to build a website?",
                answer:
                  "The timeline for a website project depends on its complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during the discovery phase.",
              },
              {
                question: "Do you provide website maintenance services?",
                answer:
                  "Yes, we offer ongoing maintenance plans to keep your website secure, up-to-date, and performing well. Our maintenance services include security updates, performance optimization, content updates, and regular backups.",
              },
              {
                question: "Can you redesign my existing website?",
                answer:
                  "We specialize in website redesigns that improve both aesthetics and functionality. We'll analyze your current site, identify areas for improvement, and create a modern, user-friendly design that better serves your business goals.",
              },
              {
                question: "Do you provide SEO services with web development?",
                answer:
                  "Yes, we build all our websites with SEO best practices in mind. This includes proper HTML structure, fast loading speeds, mobile optimization, and clean URLs. We can also provide additional SEO services such as keyword research, content optimization, and technical SEO audits.",
              },
              {
                question: "What content management systems do you work with?",
                answer:
                  "We work with a variety of CMS platforms including WordPress, Drupal, Shopify, and headless CMS options like Strapi and Contentful. We can recommend the best CMS for your specific needs based on your requirements for content management, scalability, and functionality.",
              },
              {
                question: "Do you provide hosting for websites you build?",
                answer:
                  "Yes, we offer reliable hosting solutions for the websites we develop. Our hosting packages include regular backups, security monitoring, and technical support. We can also work with your existing hosting provider if you prefer.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your Web Project?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and quote tailored to
                your web development needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
