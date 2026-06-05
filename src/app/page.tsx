import PageLoader from "@/components/PageLoader";
import HomeNav from "@/components/home/HomeNav";
import Hero from "@/components/home/Hero";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import StatementSection from "@/components/home/StatementSection";
import PricingSection from "@/components/home/PricingSection";
import StatsSection from "@/components/home/StatsSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a" }}>
      <PageLoader />
      <HomeNav />
      <Hero />
      <MarqueeTicker />
      <StatementSection />
      <PricingSection />
      <StatsSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <HomeFooter />
    </main>
  );
}
