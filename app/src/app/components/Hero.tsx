import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute left-1/3 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Text */}
        <div>
          <p className="mt-5 max-w-2xl leading-relaxed text-gray-600 transition-colors duration-500 text-indigo-400">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 transition-colors duration-500 dark:text-white sm:text-6xl md:text-7xl">
            Muhamad Raafi
            <span className="block text-gray-600 dark:text-gray-400">
              Dewanto
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative mx-auto">
          {/* Glow behind image */}
          <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/10" />

          <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-indigo-500/5" />

          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 sm:h-80 sm:w-80">
            <Image
              src="/raafi.png"
              alt="Muhamad Raafi Dewanto"
              fill
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
