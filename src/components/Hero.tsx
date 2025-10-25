import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Future with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professional IT Education
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our platform and master the skills that matter. Our expert-led courses
              in programming, web development, and data science will accelerate your career
              in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-custom-lg group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("courses");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img
              src={heroImage}
              alt="Students learning IT skills"
              className="rounded-2xl shadow-custom-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;