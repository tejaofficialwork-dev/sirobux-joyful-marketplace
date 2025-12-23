import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, Star, Users, Trophy, MessageCircle } from "lucide-react";

const gamepassCategories = [
  {
    id: 1,
    title: "Blox Fruits",
    description: "Gamepass populer untuk game petualangan bajak laut",
    image: "🏴‍☠️",
    gamepasses: ["2x EXP", "Fruit Storage", "2x Money", "2x Mastery"],
  },
  {
    id: 2,
    title: "Adopt Me",
    description: "Upgrade pengalaman bermain dengan gamepass spesial",
    image: "🐾",
    gamepasses: ["VIP", "Premium Plot", "2x Bucks", "Flying Potion"],
  },
  {
    id: 3,
    title: "Brookhaven",
    description: "Gamepass untuk roleplay dan rumah impian",
    image: "🏠",
    gamepasses: ["Premium Pass", "Special Vehicles", "VIP House"],
  },
  {
    id: 4,
    title: "Murder Mystery 2",
    description: "Unlock senjata dan fitur eksklusif",
    image: "🔪",
    gamepasses: ["Radio", "Knife", "2x Coins"],
  },
];

export default function GamepassRoblox() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gamepad2 className="h-4 w-4" />
              Berbagai Game Tersedia
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Beli <span className="text-gradient">Gamepass Roblox</span> dengan Mudah
            </h1>
            <p className="text-lg text-muted-foreground">
              Tingkatkan pengalaman bermainmu dengan Gamepass premium. Harga bersaing, proses cepat!
            </p>
          </div>
        </div>
      </section>

      {/* How Gamepass Works */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Apa itu Gamepass?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Gamepass adalah item premium yang memberikan fitur atau kemampuan khusus dalam game Roblox tertentu. Dengan Gamepass, kamu bisa menikmati pengalaman bermain yang lebih seru!
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Star, title: "Fitur Eksklusif", desc: "Akses fitur yang tidak tersedia untuk pemain biasa" },
                { icon: Trophy, title: "Keuntungan Game", desc: "Dapatkan boost dan keuntungan dalam game" },
                { icon: Users, title: "Pengalaman Premium", desc: "Nikmati game dengan pengalaman terbaik" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-2xl border border-border">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-12 lg:py-16 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Game Populer
            </h2>
            <p className="text-muted-foreground">Pilih game favoritmu dan lihat gamepass yang tersedia</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gamepassCategories.map((category) => (
              <div
                key={category.id}
                className="bg-card rounded-2xl p-6 border border-border card-elevated hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{category.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.gamepasses.map((gp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {gp}
                    </span>
                  ))}
                </div>

                <Button variant="cta" className="w-full">
                  Lihat Gamepass
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tidak Menemukan Game yang Kamu Cari?
            </h2>
            <p className="text-muted-foreground mb-6">
              Hubungi kami dan beritahu gamepass apa yang kamu butuhkan. Kami akan membantu mendapatkannya untukmu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Hubungi via WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}