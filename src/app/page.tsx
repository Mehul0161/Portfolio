import Hero from "@/components/Hero";
import About from "@/components/About";
import Contents from "@/components/Contents";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Premium Noise Overlay */}
      <div className="grain-overlay" />

      {/* Hero is full-width */}
      <Hero />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 md:space-y-40">
        <About />
        <Contents />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </main>
  );
}