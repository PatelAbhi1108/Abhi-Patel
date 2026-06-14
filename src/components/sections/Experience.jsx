import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-tag">Journey</div>
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">
          From first lines of Java to full-stack production apps — here's how I got here.
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
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
