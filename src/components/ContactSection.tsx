import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2348166650142", "_blank");
  };

  const handleCall = (number: string) => {
    window.open(`tel:+234${number.slice(1)}`, "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:khaliflogistics2025@gmail.com", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to ship? Get in touch with our friendly team for fast, reliable service.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    Office Location
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium mb-2">📍 Suite B2 Amaden Plaza, Plot no1335, Mabuji Abuja, Nigeria</p>
                  <p className="text-muted-foreground">
                    Strategically located in Nigeria's capital for optimal nationwide coverage
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" />
                    Phone Numbers
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">📞 08166650142</span>
                    <Button variant="outline" size="sm" onClick={() => handleCall("08166650142")}>
                      Call
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">📞 08037497965</span>
                    <Button variant="outline" size="sm" onClick={() => handleCall("08037497965")}>
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <Clock className="h-6 w-6 text-accent" />
                    Business Hours
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong className="text-foreground">Saturday:</strong> 9:00 AM - 4:00 PM</p>
                    <p><strong className="text-foreground">Sunday:</strong> Emergency services only</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Quick Contact Actions */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
              
              <div className="space-y-4">
                <Card className="group shadow-soft hover:shadow-medium transition-spring border-border/50 hover:border-success/30">
                  <CardContent className="p-6">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleWhatsApp}
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-success/10 hover:border-success/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-success/10 rounded-full group-hover:bg-success/20 transition-smooth">
                          <MessageCircle className="h-6 w-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground">🟢 WhatsApp Chat</h4>
                          <p className="text-muted-foreground">Instant responses and real-time tracking</p>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-soft hover:shadow-medium transition-spring border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => handleCall("08166650142")}
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground">📞 Call Now</h4>
                          <p className="text-muted-foreground">Speak directly with our team</p>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-soft hover:shadow-medium transition-spring border-border/50 hover:border-accent/30">
                  <CardContent className="p-6">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleEmail}
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-accent/10 hover:border-accent/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-smooth">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground">✉️ Send Email</h4>
                          <p className="text-muted-foreground">Detailed inquiries and quotes</p>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-warning/10 border border-warning/30 rounded-xl">
                <h4 className="font-bold text-warning mb-2">🚨 Emergency Deliveries</h4>
                <p className="text-muted-foreground text-sm">
                  For urgent deliveries outside business hours, call our emergency line and we'll do our best to accommodate your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;