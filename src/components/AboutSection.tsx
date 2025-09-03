import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Who We Are */}
            <div className="space-y-8">
              <Card className="shadow-soft border-border/50 hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Who We Are</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Khalif Logistics, we believe deliveries should be simple, fast, and worry-free. 
                    That's why we built a modern logistics company designed to handle today's delivery 
                    challenges with professionalism and reliability.
                  </p>
                  <p className="text-foreground font-medium">
                    Every parcel matters to us — because behind every delivery, there's a person, 
                    a business, and a story that counts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-border/50 hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-foreground leading-relaxed">
                    To keep people and businesses connected through fast, secure, and affordable logistics services.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Our Values */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-smooth">
                  <div className="text-3xl">💨</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Speed</h4>
                    <p className="text-muted-foreground">Delivering right on time, every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-smooth">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Trust</h4>
                    <p className="text-muted-foreground">Safe hands for your goods.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-smooth">
                  <div className="text-3xl">💛</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Service</h4>
                    <p className="text-muted-foreground">Putting our customers first, always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;