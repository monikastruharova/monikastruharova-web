import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Môj príbeh",
  description:
    "Volám sa Monika Struhárová. Spoznaj môj príbeh, moje poslanie a odbornú cestu — akreditovaná terapeutka metódy Cesta, Reiki Master a lektorka.",
  alternates: { canonical: "/moj-pribeh" },
};

const certificates = [
  {
    title: "Akreditovaná terapeutka metódy Cesta (The Journey) podľa Brandon Bays",
    imageLabel: "Certifikát — Terapia Cesta (The Journey)",
  },
  {
    title: "Certifikovaná Reiki Master — III. stupeň",
    imageLabel: "Certifikát — Reiki Master III.",
  },
  {
    title: "Technika kvantového dotyku",
    imageLabel: "Certifikát — Kvantový dotyk",
  },
];

export default function MyStoryPage() {
  return (
    <>
      <section className="pt-14 pb-16 md:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-clay-dark uppercase">
              Môj príbeh
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
              Volám sa Monika Struhárová.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft md:text-xl">
              Ukážem ti, ako premeniť vnútorný chaos na čistú životnú energiu.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-sand/80 bg-sand/20 shadow-md">
              <Image
                src="/images/monika-struharova-portret.jpg"
                alt="Monika Struhárová"
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
        <Container className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-ink md:text-3xl">
              Život ma naučil vidieť srdcom
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              <p>Moja duša odjakživa túžila po hlbokej pravde, zmysle a autenticite.</p>
              <p>To podstatné však málokedy vidno na prvý pohľad.</p>
              <p>
                Môj životný príbeh je pretkaný objavovaním darov vysokej citlivosti a intuície. Už
                pred mnohými rokmi, keď som sa kvôli oslabenému zraku začala na svet pozerať inak
                než len fyzickými očami, sa mi otvoril úplne nový rozmer vnímania. Zistila som, že
                svet tajuplných vôní a zvukov, tichých energií a fascinujúcich emócií má obrovskú
                hĺbku, ktorú naša pozornosť často prehliada.
              </p>
              <p>Mojím najväčším učiteľom je sám život.</p>
              <p>
                Pochopila som, že dôležitejšie než to, čo vidíme, je to, čo cítime. To, čo ostáva
                očiam a neraz aj mylným hodnoteniam mysle neviditeľné.
              </p>
              <p>
                Akékoľvek obmedzenie, alebo náročná životná situácia neznamenajú, že náš život sa
                rozpadá. Sú však pozvánkami objaviť v sebe silu, o ktorej sme ani netušili. Pre
                mňa je touto silou bezhraničná dôvera v hlas srdca, kreativita a nespútaná životná
                energia, ktorú vkladám do môjho milovaného tanca, do lásky k cestovaniu, či do
                sladkého pečenia.
              </p>
              <p>
                Cestovanie ma učí objavovať nové, pestrofarebné svety nielen mimo mňa, ale aj v
                mojom vnútri. A pečenie? To je čistá alchýmia tvorenia a ak ho robíme srdcom, tak
                každé sústo je ako pohladenie duše, ktoré sa rozplýva na jazyku.
              </p>
            </div>
          </div>

          <div className="soft-divider" />

          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl text-ink md:text-3xl">Moje poslanie</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
                <p>
                  Nie som len teoretik. Všetky procesy, terapie a transformácie, ktorými Vás
                  sprevádzam, mám hlboko odžité na vlastnej koži. Viem, aké to je prežívať strach z
                  neistoty, stratu kontroly nad životom, či tlak okolitých očakávaní. Ale rovnako
                  dobre viem, aké oslobodzujúce je postaviť sa pevne do svojej vlastnej sily a žiť
                  naplno, bez masiek a ilúzií.
                </p>
                <p>
                  Pri svojej práci prepájam hlboké terapeutické prístupy, prácu s podvedomím a
                  prácu s energiou. Pomáham uvoľniť staré bloky, nezdravé rodové vzorce, ale aj
                  spracovať náročné lekcie, ktoré so sebou prinášajú hlboké osudové spojenia
                  fenoménu Dvojplameňov.
                </p>
                <p>
                  Spoločne vytvoríme láskavú náruč prijatia, v ktorom tvoje srdce opäť nájde svoj
                  stratený pokoj, stabilitu a slobodu.
                </p>
              </div>
            </div>
            <figure className="mx-auto flex flex-col items-center">
              <div className="overflow-hidden rounded-3xl border border-sand/80 bg-sand/20 p-2 shadow-md transition hover:shadow-lg">
                <Image
                  src="/images/monika-dalajlama-2008.jpg"
                  alt="Monika Struhárová s Jeho Svätosťou Dalajlámom, rok 2008"
                  width={340}
                  height={510}
                  className="h-auto w-full max-w-xs rounded-2xl object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center font-serif text-xs italic text-ink-soft">
                S Jeho Svätosťou Dalajlámom, 2008
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Moja odborná cesta a certifikáty
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.title} className="flex flex-col gap-4">
                <PlaceholderImage label={cert.imageLabel} shape="rounded" tone="sand" />
                <p className="text-sm leading-snug text-ink-soft">{cert.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              V týchto oblastiach sa opieram o dlhoročné skúsenosti a tisíce úžasných príbehov
              ľudí, ktorí u mňa našli bezpečný prístav a cestu k uzdraveniu.
            </p>
            <p>
              Ak práve prechádzaš náročným obdobím, cítiš sa ako v slepej uličke, alebo len hľadáš
              pravdu o sebe, rada ťa budem sprevádzať na tvojej ceste.
            </p>
          </div>
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock
            heading="Chceš sa objednať na sedenie?"
            body="Napíš mi pár slov o tom, čo práve prežívaš — rada sa s tebou spojím a spoločne nájdeme tú správnu cestu."
            ctaLabel="Kontaktuj ma"
            ctaHref="/kontakt"
          />
        </Container>
      </section>
    </>
  );
}
