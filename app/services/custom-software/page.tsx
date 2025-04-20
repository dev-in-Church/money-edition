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
  Database,
  Server,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development | eUNITA",
  description:
    "Tailored software solutions designed to address your specific business challenges and drive growth.",
};

export default function CustomSoftwarePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Custom Software Development
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tailored software solutions designed to address your specific
                  business challenges and drive growth.
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
                src="/images/services/cust1.jpg?height=600&width=800&text=Custom+Software"
                alt="Custom Software Development"
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
              Our Custom Software Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We develop bespoke software solutions that perfectly align with
              your business processes and objectives.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enterprise Applications</CardTitle>
                <CardDescription>
                  Comprehensive software solutions for large-scale business
                  operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>ERP systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>CRM solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Business intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Workflow automation</span>
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Management Systems</CardTitle>
                <CardDescription>
                  Solutions for efficient data storage, processing, and
                  analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Database design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Data warehousing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Analytics platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Reporting tools</span>
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
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integration Solutions</CardTitle>
                <CardDescription>
                  Connect disparate systems for seamless data flow and
                  operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>API development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Middleware solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Legacy system integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Third-party integrations</span>
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Applications</CardTitle>
                <CardDescription>
                  Software with robust security features for sensitive
                  operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Authentication systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Encryption solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Compliance frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Audit trail systems</span>
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
                <CardTitle>Workflow Automation</CardTitle>
                <CardDescription>
                  Streamline business processes with automated workflows.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Process mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Task automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Approval systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Efficiency analytics</span>
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
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Legacy System Modernization</CardTitle>
                <CardDescription>
                  Update outdated systems with modern technologies and
                  architectures.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Code refactoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Platform migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>UI/UX modernization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance optimization</span>
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
              We leverage the latest technologies to build robust, scalable, and
              secure custom software solutions.
            </p>
          </div>
          <Tabs defaultValue="backend" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="backend" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Java",
                    logo: "/svg/Java.svg?height=80&width=80&text=Java",
                  },
                  {
                    name: "C#",
                    logo: "/svg/C-Sharp.svg?height=80&width=80&text=C%23",
                  },
                  {
                    name: "Python",
                    logo: "/svg/Python.svg?height=80&width=80&text=Python",
                  },
                  {
                    name: "Node.js",
                    logo: "/svg/Node.js.svg?height=80&width=80&text=Node.js",
                  },
                  {
                    name: "PHP",
                    logo: "/svg/PHP.svg?height=80&width=80&text=PHP",
                  },
                  {
                    name: "Go",
                    logo: "/svg/Go.svg?height=80&width=80&text=Go",
                  },
                  {
                    name: "Ruby",
                    logo: "/svg/Ruby.svg?height=80&width=80&text=Ruby",
                  },
                  {
                    name: "Spring",
                    logo: "/Svg/Spring.svg?height=80&width=80&text=Spring",
                  },
                  {
                    name: ".NET",
                    logo: "/svg/NET.svg?height=80&width=80&text=.NET",
                  },
                  {
                    name: "Django",
                    logo: "/svg/Django.svg?height=80&width=80&text=Django",
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
            <TabsContent value="frontend" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "React",
                    logo: "/svg/React.svg?height=80&width=80&text=React",
                  },
                  {
                    name: "Angular",
                    logo: "/svg/Angular.svg?height=80&width=80&text=Angular",
                  },
                  {
                    name: "Vue.js",
                    logo: "/svg/Vue.js.svg?height=80&width=80&text=Vue.js",
                  },
                  {
                    name: "TypeScript",
                    logo: "/svg/Typescript.svg?height=80&width=80&text=TypeScript",
                  },
                  {
                    name: "JavaScript",
                    logo: "/svg/Javascript.svg?height=80&width=80&text=JavaScript",
                  },
                  {
                    name: "HTML5",
                    logo: "/svg/HTML5.svg?height=80&width=80&text=HTML5",
                  },
                  {
                    name: "CSS3",
                    logo: "/svg/CSS3.svg?height=80&width=80&text=CSS3",
                  },
                  {
                    name: "Tailwind CSS",
                    logo: "/svg/Tailwind-CSS.svg?height=80&width=80&text=Tailwind",
                  },
                  {
                    name: "Bootstrap",
                    logo: "/svg/Bootstrap.svg?height=80&width=80&text=Bootstrap",
                  },
                  {
                    name: "SASS",
                    logo: "/svg/Sass.svg?height=80&width=80&text=SASS",
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
            <TabsContent value="database" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "MySQL",
                    logo: "/svg/MySQL.svg?height=80&width=80&text=MySQL",
                  },
                  {
                    name: "PostgreSQL",
                    logo: "/svg/PostgreSQL.svg?height=80&width=80&text=PostgreSQL",
                  },
                  {
                    name: "MongoDB",
                    logo: "/svg/MongoDB.svg?height=80&width=80&text=MongoDB",
                  },
                  {
                    name: "SQLite",
                    logo: "/svg/SQLite.svg?height=80&width=80&text=SQL+Server",
                  },
                  {
                    name: "Oracle",
                    logo: "/svg/Oracle.svg?height=80&width=80&text=Oracle",
                  },
                  {
                    name: "Redis",
                    logo: "/svg/Redis.svg?height=80&width=80&text=Redis",
                  },
                  {
                    name: "Elasticsearch",
                    logo: "/svg/Elastic-Search.svg?height=80&width=80&text=Elasticsearch",
                  },
                  {
                    name: "Firebase",
                    logo: "/svg/Firebase.svg?height=80&width=80&text=Firebase",
                  },
                  {
                    name: "Supabase",
                    logo: "/svg/Supabase.svg?height=80&width=80&text=DynamoDB",
                  },
                  {
                    name: "Cassandra",
                    logo: "/svg/Apache-Cassandra.svg?height=80&width=80&text=Cassandra",
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
              We follow a structured approach to ensure successful software
              delivery.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements, business processes, and objectives.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan with milestones and deliverables.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "We design the architecture, database schema, and user interfaces.",
              },
              {
                step: "04",
                title: "Development",
                description:
                  "Our engineers build your solution using agile methodologies.",
              },
              {
                step: "05",
                title: "Testing",
                description:
                  "Rigorous testing to ensure quality, security, and performance.",
              },
              {
                step: "06",
                title: "Deployment",
                description: "Implementation, training, and ongoing support.",
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
                {index < 5 && (
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
              Featured Custom Software Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful custom software development
              projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Financial Dashboard",
                category: "Enterprise Software",
                description:
                  "Real-time financial analytics dashboard for an investment firm with data visualization.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Financial+Dashboard",
              },
              {
                title: "Inventory Management System",
                category: "Custom Software",
                description:
                  "Comprehensive inventory system for a manufacturing company with barcode scanning.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Inventory+System",
              },
              {
                title: "HR Management Platform",
                category: "Enterprise Software",
                description:
                  "Employee management and HR automation platform with performance reviews.",
                image: "/placeholder.svg?height=400&width=600&text=HR+Platform",
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
                View All Projects
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
              Find answers to common questions about our custom software
              development services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "How long does it take to develop custom software?",
                answer:
                  "The timeline for custom software development varies based on complexity and scope. Simple applications might take 3-6 months, while complex enterprise systems could take 6-12 months or more. We provide detailed timelines during the planning phase after understanding your specific requirements.",
              },
              {
                question: "How much does custom software development cost?",
                answer:
                  "Custom software development is an investment that varies widely based on complexity, features, integrations, and scale. Projects typically start at $25,000 for simpler solutions and can range to $100,000+ for enterprise-grade systems. We provide detailed estimates after a thorough requirements analysis.",
              },
              {
                question:
                  "Do you provide ongoing support after the software is developed?",
                answer:
                  "Yes, we offer comprehensive maintenance and support plans to ensure your software continues to run smoothly. Our support services include bug fixes, security updates, performance optimization, feature enhancements, and technical assistance. We recommend ongoing support for all custom software to ensure longevity and reliability.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "Absolutely. We specialize in integration solutions that connect your new custom software with existing systems. Whether you're using legacy software, third-party applications, or various databases, we can develop APIs and middleware to ensure seamless data flow and operations across your entire technology ecosystem.",
              },
              {
                question: "How do you ensure the security of custom software?",
                answer:
                  "Security is built into every stage of our development process. We implement industry best practices including secure coding standards, data encryption, robust authentication and authorization, regular security testing, and compliance with relevant regulations. We also provide security documentation and can conduct security audits for your peace of mind.",
              },
              {
                question: "Can you modernize our legacy systems?",
                answer:
                  "Yes, legacy system modernization is one of our core services. We can transform your outdated systems into modern, efficient applications while preserving your valuable business logic and data. Our approach includes code refactoring, platform migration, database upgrades, UI/UX modernization, and integration with modern technologies. We ensure a smooth transition with minimal disruption to your business operations.",
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
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and quote tailored to
                your custom software needs.
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
