export const siteConfig = {
  name: "Monika Struhárová",
  title: "Monika Struhárová — Cestou srdca",
  domain: "monikastruharova.sk",
  // E-mail je len záložný/informačný kontakt v pätičke — hlavný kontaktný
  // kanál (poptávky) vedie na Facebook, pozri `facebook` nižšie.
  email: "info@monikastruharova.sk",
  phone: "",
  instagram: "",
  // Hlavný kontaktný kanál — všetky "Objednať sa" CTA po webe vedú sem.
  facebook: "https://www.facebook.com/cestou.srdca",
  // TODO: ak vznikne samostatná FB udalosť/skupina pre podujatia, doplniť
  // sem jej konkrétne URL — zatiaľ odkazujeme na ten istý profil vyššie.
  facebookEvents: "https://www.facebook.com/cestou.srdca",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "Môj príbeh", href: "/moj-pribeh" },
  {
    label: "Služby",
    href: "/sluzby",
    children: [
      { label: "Terapia Cesta", href: "/sluzby/terapia-cesta" },
      { label: "Harmonizácia čakier", href: "/sluzby/harmonizacia-cakier" },
      { label: "Ženské kruhy — Esencia Bohyne", href: "/sluzby/zenske-kruhy" },
      { label: "Intuitívny tanec", href: "/sluzby/intuitivny-tanec" },
    ],
  },
  { label: "Dvojplamene", href: "/dvojplamene" },
  { label: "Skúsenosti klientov", href: "/skusenosti-klientov" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];
