import { Link } from "react-router-dom";
import { Code, Database, Smartphone, Globe, Brain, Cloud, BarChart3 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { courses } from "@/data/courses";
import { convertToINR, formatINR } from "@/lib/utils"; // Added import for currency conversion

const Courses = () => {
  const iconMap: Record<string, any> = {
    Code2: Code,
    BarChart3: BarChart3,
    Smartphone: Smartphone,
    Palette: Globe,
    Brain: Brain,
    Cloud: Cloud
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Professional Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of industry-relevant courses designed
            to help you succeed in today's competitive tech landscape.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => {
              const Icon = iconMap[course.icon] || Code;
              // Convert price to Indian Rupees
              const priceInINR = convertToINR(course.price);
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="bg-secondary px-3 py-1 rounded-full font-semibold">
                      {formatINR(priceInINR)} {/* Added price display in INR */}
                    </span>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;