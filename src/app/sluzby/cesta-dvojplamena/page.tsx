import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonialsFor } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Cesta Dvojplameňa",
  description:
    "Stretnutie s Dvojplameňom prebúdza tvoju najčistejšiu podstatu. Sprevádzam ťa vedomým procesom odpútania sa — od prebudenia cez zrkadlenie až po vnútornú slobodu.",
  alternates: { canonical: "/sluzby/cesta-dvojplamena" },
};

const phases = [
  {
    title: "Prvé stretnutie — Prebudenie",
    text: `Moment, kedy sa vaše oči nájdu a ty zažiješ ten, až nadpozemský pocit skutočného, posvätného Domova. Akoby ste sa poznali už celé veky. Je to okamžitá, magnetická príťažlivosť a ty vieš, že od tejto sekundy už tvoj život nikdy nebude rovnaký. Vesmír ti na chvíľu ukáže záblesk bezpodmienečnej lásky, aby prebudil tvoju zaspatú dušu.`,
  },
  {
    title: "Intenzívne zrkadlenie",
    text: `Po prvotnej eufórii prichádza náraz. Dvojplameň ti začne nevedome ukazovať tvoje najhlbšie tiene, zranenia z minulosti a bloky, ktoré pred svetom úspešne ukrývaš.`,
  },
  {
    title: "Útek a prenasledovanie / Runner & chaser",
    text: `Jeden z partnerov, paralyzovaný silou a intenzitou tohto prepojenia, začne inštinktívne utekať a uzatvára sa. Druhý zostáva v šoku, cíti nesmiernu prázdnotu a snaží sa všetko zachrániť.`,
  },
  {
    title: "Oddelenie / Separácia",
    text: `Moment, kedy sa vaše cesty bolestivo, ale definitívne rozídu. Bytostne cítiš, že bez svojho Dvojplameňa nedokážeš dýchať, a tvoja myseľ dookola hľadá odpovede.

To, čo vnímaš ako stratu, ktorá ťa vnútorne trhá na kusy, je však v skutočnosti ten najväčší duchovný dar.

Dvojplameň musel z tvojho života odísť. Musel sa úplne odpojiť, aby ťa naučil tú najdôležitejšiu lekciu: nájsť cestu k sebe a zároveň sa zbaviť závislosti na iných.

Až v posvätnom priestore vlastnej prítomnosti, kedy prestaneš hľadať záchranu a potvrdenie vonku, dokážeš premeniť strach na vnútornú slobodu. Vtedy pochopíš, že tá najväčšia sila, prijatie a láska nevyviera z prítomnosti iného človeka, ale z tvojho vlastného srdca. A staneš sa jediným pevným stredom svojho vesmíru.`,
  },
  {
    title: "Zjednotenie",
    text: `Cieľom tejto záverečnej fázy nie je nevyhnutne zjednotenie dvoch ľudí, Dvojplameňov, vo fyzickom svete, hoci sa tak veľakrát stáva.

Tomuto vonkajšiemu spojeniu však predchádza zjednotenie všetkých rozbitých fragmentov tvojej vlastnej duše. V cieli si vtedy, keď dosiahneš stav úplnej vnútornej neutrality, autentickej celistvosti a bezpodmienečnej lásky.

Je to ten moment, kedy sa obzrieš späť a už necítiš bolesť, hnev ani zúfalú túžbu s tým druhým byť. Tvoje šťastie už nezávisí od prítomnosti tvojho Dvojplameňa. Praješ mu v duchu všetko dobré a tvoje srdce ostáva plne zakotvené v tvojej bytosti. A každá tvoja bunka vie, že všetko je tak, ako má byť. Toto je tá pravá posvätná sloboda.`,
  },
];

