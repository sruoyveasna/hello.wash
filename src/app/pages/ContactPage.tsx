import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Search,
  CheckCircle2,
  Store,
  ChevronRight,
  Sparkles,
  Headphones,
  Navigation,
  Zap,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      info: "081 661 616",
      description: "Mon-Sat: 7:00 AM - 7:00 PM",
      action: "Call Now",
      href: "tel:081661616",
      color: "from-primary to-primary/80",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "081 661 616",
      description: "Fast response, 24/7",
      action: "Message Us",
      href: "https://wa.me/855816616",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@hellowash.com.kh",
      description: "We reply within 24 hours",
      action: "Send Email",
      href: "mailto:info@hellowash.com.kh",
      color: "from-accent to-accent/80",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 5:00 PM" },
  ];

  const serviceZones = [
    {
      name: "BKK1 & BKK2",
      areas: ["Boeung Keng Kang 1", "Boeung Keng Kang 2"],
      pickup: "Same day",
    },
    {
      name: "Toul Tom Poung",
      areas: ["Russian Market area", "Toul Tom Poung 1 & 2"],
      pickup: "Same day",
    },
    {
      name: "Riverside & Daun Penh",
      areas: ["Riverside", "Wat Phnom", "Central Market area"],
      pickup: "Same day",
    },
    {
      name: "Chamkarmon",
      areas: ["Olympic Stadium", "Toul Sleng", "Tuol Svay Prey"],
      pickup: "Same day",
    },
    {
      name: "Toul Kork",
      areas: ["Boeung Kak", "Toul Kork", "Olympic Market"],
      pickup: "Same day",
    },
    {
      name: "Sen Sok",
      areas: ["Teuk Thla", "Khmuonh"],
      pickup: "Next day",
    },
  ];

  const franchiseLocations = [
    {
      name: "HelloWash Central (Factory)",
      address:
        "National Road 2, Phum Prek Takong 3, Sangkat Chak Angre Leu, Phnom Penh",
      phone: "081 661 616",
      hours: "Mon-Sat: 7:00 AM - 7:00 PM, Sun: 8:00 AM - 5:00 PM",
      services: ["Pickup & Delivery", "Drop-off", "Express Service"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9261234567!2d104.9!3d11.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzAwLjAiTiAxMDTCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2skh!4v1234567890",
    },
    {
      name: "BKK1 Drop-off Point (Coming Soon)",
      address: "Street 308, BKK1, Phnom Penh",
      phone: "081 661 616",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Drop-off", "Express Service"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8!2d104.92!3d11.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzM2LjAiTiAxMDTCsDU1JzEyLjAiRQ!5e0!3m2!1sen!2skh!4v1234567891",
    },
    {
      name: "Riverside Drop-off (Coming Soon)",
      address: "Sisowath Quay, Phnom Penh",
      phone: "081 661 616",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Drop-off"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7!2d104.93!3d11.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM0JzEyLjAiTiAxMDTCsDU1JzQ4LjAiRQ!5e0!3m2!1sen!2skh!4v1234567892",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583500494664-16c902acdeab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG5vbSUyMHBlbmglMjBjYW1ib2RpYSUyMG1hcCUyMGxvY2F0aW9ufGVufDF8fHx8MTc3MDAxODkyOXww&ixlib=rb-4.1.0&q=80&w=1080')`,
            filter: 'blur(8px)',
          }}
        ></div>

        {/* Decorative Elements - Animated */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge 
              className="mb-3 sm:mb-4 bg-primary/20 text-primary border-primary/30 text-xs sm:text-sm"
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              📍 Get In Touch
            </Badge>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s backwards" }}
            >
              Contact Us &{" "}
              <span className="text-primary">Locations</span>
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}
            >
              We're here to help! Reach out with any questions, check our service coverage areas, or visit our locations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm">
              💬 Quick Contact
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Choose Your Preferred Way to Reach Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple channels to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${method.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-1.5 md:mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-1.5 md:mb-2">
                    {method.info}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    {method.description}
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3"
                    onClick={() => window.open(method.href, "_blank")}
                  >
                    {method.action}
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div 
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-4xl mx-auto"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s backwards" }}
          >
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">&lt;1hr</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Average Response Time</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-0.5 sm:mb-1">24/7</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">WhatsApp Support</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-0.5 sm:mb-1">100%</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Coverage Zones */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
              🗺️ Coverage Areas
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Service Coverage Zones
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
              Free pickup & delivery in all listed areas
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex gap-2 sm:gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <Input
                        placeholder="Enter your address or area name..."
                        className="pl-9 sm:pl-10 h-10 sm:h-12 border-2 focus:border-primary transition-colors text-sm sm:text-base"
                      />
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base px-3 sm:px-4"
                    >
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Check</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {serviceZones.map((zone, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-gray-100 relative overflow-hidden"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 relative z-10">
                  <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-gray-900">{zone.name}</h3>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-2 sm:mb-3 md:mb-4">
                    {zone.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 sm:space-x-2">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                        <span className="text-[11px] sm:text-xs md:text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4 border-t-2 border-gray-100">
                    <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
                      <span className="font-semibold text-primary">{zone.pickup} pickup</span>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-4 lg:py-20 bg-white relative overflow-hidden max-h-[90vh] lg:max-h-none">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 h-full lg:h-auto">
          <div className="text-center mb-3 lg:mb-12 px-4 sm:px-6 lg:px-8">
            <Badge className="mb-2 lg:mb-4 bg-primary/10 text-primary border-primary/20 text-xs lg:text-sm">
              📍 Visit Us
            </Badge>
            <h2 className="text-xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-4">
              Our Locations
            </h2>
            <p className="text-sm lg:text-xl text-gray-600">
              Visit our drop-off points or schedule pickup & delivery
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative h-[calc(90vh-120px)] lg:h-auto">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {franchiseLocations.map((location, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                    <div className="grid lg:grid-cols-2 items-center h-full">
                      {/* Left - Google Map */}
                      <div 
                        className="relative h-[35vh] lg:h-[600px] overflow-hidden group"
                        style={{ animation: `fadeInLeft 0.8s ease-out ${index * 0.1}s backwards` }}
                      >
                        <iframe
                          src={location.mapUrl}
                          className="w-full h-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${location.name}`}
                        ></iframe>
                        <div className="absolute top-3 left-3 right-3 lg:top-8 lg:left-8 lg:right-8 z-10 pointer-events-none">
                          <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-md rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                              <Store className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                            </div>
                            <Badge className="bg-accent/90 text-accent-foreground border-accent/30 backdrop-blur-sm text-xs lg:text-sm">
                              {location.name.includes("Coming Soon") ? "Opening Soon" : "Now Open"}
                            </Badge>
                          </div>
                          <h3 className="text-sm lg:text-2xl font-bold text-gray-900 drop-shadow-lg bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-lg lg:rounded-xl inline-block">
                            {location.name.replace(" (Coming Soon)", "")}
                          </h3>
                        </div>
                      </div>

                      {/* Right - Content */}
                      <div 
                        className="p-3 lg:p-8 xl:p-12 h-[calc(55vh-120px)] lg:h-auto overflow-y-auto lg:overflow-visible"
                        style={{ animation: `fadeInRight 0.8s ease-out ${index * 0.1 + 0.2}s backwards` }}
                      >
                        <div className="space-y-2 lg:space-y-6">
                          {/* Address */}
                          <div className="flex items-start space-x-2 lg:space-x-4 p-2 lg:p-4 rounded-lg lg:rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <MapPin className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xs lg:text-sm font-semibold text-gray-500 mb-0.5 lg:mb-1">ADDRESS</h4>
                              <p className="text-xs lg:text-base text-gray-900 font-medium">{location.address}</p>
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="flex items-start space-x-2 lg:space-x-4 p-2 lg:p-4 rounded-lg lg:rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <Phone className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xs lg:text-sm font-semibold text-gray-500 mb-0.5 lg:mb-1">PHONE</h4>
                              <a
                                href={`tel:${location.phone}`}
                                className="text-primary hover:underline font-bold text-sm lg:text-lg"
                              >
                                {location.phone}
                              </a>
                            </div>
                          </div>

                          {/* Hours */}
                          <div className="flex items-start space-x-2 lg:space-x-4 p-2 lg:p-4 rounded-lg lg:rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xs lg:text-sm font-semibold text-gray-500 mb-0.5 lg:mb-1">HOURS</h4>
                              <p className="text-xs lg:text-base text-gray-900 font-medium">{location.hours}</p>
                            </div>
                          </div>

                          {/* Services */}
                          <div className="pt-2 lg:pt-6 border-t-2 border-gray-100">
                            <h4 className="text-xs lg:text-sm font-bold mb-2 lg:mb-4 text-gray-900 flex items-center gap-1 lg:gap-2">
                              <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                              AVAILABLE SERVICES
                            </h4>
                            <div className="flex flex-wrap gap-1.5 lg:gap-2">
                              {location.services.map((service, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary rounded-full text-xs lg:text-sm font-semibold border border-secondary/20"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button className="w-full mt-2 lg:mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm lg:text-lg py-3 lg:py-6">
                            <Navigation className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tiny Navigation Controls */}
            <div className="absolute top-2 right-2 lg:top-4 lg:right-4 flex items-center gap-1.5 lg:gap-2 z-20">
              {/* Arrow Buttons */}
              <button
                onClick={scrollPrev}
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={!prevBtnEnabled}
                aria-label="Previous location"
              >
                <ChevronLeft className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </button>

              <button
                onClick={scrollNext}
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={!nextBtnEnabled}
                aria-label="Next location"
              >
                <ChevronRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              ✉️ Message Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? Send us a message and we'll respond within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card 
              className="shadow-2xl border-2 border-gray-100"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s backwards" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900 font-medium">Your Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="081 xxx xxxx" 
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-900 font-medium">Subject *</Label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border-2 rounded-md bg-background focus:border-primary focus:outline-none transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Pricing Question</option>
                      <option>Service Issue</option>
                      <option>Business Partnership</option>
                      <option>Franchise Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={6}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div 
              className="space-y-6"
              style={{ animation: "fadeInUp 0.6s ease-out 0.4s backwards" }}
            >
              {/* Address */}
              <Card className="shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Our Location</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        National Road 2, Phum Prek Takong 3
                        <br />
                        Sangkat Chak Angre Leu
                        <br />
                        Phnom Penh, Cambodia
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                        Customer Service Hours
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {officeHours.map((schedule, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center pb-2 sm:pb-3 border-b-2 border-gray-100 last:border-0 hover:bg-secondary/5 p-2 rounded-lg transition-colors duration-200"
                          >
                            <span className="text-sm sm:text-base text-gray-700 font-medium">{schedule.day}</span>
                            <span className="text-sm sm:text-base font-bold text-secondary">
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl bg-gradient-to-br from-primary via-primary/95 to-secondary text-white border-2 border-primary/20 relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">Follow Us</h3>
                  </div>
                  <p className="mb-6 text-white/90">
                    Stay updated with our latest offers and laundry tips
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🔗 Quick Links
          </Badge>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick Answers</h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for quick information? Check out our most popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("pricing")}
            >
              View Pricing
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("how-it-works")}
            >
              How It Works
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("services")}
            >
              Our Services
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate("business")}
            >
              Business Solutions
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-xl">
            <Sparkles className="w-10 h-10" />
          </div>

          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            🚀 Get Started Today
          </Badge>

          <h2 className="text-4xl font-bold mb-6">
            Ready to Try HelloWash?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Don't wait - schedule your first pickup today and experience
            premium laundry service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              Schedule Pickup
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Download App
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}