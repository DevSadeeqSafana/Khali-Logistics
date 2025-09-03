import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2348166650142", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+2348166650142", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@khaliflogistics.com", "_blank");
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-accent">Khalif Logistics</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Your trusted partner for fast, secure, and affordable logistics services across Nigeria. 
                Every delivery matters to us because behind every package, there's a story that counts.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleWhatsApp}
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCall}
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleEmail}
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent">Our Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>🚀 Same-Day Delivery</li>
                <li>🛣️ Interstate Transport</li>
                <li>🏢 Business Logistics</li>
                <li>🛒 E-commerce Support</li>
                <li>📦 Bulk Deliveries</li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent">Contact Info</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm">Abuja, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm">08166650142</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm">08037497965</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm">info@khaliflogistics.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/70 text-sm">
                © 2025 Khalif Logistics. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
                <span>💡 Your goods, our priority</span>
                <span>•</span>
                <span>✨ Swift. Reliable. Affordable.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;