export default function CestaDvojplamenaPage() {
  const reviews = testimonialsFor("cesta-dvojplamena", 2);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Cesta Dvojplameňa
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Stretnutie s Dvojplameňom nie je klasickým romantickým príbehom z rozprávok. Je to
              vzbĺknutie pradávneho spaľujúceho transformačného ohňa. Je to moment, kedy do tvojho
              života vstúpi pravda v podobe človeka, ktorý ti nastaví dokonalé zrkadlo, ktoré
              nekompromisne vyplaví na povrch všetky tvoje potlačené strachy, zranenia a hlboko
              zakorenené nefunkčné vzorce správania.
            </p>
            <p>
              Toto intenzívne spojenie neprichádza preto, aby ťa naplnilo, alebo zachránilo.
              Prichádza preto, aby rozbilo tvoje staré brnenia, obranné mechanizmy a ilúzie, v
              ktorých je tvoj život iba bezpečným prežívaním v ochrannej ulite.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Tento proces má svoje zákonitosti a málokto sa vyhne jeho vývojovým fázam. Možno sa
            práve teraz aj ty nachádzaš v jednej z nich:
          </p>

          <div className="mt-8 space-y-6">
            {phases.map((phase, i) => (
              <div key={phase.title} className="rounded-[1.75rem] border border-sand bg-white/50 p-6 md:p-8">
                <p className="text-xs font-semibold tracking-wide text-sage-dark uppercase">
                  Fáza {i + 1}
                </p>
                <h2 className="mt-1 font-serif text-xl text-ink md:text-2xl">{phase.title}</h2>
                <p className="mt-3 space-y-3 text-sm leading-relaxed whitespace-pre-line text-ink-soft md:text-base">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
          <p>
            Ja sama som celým týmto procesom prešla. Od magického prvého stretnutia, cez neustále
            vstávanie z popola, až po hlboké emocionálne oslobodenie. Viem, aké je plakať od
            úplného vyčerpania, ale poznám aj chvíle dojatia a vďačnosti, keď ochranné múry padnú,
            spojíš sa so sebou a tvoja duša víťazne zakričí: „Ja žijem, už nielen prežívam! Naozaj
            žijem a stojím vo svojej vlastnej sile.&rdquo;
          </p>
          <p>Tento transformačný oheň nemusíš zvládať osamote, v tme a chaose.</p>
          <p>
            Ako terapeutka ťa pomocou hlbokej terapie Cesta a energetickej harmonizácie čakier
            bezpečne prevediem vedomým procesom odpútania sa.
          </p>
          <ul className="space-y-3">
            {[
              "Spoločne presvetlíme temné zákutia tvojej duše.",
              "Uvoľníme tvoju citovú závislosť a lipnutie na druhom človeku.",
              "Vyliečime staré zranenia, ktoré ti Dvojplameň prišiel zrkadliť.",
              "Premeníme tvoju bolesť na vnútornú slobodu, samostatnosť a kráľovskú silu.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                {item}
              </li>
            ))}
          </ul>

          <blockquote className="rounded-[1.75rem] bg-sage/10 p-6 font-serif text-lg text-ink italic md:text-xl">
            „Cieľom cesty Dvojplameňa nie je partnerstvo za každú cenu. Cieľom je tvoje vlastné
            prebudenie a všeobjímajúca láska.&rdquo;
          </blockquote>

          <p className="font-medium text-ink">
            Máš odvahu premeniť tento oheň na svoju najväčšiu silu?
          </p>
          <p>
            Ak cítiš, že nastal čas prestať len prežívať a chceš začať skutočne žiť, prijmi moje
            pozvanie na stretnutie.
          </p>
        </Container>
      </section>

      {reviews.length ? (
        <section className="py-10 md:py-16">
          <Container className="mx-auto max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {reviews.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/skusenosti-klientov"
                className="text-sm font-semibold text-sage-dark underline underline-offset-4"
              >
                Viac skúseností klientov
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            tone="sage"
            heading="Prijmi moje pozvanie na stretnutie"
            body="Napíš mi o svojej ceste Dvojplameňa — spoločne nájdeme cestu k tvojej vnútornej slobode."
            ctaLabel="Chcem sa objednať na sedenie"
            ctaHref="/kontakt"
          />
        </Container>
      </section>
    </>
  );
}
