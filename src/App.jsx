import React, { useState, useEffect } from "react";
import { logos } from "./logos";
import awsLogo from "./assets/logos/aws-2.svg";
import cssLogo from "./assets/logos/css-3.svg";
import dockerLogo from "./assets/logos/docker-4.svg";
import expressLogo from "./assets/logos/Express.svg";
import githubLogo from "./assets/logos/GitHub Actions.svg";
import gitLogo from "./assets/logos/git-icon.svg";
import grafanaLogo from "./assets/logos/Grafana.svg";
import graphqlLogo from "./assets/logos/graphql-logo-2.svg";
import htmlLogo from "./assets/logos/html-1.svg";
import javaLogo from "./assets/logos/java-4.svg";
import javascriptLogo from "./assets/logos/javascript-r.svg";
import jestLogo from "./assets/logos/jest-2.svg";
import jwtLogo from "./assets/logos/jwtio-json-web-token.svg";
import kafkaLogo from "./assets/logos/kafka.svg";
import mochaLogo from "./assets/logos/mocha-1.svg";
import mongodbLogo from "./assets/logos/mongodb-icon-2.svg";
import mysqlLogo from "./assets/logos/mysql-3.svg";
import nextLogo from "./assets/logos/nextjs-13.svg";
import nodeLogo from "./assets/logos/nodejs-icon.svg";
import postgresLogo from "./assets/logos/postgresql-inc.svg";
import postmanLogo from "./assets/logos/postman.svg";
import prismaLogo from "./assets/logos/prisma-2.svg";
import pythonLogo from "./assets/logos/python-5.svg";
import reactNativeLogo from "./assets/logos/react-native-1.svg";
import redisLogo from "./assets/logos/redis.svg";
import reduxLogo from "./assets/logos/redux.svg";
import springLogo from "./assets/logos/spring-boot-1.svg";
import supabaseLogo from "./assets/logos/supabase-ar21~bgwhite.svg";
import tailwindLogo from "./assets/logos/tailwind-css-2.svg";
import typescriptLogo from "./assets/logos/typescript-2.svg";
import vscodeLogo from "./assets/logos/visual-studio-code-1.svg";
import wordpressLogo from "./assets/logos/wordpress-icon.svg";
import profileImage from './assets/abhi.png';

// ─── Data ────────────────────────────────────────────────────────────────────
const skillsRow1 = [
  "html",
  "css",
  "javascript",
  "typescript",
  "reactNative",
  "next",
  "node",
  "express",
  "java",
  "python",
  "spring",
  "wordpress",
  "mongodb",
  "postgres",
  "mysql",
  "redis",
  "prisma",
  "supabase",
  "aws",
  "docker",
  "git",
  "githubActions",
  "postman",
  "graphql",
  "kafka",
  "jest",
  "mocha",
  "jwt",
  "grafana",
  "tailwind",
  "redux",
  "vscode",
];

const skillsRow2 = [];

const experiences = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    desc: "Building modern web applications using React, TypeScript, and Node.js. Collaborating with clients to design scalable architecture and deliver polished, performant products from concept to deployment.",
    tags: ["React", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer Intern",
    company: "Tech Startup · Remote",
    desc: "Developed reusable UI components, improved app performance by 40%, and migrated legacy JavaScript codebase to TypeScript. Worked in an agile team with weekly sprints and code reviews.",
    tags: ["React", "TypeScript", "CSS Modules", "Figma"],
  },
  {
    period: "2022 — 2023",
    role: "Junior Web Developer",
    company: "Agency · On-site",
    desc: "Built responsive websites for clients across various industries. Focused on HTML/CSS pixel-perfect implementation, JavaScript interactivity, and cross-browser compatibility.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    period: "2021 — 2022",
    role: "CS Student & Self-Learner",
    company: "University · Personal Projects",
    desc: "Dived deep into computer science fundamentals — data structures, algorithms, and OOP with Java. Started building personal projects and exploring the world of web development.",
    tags: ["Java", "Data Structures", "Algorithms", "HTML/CSS"],
  },
];

