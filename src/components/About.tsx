import { Award, Users, TrendingUp, Target } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience in top tech companies.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Join a community of passionate learners and work on real projects together.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Our courses are designed to help you advance your career with in-demand skills.",
    },
    {
      icon: Target,
      title: "Practical Focus",
      description:
        "Hands-on projects and real-world applications ensure you're job-ready from day one.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Us</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing world-class IT education that empowers
            students to achieve their career goals and excel in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-custom-md transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;