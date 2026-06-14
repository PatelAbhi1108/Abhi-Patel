import { skillLogos, featuredSkills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">Tech Stack</div>
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-subtitle">
          Technologies I work with daily — the full stack from UI to infrastructure.
        </p>
      </div>

      <div className="skills-showcase">
        <div className="skills-edge skills-edge-left" />
        <div className="skills-edge skills-edge-right" />

        <div className="skills-showcase-header">
          <span className="skills-code-label">// tech-stack.config.js</span>
          <h3>Supported by my tech stack.</h3>
          <span className="skills-code-label">// description</span>
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
    </section>
  );
}
