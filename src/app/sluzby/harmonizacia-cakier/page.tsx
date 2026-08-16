import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ChakraSymptomGrid } from "@/components/ChakraSymptomGrid";
import { testimonialsFor } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Harmonizácia čakier",
  description:
    "Jemný, no hlboko uvoľňujúci proces harmonizácie čakier — očistíme tvoju vnútornú rieku od balvanov, aby mohla životná energia opäť slobodne prúdiť.",
  alternates: { canonical: "/sluzby/harmonizacia-cakier" },
};

export default function HarmonizaciaCakierPage() {
  const reviews = testimonialsFor("harmonizacia-cakier", 2);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
            Harmónia, ktorú pocítiš v každej bunke.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Naše telo nie je len súbor svalov a kostí. Je to dokonalý systém, ktorého súčasťou
              sú aj čakry — energetické centrá ovplyvňujúce tvoju rovnováhu od fyzickej vitality,
              až po duševný a mentálny pokoj.
            </p>
            <p>
              Keď sú čakry čisté a prechodné, životom kráčaš s pocitom stability a sily. Keď však
              tvoje čakry kvôli stresu, strachom, alebo starým zraneniam zoslabnú, začnú sa ti v
              živote objavovať potiaže.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Ako spoznáš, že tvoje energetické centrá potrebujú upratať?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Nemusíš byť expertom na energie, a predsa si všimneš, že niečo nie je v poriadku. Telo
            a emócie ti vysielajú jasné signály.
          </p>
          <div className="mt-8">
            <ChakraSymptomGrid />
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Ako tvoj energetický systém funguje?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>Predstav si svoje čakry ako sedem po sebe idúcich jazierok na jednej rieke.</p>
            <p>
              Ak je rieka čistá, voda — tvoja životná energia plynule preteká z jedného jazierka do
              druhého. Cítiš sa zdravo, tvoja myseľ je jasná a tvoje emócie sú v rovnováhe.
            </p>
            <p>
              Čo sa však stane, ak do tej rieky padne balvan v podobe dlhodobého stresu, hádky v
              rodine, potlačeného hnevu, alebo nevypovedaného smútku?
            </p>
            <p>
              Voda sa v jednom jazierku zanesie, jej tok sa spomalí a do ďalších jazierok už
              namiesto silného prúdu len presakuje.
            </p>
            <p>
              Podobne je to aj s tvojou životnou energiou. Jej tok v tele nezanikne, ale stráca
              svoju silu a prirodzenú dynamiku.
            </p>
            <p>
              Harmonizácia čakier je jemný, ale hlboko uvoľňujúci proces, pri ktorom tvoju
              vnútornú rieku očistíme od balvanov a starých nánosov, aby mohla tvoja životná
              energia opäť slobodne prúdiť.
            </p>
          </div>

          <h2 className="pt-4 font-serif text-2xl text-ink md:text-3xl">
            Čo zažiješ, keď sa tvoje čakry dostanú do rovnováhy?
          </h2>
          <ul className="space-y-3">
            {[
              "Hlboké uzemnenie a stabilitu. Budeš pevne stáť na svojich nohách a zvládneš všetko, čo ti život prinesie.",
              "Zdravé hranice a osobnú silu. Unesieš svoju vlastnú pravdu s ľahkosťou a bez pocitu viny.",
              "Čistú myseľ a nadhľad. Zbavíš sa mentálneho tlaku a znova sa spojíš so svojou intuíciou.",
              "Príval novej vitality. Tvoje telo odhodí balvan napätia a vráti sa ti stratená životná sila.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-soft md:text-lg">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {reviews.length ? (
        <section className="py-10 md:py-16">
          <Container className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Čo hovoria tí, ktorí Harmonizáciu čakier už zažili?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reviews.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/skusenosti-klientov"
                className="text-sm font-semibold text-clay-dark underline underline-offset-4"
              >
                Viac skúseností klientov
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-sand bg-white/60 p-8 md:p-10">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Znovunájdenie vnútornej stability a vitality
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Ponúkam ti sedenie zamerané na očistu tvojho energetického systému a hlboké
              uvoľnenie, ktoré trvá približne 60 minút.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream-dark/60 p-5">
                <p className="text-sm text-ink-soft">Individuálne sedenie</p>
                <p className="mt-1 font-serif text-2xl text-clay-dark">40 €</p>
              </div>
              <div className="rounded-2xl bg-cream-dark/60 p-5">
                <p className="text-sm text-ink-soft">Skupinové sedenie</p>
                <p className="mt-1 font-serif text-2xl text-clay-dark">25 €</p>
              </div>
            </div>
            {/* TODO (sekcia 14, bod 2): potvrdiť aktuálne ceny — starý cenník uvádzal 25 €. */}
          </div>
        </Container>
      </section>

      <section className="py-6 md:py-10">
        <Container className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-ink-soft">Skupinové harmonizácie organizujem príležitostne.</p>
          {/* TODO: doplniť reálny odkaz na FB udalosti */}
          <Link
            href={siteConfig.facebookEvents || "#"}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-clay-dark"
          >
            Aktuálne podujatia na Facebooku <span aria-hidden>↗</span>
          </Link>
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Chcem harmonizovať svoju energiu"
            ctaLabel="Chcem harmonizovať svoju energiu"
            ctaHref="/kontakt"
          />
        </Container>
      </section>
    </>
  );
}
