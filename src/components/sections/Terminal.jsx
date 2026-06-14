import TerminalChat from "../ui/TerminalChat";

export default function Terminal() {
  return (
    <section id="terminal">
      <div className="container">
        <div className="section-tag">AMA</div>
        <h2 className="section-title">Ask Me Anything</h2>
        <p className="section-subtitle">
          Query my portfolio assistant. RAG-powered answers coming soon — for now,
          it knows the essentials.
        </p>

        <div className="terminal-wrapper">
          <TerminalChat />
        </div>
      </div>
    </section>
  );
}
