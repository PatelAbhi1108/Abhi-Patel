import { useState, useRef, useEffect } from "react";

const BOOT_MESSAGES = [
  { type: "system", text: "Abhi's Portfolio Assistant v1.0.0" },
  { type: "system", text: 'Type "help" to see available queries, or ask anything about Abhi.' },
  { type: "divider" },
];

function getResponse(query) {
  const q = query.toLowerCase().trim();

  if (q === "" || q === "help") {
    return `Available queries:
  about       — Who is Abhi?
  skills      — Tech stack & tools
  experience  — Work history
  projects    — Things I've built
  contact     — How to reach me
  available   — Open to work?

Or just ask in plain English!`;
  }

  if (q === "clear") return "__CLEAR__";

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("hola")) {
    return "Hey there! I'm Abhi's portfolio assistant. Ask me anything about his skills, experience, or projects.";
  }

  if (q === "about" || q.includes("who is") || q.includes("who are") || q.includes("tell me about")) {
    return "Abhi Patel is a Full Stack Developer with 3+ years of experience. He builds modern web applications with clean code and bold design — from React frontends to Node.js/Java backends. Passionate about performance and great UX.";
  }

  if (q === "skills" || q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("know") || q.includes("language")) {
    return `Frontend:  React, Next.js, TypeScript, Tailwind CSS, Redux
Backend:   Node.js, Express, Java, Spring Boot, Python
Database:  MongoDB, PostgreSQL, MySQL, Redis, Prisma
DevOps:    AWS, Docker, Git, GitHub Actions
Tools:     GraphQL, Kafka, Jest, Postman, Supabase`;
  }

  if (q === "experience" || q.includes("work") || q.includes("job") || q.includes("career") || q.includes("history")) {
    return `2024 — Present  |  Full Stack Developer (Freelance)
2023 — 2024     |  Frontend Developer Intern (Tech Startup)
2022 — 2023     |  Junior Web Developer (Agency)
2021 — 2022     |  CS Student & Self-Learner (University)`;
  }

  if (q === "projects" || q.includes("built") || q.includes("project") || q.includes("portfolio") || q.includes("work")) {
    return `01. NexaUI Design System   — React component library (60+ components)
02. DevTrack Task Manager  — Kanban app with real-time sync
03. CryptoVision Analytics — Live crypto dashboard + WebSockets
04. FlowAPI REST Builder   — Visual API designer (exports OpenAPI)
05. PortfolioCraft          — No-code portfolio builder
06. AlgoViz DSA Visualizer — 20+ algorithm animations`;
  }

  if (q === "contact" || q.includes("email") || q.includes("reach") || q.includes("message") || q.includes("dm")) {
    return "Email: abhi@example.com\nGitHub: github.com/abhi\nLinkedIn: linkedin.com/in/abhipatel\n\nScroll down to the Contact section to get in touch!";
  }

  if (q === "available" || q.includes("hire") || q.includes("freelance") || q.includes("open to") || q.includes("available")) {
    return "Yes! Abhi is currently open to freelance projects and full-time opportunities. He works remotely and is available worldwide.";
  }

  if (q.includes("age") || q.includes("old")) {
    return "Abhi started coding in 2021 — so about 3+ years deep into the craft. Age is just a number; shipping products is what matters.";
  }

  if (q.includes("location") || q.includes("where") || q.includes("country") || q.includes("city")) {
    return "Abhi works remotely and is available for opportunities worldwide.";
  }

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("college")) {
    return "Computer Science background — studied data structures, algorithms, and OOP. Built real-world projects alongside coursework to bridge theory and practice.";
  }

  return `Sorry, I don't have an answer for "${query}" yet. RAG integration is coming soon — I'll be able to answer anything about Abhi then!\n\nType "help" for available queries.`;
}

export default function TerminalChat() {
  const [history, setHistory] = useState(BOOT_MESSAGES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const response = getResponse(cmd);

    if (response === "__CLEAR__") {
      setHistory(BOOT_MESSAGES);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: cmd },
      { type: "output", text: response },
    ]);
    setCmdHistory((prev) => [cmd, ...prev]);
    setCmdIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    }
  };

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
        </div>
        <span className="terminal-title">C:\Portfolio\Abhi — cmd.exe</span>
        <span className="terminal-titlebar-spacer" />
      </div>

      <div className="terminal-body" ref={bodyRef}>
        {history.map((item, i) => {
          if (item.type === "system") {
            return (
              <div key={i} className="terminal-system-line">
                <span className="terminal-sys-prefix">Microsoft Windows [Portfolio OS]</span>
                {i === 0 && <br />}
                {item.text}
              </div>
            );
          }
          if (item.type === "divider") {
            return <div key={i} className="terminal-divider" />;
          }
          if (item.type === "input") {
            return (
              <div key={i} className="terminal-input-line">
                <span className="terminal-prompt-label">C:\Portfolio&gt;</span>
                <span className="terminal-cmd-text">{item.text}</span>
              </div>
            );
          }
          if (item.type === "output") {
            return (
              <div key={i} className="terminal-output-line">
                <pre>{item.text}</pre>
              </div>
            );
          }
          return null;
        })}
      </div>

      <form className="terminal-input-row" onSubmit={handleSubmit}>
        <span className="terminal-prompt-label">C:\Portfolio&gt;</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}
