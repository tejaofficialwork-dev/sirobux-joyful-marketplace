import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Coins, Shield, Zap, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const robuxPackages = [
  { id: 1, amount: 100, price: 5000, popular: false },
  { id: 2, amount: 200, price: 9500, popular: false },
  { id: 3, amount: 400, price: 18000, popular: true },
  { id: 4, amount: 800, price: 35000, popular: false },
  { id: 5, amount: 1000, price: 42000, popular: false },
  { id: 6, amount: 2200, price: 90000, popular: true },
  { id: 7, amount: 4500, price: 175000, popular: false },
  { id: 8, amount: 10000, price: 380000, popular: false },
];

const steps = [
  { step: 1, title: "Pilih Paket", description: "Pilih jumlah Robux yang kamu inginkan" },
  { step: 2, title: "Isi Data", description: "Masukkan username Roblox kamu" },
  { step: 3, title: "Bayar", description: "Pilih metode pembayaran dan selesaikan" },
  { step: 4, title: "Selesai", description: "Robux langsung masuk ke akunmu!" },
];

const faqs = [
  {
    question: "Berapa lama proses top up?",
    answer: "Proses top up biasanya memakan waktu 1-5 menit setelah pembayaran dikonfirmasi. Pada jam sibuk, mungkin membutuhkan waktu sedikit lebih lama.",
  },
  {
    question: "Apakah aman top up di sirobux?",
    answer: "Ya, 100% aman! Kami menggunakan metode resmi dan terjamin. Sudah dipercaya oleh lebih dari 50.000 pelanggan di Indonesia.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran seperti DANA, OVO, GoPay, QRIS, transfer bank (BCA, Mandiri, BNI, BRI), dan pulsa.",
  },
  {
    question: "Bagaimana jika Robux tidak masuk?",
    answer: "Hubungi customer service kami segera. Kami akan membantu menyelesaikan masalah atau melakukan refund penuh jika diperlukan.",
  },
];

export default function TopUpRobux() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Coins className="h-4 w-4" />
              Harga Termurah di Indonesia
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Top Up <span className="text-gradient">Robux</span> Murah & Cepat
            </h1>
            <p className="text-lg text-muted-foreground">
              Dapatkan Robux dengan harga terbaik dan proses instan. Tanpa ribet, langsung masuk ke akunmu!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Pilih Paket Robux
            </h2>
            <p className="text-muted-foreground">Semua harga sudah termasuk biaya admin</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
            {robuxPackages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedPackage === pkg.id
                    ? "border-primary bg-primary/5 shadow-card-hover"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Populer
                  </span>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{pkg.amount}</span>
                </div>
                <p className="text-lg font-semibold text-primary">
                  Rp {formatPrice(pkg.price)}
                </p>
                {selectedPackage === pkg.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link to={selectedPackage ? "/checkout" : "#"}>
              <Button
                variant="hero"
                size="xl"
                disabled={!selectedPackage}
                className="min-w-[200px]"
              >
                Lanjutkan Pembelian
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-background-secondary">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, title: "100% Aman", desc: "Garansi uang kembali" },
              { icon: Zap, title: "Proses Cepat", desc: "Maks. 5 menit" },
              { icon: Clock, title: "24/7 Support", desc: "Selalu siap membantu" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Cara Top Up
            </h2>
            <p className="text-muted-foreground">Proses mudah dan cepat</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}