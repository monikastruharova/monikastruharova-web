import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { testimonialsFor } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ženské kruhy — Esencia Bohyne",
  description:
    "Bezpečná jaskyňa posvätného ženského kruhu, kde môžeš slobodne prehovoriť, otvoriť srdce a znova objaviť svoju hodnotu. Prastará tradícia pre dnešnú ženu.",
  alternates: { canonical: "/sluzby/zenske-kruhy" },
};

const benefits = [
  {
    title: "Nové pohľady na život",
    text: "Stretávajú sa tu ženy rôzneho veku a s rôznymi osudmi. Skúsenosť inej ženy ti môže poskytnúť také riešenie situácie, ktoré sama vo svojom živote nevidíš.",
  },
  {
    title: "Prijatie a liečenie duše",
    text: "V dnešnej uponáhlanej dobe je často veľmi ťažké vypnúť. Ale v kruhu žien, kde môžeš bezpečne priznať svoje obavy, sa ti dostane toľko nefalšovaného súcitu a podpory, že tvoje srdce sa začne okamžite hojiť.",
  },
  {
    title: "Uvoľnenie emocionálnej záťaže",
    text: "Dlhoročné bolestivé spomienky a traumy z nás často opadnú v momente, keď nájdeme odvahu o nich prehovoriť. Kruh ti bude pevnou oporou pri strate blízkeho, ťažkom rozchode, alebo v obdobiach, kedy hľadáš nový zmysel života.",
  },
  {
    title: "Skutočné, autentické priateľstvá",
    text: "V dobe online technológií je čoraz vzácnejšie hľadieť si pri komunikácii priamo do očí, bez prítomnosti obrazovky. V kruhu zažiješ magické splynutie duší, kde neexistuje závisť ani porovnávanie. Iba čisté sesterské puto.",
  },
];

