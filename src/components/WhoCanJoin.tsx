import { Card, CardContent } from "./ui/card";
import { GraduationCap, Users, Briefcase, RefreshCw, Target } from "lucide-react";

const WhoCanJoin = () => {
    const audience = [
        {
            icon: GraduationCap,
            title: "School & college students",
            description: "Start early and build a strong foundation"
        },
        {
            icon: Users,
            title: "Fresh graduates",
            description: "Launch your career with industry-ready skills"
        },
        {
            icon: Briefcase,
            title: "Job seekers",
            description: "Gain the skills employers are looking for"
        },
        {
            icon: RefreshCw,
            title: "Career switchers",
            description: "Transition into the thriving IT industry"
        },
        {
            icon: Target,
            title: "Anyone serious about learning IT properly",
            description: "Dedicated training for committed learners"
        }
    ];

    return (
        <section id="who-can-join" className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        WHO CAN JOIN
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {audience.map((item, index) => (
                        <Card
                            key={index}
                            className="hover-scale animate-fade-in border-primary/20"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6">
                                <item.icon className="w-10 h-10 text-primary mb-3" />
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoCanJoin;
