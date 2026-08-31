export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center transition sm:px-12 dark:border-white/[0.08] dark:bg-white/[0.02]">

          {/* Background Glow */}
          <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          {/* Label */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
            Contact
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Let&apos;s work together.
          </h2>

          {/* WhatsApp CTA */}
          <a
            href="mailto:rdewanto75@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Email ↗
          </a>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
            <a
              href="https://github.com/raafidewanto"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/rdewanto"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} Muhamad Raafi Dewanto. All rights
          reserved.
        </footer>

      </div>
    </section>
  );
}