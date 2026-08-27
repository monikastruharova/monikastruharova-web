import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Terapia Cesta, harmonizácia čakier, ženské kruhy Esencia Bohyne a intuitívny tanec — vyber si formu transformácie, ktorá ti dnes rezonuje najviac.",
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
