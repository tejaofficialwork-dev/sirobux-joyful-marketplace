import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Promo Spesial Hari Ini
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Siap Top Up Robux?
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Jangan sampai ketinggalan promo menarik! Top up sekarang dan nikmati harga spesial untuk pelanggan baru.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/top-up-robux">
              <Button 
                size="xl" 
                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                Top Up Sekarang
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                Ada Pertanyaan?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
