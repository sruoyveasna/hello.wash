import {
  Building2,
  Hotel,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Package,
  ChevronRight,
  Sparkles,
  Phone,
  Star,
  TrendingDown,
  BarChart3,
  Headphones,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

interface BusinessPageProps {
  onNavigate: (page: string) => void;
}

export function BusinessPage({
  onNavigate,
}: BusinessPageProps) {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: Hotel,
      title: "Hotels & Resorts",
      description: "Linen, towels, bedding, and uniforms",
      benefits: [
        "Daily or scheduled pickups",
        "Fast turnaround times",
        "Consistent quality standards",
        "Volume-based pricing",
      ],
      color: "from-primary to-primary/80",
      image:
        "https://media.istockphoto.com/id/1226557629/photo/maid-in-a-hotel-laundry-room.jpg?s=612x612&w=0&k=20&c=OOtkEk6kXUtrv9rGiKAPtB5wtYrUCnmAOlBohrBo_Sg=",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants & Cafes",
      description: "Uniforms, linens, tablecloths, aprons",
      benefits: [
        "Flexible pickup schedules",
        "Stain treatment specialists",
        "Same-day emergency service",
        "Dedicated account support",
      ],
      color: "from-secondary to-secondary/80",
      image:
        "https://www.laundrylite.com/public/web-assets/images/restaurant-laundry-services.jpg",
    },
    {
      icon: Dumbbell,
      title: "Spas, Gyms & Wellness",
      description: "Towels, robes, workout gear",
      benefits: [
        "High-volume capacity",
        "Hygienic processing",
        "Eco-friendly options",
        "Reliable daily service",
      ],
      color: "from-primary to-primary/80",
      image:
        "https://www.laundrylite.com/public/web-assets/images/spa-laundry.jpg",
    },
    {
      icon: Briefcase,
      title: "Corporate Offices",
      description: "Uniforms, cleaning cloths, towels",
      benefits: [
        "Professional service",
        "Scheduled pickups",
        "Employee uniform programs",
        "Cost-effective solutions",
      ],
      color: "from-secondary to-secondary/80",
      image:
        "https://blog.wearskypro.com/wp-content/uploads/2021/10/shutterstock_1985975276_2-1160x776.jpg",
    },
  ];

  const caseStudies = [
    {
      company: "Sofitel Phnom Penh",
      industry: "5-Star Hotel",
      volume: "500kg+ daily",
      result: "30% cost reduction",
      testimonial:
        "HelloWash has been instrumental in maintaining our luxury standards while reducing operational costs.",
      icon: Hotel,
      savings: "$3,200/month",
      color: "from-blue-500 to-blue-600",
    },
    {
      company: "Topaz Restaurant Group",
      industry: "Restaurant Chain",
      volume: "200kg weekly",
      result: "Same-day service",
      testimonial:
        "The emergency service has saved us multiple times during unexpected situations.",
      icon: UtensilsCrossed,
      savings: "$1,800/month",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      company: "Premier Fitness Centers",
      industry: "Gym Chain (3 Locations)",
      volume: "300kg daily",
      result: "100% satisfaction",
      testimonial:
        "Our members consistently praise the freshness and cleanliness of our towels.",
      icon: Dumbbell,
      savings: "$2,500/month",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const comparisonData = [
    {
      feature: "Initial Investment",
      inHouse: "$50,000 - $100,000",
      hellowash: "$0",
    },
    {
      feature: "Monthly Operating Cost",
      inHouse: "$5,000 - $8,000",
      hellowash: "$2,500 - $4,000",
    },
    {
      feature: "Staff Required",
      inHouse: "3-5 employees",
      hellowash: "0 employees",
    },
    {
      feature: "Equipment Maintenance",
      inHouse: "Your responsibility",
      hellowash: "Included",
    },
    {
      feature: "Quality Guarantee",
      inHouse: "Variable",
      hellowash: "100% guaranteed",
    },
    {
      feature: "Scalability",
      inHouse: "Limited",
      hellowash: "Unlimited",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Corporate Hero - Light Theme with Stats Overlay */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1752163663156-d1d154599c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNvbW1lcmNpYWwlMjBsYXVuZHJ5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMDI2Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px)",
              opacity: 0.3,
            }}
          ></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Badge */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 backdrop-blur-sm text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Enterprise Solutions
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Commercial Laundry
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                For Your Business
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by 50+ businesses across Phnom Penh.
              High-volume laundry solutions with guaranteed
              quality, reliability, and cost savings.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg px-6 sm:px-8"
            >
              Request Enterprise Quote
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xl transition-all duration-300 text-sm sm:text-base"
              onClick={() => onNavigate("contact")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Call Sales: 081 661 616
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Tabs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Industry Solutions
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Specialized Services by Industry
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored laundry solutions designed for your
              specific business needs
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                  activeIndustry === index
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                }`}
              >
                <industry.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">
                  {industry.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left: Image */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto">
                  <img
                    src={industries[activeIndustry].image}
                    alt={industries[activeIndustry].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div
                      className={`inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r ${industries[activeIndustry].color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-3 text-xs sm:text-sm md:text-base`}
                    >
                      {(() => {
                        const Icon =
                          industries[activeIndustry].icon;
                        return (
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        );
                      })()}
                      <span className="font-semibold">
                        {industries[activeIndustry].title}
                      </span>
                    </div>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      {industries[activeIndustry].description}
                    </p>
                  </div>
                </div>

                {/* Right: Benefits */}
                <div className="p-6 sm:p-8 lg:p-12 bg-slate-50">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What We Offer
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {industries[activeIndustry].benefits.map(
                      (benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-secondary"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            {benefit}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-gray-200">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg text-xs sm:text-sm md:text-base">
                      Get Custom Quote for{" "}
                      {industries[activeIndustry].title}
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm">
              <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Cost Analysis
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              In-House vs. HelloWash
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              See why outsourcing to HelloWash makes financial
              sense
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                        Feature
                      </th>
                      <th className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                        In-House Laundry
                      </th>
                      <th className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-primary to-secondary">
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">
                            HelloWash
                          </span>
                          <span className="sm:hidden">HW</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                        }
                      >
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-semibold text-gray-900 border-b border-gray-200 text-xs sm:text-sm md:text-base">
                          {row.feature}
                        </td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-center text-gray-600 border-b border-gray-200 text-xs sm:text-sm md:text-base">
                          {row.inHouse}
                        </td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-center font-bold text-secondary border-b border-gray-200 bg-secondary/5 text-xs sm:text-sm md:text-base">
                          {row.hellowash}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom Highlight */}
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 sm:p-5 md:p-6 border-t-2 border-secondary/20">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-900">
                    <span className="font-bold text-secondary">
                      Average savings: $3,000/month
                    </span>{" "}
                    when switching to HelloWash
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies - Testimonial Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Colored Header */}
                  <div
                    className={`bg-gradient-to-r ${study.color} text-white p-4 sm:p-5 md:p-6`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                        <study.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">
                          {study.company}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3 text-center">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
                        <div className="text-[10px] sm:text-xs text-gray-600 mb-1">
                          Volume
                        </div>
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">
                          {study.volume}
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2.5 sm:p-3 text-center">
                        <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mx-auto mb-1" />
                        <div className="text-[10px] sm:text-xs text-gray-600 mb-1">
                          Savings
                        </div>
                        <div className="font-bold text-green-600 text-xs sm:text-sm">
                          {study.savings}
                        </div>
                      </div>
                    </div>

                    {/* Result Badge */}
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4 text-center">
                      <div className="text-[10px] sm:text-xs text-gray-600 mb-1">
                        Result
                      </div>
                      <div className="font-bold text-secondary text-sm sm:text-base">
                        {study.result}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-xs sm:text-sm text-gray-600 italic leading-relaxed border-l-4 border-primary/20 pl-3 sm:pl-4">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Professional Dark Theme */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 sm:py-2">
            <Headphones className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Enterprise Support
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Optimize Your Laundry Operations?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7"
            >
              Schedule Consultation
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1.5 sm:ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7"
              onClick={() => onNavigate("contact")}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2" />
              081 661 616
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}