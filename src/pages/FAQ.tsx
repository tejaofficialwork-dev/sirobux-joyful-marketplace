import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    title: "Umum",
    faqs: [
      {
        question: "Apa itu sirobux?",
        answer: "sirobux adalah platform top up Robux dan Gamepass Roblox terpercaya di Indonesia. Kami menyediakan layanan dengan harga termurah dan proses tercepat.",
      },
      {
        question: "Apakah sirobux resmi dan aman?",
        answer: "Ya, sirobux 100% aman dan terpercaya. Kami telah melayani lebih dari 50.000 pelanggan dengan tingkat kepuasan 99%. Semua transaksi dijamin aman.",
      },
      {
        question: "Bagaimana cara menghubungi customer service?",
        answer: "Anda dapat menghubungi kami melalui WhatsApp di +62 812-3456-7890 atau email support@sirobux.id. Tim kami siap membantu 24/7.",
      },
    ],
  },
  {
    title: "Top Up Robux",
    faqs: [
      {
        question: "Berapa lama proses top up Robux?",
        answer: "Proses top up biasanya memakan waktu 1-5 menit setelah pembayaran dikonfirmasi. Pada jam sibuk, mungkin membutuhkan waktu hingga 15 menit.",
      },
      {
        question: "Apakah saya perlu memberikan password akun Roblox?",
        answer: "TIDAK! Kami tidak pernah meminta password akun Roblox Anda. Kami hanya membutuhkan username untuk proses top up.",
      },
      {
        question: "Metode pembayaran apa yang tersedia?",
        answer: "Kami menerima DANA, OVO, GoPay, QRIS, transfer bank (BCA, Mandiri, BNI, BRI), dan pulsa (Telkomsel, XL, Indosat).",
      },
      {
        question: "Apakah ada minimal pembelian?",
        answer: "Minimal pembelian adalah 100 Robux dengan harga mulai dari Rp 5.000.",
      },
    ],
  },
  {
    title: "Gamepass",
    faqs: [
      {
        question: "Apa itu Gamepass Roblox?",
        answer: "Gamepass adalah item premium yang memberikan fitur atau kemampuan khusus dalam game Roblox tertentu, seperti 2x EXP, VIP access, dan lainnya.",
      },
      {
        question: "Bagaimana cara membeli Gamepass?",
        answer: "Hubungi customer service kami dengan menyebutkan nama game dan Gamepass yang diinginkan. Kami akan memberikan harga dan proses pembelian.",
      },
      {
        question: "Apakah semua game tersedia Gamepassnya?",
        answer: "Sebagian besar game populer tersedia. Jika Anda tidak menemukan game yang dicari, silakan hubungi kami untuk request khusus.",
      },
    ],
  },
  {
    title: "Pembayaran & Refund",
    faqs: [
      {
        question: "Bagaimana jika pembayaran sudah berhasil tapi Robux tidak masuk?",
        answer: "Hubungi customer service kami segera dengan bukti pembayaran. Kami akan memproses ulang atau melakukan refund penuh dalam 1x24 jam.",
      },
      {
        question: "Apakah bisa refund jika sudah berhasil?",
        answer: "Untuk transaksi yang sudah berhasil dan Robux sudah masuk ke akun, tidak dapat dilakukan refund. Pastikan data yang dimasukkan sudah benar sebelum melakukan pembayaran.",
      },
      {
        question: "Berapa lama proses refund?",
        answer: "Proses refund membutuhkan waktu 1-3 hari kerja tergantung metode pembayaran yang digunakan.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              Pusat Bantuan
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan sirobux
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemId);
                    return (
                      <div
                        key={faqIndex}
                        className="bg-card rounded-xl border border-border overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-muted-foreground animate-fade-up">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-background-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-muted-foreground mb-6">
              Tim customer service kami siap membantu 24/7. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Hubungi via WhatsApp
                </Button>
              </a>
              <a href="mailto:support@sirobux.id">
                <Button variant="hero-outline" size="lg">
                  Kirim Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}