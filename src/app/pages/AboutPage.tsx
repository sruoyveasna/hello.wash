import {
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  Shield,
  Clock,
  Heart,
  TrendingUp,
  Factory,
  CheckCircle2,
  Star,
  ChevronRight,
  Truck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [activeValue, setActiveValue] = useState(0);
  const [activeSustainability, setActiveSustainability] =
    useState(0);

  // Scroll animation state for timeline items
  const [visibleTimelineItems, setVisibleTimelineItems] =
    useState<Set<number>>(new Set());
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sustainabilityItems = [
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning Agents",
      description:
        "Biodegradable detergents and responsible wet cleaning technology",
      details:
        "We use only environmentally certified cleaning solutions that are safe for both your garments and the planet. Our wet cleaning process eliminates the need for harsh chemicals while delivering exceptional results.",
      color: "secondary",
      bgGradient: "from-secondary/10 to-secondary/5",
      hoverGradient: "from-secondary/15 to-secondary/10",
      borderColor: "border-secondary/20",
      hoverBorderColor: "border-secondary/30",
      image:
        "https://lh3.googleusercontent.com/proxy/TQ6WFTtqViDe_c9TMzCkQMb9q-s4F2GDIK_EqlTAJsAbFvoxu_U4BUu88mLff9MaE3T3rdxBbUP36Tl2mO8gDp-Ssx0xKBKPkIv2lq6LES3lODmBfKNwbAeRvRthX2JPrJqH3ZUuZO-r1Qq1SgZNn44VXA",
    },
    {
      icon: Factory,
      title: "Energy-Efficient Equipment",
      description:
        "Modern machines that minimize water and energy consumption",
      details:
        "Our state-of-the-art equipment is designed to reduce environmental impact. High-efficiency washers use 40% less water, and our dryers feature smart heat recovery systems that cut energy consumption in half.",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5",
      hoverGradient: "from-primary/15 to-primary/10",
      borderColor: "border-primary/20",
      hoverBorderColor: "border-primary/30",
      image:
        "https://images.unsplash.com/photo-1680447663176-1665064dff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwd2FzaGluZyUyMG1hY2hpbmUlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcwMDA4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Award,
      title: "Responsible Operations",
      description:
        "Proper waste management and continuous process improvement",
      details:
        "From recycling hangers to minimizing packaging waste, we're constantly finding new ways to reduce our environmental footprint. We track and optimize every aspect of our operations for sustainability.",
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5",
      hoverGradient: "from-accent/15 to-accent/10",
      borderColor: "border-accent/20",
      hoverBorderColor: "border-accent/30",
      image:
        "https://i.ytimg.com/vi/dEhUogM1Feo/maxresdefault.jpg",
    },
  ];

  // Auto-cycle sustainability features every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSustainability(
        (prev) => (prev + 1) % sustainabilityItems.length,
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [sustainabilityItems.length]);

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on quality. Every garment receives premium care and attention.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description:
        "Your satisfaction drives everything we do. We go the extra mile to exceed expectations.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Eco-friendly practices and sustainable solutions for a better Cambodia.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Users,
      title: "Team Excellence",
      description:
        "Investing in our people with training, fair wages, and growth opportunities.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Always innovating and improving our services, technology, and processes.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "On-time, every time. We understand the importance of keeping our promises.",
      color: "from-secondary to-secondary/80",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Happy Customers" },
    { number: "50,000+", label: "Items Cleaned Monthly" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4h-24h", label: "Typical Turnaround" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "HelloWash Founded",
      description:
        "Opened our first central processing facility on National Road 2 with a vision to modernize Cambodia's laundry industry.",
      image:
        "https://scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/475747989_540000555725787_1535567458793023201_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=xNyWyX1U5XkQ7kNvwHH8xOF&_nc_oc=AdlMSjPrlMs9SgvCY2s9gsZbYNElw_hnmZSH3TFzeJz26sAikmufHLA6hcesbmflq5E&_nc_zt=23&_nc_ht=scontent.fpnh18-1.fna&_nc_gid=z0cy3snOZbGieZoW03ZCEA&oh=00_Afvz28SsM1QzApA1805NmsooiTBZNZ3bxgk7-d-G1kycxQ&oe=69874733",
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description:
        "Expanded service coverage across Phnom Penh. Launched mobile app for seamless ordering and tracking.",
      image:
        "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAwMDY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      year: "2025",
      title: "Franchise Expansion",
      description:
        "Began franchise program to bring HelloWash to more neighborhoods. Opening multiple drop-off locations.",
      image:
        "https://images.unsplash.com/photo-1656478708498-040a33f3ec55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFuY2hpc2UlMjBidXNpbmVzcyUyMGV4cGFuc2lvbnxlbnwxfHx8fDE3NzAwMDY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      year: "Future",
      title: "National Expansion",
      description:
        "Plans to expand to Siem Reap, Sihanoukville, and other major cities across Cambodia.",
      image:
        "https://images.unsplash.com/photo-1715874690160-3bc8acfc2fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMENhbWJvZGlhJTIwUGhub20lMjBQZW5ofGVufDF8fHx8MTc3MDAwNjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Function to handle scroll animation for timeline items
  const handleScroll = () => {
    timelineRefs.current.forEach((item, index) => {
      if (item) {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleTimelineItems(
            (prev) => new Set([...prev, index]),
          );
        }
      }
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge
                className="mb-4 bg-accent/20 text-accent-foreground border-accent/30"
                style={{
                  animation: "fadeInDown 0.6s ease-out",
                }}
              >
                🏢 Our Story
              </Badge>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.2s backwards",
                }}
              >
                About HelloWash
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8"
                style={{
                  animation:
                    "fadeInUp 0.8s ease-out 0.4s backwards",
                }}
              >
                Cambodia's premium laundry and dry cleaning
                service, combining modern technology with
                old-fashioned quality and care.
              </p>

              {/* Mini stats - Glassmorphic style with staggered animation */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div
                  className="bg-white border-2 border-primary/20 rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    animation:
                      "scaleIn 0.6s ease-out 0.6s backwards",
                  }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    2023
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Founded
                  </div>
                </div>
                <div
                  className="bg-white border-2 border-secondary/20 rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    animation:
                      "scaleIn 0.6s ease-out 0.8s backwards",
                  }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-secondary">
                    5K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Customers
                  </div>
                </div>
                <div
                  className="bg-white border-2 border-accent/20 rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    animation:
                      "scaleIn 0.6s ease-out 1s backwards",
                  }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-accent">
                    #1
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    In Cambodia
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images - Photo Collage */}
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              style={{
                animation:
                  "fadeInRight 1s ease-out 0.6s backwards",
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative">
                  <img
                    src="https://img.lottehotel.com/cms/asset/2025/01/31/3023/240627-7-1440-fac-L7HND.webp"
                    alt="Modern Facility"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      Modern Equipment
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative">
                  <img
                    src="https://media.istockphoto.com/id/2158161980/photo/smiling-woman-receiving-clean-clothes-on-a-hanger-in-a-plastic-bag-from-a-delivery-man-at-the.jpg?s=612x612&w=0&k=20&c=N3tZ4-qvsmWkS1DwIr_Sh5V7JzgjvIzrPxdotIing-c="
                    alt="Delivery Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      Free Delivery
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative">
                  <img
                    src="https://www.shutterstock.com/image-photo/hospital-hygiene-workers-sorting-dirty-260nw-2568537823.jpg"
                    alt="Professional Team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      Expert Team
                    </p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative">
                  <img
                    src="https://kingspinlaundry.com/wp-content/uploads/2024/01/Is-Hotel-Laundry-Service-the-Key-to-Guest-Happiness.jpg"
                    alt="Happy Customers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              🎯 Mission & Vision
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  To make premium laundry and dry cleaning
                  services accessible to everyone in Cambodia
                  through technology, quality, and exceptional
                  customer service. We're building a modern
                  laundry infrastructure that saves people time
                  and delivers consistently excellent results.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  To become Cambodia's most trusted laundry
                  brand, known for innovation, quality, and
                  sustainability. We envision a future where
                  professional laundry care is the standard, not
                  the luxury, improving quality of life for
                  families and businesses nationwide.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              📖 Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  HelloWash was born from a simple observation:
                  Phnom Penh's busy professionals and families
                  deserved better laundry solutions. Traditional
                  laundry services were inconsistent, while
                  doing laundry at home consumed precious time
                  better spent with family or growing a
                  business.
                </p>
                <p>
                  We invested in building Cambodia's most modern
                  laundry processing facility, equipped with
                  state-of-the-art machines and eco-friendly
                  technologies. Our "hub-and-spoke" model
                  combines the efficiency of centralized
                  processing with the convenience of local
                  drop-off points and home pickup & delivery.
                </p>
                <p>
                  Today, we serve thousands of satisfied
                  customers across Phnom Penh, from busy
                  professionals to hotels and restaurants. Our
                  commitment to quality, sustainability, and
                  customer service has made us the
                  fastest-growing laundry service in Cambodia.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-4 rounded-r-xl">
                  <p className="font-semibold text-primary">
                    But we're just getting started. With plans
                    to expand nationwide and introduce new
                    services, we're building the future of
                    laundry in Cambodia.
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative group">
              <img
                src="https://i0.wp.com/kbcambodia.com/wp-content/uploads/2016/12/MODERN-LAUNDRY-2.jpg?fit=960%2C642&ssl=1"
                alt="Our facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              📊 Our Impact
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              HelloWash by the Numbers
            </h2>
            <p className="text-xl text-white/90">
              Growing fast, but never compromising on quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
              💎 Core Values
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${value.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-snug sm:leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              🚀 Growth Timeline
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to Cambodia's leading laundry service
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  timelineRefs.current[index] = el;
                }}
                className="flex gap-6"
                style={{
                  opacity: visibleTimelineItems.has(index)
                    ? 1
                    : 0,
                  transform: visibleTimelineItems.has(index)
                    ? "translateX(0) translateY(0)"
                    : index % 2 === 0
                      ? "translateX(-50px) translateY(20px)"
                      : "translateX(50px) translateY(20px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 text-lg"
                    style={{
                      opacity: visibleTimelineItems.has(index)
                        ? 1
                        : 0,
                      transform: visibleTimelineItems.has(index)
                        ? "scale(1)"
                        : "scale(0.5)",
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2 + 0.2}s`,
                    }}
                  >
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div
                      className="w-1 bg-gradient-to-b from-primary/50 to-transparent mt-2"
                      style={{
                        height: visibleTimelineItems.has(index)
                          ? "100%"
                          : "0%",
                        transition: `height 0.8s ease-out ${index * 0.2 + 0.4}s`,
                      }}
                    />
                  )}
                </div>
                <Card className="flex-1 mb-8 border-2 border-gray-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  {/* Timeline Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              🌱 Sustainability
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Commitment to eco-friendly practices in everything
              we do
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Dynamic Image Display */}
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group relative"
              key={activeSustainability}
              style={{ animation: "fadeIn 0.5s ease-in-out" }}
            >
              {/* Background Image */}
              <img
                src={
                  sustainabilityItems[activeSustainability]
                    .image
                }
                alt={
                  sustainabilityItems[activeSustainability]
                    .title
                }
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center z-10">
                {/* Icon Badge */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${
                    activeSustainability === 0
                      ? "from-secondary to-secondary/80"
                      : activeSustainability === 1
                        ? "from-primary to-primary/80"
                        : "from-accent to-accent/80"
                  } rounded-2xl flex items-center justify-center mb-4 shadow-2xl backdrop-blur-sm border-2 border-white/20`}
                  style={{
                    animation:
                      "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {(() => {
                    const Icon =
                      sustainabilityItems[activeSustainability]
                        .icon;
                    return (
                      <Icon className="w-10 h-10 text-white" />
                    );
                  })()}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{
                    animation:
                      "fadeInUp 0.6s ease-out 0.2s backwards",
                  }}
                >
                  {
                    sustainabilityItems[activeSustainability]
                      .title
                  }
                </h3>

                {/* Details */}
                <p
                  className="text-base text-white/90 max-w-md leading-relaxed"
                  style={{
                    animation:
                      "fadeInUp 0.6s ease-out 0.3s backwards",
                  }}
                >
                  {
                    sustainabilityItems[activeSustainability]
                      .details
                  }
                </p>
              </div>
            </div>

            {/* Right: Interactive Tab List */}
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe in doing business responsibly. Our
                commitment to sustainability goes beyond words -
                it's built into every aspect of our operations.
              </p>

              <div className="space-y-4">
                {sustainabilityItems.map((item, index) => {
                  const isActive =
                    index === activeSustainability;
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        setActiveSustainability(index)
                      }
                      className={`w-full text-left flex items-start space-x-3 bg-gradient-to-r ${
                        isActive
                          ? item.hoverGradient
                          : item.bgGradient
                      } p-5 rounded-xl transition-all duration-300 border ${
                        isActive
                          ? item.hoverBorderColor
                          : item.borderColor
                      } group cursor-pointer ${
                        isActive
                          ? "shadow-lg scale-[1.02] ring-2 ring-offset-2"
                          : "hover:shadow-md hover:scale-[1.01]"
                      } ${
                        isActive && item.color === "secondary"
                          ? "ring-secondary/40"
                          : isActive && item.color === "primary"
                            ? "ring-primary/40"
                            : isActive &&
                                item.color === "accent"
                              ? "ring-accent/40"
                              : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${
                          item.color === "secondary"
                            ? "from-secondary to-secondary/80"
                            : item.color === "primary"
                              ? "from-primary to-primary/80"
                              : "from-accent to-accent/80"
                        } rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isActive
                            ? "scale-110 rotate-3"
                            : "group-hover:scale-110 group-hover:rotate-3"
                        } transition-all duration-300 shadow-md`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.description}
                        </p>
                        {isActive && (
                          <p
                            className="text-gray-700 text-sm mt-3 pt-3 border-t border-gray-200/50"
                            style={{
                              animation:
                                "fadeInUp 0.4s ease-out",
                            }}
                          >
                            {item.details}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 flex items-center gap-2">
                {sustainabilityItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveSustainability(index)
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeSustainability
                        ? "w-12 bg-gradient-to-r from-primary to-secondary"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to ${sustainabilityItems[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            🚀 Get Started
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Experience the HelloWash difference. Schedule your
            first pickup today and discover why we're Cambodia's
            #1 laundry service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">
                Schedule Pickup Now
              </span>
              <ChevronRight className="w-5 h-5 ml-2 relative z-10" />
            </Button>
          </div>

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