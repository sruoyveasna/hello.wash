import {
  Sparkles,
  Shirt,
  Wind,
  Leaf,
  Package,
  Truck,
  Zap,
  Building2,
  CheckCircle2,
  Clock,
  Shield,
  Droplet,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState, useEffect } from "react";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Sparkles,
      title: "Wash & Fold",
      price: "From $1.00/kg",
      turnaround: "48 hours",
      description:
        "Perfect for everyday laundry needs. Your clothes are washed, dried, and neatly folded to perfection.",
      benefits: [
        "Affordable per-kilogram pricing",
        "Separate washing for colors and whites",
        "Premium fabric softener included",
        "Eco-friendly detergents available",
        "Minimum 3kg order",
      ],
      image: "/service/washfold.jpg",
    },
    {
      icon: Shirt,
      title: "Wash & Press",
      price: "From $0.75/item",
      turnaround: "48 hours",
      description:
        "Professional pressing for shirts, trousers, and everyday garments. Look sharp every day.",
      benefits: [
        "Crisp, professional finish",
        "Individually pressed and hung",
        "Perfect for business attire",
        "Stain treatment included",
        "Quality inspection before pressing",
      ],
      image: "/service/washpress.jpg",
    },
    {
      icon: Wind,
      title: "Dry Cleaning",
      price: "From $10.00",
      turnaround: "72 hours",
      description:
        "Expert dry cleaning for delicate fabrics, suits, dresses, and specialty garments.",
      benefits: [
        "Professional dry cleaning solvents",
        "Expert handling of delicate fabrics",
        "Perfect for suits, dresses, silk",
        "Stain removal specialists",
        "Garment protection and inspection",
      ],
      image: "/service/dryclean.webp",
    },
    {
      icon: Leaf,
      title: "Wet Cleaning (Eco-Friendly)",
      price: "Premium Service",
      turnaround: "72 hours",
      description:
        "Environmentally friendly alternative to dry cleaning using water-based technology.",
      benefits: [
        "Eco-friendly water-based process",
        "Gentle on fabrics",
        "Better for the environment",
        "Effective for most 'dry clean only' items",
        "No harsh chemicals",
      ],
      image: "/service/wetclean.jpg",
    },
    {
      icon: Package,
      title: "Specialty Items",
      price: "Custom Pricing",
      turnaround: "3-5 days",
      description:
        "Professional cleaning for household items including duvets, curtains, blankets, and more.",
      benefits: [
        "Duvets and comforters",
        "Curtains and drapes",
        "Blankets and throws",
        "Cushion covers",
        "Special handling for large items",
      ],
      image: "/service/specialtyitems.jpg",
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      price: "Affordable rates",
      turnaround: "Same day pickup",
      description:
        "Convenient door-to-door service. We pick up and deliver to your preferred location.",
      benefits: [
        "Affordable rates for all orders",
        "Flexible pickup times",
        "Real-time tracking via app",
        "SMS notifications",
        "Contactless service available",
      ],
      image: "/service/pickup-delivery.jpg",
    },
    {
      icon: Zap,
      title: "Express Service",
      price: "Additional fee applies",
      turnaround: "4-24 hours",
      description:
        "Need it fast? Our express options get your laundry back to you in record time.",
      benefits: [
        "24-hour express available",
        "4-hour super-express option",
        "Priority processing",
        "Perfect for emergencies",
        "Available for most services",
      ],
      image: "/service/express-service.png",
    },
    {
      icon: Building2,
      title: "B2B Laundry Solutions",
      price: "Request Quote",
      turnaround: "Custom schedule",
      description:
        "High-volume laundry services for hotels, restaurants, spas, gyms, and businesses.",
      benefits: [
        "Dedicated account manager",
        "Custom service agreements",
        "Volume-based pricing",
        "Reliable daily/weekly pickups",
        "Quality guarantees",
      ],
      image: "/service/b2b.jpg",
    },
  ];

  const washFoldPricing = [
    { item: "Per Kilogram", price: "$1.00" },
    { item: "Minimum Order", price: "3 kg" },
  ];

  const washPressPricing = [
    { item: "Shirt", price: "$0.75" },
    { item: "Trousers", price: "$1.00" },
    { item: "Dress", price: "$1.50" },
    { item: "Skirt", price: "$1.00" },
    { item: "Jacket", price: "$2.00" },
  ];

  const dryCleaningPricing = [
    { item: "Suit (2-piece)", price: "$10.00" },
    { item: "Suit (3-piece)", price: "$14.00" },
    { item: "Dress", price: "$8.00" },
    { item: "Coat/Jacket", price: "$8.00" },
    { item: "Blazer", price: "$6.00" },
    { item: "Trousers", price: "$4.00" },
    { item: "Skirt", price: "$4.00" },
    { item: "Tie", price: "$2.00" },
    { item: "Scarf", price: "$3.00" },
  ];

  const wetCleaningPricing = [
    { item: "Dress", price: "$10.00" },
    { item: "Suit", price: "$12.00" },
    { item: "Coat", price: "$10.00" },
    { item: "Premium Garment", price: "$15.00+" },
  ];

  const specialtyPricing = [
    { item: "Duvet (Single)", price: "$12.00" },
    { item: "Duvet (Double)", price: "$15.00" },
    { item: "Duvet (King)", price: "$20.00" },
    { item: "Blanket", price: "$8.00" },
    { item: "Curtains (per panel)", price: "$10.00" },
    { item: "Cushion Cover", price: "$3.00" },
    { item: "Table Cloth", price: "$6.00" },
  ];

  const expressOptions = [
    { service: "24-Hour Express", surcharge: "+50%" },
    { service: "4-Hour Super Express", surcharge: "+100%" },
  ];

  const [currentService, setCurrentService] = useState(0);

  // Pricing tab states - separate for each section
  const [activeStandardTab, setActiveStandardTab] = useState(0);
  const [activeSpecialTab, setActiveSpecialTab] = useState(0);

  // Section 1: Standard Services Tabs
  const standardServicesTabs = [
    {
      id: 0,
      name: "Wash & Fold",
      icon: Sparkles,
      badge: null,
      badgeColor: "",
      headerColor: "from-primary to-primary/90",
      hoverColor: "border-primary/30",
      infoColor: "bg-blue-50 border-primary/10",
      iconColor: "text-primary",
      pricing: washFoldPricing,
      description: "Perfect for everyday laundry",
      info: "Includes washing, drying, and neat folding. Separate washing for colors and whites.",
    },
    {
      id: 1,
      name: "Wash & Press",
      icon: Shirt,
      badge: null,
      badgeColor: "",
      headerColor: "from-secondary to-secondary/90",
      hoverColor: "border-secondary/30",
      infoColor: "bg-teal-50 border-secondary/10",
      iconColor: "text-secondary",
      pricing: washPressPricing,
      description: "Professional finish",
      info: "Items are washed, professionally pressed, and hung. Perfect for business attire.",
    },
    {
      id: 2,
      name: "Dry Cleaning",
      icon: Wind,
      badge: null,
      badgeColor: "",
      headerColor: "from-primary to-primary/90",
      hoverColor: "border-primary/30",
      infoColor: "bg-blue-50 border-primary/10",
      iconColor: "text-primary",
      pricing: dryCleaningPricing,
      description: "Expert care for delicate fabrics",
      info: "Professional dry cleaning with stain treatment. Prices may vary for designer items or heavily soiled garments.",
    },
  ];

  // Section 2: Special Services Tabs
  const specialServicesTabs = [
    {
      id: 0,
      name: "Specialty Items",
      icon: Package,
      badge: null,
      badgeColor: "",
      headerColor: "from-accent/80 to-accent/90",
      hoverColor: "border-accent/30",
      infoColor: "bg-yellow-50 border-accent/20",
      iconColor: "text-accent",
      pricing: specialtyPricing,
      description: "Household & large items",
      info: "Turnaround time: 3-5 days. Special handling for large and delicate household items.",
    },
    {
      id: 1,
      name: "Express Service",
      icon: Zap,
      badge: null,
      badgeColor: "",
      headerColor: "from-accent/20 to-accent/10",
      hoverColor: "border-accent/50",
      infoColor: "bg-yellow-50 border-accent/30",
      iconColor: "text-accent",
      pricing: expressOptions.map((opt) => ({
        item: opt.service,
        price: opt.surcharge,
      })),
      description: "Need it fast? We've got you covered",
      info: "Express services are available for most items. 4-hour super-express requires order placement before 10 AM. Subject to availability.",
      isExpress: true,
    },
  ];

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleNextService = () => {
    if (currentService < services.length - 1) {
      setCurrentService(currentService + 1);
    }
  };

  const handlePreviousService = () => {
    if (currentService > 0) {
      setCurrentService(currentService - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-20 overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwc2VydmljZSUyMGNsZWFuJTIwY2xvdGhlc3xlbnwxfHx8fDE3MDYyNjQ4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            filter: "blur(8px)",
          }}
        ></div>

        {/* Decorative Elements - Animated */}
        <div
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              className="mb-4 bg-accent/20 text-accent-foreground border-accent/30"
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              ✨ Premium Services
            </Badge>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              Our Services
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
              }}
            >
              Complete laundry and dry cleaning solutions for every need. From
              everyday wash & fold to specialty dry cleaning, we've got you
              covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Horizontal Service Stepper */}
          <div className="hidden md:block mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-gray-100 hover:shadow-xl transition-shadow duration-300 max-w-6xl mx-auto overflow-x-auto">
            <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-max sm:min-w-0 px-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-1 relative min-w-[80px] sm:min-w-[100px]"
                >
                  <button
                    onClick={() => setCurrentService(index)}
                    className={`w-full flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      index === currentService
                        ? "scale-105"
                        : "hover:scale-105 hover:opacity-100"
                    }`}
                  >
                    {/* Service Circle */}
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 shadow-lg mb-2 sm:mb-3 ${
                        index === currentService
                          ? "bg-gradient-to-br from-primary to-secondary shadow-xl ring-4 ring-primary/20"
                          : index < currentService
                            ? "bg-gradient-to-br from-secondary to-secondary/80 shadow-md"
                            : "bg-gray-200 text-gray-500 shadow-sm"
                      }`}
                    >
                      {index < currentService ? (
                        <CheckCircle2
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <service.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      )}
                    </div>

                    {/* Service Label */}
                    <div
                      className={`text-center transition-all duration-300 ${
                        index === currentService
                          ? "font-bold text-primary scale-105"
                          : index < currentService
                            ? "font-semibold text-secondary"
                            : "text-gray-500"
                      }`}
                    >
                      <p className="text-xs md:text-sm font-medium max-w-[90px] leading-tight">
                        {service.title}
                      </p>
                    </div>
                  </button>

                  {/* Connecting Line */}
                  {index < services.length - 1 && (
                    <div className="absolute top-8 md:top-10 left-[60%] w-full h-1.5 -z-10">
                      <div className="h-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-secondary via-primary to-secondary rounded-full transition-all duration-700 ease-in-out ${
                            index < currentService ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service Content Card */}
          <Card className="shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden max-w-6xl mx-auto">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Left: Details */}
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {(() => {
                        const Icon = services[currentService].icon;
                        return <Icon className="w-7 h-7 sm:w-9 sm:h-9" />;
                      })()}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm"
                    >
                      ⏱️ {services[currentService].turnaround}
                    </Badge>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 min-h-[4rem] sm:min-h-[4.5rem] lg:min-h-[5rem] flex items-center">
                    {services[currentService].title}
                  </h2>
                  <p className="text-lg sm:text-xl text-primary font-semibold mb-3 sm:mb-4">
                    {services[currentService].price}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {services[currentService].description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[currentService].benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-secondary/5 transition-colors duration-200"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-sm sm:text-base text-gray-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Schedule Pickup
                  </Button>
                </div>

                {/* Right: Visual */}
                <div className="order-first md:order-last">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/10 hover:ring-primary/20 transition-all duration-300 group">
                    <img
                      src={services[currentService].image}
                      alt={services[currentService].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-gray-100 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handlePreviousService}
                  disabled={currentService === 0}
                  className="disabled:opacity-30 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 px-3 sm:px-4"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>

                <div className="text-xs sm:text-sm text-gray-500 font-medium bg-gray-50 px-3 sm:px-4 py-2 rounded-full whitespace-nowrap">
                  {currentService + 1} of {services.length}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={handleNextService}
                  disabled={currentService === services.length - 1}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:opacity-30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-3 sm:px-4"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                </Button>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              className="mb-4 bg-primary/10 text-primary border-primary/20"
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              💰 Pricing
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              Transparent Pricing
            </h2>
            <p
              className="text-xl text-gray-600 mb-8"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
              }}
            >
              No hidden fees, no surprises. Just honest pricing for premium
              laundry services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-sm py-2 px-4">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Pickup & Delivery Available
              </Badge>
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 text-sm py-2 px-4">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Quality Guarantee
              </Badge>
            </div>
          </div>

          {/* SECTION 1: Standard Services */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Standard Services
              </h3>
              <p className="text-gray-600 text-lg">
                Professional cleaning for your everyday needs
              </p>
            </div>

            {/* Standard Services Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {standardServicesTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStandardTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeStandardTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105 ring-2 ring-primary/30"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 shadow-md border-2 border-gray-200 hover:border-primary/30"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                  {tab.badge && activeStandardTab === tab.id && (
                    <Badge className={`ml-2 ${tab.badgeColor} text-xs`}>
                      {tab.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>

            {/* Active Standard Service Card */}
            {standardServicesTabs.map(
              (tab) =>
                activeStandardTab === tab.id && (
                  <Card
                    key={tab.id}
                    className={`shadow-xl border-2 border-gray-100 hover:${tab.hoverColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden max-w-4xl mx-auto`}
                    style={{
                      animation: "fadeIn 0.4s ease-in-out",
                    }}
                  >
                    <CardHeader
                      className={`bg-gradient-to-br ${tab.headerColor} text-white rounded-t-lg p-4 sm:p-6 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between relative z-10">
                        <div>
                          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <tab.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                              {tab.name}
                            </h3>
                          </div>
                          <p className="text-white/90 text-sm sm:text-base md:text-lg">
                            {tab.description}
                          </p>
                        </div>
                        {tab.badge && (
                          <Badge
                            className={`${tab.badgeColor} text-sm py-2 px-4`}
                          >
                            {tab.badge}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      {/* Pricing List */}
                      <div
                        className={`space-y-2 sm:space-y-3 mb-4 sm:mb-6 ${tab.pricing.length > 5 ? "grid md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3" : ""}`}
                      >
                        {tab.pricing.map((item, index) => (
                          <div
                            key={index}
                            className={`flex justify-between items-center py-3 sm:py-4 px-2 sm:px-3 border-b border-gray-200 last:border-0 hover:bg-gray-50 rounded-lg transition-colors duration-200`}
                          >
                            <span className="text-gray-900 font-medium text-sm sm:text-base">
                              {item.item}
                            </span>
                            <span
                              className={`font-bold text-base sm:text-lg ${tab.iconColor}`}
                            >
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Info Box */}
                      <div
                        className={`p-3 sm:p-4 md:p-5 ${tab.infoColor} rounded-xl border mb-4 sm:mb-6`}
                      >
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <Info
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${tab.iconColor} flex-shrink-0 mt-0.5`}
                          />
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {tab.info}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6">
                        Order {tab.name} Now
                      </Button>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </Card>
                ),
            )}
          </div>

          {/* SECTION 2: Special Services */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Special Services
              </h3>
              <p className="text-gray-600 text-lg">
                Premium solutions for unique cleaning needs
              </p>
            </div>

            {/* Special Services Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {specialServicesTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSpecialTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeSpecialTab === tab.id
                      ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-lg scale-105 ring-2 ring-accent/30"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 shadow-md border-2 border-gray-200 hover:border-accent/30"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                  {tab.badge && activeSpecialTab === tab.id && (
                    <Badge className={`ml-2 ${tab.badgeColor} text-xs`}>
                      {tab.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>

            {/* Active Special Service Card */}
            {specialServicesTabs.map(
              (tab) =>
                activeSpecialTab === tab.id && (
                  <Card
                    key={tab.id}
                    className={`shadow-xl border-2 border-gray-100 hover:${tab.hoverColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden max-w-4xl mx-auto`}
                    style={{
                      animation: "fadeIn 0.4s ease-in-out",
                    }}
                  >
                    <CardHeader
                      className={`bg-gradient-to-br ${tab.headerColor} ${tab.id === 1 ? "text-gray-900" : "text-white"} rounded-t-lg p-4 sm:p-6 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between relative z-10">
                        <div>
                          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 ${tab.id === 1 ? "bg-accent/20" : "bg-white/20"} backdrop-blur-sm rounded-xl flex items-center justify-center`}
                            >
                              <tab.icon
                                className={`w-5 h-5 sm:w-7 sm:h-7 ${tab.id === 1 ? "text-accent" : "text-white"}`}
                              />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                              {tab.name}
                            </h3>
                          </div>
                          <p
                            className={`${tab.id === 1 ? "text-gray-600" : "text-white/90"} text-sm sm:text-base md:text-lg`}
                          >
                            {tab.description}
                          </p>
                        </div>
                        {tab.badge && (
                          <Badge
                            className={`${tab.badgeColor} text-sm py-2 px-4`}
                          >
                            {tab.badge}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      {/* Pricing List */}
                      <div className={`space-y-2 sm:space-y-3 mb-4 sm:mb-6`}>
                        {tab.isExpress ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {tab.pricing.map((item, index) => (
                              <div
                                key={index}
                                className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                                  {item.item}
                                </h4>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">
                                  {item.price}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  Additional charge on base service price
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          tab.pricing.map((item, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-3 sm:py-4 px-2 sm:px-3 border-b border-gray-200 last:border-0 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <span className="text-gray-900 font-medium text-sm sm:text-base">
                                {item.item}
                              </span>
                              <span
                                className={`font-bold text-base sm:text-lg ${tab.iconColor}`}
                              >
                                {item.price}
                              </span>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Info Box */}
                      <div
                        className={`p-3 sm:p-4 md:p-5 ${tab.infoColor} rounded-xl border mb-4 sm:mb-6`}
                      >
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <Info
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${tab.iconColor} flex-shrink-0 mt-0.5`}
                          />
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {tab.info}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6">
                        Order {tab.name} Now
                      </Button>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </Card>
                ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-teal-600 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            Ready to Experience Premium Laundry?
          </h2>
          <p
            className="text-xl mb-8 text-white/90"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Schedule your first pickup and discover why thousands of customers
            trust HelloWash.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            }}
          >
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Schedule Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
