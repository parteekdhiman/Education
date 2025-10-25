import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our courses? Want to visit our campus? We'd love to hear from you!
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
