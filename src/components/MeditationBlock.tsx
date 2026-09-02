import { YouTubeEmbed } from "./YouTubeEmbed";

/**
 * Blok s vedenou meditáciou — text + prehrávač.
 *
 * Ak je `videoUrl` k dispozícii, vloží sa priamo prehrateľné YouTube video
 * (cez YouTubeEmbed). Bez neho sa vykresľuje jasne označený placeholder
 * "slot", aby bolo vidieť, kam video neskôr príde.
 */
export function MeditationBlock({
  eyebrow = "Darček pre teba",
  title,
  text,
  tone = "clay",
  videoUrl,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  tone?: "clay" | "sage" | "gold";
  videoUrl?: string;
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

      <div className="mt-6 max-w-md">
        <YouTubeEmbed url={videoUrl} title={title} placeholderLabel={`${title} — video čaká na nahratie.`} />
      </div>
    </div>
  );
}
