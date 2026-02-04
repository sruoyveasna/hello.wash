import {
  Smartphone,
  Truck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Package,
  Scan,
  Droplets,
  Wind,
  Maximize2,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Phone,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState, useEffect } from "react";

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export function HowItWorksPage({
  onNavigate,
}: HowItWorksPageProps) {
  const steps = [
    {
      number: "01",
      title: "Schedule Pickup",
      description:
        "Use our app or website to schedule a convenient pickup time. Choose your services and preferred time slot.",
      icon: Smartphone,
      details: [
        "Download the HelloWash app or visit our website",
        "Enter your pickup address",
        "Select your preferred service type",
        "Choose a convenient pickup time",
        "Add any special instructions",
      ],
    },
    {
      number: "02",
      title: "We Collect",
      description:
        "Our friendly team arrives at your doorstep to collect your laundry. Contactless pickup available.",
      icon: Truck,
      details: [
        "Receive SMS notification when driver is nearby",
        "Our team arrives at your scheduled time",
        "Hand over your laundry (we provide bags if needed)",
        "Receive digital receipt via app",
        "Track your order in real-time",
      ],
    },
    {
      number: "03",
      title: "Factory Processing",
      description:
        "Your items arrive at our central facility where they're sorted, tagged, and processed with care.",
      icon: Sparkles,
      details: [
        "Items received and logged into system",
        "Individual garment tagging",
        "Sorting by fabric type and color",
        "Professional cleaning using appropriate methods",
        "Stain treatment as needed",
      ],
    },
    {
      number: "04",
      title: "Quality Check",
      description:
        "Every item is inspected, pressed or folded, and carefully packaged before delivery.",
      icon: ShieldCheck,
      details: [
        "Post-cleaning quality inspection",
        "Professional pressing or neat folding",
        "Final quality control check",
        "Secure packaging",
        "Ready for delivery",
      ],
    },
    {
      number: "05",
      title: "Delivery",
      description:
        "Fresh, clean laundry delivered back to your door at your preferred time. Payment made easy.",
      icon: CheckCircle2,
      details: [
        "SMS notification before delivery",
        "Delivered to your preferred location",
        "Verify order completeness",
        "Multiple payment options available",
        "Rate your experience",
      ],
    },
  ];

  const factoryProcess = [
    {
      icon: Package,
      title: "Receiving",
      description: "Items logged and inspected upon arrival",
      color: "from-primary to-primary/80",
    },
    {
      icon: Scan,
      title: "Tagging",
      description: "Each garment tagged for tracking",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Maximize2,
      title: "Sorting",
      description: "Organized by fabric type and color",
      color: "from-primary to-primary/80",
    },
    {
      icon: Droplets,
      title: "Washing",
      description: "Cleaned with appropriate programs",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Wind,
      title: "Drying",
      description: "Gentle drying to preserve fabrics",
      color: "from-primary to-primary/80",
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Professional pressing or folding",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: ShieldCheck,
      title: "QC",
      description: "Final quality control inspection",
      color: "from-accent to-accent/80",
    },
    {
      icon: Truck,
      title: "Dispatch",
      description: "Packaged and ready for delivery",
      color: "from-primary to-primary/80",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Hero Carousel
  const heroCarouselImages = [
    {
      image:
        "https://www.love2laundry.com/blog/wp-content/uploads/2025/07/image-2-1024x559.jpeg",
      title: "Convenient Pickup",
      description:
        "Fast & reliable delivery service to your door.",
      icon: Truck,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/employees-uniform-folding-clothes-laundry-service_385881-228.jpg",
      title: "Professional Cleaning",
      description:
        "Expert care with state-of-the-art equipment.",
      icon: Sparkles,
    },
    {
      image:
        "https://hellolaundry.co.uk/storage/images/blogs/perfect-laundromat-experience/wash-and-fold-laundry-service-for-busy-moms.jpg",
      title: "Happy Customers",
      description: "Join thousands of satisfied customers.",
      icon: CheckCircle2,
    },
    {
      image:
        "https://www.peppyocean.com/wp-content/uploads/2022/07/laundry-app-development-1200x900.png",
      title: "Track Your Order",
      description: "Real-time updates via our mobile app.",
      icon: Smartphone,
    },
    {
      image:
        "https://hellolaundry.co.uk/storage/images/blogs/wash-dry-fold-repeat-service/wash-fold-services.jpeg",
      title: "Fresh & Clean",
      description: "Perfectly cleaned, folded & ready to wear.",
      icon: Sparkles,
    },
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide(
        (prev) => (prev + 1) % heroCarouselImages.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroCarouselImages.length]);

  const handleNextHeroSlide = () => {
    if (currentHeroSlide < heroCarouselImages.length - 1) {
      setCurrentHeroSlide(currentHeroSlide + 1);
    }
  };

  const handlePreviousHeroSlide = () => {
    if (currentHeroSlide > 0) {
      setCurrentHeroSlide(currentHeroSlide - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <Badge
                className="mb-4 bg-accent/20 text-accent-foreground border-accent/30"
                style={{
                  animation: "fadeInDown 0.6s ease-out",
                }}
              >
                📋 Simple Process
              </Badge>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.2s backwards",
                }}
              >
                How It Works
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.4s backwards",
                }}
              >
                From pickup to delivery, we make laundry
                effortless. Here's our simple 5-step process.
              </p>

              {/* Quick Stats */}
              <div
                className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.6s backwards",
                }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    5
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Easy Steps
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
                    24h
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Fast Service
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Carousel */}
            <div
              className="relative"
              style={{
                animation:
                  "fadeInRight 0.8s ease-out 0.4s backwards",
              }}
            >
              <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden group">
                <CardContent className="p-0 relative">
                  {/* Carousel Container */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    {/* Slides */}
                    {heroCarouselImages.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === currentHeroSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                              {(() => {
                                const Icon = slide.icon;
                                return (
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                );
                              })()}
                            </div>
                            <h3 className="text-lg sm:text-2xl font-bold">
                              {slide.title}
                            </h3>
                          </div>
                          <p className="text-white/90 text-xs sm:text-sm">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                      onClick={handlePreviousHeroSlide}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={handleNextHeroSlide}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Dots Navigation */}
                  <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
                    {heroCarouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentHeroSlide(index)
                        }
                        className={`transition-all duration-300 rounded-full ${
                          index === currentHeroSlide
                            ? "w-6 sm:w-8 h-2 bg-white shadow-lg"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Auto-play Indicator */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-white text-xs font-medium flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">
                      Live Preview
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Badge */}
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border-2 sm:border-4 border-white"
                style={{
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold">
                      4.9/5
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-90">
                      Customer Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Horizontal Stepper */}
          <div className="hidden md:block mb-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`w-full flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      index === currentStep
                        ? "scale-105"
                        : "hover:scale-105 hover:opacity-100"
                    }`}
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 transition-all duration-300 shadow-lg ${
                        index === currentStep
                          ? "bg-gradient-to-br from-primary to-secondary shadow-xl ring-4 ring-primary/20"
                          : index < currentStep
                            ? "bg-gradient-to-br from-secondary to-secondary/80 shadow-md"
                            : "bg-gray-200 text-gray-500 shadow-sm"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle2
                          className="w-9 h-9"
                          strokeWidth={2.5}
                        />
                      ) : (
                        step.number
                      )}
                    </div>

                    {/* Step Label */}
                    <div
                      className={`text-center transition-all duration-300 ${
                        index === currentStep
                          ? "font-bold text-primary scale-105"
                          : index < currentStep
                            ? "font-semibold text-secondary"
                            : "text-gray-500"
                      }`}
                    >
                      <step.icon
                        className={`w-7 h-7 mx-auto mb-2 ${
                          index === currentStep
                            ? "animate-pulse"
                            : ""
                        }`}
                      />
                      <p className="text-sm font-medium max-w-[80px] leading-tight">
                        {step.title}
                      </p>
                    </div>
                  </button>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-[60%] w-full h-1.5 -z-10">
                      <div className="h-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-secondary via-primary to-secondary rounded-full transition-all duration-700 ease-in-out ${
                            index < currentStep
                              ? "w-full"
                              : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content Card */}
          <Card className="max-w-5xl mx-auto shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden">
            <CardContent className="p-3 sm:p-6 md:p-8 lg:p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                {/* Left: Details */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-2xl md:text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {steps[currentStep].number}
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const Icon = steps[currentStep].icon;
                        return (
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                        );
                      })()}
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                    {steps[currentStep].description}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    {steps[currentStep].details.map(
                      (detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 p-1.5 sm:p-2 md:p-3 rounded-lg hover:bg-secondary/5 transition-colors duration-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug">
                            {detail}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Right: Visual */}
                <div className="order-first md:order-last hidden md:block">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-8 sm:p-12 shadow-inner hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {(() => {
                      const Icon = steps[currentStep].icon;
                      return (
                        <Icon className="w-full h-full text-primary/30 relative z-10" />
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8 lg:mt-10 pt-4 sm:pt-6 md:pt-8 border-t-2 border-gray-100 gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handlePreviousStep}
                  disabled={currentStep === 0}
                  className="disabled:opacity-30 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 px-2.5 sm:px-3 md:px-4 h-9 sm:h-10 md:h-11"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5 sm:mr-1 md:mr-2" />
                  <span className="hidden sm:inline text-sm md:text-base">
                    Previous
                  </span>
                </Button>

                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium bg-gray-50 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
                  Step {currentStep + 1} of {steps.length}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={handleNextStep}
                  disabled={currentStep === steps.length - 1}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:opacity-30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-2.5 sm:px-3 md:px-4 h-9 sm:h-10 md:h-11"
                >
                  <span className="hidden sm:inline text-sm md:text-base">
                    Next
                  </span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 sm:ml-1 md:ml-2" />
                </Button>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        </div>
      </section>

      {/* Factory Process */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden"> */}
      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              🏭 Factory Operations
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Happens at Our Factory
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facility with rigorous quality controls at every
              stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {factoryProcess.map((process, index) => (
              <Card 
                key={index} 
                className="border-2 border-gray-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
              >
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <process.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-gray-900">{process.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{process.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Coverage Map - Redesigned with Left-Right Split */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Decorative Elements with Animation */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary text-white border-none shadow-lg text-xs sm:text-sm">
                🗺️ Service Areas
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Pickup & Delivery
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Coverage
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                We serve all major districts in Phnom Penh with
                convenient pickup and delivery. Minimum 3kg order
                for wash & fold service.
              </p>

              {/* Feature Cards */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                      All Major Districts Covered
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      BKK1, Riverside, Russian Market,
                      Chamkarmon, Daun Penh & more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/70 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                      Reliable Pickup & Delivery
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Convenient door-to-door service with
                      flexible scheduling
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                      Flexible Scheduling
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      7 days a week, choose your preferred time
                      slot
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
                style={{ backgroundPosition: "left" }}
              >
                Check Your Area
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Service Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    name: "BKK1",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Toul Tom Poung",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Riverside",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Russian Market",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Chamkarmon",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Daun Penh",
                    status: "active",
                    deliveryTime: "Same Day",
                  },
                  {
                    name: "Sen Sok",
                    status: "coming",
                    deliveryTime: "Coming Soon",
                  },
                  {
                    name: "Tuol Kork",
                    status: "coming",
                    deliveryTime: "Coming Soon",
                  },
                  {
                    name: "Other Areas",
                    status: "contact",
                    deliveryTime: "Contact Us",
                  },
                ].map((district, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      district.status === "active"
                        ? "bg-white border-secondary/30 hover:border-secondary"
                        : district.status === "coming"
                          ? "bg-white/50 border-accent/30 hover:border-accent"
                          : "bg-white/30 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">
                        {district.name}
                      </h4>
                      <MapPin
                        className={`w-5 h-5 ${
                          district.status === "active"
                            ? "text-secondary"
                            : district.status === "coming"
                              ? "text-accent"
                              : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          district.status === "active"
                            ? "bg-secondary"
                            : district.status === "coming"
                              ? "bg-accent"
                              : "bg-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          district.status === "active"
                            ? "text-secondary font-medium"
                            : district.status === "coming"
                              ? "text-accent font-medium"
                              : "text-gray-500"
                        }`}
                      >
                        {district.deliveryTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border-2 border-primary/20">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Not sure if we cover your area?
                    </p>
                    <p className="text-sm text-gray-600">
                      Enter your address during booking to check
                      availability, or contact us for service
                      areas outside these districts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track in App - Redesigned with Dark Sleek Design */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900 to-secondary/20"></div>
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-20"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-20"
          style={{ animation: "pulse 5s ease-in-out infinite" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary text-white border-none shadow-xl animate-pulse text-xs sm:text-sm">
                📱 Mobile App
              </Badge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Track Your Order
                <br />
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  in Real-Time
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-300">
                Download our app to track every step of your
                laundry journey, from pickup to delivery. Never
                wonder where your clothes are!
              </p>

              {/* Feature Timeline */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <h4 className="font-bold text-base sm:text-lg md:text-xl">
                        Live GPS Tracking
                      </h4>
                      <Badge className="bg-primary/20 text-primary-foreground border-primary/30 text-[10px] sm:text-xs">
                        NEW
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400">
                      See your driver's location in real-time on
                      the map. Know exactly when they'll arrive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                      Smart Notifications
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400">
                      Receive instant updates when your order is
                      picked up, being processed, and out for
                      delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent to-accent/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                      Accurate ETA
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400">
                      Get precise delivery time estimates
                      updated in real-time based on current
                      progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup Placeholder */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-700 transform hover:scale-105 transition-all duration-300 max-h-[90vh] md:max-h-none">
                <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19] max-h-[calc(90vh-3rem)] md:max-h-none">
                  {/* Phone Screen Content */}
                  <div className="p-3 sm:p-4 md:p-6 h-full bg-gradient-to-b from-gray-800 to-gray-900 overflow-y-auto">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-8 text-[10px] sm:text-xs text-gray-400">
                      <span>9:41 AM</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-2 sm:h-3 bg-gray-600 rounded"></div>
                        <div className="w-1 h-2 sm:h-3 bg-gray-600 rounded"></div>
                        <div className="w-1 h-2 sm:h-3 bg-gray-500 rounded"></div>
                        <div className="w-1 h-2 sm:h-3 bg-gray-700 rounded"></div>
                      </div>
                    </div>

                    {/* Header */}
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-xl mb-3 sm:mb-4 md:mb-6">
                      Track Order
                    </h3>

                    {/* Order Status Steps */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-6">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-white">
                            Order Confirmed
                          </div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-500">
                            Today, 9:00 AM
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 sm:ml-4.5 md:ml-6 w-0.5 h-3 sm:h-4 md:h-8 bg-secondary"></div>

                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                          <Truck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-white">
                            Driver En Route
                          </div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs text-secondary">
                            Arriving in 5 mins
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 sm:ml-4.5 md:ml-6 w-0.5 h-3 sm:h-4 md:h-8 bg-gray-700"></div>

                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 opacity-50">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-500">
                            Processing
                          </div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-600">
                            Pending
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* App Store Buttons Below */}
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* CTA - Redesigned with Image Background & Overlay */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596433904747-e8b061219a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNsZWFuJTIwZm9sZGVkJTIwbGF1bmRyeSUyMGNsb3RoZXN8ZW58MXx8fHwxNzcwMDIyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresh clean laundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-secondary/95"></div>
          {/* Animated Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
              style={{
                animation: "float 8s ease-in-out infinite",
              }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 backdrop-blur-md shadow-xl text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 sm:py-2">
              🚀 Get Started Today
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Experience
              <br />
              <span className="text-accent">HelloWash?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have
              made the switch to hassle-free laundry care.
              Schedule your first pickup today!
            </p>

            {/* Large CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch mb-10 sm:mb-12 md:mb-16 sm:*:flex-1 sm:*:min-w-0 max-w-4xl mx-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 font-bold group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Schedule Pickup Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-3 border-white text-primary hover:bg-primary hover:text-white hover:border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 font-bold"
                onClick={() => onNavigate("contact")}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                081 661 616
              </Button>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 group flex sm:block items-start sm:text-center gap-3 sm:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-3 md:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    Fast Turnaround
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    24-48 hour standard service
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 group flex sm:block items-start sm:text-center gap-3 sm:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-3 md:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                  <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    Affordable Delivery
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Convenient pickup & delivery service
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 group flex sm:block items-start sm:text-center gap-3 sm:gap-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-3 md:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    100% Guaranteed
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Premium quality or your money back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}