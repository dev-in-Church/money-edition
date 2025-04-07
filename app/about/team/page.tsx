import Image from "next/image";
import Link from "next/link";
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
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | eUNITA",
  description:
    "Meet the talented professionals behind eUNITA. Our diverse team of experts is dedicated to delivering exceptional software solutions.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Team
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented professionals behind eUNITA. Our diverse team of
                experts is dedicated to delivering exceptional software
                solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {[
                { Image: "/images/team/collo.jpg" },
                { Image: "/images/team/eliud.jpg" },
                { Image: "/images/team/ck.jpg" },
                { Image: "/images/team/mannu.jpg" },
                { Image: "/images/team/duo.jpg" },
                { Image: "/images/team/cs.jpg" },
                { Image: "/images/team/waria.jpg" },
                { Image: "/images/team/kibe.jpg" },
              ].map((i) => (
                <div
                  key={i.Image}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 overflow-hidden rounded-full">
                    <Image
                      src={`${i.Image}?height=200&width=200&text=Team+${i}`}
                      alt={`Team Member ${i}`}
                      width={200}
                      height={200}
                      className="h-32 w-32 object-cover md:h-40 md:w-40"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Leadership Team
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the visionaries guiding eUNITA to success.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Emmanuel Ambundo",
                position: "Chief Executive Officer",
                bio: "Emmanuel has over 20 years of experience in the software industry. He founded eUNITA with a vision to create a company that delivers exceptional software while prioritizing both technical excellence and client satisfaction.",
                image: "/placeholder.svg?height=400&width=400&text=John+Smith",
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer",
                bio: "Sarah leads our technical strategy and ensures we stay at the forefront of technological advancements. With a background in computer science and 15 years of experience, she guides our engineering teams to deliver innovative solutions.",
                image: "/placeholder.svg?height=400&width=400&text=Sarah+Chen",
              },
              {
                name: "Michael Rodriguez",
                position: "Chief Operations Officer",
                bio: "Michael oversees our day-to-day operations and ensures we deliver projects on time and within budget. His background in project management and business administration helps us maintain operational excellence.",
                image:
                  "/placeholder.svg?height=400&width=400&text=Michael+Rodriguez",
              },
              {
                name: "Emily Johnson",
                position: "Chief Marketing Officer",
                bio: "Emily leads our marketing and brand strategy. With over 12 years of experience in technology marketing, she helps us communicate our value proposition and connect with clients who can benefit from our services.",
                image:
                  "/placeholder.svg?height=400&width=400&text=Emily+Johnson",
              },
              {
                name: "David Kim",
                position: "Chief Financial Officer",
                bio: "David manages our financial strategy and ensures the company's financial health. His background in finance and experience with technology companies provides valuable insights for our growth strategy.",
                image: "/placeholder.svg?height=400&width=400&text=David+Kim",
              },
              {
                name: "Lisa Patel",
                position: "VP of Client Success",
                bio: "Lisa ensures our clients receive exceptional service and achieve their business goals through our solutions. Her client-centric approach and problem-solving skills make her an invaluable asset to our team.",
                image: "/placeholder.svg?height=400&width=400&text=Lisa+Patel",
              },
            ].map((leader, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription>{leader.position}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-start gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Departments Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Departments
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the specialized teams that make up eUNITA.
            </p>
          </div>
          <Tabs defaultValue="engineering" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="pm">Project Management</TabsTrigger>
                <TabsTrigger value="qa">QA</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="engineering" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold">Engineering Team</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our engineering team consists of skilled developers
                    specializing in various technologies and platforms. From
                    frontend and backend development to DevOps and database
                    architecture, our engineers bring diverse expertise to every
                    project.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Frontend Development:</span>
                      <span className="text-muted-foreground">
                        React, Angular, Vue.js, Next.js
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Backend Development:</span>
                      <span className="text-muted-foreground">
                        Node.js, Python, Java, .NET, PHP
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Mobile Development:</span>
                      <span className="text-muted-foreground">
                        iOS (Swift), Android (Kotlin), React Native, Flutter
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">DevOps:</span>
                      <span className="text-muted-foreground">
                        CI/CD, Docker, Kubernetes, AWS, Azure, GCP
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/svg/Github.svg?height=200&width=200&text=Engineer+${i}`}
                        alt={`Engineer ${i}`}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold">Design Team</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our design team creates intuitive, user-friendly interfaces
                    that enhance the user experience. They combine aesthetic
                    appeal with functional design to ensure our solutions are
                    both beautiful and effective.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">UI Design:</span>
                      <span className="text-muted-foreground">
                        Creating visually appealing interfaces
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">UX Design:</span>
                      <span className="text-muted-foreground">
                        Ensuring intuitive user experiences
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Interaction Design:</span>
                      <span className="text-muted-foreground">
                        Designing how users interact with the product
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">User Research:</span>
                      <span className="text-muted-foreground">
                        Understanding user needs and behaviors
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/svg/Java.svg?height=200&width=200&text=Designer+${i}`}
                        alt={`Designer ${i}`}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pm" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold">Project Management Team</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our project managers ensure that projects are delivered on
                    time, within budget, and to the highest quality standards.
                    They coordinate between teams, manage resources, and
                    maintain clear communication with clients.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Project Planning:</span>
                      <span className="text-muted-foreground">
                        Defining scope, timelines, and resources
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Agile Methodologies:</span>
                      <span className="text-muted-foreground">
                        Scrum, Kanban, and hybrid approaches
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Risk Management:</span>
                      <span className="text-muted-foreground">
                        Identifying and mitigating potential issues
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Client Communication:</span>
                      <span className="text-muted-foreground">
                        Regular updates and transparent reporting
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/svg/Javascript.svg?height=200&width=200&text=PM+${i}`}
                        alt={`Project Manager ${i}`}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="qa" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold">Quality Assurance Team</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our QA team ensures that all our solutions meet the highest
                    quality standards. They conduct thorough testing to identify
                    and resolve issues before deployment, ensuring a seamless
                    user experience.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Manual Testing:</span>
                      <span className="text-muted-foreground">
                        Comprehensive functional testing
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Automated Testing:</span>
                      <span className="text-muted-foreground">
                        Efficient regression and performance testing
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Security Testing:</span>
                      <span className="text-muted-foreground">
                        Identifying vulnerabilities and ensuring data protection
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">
                        User Acceptance Testing:
                      </span>
                      <span className="text-muted-foreground">
                        Validating solutions meet user requirements
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/svg/Typescript.svg?height=200&width=200&text=QA+${i}`}
                        alt={`QA Engineer ${i}`}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Company Culture
              </h2>
              <div className="mt-4 space-y-4">
                <p className="text-muted-foreground">
                  At eUNITA, we believe that a positive company culture is
                  essential for delivering exceptional results. We foster an
                  environment of collaboration, innovation, and continuous
                  learning.
                </p>
                <p className="text-muted-foreground">
                  Our team members are encouraged to share ideas, take
                  initiative, and think creatively. We celebrate diversity and
                  believe that different perspectives lead to better solutions.
                </p>
                <p className="text-muted-foreground">
                  We invest in our team's growth through regular training,
                  workshops, and conference attendance. We also promote
                  work-life balance and offer flexible working arrangements to
                  ensure our team members can perform at their best.
                </p>
                <p className="text-muted-foreground">
                  Regular team-building activities, hackathons, and social
                  events help strengthen relationships and foster a sense of
                  belonging. We're proud of the collaborative and supportive
                  culture we've built, and it's reflected in the quality of our
                  work.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/svg/Ruby.svg?height=300&width=300&text=Culture+${i}`}
                    alt={`Company Culture ${i}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our Team
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our team.
                Check out our current openings and become part of our success
                story.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/about/careers">
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
