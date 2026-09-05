import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov a používania cookies na webe monikastruharova.sk.",
  alternates: { canonical: "/ochrana-osobnych-udajov" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl text-ink md:text-4xl">Ochrana osobných údajov</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
          <div>
            <h2 className="font-serif text-xl text-ink">Prevádzkovateľ</h2>
            <p className="mt-2">
              Monika Struhárová, prevádzkovateľka webu {siteConfig.domain}. Kompletné kontaktné
              údaje (telefón, WhatsApp, Facebook Messenger, e-mail) nájdeš na stránke{" "}
              <Link href="/kontakt" className="underline">
                Kontakt
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">Aké údaje spracúvame</h2>
            <p className="mt-2">
              Údaje, ktoré nám dobrovoľne poskytneš pri komunikácii (telefonicky, cez WhatsApp,
              Facebook Messenger, e-mailom, prípadne inak) — napr. meno, kontakt a obsah správy —
              za účelom vybavenia tvojej požiadavky. Spracovanie správ prostredníctvom Facebook
              Messengeru sa riadi aj zásadami ochrany súkromia spoločnosti Meta.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">Cookies</h2>
            <p className="mt-2">
              Web používa nevyhnutné cookies pre základné fungovanie. Až po tvojom súhlase môžu
              pribudnúť aj analytické/marketingové cookies (napr. štatistika návštevnosti).
              Súhlas môžeš kedykoľvek zmeniť vymazaním údajov prehliadača pre túto stránku.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">Vylúčenie zodpovednosti</h2>
            <p className="mt-2">
              Obsah tohto webu (vrátane blogu, meditácií a opisov jednotlivých služieb) slúži len
              na informačné a inšpiratívne účely. Nejde o lekársku, psychologickú ani inú odbornú
              diagnostiku či liečbu a nenahrádza starostlivosť lekára, psychológa alebo
              psychiatra. Ak prechádzaš akútnou zdravotnou alebo psychickou krízou, vyhľadaj
              prosím odbornú pomoc alebo linku pomoci. Účasť na sedeniach, seminároch či
              cvičeniach je dobrovoľná a každý koná na vlastnú zodpovednosť; výsledky a skúsenosti
              sú individuálne a nedajú sa garantovať.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
