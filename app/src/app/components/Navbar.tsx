import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 pt-4">
        <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white/70 px-5 py-3 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03]">

          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            RD<span className="text-indigo-400">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-7 text-sm text-gray-600 dark:text-gray-400 sm:flex">
            <a
              href="#about"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

        </div>
      </div>
    </nav>
  );
}