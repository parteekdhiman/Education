import React, { useState, ChangeEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, TrendingUp, CheckCircle2, User } from "lucide-react";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const { toast } = useToast();
  const course = courses.find((c) => c.id === courseId);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleEnroll = async (values?: { name?: string; email?: string; phone?: string; message?: string }) => {
    // TODO: send values + course.title to backend
    toast({ title: "Enrollment Request Received!", description: "Our team will contact you shortly to complete the enrollment process." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Dialog>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 animate-fade-in">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
          </Link>

          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">{course.title}</h1>
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
            </div>

            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary-dark shadow-custom-md">Enroll Now</Button>
            </DialogTrigger>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.learningOutcomes.map((o, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl">Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.curriculum.map((m, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-3">Module {idx + 1}: {m.module}</h3>
                        <ul className="space-y-2">
                          {m.topics.map((t, ti) => (
                            <li key={ti} className="flex items-center text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />{t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.prerequisites.map((p, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

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
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-primary-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                  <p className="text-sm mb-4 opacity-90">Join thousands of successful graduates and kickstart your tech career today.</p>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full">Enroll Now</Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enroll in {course.title}</DialogTitle>
            <DialogDescription>Fill your details and our team will contact you to complete enrollment.</DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEnroll(formData);
            }}
            className="space-y-4 mt-2"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <Input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <Input name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea name="message" value={formData.message} onChange={handleChange} rows={4} />
            </div>

            <input type="hidden" name="courseTitle" value={course.title} />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="bg-primary hover:bg-primary-dark">Submit Enrollment</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseDetailPage;