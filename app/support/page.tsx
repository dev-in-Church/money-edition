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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  MessageSquare,
  FileText,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Help & Support | eUNITA",
  description:
    "Get help and support for your software solutions. Access our knowledge base, FAQs, and contact our support team.",
};

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Help & Support
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the help you need with our comprehensive support resources
                and dedicated team.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Search for help..."
                  type="search"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Chat with our support team in real-time for immediate
                  assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our support agents are available Monday through Friday, 9:00
                  AM to 6:00 PM (PST).
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#live-chat">
                    Start Chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>
                  Browse our comprehensive documentation and tutorials.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Find answers to common questions, step-by-step guides, and
                  troubleshooting tips.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="#knowledge-base">
                    Browse Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Reach out to our support team via email or phone.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  For complex issues or if you prefer direct communication with
                  our support team.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="#contact-support">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Chat Section */}
      <section
        id="live-chat"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Live Chat Support
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get immediate assistance from our support team through live chat.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Start a Chat Session</CardTitle>
                <CardDescription>
                  Please fill out the form below to start a chat with our
                  support team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="grid gap-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="grid gap-2">
                    <Tabs defaultValue="product">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="product">Product</TabsTrigger>
                        <TabsTrigger value="billing">Billing</TabsTrigger>
                        <TabsTrigger value="technical">Technical</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Start Chat
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>
                Live chat is available Monday through Friday, 9:00 AM to 6:00 PM
                (PST).
                <br />
                For after-hours support, please email{" "}
                <a
                  href="mailto:support@eunita.com"
                  className="text-primary hover:underline"
                >
                  support@eunita.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section id="knowledge-base" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Knowledge Base
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our documentation, tutorials, and troubleshooting guides.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="getting-started">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="getting-started">
                    Getting Started
                  </TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="troubleshooting">
                    Troubleshooting
                  </TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
              </div>

              {/* Getting Started */}
              <TabsContent value="getting-started">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Setting Up Your Account",
                      description:
                        "Learn how to create and configure your account for the first time.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Account+Setup",
                      link: "#",
                    },
                    {
                      title: "Platform Overview",
                      description:
                        "Get familiar with our platform's interface and key features.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Platform+Overview",
                      link: "#",
                    },
                    {
                      title: "User Management",
                      description:
                        "Learn how to add, edit, and manage user permissions.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=User+Management",
                      link: "#",
                    },
                    {
                      title: "Integration Basics",
                      description:
                        "Understand how to integrate our software with your existing systems.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Integration+Basics",
                      link: "#",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <Image
                          src={article.image || "/eunita_ph.jpg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" asChild>
                          <Link href={article.link}>
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Tutorials */}
              <TabsContent value="tutorials">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Creating Your First Project",
                      description:
                        "Step-by-step guide to creating and configuring a new project.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=First+Project",
                      link: "#",
                    },
                    {
                      title: "Advanced Reporting",
                      description:
                        "Learn how to create custom reports and dashboards.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Advanced+Reporting",
                      link: "#",
                    },
                    {
                      title: "Workflow Automation",
                      description:
                        "Set up automated workflows to streamline your processes.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Workflow+Automation",
                      link: "#",
                    },
                    {
                      title: "Data Import/Export",
                      description:
                        "Learn how to import and export data in various formats.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Data+Import+Export",
                      link: "#",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <Image
                          src={article.image || "/eunita_ph.jpg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" asChild>
                          <Link href={article.link}>
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Troubleshooting */}
              <TabsContent value="troubleshooting">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Common Error Messages",
                      description:
                        "Explanations and solutions for frequently encountered error messages.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Error+Messages",
                      link: "#",
                    },
                    {
                      title: "Performance Optimization",
                      description:
                        "Tips to improve the performance of your application.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Performance",
                      link: "#",
                    },
                    {
                      title: "Connection Issues",
                      description:
                        "Troubleshoot and resolve common connection problems.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Connection+Issues",
                      link: "#",
                    },
                    {
                      title: "Data Recovery",
                      description:
                        "Learn how to recover lost or corrupted data.",
                      image:
                        "/eunita_ph.jpg?height=200&width=300&text=Data+Recovery",
                      link: "#",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <Image
                          src={article.image || "/eunita_ph.jpg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" asChild>
                          <Link href={article.link}>
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* FAQs */}
              <TabsContent value="faqs">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Find quick answers to common questions about our products
                      and services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        {
                          question: "How do I reset my password?",
                          answer:
                            "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password.",
                        },
                        {
                          question: "Can I change my subscription plan?",
                          answer:
                            "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Changes to your billing will be prorated for the remainder of your billing cycle.",
                        },
                        {
                          question: "How do I add team members to my account?",
                          answer:
                            "To add team members, go to 'Settings' > 'Team Management' and click on 'Add Member'. Enter their email address and select their role. They will receive an invitation to join your account.",
                        },
                        {
                          question: "Is my data backed up?",
                          answer:
                            "Yes, we perform automatic backups of all customer data daily. We retain backups for 30 days. If you need to restore data, please contact our support team.",
                        },
                        {
                          question: "How do I export my data?",
                          answer:
                            "You can export your data in various formats (CSV, Excel, PDF) from the 'Reports' section. Select the data you want to export, choose your preferred format, and click 'Export'.",
                        },
                        {
                          question: "What payment methods do you accept?",
                          answer:
                            "We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal. For enterprise customers, we also offer invoicing options.",
                        },
                        {
                          question: "How secure is my data?",
                          answer:
                            "We take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. For more details, please see our Security page.",
                        },
                        {
                          question: "Can I cancel my subscription at any time?",
                          answer:
                            "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your account until the end of your current billing period.",
                        },
                      ].map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section
        id="contact-support"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Support
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Reach out to our support team for personalized assistance.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Send us an email and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="grid gap-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="grid gap-2">
                    <textarea
                      className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describe your issue in detail..."
                    ></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>
                    Call us directly for urgent issues or complex problems.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">+254 795 198 141</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available Monday through Friday, 9:00 AM to 6:00 PM (PST)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Support Ticket</CardTitle>
                  <CardDescription>
                    Create a support ticket for tracking and faster resolution.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    For existing customers, please log in to your account to
                    create a support ticket.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">
                      Log In to Create Ticket
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need Additional Help?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is ready to provide personalized assistance for your
                specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Sales
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
  );
}
