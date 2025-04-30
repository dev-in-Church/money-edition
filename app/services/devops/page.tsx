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
  Server,
  Code,
  GitBranch,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DevOps Services | eUNITA",
  description:
    "Streamline your development pipeline with our DevOps practices. CI/CD, containerization, and infrastructure monitoring.",
};

export default function DevOpsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  DevOps Services
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline your development pipeline, improve collaboration,
                  and accelerate delivery with our comprehensive DevOps
                  solutions.
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
                src="/images/services/dev1.jpg?height=600&width=800&text=DevOps+Services"
                alt="DevOps Services"
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
              Our DevOps Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive DevOps solutions to help you streamline
              your development and operations processes.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CI/CD Implementation</CardTitle>
                <CardDescription>
                  Automate your build, test, and deployment processes for faster
                  delivery.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Pipeline design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Continuous deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Release management</span>
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
                <CardTitle>Containerization</CardTitle>
                <CardDescription>
                  Package your applications in containers for consistent
                  deployment across environments.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Docker implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kubernetes orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Container security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Microservices architecture</span>
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
                <CardTitle>Infrastructure as Code</CardTitle>
                <CardDescription>
                  Manage your infrastructure with code for consistency and
                  repeatability.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Terraform implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Ansible automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Configuration management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Version-controlled infrastructure</span>
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
                <CardTitle>Monitoring & Observability</CardTitle>
                <CardDescription>
                  Gain insights into your applications and infrastructure with
                  comprehensive monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Log aggregation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Alerting & notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dashboards & visualization</span>
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
                <CardTitle>DevSecOps</CardTitle>
                <CardDescription>
                  Integrate security into your DevOps processes for safer
                  applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Security automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Vulnerability scanning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Compliance as code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Secret management</span>
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
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DevOps Consulting</CardTitle>
                <CardDescription>
                  Expert guidance to help you implement DevOps practices in your
                  organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>DevOps assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Strategy development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Team training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Process improvement</span>
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
              DevOps Technologies
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We work with a wide range of DevOps tools and technologies to
              streamline your development pipeline.
            </p>
          </div>
          <Tabs defaultValue="cicd" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="cicd">CI/CD</TabsTrigger>
                <TabsTrigger value="containers">Containers</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="cicd" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Jenkins",
                    logo: "/svg/Jenkins.svg?height=80&width=80&text=Jenkins",
                  },
                  {
                    name: "GitHub Actions",
                    logo: "/placeholder.svg?height=80&width=80&text=GitHub+Actions",
                  },
                  {
                    name: "GitLab CI",
                    logo: "/placeholder.svg?height=80&width=80&text=GitLab+CI",
                  },
                  {
                    name: "CircleCI",
                    logo: "/svg/CircleCI.svg?height=80&width=80&text=CircleCI",
                  },
                  {
                    name: "Travis CI",
                    logo: "/svg/Travis-CI.svg?height=80&width=80&text=Travis+CI",
                  },
                  {
                    name: "Azure DevOps",
                    logo: "/svg/Azure-Devops.svg?height=80&width=80&text=Azure+DevOps",
                  },
                  {
                    name: "AWS CodePipeline",
                    logo: "/placeholder.svg?height=80&width=80&text=CodePipeline",
                  },
                  {
                    name: "Bamboo",
                    logo: "/svg/Bamboo.svg?height=80&width=80&text=Bamboo",
                  },
                  {
                    name: "TeamCity",
                    logo: "/placeholder.svg?height=80&width=80&text=TeamCity",
                  },
                  {
                    name: "Argo CD",
                    logo: "/svg/Argo-CD.svg?height=80&width=80&text=Argo+CD",
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
            <TabsContent value="containers" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Docker",
                    logo: "/svg/Docker.svg?height=80&width=80&text=Docker",
                  },
                  {
                    name: "Kubernetes",
                    logo: "/svg/Kubernetes.svg?height=80&width=80&text=Kubernetes",
                  },
                  {
                    name: "Helm",
                    logo: "/svg/Helm.svg?height=80&width=80&text=Helm",
                  },
                  {
                    name: "Podman",
                    logo: "/svg/podman.svg?height=80&width=80&text=Podman",
                  },
                  {
                    name: "OpenShift",
                    logo: "/placeholder.svg?height=80&width=80&text=OpenShift",
                  },
                  {
                    name: "Rancher",
                    logo: "/svg/Rancher.svg?height=80&width=80&text=Rancher",
                  },
                  {
                    name: "Docker Compose",
                    logo: "/placeholder.svg?height=80&width=80&text=Docker+Compose",
                  },
                  {
                    name: "Istio",
                    logo: "/placeholder.svg?height=80&width=80&text=Istio",
                  },
                  {
                    name: "Terraform",
                    logo: "/placeholder.svg?height=80&width=80&text=Terraform",
                  },
                  {
                    name: "Ansible",
                    logo: "/svg/Ansible.svg?height=80&width=80&text=Ansible",
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
            <TabsContent value="monitoring" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Prometheus",
                    logo: "/placeholder.svg?height=80&width=80&text=Prometheus",
                  },
                  {
                    name: "Grafana",
                    logo: "/svg/Grafana.svg?height=80&width=80&text=Grafana",
                  },
                  {
                    name: "ELK Stack",
                    logo: "/placeholder.svg?height=80&width=80&text=ELK+Stack",
                  },
                  {
                    name: "Datadog",
                    logo: "/placeholder.svg?height=80&width=80&text=Datadog",
                  },
                  {
                    name: "New Relic",
                    logo: "/placeholder.svg?height=80&width=80&text=New+Relic",
                  },
                  {
                    name: "Nagios",
                    logo: "/placeholder.svg?height=80&width=80&text=Nagios",
                  },
                  {
                    name: "Zabbix",
                    logo: "/placeholder.svg?height=80&width=80&text=Zabbix",
                  },
                  {
                    name: "Splunk",
                    logo: "/placeholder.svg?height=80&width=80&text=Splunk",
                  },
                  {
                    name: "Dynatrace",
                    logo: "/placeholder.svg?height=80&width=80&text=Dynatrace",
                  },
                  {
                    name: "AppDynamics",
                    logo: "/placeholder.svg?height=80&width=80&text=AppDynamics",
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
              Our DevOps Implementation Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to implement DevOps practices in
              your organization.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "We analyze your current development and operations processes.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a tailored DevOps implementation strategy.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We set up tools, automate processes, and integrate systems.",
              },
              {
                step: "04",
                title: "Training",
                description:
                  "We train your team on DevOps practices and tools.",
              },
              {
                step: "05",
                title: "Optimization",
                description: "We continuously improve your DevOps processes.",
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
              Featured DevOps Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful DevOps implementation
              projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce CI/CD Pipeline",
                category: "CI/CD Implementation",
                description:
                  "Automated deployment pipeline for a high-traffic e-commerce platform.",
                image:
                  "/placeholder.svg?height=400&width=600&text=E-commerce+CI/CD",
              },
              {
                title: "Microservices Containerization",
                category: "Containerization",
                description:
                  "Containerized microservices architecture for a fintech application.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Microservices",
              },
              {
                title: "Infrastructure Automation",
                category: "Infrastructure as Code",
                description:
                  "Automated infrastructure provisioning for a healthcare SaaS provider.",
                image:
                  "/placeholder.svg?height=400&width=600&text=Infrastructure",
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
                View All DevOps Projects
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
              Find answers to common questions about our DevOps services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "What is DevOps and how can it benefit my business?",
                answer:
                  "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. It benefits your business by increasing deployment frequency, reducing time-to-market, lowering failure rates of new releases, shortening lead time between fixes, and improving mean time to recovery. This results in higher-quality products, increased customer satisfaction, and more time for innovation rather than firefighting.",
              },
              {
                question:
                  "How long does it take to implement DevOps practices?",
                answer:
                  "The timeline for implementing DevOps practices varies based on your organization's size, current processes, and cultural readiness. Initial implementation typically takes 3-6 months, starting with assessment and planning (2-4 weeks), tool implementation (4-8 weeks), and process changes (4-12 weeks). However, DevOps is a journey of continuous improvement rather than a destination. Most organizations see significant improvements within the first few months, but fully maturing DevOps practices can take 1-2 years.",
              },
              {
                question:
                  "Do we need to change our entire tech stack to implement DevOps?",
                answer:
                  "No, you don't need to change your entire tech stack. DevOps practices can be implemented incrementally and adapted to work with your existing technologies. We'll assess your current stack and recommend the most effective approach, which might involve adding new tools that integrate with your existing systems rather than replacing everything. The focus is on improving processes and automation rather than completely overhauling your technology.",
              },
              {
                question:
                  "How do you measure the success of DevOps implementation?",
                answer:
                  "We measure DevOps success through key metrics in four categories: 1) Deployment frequency (how often you can release to production), 2) Lead time for changes (time from code commit to production), 3) Mean time to recovery (how quickly you can recover from failures), and 4) Change failure rate (percentage of deployments causing failures). We also track business metrics like time-to-market for new features, customer satisfaction, and team productivity. We establish baseline measurements before implementation and track improvements over time.",
              },
              {
                question: "How does DevOps relate to security?",
                answer:
                  "DevOps and security are integrated through DevSecOps, which builds security into every phase of the development lifecycle rather than treating it as an afterthought. This includes automated security testing in CI/CD pipelines, infrastructure security as code, vulnerability scanning, compliance automation, and security monitoring. By embedding security early and throughout the process, you can identify and address vulnerabilities faster while maintaining development velocity. Our DevOps implementations include security best practices by default.",
              },
              {
                question:
                  "What kind of training do you provide for our team during DevOps implementation?",
                answer:
                  "We provide comprehensive training tailored to your team's needs. This includes hands-on workshops for technical teams covering the specific tools implemented (CI/CD, containerization, IaC), best practices for writing testable code, and security considerations. For management, we offer training on DevOps principles, metrics, and organizational change. We also provide documentation, knowledge transfer sessions, and ongoing mentoring to ensure your team can independently maintain and improve your DevOps processes after implementation.",
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
                Ready to Streamline Your Development Pipeline?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free DevOps assessment and consultation.
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
