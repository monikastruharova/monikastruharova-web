/**
 * Zodpovedne vloží YouTube video priamo na stránku (nie iba odkaz preč z
 * webu) — stačí zadať `url` (plná YouTube adresa alebo len ID videa).
 *
 * Kým `url` nie je k dispozícii, vykreslí jasne označený placeholder "slot",
 * aby bolo hneď vidieť, kam video neskôr príde.
 */

function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
      if (parsed.pathname.startsWith("/embed/")) return parsed.pathname.split("/embed/")[1] || null;
      if (parsed.pathname.startsWith("/shorts/")) return parsed.pathname.split("/shorts/")[1] || null;
    }
    return null;
  } catch {
    // Nie je platná URL — berieme to rovno ako holé video ID.
    return /^[a-zA-Z0-9_-]{6,}$/.test(url) ? url : null;
  }
}

export function YouTubeEmbed({
  url,
  title,
  placeholderLabel,
}: {
  url?: string;
  title: string;
  placeholderLabel?: string;
}) {
  const videoId = url ? extractVideoId(url) : null;

  if (!videoId) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-sand bg-cream-dark/50 p-4 text-center">
        <span aria-hidden className="text-2xl">
          ▶
        </span>
        <p className="text-sm text-ink-soft">{placeholderLabel ?? `Video „${title}“ čaká na doplnenie.`}</p>
      </div>
    );
  }

  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-sand shadow-sm">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
