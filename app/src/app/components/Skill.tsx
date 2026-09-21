import Image from "next/image";

// See public/tech/README.md for upstream sources and shared brand marks.
const logos: Record<string, { file: string; tone?: string; extension?: "png"; wide?: boolean }> = {
  "JavaScript": {
    "file": "javascript",
    "tone": "dark"
  },
  "TypeScript": {
    "file": "typescript"
  },
  "HTML": {
    "file": "html5"
  },
  "CSS": {
    "file": "css",
    "tone": "light"
  },
  "React": {
    "file": "react",
    "tone": "dark"
  },
  "Next.js": {
    "file": "nextdotjs",
    "tone": "mono"
  },
  "React Native": {
    "file": "react",
    "tone": "dark"
  },
  "Expo": {
    "file": "expo",
    "tone": "mono"
  },
  "Redux": {
    "file": "redux",
    "tone": "light"
  },
  "Tailwind": {
    "file": "tailwindcss",
    "tone": "dark"
  },
  "DaisyUI": {
    "file": "daisyui",
    "tone": "dark"
  },
  "Bootstrap": {
    "file": "bootstrap",
    "tone": "light"
  },
  "Apollo Client": {
    "file": "apollographql",
    "tone": "light"
  },
  "Node.js": {
    "file": "nodedotjs"
  },
  "Express.js": {
    "file": "express",
    "tone": "mono"
  },
  "NestJS": {
    "file": "nestjs"
  },
  "GraphQL": {
    "file": "graphql"
  },
  "Socket.IO": {
    "file": "socketdotio",
    "tone": "mono"
  },
  "Apollo Server": {
    "file": "apollographql",
    "tone": "light"
  },
  "Sequelize": {
    "file": "sequelize",
    "tone": "dark"
  },
  "JSON Web Token": {
    "file": "jsonwebtokens",
    "tone": "mono"
  },
  "PostgreSQL": {
    "file": "postgresql",
    "tone": "light"
  },
  "MongoDB": {
    "file": "mongodb"
  },
  "MySQL": {
    "file": "mysql",
    "tone": "light"
  },
  "RESTful API": { "file": "rest-api", "tone": "mono" },
  "Mongoloquent": { "file": "mongoloquent", "extension": "png", "tone": "light" },
  "bcryptjs": { "file": "bcryptjs", "tone": "mono" },
  "Indonesia": { "file": "indonesia", "tone": "mono" },
  "English": { "file": "english", "tone": "mono" },
  "Vite": { "file": "vite", "tone": "light" },
  "Redis": { "file": "redis" },
  "Gemini API": { "file": "googlegemini", "tone": "light" },
  "Zod": { "file": "zod" },
  "Axios": { "file": "axios", "tone": "light" },
  "Jest": { "file": "jest", "tone": "light" },
  "Midtrans": { "file": "midtrans", "tone": "light", "wide": true },
  "Supertest": { "file": "http-test", "tone": "mono" },
  "AI API": { "file": "ai-api", "tone": "mono" },
  "Git": {
    "file": "git"
  }
};

const aliases: Record<string, string> = {
  "React.js": "React",
  "Tailwind CSS": "Tailwind",
  "REST API": "RESTful API",
  "JWT": "JSON Web Token",
  "Bcrypt": "bcryptjs",
};

export default function Skill({ name, compact = false }: { name: string; compact?: boolean }) {
  const logo = logos[aliases[name] ?? name];
  return (
    <span className={compact ? "technology" : `skill${logo ? "" : " skill-text"}`}>
      {logo && (
        <span className="skill-logo" data-tone={logo.tone} data-wide={logo.wide || undefined}>
          <Image src={`/tech/${logo.file}.${logo.extension ?? "svg"}`} alt="" width={logo.wide ? 80 : 40} height={40} />
        </span>
      )}
      <span className="skill-name">{name}</span>
    </span>
  );
}
