import { Award, Users, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of tech professionals with cutting-edge education and practical skills.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class IT education that bridges the gap between academic learning and industry requirements. 
                We're committed to transforming passionate learners into skilled professionals ready to excel in the tech industry.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading IT education institute recognized for excellence in technical training, 
                innovation in teaching methodologies, and producing graduates who drive technological advancement globally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Expert Instructors",
                description: "Learn from industry professionals with real-world experience."
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Ensuring personalized attention and mentoring."
              },
              {
                icon: Target,
                title: "100% Placement Support",
                description: "Dedicated placement support for our students."
              },
              {
                icon: TrendingUp,
                title: "Updated Curriculum",
                description: "Course content updated to match industry trends."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-card rounded-lg shadow-custom-md p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;