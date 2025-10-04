import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Complete Roof Replacement",
      description: "Full roof replacement with high-quality architectural shingles. Storm damage restoration including insurance claim assistance.",
      imageUrl: project1,
    },
    {
      title: "Modern Home Exterior",
      description: "Complete exterior renovation including new siding, trim work, and weather-resistant finishes.",
      imageUrl: project2,
    },
    {
      title: "Kitchen Remodel",
      description: "Full kitchen renovation with custom cabinetry, modern fixtures, and professional finish work.",
      imageUrl: project3,
    },
    {
      title: "Commercial Roofing",
      description: "Large-scale commercial roofing project with enhanced durability and weather protection systems.",
      imageUrl: project4,
    },
    {
      title: "Deck Construction",
      description: "Custom deck design and construction with premium materials and professional craftsmanship.",
      imageUrl: project1,
    },
    {
      title: "Home Addition",
      description: "Seamless home addition expanding living space while maintaining architectural integrity.",
      imageUrl: project2,
    },
    {
      title: "Bathroom Renovation",
      description: "Complete bathroom remodel with modern fixtures, tile work, and waterproofing solutions.",
      imageUrl: project3,
    },
    {
      title: "Siding Installation",
      description: "Professional siding installation providing enhanced curb appeal and weather protection.",
      imageUrl: project4,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our Projects
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Quality craftsmanship showcased through our completed work
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-primary-foreground">
                      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-primary-foreground/90">Click to view details</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogTitle className="text-2xl font-bold mb-4">
              {projects[selectedProject].title}
            </DialogTitle>
            <img
              src={projects[selectedProject].imageUrl}
              alt={projects[selectedProject].title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-muted-foreground text-lg">
              {projects[selectedProject].description}
            </p>
          </DialogContent>
        </Dialog>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's bring your vision to life with the same quality and attention to detail
          </p>
          <a href="/contact">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:scale-105 font-semibold h-14 px-10">
              Get Your Free Quote
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
