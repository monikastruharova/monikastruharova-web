import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MeditationBlock } from "@/components/MeditationBlock";
import { testimonialsFor } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Intuitívny tanec",
  description:
    "Somatická Cesta k sebe bez naučených krokov, choreografie a tlaku na výkon. Návrat k autentickému pohybu, ktorý si žiada tvoje telo.",
  alternates: { canonical: "/sluzby/intuitivny-tanec" },
};

const elements = [
  {
    name: "Zem",
    subtitle: "Uzemnenie a stabilita",
    text: "Spojenie s chodidlami, pocit bezpečia, spomalenie a zakorenenie sa v prítomnom okamihu.",
  },
  {
    name: "Voda",
    subtitle: "Plynutie a Emócie",
    text: "Uvoľnenie bokov a chrbtice, obnova jemnosti, tvorivosti, pružnosti a schopnosti nechať veci plynúť.",
  },
  {
    name: "Oheň",
    subtitle: "Sila a vášeň",
    text: "Prebudenie potlačenej sily, zdravé nastavenie hraníc, vybitie nahromadeného napätia, či hnevu a obnova prirodzenej vnútornej divokosti.",
  },
  {
    name: "Vzduch",
    subtitle: "Odľahčenie a sloboda",
    text: "Otvorenie hrudníka a dychu, pocit radosti, ľahkosti a čistej existencie bez hodnotenia.",
  },
  {
    name: "Éter",
    subtitle: "Integrácia a ticho",
    text: "Hlboký mier, uloženie celého zážitku do buniek tela a návrat k vnútornému stredu.",
  },
];

