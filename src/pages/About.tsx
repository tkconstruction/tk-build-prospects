import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality. Every project receives the same meticulous attention to detail.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication and transparent pricing. No hidden fees, no surprises.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our success. We're not done until you're thrilled with the results.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "On time, on budget, and built to last. We stand behind our work with comprehensive warranties.",
    },
  ];

  const team = [
    {
      name: "Tom K.",
      role: "Founder & Lead Contractor",
      description: "20+ years of construction experience in the Pacific Northwest",
    },
    {
      name: "Sarah M.",
      role: "Project Manager",
      description: "Ensuring every project runs smoothly from start to finish",
    },
    {
      name: "Mike R.",
      role: "Master Roofer",
      description: "Certified roofing specialist with expertise in storm damage restoration",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About TK Construction & Roofing
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Building trust, one project at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-fade-in-up">
            <p className="text-lg leading-relaxed">
              Founded in the heart of the Pacific Northwest, TK Construction & Roofing LLC was born
              from a simple vision: to provide honest, high-quality construction and roofing services
              to homeowners and businesses throughout our community.
            </p>

            <p className="text-lg leading-relaxed">
              What started as a small roofing crew has grown into a full-service construction company,
              but our core values remain unchanged. We believe that every home deserves quality
              craftsmanship, every customer deserves respect and transparency, and every project
              deserves our absolute best effort.
            </p>

            <p className="text-lg leading-relaxed">
              Living and working in the Pacific Northwest, we understand the unique challenges that
              our weather brings. From heavy rains to occasional snow and windstorms, your home needs
              protection that can stand up to it all. That's why we specialize in weather-resistant
              solutions backed by industry-leading warranties and our commitment to excellence.
            </p>

            <p className="text-lg leading-relaxed">
              Today, we're proud to serve families and businesses across the region, helping them
              protect and improve their most valuable investments. But we never forget that behind
              every project is a person who's placing their trust in us—and that's a responsibility
              we take seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <value.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the TK Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how we can help with your next project
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
