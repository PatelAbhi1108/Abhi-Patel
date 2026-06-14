import { useTheme } from "./hooks/useTheme";
import { useScrolled } from "./hooks/useScrolled";

import BgCanvas from "./components/ui/BgCanvas";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Terminal from "./components/sections/Terminal";
import Contact from "./components/sections/Contact";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const scrolled = useScrolled();

  return (
    <>
      <BgCanvas />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />

      <div className="page-wrapper">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Terminal />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
