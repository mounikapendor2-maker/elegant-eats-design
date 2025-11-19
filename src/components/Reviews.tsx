import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely exceptional! The attention to detail in every dish was remarkable. The ambiance perfectly complemented the exquisite flavors.",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best dining experience in the city. The service was impeccable and the food was beyond words. The truffle pasta is a must-try!",
      date: "1 month ago",
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "Perfect for special occasions. The staff made our anniversary unforgettable. Every course was a work of art.",
      date: "3 weeks ago",
    },
    {
      name: "David Brown",
      rating: 5,
      text: "World-class cuisine with a warm, welcoming atmosphere. You can taste the quality in every bite. Highly recommended!",
      date: "1 week ago",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued guests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-8 shadow-elegant hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5.0</span>
            <span className="text-muted-foreground">based on 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
