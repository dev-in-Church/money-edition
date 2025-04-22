import Link from "next/link";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, XCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transparent Pricing for Every Business
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the perfect plan for your business needs. No hidden fees,
                just value-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="website" className="mx-auto max-w-5xl">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="website">Websites</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="custom">Custom Software</TabsTrigger>
              </TabsList>
            </div>

            {/* Website Pricing */}
            <TabsContent value="website">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Starter
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Basic</CardTitle>
                    <CardDescription>
                      Perfect for small businesses and startups
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.4,999
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        one-time
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 5 pages</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic SEO optimization</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Contact form</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Social media integration</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Content Management System
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          E-commerce functionality
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-primary pricing-popular">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Most Popular
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <CardDescription>
                      For growing businesses with specific needs
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.9,999
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        one-time
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 15 pages</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced SEO optimization</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Content Management System</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Blog functionality</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Newsletter integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Enterprise
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>
                      Custom solutions for larger organizations
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.19,999+
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        one-time
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited pages</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Custom design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced CMS</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>E-commerce functionality</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Feature Comparison Table */}
              <div className="mt-16">
                <h3 className="text-xl font-bold text-center mb-6">
                  Detailed Feature Comparison
                </h3>
                <div className="overflow-x-auto">
                  <Table className="w-full comparison-table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[300px]">Feature</TableHead>
                        <TableHead>Basic</TableHead>
                        <TableHead>Professional</TableHead>
                        <TableHead>Enterprise</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Pages</TableCell>
                        <TableCell>Up to 5</TableCell>
                        <TableCell>Up to 15</TableCell>
                        <TableCell>Unlimited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Responsive Design
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          SEO Optimization
                        </TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Advanced</TableCell>
                        <TableCell>Premium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Content Management System
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Blog Functionality
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          E-commerce
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>Add-on</TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Custom Integrations
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>Limited</TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Analytics</TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Advanced</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Support</TableCell>
                        <TableCell>30 days</TableCell>
                        <TableCell>90 days</TableCell>
                        <TableCell>1 year</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            {/* Mobile App Pricing */}
            <TabsContent value="mobile">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Starter
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Basic</CardTitle>
                    <CardDescription>
                      Simple mobile app with core functionality
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.15,000
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Single platform (iOS or Android)</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 5 core features</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>User authentication</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic UI/UX design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>App store submission</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Push notifications
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Offline functionality
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-primary pricing-popular">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Most Popular
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <CardDescription>
                      Feature-rich app for growing businesses
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.30,000
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Cross-platform (iOS & Android)</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 10 features</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced UI/UX design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Push notifications</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>In-app purchases</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Analytics integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>3 months support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Enterprise
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>
                      Complex applications with custom requirements
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.50,000+
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Cross-platform with web dashboard</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited features</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Premium UI/UX design</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Third-party integrations</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced security features</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Offline functionality</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>12 months support & maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Feature Comparison Table */}
              <div className="mt-16">
                <h3 className="text-xl font-bold text-center mb-6">
                  Detailed Feature Comparison
                </h3>
                <div className="overflow-x-auto">
                  <Table className="w-full comparison-table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[300px]">Feature</TableHead>
                        <TableHead>Basic</TableHead>
                        <TableHead>Professional</TableHead>
                        <TableHead>Enterprise</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Platforms</TableCell>
                        <TableCell>Single platform</TableCell>
                        <TableCell>iOS & Android</TableCell>
                        <TableCell>iOS, Android & Web</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Features</TableCell>
                        <TableCell>Up to 5</TableCell>
                        <TableCell>Up to 10</TableCell>
                        <TableCell>Unlimited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          UI/UX Design
                        </TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Advanced</TableCell>
                        <TableCell>Premium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Push Notifications
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          In-app Purchases
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Offline Functionality
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>Limited</TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Third-party Integrations
                        </TableCell>
                        <TableCell>Limited</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Advanced</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Analytics</TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Advanced</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Support</TableCell>
                        <TableCell>30 days</TableCell>
                        <TableCell>3 months</TableCell>
                        <TableCell>12 months</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            {/* Custom Software Pricing */}
            <TabsContent value="custom">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Starter
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Starter</CardTitle>
                    <CardDescription>
                      Small-scale custom software solutions
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.25,000
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic workflow automation</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 3 user roles</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Standard reporting</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic data storage</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>3 months support</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          API development
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Custom integrations
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-primary pricing-popular">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Most Popular
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Business</CardTitle>
                    <CardDescription>
                      Comprehensive business software solutions
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.50,000
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced workflow automation</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 10 user roles</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Custom reporting</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Database integration</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>API development</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>6 months support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic third-party integrations</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative overflow-hidden border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background">
                        Enterprise
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>
                      Large-scale enterprise software solutions
                    </CardDescription>
                    <div className="mt-4 flex items-baseline text-4xl font-bold">
                      Ksh.100,000+
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        starting at
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Complete business process automation</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited user roles</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced analytics & BI</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Legacy system integration</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>High-level security features</span>
                      </li>
                      <li className="flex items-center gap-2 pricing-feature-divider">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Scalable architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>12 months support & maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Feature Comparison Table */}
              <div className="mt-16">
                <h3 className="text-xl font-bold text-center mb-6">
                  Detailed Feature Comparison
                </h3>
                <div className="overflow-x-auto">
                  <Table className="w-full comparison-table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[300px]">Feature</TableHead>
                        <TableHead>Starter</TableHead>
                        <TableHead>Business</TableHead>
                        <TableHead>Enterprise</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Workflow Automation
                        </TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Advanced</TableCell>
                        <TableCell>Complete</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          User Roles
                        </TableCell>
                        <TableCell>Up to 3</TableCell>
                        <TableCell>Up to 10</TableCell>
                        <TableCell>Unlimited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Reporting</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Custom</TableCell>
                        <TableCell>Advanced with BI</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          API Development
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                        <TableCell>
                          <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          System Integrations
                        </TableCell>
                        <TableCell>
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        </TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Advanced</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Security Features
                        </TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Enhanced</TableCell>
                        <TableCell>High-level</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Scalability
                        </TableCell>
                        <TableCell>Limited</TableCell>
                        <TableCell>Moderate</TableCell>
                        <TableCell>Enterprise-grade</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Support Period
                        </TableCell>
                        <TableCell>3 months</TableCell>
                        <TableCell>6 months</TableCell>
                        <TableCell>12 months</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ongoing Support & Maintenance
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Keep your software running smoothly with our maintenance plans.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Support</CardTitle>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  Ksh.499
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>48-hour response time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bug fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Monthly backups</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Select Plan</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden border-primary pricing-popular">
              <CardHeader>
                <CardTitle>Standard Support</CardTitle>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  Ksh.999
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Email & phone support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bug fixes & minor updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Weekly backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Monthly performance reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <Button className="w-full" asChild>
                  <Link href="/contact">Select Plan</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Premium Support</CardTitle>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  Ksh.1,999
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>4-hour response time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bug fixes & feature enhancements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Daily backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Weekly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Select Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "How do you determine the cost of a project?",
                answer:
                  "We evaluate project complexity, required features, timeline, and resources needed. Each project is unique, so we provide custom quotes based on your specific requirements after a thorough consultation.",
              },
              {
                question: "Do you offer discounts for startups?",
                answer:
                  "Yes, we have special startup packages and can work with your budget constraints. We believe in supporting innovative startups and can offer flexible payment terms.",
              },
              {
                question: "What's included in the maintenance plans?",
                answer:
                  "Our maintenance plans include regular updates, security patches, bug fixes, performance monitoring, and technical support. The level of service depends on the plan you choose.",
              },
              {
                question: "Can I upgrade my plan later?",
                answer:
                  "You can upgrade your plan at any time as your business grows. We make the transition seamless with no disruption to your services.",
              },
              {
                question: "Do you offer custom payment terms?",
                answer:
                  "Yes, we can work with you to create a payment schedule that fits your budget. For larger projects, we typically use a milestone-based payment structure.",
              },
              {
                question:
                  "What happens if I need additional features after the project is complete?",
                answer:
                  "We can add new features to your existing software through our maintenance plans or as separate development projects. We provide quotes for additional features based on their complexity.",
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
                Ready to Get Started?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and custom quote
                tailored to your needs.
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
