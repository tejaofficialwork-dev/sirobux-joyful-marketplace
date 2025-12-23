import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Tips Hemat Top Up Robux untuk Pemula",
    excerpt: "Pelajari cara-cara cerdas untuk menghemat pengeluaran saat top up Robux. Dapatkan lebih banyak Robux dengan budget yang sama!",
    category: "Tips & Tricks",
    author: "Admin sirobux",
    date: "20 Des 2024",
    readTime: "5 menit",
    image: "💰",
  },
  {
    id: 2,
    title: "Game Roblox Terpopuler di Indonesia 2024",
    excerpt: "Cek daftar game Roblox yang paling banyak dimainkan oleh gamer Indonesia. Mana yang jadi favoritmu?",
    category: "Gaming",
    author: "Admin sirobux",
    date: "18 Des 2024",
    readTime: "7 menit",
    image: "🎮",
  },
  {
    id: 3,
    title: "Panduan Lengkap Gamepass Blox Fruits",
    excerpt: "Mau jadi pro player Blox Fruits? Simak panduan lengkap Gamepass yang wajib kamu punya untuk meningkatkan gameplay-mu!",
    category: "Panduan",
    author: "Admin sirobux",
    date: "15 Des 2024",
    readTime: "10 menit",
    image: "🏴‍☠️",
  },
  {
    id: 4,
    title: "Promo Akhir Tahun: Diskon 10% untuk Semua Produk!",
    excerpt: "Jangan lewatkan promo spesial akhir tahun dari sirobux! Nikmati diskon 10% untuk semua pembelian Robux dan Gamepass.",
    category: "Promo",
    author: "Admin sirobux",
    date: "10 Des 2024",
    readTime: "3 menit",
    image: "🎉",
  },
  {
    id: 5,
    title: "Cara Mengamankan Akun Roblox dari Hacker",
    excerpt: "Keamanan akun adalah prioritas! Pelajari langkah-langkah penting untuk melindungi akun Roblox-mu dari ancaman hacker.",
    category: "Keamanan",
    author: "Admin sirobux",
    date: "5 Des 2024",
    readTime: "6 menit",
    image: "🔒",
  },
  {
    id: 6,
    title: "Update Terbaru Roblox: Fitur Baru yang Wajib Kamu Ketahui",
    excerpt: "Roblox terus berkembang dengan fitur-fitur baru yang menarik. Simak update terbaru yang akan mengubah cara bermainmu!",
    category: "Update",
    author: "Admin sirobux",
    date: "1 Des 2024",
    readTime: "8 menit",
    image: "🆕",
  },
];

const categories = ["Semua", "Tips & Tricks", "Gaming", "Panduan", "Promo", "Keamanan", "Update"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Blog <span className="text-gradient">sirobux</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, panduan, dan info terbaru seputar Roblox dan gaming
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl border border-border overflow-hidden card-elevated group"
              >
                {/* Image/Emoji Header */}
                <div className="h-40 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">
                    {post.image}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 lg:py-16 bg-background-secondary">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe untuk mendapatkan tips, promo, dan info gaming terbaru langsung ke email kamu
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email kamu..."
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}