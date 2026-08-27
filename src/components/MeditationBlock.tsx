/**
 * Blok s vedenou meditáciou — text + prehrávač.
 *
 * `src` zatiaľ nie je k dispozícii (žiadny audio/video súbor ani embed
 * odkaz nebol dodaný), preto sa vždy vykresľuje jasne označený placeholder
 * "slot" namiesto reálneho prehrávača. Akonáhle bude k dispozícii súbor
 * (mp3/mp4) alebo embed odkaz (napr. YouTube, SoundCloud), stačí doplniť
 * `src` a nahradiť placeholder skutočným <audio>/<iframe> prehrávačom.
 */
export function MeditationBlock({
  eyebrow = "Darček pre teba",
  title,
  text,
  tone = "clay",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  tone?: "clay" | "sage" | "gold";
}) {
  const toneClasses: Record<string, string> = {
    clay: "border-clay/30 bg-clay/5",
    sage: "border-sage/30 bg-sage/10",
    gold: "border-gold/40 bg-gold/10",
  };
  const eyebrowClasses: Record<string, string> = {
    clay: "text-clay-dark",
    sage: "text-sage-dark",
    gold: "text-clay-dark",
  };

  return (
    <div className={`rounded-[2rem] border p-8 md:p-10 ${toneClasses[tone]}`}>
      <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${eyebrowClasses[tone]}`}>
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl text-ink md:text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed whitespace-pre-line text-ink-soft md:text-lg">
        {text}
      </p>

      {/* TODO: nahradiť skutočným audio/video prehrávačom, keď bude k dispozícii súbor/odkaz. */}
      <div className="mt-6 flex max-w-md items-center gap-4 rounded-2xl border border-dashed border-sand bg-white/60 p-4">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm"
        >
          ▶
        </span>
        <p className="text-xs leading-snug text-ink-soft">
          {title} — audio/video meditácia čaká na nahratie.
        </p>
      </div>
    </div>
  );
}
