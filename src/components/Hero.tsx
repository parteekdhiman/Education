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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Advanced IT Training That Builds{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Real Careers
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-relaxed">
              AI • ML • Python • Data Science • Web Development • Digital Marketing
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Offline Classes in Shahpur | Online Training for All Himachal
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-custom-lg group"
              >
                <a href="tel:+918628975909">
                  Free Demo Classes – Call / WhatsApp 86289-75909
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
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