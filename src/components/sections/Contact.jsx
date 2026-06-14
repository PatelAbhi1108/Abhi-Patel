import { GitHubSocialIcon, LinkedInIcon, TwitterIcon } from "../ui/icons";

const SOCIALS = [
  { href: "https://github.com",   label: "GitHub",      Icon: GitHubSocialIcon },
  { href: "https://linkedin.com", label: "LinkedIn",    Icon: LinkedInIcon },
  { href: "https://twitter.com",  label: "Twitter / X", Icon: TwitterIcon },
];

export default function Contact() {
  return (
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
            say hi — my inbox is always open. I'll get back to you within 24 hours.
          </p>

          <a href="mailto:abhi@example.com" className="contact-email">
            📧 abhi@example.com
          </a>

          <div className="social-links">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
