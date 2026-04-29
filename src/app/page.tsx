import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <ProblemSolution />
        <Comparison />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
