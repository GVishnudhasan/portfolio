// import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Encryption";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div className="flex flex-col gap-20 relative z-10 pointer-events-auto">
        <Hero />
        <div className="relative z-20">
          <Skills />
        </div>
        <div className="relative z-20">
          <Experience />
        </div>
        <div className="relative z-20">
          <Projects />
        </div>
        <div className="relative z-20">
          <Contact />
        </div>
      </div>
    </main>
  );
}
