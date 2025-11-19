import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users } from "lucide-react";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Received!",
      description: "We'll confirm your booking shortly via email.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Reserve Your Table
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your dining experience and let us create an unforgettable evening for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-elegant animate-fade-in">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-muted-foreground">Monday - Friday: 5:00 PM - 11:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-elegant animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Reservation Policy
                    </h3>
                    <p className="text-muted-foreground">
                      Reservations are recommended. Walk-ins are welcome based on availability.
                      Please call us for same-day bookings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-elegant animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Private Events
                    </h3>
                    <p className="text-muted-foreground">
                      Looking to host a special occasion? Contact us for private dining room
                      availability and customized menus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-elegant animate-fade-in">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    placeholder="2"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Requests (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any dietary restrictions, allergies, or special occasions?"
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-accent text-gold-foreground font-semibold"
                  size="lg"
                >
                  Confirm Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
