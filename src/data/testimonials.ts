export type ServiceSlug =
  | "terapia-cesta"
  | "cesta-dvojplamena"
  | "harmonizacia-cakier"
  | "zenske-kruhy"
  | "intuitivny-tanec";

export type Testimonial = {
  id: string;
  title: string;
  quote: string;
  author: string;
  services: ServiceSlug[];
  featured?: boolean;
};

// Obsah prevzatý 1:1 z podkladov. Referencie sú uvedené len krstným menom
// (bez priezviska) kvôli súkromiu klientov — tak to bolo zachované aj doteraz.
export const testimonials: Testimonial[] = [
  {
    id: "peter-zivot-fantasticke",
    title: "Život je niečo fantastické!",
    quote:
      "Bol som sám prekvapený, že keď som ochorel, tak som bol psychicky v pohode... Myslím, že obdobie temnej duše mám za sebou. Už ma to nehádže psychicky dole.",
    author: "Peter",
    services: ["terapia-cesta"],
    featured: true,
  },
  {
    id: "zlatica-navraciam-sa",
    title: "Navraciam sa do vlastnej sily",
    quote:
      "Prechádzam si cestou dvojplameňa, ktorá je veľmi náročná. Monika mi je obrovskou oporou... Po každom rozhovore s ňou sa navraciam do vlastnej sily.",
    author: "Zlatica",
    services: ["cesta-dvojplamena"],
    featured: true,
  },
  {
    id: "marian-vnutorne-stastny",
    title: "Som vnútorne šťastný",
    quote:
      "Pokoj. Monika mi ho ukázala a ja sa ho učím... Dokážem presnejšie vnímať realitu, dané emócie, zrkadlenia cez reakcie ľudí, frekvencie a celkovú energiu okolia.",
    author: "Marián",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "eva-este-si-taketo-prosim",
    title: "Ešte si takéto prosím",
    quote: "Bolo to úplne super... táto harmonizácia... ešte si takéto prosím 🙏😘❤️",
    author: "Eva",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "diana-dokazala-som-ist-hlbsie",
    title: "Dokázala som ísť hlbšie, než som si myslela",
    quote:
      "Terapia Cesta bola pre mňa výnimočným zážitkom... Zo sedenia som odišla s pocitom ľahkosti a väčšieho prepojenia so sebou samou.",
    author: "Diana",
    services: ["terapia-cesta"],
    featured: true,
  },
  {
    id: "peter-duasa-ziari",
    title: "Moja duša žiari šťastím",
    quote:
      "Zovretá vrchná časť hrudníka... Cítil som, že moja duša žiari šťastím... len tak...ale že silne.",
    author: "Peter",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "zlatica-proces-uvedomenia",
    title: "Proces mi priniesol nové uvedomenia",
    quote:
      "Absolvovala som s Monikou harmonizáciu čakier na diaľku... Proces mi pomohol začať ich vedome spracovávať.",
    author: "Zlatica",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "marian-dnesok-pomohol",
    title: "Dnešok mi veľmi pomohol",
    quote: "Ďakujem, dnešok mi veľmi pomohol. Prajem pekný večer a verím, že sa ešte stretneme. 🙏😊",
    author: "Marián",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "marian-rastli-mi-kridla",
    title: "Rástli mi krídla",
    quote:
      "Na tanec som prišiel bez očakávaní a netušil som, čo ma čaká. Hudba vo mne postupne otvorila napätie a silné emócie, ktoré vystriedal obrovský príval energie a radosti. V jednom momente som cítil neuveriteľnú ľahkosť, akoby som sa vznášal a rástli mi krídla. Pocit úplnej slobody. Bol to intenzívny a oslobodzujúci zážitok, ktorý sa nedá úplne opísať – treba ho zažiť.",
    author: "Marián",
    services: ["intuitivny-tanec"],
    featured: true,
  },
  {
    id: "kristina-oslobodzujuce-vypnut-hlavu",
    title: "Bolo oslobodzujúce vypnúť hlavu",
    quote:
      "Intuitívny tanec bol pre mňa veľmi krásnym a príjemným zážitkom. ❤️ Zo začiatku som možno nevedela úplne, čo mám očakávať, ale postupne som sa dokázala uvoľniť a viac vnímať samu seba, svoje telo a svoje pocity. Bolo veľmi oslobodzujúce na chvíľu vypnúť hlavu, neriešiť nič okolo seba a jednoducho sa nechať viesť hudbou a vlastným telom. Páčila sa mi príjemná a bezpečná atmosféra, ktorú si vytvorila, a celý čas som sa cítila dobre a prijato. Odchádzala som s príjemným pocitom ľahkosti a pokoja. Určite by som intuitívny tanec odporučila každému, kto si chce oddýchnuť, uvoľniť emócie a na chvíľu sa viac spojiť sám so sebou. ❤️ Ďakujem za krásny zážitok. 🥰",
    author: "Kristína",
    services: ["intuitivny-tanec"],
    featured: true,
  },
];

export function testimonialsFor(service: ServiceSlug, limit = 2): Testimonial[] {
  const matches = testimonials.filter((t) => t.services.includes(service));
  const featuredFirst = [...matches].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return featuredFirst.slice(0, limit);
}
