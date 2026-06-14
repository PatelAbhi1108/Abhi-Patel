const STATS = [
  ["3+",   "Years Coding"],
  ["20+",  "Projects Built"],
  ["6+",   "Technologies"],
  ["100%", "Passion"],
];

export default function Hero({ scrollTo }) {
  return (
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
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            Get In Touch
          </a>
        </div>

        <div className="hero-stats">
          {STATS.map(([num, label]) => (
            <div key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
