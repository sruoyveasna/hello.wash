import {
  Sparkles,
  Clock,
  ShieldCheck,
  Truck,
  Shirt,
  Wind,
  Package,
  Zap,
  Building2,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Smartphone,
  Award,
  Leaf,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Hero slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quality Control interactive section state
  const [activeQuality, setActiveQuality] = useState(0);

  // App Screenshots slideshow state
  const [currentAppSlide, setCurrentAppSlide] = useState(0);

  // App screenshots data
  const appScreenshots = [
    "https://play-lh.googleusercontent.com/5uNa2nWx9WQELxppu6ycT7t62jeLnvbt2iMzmBHim74YnREkysQjT0d4c-ke9A_Cu5k=w2560-h1440-rw",
    "https://play-lh.googleusercontent.com/gQSl-laDqiKrWMUweRPLRSKj5ad2R3L-JJpQEyix5U-LZv-8dEEZMdPY2SlKtyndcuxE=w2560-h1440-rw",
    "https://play-lh.googleusercontent.com/yghTgzv7npNeVvkLS8yam0xnHr9Cytp-IMSxNUJ1DkSXYGpmxdsT79bcqcOn-yMY_bg=w2560-h1440-rw",
    "https://play-lh.googleusercontent.com/H_gjFdpTKKm5RvN_k8mlxQOw1yYLdhQUWPR-_28jIjc21Hy5XKFQwzk-hzRSKCYouQ=w2560-h1440-rw",
    "https://play-lh.googleusercontent.com/6DwJTf8RdxetYbaRn3sSpDnZ3nreq-XWg1Ebiq8diwkG7M1amEcwbmJRZQL7PqyPauM=w2560-h1440-rw",
  ];

  // Hero slides with different content and images
  const heroSlides = [
    {
      badge: "Phnom Penh's Premium Laundry Service",
      title: "Laundry & Dry Cleaning,",
      titleHighlight: "Done Right",
      description:
        "Fast, reliable, eco-friendly garment care powered by our central laundry factory. Pickup & delivery across Phnom Penh.",
      image:
        "https://media.istockphoto.com/id/1224409503/photo/clean-garment-neatly-folded-after-laundry-over-bright-background.jpg?s=612x612&w=0&k=20&c=iLsKvD5bZZSpvBEkUfxAnYcPMvHDZYRa200PukmOYMY=",
      badges: [
        {
          icon: Leaf,
          text: "Eco-friendly",
          color: "text-secondary",
        },
        {
          icon: Zap,
          text: "Express 4-Hour",
          color: "text-accent",
        },
        {
          icon: ShieldCheck,
          text: "Quality Control",
          color: "text-primary",
        },
      ],
    },
    {
      badge: "Mobile App Booking Made Easy",
      title: "Order Laundry in",
      titleHighlight: "60 Seconds",
      description:
        "Schedule pickups, track orders, and manage your laundry from your smartphone. Available on iOS and Android.",
      image:
        "https://enatega.com/wp-content/uploads/2025/02/Fresh-Clean-Laundry-1024x646.webp",
      badges: [
        {
          icon: Smartphone,
          text: "iOS & Android",
          color: "text-primary",
        },
        {
          icon: Clock,
          text: "Real-time Tracking",
          color: "text-secondary",
        },
        {
          icon: CheckCircle2,
          text: "Easy Scheduling",
          color: "text-accent",
        },
      ],
    },
    {
      badge: "Free Pickup & Delivery Service",
      title: "Door-to-Door",
      titleHighlight: "Convenience",
      description:
        "We collect your laundry and deliver it back fresh and clean. Free pickup & delivery on all orders across Phnom Penh.",
      image:
        "https://images.squarespace-cdn.com/content/v1/62b5f5497d9a067877ee3d3b/58fcc3a2-6c2f-4d40-bb30-709b72c90946/14.jpeg",
      badges: [
        {
          icon: Truck,
          text: "Free Delivery",
          color: "text-secondary",
        },
        {
          icon: MapPin,
          text: "All Districts",
          color: "text-primary",
        },
        {
          icon: Clock,
          text: "On-time Service",
          color: "text-accent",
        },
      ],
    },
    {
      badge: "Factory-Level Quality",
      title: "Industrial-Grade",
      titleHighlight: "Cleaning",
      description:
        "State-of-the-art equipment and rigorous quality control ensure every garment receives premium care at our central facility.",
      image:
        "https://lirp.cdn-website.com/0e8ebc1b/dms3rep/multi/opt/baytowel-156-640w.jpg",
      badges: [
        {
          icon: Award,
          text: "Quality Certified",
          color: "text-accent",
        },
        {
          icon: Sparkles,
          text: "Premium Clean",
          color: "text-primary",
        },
        {
          icon: ShieldCheck,
          text: "Guaranteed Results",
          color: "text-secondary",
        },
      ],
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Quality features data
  const qualityFeatures = [
    {
      icon: Award,
      title: "Garment Tagging & Sorting",
      description:
        "Every item is individually tagged and sorted by fabric type and color for optimal care.",
      image:
        "https://huayuansh.com/wp-content/uploads/2024/09/RFID-Technology-for-Industrial-Laundry.webp",
    },
    {
      icon: Sparkles,
      title: "Fabric-Specific Programs",
      description:
        "Specialized washing cycles and temperatures for different fabric types ensure the best results.",
      image:
        "https://aaravelectronics.com/wp-content/uploads/2025/12/FHP1412Z3O10-600x600.jpg",
    },
    {
      icon: ShieldCheck,
      title: "Final Inspection & Packaging",
      description:
        "Quality check and careful packaging before delivery to ensure perfection.",
      image:
        "https://greatamericandrycleaners.com/wp-content/uploads/2024/08/great-american-Pickup-and-Delivery-blog.jpg",
    },
    // {
    //   icon: Leaf,
    //   title: "Eco-Friendly Wet Cleaning",
    //   description:
    //     "Water-based, environmentally safe cleaning process that's gentle on fabrics and the planet.",
    //   image:
    //     "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NjU2NzY2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    // },
  ];

  // Auto-advance quality features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuality(
        (prev) => (prev + 1) % qualityFeatures.length,
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [qualityFeatures.length]);

  // Auto-advance app screenshots
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAppSlide(
        (prev) => (prev + 1) % appScreenshots.length,
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [appScreenshots.length]);

  const services = [
    {
      icon: Sparkles,
      title: "Wash & Fold",
      description:
        "Affordable per-kg pricing for everyday laundry",
      price: "From $1.00/kg",
    },
    {
      icon: Shirt,
      title: "Wash & Press",
      description:
        "Crisp, professional finish for your garments",
      price: "From $0.75",
    },
    {
      icon: Wind,
      title: "Dry Cleaning",
      description: "Expert care for delicate fabrics",
      price: "From $10.00",
    },
    {
      icon: Package,
      title: "Specialty Items",
      description: "Duvets, curtains, and household items",
      price: "Custom",
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Convenient door-to-door service",
      price: "Cheap",
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "4-hour and 24-hour options available",
      price: "Rush fee",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Schedule Pickup",
      description:
        "Book via app or website at your convenience",
      icon: Smartphone,
    },
    {
      number: "02",
      title: "We Collect",
      description: "Our team picks up from your home or office",
      icon: Truck,
    },
    {
      number: "03",
      title: "Factory Processing",
      description:
        "Cleaned at our central facility with quality control",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "Quality Check",
      description: "Inspected and carefully packaged",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Delivery",
      description: "Returned fresh and ready to wear",
      icon: CheckCircle2,
    },
  ];

  const testimonials = [
    {
      name: "Sophea Chen",
      area: "BKK1",
      rating: 5,
      text: "Fast, reliable service! The app makes scheduling so easy. My clothes always come back perfectly clean.",
    },
    {
      name: "David Murphy",
      area: "Toul Tom Poung",
      rating: 5,
      text: "Best laundry service in Phnom Penh. The express 4-hour service saved me before an important meeting.",
    },
    {
      name: "Kimly Phan",
      area: "Riverside",
      rating: 5,
      text: "I love the eco-friendly wet cleaning option. Quality is excellent and the team is very professional.",
    },
    {
      name: "Sarah Johnson",
      area: "Russian Market",
      rating: 5,
      text: "HelloWash has made my life so much easier. Pickup and delivery is always on time. Highly recommend!",
    },
    {
      name: "Veasna Sok",
      area: "Chamkarmon",
      rating: 5,
      text: "Great pricing and premium quality. The factory-level service really shows in the results.",
    },
    {
      name: "Michael Lee",
      area: "Daun Penh",
      rating: 5,
      text: "Professional service from start to finish. They handle delicate fabrics with great care.",
    },
  ];

  const faqs = [
    {
      question: "What areas do you serve in Phnom Penh?",
      answer:
        "We currently serve all major districts including BKK1, Toul Tom Poung, Riverside, Russian Market, Chamkarmon, and Daun Penh. Enter your address on our app to check availability.",
    },
    {
      question: "What are your turnaround times?",
      answer:
        "Standard service: 48 hours. Express 24-hour service available. We also offer super-express 4-hour service for urgent needs (surcharge applies).",
    },
    {
      question: "How does pickup and delivery work?",
      answer:
        "Schedule a pickup via our app or website. Our team will collect your laundry at your chosen time, process it at our central factory, and deliver it back to you. Track your order in real-time through the app.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash on delivery, credit/debit cards, mobile banking, and all major e-wallets popular in Cambodia.",
    },
    {
      question: "What is wet cleaning?",
      answer:
        "Wet cleaning is an eco-friendly, water-based alternative to traditional dry cleaning. It's gentle on fabrics, better for the environment, and highly effective for delicate garments.",
    },
    {
      question:
        "Do you handle delicate fabrics and designer clothes?",
      answer:
        "Absolutely! Our factory has specialized equipment and trained staff for handling delicate fabrics, designer clothing, and specialty items. Each garment is tagged and processed according to its specific care requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639805855077-c7978ecd2214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG5vbSUyMHBlbmglMjBjYW1ib2RpYSUyMHNreWxpbmUlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzcwMDg4MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content with Static Buttons & Badges */}
            <div>
              {/* Animated Content Area - Badge, Title, Description */}
              <div className="relative min-h-[280px] md:min-h-[360px] mb-8">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
                      {slide.badge}
                    </Badge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                      {slide.title}{" "}
                      <span className="text-primary">
                        {slide.titleHighlight}
                      </span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Static Buttons - Always Visible */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Schedule Pickup
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("services")}
                >
                  See Pricing
                </Button>
              </div>

              {/* Dynamic Trust Badges - Changes with Slides */}
              <div className="relative min-h-[250px] sm:min-h-[88px]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {slide.badges.map((badge, badgeIndex) => (
                        <div
                          key={badgeIndex}
                          className="text-center p-3 bg-white rounded-lg shadow-sm"
                        >
                          <badge.icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${badge.color} mx-auto mb-2`}
                          />
                          <p className="text-xs font-medium">
                            {badge.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image with Fixed Aspect Ratio */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                {heroSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt={`${slide.title} - HelloWash Laundry Service`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Widget - REMOVED */}

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            {/* Top Badge */}
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              🧺 Premium Services
            </Badge>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
              Complete laundry solutions for every need
            </p>

            {/* Trust Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" />
                <span>4.8 Rating</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {services.map((service, index) => {
              // Define which service is "Most Popular" (index 0 = Wash & Fold)
              const isFeatured = index === 0;

              // Gradient colors for each service
              const gradients = [
                "from-primary to-primary/80",
                "from-secondary to-secondary/80",
                "from-primary to-primary/80",
                "from-secondary to-secondary/80",
                "from-primary to-primary/80",
                "from-secondary to-secondary/80",
              ];

              return (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                    isFeatured
                      ? "ring-2 ring-accent shadow-xl md:scale-105"
                      : ""
                  }`}
                  onClick={() => onNavigate("services")}
                >
                  {/* Most Popular Badge */}
                  {isFeatured && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg z-10">
                      ⭐ POPULAR
                    </div>
                  )}

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
                    {/* Icon with Gradient Background */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>

                    <h3 className="text-xs sm:text-sm md:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-snug sm:leading-relaxed">
                      {service.description}
                    </p>

                    {/* Mini Feature Bullets */}
                    <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3 md:mb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary flex-shrink-0" />
                        <span>24-48hr turnaround</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary flex-shrink-0" />
                        <span>Free pickup & delivery</span>
                      </div>
                    </div>

                    {/* Price with Starting From */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          Starting from
                        </p>
                        <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-primary">
                          {service.price}
                        </p>
                      </div>

                      {/* Learn More Arrow - appears on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                    </div>

                    {/* Quick Action Button - appears on hover */}
                    <Button
                      className="w-full mt-2 sm:mt-3 md:mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs sm:text-sm"
                      variant={
                        isFeatured ? "default" : "outline"
                      }
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => onNavigate("services")}
              >
                View All Services
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => onNavigate("contact")}
              >
                Talk to Expert
              </Button>
            </div>

            {/* New Customer Badge */}
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              <span>New customers get 10% off first order</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm">
              Simple Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Your laundry done in 5 simple steps - from pickup
              to delivery
            </p>
          </div>

          <div className="relative">
            {/* Animated Straight Water Line - Desktop Only - Perfect Sync */}
            <div className="hidden md:block absolute top-[30px] left-0 right-0 h-[12px] pointer-events-none z-0 overflow-visible">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 12"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ willChange: "auto" }}
              >
                {/* Background straight line (lighter) */}
                <line
                  x1="120"
                  y1="6"
                  x2="1080"
                  y2="6"
                  stroke="#14b8a6"
                  strokeWidth="12"
                  strokeLinecap="round"
                  opacity="0.25"
                />

                {/* Animated filling straight line (main) - perfect linear flow */}
                <line
                  x1="120"
                  y1="6"
                  x2="1080"
                  y2="6"
                  stroke="#14b8a6"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="960"
                  strokeDashoffset="960"
                  className="animate-[fillWater_6s_linear_forwards]"
                  style={{ willChange: "stroke-dashoffset" }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-8 relative z-10">
              {howItWorks.map((step, index) => {
                // Calculate when river reaches each circle position
                // Circle positions: 10%, 30%, 50%, 70%, 90% of container width
                // River takes 6s to travel 100% width - PERFECTLY LINEAR!
                const circlePositions = [
                  0.1, 0.3, 0.5, 0.7, 0.9,
                ];
                const riverTotalTime = 6; // seconds
                const circleFillTime = 0.6; // seconds
                const startDelay =
                  circlePositions[index] * riverTotalTime;

                return (
                  <div
                    key={index}
                    className={`relative group ${index === 4 ? "col-span-2 md:col-span-1 max-w-sm mx-auto md:max-w-none" : ""}`}
                  >
                    <div className="text-center transform transition-all duration-300 hover:scale-105">
                      {/* Number Badge - Optimized */}
                      <div className="relative mb-2 sm:mb-3 md:mb-4 mx-auto w-fit">
                        {/* Simplified glow - no blur for better performance */}
                        <div className="absolute inset-0 bg-secondary/20 rounded-full scale-110"></div>

                        {/* Circular Badge with Water Fill Effect - Synchronized with river position */}
                        <div
                          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-secondary/30 group-hover:ring-secondary/50 transition-all duration-300"
                          style={{ willChange: "transform" }}
                        >
                          {/* Background */}
                          <div className="absolute inset-0 bg-gray-200"></div>

                          {/* Water Fill Animation - Starts when river reaches this position */}
                          <div
                            className="absolute inset-0 bg-secondary"
                            style={{
                              animation: `fillPondOptimized ${circleFillTime}s ease-out ${startDelay}s forwards`,
                              clipPath: "inset(0 100% 0 0)",
                              willChange: "clip-path",
                            }}
                          ></div>

                          {/* Number Text */}
                          <div className="relative w-full h-full flex items-center justify-center text-white text-base sm:text-lg md:text-2xl font-bold z-10">
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* Card Container */}
                      <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-secondary/30 min-h-[180px] sm:min-h-[200px] md:h-[280px] flex flex-col">
                        {/* Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1.5 sm:mb-2 md:mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 leading-snug sm:leading-relaxed flex-1">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-gray-100"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-10 md:mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => onNavigate("how-it-works")}
              >
                See Detailed Process
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <span className="text-sm text-gray-500 hidden sm:inline">
                or
              </span>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/20 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => onNavigate("services")}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="pt-12 md:pt-16 pb-0 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="min-h-[400px] md:min-h-[620px]">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Factory-Level Quality Control
              </h2>
              <p className="text-base md:text-lg mb-8 text-white/90">
                Our central processing plant uses
                state-of-the-art equipment and rigorous quality
                standards to ensure every garment receives
                premium care.
              </p>

              <div className="space-y-4">
                {qualityFeatures.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveQuality(index)}
                    className={`w-full text-left flex items-start space-x-4 transition-all duration-500 ease-in-out rounded-xl px-4 py-3 ${
                      index === activeQuality
                        ? "opacity-100 bg-white/10 backdrop-blur-sm"
                        : "opacity-70 hover:opacity-90 bg-transparent"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold mb-1">
                        {feature.title}
                      </h4>
                      <div
                        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                          index === activeQuality
                            ? "max-h-20 opacity-100 mt-1"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="text-white/80 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              {qualityFeatures.map((feature, index) => (
                <img
                  key={index}
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === activeQuality
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Affordable & Transparent
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              No hidden fees, just honest pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 - Wash & Fold */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-secondary relative overflow-hidden group">
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  Wash & Fold
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  $1.00
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  per kilogram
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Fresh & folded</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>24-hour service</span>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Card 2 - Wash & Press (FEATURED) */}
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-t-accent relative overflow-hidden group shadow-lg md:scale-105">
              {/* Most Popular Badge */}
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                MOST POPULAR
              </div>

              <CardContent className="p-6 md:p-10 relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Shirt className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  Wash & Press
                </h3>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-1">
                  $0.75
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  per shirt
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Professional press</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Crisp & ready</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Best value</span>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </Card>

            {/* Card 3 - Dry Clean */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary relative overflow-hidden group">
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  Dry Clean
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  $10.00
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  suit starting from
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Delicate care</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Expert handling</span>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("services")}
            >
              View Full Price List
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Phone Mockup */}
            <div className="relative">
              {/* Floating Stats Badge - Top Left */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 z-20 animate-[bounce_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-lg text-gray-900">
                      4.8★
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      App Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Downloads Badge - Top Right */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 z-20 animate-[bounce_3s_ease-in-out_infinite] delay-150">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-lg text-gray-900">
                      10K+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      Downloads
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Icon - Bottom Left */}
              <div className="absolute bottom-12 -left-4 sm:bottom-20 sm:-left-8 bg-white rounded-full p-2 sm:p-4 shadow-lg z-20 animate-[bounce_4s_ease-in-out_infinite]">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
              </div>

              {/* Floating Feature Icon - Bottom Right */}
              <div className="absolute bottom-20 -right-4 sm:bottom-32 sm:-right-8 bg-white rounded-full p-2 sm:p-4 shadow-lg z-20 animate-[bounce_4s_ease-in-out_infinite] delay-300">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>

              {/* Phone Mockup Container */}
              <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative group">
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* App Screenshots Slideshow */}
                <div className="w-3/4 h-full relative z-10 group-hover:scale-105 transition-transform duration-500">
                  {/* Images */}
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden">
                    {appScreenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`HelloWash App Screenshot ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                          index === currentAppSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={() =>
                      setCurrentAppSlide(
                        (prev) =>
                          (prev - 1 + appScreenshots.length) %
                          appScreenshots.length,
                      )
                    }
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentAppSlide(
                        (prev) =>
                          (prev + 1) % appScreenshots.length,
                      )
                    }
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                    {appScreenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentAppSlide(index)
                        }
                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentAppSlide
                            ? "w-6 sm:w-8 bg-white"
                            : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform Badges Below Phone */}
              <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                  iOS 14+
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm">
                  Android 8+
                </Badge>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              {/* Top Badge */}
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                📱 Available on Mobile
              </Badge>

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
                Book Anytime with Our App
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Download the HelloWash app for the easiest way
                to schedule pickups, track orders, and manage
                your laundry.
              </p>

              {/* Enhanced Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Quick Booking
                    </h4>
                    <p className="text-xs text-gray-600">
                      Schedule in seconds
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Live Tracking
                    </h4>
                    <p className="text-xs text-gray-600">
                      Real-time updates
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Order History
                    </h4>
                    <p className="text-xs text-gray-600">
                      Past receipts
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Easy Payment
                    </h4>
                    <p className="text-xs text-gray-600">
                      Multiple options
                    </p>
                  </div>
                </div>

                {/* Feature 5 - Special Badge */}
                <div className="sm:col-span-2 flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 shadow-sm hover:shadow-md transition-all duration-300 border border-accent/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                    COMING SOON
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Loyalty Rewards
                    </h4>
                    <p className="text-xs text-gray-600">
                      Earn points on every order
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons with Authentic Styling */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] leading-none">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <svg
                      className="w-6 h-6 mr-2"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4db6ac"
                        d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"
                      />
                      <path
                        fill="#dce775"
                        d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"
                      />
                      <path
                        fill="#d32f2f"
                        d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.735L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"
                      />
                      <path
                        fill="#fbc02d"
                        d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.735c4.432-2.559,8.086-4.671,8.086-4.671C42.644,24.248,42.493,23.609,41.398,23.071z"
                      />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] leading-none">
                        GET IT ON
                      </span>
                      <span className="text-sm font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </Button>
                </div>

                {/* Trust Indicator */}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>
                    Free to download • No subscription required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-secondary to-teal-600 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Floating Stats Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">
                100+ Business Partners
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">
                99.8% On-Time Delivery
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Package className="w-4 h-4" />
              <span className="text-sm font-semibold">
                50K+ Items/Month
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Top Badge */}
              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                🏢 Business Solutions
              </Badge>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Laundry Solutions for Hotels, Restaurants &
                Businesses
              </h2>
              <p className="text-base md:text-lg mb-8 text-white/90">
                We provide reliable, high-volume laundry
                services for commercial clients across Phnom
                Penh.
              </p>

              {/* Client Types Icons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                <div className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Building2 className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <p className="text-xs text-white/80">
                    Hotels
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <p className="text-xs text-white/80">
                    Restaurants
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Leaf className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <p className="text-xs text-white/80">Spas</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <p className="text-xs text-white/80">
                    Clinics
                  </p>
                </div>
              </div>

              {/* Premium Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold mb-1">
                    High-Volume Capacity
                  </p>
                  <p className="text-sm text-white/70">
                    Handle 1000+ items daily
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold mb-1">
                    Consistent Quality
                  </p>
                  <p className="text-sm text-white/70">
                    Hotel-grade standards
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold mb-1">
                    On-Time Delivery
                  </p>
                  <p className="text-sm text-white/70">
                    99.8% reliability rate
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold mb-1">
                    Custom Agreements
                  </p>
                  <p className="text-sm text-white/70">
                    Flexible partnership terms
                  </p>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-secondary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => onNavigate("business")}
                >
                  Request a Business Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => onNavigate("business")}
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Enhanced Image with Overlay */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 transition-all duration-300">
                <img
                  src="https://www.love2laundry.com/blog/wp-content/uploads/2025/12/our-eco-friendly-laundry-solutions-for-restaurants.webp"
                  alt="Hotel linens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-secondary font-bold text-lg">
                        Trusted by 10+ Hotels
                      </p>
                      <p className="text-gray-600 text-sm">
                        Across Phnom Penh & Cambodia
                      </p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
                        H
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
                        R
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
                        S
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              💼 Business Opportunity
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Open a HelloWash Franchise
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join Phnom Penh's fastest-growing laundry network
              and build a profitable business with proven
              systems.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 md:px-6 py-3">
                <div className="text-xl md:text-2xl font-bold text-white">
                  15+
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Locations
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 md:px-6 py-3">
                <div className="text-xl md:text-2xl font-bold text-white">
                  95%
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Success Rate
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 md:px-6 py-3">
                <div className="text-xl md:text-2xl font-bold text-white">
                  $50K+
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Avg. Revenue/mo
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1">
                Proven System
              </h4>
              <p className="text-sm text-white/70">
                Turnkey operations & training
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1">
                Brand Power
              </h4>
              <p className="text-sm text-white/70">
                Recognized & trusted name
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1">
                Full Support
              </h4>
              <p className="text-sm text-white/70">
                Marketing & tech included
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1">
                Low Investment
              </h4>
              <p className="text-sm text-white/70">
                Affordable startup costs
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8"
              onClick={() => onNavigate("franchise")}
            >
              Become a Franchise Partner
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="mt-4 text-sm text-white/80">
              📞 Call us: +855 12 345 678 | 📧
              franchise@hellowash.com
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              ❓ Help Center
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <span className="text-left font-semibold text-gray-900 flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-9 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <p className="text-lg text-gray-700 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => onNavigate("contact")}
              >
                Contact Support
              </Button>
              <Button
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                📞 Call: +855 12 345 678
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Top Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            ⏰ Save Your Time
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Save Time Every Week?
          </h2>
          <p className="text-base md:text-xl lg:text-2xl mb-6 text-white/90 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust
            HelloWash for their laundry needs.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold">
                  5,000+
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Happy Customers
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold">
                  4.8/5
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Average Rating
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold">
                  10K+
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Deliveries/Month
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8"
            >
              Schedule Pickup Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 text-lg px-8"
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24-48hr Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              <span>Eco-Friendly Cleaning</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}