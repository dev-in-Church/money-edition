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
  Database,
  Server,
  Shield,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Database Solutions | eUNITA",
  description:
    "Robust database design, optimization, and management services for businesses of all sizes.",
};

export default function DatabaseSolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Database Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Robust database design, optimization, and management services
                  to help you store, access, and analyze your data efficiently.
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
                src="/images/services/db1.jpg?height=600&width=800&text=Database+Solutions"
                alt="Database Solutions"
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
              Our Database Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive database solutions to help you manage
              your data effectively.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Database Design</CardTitle>
                <CardDescription>
                  Custom database architecture designed for your specific
                  business needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Schema design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Normalization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Indexing strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Scalable architecture</span>
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
                <CardTitle>Database Migration</CardTitle>
                <CardDescription>
                  Seamless migration between database platforms with minimal
                  downtime.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Data mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>ETL processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Validation & testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Minimal downtime</span>
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
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Improve database performance for faster queries and better
                  user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Query optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Index tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Caching strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance monitoring</span>
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
                <CardTitle>Database Security</CardTitle>
                <CardDescription>
                  Protect your valuable data with robust security measures.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Access control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Data encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Audit trails</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Compliance solutions</span>
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
                <CardTitle>Data Warehousing</CardTitle>
                <CardDescription>
                  Centralize your data for better analytics and business
                  intelligence.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Warehouse design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>ETL pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>OLAP solutions</span>
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
                <CardTitle>Database Maintenance</CardTitle>
                <CardDescription>
                  Ongoing support to keep your databases running smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Regular backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Health monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Disaster recovery</span>
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
              Database Technologies
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We work with a wide range of database technologies to meet your
              specific needs.
            </p>
          </div>
          <Tabs defaultValue="relational" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="relational">Relational</TabsTrigger>
                <TabsTrigger value="nosql">NoSQL</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Databases</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="relational" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "MySQL",
                    logo: "/placeholder.svg?height=80&width=80&text=MySQL",
                  },
                  {
                    name: "PostgreSQL",
                    logo: "/placeholder.svg?height=80&width=80&text=PostgreSQL",
                  },
                  {
                    name: "SQL Server",
                    logo: "/placeholder.svg?height=80&width=80&text=SQL+Server",
                  },
                  {
                    name: "Oracle",
                    logo: "/placeholder.svg?height=80&width=80&text=Oracle",
                  },
                  {
                    name: "MariaDB",
                    logo: "/placeholder.svg?height=80&width=80&text=MariaDB",
                  },
                  {
                    name: "SQLite",
                    logo: "/placeholder.svg?height=80&width=80&text=SQLite",
                  },
                  {
                    name: "IBM Db2",
                    logo: "/placeholder.svg?height=80&width=80&text=IBM+Db2",
                  },
                  {
                    name: "SAP HANA",
                    logo: "/placeholder.svg?height=80&width=80&text=SAP+HANA",
                  },
                  {
                    name: "Teradata",
                    logo: "/placeholder.svg?height=80&width=80&text=Teradata",
                  },
                  {
                    name: "Snowflake",
                    logo: "/placeholder.svg?height=80&width=80&text=Snowflake",
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
            <TabsContent value="nosql" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "MongoDB",
                    logo: "/placeholder.svg?height=80&width=80&text=MongoDB",
                  },
                  {
                    name: "Cassandra",
                    logo: "/placeholder.svg?height=80&width=80&text=Cassandra",
                  },
                  {
                    name: "Redis",
                    logo: "/placeholder.svg?height=80&width=80&text=Redis",
                  },
                  {
                    name: "Elasticsearch",
                    logo: "/placeholder.svg?height=80&width=80&text=Elasticsearch",
                  },
                  {
                    name: "CouchDB",
                    logo: "/placeholder.svg?height=80&width=80&text=CouchDB",
                  },
                  {
                    name: "Neo4j",
                    logo: "/placeholder.svg?height=80&width=80&text=Neo4j",
                  },
                  {
                    name: "RavenDB",
                    logo: "/placeholder.svg?height=80&width=80&text=RavenDB",
                  },
                  {
                    name: "HBase",
                    logo: "/placeholder.svg?height=80&width=80&text=HBase",
                  },
                  {
                    name: "Couchbase",
                    logo: "/placeholder.svg?height=80&width=80&text=Couchbase",
                  },
                  {
                    name: "InfluxDB",
                    logo: "/placeholder.svg?height=80&width=80&text=InfluxDB",
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
            <TabsContent value="cloud" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Amazon RDS",
                    logo: "/placeholder.svg?height=80&width=80&text=Amazon+RDS",
                  },
                  {
                    name: "Amazon DynamoDB",
                    logo: "/placeholder.svg?height=80&width=80&text=DynamoDB",
                  },
                  {
                    name: "Azure SQL",
                    logo: "/placeholder.svg?height=80&width=80&text=Azure+SQL",
                  },
                  {
                    name: "Azure Cosmos DB",
                    logo: "/placeholder.svg?height=80&width=80&text=Cosmos+DB",
                  },
                  {
                    name: "Google Cloud SQL",
                    logo: "/placeholder.svg?height=80&width=80&text=Cloud+SQL",
                  },
                  {
                    name: "Google Firestore",
                    logo: "/placeholder.svg?height=80&width=80&text=Firestore",
                  },
                  {
                    name: "Firebase",
                    logo: "/placeholder.svg?height=80&width=80&text=Firebase",
                  },
                  {
                    name: "MongoDB Atlas",
                    logo: "/placeholder.svg?height=80&width=80&text=MongoDB+Atlas",
                  },
                  {
                    name: "Supabase",
                    logo: "/placeholder.svg?height=80&width=80&text=Supabase",
                  },
                  {
                    name: "PlanetScale",
                    logo: "/placeholder.svg?height=80&width=80&text=PlanetScale",
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
              Our Database Implementation Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to ensure successful database
              implementation.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "We analyze your data requirements and business processes.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We create a database schema optimized for your needs.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We implement the database structure and relationships.",
              },
              {
                step: "04",
                title: "Migration",
                description:
                  "We safely transfer your existing data to the new system.",
              },
              {
                step: "05",
                title: "Support",
                description: "We provide ongoing maintenance and optimization.",
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
                {index < 4 && (
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
              Featured Database Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful database implementation
              projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Healthcare Data Warehouse",
                category: "Data Warehousing",
                description:
                  "Centralized data warehouse for a healthcare provider with HIPAA compliance.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Healthcare+Data",
              },
              {
                title: "E-commerce Database Migration",
                category: "Database Migration",
                description:
                  "Seamless migration from legacy system to modern cloud database for an online retailer.",
                image:
                  "/placeholder.svg?height=400&width=600&text=E-commerce+Migration",
              },
              {
                title: "Financial Analytics Platform",
                category: "Performance Optimization",
                description:
                  "High-performance database solution for real-time financial analytics.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Financial+Analytics",
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
                View All Database Projects
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
              Find answers to common questions about our database solutions.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "What type of database is best for my business?",
                answer:
                  "The best database solution depends on your specific needs. Relational databases like MySQL or PostgreSQL are excellent for structured data with complex relationships. NoSQL databases like MongoDB are better for unstructured data and scalability. Cloud databases offer flexibility and reduced maintenance. We'll help you choose the right solution based on your data structure, scalability needs, and budget.",
              },
              {
                question: "How do you ensure data security during migration?",
                answer:
                  "We implement multiple layers of security during database migrations. This includes data encryption during transfer, secure access controls, comprehensive backup strategies before migration, thorough testing in staging environments, and validation procedures after migration. We also maintain detailed audit trails and follow industry compliance standards relevant to your business.",
              },
              {
                question:
                  "Can you improve the performance of our existing database?",
                answer:
                  "Yes, we offer comprehensive database performance optimization services. We analyze your current database structure, query patterns, and workload to identify bottlenecks. Our optimization strategies include query optimization, proper indexing, schema refinement, caching implementation, and hardware resource allocation. We've helped clients achieve performance improvements of  and hardware resource allocation. We've helped clients achieve performance improvements of up to 300% through our optimization techniques.",
              },
              {
                question: "Do you provide ongoing database maintenance?",
                answer:
                  "Yes, we offer comprehensive database maintenance services to ensure your databases run smoothly and efficiently. Our maintenance plans include regular backups, performance monitoring, security updates, health checks, and proactive optimization. We also provide 24/7 support for critical issues and regular reporting on database performance and health.",
              },
              {
                question: "How do you handle data compliance requirements?",
                answer:
                  "We have extensive experience implementing database solutions that comply with various regulatory standards including GDPR, HIPAA, SOC 2, PCI DSS, and more. Our approach includes data classification, appropriate security controls, encryption, access management, audit trails, and documentation. We work closely with your compliance team to ensure all requirements are met and maintained.",
              },
              {
                question: "Can you integrate our database with other systems?",
                answer:
                  "Absolutely. We specialize in database integration solutions that connect your database with other systems in your technology ecosystem. We can develop custom APIs, implement ETL processes, create middleware solutions, and establish real-time data synchronization. Our integration solutions ensure seamless data flow while maintaining data integrity and security.",
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
                Ready to Optimize Your Database?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and quote tailored to
                your database needs.
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
