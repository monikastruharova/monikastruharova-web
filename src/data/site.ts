export const siteConfig = {
  name: "Monika Struhárová",
  title: "Monika Struhárová — Cestou srdca",
  domain: "monikastruharova.sk",
  // Všetky kontaktné kanály — zobrazované spolu na `/kontakt` a v pätičke.
  phone: "+421 905 281 561",
  whatsapp: "https://wa.me/421905281561",
  email: "info@monikastruharova.sk",
  facebook: "https://www.facebook.com/cestou.srdca",
  instagram: "",
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
  { label: "Dvojplameň", href: "/dvojplamen" },
  { label: "Skúsenosti klientov", href: "/skusenosti-klientov" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];
