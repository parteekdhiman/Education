import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Education Platform
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-custom-md">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/courses"
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;