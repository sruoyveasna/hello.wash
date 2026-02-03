import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Services", page: "services" },
    { name: "How It Works", page: "how-it-works" },
    { name: "Business", page: "business" },
    { name: "Franchise", page: "franchise" },
    { name: "Contact", page: "contact" },
  ];

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://play-lh.googleusercontent.com/Da5DMBZMDsGjfNhGYRjvGgOqxJZXZvSyyO-IPrlxTMRPFjlbDB0qFhrIsDNtz-hGKRH_=w240-h480-rw"
                alt="HelloWash Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-2xl font-bold text-primary">HelloWash</div>
                <div className="text-xs text-muted-foreground -mt-1">
                  Cloud Laundry
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === link.page
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                  currentPage === link.page
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                081 661 616
              </Button>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Pickup
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}