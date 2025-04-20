import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  Clock,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | eUNITA",
  description:
    "Learn about our company, mission, values, and the team behind eUNITA.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About eUNITA
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're a team of passionate technologists dedicated to
                  transforming businesses through innovative software solutions.
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
                  <Link href="/about/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/about1.jpg?height=600&width=800&text=Our+Company"
                alt="eUNITA Team"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <div className="mt-4 space-y-4">
                <p className="text-muted-foreground">
                  eUNITA was founded in 2015 by a group of software engineers
                  who shared a vision: to create a company that delivers
                  exceptional software solutions while prioritizing both
                  technical excellence and client satisfaction.
                </p>
                <p className="text-muted-foreground">
                  What began as a small team of five has grown into a diverse
                  group of over 50 talented professionals spanning multiple
                  disciplines, from development and design to project management
                  and quality assurance.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we've successfully delivered hundreds of
                  projects across various industries, helping businesses of all
                  sizes transform their operations through technology. Our
                  commitment to quality, innovation, and client success has
                  earned us a reputation as a trusted technology partner.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to evolve and expand our capabilities,
                  staying at the forefront of technological advancements to
                  provide our clients with cutting-edge solutions that drive
                  real business value.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower businesses through innovative software solutions
                    that solve complex challenges, drive growth, and create
                    lasting value. We strive to be a trusted technology partner
                    that helps our clients achieve their goals through technical
                    excellence and exceptional service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Excellence:</strong> We strive for technical
                        excellence in everything we do.
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Innovation:</strong> We embrace new technologies
                        and creative solutions.
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Integrity:</strong> We operate with honesty,
                        transparency, and ethical standards.
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Collaboration:</strong> We believe in the power
                        of teamwork and partnership.
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>
                        <strong>Client Success:</strong> We measure our success
                        by our clients' success.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose eUNITA
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What sets us apart from other software development companies.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team consists of highly skilled professionals with
                  expertise across various technologies and domains. We hire the
                  best talent and invest in their continuous growth and
                  development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With hundreds of successful projects delivered across various
                  industries, we have the experience and expertise to tackle
                  complex challenges and deliver exceptional results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize understanding your business goals and challenges
                  to deliver solutions that create real value. Your success is
                  our success, and we're committed to being a true partner in
                  your journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain rigorous quality standards throughout the
                  development process, from planning and design to
                  implementation and testing. Our commitment to quality ensures
                  reliable, maintainable, and scalable solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand the importance of meeting deadlines and
                  delivering on time. Our efficient project management processes
                  and agile methodologies ensure timely delivery without
                  compromising on quality.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>End-to-End Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From initial concept to deployment and ongoing support, we
                  provide comprehensive services that cover the entire software
                  development lifecycle. Our holistic approach ensures seamless
                  execution and long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Approach
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we work with clients to deliver successful software solutions.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We start by understanding your business, goals, and challenges through in-depth discussions and research.",
              },
              {
                step: "02",
                title: "Plan",
                description:
                  "We create a detailed roadmap with clear milestones, deliverables, and timelines for your project.",
              },
              {
                step: "03",
                title: "Execute",
                description:
                  "Our team develops your solution using agile methodologies, with regular updates and feedback cycles.",
              },
              {
                step: "04",
                title: "Deliver & Support",
                description:
                  "We deploy your solution and provide ongoing support and enhancements to ensure long-term success.",
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

      {/* Our Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Expertise
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in a wide range of technologies and industries.
            </p>
          </div>
          <Tabs defaultValue="technologies" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
                <TabsTrigger value="industries">Industries</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="technologies" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  {
                    name: "Web Development",
                    icon: "/placeholder.svg?height=60&width=60&text=Web",
                  },
                  {
                    name: "Mobile Development",
                    icon: "/placeholder.svg?height=60&width=60&text=Mobile",
                  },
                  {
                    name: "Cloud Services",
                    icon: "/placeholder.svg?height=60&width=60&text=Cloud",
                  },
                  {
                    name: "DevOps",
                    icon: "/placeholder.svg?height=60&width=60&text=DevOps",
                  },
                  {
                    name: "Database Solutions",
                    icon: "/placeholder.svg?height=60&width=60&text=DB",
                  },
                  {
                    name: "AI & Machine Learning",
                    icon: "/placeholder.svg?height=60&width=60&text=AI",
                  },
                  {
                    name: "Blockchain",
                    icon: "/placeholder.svg?height=60&width=60&text=Blockchain",
                  },
                  {
                    name: "IoT Solutions",
                    icon: "/placeholder.svg?height=60&width=60&text=IoT",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-16 w-16">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-center text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="industries" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  {
                    name: "Healthcare",
                    icon: "/placeholder.svg?height=60&width=60&text=Health",
                  },
                  {
                    name: "Finance",
                    icon: "/placeholder.svg?height=60&width=60&text=Finance",
                  },
                  {
                    name: "Retail",
                    icon: "/placeholder.svg?height=60&width=60&text=Retail",
                  },
                  {
                    name: "Education",
                    icon: "/placeholder.svg?height=60&width=60&text=Edu",
                  },
                  {
                    name: "Manufacturing",
                    icon: "/placeholder.svg?height=60&width=60&text=Mfg",
                  },
                  {
                    name: "Logistics",
                    icon: "/placeholder.svg?height=60&width=60&text=Logistics",
                  },
                  {
                    name: "Real Estate",
                    icon: "/placeholder.svg?height=60&width=60&text=Real+Estate",
                  },
                  {
                    name: "Technology",
                    icon: "/placeholder.svg?height=60&width=60&text=Tech",
                  },
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-16 w-16">
                      <Image
                        src={industry.icon || "/placeholder.svg"}
                        alt={industry.name}
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-center text-sm font-medium">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "eUNITA transformed our business with their custom software. Their team was professional and delivered on time.",
                author: "Sarah Johnson",
                position: "CEO, TechCorp",
                image: "/placeholder.svg?height=100&width=100&text=SJ",
              },
              {
                quote:
                  "The mobile app they developed for us exceeded our expectations. User engagement has increased by 200% since launch.",
                author: "Michael Chen",
                position: "Product Manager, HealthPlus",
                image: "/placeholder.svg?height=100&width=100&text=MC",
              },
              {
                quote:
                  "Their expertise in cloud migration saved us thousands in infrastructure costs. Highly recommended!",
                author: "Emily Rodriguez",
                position: "CTO, LogisticsPro",
                image: "/placeholder.svg?height=100&width=100&text=ER",
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Work With Us?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help you achieve your business goals
                with our custom software solutions.
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
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
