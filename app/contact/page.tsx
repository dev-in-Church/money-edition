import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | eUNITA",
  description:
    "Get in touch with our team for custom software development solutions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Let's discuss how we can help you
                achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Reach out to us directly or fill out the form to get started.
              </p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-base">Our Office</CardTitle>
                    <CardDescription className="mt-2">
                      Eldoret Daima Towers, 9th Floor
                      <br />
                      Eldoret, C39 94107
                      <br />
                      Kenya
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-base">Phone</CardTitle>
                    <CardDescription className="mt-2">
                      <a
                        href="tel:+254795198141"
                        className="hover:text-primary transition-colors"
                      >
                        +254 795 198 141
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-base">Email</CardTitle>
                    <CardDescription className="mt-2">
                      <a
                        href="mailto:info@eUNITAsolutions.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@eunita.com
                      </a>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-base">Business Hours</CardTitle>
                    <CardDescription className="mt-2">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                      <br />
                      Saturday - Sunday: Closed
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="grid gap-2">
                    <Label>I'm interested in</Label>
                    <RadioGroup
                      defaultValue="web"
                      className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web" id="web" />
                        <Label htmlFor="web" className="cursor-pointer">
                          Web Development
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="cursor-pointer">
                          Mobile Development
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="custom" id="custom" />
                        <Label htmlFor="custom" className="cursor-pointer">
                          Custom Software
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other Services
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-10k">
                          Less than $10,000
                        </SelectItem>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="more-than-100k">
                          More than $100,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-2 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Visit Our Office
              </h2>
              <p className="text-muted-foreground">
                Come by our headquarters to meet our team in person.
              </p>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775!2d-122.4004334!3d37.7857739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzA4LjYiTiAxMjLCsDI0JzAxLjYiVw!5e0!3m2!1sen!2sus!4v1625761234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="eUNITA Office Location"
              ></iframe>
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
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our custom software solutions can help you
                achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/services">
                  Explore Our Services
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
