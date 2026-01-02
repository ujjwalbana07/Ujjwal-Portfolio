import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Leadership } from "@/components/sections/leadership";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";

export default function Home() {
  return (
    <MouseSpotlight className="flex flex-col min-h-screen bg-transparent">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Optional: Add a subtle grid here if we want more texture */}
      </div>
      <div className="relative z-10 w-full flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Leadership />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MouseSpotlight>
  );
}
