import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napíš mi a objednaj sa na terapiu Cesta, harmonizáciu čakier, ženský kruh alebo intuitívny tanec. Rada sa s tebou spojím a nájdeme tú správnu cestu.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-serif text-3xl text-ink md:text-4xl">Poďme sa spojiť</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Napíš mi pár slov o tom, čo práve prežívaš, alebo akú službu by si rada/rád vyskúšal.
            Ozvem sa ti čo najskôr a spoločne nájdeme tú správnu cestu.
          </p>

          <div className="mt-8 space-y-3 text-sm text-ink-soft">
            <p>
              {/* TODO: potvrdiť finálny kontaktný e-mail (sekcia 14, bod 3) */}
              E-mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline">
                {siteConfig.email}
              </a>
            </p>
            <p className="opacity-70">Telefón — TODO: doplniť</p>
            <p className="opacity-70">Facebook — TODO: doplniť odkaz</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sand bg-white/60 p-6 md:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
