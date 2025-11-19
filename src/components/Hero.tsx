import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/90 via-warm-brown/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Experience Fine Dining
            <span className="block text-gold mt-2">Like Never Before</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Indulge in exquisite flavors crafted by our world-class chefs in an atmosphere of unparalleled elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToReservation}
              size="lg"
              className="bg-gold hover:bg-accent text-gold-foreground font-semibold shadow-elegant hover-lift"
            >
              Reserve Your Table
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={scrollToMenu}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-warm-brown font-semibold"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
