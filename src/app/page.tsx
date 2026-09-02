import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABlock } from "@/components/CTABlock";
import { MeditationBlock } from "@/components/MeditationBlock";
import { MandalaDivider } from "@/components/MandalaDivider";
import { services, dvojplamenTeaser } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  // Explicitný celý title (nie len "Domov") — na koreňovej trase "/" sa
  // title.template z layoutu na vlastnú stránku rovnakého segmentu nemusí
  // aplikovať, preto je tu radšej istota.
  title: `Domov | ${siteConfig.name}`,
  description:
    "Monika Struhárová — terapeutka a lektorka. Staň sa tvorcom svojho života: terapia Cesta, harmonizácia čakier, ženské kruhy a intuitívny tanec.",
  alternates: { canonical: "/" },
};

const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 2);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-clay-dark uppercase">
              Cestou srdca
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
              Staň sa tvorcom svojho života.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              <p>Dôveruj svojmu srdcu, aj keď kráčaš v hmle a neistote.</p>
              <p>
                Už nečakaj, kým búrka prehrmí, kým vonkajší svet schváli tvoju hodnotu, alebo kým
                ťa niekto zachráni.
              </p>
              <p>
                Skutočný tvorca života sa nespolieha na ideálne podmienky. Vie, že vonkajšia
                realita je len zrkadlom jeho vnútorného sveta.
              </p>
              <p>Nechcem ťa učiť, ako máš žiť.</p>
              <p>
                Pomôžem ti však nájsť tvoju vlastnú pravdu, spojiť sa s hlasom srdca a začať konať
                z pozície rýdzej kráľovskej sily.
              </p>
              <p>
                Ponúkam ti hlbokú transformáciu, pri ktorej sa staneš hlavným tvorcom svojho života
                opäť ty.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/moj-pribeh"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-clay-dark"
              >
                Spoznaj môj príbeh <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-sand/80 bg-sand/20 shadow-md">
              <PlaceholderImage label="Portrét Moniky Struhárovej" shape="rounded" tone="clay" />
            </div>
            {/* Meno vsadené priamo do hero vizuálu */}
            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-sand/60 bg-cream/95 px-5 py-4 text-center shadow-lg backdrop-blur">
              <p className="font-serif text-xl text-ink md:text-2xl">Monika Struhárová</p>
              <p className="text-xs tracking-wide text-ink-soft uppercase">
                Terapia Cesta · Čakry · Ženské kruhy · Tanec
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* NÁSTROJE PRE NÁVRAT K CELISTVOSTI */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Nástroje pre tvoj návrat k celistvosti
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Nekĺžem po povrchu. Prepájam hlboké terapeutické prístupy s prácou s podvedomím a
              energiou. Sprevádzam ženy a mužov, ktorí sú pripravení pozrieť sa pravde do očí a
              začať žiť bez masiek a ilúzií.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <MandalaDivider />

      {/* MEDITÁCIA VĎAČNOSTI */}
      <section className="py-16 md:py-24">
        <Container>
          <MeditationBlock
            title="Meditácia vďačnosti"
            videoUrl="https://youtu.be/ZuomJD3jE7s"
            text={`Chceš urobiť prvý krok k sebe hneď teraz?

Vedomé tvorenie života začína vždy v prítomnom okamihu. A vďačnosť je najrýchlejšia cesta, ako sa preladiť z nedostatku na hojnosť.

Prijmi teda odo mňa túto krátku meditáciu ako malý darček na tvoju cestu k hojnosti.`}
          />
        </Container>
      </section>

      {/* DVOJPLAMENE */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-[2.5rem] border border-sand bg-white/50 p-8 md:grid-cols-2 md:p-14">
            <div className="mx-auto max-w-sm overflow-hidden blob-alt">
              <Image
                src="/images/h1-dvojplamene-vizual.jpg"
                alt="Symbolický vizuál — Dvojplamene"
                width={1300}
                height={867}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
                Dvojplamene
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink md:text-xl">
                Hlboké zrkadlenie duší, ktoré prebúdza tvoju najčistejšiu podstatu. Spojenie,
                ktoré nezväzuje, ale transformuje, oslobodzuje a vedie ťa späť k sebe.
              </p>
              <Link
                href={dvojplamenTeaser.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-dark hover:underline"
              >
                Preskúmať tému Dvojplamene <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* POVEDALI O MNE */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-center font-serif text-2xl text-ink md:text-3xl">
            Povedali o mne…
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/skusenosti-klientov"
              className="text-sm font-semibold text-clay-dark underline underline-offset-4"
            >
              Prečítať viac skúseností klientov
            </Link>
          </div>
        </Container>
      </section>

      {/* AKTUÁLNE PODUJATIA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-cream-dark/70 p-8 text-center md:p-14">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Aktuálne podujatia</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Termíny ženských kruhov, tanečných večerov a ďalších stretnutí nájdeš vždy aktuálne
              na Facebooku.
            </p>
            {/* TODO: doplniť reálny odkaz na FB udalosti/skupinu */}
            <Link
              href={siteConfig.facebookEvents || "#"}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-clay px-6 py-3 text-sm font-semibold text-clay-dark"
            >
              Pozrieť podujatia na Facebooku <span aria-hidden>↗</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* INŠPIRATÍVNE ČLÁNKY */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">Inšpiratívne články</h2>
            <Link href="/blog" className="text-sm font-semibold text-clay-dark">
              Celý blog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-[1.75rem] border border-sand bg-white/50 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold tracking-wide text-sage-dark uppercase">
                  Príbehy zo života
                </p>
                <h3 className="mt-2 font-serif text-lg text-ink">{post.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ZÁVEREČNÉ CTA */}
      <section className="pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Cieľom života nie je prežívať v ochrannej ulite."
            body="Cieľom života je postaviť sa do svojej sily a naozaj žiť. Ak cítiš, že nastal čas ukončiť pasívne čakanie a chceš premeniť svoju bolesť na vnútornú slobodu, bude mi cťou ťa sprevádzať."
            ctaLabel="Chcem sa objednať na sedenie"
            ctaHref={siteConfig.facebook}
          />
        </Container>
      </section>
    </>
  );
}
