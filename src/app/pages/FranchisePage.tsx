import {
  Store,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  DollarSign,
  Headphones,
  Rocket,
  Target,
  GraduationCap,
  BarChart,
  ChevronRight,
  Phone,
  Sparkles,
  MapPin,
  Calendar,
  FileText,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";

interface FranchisePageProps {
  onNavigate: (page: string) => void;
}

export function FranchisePage({
  onNavigate,
}: FranchisePageProps) {
  const whyFranchise = [
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description:
        "Join a fast-growing brand with a track record of success in Phnom Penh's laundry market.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Target,
      title: "Growing Market",
      description:
        "Cambodia's middle class is expanding rapidly, creating strong demand for premium laundry services.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: GraduationCap,
      title: "Full Training & Support",
      description:
        "Comprehensive training program covering operations, marketing, and customer service.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Dedicated support team, marketing materials, and operational guidance throughout your journey.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Store,
      title: "Central Processing",
      description:
        "No expensive equipment needed. All cleaning done at our central factory - you focus on customer service.",
      color: "from-accent to-accent/80",
    },
    {
      icon: BarChart,
      title: "Marketing & Technology",
      description:
        "Benefit from our app, website, and marketing campaigns that drive customers to your location.",
      color: "from-primary to-primary/80",
    },
  ];

  const support = [
    "Site selection assistance",
    "Store design and setup",
    "Equipment and supplies",
    "Operations manual",
    "Staff training programs",
    "Marketing materials",
    "Point-of-sale system",
    "App integration",
    "Ongoing operational support",
    "Quality control systems",
    "Pricing strategy guidance",
    "Customer service training",
  ];

  const requirements = [
    "Initial franchise fee investment",
    "Working capital for operations",
    "Suitable retail location (100-200 sqm)",
    "Passion for customer service",
    "Business management experience (preferred)",
    "Commitment to HelloWash brand standards",
  ];

  const franchiseProcess = [
    {
      step: "1",
      title: "Submit Inquiry",
      desc: "Fill out application form",
      icon: FileText,
    },
    {
      step: "2",
      title: "Review & Meet",
      desc: "Discuss opportunity",
      icon: Users,
    },
    {
      step: "3",
      title: "Site Selection",
      desc: "Find the right location",
      icon: MapPin,
    },
    {
      step: "4",
      title: "Training",
      desc: "Comprehensive program",
      icon: GraduationCap,
    },
    {
      step: "5",
      title: "Grand Opening",
      desc: "Launch your franchise",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Decorative Elements - Animated */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <Badge
                className="mb-3 sm:mb-4 bg-accent/20 text-accent-foreground border-accent/30 text-xs sm:text-sm"
                style={{
                  animation: "fadeInDown 0.6s ease-out",
                }}
              >
                🚀 Franchise Opportunity
              </Badge>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.2s backwards",
                }}
              >
                Own a HelloWash{" "}
                <span className="text-primary">Franchise</span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.4s backwards",
                }}
              >
                Join Cambodia's fastest-growing laundry network
                and build a profitable business with proven
                systems and full support.
              </p>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.6s backwards",
                }}
              >
                <Card className="text-center border-2 border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-3 sm:p-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      2X
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      Growth Rate
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-3 sm:p-4">
                    <Store className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                      10+
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      Locations Planned
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-3 sm:p-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
                      5K+
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      Happy Customers
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.8s backwards",
                }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  onClick={() => {
                    document
                      .getElementById("franchise-application")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 text-sm sm:text-base"
                  onClick={() => onNavigate("contact")}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Request Information
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative"
              style={{
                animation:
                  "fadeInRight 0.8s ease-out 0.4s backwards",
              }}
            >
              <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden group">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://static.bangkokpost.com/media/content/dcx/2023/07/04/4814963.jpg"
                      alt="Franchise opportunity"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Floating Badge */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border-2 sm:border-4 border-white"
                style={{
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                      Join Us
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-90">
                      Be Part of Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              💎 Benefits
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Franchise with HelloWash?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in the laundry
              business
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {whyFranchise.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border-2 border-gray-200"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 relative z-10">
                  <div className="flex sm:block items-start gap-2 sm:gap-0">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-0 sm:mb-2 md:mb-3 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-snug sm:leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Support */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm">
              📋 Details
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Support & Requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              What we provide and what you'll need
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Support */}
            <Card
              className="shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
              style={{
                animation:
                  "fadeInUp 0.6s ease-out 0.2s backwards",
              }}
            >
              <CardContent className="p-5 sm:p-6 md:p-8 relative z-10">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      What We Provide
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      Complete franchise support
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {support.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-secondary/5 transition-colors duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Requirements */}
            <Card
              className="shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
              style={{
                animation:
                  "fadeInUp 0.6s ease-out 0.4s backwards",
              }}
            >
              <CardContent className="p-5 sm:p-6 md:p-8 relative z-10">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      Requirements
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      What you'll need
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {requirements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 sm:pt-6 border-t-2 border-gray-200">
                  <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900">
                    Investment Overview
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 sm:gap-2">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                        Franchise Fee
                      </span>
                      <span className="font-semibold text-primary text-xs sm:text-sm">
                        Contact for details
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 sm:gap-2">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                        Setup Costs
                      </span>
                      <span className="font-semibold text-primary text-xs sm:text-sm">
                        Contact for details
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 sm:gap-2">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                        Working Capital
                      </span>
                      <span className="font-semibold text-primary text-xs sm:text-sm">
                        Contact for details
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden"
        id="franchise-application"
      >
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              📝 Application
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Franchise Application
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Take the first step toward business ownership
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-gray-100">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="fname"
                      className="text-gray-900 font-medium text-sm sm:text-base"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="fname"
                      placeholder="Your first name"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lname"
                      className="text-gray-900 font-medium text-sm sm:text-base"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lname"
                      placeholder="Your last name"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-900 font-medium text-sm sm:text-base"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-900 font-medium text-sm sm:text-base"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="081 xxx xxxx"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="text-gray-900 font-medium text-sm sm:text-base"
                  >
                    Preferred Location/Area
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g., BKK1, Riverside, Toul Kork"
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="capital"
                    className="text-gray-900 font-medium text-sm sm:text-base"
                  >
                    Available Investment Capital
                  </Label>
                  <select
                    id="capital"
                    className="w-full px-3 py-2 border-2 rounded-md bg-background focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                  >
                    <option>Select range</option>
                    <option>$20,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="experience"
                    className="text-gray-900 font-medium text-sm sm:text-base"
                  >
                    Business Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your business background..."
                    rows={3}
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="why"
                    className="text-gray-900 font-medium text-sm sm:text-base"
                  >
                    Why do you want to franchise with HelloWash?
                  </Label>
                  <Textarea
                    id="why"
                    rows={4}
                    placeholder="Share your motivation and vision..."
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Submit Application
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
                </Button>

                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  We'll review your application and contact you
                  within 3-5 business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs sm:text-sm">
            🎯 Ready to Start?
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-white/90 max-w-2xl mx-auto">
            Contact our franchise team today to learn more about
            this exciting opportunity and download our
            comprehensive franchise kit.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
              <div className="flex sm:block items-start gap-2 sm:gap-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-2 md:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0 text-left sm:text-center">
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    Franchise Kit
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80">
                    Detailed business plan & financials
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
              <div className="flex sm:block items-start gap-2 sm:gap-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-2 md:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0 text-left sm:text-center">
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    Free Consultation
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80">
                    Meet with our franchise team
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
              <div className="flex sm:block items-start gap-2 sm:gap-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center sm:mx-auto mb-0 sm:mb-2 md:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0 text-left sm:text-center">
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    24/7 Support
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80">
                    Dedicated franchise advisor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              Download Franchise Kit
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              onClick={() => onNavigate("contact")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
