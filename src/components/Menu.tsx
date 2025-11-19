import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import steakImage from "@/assets/menu-steak.jpg";
import salmonImage from "@/assets/menu-salmon.jpg";
import pastaImage from "@/assets/menu-pasta.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";

type Category = "All" | "Starters" | "Mains" | "Desserts";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const menuItems: MenuItem[] = [
    {
      name: "Caesar Salad",
      description: "Fresh romaine, parmesan, garlic croutons, classic dressing",
      price: "$14",
      category: "Starters",
      image: pastaImage,
    },
    {
      name: "French Onion Soup",
      description: "Caramelized onions, gruyere cheese, herb croutons",
      price: "$12",
      category: "Starters",
      image: pastaImage,
    },
    {
      name: "Grilled Ribeye Steak",
      description: "Prime 16oz ribeye, herb butter, seasonal vegetables",
      price: "$48",
      category: "Mains",
      image: steakImage,
    },
    {
      name: "Atlantic Salmon",
      description: "Pan-seared salmon, lemon butter sauce, asparagus",
      price: "$36",
      category: "Mains",
      image: salmonImage,
    },
    {
      name: "Truffle Pasta",
      description: "Fresh pasta, black truffle, parmesan cream sauce",
      price: "$32",
      category: "Mains",
      image: pastaImage,
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake, vanilla ice cream, berry compote",
      price: "$12",
      category: "Desserts",
      image: dessertImage,
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla custard, caramelized sugar, fresh berries",
      price: "$10",
      category: "Desserts",
      image: dessertImage,
    },
  ];

  const categories: Category[] = ["All", "Starters", "Mains", "Desserts"];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary masterpieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`${
                activeCategory === category
                  ? "bg-primary hover:bg-accent"
                  : "hover:bg-primary/10"
              } transition-smooth`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-gold font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
