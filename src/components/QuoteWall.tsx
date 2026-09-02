/**
 * "Stena citátov" — kratšie, neatribuované úryvky (bez mena autora), ktoré
 * nesedia do formátu TestimonialCard (ten očakáva titulok aj meno). Zobrazí
 * ich ako mozaiku jemných kartičiek.
 */
export function QuoteWall({ quotes }: { quotes: string[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
      {quotes.map((quote) => (
        <figure
          key={quote}
          className="rounded-[1.5rem] border border-sand bg-white/50 p-5"
        >
          <span aria-hidden className="font-serif text-2xl text-sage/60">
            “
          </span>
          <blockquote className="-mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
            {quote}
          </blockquote>
        </figure>
      ))}
    </div>
  );
}
