import { experiences } from "./experience.js";
import { projects } from "./projects.js";

const SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "React Native", "Next.js", "Node.js",
  "Express", "Java", "Python", "Spring Boot", "WordPress",
  "MongoDB", "PostgreSQL", "MySQL", "Redis",
  "Prisma", "Supabase", "AWS", "Docker",
  "Git", "GitHub Actions", "Postman", "GraphQL",
  "Kafka", "Jest", "Mocha", "JWT",
  "Grafana", "Tailwind CSS", "Redux", "VS Code",
];

export function buildKnowledgeBase() {
  const experienceText = experiences
    .map((e) => `${e.period} | ${e.role} at ${e.company}\n${e.desc}\nTechnologies: ${e.tags.join(", ")}`)
    .join("\n\n");

  const projectsText = projects
    .map((p) => `${p.number}. ${p.title}\n${p.desc}\nStack: ${p.stack.join(", ")}`)
    .join("\n\n");

  return `
=== ABOUT ===
Abhi Patel is a Full Stack Developer with 3+ years of experience building modern web applications with clean code and bold design. He works across the full stack — from React frontends to Node.js/Java backends. Passionate about performance and great UX. Currently available for freelance projects and full-time remote opportunities.

=== SKILLS ===
${SKILLS.join(", ")}

=== EXPERIENCE ===
${experienceText}

=== PROJECTS ===
${projectsText}

=== CONTACT ===
Email: abhi@example.com
GitHub: github.com/abhi
LinkedIn: linkedin.com/in/abhipatel
Twitter: twitter.com/abhipatel
Available for: Freelance projects and full-time remote opportunities worldwide
  `.trim();
}