export default function IntuitivnyTanecPage() {
  const reviews = testimonialsFor("intuitivny-tanec", 2);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
              Zabudni na kroky. Keď vypneš kontrolu, roztancuješ svoj život.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Nemusíš mať talent od Boha, nemusíš mať ani rytmus v krvi a pokojne môžeš mať aj
                obe nohy ľavé...
              </p>
              <p>Intuitívny tanec nie je o technike, choreografii ani o perfektnom výkone.</p>
              <p>
                Intuitívny tanec je návratom k tvojmu najprirodzenejšiemu jazyku — k autentickému
                pohybu, ktorý nevymýšľa hlava, ale ktorý si žiada tvoje telo.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-sand/80 bg-sand/20 shadow-md">
              <Image
                src="/images/monika-struharova-portret.jpg"
                alt="Monika Struhárová — Intuitívny tanec"
                width={384}
                height={576}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">Tanec bez manuálu</h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Žijeme v dobe výkonu, kontroly a neustáleho logického premýšľania. Často ostávame
              &bdquo;zaseknutí v hlave&ldquo; a postupne strácame kontakt so svojím telom,
              intuíciou a nespútanou životnou energiou.
            </p>
            <p>
              Emócie a stres, ktoré neprejavíme, sa však nikde nestratia. Ukladajú sa v našom tele
              ako chronické napätie v ramenách, stiahnutá panva, plytký dych, či neustály pocit
              vnútornej únavy a odpojenia.
            </p>
            <p className="font-medium text-ink">Intuitívny tanec je somatická cesta k sebe.</p>
            <p>
              Nemusíme vedieť tancovať. Potrebujeme sa len na chvíľu odvrátiť od vonkajšieho sveta
              a otočiť zrak dovnútra. Rozhýbať kosti, rozpumpovať energiu a rozvibrovať bunky.
            </p>
            <p>
              Keď dovolíme svojmu telu hýbať sa tak, ako naozaj chce — či už je to jemné vlnenie,
              divoké podupkávanie, búranie hraníc, alebo hlboké ponorenie do seba — rozpustí sa v
              ňom všetko stuhnuté a ťažké.
            </p>
            <p>
              Keď sa náš pohyb stane intuitívnym, telo prestáva bojovať s minulosťou, púšťa to, čo
              mu už neslúži a nervový systém prechádza zo stavu pohotovosti do hlbokého uvoľnenia.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <MeditationBlock
            tone="gold"
            title="Ranná meditácia"
            videoUrl="https://youtu.be/RfzGQ1Uegys"
            text={`Intuitívny tanec začína v momente, keď sa prestaneme schovávať sami pred sebou.

Skôr než sa roztancujeme, potrebujeme sa v tichu stretnúť so svojou vlastnou podstatou.

Ponúkam ti malú ochutnávku takéhoto hlbokého spojenia.

Stačí, ak sa na chvíľu zastavíš, obrátiš pozornosť do svojho vnútra a do nového dňa vykročíš s čistou energiou.`}
          />
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl text-ink md:text-3xl">
            5 tvárí pohybu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-soft md:text-lg">
            V každom našom geste a nadýchnutí sa zrkadlia prvky prírody čakajúc na to, kedy im
            dovolíme voľne prúdiť.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {elements.map((el) => (
              <div key={el.name} className="rounded-2xl border border-sand bg-white/50 p-5 text-center">
                <p className="font-serif text-lg text-clay-dark">{el.name}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-ink-soft uppercase">
                  {el.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{el.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">Intuitívny tanec prináša…</h2>
          <ul className="space-y-3">
            {[
              "Uvoľnenie mentálneho tlaku. Vypneš neustály prúd myšlienok a dopraješ svojej mysli zaslúžený reštart.",
              "Somatickú katarziu. Bezpečne prejavíš a pustíš emócie (smútok, strach, hnev, ale aj potlačenú radosť), ktoré nemali kde odtiecť.",
              "Obnovu polarity a životnej sily. Prepojením pravej a ľavej hemisféry, ako aj ženskej a mužskej energie v sebe, získaš novú iskru a magnetizmus.",
              "Prijatie svojho tela. Prestaneš svoje telo posudzovať a začneš ho vnímať ako svoj najbezpečnejší domov, chrám a zdroj múdrosti.",
              "Slobodu a Sebadôveru. Zistíš, že nemusíš plniť žiadne vonkajšie pravidlá na to, aby sa Tvoja vnútorná sila mohla naplno prejaviť.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-soft md:text-lg">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="pt-6 font-serif text-2xl text-ink md:text-3xl">Tvoj priestor pre tanec</h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Čaká ťa riadená, no zároveň úplne slobodná zvuková a pohybová cesta v príjemnom a
              rešpektujúcom prostredí.
            </p>
            <p>Začíname jemným stíšením, dychom a nalaďovaním sa na svoj vlastný zámer.</p>
            <p>
              Postupne ťa sprevádzam starostlivo vyskladanou hudobnou dramaturgiou od hlbokých
              šamanských bubnov cez plynulé tóny až po liečivú integráciu v tichu.
            </p>
            <p>V celom procese určuješ svoje pravidlá a hranice jedine ty.</p>
            <p>
              Tancuješ so zatvorenými očami, alebo v jemnom prítmí, bez akéhokoľvek hodnotenia,
              porovnávania, či očakávaní.
            </p>
          </div>

          <blockquote className="rounded-[1.75rem] bg-clay/10 p-6 font-serif text-lg text-ink italic md:text-xl">
            „Tancovať intuitívne znamená mať odvahu otvoriť sa a stretnúť sa so svojou vlastnou
            pravdou.&rdquo;
          </blockquote>

          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Intuitívny tanec je pre každého človeka, bez ohľadu na vek, pohlavie, postavu či
            predchádzajúce tanečné skúsenosti.
          </p>
          <p className="font-medium text-ink">Ak máš telo a dýchaš, máš všetko, čo potrebuješ.</p>
        </Container>
      </section>

      {reviews.length ? (
        <section className="py-10 md:py-16">
          <Container className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Skúsenosti z tanečného parketu
            </h2>
            <div className="mt-4 space-y-2 text-base leading-relaxed text-ink-soft md:text-lg">
              <p>Osobná skúsenosť však povie viac než tisíc slov.</p>
              <p>
                Nahliadnite teda do autentických zážitkov žien a mužov, ktorí už objavili čaro
                Intuitívneho tanca.
              </p>
            </div>
            <div className="mt-8 columns-1 gap-6 sm:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid">
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
              Tvoj lístok na cestu z hlavy do tela
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Ponúkam ti 90 minút hudobnej alchýmie, kde nerozhoduje krása, ani šikovnosť a ty sa
              konečne prepneš z hlavy plnej myšlienok do tela plného života.
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-clay-dark">20 €</span>
              <span className="text-sm text-ink-soft">/ osoba, energetická výmena</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Pozri si najbližšie termíny"
            body="Termíny tanečných večerov aj možnosť napísať mi priamo nájdeš na Facebooku."
            ctaLabel="Pozrieť si najbližšie termíny"
            ctaHref={siteConfig.facebookEvents}
          />
        </Container>
      </section>
    </>
  );
}
