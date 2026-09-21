import Image from "next/image";
import { Fragment } from "react";

function NameLetters({ text, offset = 0 }: { text: string; offset?: number }) {
  const words = text.split(" ");
  return words.map((word, wordIndex) => {
    const start = offset + words.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
    return (
      <Fragment key={wordIndex}>
        {wordIndex > 0 && " "}
        <span className="name-word">
          {Array.from(word).map((letter, index) => (
            <span
              key={index}
              className="name-letter"
              style={{ animationDelay: `${100 + (start + index) * 45}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </Fragment>
    );
  });
}

export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero-layout">
        {/* Text */}
        <div className="hero-copy">
          <p className="eyebrow">
            FULL STACK DEVELOPER
          </p>

          <h1 className="hero-title" aria-label="Muhamad Raafi Dewanto">
            <span aria-hidden="true">
              <NameLetters text="Muhamad Raafi" />
            </span>
            <span className="hero-surname" aria-hidden="true">
              <NameLetters text="Dewanto" offset={13} />
            </span>
          </h1>

          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="button button-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="hero-portrait">

          <div className="portrait-frame">
            <Image
              src="/raafi.png"
              alt="Muhamad Raafi Dewanto"
              fill
              priority
              sizes="(max-width: 600px) 240px, 320px"
              className="portrait-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
