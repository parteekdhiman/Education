import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Education Platform
            </h3>
            <p className="text-background/80 leading-relaxed">
              Empowering the next generation of tech professionals with
              world-class education and hands-on training.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li className="text-background/80">Full Stack Development</li>
              <li className="text-background/80">Data Science</li>
              <li className="text-background/80">Mobile Development</li>
              <li className="text-background/80">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} Education Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;