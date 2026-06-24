type Props = { from: string; to: string; flip?: boolean };

export function WaveDivider({ from, to, flip = false }: Props) {
  return (
    <div style={{ backgroundColor: from, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        width="100%"
        height="70"
        style={{ display: 'block', transform: flip ? 'scaleX(-1)' : undefined }}
      >
        <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill={to} />
      </svg>
    </div>
  );
}
