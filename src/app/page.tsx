import Hero from "@/components/Hero";
import Contents from "@/components/Contents";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="p-4 md:p-8 relative min-h-screen">
      {/* Premium Noise Overlay */}
      <div className="grain-overlay" />

      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-brand/5 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto space-y-40">
        <Hero />
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