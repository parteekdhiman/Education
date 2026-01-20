import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "Do you provide job guarantee?",
            answer: "We do not make fake promises. We focus on skills, which create real opportunities."
        },
        {
            question: "Are classes suitable for beginners?",
            answer: "Yes. We start from basics and build strong foundations."
        },
        {
            question: "Are online classes available?",
            answer: "Yes, online classes are available for students from Dharamshala and other areas."
        },
        {
            question: "Can I attend a demo class?",
            answer: "Yes. Free demo classes are available before admission."
        },
        {
            question: "What is the class size?",
            answer: "We keep batches small to ensure personal attention."
        }
    ];

    return (
        <section id="faq" className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        Frequently Asked Questions (FAQ)
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-border rounded-lg px-6 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                                    Q{index + 1}. {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
