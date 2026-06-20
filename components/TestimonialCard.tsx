type Props = {
  quote: string;
  attribution: string;
};

export function TestimonialCard({ quote, attribution }: Props) {
  return (
    <div className="bg-dark-block rounded-2xl px-8 py-12 md:px-16 md:py-16 text-center">
      <p className="font-serif text-white/90 text-xl md:text-2xl leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-white/50 text-sm">{attribution}</p>
    </div>
  );
}
