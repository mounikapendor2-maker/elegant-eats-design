import { Award, ChefHat, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-gold" />,
      title: "Expert Chefs",
      description: "Our Michelin-trained chefs bring decades of culinary excellence to every dish.",
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Fresh Ingredients",
      description: "We source only the finest local and seasonal ingredients for peak flavor.",
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Award Winning",
      description: "Recognized globally for our exceptional cuisine and impeccable service.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Since 1985, Savoria has been crafting unforgettable dining experiences that blend tradition with innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-foreground leading-relaxed">
              At Savoria, we believe that dining is an art form. Every dish tells a story, every ingredient is carefully selected, and every meal is an opportunity to create lasting memories. Our passion for culinary excellence has driven us for nearly four decades.
            </p>
            <p className="text-foreground leading-relaxed">
              From our humble beginnings as a small family restaurant to becoming one of the city's most celebrated fine dining destinations, we've remained true to our commitment: to serve exceptional food with genuine warmth and hospitality.
            </p>
            <p className="text-foreground leading-relaxed">
              Join us on a culinary journey where tradition meets innovation, and every visit feels like coming home to something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-lg shadow-elegant hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
