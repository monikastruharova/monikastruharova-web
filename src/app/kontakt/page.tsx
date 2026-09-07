import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Telefón, WhatsApp, Facebook alebo e-mail — vyber si spôsob, akým sa mi ozveš, a objednaj sa na terapiu Cesta, harmonizáciu čakier, ženský kruh alebo intuitívny tanec.",
  alternates: { canonical: "/kontakt" },
};

const channels = [
  {
    label: "Telefón",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "WhatsApp",
    value: "Napísať cez WhatsApp",
    href: siteConfig.whatsapp,
  },
  {
    label: "Facebook",
    value: "Napísať na Facebooku",
    href: siteConfig.facebook,
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function ContactPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-3xl text-ink md:text-4xl">Poďme sa spojiť</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
          Napíš mi pár slov o tom, čo práve prežívaš, alebo akú službu by si rada/rád vyskúšal/a.
          Vyber si spôsob, ktorý ti vyhovuje najviac — ozvem sa ti čo najskôr.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-sand bg-white/60 px-6 py-6 transition hover:border-clay hover:bg-cream-dark/60"
            >
              <span className="text-xs font-semibold tracking-wide text-sage-dark uppercase">
                {channel.label}
              </span>
              <span className="font-serif text-lg text-ink">{channel.value}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
