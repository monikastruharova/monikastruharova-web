/**
 * Vizuálny "slot" pre fotografiu, ktorá ešte nebola dodaná.
 *
 * Zámerne NEJDE o vygenerovaný obrázok — je to jasne označené miesto,
 * kam sa neskôr vloží skutočná fotografia od Moniky (portrét, certifikát,
 * foto s Dalajlámou a pod.). Pred nasadením do produkcie nahraď
 * komponentom <Image> s reálnym súborom.
 */
export function PlaceholderImage({
  label,
  shape = "blob",
  tone = "clay",
  className = "",
}: {
  label: string;
  shape?: "blob" | "blob-alt" | "rounded";
  tone?: "clay" | "sage" | "sand" | "gold";
  className?: string;
}) {
  const shapeClass =
    shape === "rounded" ? "rounded-3xl" : shape === "blob-alt" ? "blob-alt" : "blob";

  const toneGradient: Record<string, string> = {
    clay: "linear-gradient(135deg, var(--color-clay-light), var(--color-clay))",
    sage: "linear-gradient(135deg, #cdd6bd, var(--color-sage))",
    sand: "linear-gradient(135deg, var(--color-cream-dark), var(--color-sand))",
    gold: "linear-gradient(135deg, #ecd9ad, var(--color-gold))",
  };

  return (
    <div
      className={`flex aspect-[4/5] w-full items-center justify-center overflow-hidden ${shapeClass} ${className}`}
      style={{ background: toneGradient[tone] }}
      role="img"
      aria-label={label}
    >
      <div className="max-w-[70%] text-center">
        <p className="font-serif text-sm text-ink/70 md:text-base">📷</p>
        <p className="mt-2 text-xs font-medium tracking-wide text-ink/70 uppercase md:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}
