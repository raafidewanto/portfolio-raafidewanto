import Skill from "./Skill";

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
    <section id="about" className="section about-section">
      <div className="container">
        {/* Heading */}
        <div className="about-intro">
          <h2 className="section-label">
            About
          </h2>

          <p className="about-description">
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
        <div className="about-details">
          {/* Education */}
          <div className="detail-block">
            <h2 className="section-label">
              Education
            </h2>

            <h3 className="entry-title">
              Gunadarma University
            </h3>

            <p className="entry-meta">
              Bachelor of Information Systems
            </p>

            <p className="entry-date">
              Aug 2018 - Oct 2023
            </p>
          </div>

          {/* Experience */}
          <div className="detail-block">
            <h2 className="section-label">
              Experience
            </h2>

            <h3 className="entry-title">
              PT MAP Active Adiperkasa
            </h3>

            <p className="entry-meta">
              Store Associate
            </p>

            <p className="entry-description">
              Responsible for inventory management, stock opname, incoming goods
              verification, and store operations.
            </p>

            <p className="entry-date">
              Jul 2024 - May 2026
            </p>
          </div>

          {/* Skills */}
          <div className="detail-block">
            <h2 className="section-label">
              Skills
            </h2>

            <div className="skill-groups">
              {/* Languages */}
              <div>
                <h3 className="skill-category">
                  Languages
                </h3>

                <div className="skill-list">
                  {["JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="skill-category">
                  Frontend
                </h3>

                <div className="skill-list">
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
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="skill-category">
                  Backend
                </h3>

                <div className="skill-list">
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
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <h3 className="skill-category">
                  Database
                </h3>

                <div className="skill-list">
                  {["PostgreSQL", "MongoDB", "MySQL"].map((skill) => (
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Languages & Others */}
              <div>
                <h3 className="skill-category">
                  Languages & Others
                </h3>

                <div className="skill-list">
                  {["Indonesia", "English", "Git"].map((skill) => (
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificate & Awards */}
          <div className="detail-block">
            <h2 className="section-label">
              Certificates & Awards
            </h2>

            <div className="certificate-list">
              {certificates.map((certificate) => (
                <div
                  key={certificate.title}
                  className="certificate"
                >
                  <div>
                    <h3 className="entry-title">
                      {certificate.title}
                    </h3>

                    <p className="entry-meta">
                      {certificate.issuer}
                    </p>

                    <p className="entry-meta">
                      {certificate.date}
                    </p>
                  </div>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link certificate-link"
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
