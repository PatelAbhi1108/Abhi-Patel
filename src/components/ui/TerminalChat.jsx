import { useState, useRef, useEffect } from "react";

const BOOT_MESSAGES = [
  { type: "system", text: "Abhi's Portfolio Assistant v2.0.0 (RAG-powered)" },
  { type: "system", text: 'Ask me anything about Abhi — skills, projects, experience, or type "help".' },
  { type: "divider" },
];

const HELP_TEXT = `Available topics:
  about       — Who is Abhi?
  skills      — Tech stack & tools
  experience  — Work history
  projects    — Things he's built
  contact     — How to reach him
  available   — Open to work?

Or just ask in plain English — I'm AI-powered!`;

async function fetchAIResponse(message, conversationHistory) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, conversationHistory }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? "Request failed");
  }

  const data = await res.json();
  return data.response;
}

export default function TerminalChat() {
  const [history, setHistory] = useState(BOOT_MESSAGES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  // Conversation history for multi-turn context sent to the API
  const [conversationHistory, setConversationHistory] = useState([]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd || isLoading) return;

    // Local commands — no API call needed
    if (cmd.toLowerCase() === "clear") {
      setHistory(BOOT_MESSAGES);
      setConversationHistory([]);
      setInput("");
      return;
    }

    if (cmd.toLowerCase() === "help") {
      setHistory((prev) => [
        ...prev,
        { type: "input", text: cmd },
        { type: "output", text: HELP_TEXT },
      ]);
      setCmdHistory((prev) => [cmd, ...prev]);
      setCmdIndex(-1);
      setInput("");
      return;
    }

    // Show user input + loading indicator immediately
    setHistory((prev) => [
      ...prev,
      { type: "input", text: cmd },
      { type: "loading" },
    ]);
    setCmdHistory((prev) => [cmd, ...prev]);
    setCmdIndex(-1);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await fetchAIResponse(cmd, conversationHistory);

      // Update conversation history for multi-turn context
      setConversationHistory((prev) => [
        ...prev,
        { role: "user", content: cmd },
        { role: "assistant", content: aiResponse },
      ]);

      setHistory((prev) => [
        ...prev.filter((item) => item.type !== "loading"),
        { type: "output", text: aiResponse },
      ]);
    } catch (err) {
      setHistory((prev) => [
        ...prev.filter((item) => item.type !== "loading"),
        { type: "error", text: `Error: ${err.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
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
          if (item.type === "loading") {
            return (
              <div key={i} className="terminal-output-line">
                <pre className="terminal-loading">thinking...</pre>
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
          if (item.type === "error") {
            return (
              <div key={i} className="terminal-output-line terminal-error">
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
          placeholder={isLoading ? "waiting for response..." : "type a command..."}
          autoComplete="off"
          spellCheck={false}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
