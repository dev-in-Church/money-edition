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
  Smartphone,
  Globe,
  Code,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Development Services | eUNITA",
  description:
    "Custom mobile app development for iOS and Android. Native apps, cross-platform solutions, and progressive web apps.",
};

export default function MobileDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mobile App Development
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Powerful, intuitive mobile applications for iOS and Android
                  that engage users and drive business growth.
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
                src="/images/services/mobi1.jpg?height=600&width=800&text=Mobile+Development"
                alt="Mobile Development"
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
              Our Mobile Development Services
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We build custom mobile applications that deliver exceptional user
              experiences across all platforms.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Native iOS Development</CardTitle>
                <CardDescription>
                  Custom iOS applications built with Swift for optimal
                  performance and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Swift & SwiftUI development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Apple design guidelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>App Store optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>iOS-specific features</span>
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
                <CardTitle>Native Android Development</CardTitle>
                <CardDescription>
                  Powerful Android applications built with Kotlin for the
                  diverse Android ecosystem.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kotlin & Jetpack Compose</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Material Design principles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Google Play optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Android-specific features</span>
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
                <CardTitle>Cross-Platform Development</CardTitle>
                <CardDescription>
                  Build once, deploy everywhere with React Native or Flutter for
                  cost-effective solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>React Native & Flutter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Code reusability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Faster time-to-market</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Native-like performance</span>
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
                <CardTitle>Progressive Web Apps</CardTitle>
                <CardDescription>
                  Web applications with mobile app capabilities for broader
                  reach and accessibility.
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
                    <span>Home screen installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cross-browser compatibility</span>
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
                <CardTitle>App Modernization</CardTitle>
                <CardDescription>
                  Upgrade and redesign existing mobile applications for improved
                  performance and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>UI/UX redesign</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Code refactoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Feature enhancement</span>
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
                <CardTitle>App Maintenance & Support</CardTitle>
                <CardDescription>
                  Ongoing support and updates to keep your mobile application
                  running smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Regular updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bug fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>OS compatibility</span>
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
              We leverage the latest mobile technologies to build fast, secure,
              and scalable applications.
            </p>
          </div>
          <Tabs defaultValue="ios" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="ios">iOS</TabsTrigger>
                <TabsTrigger value="android">Android</TabsTrigger>
                <TabsTrigger value="cross-platform">Cross-Platform</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="ios" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Swift",
                    logo: "/svg/Swift.svg?height=80&width=80&text=Swift",
                  },
                  {
                    name: "Swiftui",
                    logo: "/svg/SwiftUI.svg?height=80&width=80&text=SwiftUI",
                  },
                  {
                    name: "Objective-C",
                    logo: "/svg/Objective-C.svg?height=80&width=80&text=Objective-C",
                  },
                  {
                    name: "Xcode",
                    logo: "/svg/Xcode.svg?height=80&width=80&text=Xcode",
                  },
                  // {
                  //   name: "Core Data",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=Core+Data",
                  // },
                  // {
                  //   name: "ARKit",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=ARKit",
                  // },
                  // {
                  //   name: "CoreML",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=CoreML",
                  // },
                  // {
                  //   name: "WidgetKit",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=WidgetKit",
                  // },
                  // {
                  //   name: "CloudKit",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=CloudKit",
                  // },
                  {
                    name: "TestFlight",
                    logo: "/svg/Test-flight.svg?height=80&width=80&text=TestFlight",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/eunita_ph.jpg"}
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
            <TabsContent value="android" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "Kotlin",
                    logo: "/svg/Kotlin.svg?height=80&width=80&text=Kotlin",
                  },
                  {
                    name: "Java",
                    logo: "/svg/Java.svg?height=80&width=80&text=Java",
                  },
                  // {
                  //   name: "Jetpack Compose",
                  //   logo: "/svg/Jetpack-Compose.svg?height=80&width=80&text=Compose",
                  // },
                  {
                    name: "Android Studio",
                    logo: "/svg/Android-Studio.svg?height=80&width=80&text=Android+Studio",
                  },
                  // {
                  //   name: "Room",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=Room",
                  // },
                  // {
                  //   name: "Retrofit",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=Retrofit",
                  // },
                  // {
                  //   name: "Dagger/Hilt",
                  //   logo: "/eunita_ph.jpg?height=80&width=80&text=Dagger",
                  // },
                  {
                    name: "Firebase",
                    logo: "/svg/Firebase.svg?height=80&width=80&text=Firebase",
                  },
                  {
                    name: "Material Design",
                    logo: "/svg/Material-UI.svg?height=80&width=80&text=Material",
                  },
                  // {
                  //   name: "Google Play",
                  //   logo: "/svg/Google-Play.svg?height=80&width=80&text=Google+Play",
                  // },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/eunita_ph.jpg"}
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
            <TabsContent value="cross-platform" className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[
                  {
                    name: "React Native",
                    logo: "/svg/React-Native.svg?height=80&width=80&text=React+Native",
                  },
                  {
                    name: "Flutter",
                    logo: "/svg/Flutter.svg?height=80&width=80&text=Flutter",
                  },
                  {
                    name: "Dart",
                    logo: "/svg/Dart.svg?height=80&width=80&text=Dart",
                  },
                  {
                    name: "TypeScript",
                    logo: "/svg/Typescript.svg?height=80&width=80&text=TypeScript",
                  },
                  {
                    name: "JavaScript",
                    logo: "/svg/Javascript.svg?height=80&width=80&text=JavaScript",
                  },
                  // {
                  //   name: "Expo",
                  //   logo: "/svg/Expo.svg?height=80&width=80&text=Expo",
                  // },
                  // {
                  //   name: "Redux",
                  //   logo: "/svg/Redux.svg?height=80&width=80&text=Redux",
                  // },
                  // {
                  //   name: "MobX",
                  //   logo: "/svg/MobX.svg?height=80&width=80&text=MobX",
                  // },
                  // {
                  //   name: "GraphQL",
                  //   logo: "/svg/GraphQL.svg?height=80&width=80&text=GraphQL",
                  // },
                  // {
                  //   name: "Ionic",
                  //   logo: "/svg/Ionic.svg?height=80&width=80&text=Ionic",
                  // },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={tech.logo || "/eunita_ph.jpg"}
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
              Our Mobile App Development Process
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to ensure successful app delivery.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements, target audience, and business goals.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We create wireframes, prototypes, and UI/UX designs for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our engineers build your app using agile methodologies.",
              },
              {
                step: "04",
                title: "Testing",
                description:
                  "Rigorous testing across devices to ensure quality and performance.",
              },
              {
                step: "05",
                title: "Deployment",
                description:
                  "App store submission, launch, and ongoing support.",
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
              Featured Mobile Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our successful mobile app development
              projects.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Healthcare App",
                category: "iOS & Android",
                description:
                  "Patient management app for a leading healthcare provider with appointment scheduling.",
                image:
                  "/eunita_ph.jpg?height=400&width=600&text=Healthcare+App",
              },
              {
                title: "Fitness Tracker",
                category: "Cross-Platform",
                description:
                  "Comprehensive fitness tracking app with workout plans and nutrition tracking.",
                image: "/eunita_ph.jpg?height=400&width=600&text=Fitness+App",
              },
              {
                title: "E-commerce Mobile App",
                category: "React Native",
                description:
                  "Feature-rich shopping app with personalized recommendations and secure checkout.",
                image:
                  "/eunita_ph.jpg?height=400&width=600&text=E-commerce+App",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/eunita_ph.jpg"}
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
                View All Mobile Projects
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
              Find answers to common questions about our mobile app development
              services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "How long does it take to develop a mobile app?",
                answer:
                  "The timeline for a mobile app project depends on its complexity. A simple app might take 2-3 months, while a complex app could take 4-6 months or more. We'll provide a detailed timeline during the discovery phase.",
              },
              {
                question:
                  "Should I build a native app or a cross-platform app?",
                answer:
                  "It depends on your specific needs. Native apps offer the best performance and access to platform-specific features but require separate development for iOS and Android. Cross-platform solutions like React Native or Flutter allow you to build once for both platforms, reducing cost and time-to-market, with only minor compromises in performance for most use cases.",
              },
              {
                question: "How much does it cost to develop a mobile app?",
                answer:
                  "The cost varies widely based on complexity, features, platforms, and design requirements. Basic apps may start around $15,000, while complex apps with advanced features can cost $50,000 or more. We provide detailed estimates after understanding your specific requirements.",
              },
              {
                question: "Do you provide app maintenance services?",
                answer:
                  "Yes, we offer ongoing maintenance plans to keep your app secure, up-to-date, and performing well. Our maintenance services include regular updates, bug fixes, performance optimization, and compatibility updates for new OS versions.",
              },
              {
                question: "Can you update or redesign my existing app?",
                answer:
                  "Absolutely. We specialize in app modernization and redesign services. We can update your existing app with new features, improve its performance, enhance the user interface, or completely rebuild it using modern technologies.",
              },
              {
                question: "How do you ensure the security of mobile apps?",
                answer:
                  "We implement industry-standard security practices including secure authentication, data encryption, secure API communication, code obfuscation, and regular security testing. We also stay updated on the latest security vulnerabilities and best practices for both iOS and Android platforms.",
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
                Ready to Build Your Mobile App?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and quote tailored to
                your mobile app development needs.
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
