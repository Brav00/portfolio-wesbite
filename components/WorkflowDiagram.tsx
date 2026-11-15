import type { WorkflowStep } from '@/lib/types';
import { GTM } from '@/lib/colors';

type Props = {
  steps: WorkflowStep[];
};

export function WorkflowDiagram({ steps }: Props) {
  return (
    <div
      className="mb-10 rounded-2xl p-5 md:p-8"
      style={{ backgroundColor: GTM.sand }}
    >
      {steps.map((step, i) => (
        <div key={step.title}>
          <div
            className={`group rounded-xl p-5 flex items-center gap-4 transition-all duration-200 ${
              step.isResult
                ? 'shadow-md'
                : 'bg-white border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-0.5'
            }`}
            style={step.isResult ? { backgroundColor: GTM.charcoal } : undefined}
          >
            {/* Step marker */}
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm"
              style={
                step.isResult
                  ? { backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }
                  : { backgroundColor: GTM.tag, color: GTM.copperInk }
              }
            >
              {step.isResult ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                i + 1
              )}
            </div>

            <div>
              <p
                className="font-gtm-heading tracking-[-0.01em] font-semibold mb-0.5"
                style={{ color: step.isResult ? '#fff' : GTM.charcoal }}
              >
                {step.title}
              </p>
              <p
                className="text-sm"
                style={{ color: step.isResult ? 'rgba(255,255,255,0.7)' : undefined }}
              >
                <span className={step.isResult ? '' : 'text-secondary'}>{step.description}</span>
              </p>
            </div>
          </div>

          {i < steps.length - 1 && (
            <div className="flex justify-start pl-[34px] py-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke={GTM.copper}
                strokeOpacity={0.35}
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
