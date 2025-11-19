import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-brown text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Savoria</h3>
            <p className="text-primary-foreground/80 mb-4">
              Experience the finest culinary artistry in an atmosphere of unparalleled elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/80 hover:text-gold transition-smooth"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-warm-brown transition-smooth"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-warm-brown transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-warm-brown transition-smooth"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Monday - Friday: 5:00 PM - 11:00 PM<br />
              Saturday - Sunday: 12:00 PM - 11:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Savoria Restaurant. All rights reserved. | Crafted with passion for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