export default function ZenskeKruhyPage() {
  const reviews = testimonialsFor("zenske-kruhy", 2);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
            Pravá Žena má odvahu postaviť sa za seba, pretože pozná svoju hodnotu.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Možno aj v tebe dodnes rezonuje ten ikonický okamih z &bdquo;Hriešneho tanca&ldquo;,
              keď vzduch v sále zhustne a Johny vysloví tú nesmrteľnú vetu: &bdquo;Bejby nebude
              sedieť v kúte...&ldquo; živelne príťažlivý muž vezme ženu za ruku, vytiahne ju z tieňa
              a ukáže celému svetu jej skutočnú, zmyselnú krásu.
            </p>
            <p>
              Lenže ruku na srdce... koľkokrát v reálnom živote sedíme v tom kúte práve my? Skryté,
              tiché, čakajúce na povolenie zažiariť.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto grid max-w-4xl items-start gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Vo vnútri sme často krehkými bytosťami, ktoré čakajú na svoj veľký deň. No keď
              vysnívaný princ neprichádza, sme sklamané a zatrpknuté.
            </p>
            <p>
              Alebo sa bezhlavo vrháme do rýchlych vzťahov s prísľubom krajšej budúcnosti a
              zúfalo presviedčame samé seba, že robíme správnu vec.
            </p>
            <p>Priznávam, aj ja som na svojho pána Božského dlho čakala. ☺️</p>
            <p>
              No keď sa nič nemenilo, urobila som ten najdôležitejší krok: rozhodla som sa
              zistiť prečo.
            </p>
            <p>
              V modernom svete, ktorý je často izolovaný, som hľadala hlbší zmysel a autentické
              vzťahy. Túžila som zdieľať svoje pocity v bezpečnom a podpornom prostredí.
            </p>
            <p>
              Netušiac, čo sa deje pod hladinou môjho zvyčajného vnímania, sa vo mne začala
              prebúdzať divoká ženská sila a hlboká intuícia. Začula som neodolateľné volanie
              odhaliť tajomstvá ženskej múdrosti.
            </p>
            <p>
              Prešla som si rôznymi traumami a životnými výzvami, ktoré vo mne zanechali hlboké
              stopy. No práve hľadanie cesty k uzdraveniu ma priviedlo k ženám, s ktorými sme
              spontánne vytvorili priestor pre oslavu toho, kým v skutočnosti sme. Prebudili sme
              esenciu Bohyne, ktorá sídli v každej z nás.
            </p>
            <p>
              A tak dnes tieto krásne a život meniace ženské kruhy s láskou organizujem pre nás,
              všetky Ženy, Bohyne.
            </p>
          </div>
          <PlaceholderImage label="Ženský kruh — atmosféra stretnutia" className="mx-auto max-w-xs" />
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">Zahalené prachom minulosti</h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Ženské kruhy nie sú moderným výmyslom. Je to prastará tradícia, ktorá pulzuje v
              našej krvi od nepamäti. Už v praveku sedávali ženy v kruhu okolo ohňa, a v staroveku
              sa schádzali kňažky, vedmy a bylinkárky, aby v tajnosti oslavovali cykly života,
              menštruáciu, materstvo a silu Bohyne Matky.
            </p>
            <p>
              Storočia patriarchátu a strachu, ktoré ženskú silu potláčali, sa ju pokúšali úplne
              umlčať a označiť ju za hriešnu či nebezpečnú. No nepodarilo sa im to. Dnes táto sila
              prežíva svoju renesanciu, pretože volanie slobodnej, vedomej a uzdravenej Ženy v
              našom vnútri sa už nedá stíšiť. Prijatím tohto vzácneho dedičstva meníme nielen svoje
              životy, ale vraciame svetu rovnováhu.
            </p>
          </div>

          <h2 className="pt-6 font-serif text-2xl text-ink md:text-3xl">Späť k prameňu Bohyne</h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>Stará hopijská múdrosť hovorí, že keď sa ženy stretávajú, liečia svet.</p>
            <p>
              Cieľom našich kruhov nie je povyšovať sa nad mužov, ale ani sa nimi nechať
              ponižovať.
            </p>
            <p>
              Cieľom je vystúpiť z pozície obete a opäť sa prepojiť s autentickou ženskosťou.
              Objaviť pravú esenciu Bohyne, na ktorú sme museli na chvíľu zabudnúť, aby sme ju dnes
              prebudili do oveľa väčšej krásy.
            </p>
            <p>
              Muž a žena sú rovnocennými partnermi. Nikto nie je viac, ani menej. Sme dňom a nocou,
              slnkom a mesiacom, jin a jang na nádhernej palete bytia. Tvoríme dve opačné časti
              jedného božského celku.
            </p>
            <p>
              Pochopiť a prijať túto pravdu je však možné len vtedy, keď odpustíme krivdy minulosti
              a oslobodíme sa z okov, ktoré ženskú energiu potláčali.
            </p>
            <p>Ak chceš, aby bol svet okolo Teba krajší, začni od seba.</p>
            <p>
              Vstúp do bezpečnej jaskyne ženského kruhu, kde môžeš slobodne prehovoriť, otvoriť
              srdce a znova objaviť svoju hodnotu.
            </p>
          </div>

          <h2 className="pt-6 font-serif text-2xl text-ink md:text-3xl">
            Tajomná sila posvätného kruhu
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Predstav si miesto, kde sa tvoje zmysly prebúdzajú. Omamné vône éterických olejov
              upokojujú myseľ a otvárajú srdce. Jemné tóny hudby striedajú silné bubny, ktoré ťa
              roztancujú a prebudia tvoju divokosť. Teplo a vlniace sa plamene sviečok podnecujú
              predstavivosť a zahrievajú dušu.
            </p>
            <p>
              To všetko ti umožňuje hlboko prežiť prítomný okamih. A práve v tom spočíva skutočná
              sila posvätného ženského kruhu.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Čo ti prinesie pravidelné stretávanie v kruhu?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-sand bg-white/50 p-6">
                <h3 className="font-serif text-lg text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-serif text-xl text-ink">
            Zhoď svoje brnenie, odlož masky a príď sa zhlboka nadýchnuť.
            <br />
            Tvoje miesto v kruhu ťa už čaká.
          </p>
        </Container>
      </section>

      {reviews.length ? (
        <section className="py-10 md:py-16">
          <Container className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Svedectvá z hlbín kruhu</h2>
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
              Vstupenka do bezpečného kruhu žien
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Ponúkam ti zážitok prijatia v liečivom priestore prastarej tradície, kde môžeš
              zložiť brnenie a prebudiť svoju vedomú ženskosť.
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-clay-dark">25 €</span>
              <span className="text-sm text-ink-soft">energetická výmena</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-6 md:py-10">
        <Container className="mx-auto max-w-3xl text-center">
          {/* TODO: doplniť reálny odkaz na FB udalosti */}
          <Link
            href={siteConfig.facebookEvents || "#"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay-dark"
          >
            Aktuálne podujatia na Facebooku <span aria-hidden>↗</span>
          </Link>
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Rezervuj si miesto v kruhu"
            ctaLabel="Rezervovať si miesto v kruhu"
            ctaHref={siteConfig.facebook}
          />
        </Container>
      </section>
    </>
  );
}
