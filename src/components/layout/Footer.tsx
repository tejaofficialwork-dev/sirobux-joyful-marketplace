import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Top Up Robux", href: "/top-up-robux" },
    { label: "Gamepass Roblox", href: "/gamepass-roblox" },
    { label: "Promo Terbaru", href: "/blog" },
  ],
  company: [
    { label: "Tentang Kami", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Kebijakan Refund", href: "/refund" },
  ],
};

const paymentMethods = [
  "DANA",
  "OVO",
  "GoPay",
  "QRIS",
  "BCA",
  "Mandiri",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">
                siro<span className="text-primary-glow">bux</span>
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Top Up Robux & Gamepass Termurah dan Terpercaya di Indonesia. Proses cepat, aman, dan terjamin!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:support@sirobux.id" className="flex items-center gap-3 text-background/70 hover:text-primary-glow transition-colors">
                <Mail className="h-4 w-4" />
                support@sirobux.id
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-background/70 hover:text-primary-glow transition-colors">
                <Phone className="h-4 w-4" />
                +62 812-3456-7890
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4" />
                Jakarta, Indonesia
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produk</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary-glow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary-glow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary-glow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50 mb-4">Metode Pembayaran yang Didukung:</p>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-4 py-2 bg-background/10 rounded-lg text-sm font-medium"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 sirobux. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Made with ❤️ in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
