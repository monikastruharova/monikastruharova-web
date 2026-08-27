import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napíš mi na Facebooku a objednaj sa na terapiu Cesta, harmonizáciu čakier, ženský kruh alebo intuitívny tanec. Rada sa s tebou spojím a nájdeme tú správnu cestu.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-3xl text-ink md:text-4xl">Poďme sa spojiť</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
          Napíš mi pár slov o tom, čo práve prežívaš, alebo akú službu by si rada/rád vyskúšal/a.
          Najrýchlejšie sa so mnou spojíš na Facebooku — rada sa ti ozvem a spoločne nájdeme tú
          správnu cestu.
        </p>

        <div className="mt-8">
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-8 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-clay-dark"
          >
            Napísať mi na Facebooku <span aria-hidden>↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
