import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Shield, TrendingUp, Droplets, Wind } from "lucide-react";

const Legacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-foreground/10 rounded-full">
                <Heart className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Your Home is More Than a House.
              <br />
              It's a Lifetime of Memories.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
              For generations of Cowlitz County families, a home is the heart of their story and the foundation of their future. We provide compassionate, expert guidance to help you protect, preserve, and enhance that legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Part 1: For Aging Homeowners */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Icon & Headline */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full mr-4">
                  <Home className="h-12 w-12 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  For the Heart of the Family
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay in the Home You Love, Secured for the Future.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                You didn't just buy a house; you built a life within these walls. Every holiday, every grandchild's visit, every quiet morning is a part of its story. You've worked your entire life to build this asset, and you deserve to see it protect you now and provide for your family later.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a community like ours, character matters. While these homes have timeless charm, they also have aging bones. The question is how to preserve the memories while securing the future.
              </p>
            </div>

            {/* Right: Key Stat Card */}
            <Card className="shadow-xl border-2 border-accent/20 animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-4">45%</div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    of Cowlitz County homes
                  </p>
                  <p className="text-lg text-muted-foreground">
                    were built before 1980
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Turn Your Equity Into Comfort */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Turn Your Equity Into Comfort and Security
            </h3>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              Your home's equity is a powerful tool you've earned. It can be used to make smart, targeted upgrades that allow you to live more comfortably and safely, right where you want to be.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent transition-colors">
                      <Shield className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Age-in-Place Modifications</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Imagine wider doorways for easy access, a secure walk-in shower replacing an old tub, or brighter, energy-efficient lighting. We make the modifications that allow your home to adapt to your needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent transition-colors">
                      <TrendingUp className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">A Proactive Legacy Plan</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Many people see life insurance as a cash asset for their children. Consider this: using that benefit now to fund a new 50-year roof or high-efficiency windows can <strong>increase your home's market value far beyond the cost of the project itself.</strong> You turn a cash asset into a much larger, more valuable legacy asset for your family, all while enjoying the benefits of a safer, more comfortable home today.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: For the Next Generation */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For the Next Generation
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Honor Their Memory. Maximize Their Legacy.
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Inheriting a family home is a profound experience, filled with memories and immense responsibility. But when it comes time to sell, you're often faced with the reality of an outdated property that doesn't appeal to today's homebuyers.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto mb-12 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                That beloved, memory-filled home can look like an overwhelming "fixer-upper" to young couples, who want move-in-ready properties. A house with a dated kitchen, a 30-year-old roof, or original single-pane windows can sit on the market for months, forcing painful price reductions.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            We Turn "Dated" Into "Desirable."
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our specialty is making strategic, high-impact updates that transform an inherited property from a liability into a top-market asset. We handle the entire process, allowing you to focus on your family.
          </p>

          {/* The Real Costs Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              The Real Costs of Not Updating in the Pacific Northwest
            </h3>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We provide solutions to the problems that buyers in our region notice immediately.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-accent/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 shrink-0">
                      <Wind className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        FACT: Drafty Windows Drain Budgets
                      </h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    According to the U.S. Department of Energy, heat loss through windows can account for <strong className="text-foreground">25-30% of a home's heating costs.</strong> For a potential buyer, new, energy-efficient windows aren't just cosmetic; they represent a tangible promise of lower bills and a warmer, more comfortable home.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 shrink-0">
                      <Droplets className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        FACT: Moisture is a Health and Value Killer
                      </h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The CDC warns that moisture intrusion from a failing roof or leaking window frames can lead to mold and significant respiratory health issues. In our damp PNW climate, a new roof and properly sealed windows are among the most valuable investments you can make. It's not just a repair; it's a guarantee of a healthy, safe living environment—a non-negotiable for today's families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Let's Create a Plan for Your Legacy.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning years ahead or navigating a recent inheritance, the path forward can feel overwhelming. We're here to help. We offer a compassionate, no-pressure <strong>Legacy Home Consultation</strong> to assess your property, listen to your goals, and provide a clear, strategic plan.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl" className="animate-scale-in">
              Schedule Your Legacy Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
