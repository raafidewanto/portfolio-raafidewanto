import Image, { type StaticImageData } from "next/image";
import ruangScreenshot from "../../../public/home-ruang.png";
import nordScreenshot from "../../../public/home-nord.png";
import quizScreenshot from "../../../public/quiz.png";
import gigshubScreenshot from "../../../public/gigshub-home.png";
import Skill from "./Skill";

// Static imports supply the actual dimensions and a content-hashed image URL.
// Cropping/replacing a screenshot updates its ratio and cache key automatically.
const webScreenshots: Record<string, StaticImageData> = {
  "/home-ruang.png": ruangScreenshot,
  "/home-nord.png": nordScreenshot,
  "/quiz.png": quizScreenshot,
  "/gigshub-home.png": gigshubScreenshot,
};

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
    title: "Ruang — AI-Powered Task Management System",
    description:
      "Ruang is a task management web application designed to help users organize projects and tasks efficiently. The application supports project and task management, task assignment, status and priority tracking, role-based access, and authentication. It also integrates AI-powered commands using Gemini API to create or manage tasks from natural-language instructions. Redis caching is implemented to improve data retrieval performance, while audit logging records important system activities.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "Vite",
      "PostgreSQL",
      "Redis",
      "Gemini API",
      "Sequelize",
      "REST API",
    ],
    images: ["/home-ruang.png"],
    type: "web",
    github: "https://github.com/raafidewanto/AI-task-management.git",
    demo: "https://ruang-task-management.vercel.app/",
  },

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
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Heading */}
        <div className="section-heading">
          <h2 className="section-title">
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project project-${project.type}`}
            >
              {/* Project Image */}
              {project.type === "mobile" ? (
                <div className="project-gallery project-gallery-mobile">

                  {/* Mobile Screenshots */}
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="mobile-shot"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 600px) 27vw, (max-width: 1000px) 25vw, 240px"
                        className="project-image"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="project-gallery project-gallery-web">
                  <Image
                    src={webScreenshots[project.images[0]]}
                    alt={`${project.title} project screenshot`}
                    sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1320px) 91vw, 1200px"
                    className="project-image"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="project-content">
                {/* Project Number */}
                <p className="project-number">
                  0{index + 1}
                </p>

                {/* Title */}
                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <Skill key={technology} name={technology} compact />
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
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
