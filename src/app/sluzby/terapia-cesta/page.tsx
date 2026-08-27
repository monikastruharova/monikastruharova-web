import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { testimonialsFor } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terapia Cesta",
  description:
    "Terapia Cesta (The Journey) podľa Brandon Bays — hlboký transformačný proces, ktorý ťa privedie priamo k prameňu tvojich ťažkostí, až k bunkovej pamäti starých zranení.",
  alternates: { canonical: "/sluzby/terapia-cesta" },
};

const faqItems = [
  {
    question: "Ako prebieha terapia Cesta?",
    answer: `Terapia Cesta je hlboký a nesmierne bezpečný rozhovor v tichom a chránenom prostredí, kde ťa nikto neposudzuje, ani nekritizuje. Nebudeme sa nikam ponáhľať a po celý čas ťa budem s plnou pozornosťou počúvať a s úctou sprevádzať tam, kde ťa tvoja duša zavedie. Na začiatku sa v krátkosti porozprávame o tom, s čím prichádzaš a čo ťa momentálne najviac ťaží. Potom prejdeme k samotnému procesu a s mojou pomocou sa prenesieš do svojho vnútra. Dovolíme tvojmu telu a mysli stíchnuť, aby mohli vyplávať na povrch tie správne odpovede, potlačené emócie alebo staré rany, ktoré potrebujú uzdravenie. A nakoniec cez úprimné odpustenie uvoľníme blokády a tvoju bolesť nahradí vnútorný pokoj. Z terapeutického kresla budeš odchádzať s pocitom veľkej úľavy a novej životnej sily.

Na terapiu si vyhraď približne 2 až 3 hodiny čistého času. Je to tvoj posvätný priestor pre seba, kedy nemusíš nikomu nič dokazovať, len s dôverou dovoliť procesu, aby sa udial.`,
  },
  {
    question: "Musím dopredu vedieť, kde môj problém vznikol?",
    answer: `Vôbec nie. Nemusíš prísť s hotovými odpoveďami, ani rozumieť tomu, prečo sa takto cítiš. Naša myseľ sa často snaží logicky prísť na to, kde sa stala chyba, ale tie skutočné odpovede sú zapísané hlbšie – v tvojom tele a podvedomí. Počas terapie sa spolu vydáme na to miesto, ktoré volá po zahojení. Tvoje telo má neuveriteľnú vlastnú inteligenciu. Keď mu vytvoríme bezpečný priestor, samé nám v správny čas ukáže presne ten moment, alebo spomienku, ktorú je potrebné prepustiť.`,
  },
  {
    question: "Môže terapia Cesta pomôcť aj pri mojej diagnóze?",
    answer: `Terapia Cesta pomohla už nespočetnému množstvu ľudí po celom svete nájsť úľavu a uzdravenie nielen na emocionálnej, ale aj na fyzickej úrovni. Dnes už vieme, že väčšina chorôb má pôvod práve v dlhodobo potlačených emóciách a strese, ktoré sa v tele časom zablokujú a oslabia ho. Cesta sa dokáže dostať ku koreňom problému a uvoľniť ich. Zároveň je však dôležité povedať, že každý z nás kráča po svojej vlastnej, jedinečnej ceste. A hoci sme už mnohokrát boli svedkami hlbokého fyzického uzdravenia, ani táto metóda nesľubuje automatické vyliečenie každej diagnózy a nie je náhradou za odbornú lekársku starostlivosť, alebo medicínsku liečbu.

Cesta je však v každom prípade výnimočným a veľmi účinným doplnkom k liečbe, pretože diagnóza často prináša nielen fyzické ťažkosti, ale aj obrovskú emocionálnu záťaž – strach, stres z neistoty, pocity bezmocnosti či únavu z dlhého boja. Cesta ti v tomto procese môže veľmi pomôcť uvoľniť emocionálny tlak a znížiť vnútorné napätie, aby malo tvoje telo viac sily na regeneráciu. Nájdeš vnútorný pokoj, zmeníš postoj k situácii, v ktorej sa nachádzaš a budeš ju prežívať s väčšou vyrovnanosťou.

Môj prístup je individuálny. Ak máš konkrétnu diagnózu, najlepšie bude, ak mi o tom napíšeš alebo zavoláš ešte predtým, než sa objednáš. Spoločne sa pozrieme na to, či je pre teba táto forma terapie v tvojej situácii vhodná a ako ti môže priniesť najväčší úžitok.`,
  },
  {
    question: "Koľko terapií budem musieť absolvovať?",
    answer: `Nečaká ťa žiadny nekonečný kolotoč sedení. Terapia Cesta je veľmi priama a transformujúca metóda, ktorá ide hneď ku koreňu problému. To, koľko stretnutí budeš potrebovať, je však veľmi individuálne a závisí to od témy, s ktorou prichádzaš.

Jedno intenzívne sedenie dokáže často priniesť obrovský zlom, hlboké uvoľnenie a odpovede na konkrétnu, akútnu situáciu, ktorá ťa najviac ťaží. Väčšina ľudí odchádza už po prvom stretnutí s pocitom, že zhodili z ramien obrovský balvan.

Séria 3 až 5 sedení je ideálna, ak si so sebou nesieš témy, ktoré sa v tvojom živote opakujú dlhé roky, napr. hlboko zakorenené vzorce správania, zdravotné ťažkosti, nízke sebavedomie, či nezahojené rany z detstva. Tieto vrstvy odkrývame postupne, v tvojom vlastnom tempe a s maximálnou citlivosťou.

Rozhodnutie je vždy plne v tvojich rukách. Po prvom sedení na vlastnej koži precítiš, ako sa tvoje vnútro upokojilo a či si praješ v Ceste pokračovať ďalej. Mojím cieľom nie je naviazať si ťa na dlhé mesiace, ale pomôcť ti čo najskôr získať späť tvoju vlastnú silu a slobodu.`,
  },
  {
    question: "Neviem, či mi terapia Cesta dokáže pomôcť...",
    answer: `Je úplne prirodzené, že môžeš cítiť pochybnosti alebo neistotu z nového a nepoznaného. Aby ti terapia Cesta priniesla čo najväčší úžitok a tvoje podvedomie sa na proces cítilo pripravené, mám pre teba jedno zásadné odporúčanie.

Prečítanie knihy „Cesta" od Brandon Bays je pred naším stretnutím nesmierne dôležitým a kľúčovým krokom. Je to ten najlepší dar, aký si môžeš pred samotnou terapiou dať.

Keď si prečítaš príbeh Brandon a pochopíš, ako táto metóda funguje, tvoje vnútro sa upokojí a na terapii budeš presne vedieť, do akého bezpečného priestoru kráčaš. Budeš sa vedieť oveľa rýchlejšie a hlbšie uvoľniť, a preto nebudeme musieť zbytočne strácať čas teóriou, ale pôjdeme rovno k hojeniu rán na tvojom srdci.

Ak ťa Cesta láka, začni knihou. Okrem nej odporúčam tiež kliknúť na oficiálnu stránku Terapie Cesta na Slovensku - www.brandonbays.sk. Nájdeš tam množstvo inšpiratívnych článkov, videí a príbehov ľudí, ktorým Cesta zmenila život.

Akonáhle v sebe pocítiš to hrejivé „áno, toto chcem zažiť", som tu pre teba a rada ťa týmto nádherným procesom bezpečne prevediem. ☺️`,
  },
];

