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
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | eUNITA",
  description:
    "Join our team of talented professionals. Explore current job openings and learn about our company culture and benefits.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Join Our Team
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Be part of a team that's passionate about creating innovative
                  software solutions and making a difference for our clients.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#open-positions">
                    View Open Positions
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
                src="/images/services/career1.jpg?height=600&width=800&text=Join+Our+Team"
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

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Join eUNITA
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer more than just a job. Here's why you should consider a
              career with us.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Challenging Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work on diverse, challenging projects across various
                  industries and technologies. Every project offers new learning
                  opportunities and chances to grow your skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We invest in your growth through training, workshops,
                  conference attendance, and mentorship programs. We encourage
                  continuous learning and career advancement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value work-life balance and offer flexible working
                  arrangements, generous paid time off, and a supportive
                  environment that respects your personal time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a collaborative and inclusive culture where your ideas
                  are valued. We foster teamwork, open communication, and mutual
                  respect among all team members.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy competitive compensation, health insurance, retirement
                  plans, and other benefits designed to support your well-being
                  and financial security.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be part of a company that values innovation and stays at the
                  forefront of technology. We encourage experimentation and
                  creative problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Benefits
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive benefits package to support your health,
              wealth, and well-being.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Health & Wellness</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">
                      Comprehensive Health Insurance
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Medical, dental, and vision coverage for you and your
                      dependents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Mental Health Support</span>
                    <p className="text-sm text-muted-foreground">
                      Access to counseling services and mental health resources.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Wellness Programs</span>
                    <p className="text-sm text-muted-foreground">
                      Fitness reimbursements, wellness challenges, and health
                      initiatives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Paid Time Off</span>
                    <p className="text-sm text-muted-foreground">
                      Generous vacation, sick leave, and holidays to rest and
                      recharge.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Financial & Professional</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">
                      Competitive Compensation
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Salary packages that recognize your skills and experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Retirement Plans</span>
                    <p className="text-sm text-muted-foreground">
                      401(k) with company matching to help you save for the
                      future.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">
                      Professional Development
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Budget for conferences, courses, and certifications.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">
                      Flexible Work Arrangements
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Remote work options and flexible schedules to support
                      work-life balance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Open Positions
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our current job openings and find the perfect role for
              your skills and career goals.
            </p>
          </div>
          <Tabs defaultValue="engineering" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="pm">Project Management</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="engineering" className="mt-8">
              <div className="grid gap-6">
                {[
                  {
                    title: "Senior Frontend Developer",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "We're looking for an experienced Frontend Developer with expertise in React and modern JavaScript frameworks to join our team.",
                  },
                  {
                    title: "Backend Developer (Node.js)",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "Join our backend team to build scalable and efficient server-side applications using Node.js and related technologies.",
                  },
                  {
                    title: "Full Stack Developer",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "We're seeking a versatile Full Stack Developer who can work across the entire technology stack to deliver complete solutions.",
                  },
                  {
                    title: "DevOps Engineer",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "Help us streamline our development and deployment processes by implementing and managing DevOps practices and tools.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle>{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/about/careers/${index + 1}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-8">
              <div className="grid gap-6">
                {[
                  {
                    title: "UI/UX Designer",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "We're looking for a talented UI/UX Designer to create intuitive and engaging user experiences for our clients' products.",
                  },
                  {
                    title: "Product Designer",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Join our design team to help shape product strategy, user experience, and visual design for complex software applications.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle>{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/about/careers/${index + 1}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pm" className="mt-8">
              <div className="grid gap-6">
                {[
                  {
                    title: "Project Manager",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "We're seeking an experienced Project Manager to lead software development projects from inception to completion.",
                  },
                  {
                    title: "Scrum Master",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Join our team as a Scrum Master to facilitate agile processes and help our development teams deliver high-quality software.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle>{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/about/careers/${index + 1}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="other" className="mt-8">
              <div className="grid gap-6">
                {[
                  {
                    title: "Marketing Specialist",
                    location: "San Francisco, CA (Remote Option)",
                    type: "Full-time",
                    description:
                      "We're looking for a Marketing Specialist to help promote our services and generate leads through various digital channels.",
                  },
                  {
                    title: "Technical Writer",
                    location: "Remote",
                    type: "Contract",
                    description:
                      "Join our team as a Technical Writer to create clear, concise documentation for our software products and services.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle>{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/about/careers/${index + 1}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Application Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's what to expect when you apply for a position at eUNITA.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Application",
                description:
                  "Submit your resume and cover letter through our online application system.",
              },
              {
                step: "02",
                title: "Initial Screening",
                description:
                  "Our HR team will review your application and conduct an initial phone interview.",
              },
              {
                step: "03",
                title: "Technical Assessment",
                description:
                  "Depending on the role, you may be asked to complete a technical assessment or coding challenge.",
              },
              {
                step: "04",
                title: "Final Interviews",
                description:
                  "Meet with the team for in-depth interviews to assess skills and cultural fit.",
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

      {/* Employee Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Employee Testimonials
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our team members about their experience working at
              eUNITA.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Working at eUNITA has been the highlight of my career. The challenging projects and supportive team environment have helped me grow both professionally and personally.",
                author: "David Lee",
                position: "Senior Developer",
                years: "5 years at eUNITA",
                image: "/eunita_ph.jpg?height=100&width=100&text=DL",
              },
              {
                quote:
                  "I love the collaborative culture here. Everyone is willing to share knowledge and help each other succeed. The work-life balance is also excellent, which is rare in the tech industry.",
                author: "Maria Garcia",
                position: "UX Designer",
                years: "3 years at eUNITA",
                image: "/eunita_ph.jpg?height=100&width=100&text=MG",
              },
              {
                quote:
                  "The professional growth opportunities at eUNITA are unmatched. I started as a junior developer and have been able to advance my career with the support of mentors and continuous learning resources.",
                author: "James Wilson",
                position: "Project Manager",
                years: "4 years at eUNITA",
                image: "/eunita_ph.jpg?height=100&width=100&text=JW",
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
                      src={testimonial.image || "/eunita_ph.jpg"}
                      alt={testimonial.author}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.years}
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
                Ready to Apply?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards an exciting career at eUNITA. Browse
                our open positions and apply today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
