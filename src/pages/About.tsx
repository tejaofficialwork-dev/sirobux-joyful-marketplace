import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, Heart, Sparkles } from "lucide-react";

const teamMembers = {
  leadership: [
    { name: "Ahmad Rizky", role: "Product Owner", avatar: "AR", description: "Visioner produk digital dan gaming" },
    { name: "Budi Santoso", role: "Project Manager", avatar: "BS", description: "Memastikan proyek berjalan lancar" },
  ],
  developers: [
    { name: "Citra Dewi", role: "Lead Developer", avatar: "CD", description: "Full-stack developer berpengalaman" },
    { name: "Dian Pratama", role: "Frontend Developer", avatar: "DP", description: "UI/UX enthusiast" },
    { name: "Eko Wahyudi", role: "Backend Developer", avatar: "EW", description: "Database & API specialist" },
    { name: "Fitri Handayani", role: "Mobile Developer", avatar: "FH", description: "Cross-platform developer" },
    { name: "Galih Permana", role: "DevOps Engineer", avatar: "GP", description: "Infrastructure & deployment" },
  ],
};

const values = [
  { icon: Heart, title: "Customer First", description: "Kepuasan pelanggan adalah prioritas utama kami" },
  { icon: Award, title: "Kualitas Terjamin", description: "Kami hanya menyediakan layanan berkualitas tinggi" },
  { icon: Sparkles, title: "Inovasi", description: "Terus berinovasi untuk pengalaman terbaik" },
  { icon: Users, title: "Komunitas", description: "Membangun komunitas gamer yang positif" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tentang <span className="text-gradient">sirobux</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Kami adalah platform top up Robux dan Gamepass terpercaya di Indonesia, 
              berkomitmen memberikan layanan terbaik untuk komunitas gamer Roblox.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Perjalanan Kami
                </h2>
                <p className="text-muted-foreground mb-4">
                  sirobux didirikan pada tahun 2023 dengan satu misi sederhana: memudahkan gamer Indonesia 
                  untuk mendapatkan Robux dan Gamepass dengan harga terjangkau.
                </p>
                <p className="text-muted-foreground mb-4">
                  Berawal dari kecintaan kami terhadap gaming, khususnya Roblox, kami memahami betapa 
                  pentingnya pengalaman bermain yang optimal. Itulah mengapa kami berkomitmen untuk 
                  menyediakan layanan yang cepat, aman, dan terpercaya.
                </p>
                <p className="text-muted-foreground">
                  Hingga saat ini, kami telah melayani lebih dari 50.000 pelanggan dengan lebih dari 
                  100.000 transaksi sukses.
                </p>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "50K+", label: "Pelanggan" },
                    { value: "100K+", label: "Transaksi" },
                    { value: "4.9", label: "Rating" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-20 bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
              <p className="text-muted-foreground">
                Menjadi platform top up Roblox terdepan dan terpercaya di Indonesia, 
                yang memberikan kemudahan akses bagi semua gamer untuk menikmati pengalaman 
                bermain yang maksimal.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Misi</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Menyediakan layanan top up dengan harga terjangkau
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Memberikan proses transaksi yang cepat dan aman
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Membangun komunitas gamer yang positif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tim Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Didukung oleh tim yang berdedikasi dan passionate dalam dunia gaming
            </p>
          </div>

          {/* Leadership */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Leadership</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {teamMembers.leadership.map((member, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center card-elevated">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Tim Perancang & Developer</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.developers.map((member, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center card-elevated">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.avatar}
                  </div>
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}