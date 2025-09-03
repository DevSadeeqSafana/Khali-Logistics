import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Building2, ShoppingBag, Package } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-accent" />,
      emoji: "🚀",
      title: "Same-Day Delivery",
      description: "Swift within the city.",
      details: "Get your packages delivered within hours across Abuja and surrounding areas."
    },
    {
      icon: <MapPin className="h-12 w-12 text-accent" />,
      emoji: "🛣️",
      title: "Interstate Transport",
      description: "Secure trips across Nigeria.",
      details: "Reliable delivery services connecting major cities across Nigeria with tracking."
    },
    {
      icon: <Building2 className="h-12 w-12 text-accent" />,
      emoji: "🏢",
      title: "Business Logistics",
      description: "Custom solutions for companies.",
      details: "Tailored logistics solutions to streamline your business operations and supply chain."
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-accent" />,
      emoji: "🛒",
      title: "E-commerce Support",
      description: "Helping online stores reach happy customers.",
      details: "Complete fulfillment solutions for online businesses, from pickup to delivery."
    },
    {
      icon: <Package className="h-12 w-12 text-accent" />,
      emoji: "📦",
      title: "Bulk & Contract Deliveries",
      description: "Affordable and reliable packages for businesses.",
      details: "Volume discounts and contract rates for businesses with regular shipping needs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your delivery needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group shadow-soft hover:shadow-medium transition-spring border-border/50 hover:border-accent/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-smooth">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-4xl mb-2">{service.emoji}</div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-accent font-semibold mb-3">{service.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your logistics needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;