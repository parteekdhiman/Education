import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, BarChart3, Smartphone, Palette, Brain, Cloud, Clock, TrendingUp } from "lucide-react";
import { courses } from "@/data/courses";
import { convertToINR, formatINR } from "@/lib/utils"; // Added import for currency conversion

const iconMap: Record<string, any> = {
  Code2: Code2,
  BarChart3: BarChart3,
  Smartphone: Smartphone,
  Palette: Palette,
  Brain: Brain,
  Cloud: Cloud
};

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-relevant courses designed to transform you into a skilled professional.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = iconMap[course.icon] || Code2;
              // Convert price to Indian Rupees
              // const priceInINR = convertToINR(course.price);
              return (
                <Card 
                  key={course.id} 
                  className="hover-scale animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span>{course.level}</span>
                      </div>
                      {/* <div className="pt-2">
                        <Badge variant="secondary" className="text-lg font-semibold">
                          {formatINR(priceInINR)} 
                        </Badge>
                      </div> */}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/courses/${course.id}`} className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;