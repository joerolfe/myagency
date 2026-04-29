import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ProblemSolution from "@/components/ProblemSolution";
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
        <Portfolio />
        <Testimonials />
        <ProblemSolution />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
