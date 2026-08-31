import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov a používania cookies na webe monikastruharova.sk.",
  alternates: { canonical: "/ochrana-osobnych-udajov" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl text-ink md:text-4xl">Ochrana osobných údajov</h1>

        <div className="mt-8 rounded-2xl border border-dashed border-sand bg-cream-dark/40 p-6 text-sm text-ink-soft">
          <p className="font-semibold text-ink">
            TODO: táto stránka je pripravená ako miesto pre finálne GDPR zásady.
          </p>
          <p className="mt-2">
            Nešlo o súčasť dodaných textových podkladov — text nižšie je iba orientačná kostra.
            Pred spustením do produkcie ho treba doplniť/skontrolovať (ideálne s právnym
            poradenstvom), najmä v časti o príjemcovi údajov z kontaktného formulára (pozri
            sekciu 14, bod 3 zadania).
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
          <div>
            <h2 className="font-serif text-xl text-ink">Prevádzkovateľ</h2>
            <p className="mt-2">
              Monika Struhárová, prevádzkovateľka webu {siteConfig.domain}. Kontakt:{" "}
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="underline">
                Facebook — Cestou srdca
              </a>{" "}
              (TODO: doplniť fakturačné/IČO údaje, ak sú relevantné).
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">Aké údaje spracúvame</h2>
            <p className="mt-2">
              Údaje, ktoré nám dobrovoľne poskytneš pri komunikácii na Facebooku (meno/profil,
              obsah správy) za účelom vybavenia tvojej požiadavky. Spracovanie správ prostredníctvom
              Facebook Messengeru sa riadi aj zásadami ochrany súkromia spoločnosti Meta.
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
        </div>
      </Container>
    </section>
  );
}
