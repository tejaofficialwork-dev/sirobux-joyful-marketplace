import { Link } from "react-router-dom";
import { ArrowRight, Coins, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "robux",
    title: "Top Up Robux",
    description: "Dapatkan Robux untuk membeli item eksklusif, aksesoris, dan fitur premium di Roblox.",
    icon: Coins,
    href: "/top-up-robux",
    color: "primary",
    features: ["Harga Termurah", "Proses 1-5 Menit", "Garansi 100%"],
    price: "Mulai Rp 5.000",
  },
  {
    id: "gamepass",
    title: "Gamepass Roblox",
    description: "Beli Gamepass untuk game favoritmu dan nikmati fitur-fitur spesial yang tidak tersedia untuk pemain biasa.",
    icon: Gamepad2,
    href: "/gamepass-roblox",
    color: "accent",
    features: ["Berbagai Game", "Harga Bersaing", "Support 24/7"],
    price: "Harga Variatif",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilih <span className="text-gradient">Produk</span> Kamu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai produk Roblox dengan harga terjangkau dan pelayanan terbaik
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-card rounded-2xl p-8 border border-border card-elevated hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  product.color === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary text-lg">
                    {product.price}
                  </span>
                  <Link to={product.href}>
                    <Button variant="cta" className="group-hover:scale-105 transition-transform">
                      Lihat Detail
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
