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
  Cloud,
  Server,
  Shield,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Services | eUNITA",
  description:
    "Cloud migration, infrastructure setup, and management services to help your business leverage the power of cloud computing.",
};

export default function CloudServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Cloud Services
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Leverage the power of cloud computing with our comprehensive
                  cloud migration, infrastructure, and management services.
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
                src="/images/services/cloud1.jpg?height=600&width=800&text=Cloud+Services"
                alt="Cloud Services"
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
              Our Cloud Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive cloud solutions to help you modernize
              your infrastructure and applications.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cloud Migration</CardTitle>
                <CardDescription>
                  Seamlessly transition your applications and infrastructure to
                  the cloud.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Migration assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Workload analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Migration planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Execution & validation</span>
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
                <CardTitle>Cloud Infrastructure</CardTitle>
                <CardDescription>
                  Design and implement scalable, secure cloud infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Architecture design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Infrastructure as Code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Network configuration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Security implementation</span>
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
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Serverless Architecture</CardTitle>
                <CardDescription>
                  Build modern applications with serverless technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Function as a Service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Event-driven design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Microservices architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Auto-scaling solutions</span>
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
                <CardTitle>Cloud Security</CardTitle>
                <CardDescription>
                  Protect your cloud environment with robust security measures.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Security assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Identity management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Encryption solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Compliance implementation</span>
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
                <CardTitle>Cloud Optimization</CardTitle>
                <CardDescription>
                  Maximize performance while minimizing costs in your cloud
                  environment.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cost analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Resource optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated scaling</span>
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
                <CardTitle>Cloud Management</CardTitle>
                <CardDescription>
                  Ongoing support and management of your cloud environment.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24/7 monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Incident response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Backup & recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Continuous optimization</span>
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
              Cloud Platforms
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We work with all major cloud providers to deliver the best
              solutions for your needs.
            </p>
          </div>
          <Tabs defaultValue="aws" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="aws">AWS</TabsTrigger>
                <TabsTrigger value="azure">Azure</TabsTrigger>
                <TabsTrigger value="gcp">Google Cloud</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="aws" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "EC2",
                    logo: "/placeholder.svg?height=80&width=80&text=EC2",
                  },
                  {
                    name: "S3",
                    logo: "/placeholder.svg?height=80&width=80&text=S3",
                  },
                  {
                    name: "Lambda",
                    logo: "/placeholder.svg?height=80&width=80&text=Lambda",
                  },
                  {
                    name: "RDS",
                    logo: "/placeholder.svg?height=80&width=80&text=RDS",
                  },
                  {
                    name: "DynamoDB",
                    logo: "/placeholder.svg?height=80&width=80&text=DynamoDB",
                  },
                  {
                    name: "ECS",
                    logo: "/placeholder.svg?height=80&width=80&text=ECS",
                  },
                  {
                    name: "EKS",
                    logo: "/placeholder.svg?height=80&width=80&text=EKS",
                  },
                  {
                    name: "CloudFront",
                    logo: "/placeholder.svg?height=80&width=80&text=CloudFront",
                  },
                  {
                    name: "API Gateway",
                    logo: "/placeholder.svg?height=80&width=80&text=API+Gateway",
                  },
                  {
                    name: "CloudFormation",
                    logo: "/placeholder.svg?height=80&width=80&text=CloudFormation",
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
            <TabsContent value="azure" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Virtual Machines",
                    logo: "/placeholder.svg?height=80&width=80&text=VMs",
                  },
                  {
                    name: "App Service",
                    logo: "/placeholder.svg?height=80&width=80&text=App+Service",
                  },
                  {
                    name: "Azure Functions",
                    logo: "/placeholder.svg?height=80&width=80&text=Functions",
                  },
                  {
                    name: "SQL Database",
                    logo: "/placeholder.svg?height=80&width=80&text=SQL+DB",
                  },
                  {
                    name: "Cosmos DB",
                    logo: "/placeholder.svg?height=80&width=80&text=Cosmos+DB",
                  },
                  {
                    name: "AKS",
                    logo: "/placeholder.svg?height=80&width=80&text=AKS",
                  },
                  {
                    name: "Blob Storage",
                    logo: "/placeholder.svg?height=80&width=80&text=Blob",
                  },
                  {
                    name: "Azure DevOps",
                    logo: "/placeholder.svg?height=80&width=80&text=DevOps",
                  },
                  {
                    name: "API Management",
                    logo: "/placeholder.svg?height=80&width=80&text=API+Mgmt",
                  },
                  {
                    name: "ARM Templates",
                    logo: "/placeholder.svg?height=80&width=80&text=ARM",
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
            <TabsContent value="gcp" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Compute Engine",
                    logo: "/placeholder.svg?height=80&width=80&text=Compute",
                  },
                  {
                    name: "App Engine",
                    logo: "/placeholder.svg?height=80&width=80&text=App+Engine",
                  },
                  {
                    name: "Cloud Functions",
                    logo: "/placeholder.svg?height=80&width=80&text=Functions",
                  },
                  {
                    name: "Cloud SQL",
                    logo: "/placeholder.svg?height=80&width=80&text=Cloud+SQL",
                  },
                  {
                    name: "Firestore",
                    logo: "/placeholder.svg?height=80&width=80&text=Firestore",
                  },
                  {
                    name: "GKE",
                    logo: "/placeholder.svg?height=80&width=80&text=GKE",
                  },
                  {
                    name: "Cloud Storage",
                    logo: "/placeholder.svg?height=80&width=80&text=Storage",
                  },
                  {
                    name: "BigQuery",
                    logo: "/placeholder.svg?height=80&width=80&text=BigQuery",
                  },
                  {
                    name: "Cloud Run",
                    logo: "/placeholder.svg?height=80&width=80&text=Cloud+Run",
                  },
                  {
                    name: "Deployment Manager",
                    logo: "/placeholder.svg?height=80&width=80&text=Deployment",
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
              Our Cloud Migration Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to ensure successful cloud
              migration and implementation.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "We analyze your current infrastructure and applications.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed migration strategy and architecture.",
              },
              {
                step: "03",
                title: "Migration",
                description:
                  "We execute the migration with minimal disruption.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We fine-tune your cloud environment for performance and cost.",
              },
              {
                step: "05",
                title: "Management",
                description:
                  "We provide ongoing support and continuous improvement.",
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
              Featured Cloud Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful cloud migration and
              implementation projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Financial Services Migration",
                category: "Cloud Migration",
                description:
                  "Migration of legacy systems to AWS for a financial services company.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Financial+Migration",
              },
              {
                title: "E-commerce Scalability",
                category: "Cloud Infrastructure",
                description:
                  "Scalable cloud architecture for a growing e-commerce platform.",
                image:
                  "/placeholder.svg?height=400&width=600&text=E-commerce+Cloud",
              },
              {
                title: "Healthcare Data Platform",
                category: "Serverless Architecture",
                description:
                  "HIPAA-compliant serverless data platform for a healthcare provider.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Healthcare+Cloud",
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
                View All Cloud Projects
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
              Find answers to common questions about our cloud services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "What are the benefits of moving to the cloud?",
                answer:
                  "Moving to the cloud offers numerous benefits including cost savings (pay-as-you-go model), scalability (easily scale resources up or down), flexibility (access from anywhere), disaster recovery (automated backups), automatic updates, and reduced IT overhead. Cloud migration can also improve performance, security, and enable faster innovation through access to cutting-edge technologies.",
              },
              {
                question: "How secure is cloud computing?",
                answer:
                  "Cloud computing can be very secure when implemented correctly. Major cloud providers invest heavily in security measures that often exceed what individual companies can implement on-premises. These include physical security, network security, encryption, identity management, and compliance certifications. However, security is a shared responsibility—while providers secure the infrastructure, clients must secure their data, applications, and access controls. We implement cloud security best practices and can help you achieve compliance with regulations like GDPR, HIPAA, and SOC 2.",
              },
              {
                question: "How long does cloud migration typically take?",
                answer:
                  "The timeline for cloud migration varies based on the complexity and size of your infrastructure. Simple applications might take a few weeks, while large enterprise environments could take several months. We use a phased approach to minimize disruption and risk. Our typical migration process includes assessment (2-4 weeks), planning (2-4 weeks), migration execution (varies by workload), and optimization (ongoing). We'll provide a detailed timeline after our initial assessment of your specific environment.",
              },
              {
                question: "Which cloud provider is best for my business?",
                answer:
                  "The best cloud provider depends on your specific needs, existing technology stack, and business requirements. AWS offers the broadest range of services and global reach. Microsoft Azure integrates well with existing Microsoft environments. Google Cloud excels in data analytics and machine learning. We're certified partners with all major providers and can help you evaluate the options based on factors like cost, required services, compliance needs, and your team's familiarity with different platforms. Many businesses also benefit from a multi-cloud approach.",
              },
              {
                question: "How do you minimize downtime during migration?",
                answer:
                  "We employ several strategies to minimize downtime during cloud migration. These include parallel environments (running old and new systems simultaneously until cutover), incremental migration (moving components in phases), off-hours migration for critical systems, comprehensive pre-migration testing, automated migration tools, and detailed rollback plans. For mission-critical applications, we can implement strategies like blue-green deployments or canary releases to ensure seamless transitions with near-zero downtime.",
              },
              {
                question: "How can we control cloud costs?",
                answer:
                  "Cloud cost management is a key part of our services. We implement strategies like right-sizing (ensuring you're not over-provisioning resources), scheduled scaling (adjusting resources based on demand patterns), reserved instances for predictable workloads, spot instances for flexible workloads, and automated shutdown of non-production environments during off-hours. We also set up monitoring and alerting for cost anomalies, implement tagging strategies for cost allocation, and provide regular optimization recommendations to ensure you're getting the most value from your cloud investment.",
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
                Ready to Move to the Cloud?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and cloud readiness
                assessment.
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
