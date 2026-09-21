"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "";
        for (const id of sections) {
          if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 160) {
            current = id;
          }
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          current = "contact";
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="navigation">
      <div className="container nav-layout">
        <a href="#" className="wordmark">
          RD<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about" aria-current={active === "about" ? "location" : undefined}>About</a>
          <a href="#projects" aria-current={active === "projects" ? "location" : undefined}>Projects</a>
          <a href="#contact" aria-current={active === "contact" ? "location" : undefined}>Contact</a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
