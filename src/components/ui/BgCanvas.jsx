export default function BgCanvas() {
  return (
    <div className="bg-canvas">
      <svg className="circuit-bg" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path className="circuit-path base" d="M50 200 L300 200 L380 280 L650 280 L720 350 L1050 350" />
        <path className="circuit-path glow"  d="M50 200 L300 200 L380 280 L650 280 L720 350 L1050 350" />

        <path className="circuit-path base"   d="M1150 140 L900 140 L820 220 L600 220 L520 300 L250 300" />
        <path className="circuit-path glow delay1" d="M1150 140 L900 140 L820 220 L600 220 L520 300 L250 300" />

        <path className="circuit-path base"   d="M100 520 L350 520 L420 460 L650 460" />
        <path className="circuit-path glow delay2" d="M100 520 L350 520 L420 460 L650 460" />

        <g className="network">
          <circle cx="950" cy="620" r="3" />
          <circle cx="1020" cy="670" r="3" />
          <circle cx="1080" cy="620" r="3" />
          <circle cx="990"  cy="720" r="3" />
          <line x1="950"  y1="620" x2="1020" y2="670" />
          <line x1="1020" y1="670" x2="1080" y2="620" />
          <line x1="1080" y1="620" x2="950"  y2="620" />
          <line x1="950"  y1="620" x2="990"  y2="720" />
          <line x1="1080" y1="620" x2="990"  y2="720" />
        </g>
      </svg>
      <div className="bg-grid" />
    </div>
  );
}
