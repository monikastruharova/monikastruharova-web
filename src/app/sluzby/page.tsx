import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { services, dvojplamenTeaser } from "@/data/services";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Terapia Cesta, harmonizácia čakier, ženské kruhy Esencia Bohyne, intuitívny tanec a Cesta Dvojplameňa — vyber si formu transformácie, ktorá ti dnes rezonuje najviac.",
  alternates: { canonical: "/sluzby" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl text-ink md:text-5xl">Duša si vždy pamätá cestu domov.</h1>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Niekedy však potrebuje hlbokú individuálnu terapiu, inokedy liečivú silu ženského
              kruhu, či slobodný výbuch na tanečnom parkete.
            </p>
            <p>Vyber si formu, ktorá tebou dnes rezonuje najviac.</p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <Link
              href={dvojplamenTeaser.href}
              className="group flex flex-col justify-between rounded-[2rem] border border-sage/40 bg-sage/10 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-serif text-xl text-ink md:text-2xl">{dvojplamenTeaser.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                  {dvojplamenTeaser.teaser}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-sage-dark transition group-hover:gap-2">
                  Zistiť viac <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
