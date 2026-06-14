const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar({ theme, toggleTheme, scrolled, scrollTo }) {
  return (
    <nav style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none" }}>
      <a className="nav-logo" href="#hero">
        &lt;<span>dev</span>/&gt;
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="theme-toggle-thumb">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </button>
    </nav>
  );
}
