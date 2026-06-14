import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-tag">Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of things I've built — each one a new challenge and learning experience.
        </p>
      </div>

      <div className="projects-showcase">
        <div className="projects-showcase-header">
          <span className="projects-code-label">// projects.config.js</span>
          <h3>Built for the modern web.</h3>
          <span className="projects-code-label">// description</span>
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
    </section>
  );
}
