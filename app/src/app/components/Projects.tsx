import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  type: "web" | "mobile";
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "VitaFlux — Blood Donation Mobile Platform",
    description:
      "A cross-platform blood donation app connecting donors with healthcare facilities through location-based blood matching, with features including donor screening, blood requests, QR check-in, donation tracking, and push notifications.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Mongoloquent",
      "JSON Web Token",
    ],
    images: ["/home-donor.png", "/riwayat-donor.png", "/home-facility.png"],
    type: "mobile",
    github: "https://github.com/Vitaflux/mobile-Vitaflux-97.git",
    demo: "https://expo.dev/preview/update?message=VitaFlux+final+project+release&updateRuntimeVersion=1.0.0&createdAt=2026-08-21T07%3A48%3A55.288Z&slug=exp&projectId=3ce1e33c-f200-437d-a5f3-185eb913a82a&group=e7a3664e-654b-4591-8907-7c0b5cc185be",
  },

  {
    title: "NØRD — E-Commerce Web Application",
    description:
      "A full-stack fashion e-commerce application built with Next.js and TypeScript, featuring product browsing, product details, user authentication, and a structured product catalog. Integrated MongoDB for data management and Zod for secure and reliable form validation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Mongoloquent",
      "Zod",
      "Tailwind CSS",
    ],
    images: ["/home-nord.png"],
    type: "web",
    github: "https://github.com/H8-FSJS-P3S6/gc02-raafidewanto.git",
    demo: "https://nord-supply.vercel.app/",
  },

  {
    title: "NexWork — Social Media Mobile Application",
    description:
      "A mobile social networking application built with React Native and Expo, featuring post creation, user search, following, likes, comments, and profile management. Integrated GraphQL with Apollo Client and implemented JWT authentication with SecureStore for secure session management.",
    technologies: [
      "React Native",
      "Expo",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "MongoDB",
      "JSON Web Token",
    ],
    images: ["/nexwork-login.png", "/nexwork-home.png", "/nexwork-profile.png"],
    type: "mobile",
    github: "https://github.com/H8-FSJS-P3S6/gc01-raafidewanto.git",
    demo: "https://expo.dev/preview/update?message=Change+image+height&updateRuntimeVersion=1.0.0&createdAt=2026-08-01T10%3A12%3A45.761Z&slug=exp&projectId=a856ee53-b936-4103-82e5-bf7801cae280&group=9563ce43-f5c7-466a-bab0-0e946685b57c",
  },

  {
    title: "New Family 3000 Quiz Battle — Real-Time AI Quiz Application",
    description:
      "A real-time multiplayer quiz application built with Socket.IO, allowing users to create and join rooms and compete in synchronized quiz sessions. Integrated AI-generated questions to dynamically generate quiz content using a full-stack architecture.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Sequelize",
      "AI API",
      "Axios",
    ],
    images: ["/quiz.png"],
    type: "web",
    github: "https://github.com/group-project-97-gas/gp-gas.git",
    demo: "https://gp-gas.vercel.app/",
  },

  {
    title: "GigsHub — Festival Ticketing Web Application",
    description:
      "A full-stack festival ticketing web application built with Node.js and Express.js, featuring band discovery, ticket purchasing, authentication, and order management. Integrated Midtrans for payment processing and implemented automated API testing with Jest and Supertest.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Jest",
      "Supertest",
      "Midtrans",
      "Bcrypt",
      "AI API",
    ],
    images: ["/gigshub-home.png"],
    type: "web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
            Projects
          </p>

          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-500">
            A selection of projects I&apos;ve worked on while learning and
            developing my skills in web and mobile development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-gray-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
            >
              {/* Project Image */}
              {project.type === "mobile" ? (
                <div className="relative flex aspect-video items-center justify-center gap-3 overflow-hidden border-b border-gray-200 bg-gray-50 dark:border-white/[0.08] dark:bg-white/[0.02]">
                  {/* Glow */}
                  <div className="absolute h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

                  {/* Mobile Screenshots */}
                  {project.images.slice(0, 3).map((image, imageIndex) => (
                    <div
                      key={image}
                      className="relative h-[240px] w-[120px] overflow-hidden rounded-[20px] border border-gray-300 bg-black shadow-2xl dark:border-white/20"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden border-b border-gray-200 dark:border-white/[0.08]">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                {/* Project Number */}
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  0{index + 1}
                </p>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-5 text-sm font-medium">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 transition hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition hover:text-indigo-500 dark:text-gray-500 dark:hover:text-white"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
