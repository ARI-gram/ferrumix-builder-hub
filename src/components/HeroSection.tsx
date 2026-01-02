import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  desc: string;
}
const heroImages = [
  "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=715&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1575493438282-4e0fb32d1bdd?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1678812165116-20ad080a9baf?q=80&w=765&auto=format&fit=crop",
  "https://media.istockphoto.com/id/2213592275/photo/construction-nails-nails-for-construction.jpg?s=1024x1024&w=is&k=20&c=ZAjBLC46VdLlkOuC57xKgfFN1GY4MRBpAtiKobX7oiI=",
  "https://plus.unsplash.com/premium_photo-1681589434478-b3122f353b44?w=600&auto=format&fit=crop&q=60",
  "https://www.randtech.co.ke/wp-content/uploads/2021/03/gyproc-filler.jpg",
];

const HeroSection = () => {
  return (
    <section className="relative hero-gradient text-secondary-foreground overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              #1 Hardware Store in Nairobi CBD
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strong Tools.
              <span className="text-gradient block">Smart Builds.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Quality hardware supplies for every project — cement, gypsum boards,
              nails, tools, and professional building materials.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="gradient-primary button-shadow text-lg font-semibold"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted-foreground/30 text-secondary-foreground text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-12">
              <Feature icon={<Shield />} title="Quality Guaranteed" desc="Trusted brands only" />
              <Feature icon={<Truck />} title="Fast Delivery" desc="Within Nairobi" />
              <Feature icon={<Hammer />} title="Expert Advice" desc="Professional guidance" />
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="relative hidden lg:grid grid-cols-4 grid-rows-4 gap-3 h-[440px] animate-fade-in">
            <GridImage src={heroImages[0]} className="col-span-2 row-span-2" />
            <GridImage src={heroImages[1]} className="col-span-1 row-span-2" />
            <GridImage src={heroImages[2]} className="col-span-1 row-span-1" />
            <GridImage src={heroImages[3]} className="col-span-2 row-span-1" />
            <GridImage src={heroImages[4]} className="col-span-1 row-span-1" />
            <GridImage src={heroImages[5]} className="col-span-1 row-span-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }: FeatureProps) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const GridImage = ({ src, className }: { src: string; className: string }) => (
  <div
    className={`rounded-xl overflow-hidden border border-border/20 shadow-lg ${className}`}
  >
    <img
      src={src}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
  </div>
);

export default HeroSection;
