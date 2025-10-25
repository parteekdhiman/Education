import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, TrendingUp, CheckCircle2, User } from "lucide-react";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const { toast } = useToast();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    toast({
      title: "Enrollment Request Received!",
      description: "Our team will contact you shortly to complete the enrollment process.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 animate-fade-in">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {course.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{course.fullDescription}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground font-medium">{course.level}</span>
            </div>
            <Badge variant="secondary" className="text-xl font-bold py-2 px-4">
              {course.price}
            </Badge>
          </div>

          <Button onClick={handleEnroll} size="lg" className="bg-primary hover:bg-primary-dark shadow-custom-md">
            Enroll Now
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Outcomes */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-lg mb-3">
                        Module {index + 1}: {module.module}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Prerequisites */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.expertise}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-primary text-primary-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Join thousands of successful graduates and kickstart your tech career today.
                </p>
                <Button onClick={handleEnroll} variant="secondary" className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
