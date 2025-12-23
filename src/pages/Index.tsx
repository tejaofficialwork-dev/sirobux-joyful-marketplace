import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { USPSection } from "@/components/home/USPSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta Tags handled by index.html */}
      <HeroSection />
      <ProductsSection />
      <USPSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;