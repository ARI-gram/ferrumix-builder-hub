import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />

        {/* CTA Section */}
        <section className="py-16 md:py-24 hero-gradient text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need Help With Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you find the right tools and materials.
              Visit us in Nairobi CBD or give us a call.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0798745632"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg gradient-primary button-shadow font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Call: 07-98-745-632
              </a>
              <a
                href="mailto:info@ferrumixhardware@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-muted-foreground/30 font-semibold text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
