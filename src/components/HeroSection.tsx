import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2348166650142", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+2348166650142", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Khalif Logistics delivery truck on highway"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6 animate-slide-up">
            <span className="text-accent font-semibold">✨ Swift. Reliable. Affordable.</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Welcome to{" "}
            <span className="text-accent">Khalif Logistics</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Where every delivery is handled with <strong>speed</strong>, <strong>care</strong>, and <strong>trust</strong>
          </p>
          
          <p className="text-lg mb-8 text-primary-foreground/80 animate-slide-up">
            Whether it's a document, package, or bulk goods, we go the extra mile to make sure your items arrive on time, safe, and stress-free.
          </p>
          
          {/* Value Prop */}
          <div className="flex items-center justify-center gap-2 mb-10 animate-slide-up">
            <span className="text-2xl">💡</span>
            <span className="text-xl font-semibold text-accent">Your goods, our priority.</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button 
              variant="accent" 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-accent text-lg px-8 py-6 transition-spring"
            >
              👉 Request a Quote Today
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWhatsApp}
                className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/50 transition-smooth"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleCall}
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/50 transition-smooth"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Element */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;