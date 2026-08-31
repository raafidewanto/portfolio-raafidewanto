import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0b10] dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
