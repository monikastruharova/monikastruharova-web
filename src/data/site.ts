export const siteConfig = {
  name: "Monika Struhárová",
  title: "Monika Struhárová — Cestou srdca",
  domain: "monikastruharova.sk",
  // TODO: potvrdiť s Monikou/Petrom skutočný kontaktný e-mail a telefón, kam majú chodiť poptávky.
  email: "info@monikastruharova.sk",
  phone: "",
  instagram: "",
  facebook: "",
  // TODO: dodať konkrétne URL na FB udalosti / skupiny ("Cestou srdca", "Dvojplameň lásky")
  facebookEvents: "",
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
