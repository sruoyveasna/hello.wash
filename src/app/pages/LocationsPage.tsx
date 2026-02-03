import { MapPin, Search, Clock, CheckCircle2, Store, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

interface LocationsPageProps {
  onNavigate: (page: string) => void;
}

export function LocationsPage({ onNavigate }: LocationsPageProps) {
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
    },
    {
      name: "BKK1 Drop-off Point (Coming Soon)",
      address: "Street 308, BKK1, Phnom Penh",
      phone: "081 661 616",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Drop-off", "Express Service"],
    },
    {
      name: "Riverside Drop-off (Coming Soon)",
      address: "Sisowath Quay, Phnom Penh",
      phone: "081 661 616",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Drop-off"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Service Locations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We serve all major areas across Phnom Penh with convenient pickup
              & delivery
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Enter your address or area name..."
                    className="pl-10 h-14"
                  />
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-8">
            <div className="text-center">
              <MapPin className="w-20 h-20 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-500 font-semibold mb-2">
                Interactive Map
              </p>
              <p className="text-gray-400">
                Coverage areas and franchise locations
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Not sure if we serve your area?{" "}
              <button
                onClick={() => onNavigate("contact")}
                className="text-primary font-semibold hover:underline"
              >
                Contact us
              </button>{" "}
              to check availability
            </p>
          </div>
        </div>
      </section>

      {/* Service Zones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Coverage Zones
            </h2>
            <p className="text-xl text-gray-600">
              Free pickup & delivery in all listed areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{zone.name}</h3>
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {zone.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">{zone.pickup} pickup</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit our drop-off points or schedule pickup & delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {franchiseLocations.map((location, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Store className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                      {location.name.includes("Coming Soon") && (
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                          Opening Soon
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{location.address}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-primary hover:underline"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{location.hours}</span>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-3">
                        Available Services:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Store className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            We're Expanding Across Phnom Penh
          </h2>
          <p className="text-xl mb-8 text-white/90">
            New franchise locations opening soon! Interested in bringing
            HelloWash to your area?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => onNavigate("franchise")}
            >
              Become a Franchise Partner
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
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
