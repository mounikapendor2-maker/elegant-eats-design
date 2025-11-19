import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: "Address",
      details: ["123 Gourmet Street", "Downtown District", "New York, NY 10001"],
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Reservations: +1 (555) 987-6543"],
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: "Email",
      details: ["info@savoria.com", "reservations@savoria.com"],
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "Hours",
      details: ["Mon-Fri: 5:00 PM - 11:00 PM", "Sat-Sun: 12:00 PM - 11:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We look forward to welcoming you to Savoria
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 shadow-elegant hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{info.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="overflow-hidden shadow-elegant h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830921454!2d-74.11976383964463!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
