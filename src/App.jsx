
import "./animations.css";
import { Footer, HeroSection, Navbar } from "./components";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import { ThemeProvider } from "./hooks/useTheme";

const App = () => {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50  dark:bg-zinc-950 overflow-hidden">
        <Navbar/>
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}




















const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-blue-400"
    >
      {icon}
    </a>
  )
}








export default App

