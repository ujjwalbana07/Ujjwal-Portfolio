import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          <Hero />
          <About />
          <Experience />
          <FeaturedProjects />
          <Projects />
          <Achievements />
          <Certifications />
          <Education />
          <Skills />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </MouseSpotlight>
  );
}
