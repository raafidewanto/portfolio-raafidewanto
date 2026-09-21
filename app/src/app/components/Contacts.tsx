export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Contact Card */}
        <div className="contact-content">

          {/* Label */}
          <p className="section-label">
            Contact
          </p>

          {/* Heading */}
          <h2 className="contact-title">
            Let&apos;s work together.
          </h2>

          {/* WhatsApp CTA */}
          <a
            href="mailto:rdewanto75@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary contact-action"
          >
            Email ↗
          </a>

          {/* Social Links */}
          <div className="contact-socials">
            <a
              href="https://github.com/raafidewanto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/rdewanto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Muhamad Raafi Dewanto. All rights
          reserved.
        </footer>

      </div>
    </section>
  );
}