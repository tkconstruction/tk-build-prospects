import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Hammer,
  Home as HomeIcon,
  Wrench,
  CreditCard,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
  Heart,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/Screenshot 2025-10-04 141736.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Home = () => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const differentiators = [
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description: "We offer flexible payment plans to make your dream project affordable.",
    },
    {
      icon: Shield,
      title: "Insurance Assistance",
      description: "We help navigate homeowners insurance claims for storm damage and repairs.",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team is fully licensed, bonded, and insured for your peace of mind.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % differentiators.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + differentiators.length) % differentiators.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Success!",
      description: "We've received your message and will contact you soon.",
    });

    // Clear form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Quality Construction & Roofing Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Professional craftsmanship for your home and business in the Pacific Northwest
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <HomeIcon className="h-12 w-12 text-accent group-hover:text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Roofing</h3>
                <p className="text-muted-foreground mb-4">
                  Expert roof installation, repair, and maintenance. Storm damage specialists.
                </p>
                <Link to="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up [animation-delay:100ms]">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Hammer className="h-12 w-12 text-accent group-hover:text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Construction</h3>
                <p className="text-muted-foreground mb-4">
                  From remodels to new builds, we bring your vision to life with quality craftsmanship.
                </p>
                <Link to="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up [animation-delay:200ms]">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Wrench className="h-12 w-12 text-accent group-hover:text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Handyman</h3>
                <p className="text-muted-foreground mb-4">
                  No job too small. Professional repairs, installations, and maintenance services.
                </p>
                <Link to="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators Carousel */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose TK Construction?
          </h2>

          <div className="relative">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="text-center animate-fade-in" key={currentSlide}>
                  <div className="mb-6 flex justify-center">
                    <div className="p-6 bg-accent/10 rounded-full">
                      {(() => {
                        const Icon = differentiators[currentSlide].icon;
                        return <Icon className="h-16 w-16 text-accent" />;
                      })()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {differentiators[currentSlide].title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {differentiators[currentSlide].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-card rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-card rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {differentiators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Teaser Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Protecting Generational Homes in Cowlitz County
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're planning to age in place or preparing a family home for the next chapter, we help turn equity into legacy. Our compassionate approach honors the memories while maximizing value for the future.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="p-1 bg-accent/10 rounded mr-3 mt-1">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Age-in-place modifications for comfortable, safe living</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-accent/10 rounded mr-3 mt-1">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Strategic updates that maximize inherited home value</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-accent/10 rounded mr-3 mt-1">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Compassionate guidance through every step</span>
                </li>
              </ul>
              <Link to="/legacy">
                <Button variant="default" size="lg">
                  Learn About Our Legacy Program
                </Button>
              </Link>
            </div>
            <Card className="shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Heart className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                  <blockquote className="text-lg text-muted-foreground italic mb-4">
                    "Your home is more than a house. It's a lifetime of memories and the foundation of your family's future."
                  </blockquote>
                  <p className="text-sm font-semibold text-foreground">
                    — TK Construction & Roofing LLC
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose TK Construction?
          </h2>

          <div className="relative">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="text-center animate-fade-in" key={currentSlide}>
                  <div className="mb-6 flex justify-center">
                    <div className="p-6 bg-accent/10 rounded-full">
                      {(() => {
                        const Icon = differentiators[currentSlide].icon;
                        return <Icon className="h-16 w-16 text-accent" />;
                      })()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {differentiators[currentSlide].title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {differentiators[currentSlide].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-card rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-card rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {differentiators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              See the quality of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[project1, project2, project3, project4].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-semibold">View Project</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="default" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-lg text-primary-foreground/90">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
