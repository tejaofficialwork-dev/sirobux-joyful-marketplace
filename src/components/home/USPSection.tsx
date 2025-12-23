import { Shield, Zap, HeadphonesIcon, Wallet, Clock, Award } from "lucide-react";

const usps = [
  {
    icon: Wallet,
    title: "Harga Termurah",
    description: "Harga paling kompetitif di Indonesia dengan garansi harga terbaik",
  },
  {
    icon: Zap,
    title: "Proses Instan",
    description: "Transaksi diproses dalam hitungan menit, maksimal 5 menit saja",
  },
  {
    icon: Shield,
    title: "100% Aman",
    description: "Transaksi dijamin aman dengan sistem keamanan terpercaya",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description: "Tim customer service siap membantu kapanpun kamu butuh",
  },
  {
    icon: Clock,
    title: "Buka 24 Jam",
    description: "Layanan tersedia 24 jam sehari, 7 hari seminggu",
  },
  {
    icon: Award,
    title: "Terpercaya",
    description: "Dipercaya oleh lebih dari 50.000 gamer di seluruh Indonesia",
  },
];

export function USPSection() {
  return (
    <section className="py-16 lg:py-24 bg-background-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kenapa Pilih <span className="text-gradient">sirobux</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik untuk para gamer Indonesia
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
