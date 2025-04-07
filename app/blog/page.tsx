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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | eUNITA",
  description:
    "Insights, news, and resources about software development, technology trends, and industry best practices.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                eUNITA Blog
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, news, and resources about software development,
                technology trends, and industry best practices.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Search articles..."
                  type="search"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Articles
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our most popular and insightful content.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Future of Web Development: Trends to Watch in 2025",
                excerpt:
                  "Explore the emerging technologies and methodologies that will shape web development in the coming years.",
                category: "Web Development",
                author: "John Smith",
                date: "March 15, 2025",
                readTime: "8 min read",
                image:
                  "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
                slug: "future-web-development-trends-2025",
              },
              {
                title: "Building Scalable Microservices Architecture",
                excerpt:
                  "Learn best practices for designing and implementing microservices that can scale with your business needs.",
                category: "Architecture",
                author: "Sarah Chen",
                date: "March 10, 2025",
                readTime: "12 min read",
                image:
                  "/placeholder.svg?height=400&width=600&text=Microservices+Architecture",
                slug: "building-scalable-microservices-architecture",
              },
              {
                title: "AI in Software Development: Beyond the Hype",
                excerpt:
                  "A practical look at how artificial intelligence is transforming the software development lifecycle.",
                category: "Artificial Intelligence",
                author: "Michael Rodriguez",
                date: "March 5, 2025",
                readTime: "10 min read",
                image:
                  "/placeholder.svg?height=400&width=600&text=AI+in+Development",
                slug: "ai-software-development-beyond-hype",
              },
            ].map((article, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/blog/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Browse by Category
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find articles on topics that interest you.
            </p>
          </div>
          <Tabs defaultValue="all" className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Dev</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Dev</TabsTrigger>
                <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "10 Essential DevOps Practices for 2025",
                    excerpt:
                      "Improve your development workflow with these essential DevOps practices.",
                    category: "DevOps",
                    author: "David Kim",
                    date: "March 1, 2025",
                    readTime: "7 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=DevOps+Practices",
                    slug: "essential-devops-practices-2025",
                  },
                  {
                    title: "React vs. Vue in 2025: Which Should You Choose?",
                    excerpt:
                      "A comprehensive comparison of React and Vue.js for modern web development.",
                    category: "Web Development",
                    author: "Lisa Patel",
                    date: "February 25, 2025",
                    readTime: "9 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=React+vs+Vue",
                    slug: "react-vs-vue-2025-comparison",
                  },
                  {
                    title: "Flutter vs. React Native: The Ultimate Showdown",
                    excerpt:
                      "Comparing the two most popular cross-platform mobile development frameworks.",
                    category: "Mobile Development",
                    author: "John Smith",
                    date: "February 20, 2025",
                    readTime: "11 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Flutter+vs+React+Native",
                    slug: "flutter-react-native-ultimate-showdown",
                  },
                  {
                    title: "Serverless Architecture: Benefits and Challenges",
                    excerpt:
                      "Explore the advantages and potential pitfalls of serverless architecture.",
                    category: "Cloud",
                    author: "Sarah Chen",
                    date: "February 15, 2025",
                    readTime: "8 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Serverless+Architecture",
                    slug: "serverless-architecture-benefits-challenges",
                  },
                  {
                    title: "Database Performance Optimization Techniques",
                    excerpt:
                      "Practical tips to improve your database performance and efficiency.",
                    category: "Database",
                    author: "Michael Rodriguez",
                    date: "February 10, 2025",
                    readTime: "10 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Database+Optimization",
                    slug: "database-performance-optimization-techniques",
                  },
                  {
                    title: "The State of Cybersecurity in 2025",
                    excerpt:
                      "Current trends and best practices in software security and data protection.",
                    category: "Security",
                    author: "Emily Johnson",
                    date: "February 5, 2025",
                    readTime: "9 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Cybersecurity",
                    slug: "state-of-cybersecurity-2025",
                  },
                ].map((article, index) => (
                  <Card key={index} className="flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "React vs. Vue in 2025: Which Should You Choose?",
                    excerpt:
                      "A comprehensive comparison of React and Vue.js for modern web development.",
                    category: "Web Development",
                    author: "Lisa Patel",
                    date: "February 25, 2025",
                    readTime: "9 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=React+vs+Vue",
                    slug: "react-vs-vue-2025-comparison",
                  },
                  {
                    title:
                      "The Future of Web Development: Trends to Watch in 2025",
                    excerpt:
                      "Explore the emerging technologies and methodologies that will shape web development in the coming years.",
                    category: "Web Development",
                    author: "John Smith",
                    date: "March 15, 2025",
                    readTime: "8 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
                    slug: "future-web-development-trends-2025",
                  },
                  {
                    title: "Optimizing Web Performance: A Comprehensive Guide",
                    excerpt:
                      "Learn how to improve your website's speed and performance for better user experience.",
                    category: "Web Development",
                    author: "David Kim",
                    date: "January 30, 2025",
                    readTime: "12 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Web+Performance",
                    slug: "optimizing-web-performance-guide",
                  },
                ].map((article, index) => (
                  <Card key={index} className="flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Flutter vs. React Native: The Ultimate Showdown",
                    excerpt:
                      "Comparing the two most popular cross-platform mobile development frameworks.",
                    category: "Mobile Development",
                    author: "John Smith",
                    date: "February 20, 2025",
                    readTime: "11 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Flutter+vs+React+Native",
                    slug: "flutter-react-native-ultimate-showdown",
                  },
                  {
                    title: "Mobile App Performance Optimization",
                    excerpt:
                      "Strategies to improve the performance and user experience of your mobile applications.",
                    category: "Mobile Development",
                    author: "Sarah Chen",
                    date: "January 25, 2025",
                    readTime: "10 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Mobile+Performance",
                    slug: "mobile-app-performance-optimization",
                  },
                  {
                    title: "The Future of Mobile Development in 2025",
                    excerpt:
                      "Emerging trends and technologies in mobile app development to watch for.",
                    category: "Mobile Development",
                    author: "Lisa Patel",
                    date: "January 20, 2025",
                    readTime: "8 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Mobile+Future",
                    slug: "future-mobile-development-2025",
                  },
                ].map((article, index) => (
                  <Card key={index} className="flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cloud" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "10 Essential DevOps Practices for 2025",
                    excerpt:
                      "Improve your development workflow with these essential DevOps practices.",
                    category: "DevOps",
                    author: "David Kim",
                    date: "March 1, 2025",
                    readTime: "7 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=DevOps+Practices",
                    slug: "essential-devops-practices-2025",
                  },
                  {
                    title: "Serverless Architecture: Benefits and Challenges",
                    excerpt:
                      "Explore the advantages and potential pitfalls of serverless architecture.",
                    category: "Cloud",
                    author: "Sarah Chen",
                    date: "February 15, 2025",
                    readTime: "8 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Serverless+Architecture",
                    slug: "serverless-architecture-benefits-challenges",
                  },
                  {
                    title:
                      "Kubernetes vs. Docker Swarm: Which Container Orchestration Tool to Choose",
                    excerpt:
                      "A detailed comparison of the two popular container orchestration platforms.",
                    category: "DevOps",
                    author: "Michael Rodriguez",
                    date: "January 15, 2025",
                    readTime: "11 min read",
                    image:
                      "/placeholder.svg?height=400&width=600&text=Kubernetes+vs+Docker",
                    slug: "kubernetes-docker-swarm-comparison",
                  },
                ].map((article, index) => (
                  <Card key={index} className="flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/blog/archive">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground">
                  Stay updated with the latest insights, trends, and news in
                  software development. We'll send you our best articles,
                  resources, and exclusive content directly to your inbox.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    className="flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Newsletter"
                alt="Newsletter"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Recent Posts
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay up-to-date with our latest articles and insights.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                title:
                  "How to Implement Authentication in Next.js Applications",
                excerpt:
                  "A step-by-step guide to implementing secure authentication in your Next.js projects.",
                category: "Web Development",
                author: "Lisa Patel",
                date: "March 20, 2025",
                readTime: "15 min read",
                image:
                  "/placeholder.svg?height=400&width=600&text=Next.js+Auth",
                slug: "nextjs-authentication-implementation",
              },
              {
                title: "Introduction to GraphQL: A REST Alternative",
                excerpt:
                  "Learn the basics of GraphQL and how it differs from traditional REST APIs.",
                category: "API Development",
                author: "John Smith",
                date: "March 18, 2025",
                readTime: "12 min read",
                image: "/placeholder.svg?height=400&width=600&text=GraphQL",
                slug: "introduction-graphql-rest-alternative",
              },
              {
                title: "Optimizing Docker Containers for Production",
                excerpt:
                  "Best practices for creating efficient and secure Docker containers for production environments.",
                category: "DevOps",
                author: "Michael Rodriguez",
                date: "March 17, 2025",
                readTime: "10 min read",
                image:
                  "/placeholder.svg?height=400&width=600&text=Docker+Optimization",
                slug: "optimizing-docker-containers-production",
              },
              {
                title: "TypeScript Best Practices for Large-Scale Applications",
                excerpt:
                  "How to effectively use TypeScript to maintain large codebases and improve developer productivity.",
                category: "Programming",
                author: "Sarah Chen",
                date: "March 16, 2025",
                readTime: "14 min read",
                image: "/placeholder.svg?height=400&width=600&text=TypeScript",
                slug: "typescript-best-practices-large-applications",
              },
            ].map((article, index) => (
              <Card key={index} className="flex overflow-hidden">
                <div className="hidden sm:block sm:w-[200px]">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-1 text-lg">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0" asChild>
                      <Link href={`/blog/${article.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Want to Contribute?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Share your knowledge and expertise with our community. We
                welcome guest posts from industry professionals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Submit a Guest Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog/guidelines">View Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
