import type { ServiceSlug } from "./testimonials";

export type ServiceTeaser = {
  slug: ServiceSlug;
  title: string;
  teaser: string;
  priceFrom: string;
  href: string;
};

export const services: ServiceTeaser[] = [
  {
    slug: "terapia-cesta",
    title: "Terapia Cesta",
    teaser:
      "Hlboký transformačný proces, ktorý ťa privedie priamo k prameňu tvojich ťažkostí — až k bunkovej pamäti starých zranení.",
    priceFrom: "120 €",
    href: "/sluzby/terapia-cesta",
  },
  {
    slug: "harmonizacia-cakier",
    title: "Harmonizácia čakier",
    teaser:
      "Jemný, no hlboko uvoľňujúci proces, pri ktorom tvoju vnútornú rieku očistíme od balvanov, aby mohla životná energia opäť slobodne prúdiť.",
    priceFrom: "40 €",
    href: "/sluzby/harmonizacia-cakier",
  },
  {
    slug: "zenske-kruhy",
    title: "Ženské kruhy — Esencia Bohyne",
    teaser:
      "Bezpečná jaskyňa posvätného ženského kruhu, kde môžeš slobodne prehovoriť, otvoriť srdce a znova objaviť svoju hodnotu.",
    priceFrom: "25 €",
    href: "/sluzby/zenske-kruhy",
  },
  {
    slug: "intuitivny-tanec",
    title: "Intuitívny tanec",
    teaser:
      "Somatická cesta k sebe bez kroku, choreografie a výkonu — návrat k autentickému pohybu, ktorý si žiada tvoje telo.",
    priceFrom: "20 €",
    href: "/sluzby/intuitivny-tanec",
  },
];

export const dvojplamenTeaser = {
  slug: "cesta-dvojplamena" as ServiceSlug,
  title: "Cesta Dvojplameňa",
  teaser:
    "Hlboké zrkadlenie duší, ktoré prebúdza tvoju najčistejšiu podstatu. Spojenie, ktoré nezväzuje, ale transformuje, oslobodzuje a vedie ťa späť k sebe.",
  href: "/sluzby/cesta-dvojplamena",
};

export function serviceBySlug(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug);
}
