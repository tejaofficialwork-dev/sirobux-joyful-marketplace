import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    role: "Gamer Roblox",
    content: "Proses top up sangat cepat! Robux langsung masuk dalam hitungan menit. Harga juga paling murah dibanding yang lain.",
    rating: 5,
    avatar: "R",
  },
  {
    id: 2,
    name: "Aulia Safitri",
    role: "Content Creator",
    content: "Sering beli gamepass di sini untuk review game. Pelayanannya ramah dan selalu responsif. Recommended banget!",
    rating: 5,
    avatar: "A",
  },
  {
    id: 3,
    name: "Dimas Kurniawan",
    role: "Pro Player",
    content: "Sudah langganan dari tahun lalu. Belum pernah ada masalah sama sekali. Admin fast response dan profesional.",
    rating: 5,
    avatar: "D",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    role: "Casual Gamer",
    content: "Pertama kali top up di sini dan langsung jadi pelanggan setia. Prosesnya gampang banget, tinggal bayar langsung masuk!",
    rating: 5,
    avatar: "S",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-gradient">Pelanggan</span> Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ribuan gamer sudah mempercayai sirobux untuk kebutuhan Roblox mereka
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 border border-border card-elevated group hover:border-primary/30 transition-all"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Quote className="h-5 w-5" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Pelanggan" },
            { value: "100K+", label: "Transaksi" },
            { value: "4.9/5", label: "Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
