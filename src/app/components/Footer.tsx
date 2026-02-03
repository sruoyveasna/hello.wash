import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Add bottom padding on mobile to account for sticky button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://play-lh.googleusercontent.com/Da5DMBZMDsGjfNhGYRjvGgOqxJZXZvSyyO-IPrlxTMRPFjlbDB0qFhrIsDNtz-hGKRH_=w240-h480-rw"
                alt="HelloWash Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-white">HelloWash</div>
                <div className="text-xs text-gray-400">Cloud Laundry</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Premium laundry & dry cleaning with pickup & delivery across Phnom
              Penh.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", page: "home" },
                { name: "About Us", page: "about" },
                { name: "How It Works", page: "how-it-works" },
                { name: "Track Order", page: "home" },
                { name: "Contact", page: "contact" },
              ].map((link, index) => (
                <li key={`${link.page}-${index}`}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Wash & Fold",
                "Wash & Press",
                "Dry Cleaning",
                "Wet Cleaning",
                "Business Laundry",
                "Express Service",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  National Road 2, Phum Prek Takong 3, Sangkat Chak Angre Leu,
                  Phnom Penh
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>081 661 616</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@hellowash.com.kh</span>
              </li>
            </ul>

            <h4 className="text-white mb-3 text-sm">Newsletter</h4>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} HelloWash Laundry Factory Co.,
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}