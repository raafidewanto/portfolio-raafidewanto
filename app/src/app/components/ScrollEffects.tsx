"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".portfolio");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const projects = Array.from(root.querySelectorAll<HTMLElement>(".project"));
    const entranceTargets = Array.from(root.querySelectorAll<HTMLElement>(
      ".hero-copy, .hero-portrait, .about-intro, .section-heading, .contact-content, .project-gallery, .project-content, .skill-groups > div, .certificate"
    ));
    let frame = 0;
    let positionsDirty = true;
    let projectPositions: { project: HTMLElement; top: number; height: number }[] = [];

    const reveal = (target: Element) => {
      target.classList.add("scroll-revealed");
      entrances.unobserve(target);
    };
    const entrances = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -4% 0px" });

    // Prepare only offscreen content. Never change the appearance of content
    // already visible on load, at a restored scroll position, or at an anchor.
    const offscreenTargets = entranceTargets.filter((target) => target.getBoundingClientRect().top >= window.innerHeight);
    if (!reducedMotion.matches) {
      offscreenTargets.forEach((target) => {
        target.classList.add("scroll-reveal");
        entrances.observe(target);
      });
    }

    function update() {
      frame = 0;
      const height = window.innerHeight;
      const scrollTop = window.scrollY;
      // Read layout only when dimensions change, before any decorative writes.
      if (positionsDirty) {
        projectPositions = projects.map((project) => {
          const rect = project.getBoundingClientRect();
          return { project, top: rect.top + scrollTop, height: rect.height };
        });
        positionsDirty = false;
      }
      const readingLine = scrollTop + height * 0.4;
      const active = projectPositions.find((position) => position.top <= readingLine && position.top + position.height > readingLine);
      root?.toggleAttribute("data-scrolled", scrollTop > 24);
      projectPositions.forEach(({ project, top, height: projectHeight }) => {
        project.toggleAttribute("data-reading", project === active?.project);
        const fraction = Math.min(1, Math.max(0, (readingLine - top) / Math.max(1, projectHeight)));
        project.style.setProperty("--project-progress", String(fraction));
      });
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function changeMotionPreference() {
      entrances.disconnect();
      entranceTargets.forEach((target) => target.classList.remove("scroll-reveal", "scroll-revealed"));
      schedule();
    }

    function invalidatePositions() {
      positionsDirty = true;
      schedule();
    }
    function revealFocusedContent(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(".scroll-reveal");
      if (target) reveal(target);
    }

    const resize = new ResizeObserver(invalidatePositions);
    resize.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", invalidatePositions);
    root.addEventListener("focusin", revealFocusedContent);
    reducedMotion.addEventListener("change", changeMotionPreference);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      entrances.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", invalidatePositions);
      root.removeEventListener("focusin", revealFocusedContent);
      reducedMotion.removeEventListener("change", changeMotionPreference);
      root.removeAttribute("data-scrolled");
      projects.forEach((project) => {
        project.removeAttribute("data-reading");
        project.style.removeProperty("--project-progress");
      });
      entranceTargets.forEach((target) => target.classList.remove("scroll-reveal", "scroll-revealed"));
    };
  }, []);

  return null;
}