export default function TerapiaCestaPage() {
  const reviews = testimonialsFor("terapia-cesta", 2);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-clay-dark uppercase">
            Terapia Cesta · The Journey
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
            Spoznaj silu svojho vnútra
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Nosíš v sebe nevysvetliteľnú ťažobu, únavu alebo hnev, ktorého sa nedokážeš zbaviť?
            </p>
            <p>Máš pocit, že nech robíš čokoľvek, stále narážaš na akýsi neviditeľný múr?</p>
            <p>
              Všetko, čo zažijeme, sa spoľahlivo zapisuje do nášho podvedomia a bunkovej pamäte.
              Každé zranenie z detstva, krivé obvinenie, pocit nedocenenia alebo strach, ktorý sme
              kedysi museli potlačiť a prehltnúť, nikam nezmizli a naďalej v nás tajne prežívajú. A
              hoci svoju emóciu ukryjeme za nedobitný múr, telo nám ju pri každej vhodnej
              príležitosti pripomenie.
            </p>
            <p>
              Vedecké výskumy jasne potvrdzujú, že potlačené emócie vyvolávajú v ľudskom tele
              biochemické a elektromagnetické reakcie, ktoré doslova blokujú bunkové receptory. Ak
              sa tieto bloky neuvoľnia v hĺbke podvedomia, časom sa prihlásia o slovo – v podobe
              úzkosti, vyhorenia, či fyzického ochorenia.
            </p>
            <p>
              Svetovo uznávaná metóda Cesta, The Journey, je jedinečným a veľmi účinným nástrojom,
              ktorý dokáže náš neviditeľný múr rozpustiť.
            </p>
            <p>
              Táto unikátna terapia presahuje hranice hľadania logických riešení. Je to hlboký
              transformačný zážitok, ktorý ťa privedie priamo k prameňu tvojich ťažkostí.
            </p>
          </div>
        </Container>
      </section>

      {/* VIDEÁ */}
      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Spoznaj silu Cesty priamo od jej autorky
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            V nasledujúcich videách Brandon Bays, svetoznáma terapeutka a zakladateľka tejto
            metódy, s nesmiernou ľahkosťou a hĺbkou vysvetľuje, ako dokáže Cesta prebudiť
            samoliečiace schopnosti tvojho tela.
          </p>
          {/* TODO (sekcia 14, bod 4): doplniť YouTube odkazy na videá Brandon Bays — stačí vyplniť `url` nižšie. */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Brandon Bays o metóde Cesta #1", url: undefined },
              { title: "Brandon Bays o metóde Cesta #2", url: undefined },
              { title: "Brandon Bays o metóde Cesta #3", url: undefined },
            ].map((video) => (
              <YouTubeEmbed key={video.title} title={video.title} url={video.url} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Kam Ťa terapia Cesta zavedie?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Spoločne vytvoríme bezpečný priestor, v ktorom…
          </p>
          <ul className="mt-6 space-y-4">
            {[
              "Zviditeľníme potlačené emócie a prejdeme cez obranné mechanizmy tvojej mysle priamo k bunkovej pamäti.",
              "Odhalíme skryté vzorce a uvoľníme obmedzujúce presvedčenia, ktoré ti bránia žiť naplno, v radosti a hojnosti.",
              "Pustíme staré krivdy a prinesieme hlboké odpustenie nielen iným, ale najmä tebe. Tvoje rany sa zrazu zahoja a tvoje srdce bude opäť slobodne dýchať.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-soft md:text-lg">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Cesta je zážitok, na ktorý nezabudneš.
            </h2>
            <p>
              S ľahkosťou ťa zavedie do tajomného sveta tvojho vnútra, kde unavená myseľ stíchne,
              čas sa zastaví a tvoje telo pocíti vlnu úľavy. A ty sa vrátiš k svojej vlastnej
              podstate, životnej sile a čistej radosti, ktoré rozžiaria tvoj život.
            </p>
            <p className="font-medium text-ink">
              Tvoja nová cesta začína rozhodnutím urobiť prvý krok.
            </p>
            <p>Príbehy tých, čo na svoju Cestu už vykročili, hovoria samy za seba.</p>
          </div>
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
                className="text-sm font-semibold text-clay-dark underline underline-offset-4"
              >
                Viac skúseností klientov
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">Často kladené otázky</h2>
          <div className="mt-6">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CENA */}
      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-sand bg-white/60 p-8 md:p-10">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Tvoj priestor pre uvoľnenie a transformáciu
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Každá terapia je jedinečným procesom šitým na mieru a trvá približne 2–3 hodiny.
              Ponúkam ti bezpečné sprevádzanie v plnej prítomnosti, bez hodnotenia a s maximálnym
              rešpektom k tvojmu vnútornému vedeniu.
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="font-serif text-3xl text-clay-dark">120 €</span>
              <span className="text-sm text-ink-soft">energetická výmena</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">
              Cena zahŕňa jednu 60-minútovú konzultáciu 3 dni po terapii.
            </p>
            {/* TODO (sekcia 14, bod 2): potvrdiť aktuálnu cenu — starý cenník uvádzal 90 €. */}
          </div>
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Chcem sa objednať"
            ctaLabel="Chcem sa objednať"
            ctaHref={siteConfig.facebook}
          />
        </Container>
      </section>
    </>
  );
}
