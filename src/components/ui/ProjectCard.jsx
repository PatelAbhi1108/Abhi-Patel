import { GithubIcon, ExternalIcon } from "./icons";

export default function ProjectCard({ project, featured = false }) {
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
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link link-github" target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
              <a href={project.live} className="project-link link-live" target="_blank" rel="noreferrer">
                <ExternalIcon /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
