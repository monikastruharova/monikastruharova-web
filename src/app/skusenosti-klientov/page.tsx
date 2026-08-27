import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialsBrowser } from "@/components/TestimonialsBrowser";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Skúsenosti klientov",
  description:
    "Skutočné príbehy ľudí, ktorí nabrali odvahu pozrieť sa do svojho vnútra — skúsenosti klientov s terapiou Cesta, harmonizáciou čakier, ženskými kruhmi a ďalšími sedeniami.",
  alternates: { canonical: "/skusenosti-klientov" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl text-ink md:text-5xl">Skúsenosti klientov</h1>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Nič nemá väčšiu váhu ako skutočné príbehy ľudí, ktorí nabrali odvahu pozrieť sa do
              svojho vnútra.
            </p>
            <p>
              Prečítaj si skúsenosti tých, ktorí už vykročili na cestu transformácie a začali
              meniť svoj život.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          <TestimonialsBrowser testimonials={testimonials} />
        </Container>
      </section>

      {/*
        TODO (sekcia 12): preniesť aj staršie referencie zo starého webu
        (Terapia Cesta a referencie o Ceste Dvojplameňa z pôvodnej domovskej
        stránky) — plný text nebol súčasťou dodaných podkladov, treba doplniť.
      */}

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Chceš napísať svoj vlastný príbeh transformácie?"
            ctaLabel="Chcem sa objednať na sedenie"
            ctaHref={siteConfig.facebook}
          />
        </Container>
      </section>
    </>
  );
}