const projects = [
  {
    number: "01",
    title: "NexaUI Design System",
    desc: "A full-featured design system with 60+ React components, dark/light theming, and comprehensive Storybook documentation. Used across 3 production applications.",
    stack: ["React", "TypeScript", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)",
    icon: "🎨",
    accent: "#61DAFB",
  },
  {
    number: "02",
    title: "DevTrack — Task Manager",
    desc: "A Kanban-style project management app with real-time updates, drag-and-drop, team collaboration, and detailed analytics dashboards.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #0d1f12 0%, #1a3d1f 100%)",
    icon: "📋",
    accent: "#4ade80",
  },
  {
    number: "03",
    title: "CryptoVision Analytics",
    desc: "Real-time cryptocurrency dashboard with live price charts, portfolio tracking, news aggregation, and custom alerts via WebSockets.",
    stack: ["React", "JavaScript", "WebSockets", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #1a0a28 0%, #2d1a45 100%)",
    icon: "📈",
    accent: "#a855f7",
  },
  {
    number: "04",
    title: "FlowAPI — REST Builder",
    desc: "A visual API builder that lets developers design, test, and document REST endpoints with an intuitive drag-and-connect interface. Exports to OpenAPI spec.",
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #1a1200 0%, #3d2d00 100%)",
    icon: "⚡",
    accent: "#f59e0b",
  },
  {
    number: "05",
    title: "PortfolioCraft",
    desc: "A no-code portfolio builder for developers. Drag blocks, customize themes, add projects, and deploy in seconds. Powers 500+ developer portfolios.",
    stack: ["React", "TypeScript", "CSS", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #0a1a1a 0%, #0d3333 100%)",
    icon: "🚀",
    accent: "#00d4ff",
  },
  {
    number: "06",
    title: "AlgoViz — DSA Visualizer",
    desc: "An interactive data structures and algorithms visualizer built with Java and animated in the browser. Supports 20+ sorting and graph algorithms with step-by-step playback.",
    stack: ["JavaScript", "Java", "HTML", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    bg: "linear-gradient(135deg, #1a0a0a 0%, #3d1515 100%)",
    icon: "🧠",
    accent: "#f43f5e",
  },
];

// ─── GitHub SVG ───────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

// ─── Background Canvas ────────────────────────────────────────────────────────
function BgCanvas() {
  return (
    <div className="bg-canvas">
      <svg
        className="circuit-bg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {/* ===== MAIN ZIGZAG + CIRCUIT PATHS ===== */}

        {/* Path 1 */}
        <path
          className="circuit-path base"
          d="M50 200 L300 200 L380 280 L650 280 L720 350 L1050 350"
        />
        <path
          className="circuit-path glow"
          d="M50 200 L300 200 L380 280 L650 280 L720 350 L1050 350"
        />

        {/* Path 2 */}
        <path
          className="circuit-path base"
          d="M1150 140 L900 140 L820 220 L600 220 L520 300 L250 300"
        />
        <path
          className="circuit-path glow delay1"
          d="M1150 140 L900 140 L820 220 L600 220 L520 300 L250 300"
        />

        {/* Path 3 (shorter for balance) */}
        <path
          className="circuit-path base"
          d="M100 520 L350 520 L420 460 L650 460"
        />
        <path
          className="circuit-path glow delay2"
          d="M100 520 L350 520 L420 460 L650 460"
        />

        {/* ===== SMALL NETWORK (BOTTOM RIGHT) ===== */}

        <g className="network">
          <circle cx="950" cy="620" r="3" />
          <circle cx="1020" cy="670" r="3" />
          <circle cx="1080" cy="620" r="3" />
          <circle cx="990" cy="720" r="3" />

          <line x1="950" y1="620" x2="1020" y2="670" />
          <line x1="1020" y1="670" x2="1080" y2="620" />
          <line x1="1080" y1="620" x2="950" y2="620" />
          <line x1="950" y1="620" x2="990" y2="720" />
          <line x1="1080" y1="620" x2="990" y2="720" />
        </g>
      </svg>

      <div className="bg-grid" />
    </div>
  );
}

const skillLogos = {
  aws: { name: "AWS", src: awsLogo },
  css: { name: "CSS", src: cssLogo },
  docker: { name: "Docker", src: dockerLogo },
  express: { name: "Express", src: expressLogo },
  githubActions: { name: "GitHub Actions", src: githubLogo },
  git: { name: "Git", src: gitLogo },
  grafana: { name: "Grafana", src: grafanaLogo },
  graphql: { name: "GraphQL", src: graphqlLogo },
  html: { name: "HTML", src: htmlLogo },
  java: { name: "Java", src: javaLogo },
  javascript: { name: "JavaScript", src: javascriptLogo },
  jest: { name: "Jest", src: jestLogo },
  jwt: { name: "JWT", src: jwtLogo },
  kafka: { name: "Kafka", src: kafkaLogo },
  mocha: { name: "Mocha", src: mochaLogo },
  mongodb: { name: "MongoDB", src: mongodbLogo },
  mysql: { name: "MySQL", src: mysqlLogo },
  next: { name: "Next.js", src: nextLogo },
  node: { name: "Node.js", src: nodeLogo },
  postgres: { name: "PostgreSQL", src: postgresLogo },
  postman: { name: "Postman", src: postmanLogo },
  prisma: { name: "Prisma", src: prismaLogo },
  python: { name: "Python", src: pythonLogo },
  reactNative: { name: "React Native", src: reactNativeLogo },
  redis: { name: "Redis", src: redisLogo },
  redux: { name: "Redux", src: reduxLogo },
  spring: { name: "Spring Boot", src: springLogo },
  supabase: { name: "Supabase", src: supabaseLogo },
  tailwind: { name: "Tailwind", src: tailwindLogo },
  typescript: { name: "TypeScript", src: typescriptLogo },
  vscode: { name: "VS Code", src: vscodeLogo },
  wordpress: { name: "WordPress", src: wordpressLogo },
};

// ─── Skill Card ───────────────────────────────────────────────────────────────
function SkillCard({ skillKey }) {
  const skill = skillLogos[skillKey];
  if (!skill) return null;

  return (
    <div className="skill-card">
      <img src={skill.src} alt={skill.name} />
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

// ─── Carousel Track ───────────────────────────────────────────────────────────
function CarouselTrack({ skills, direction }) {
  const doubled = [...skills, ...skills]; // duplicate for infinite loop
  return (
    <div
      className="carousel-track"
      style={{
        animationDirection: direction === "backward" ? "reverse" : "normal",
      }}
      data-direction={direction}
    >
      <div className={`carousel-track ${direction}`}>
        {doubled.map((key, i) => (
          <SkillCard key={`${key}-${i}`} skillKey={key} />
        ))}
      </div>
    </div>
  );
}

// Actually the carousel needs one flat track, let me use a wrapper approach

//this function is to make skills carousel 

// function SkillsCarousel() {
//   const doubled1 = [...skillsRow1, ...skillsRow1];
//   const doubled2 = [...skillsRow2, ...skillsRow2];

//   return (
//     <div className="carousel-wrapper">
//       {/* Row 1 — Left to Right */}
//       <div style={{ overflow: "hidden", marginBottom: "20px" }}>
//         <div className="carousel-track forward">
//           {doubled1.map((key, i) => (
//             <SkillCard key={`r1-${key}-${i}`} skillKey={key} />
//           ))}
//         </div>
//       </div>
//       {/* Row 2 — Right to Left */}
//       <div style={{ overflow: "hidden" }}>
//         <div className="carousel-track backward">
//           {doubled2.map((key, i) => (
//             <SkillCard key={`r2-${key}-${i}`} skillKey={key} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function SkillsGrid() {
  const featuredSkills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "reactNative",
  "next",
  "node",
  "express",
  "java",
  "python",
  "spring",
  "wordpress",

  "mongodb",
  "postgres",
  "mysql",
  "redis",
  "prisma",
  "supabase",

  "aws",
  "docker",
  "git",
  "githubActions",
  "postman",
  "graphql",

  "kafka",
  "jest",
  "mocha",
  "jwt",
  "grafana",
  "tailwind",
  "redux",
  "vscode",
];

  return (
    <div className="skills-showcase">
      <div className="skills-edge skills-edge-left" />
      <div className="skills-edge skills-edge-right" />

      <div className="skills-showcase-header">
        <span className="skills-code-label">
          text-4xl text-white tracking-tight text-balance
        </span>

        <h3>Supported by my tech stack.</h3>

        <span className="skills-code-label">
          text-base text-muted
        </span>

        <p>
          Tools, frameworks, and technologies I use to build scalable,
          maintainable, and user-focused web applications.
        </p>
      </div>

      <div className="skills-logo-grid">
        {featuredSkills.map((skillKey) => {
          const skill = skillLogos[skillKey];
          if (!skill) return null;

          return (
            <div className="skills-logo-cell" key={skillKey}>
              <img src={skill.src} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-feature-card ${featured ? "featured" : ""}`}>
      <div className="project-feature-head">
        <div className="project-line-icon">{project.icon}</div>

        <div>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      </div>

      <div className="project-preview-panel">
        <div className="project-preview-inner" style={{ background: project.bg }}>
          <div
            className="project-preview-pattern"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${project.accent} 0px, ${project.accent} 1px, transparent 1px, transparent 18px)`,
            }}
          />

          <div className="project-preview-content">
            <span className="project-number">{project.number}</span>
            <div className="project-big-icon">{project.icon}</div>
            <h4>{project.title}</h4>

            <div className="project-stack">
              {project.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                className="project-link link-github"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon /> GitHub
              </a>

              <a
                href={project.live}
                className="project-link link-live"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalIcon /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsShowcase() {
  return (
    <div className="projects-showcase">
      <div className="projects-edge projects-edge-left" />
      <div className="projects-edge projects-edge-right" />

      <div className="projects-showcase-header">
        <span className="projects-code-label">
          text-4xl text-white tracking-tight text-balance
        </span>

        <h3>Built for the modern web.</h3>

        <span className="projects-code-label">
          text-base text-muted
        </span>

        <p>
          A curated collection of applications, tools, and interfaces built with
          modern frontend, backend, and cloud technologies.
        </p>
      </div>

      <div className="projects-feature-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCarousel() {
  const [active, setActive] = useState(0);

  const prevProject = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="project-carousel">
      <button
        className="project-arrow left"
        onClick={prevProject}
        aria-label="Previous project"
      >
        ‹
      </button>

      <div className="project-carousel-stage">
        {projects.map((project, index) => {
          let offset = index - active;

          if (offset > projects.length / 2) offset -= projects.length;
          if (offset < -projects.length / 2) offset += projects.length;

          return (
            <div
              key={project.number}
              className={`project-slide ${offset === 0 ? "active" : ""}`}
              style={{
                "--offset": offset,
                "--abs-offset": Math.abs(offset),
                zIndex: 10 - Math.abs(offset),
                opacity:
                  Math.abs(offset) === 0
                    ? 1
                    : Math.abs(offset) === 1
                      ? 0.75
                      : Math.abs(offset) === 2
                        ? 0.5
                        : 0,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      <button
        className="project-arrow right"
        onClick={nextProject}
        aria-label="Next project"
      >
        ›
      </button>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BgCanvas />

      {/* ── NAV ── */}
      <nav
        style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none" }}
      >
        <a className="nav-logo" href="#hero">
          &lt;<span>dev</span>/&gt;
        </a>
        <ul className="nav-links">
          {["about", "skills", "experience", "projects", "contact"].map(
            (id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                >
                  {id}
                </a>
              </li>
            ),
          )}
        </ul>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="theme-toggle-thumb">
            {theme === "dark" ? "🌙" : "☀️"}
          </div>
        </button>
      </nav>

      <div className="page-wrapper">
        {/* ── HERO ── */}
        <section id="hero">
          <div className="hero-inner">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Available for Opportunities
            </div>
            <h1 className="hero-name">
              
             
              <span className="hero-name-accent">Abhi Patel</span>
            </h1>
            <div className="hero-title-line">
              <span className="hero-title-text">Full Stack Developer</span>
              <div className="hero-title-line-sep" />
            </div>
            <p className="hero-desc">
              I craft high-performance web applications with clean code and bold
              design. Passionate about turning complex problems into elegant
              digital experiences.
            </p>
            <div className="hero-ctas">
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              {[
                ["3+", "Years Coding"],
                ["20+", "Projects Built"],
                ["6+", "Technologies"],
                ["100%", "Passion"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <div className="container">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Who am I?</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Hey! I'm <strong>Alex</strong>, a full-stack developer with a
                  deep love for crafting beautiful, functional web experiences.
                  I started my journey with Java in university and quickly fell
                  in love with web technologies.
                </p>
                <p>
                  Today I work across the full stack — from architecting{" "}
                  <strong>React TypeScript</strong> frontends to building robust{" "}
                  <strong>Java/Node.js</strong> backends. I care deeply about
                  clean code, performance, and experiences that feel effortless
                  to use.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring open-source
                  projects, mentoring junior developers, or obsessing over the
                  latest web performance techniques.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "4px",
                  }}
                >
                  {[
                    "Clean Code Advocate",
                    "Open Source Fan",
                    "UI Enthusiast",
                    "Problem Solver",
                  ].map((h) => (
                    <span className="about-highlight" key={h}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="about-visual">
                <div className="about-avatar-ring" />
                <div className="about-avatar-outer" />

                <div className="about-avatar-inner">
                  <img src={profileImage} alt="Abhi Patel" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills">
          <div className="container">
            <div className="section-tag">Tech Stack</div>
            <h2 className="section-title">Skills & Tools</h2>
            <p className="section-subtitle">
              Technologies I work with daily — hover over any logo to reveal its
              color.
            </p>
          </div>
          {/* <SkillsCarousel /> */}
          <SkillsGrid />
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience">
          <div className="container">
            <div className="section-tag">Journey</div>
            <h2 className="section-title">My Experience</h2>
            <p className="section-subtitle">
              From first lines of Java to full-stack production apps — here's
              how I got here.
            </p>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.desc}</p>
                  <div className="timeline-tags">
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="container">
            <div className="section-tag">Work</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of things I've built — each one a new challenge and
              learning experience.
            </p>
           <ProjectsShowcase />
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <div className="container">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Let's Build
              <br />
              Something Together
            </h2>
            <div className="contact-inner">
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Whether you have a project in mind, a question, or just want to
                say hi — my inbox is always open. I'll get back to you within 24
                hours.
              </p>
              <a href="mailto:alex@example.com" className="contact-email">
                📧 alex@example.com
              </a>
              <div className="social-links">
                {[
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://twitter.com",
                    label: "Twitter / X",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer>
          <span>
            Built with React &amp; CSS by Alex Johnson ·{" "}
            {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
}
