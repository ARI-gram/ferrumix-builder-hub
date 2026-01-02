import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tools.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient text-secondary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              #1 Hardware Store in Nairobi CBD
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strong Tools.
              <span className="text-gradient block">Smart Builds.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Quality hardware supplies for every project. From cement to power tools,
              we've got everything you need to build your dreams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="gradient-primary button-shadow text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Quality Guaranteed</p>
                  <p className="text-xs text-muted-foreground">Trusted brands only</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Within Nairobi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Expert Advice</p>
                  <p className="text-xs text-muted-foreground">Professional guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <img
                  src={heroImage}
                  alt="Professional hardware tools - drills, hammers, and wrenches"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-xl blur-xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-border">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground">Products Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
