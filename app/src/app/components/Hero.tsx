import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero-layout">
        {/* Text */}
        <div className="hero-copy">
          <p className="eyebrow">
            Full Stack Developer
          </p>

          <h1 className="hero-title">
            Muhamad Raafi
            <span className="hero-surname">
              Dewanto
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
