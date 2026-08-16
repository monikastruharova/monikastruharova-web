"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ms-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Cookie súhlas žije v localStorage (prehliadač), nie v React stave, takže
    // ho nemožno zistiť počas renderu na serveri — server aj prvý klientský
    // render preto zámerne vykreslia "skryté" a lišta sa zobrazí až tu, po
    // hydratácii. Ide o legitímne použitie efektu (synchronizácia s externým
    // browser API), preto zámerne potláčam tento lint pre tento jeden riadok.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  function decide(value: "all" | "essential") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    // TODO: keď pribudnú analytické/marketingové skripty (napr. Meta Pixel,
    // GA4), naviaž ich načítanie na hodnotu "all" z tohto rozhodnutia.
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[1.75rem] border border-sand bg-cream/95 p-6 shadow-lg backdrop-blur md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          Táto stránka používa cookies pre základné fungovanie a — iba s tvojím súhlasom — aj na
          zlepšovanie webu. Viac v{" "}
          <Link href="/ochrana-osobnych-udajov" className="underline underline-offset-2">
            zásadách ochrany osobných údajov
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-clay-dark"
          >
            Odmietnuť nepodstatné
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="rounded-full border border-sand px-5 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-cream-dark"
          >
            Prijať všetko
          </button>
        </div>
      </div>
    </div>
  );
}
