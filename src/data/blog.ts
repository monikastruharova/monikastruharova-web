export type BlogCategory = "pribehy-zo-zivota" | "tajomny-svet-dvojplamenov";

export const blogCategories: { slug: BlogCategory; title: string }[] = [
  { slug: "pribehy-zo-zivota", title: "Príbehy zo života" },
  { slug: "tajomny-svet-dvojplamenov", title: "Tajomný svet dvojplameňov" },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  ctaLabel: string;
  ctaHref: string;
  // Plný text článku ešte nebol dodaný v podkladoch — stránka je pripravená
  // ako TODO/koncept a čaká na finálny text a fotografie od Moniky.
  pending: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tanec-srdca-1-z-parketu-do-ambulancie",
    title: "Tanec srdca 1 — Z parketu do ambulancie",
    category: "pribehy-zo-zivota",
    excerpt:
      "Príbeh o tom, ako sa telo prihovára rečou pohybu skôr, než sa mu prihovorí myseľ. TODO: doplniť plný text z podkladov.",
    ctaLabel: "Spoznaj Intuitívny tanec",
    ctaHref: "/sluzby/intuitivny-tanec",
    pending: true,
  },
  {
    slug: "tanec-srdca-2-necakaj-a-plni-si-sny",
    title: "Tanec srdca 2 — Nečakaj a plň si sny",
    category: "pribehy-zo-zivota",
    excerpt:
      "Pokračovanie príbehu o odvahe vykročiť za tým, po čom srdce skutočne túži. TODO: doplniť plný text z podkladov.",
    ctaLabel: "Spoznaj Intuitívny tanec",
    ctaHref: "/sluzby/intuitivny-tanec",
    pending: true,
  },
  {
    slug: "slzy-na-parkete",
    title: "Slzy na parkete",
    category: "pribehy-zo-zivota",
    excerpt:
      "O tom, čo sa uvoľní, keď dovolíme telu plakať pohybom. TODO: doplniť plný text z podkladov.",
    ctaLabel: "Spoznaj Intuitívny tanec",
    ctaHref: "/sluzby/intuitivny-tanec",
    pending: true,
  },
  {
    slug: "co-je-intuitivny-tanec",
    title: "Čo je Intuitívny tanec?",
    category: "pribehy-zo-zivota",
    excerpt:
      "Úvod do somatickej cesty k sebe — bez kroku, choreografie a výkonu. TODO: doplniť plný text z podkladov.",
    ctaLabel: "Spoznaj Intuitívny tanec",
    ctaHref: "/sluzby/intuitivny-tanec",
    pending: true,
  },
];

export function postsByCategory(category: BlogCategory) {
  return blogPosts.filter((p) => p.category === category);
}

export function postBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
