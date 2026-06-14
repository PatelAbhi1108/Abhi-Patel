import profileImage from "../../assets/abhi.png";

const HIGHLIGHTS = ["Clean Code Advocate", "Open Source Fan", "UI Enthusiast", "Problem Solver"];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">Who am I?</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hey! I'm <strong>Abhi</strong>, a full-stack developer with a
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
            <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {HIGHLIGHTS.map((h) => (
                <span className="about-highlight" key={h}>{h}</span>
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
  );
}
