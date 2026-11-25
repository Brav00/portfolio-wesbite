import { Fragment } from 'react';
import { GTM } from '@/lib/colors';

/** Renders a string with `inline code` and **bold** marks. Used for the technical copy on /playbooks. */
export function RichText({ text, dark = false }: { text: string; dark?: boolean }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={i}
              className="font-gtm-mono text-[0.86em] px-1.5 py-0.5 rounded-md break-words"
              style={
                dark
                  ? { backgroundColor: 'rgba(255,255,255,0.1)', color: GTM.copperLight }
                  : { backgroundColor: GTM.tag, color: GTM.copperInk }
              }
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className={`font-semibold ${dark ? 'text-white' : 'text-primary'}`}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
