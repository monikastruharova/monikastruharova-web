import Link from "next/link";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function CTABlock({
  eyebrow,
  heading,
  body,
  ctaLabel = "Chcem sa objednať na sedenie",
  ctaHref = "/kontakt",
  secondaryLabel,
  secondaryHref,
  tone = "clay",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: "clay" | "sage";
}) {
  const bg =
    tone === "sage"
      ? "bg-gradient-to-br from-sage-dark to-sage"
      : "bg-gradient-to-br from-clay-dark to-clay";

  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] ${bg} px-6 py-14 text-center text-cream md:px-16 md:py-20`}>
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/10"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.2em] text-cream/80 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-serif text-2xl leading-snug md:text-3xl">{heading}</h2>
        {body ? <p className="mt-4 text-sm leading-relaxed text-cream/90 md:text-base">{body}</p> : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaHref}
            target={isExternal(ctaHref) ? "_blank" : undefined}
            rel={isExternal(ctaHref) ? "noopener noreferrer" : undefined}
            className="rounded-full bg-cream px-7 py-3 text-sm font-semibold text-clay-dark shadow-sm transition hover:bg-white"
          >
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              target={isExternal(secondaryHref) ? "_blank" : undefined}
              rel={isExternal(secondaryHref) ? "noopener noreferrer" : undefined}
              className="rounded-full border border-cream/60 px-7 py-3 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
