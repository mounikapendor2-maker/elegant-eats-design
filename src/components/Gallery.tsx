import steakImage from "@/assets/menu-steak.jpg";
import salmonImage from "@/assets/menu-salmon.jpg";
import pastaImage from "@/assets/menu-pasta.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Restaurant Interior" },
    { src: steakImage, alt: "Grilled Steak" },
    { src: salmonImage, alt: "Salmon Dish" },
    { src: pastaImage, alt: "Pasta Special" },
    { src: dessertImage, alt: "Dessert Selection" },
    { src: heroImage, alt: "Dining Ambiance" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our culinary artistry and elegant ambiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-elegant hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
