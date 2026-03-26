import { Facebook, Linkedin, Instagram } from "lucide-react";

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
            <img
              src="/infohills-logo.png"
              alt="InfoHills - Advanced IT Training Institute"
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/80 leading-relaxed">
              InfoHills - Advanced IT Training Institute in Shahpur near Dharamshala.
              Building real careers through quality IT education.
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
              <li className="text-background/80">Full Stack Web Development</li>
              <li className="text-background/80">Data Science</li>
              <li className="text-background/80">Machine Learning</li>
              <li className="text-background/80">Artificial Intelligence</li>
              <li className="text-background/80">Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61582028321309"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/infohills.tech?igsh=NDI0Y3cwY2R0b2tq"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/infohills-technologies-705890396?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} InfoHills - Advanced IT Training Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;