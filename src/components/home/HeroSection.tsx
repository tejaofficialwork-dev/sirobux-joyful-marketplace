import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="gradient-hero py-16 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Top Up Terpercaya #1 di Indonesia
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Top Up{" "}
              <span className="text-gradient">Robux & Gamepass</span>{" "}
              Termurah dan Terpercaya
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Nikmati pengalaman gaming Roblox terbaik dengan harga paling bersahabat. Proses cepat, aman, dan bergaransi 100%!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/top-up-robux">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Top Up Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">100% Aman</p>
                  <p className="text-xs text-muted-foreground">Transaksi Terjamin</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-info" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Proses Cepat</p>
                  <p className="text-xs text-muted-foreground">Maksimal 5 Menit</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">50K+ User</p>
                  <p className="text-xs text-muted-foreground">Pelanggan Puas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Main Card */}
              <div className="relative bg-card rounded-3xl p-8 card-elevated border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">R</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">Robux</p>
                    <p className="text-muted-foreground">Top Up Sekarang!</p>
                  </div>
                </div>
                
                {/* Floating Price Tag */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-bold shadow-button animate-pulse">
                  Mulai Rp 5.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
