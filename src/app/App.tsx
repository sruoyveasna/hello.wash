import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { LocationsPage } from "./pages/LocationsPage";
import { BusinessPage } from "./pages/BusinessPage";
import { FranchisePage } from "./pages/FranchisePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Button } from "./components/ui/button";
import { Calendar } from "lucide-react";

type Page =
  | "home"
  | "services"
  | "how-it-works"
  | "locations"
  | "business"
  | "franchise"
  | "about"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    // Redirect locations to contact since they're merged
    // Redirect pricing to services since they're merged
    if (page === "locations" || page === "pricing") {
      setCurrentPage(page === "locations" ? "contact" : "services");
    } else {
      setCurrentPage(page as Page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "how-it-works":
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case "locations":
        return <LocationsPage onNavigate={handleNavigate} />;
      case "business":
        return <BusinessPage onNavigate={handleNavigate} />;
      case "franchise":
        return <FranchisePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg z-40">
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Pickup
        </Button>
      </div>
    </div>
  );
}