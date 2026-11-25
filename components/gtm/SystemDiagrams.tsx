import type { ArchitectureStage, FlowColumn, FlowNode, Subsystem } from '@/lib/types';
import { GTM } from '@/lib/colors';

/* Diagrams for /playbooks/[slug], drawn as HTML in the charcoal + copper palette.
   Flows run left to right on desktop and top to bottom on mobile. */

function nodeStyle(kind: FlowNode['kind']): React.CSSProperties {
  switch (kind) {
    case 'decision':
      return { backgroundColor: GTM.tag, border: `1.5px dashed ${GTM.copper}` };
    case 'fail':
      return { backgroundColor: '#fbeeee', border: '1px solid rgba(163,45,45,0.25)' };
    case 'output':
      return { backgroundColor: GTM.charcoal, border: `1px solid ${GTM.charcoal}` };
    default:
      return { backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.07)' };
  }
}

function Node({ node }: { node: FlowNode }) {
  const dark = node.kind === 'output';
  const fail = node.kind === 'fail';
  return (
    <div className="rounded-xl px-3.5 py-3 shadow-sm w-full" style={nodeStyle(node.kind)}>
      {node.kind === 'decision' && (
        <p className="font-gtm-mono text-[10px] uppercase tracking-[0.12em] mb-1" style={{ color: GTM.copper }}>
          Gate
        </p>
      )}
      <p
        className="font-gtm-heading text-[13.5px] font-semibold leading-snug tracking-[-0.01em] [overflow-wrap:anywhere]"
        style={{ color: dark ? '#fff' : fail ? '#8a2a2a' : GTM.charcoal }}
      >
        {node.label}
      </p>
      {node.detail && (
        <p
          className="text-[12px] leading-snug mt-0.5"
          style={{ color: dark ? 'rgba(255,255,255,0.68)' : fail ? '#a34b4b' : '#888780' }}
        >
          {node.detail}
        </p>
      )}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex md:flex-col items-center justify-center gap-1 flex-shrink-0 py-1 md:py-0 md:px-1">
      <svg className="w-4 h-4 rotate-90 md:rotate-0" fill="none" stroke={GTM.copper} strokeOpacity={0.55} strokeWidth={2.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
      </svg>
      {label && (
        <span className="font-gtm-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: GTM.copperInk }}>
          {label}
        </span>
      )}
    </div>
  );
}

/** Linear flow with optional parallel columns and a failure branch drawn underneath. */
export function FlowDiagram({ flow, failBranch }: Pick<Subsystem, 'flow' | 'failBranch'>) {
  return (
    <div className="rounded-2xl p-4 md:p-6" style={{ backgroundColor: GTM.sand }}>
      <div className="flex flex-col md:flex-row md:items-stretch">
        {flow.map((col: FlowColumn, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center md:flex-1 min-w-0">
            {i > 0 && <Arrow label={col.edge} />}
            <div className="flex flex-col justify-center gap-2 md:flex-1 min-w-0">
              {col.nodes.map((node) => (
                <Node key={node.label} node={node} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {failBranch && (
        <div className="mt-4 pt-4 border-t border-dashed flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3" style={{ borderColor: 'rgba(168,90,20,0.3)' }}>
          <p className="font-gtm-mono text-[10.5px] uppercase tracking-[0.1em] text-secondary flex-shrink-0">
            {failBranch.from} → <span style={{ color: '#a34b4b' }}>{failBranch.label}</span>
          </p>
          <div className="sm:max-w-xs">
            <Node node={failBranch.node} />
          </div>
        </div>
      )}
    </div>
  );
}

/** Master architecture: numbered stage groups, the orchestrator pipeline listed in order. */
export function ArchitectureDiagram({ stages }: { stages: ArchitectureStage[] }) {
  return (
    <div className="rounded-2xl p-4 md:p-6" style={{ backgroundColor: GTM.sand }}>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {stages.map((stage, i) => (
          <div key={stage.title} className={`flex flex-col lg:flex-row lg:items-center min-w-0 ${stage.nodes.length > 3 ? 'lg:flex-[1.35]' : 'lg:flex-1'}`}>
            {i > 0 && <Arrow />}
            <div className="flex-1 min-w-0 rounded-xl border border-black/[0.06] bg-white/50 p-3 self-stretch flex flex-col">
              <p className="font-gtm-mono text-[10.5px] uppercase tracking-[0.1em] mb-3" style={{ color: GTM.copper }}>
                {String(i + 1).padStart(2, '0')} / {stage.title}
              </p>
              <div className="flex flex-col gap-2 flex-1 justify-start">
                {stage.nodes.map((node, j) => (
                  <div key={node.label}>
                    {/* Pipeline stages run in sequence; show a small connector between them */}
                    {j > 0 && stage.nodes.length > 3 && (
                      <div className="flex justify-center -mt-1 mb-1">
                        <svg className="w-3 h-3" fill="none" stroke={GTM.copper} strokeOpacity={0.45} strokeWidth={2.6} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                    <Node node={node} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
