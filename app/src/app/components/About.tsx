const certificates = [
  {
    title: "Full Stack JavaScript Program",
    issuer: "Hacktiv8 Indonesia",
    date: "May 2026 - Aug 2026",
    file: "/certificate-hacktiv8.pdf",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    date: "Aug 2026",
    file: "/css-certificate.pdf",
  },
  {
    title: "React",
    issuer: "HackerRank",
    date: "Aug 2026",
    file: "/react-basic.pdf",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    date: "Aug 2026",
    file: "/javascript-basic-certificate.pdf",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Aug 2026",
    file: "/software-engineer.pdf",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "Aug 2026",
    file: "/problem-solving.pdf",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
            About
          </p>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Information Systems graduate from Gunadarma University and aspiring
            Full Stack Developer with hands-on experience building web and
            mobile applications using JavaScript, TypeScript, React, Next.js,
            React Native, Node.js, Express, PostgreSQL, MongoDB, and GraphQL.
            Currently developing software engineering skills through intensive
            project-based learning, covering frontend, backend, databases,
            authentication, API development, testing, and deployment. Previous
            experience in the retail industry strengthened communication,
            teamwork, attention to detail, problem-solving, and
            customer-oriented skills that I bring into software development.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/[0.08] dark:bg-white/[0.02]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              Education
            </p>

            <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
              Gunadarma University
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Bachelor of Information Systems
            </p>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-600">
              Aug 2018 - Oct 2023
            </p>
          </div>

          {/* Experience */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-indigo-500/30 dark:border-white/[0.08] dark:bg-white/[0.02]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              Experience
            </p>

            <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
              PT MAP Active Adiperkasa
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Store Associate
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-600">
              Responsible for inventory management, stock opname, incoming goods
              verification, and store operations.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-600">
              Jul 2024 - May 2026
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-indigo-500/30 md:col-span-2 dark:border-white/[0.08] dark:bg-white/[0.02]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              Skills
            </p>

            <div className="mt-6 space-y-6">
              {/* Languages */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Languages
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Frontend
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "React Native",
                    "Expo",
                    "Redux",
                    "Tailwind",
                    "DaisyUI",
                    "Bootstrap",
                    "Apollo Client",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Backend
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "NestJS",
                    "GraphQL",
                    "Socket.IO",
                    "RESTful API",
                    "Mongoloquent",
                    "Apollo Server",
                    "Sequelize",
                    "bcryptjs",
                    "JSON Web Token",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Database
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Others */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Languages & Others
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["Indonesia", "English", "Git"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition hover:border-indigo-500/30 hover:text-gray-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificate & Awards */}
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/[0.08] dark:bg-white/[0.02] md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              Certificates & Awards
            </p>

            <div className="mt-5 space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.title}
                  className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md hover:shadow-indigo-500/5 dark:border-white/[0.08] dark:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {certificate.issuer}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                      {certificate.date}
                    </p>
                  </div>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit rounded-full border border-indigo-500/30 px-5 py-2 text-sm font-medium text-indigo-300 transition hover:border-indigo-400/50 hover:text-indigo-200"
                  >
                    View Certificate ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
