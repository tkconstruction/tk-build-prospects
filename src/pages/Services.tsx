import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Home, Hammer, Shield, CheckCircle } from "lucide-react";

const Services = () => {
  const roofingServices = [
    "New Roof Installation",
    "Roof Repair & Replacement",
    "Storm Damage Restoration",
    "Emergency Roof Repair",
    "Gutter Installation & Repair",
    "Roof Inspections",
  ];

  const constructionServices = [
    "Kitchen & Bathroom Remodeling",
    "Home Additions",
    "Deck & Patio Construction",
    "Siding Installation",
    "Window & Door Installation",
    "Interior & Exterior Painting",
    "Drywall Repair",
    "Fixture Installation",
  ];

  const faqs = [
    {
      question: "How do I know if my roof has storm damage?",
      answer:
        "Common signs include missing or damaged shingles, granules in gutters, water stains on ceilings, and visible dents or cracks. The Pacific Northwest weather can be harsh, especially during winter storms. We offer free inspections to assess any potential damage and work with your insurance company to ensure proper coverage.",
    },
    {
      question: "Do you help with insurance claims for storm damage?",
      answer:
        "Yes! We have extensive experience working with homeowners insurance companies in the PNW. We'll document the damage, provide detailed estimates, and communicate directly with your insurance adjuster to ensure you get the coverage you deserve. Our team understands the local weather patterns and can identify storm-related damage that others might miss.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive construction and roofing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Roofing Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Home className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Roofing Services
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Your roof is your home's first line of defense against the Pacific Northwest's
                challenging weather. We specialize in durable, weather-resistant roofing solutions
                that protect your investment for years to come.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you need a complete roof replacement, storm damage repair, or routine
                maintenance, our certified professionals deliver quality craftsmanship backed by
                industry-leading warranties.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get a Roofing Quote
                </Button>
              </Link>
            </div>

            <div className="animate-fade-in-up">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h3>
                  <ul className="space-y-4">
                    {roofingServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Construction & Handyman Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Our Capabilities</h3>
                  <ul className="space-y-4">
                    {constructionServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Hammer className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Construction & Handyman Services
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                From major renovations to small repairs, we handle projects of all sizes with the
                same level of attention to detail and professionalism.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced team brings your vision to life, whether it's a complete kitchen
                remodel, a new deck for summer entertaining, or simple maintenance and repairs
                around your home.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                No job is too big or too small. We pride ourselves on reliability, quality
                workmanship, and transparent communication throughout every project.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Licensed, Bonded & Insured
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Your peace of mind is our priority. All our work is backed by comprehensive insurance
            and industry certifications.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get Your Free Estimate
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
