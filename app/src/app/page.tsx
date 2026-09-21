import ScrollEffects from "./components/ScrollEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

export default function Home() {
  return (
    <main className="portfolio">
      <ScrollEffects />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
