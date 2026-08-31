# TODO pred nasadením do produkcie

Tento súbor sleduje otvorené otázky zo zadania (sekcia 14) a chýbajúce assety.
Web je funkčne aj obsahovo hotový (statický Next.js build), ale **nejde ho
pustiť naostro**, kým nie sú tieto body vyriešené.

## 1. Štruktúra stránok — Dvojplamene / Ženské kruhy / Intuitívny tanec
Dvojplamene sú vyčlenené ako samostatná téma / špecializácia v hlavnom menu na `/dvojplamene` (nie pod službami).
Služby obsahujú: `/sluzby/terapia-cesta`, `/sluzby/harmonizacia-cakier`, `/sluzby/zenske-kruhy`, `/sluzby/intuitivny-tanec`.

## 2. Ceny — nesúlad medzi starým cenníkom a novým textom
- Terapia Cesta: nový text 120 € (implementované), starý cenník 90 €.
- Harmonizácia čakier: nový text 40 € / 25 € (skupina) (implementované),
  starý cenník 25 €.
**Potvrdiť aktuálne platné ceny.** Miesta v kóde: `src/app/sluzby/terapia-cesta/page.tsx`,
`src/app/sluzby/harmonizacia-cakier/page.tsx` (hľadaj komentár `TODO (sekcia 14, bod 2)`).

## 3. ~~Kontaktný formulár~~ → požiadavky vedú na Facebook — VYRIEŠENÉ
Monika sa rozhodla, že požiadavky majú chodiť cez Facebook, nie cez formulár/
e-mail. Všetky "Objednať sa" / "Chcem sa objednať..." CTA po webe (header,
`/kontakt`, závery stránok služieb aj Dvojplameňov) teraz vedú na
`siteConfig.facebook` = `https://www.facebook.com/cestou.srdca` (nová
karta). Kontaktný e-mail bol na výslovnú žiadosť úplne odstránený z webu
(pätička, `/kontakt`, `/ochrana-osobnych-udajov`) — Facebook je teraz
jediný uvedený kontaktný kanál. Položka "Kontakt" bola na žiadosť
odstránená aj z hlavnej navigácie (`src/data/site.ts` → `mainNav`) —
stránka `/kontakt` naďalej existuje (napr. pre priamy odkaz), len už nie
je v menu ani v pätičke.

Pôvodný `ContactForm` + `/api/kontakt` route zostávajú v kóde nenapojené
(pozri komentár na začiatku oboch súborov) pre prípad, že by sa Monika
neskôr rozhodla pre formulár/e-mail popri Facebooku.

## 4. Videá Brandon Bays (stránka Terapia Cesta)
Pripravené 3 sloty (`src/components/YouTubeEmbed.tsx`, použité v
`src/app/sluzby/terapia-cesta/page.tsx`) — stačí doplniť YouTube odkaz do
`url` pre každé video a automaticky sa prehrá priamo na stránke (bez
odchodu na YouTube). Zatiaľ bez odkazov, zobrazuje sa placeholder.

## 5. Facebook odkazy — čiastočne vyriešené
Hlavný profil `https://www.facebook.com/cestou.srdca` je doplnený a
používa sa všade (kontakt, hlavičky, pätička, "Aktuálne podujatia").
TODO: ak časom vznikne samostatná FB udalosť/skupina len pre podujatia
(napr. "Dvojplameň lásky"), doplniť jej vlastné URL do
`siteConfig.facebookEvents` v `src/data/site.ts` (zatiaľ ukazuje na ten
istý profil).

## 6. ~~Logo~~ — VYRIEŠENÉ
Nasadené zelené mandala logo (dodané ako animovaný GIF, extrahovaný
statický snímok) — `public/images/logo-mandala.png`. Použité v hlavičke
(`Header.tsx`), pätičke (`Footer.tsx`) a ako favicon (`src/app/icon.png`,
nahradil pôvodný predvolený Next.js favicon).
Zdrojový súbor má len 100×100 px — ak Monika má k dispozícii vektor
(AI/EPS/SVG) alebo väčšie rozlíšenie, oplatí sa ho nahradiť pre ostrejšie
zobrazenie na retina displejoch a väčších plochách.

## 7. Staré URL / SEO presmerovania
Treba rozhodnúť, či staré podstránky (semináre, programy, terapeuti — pôvodne
súčasť širšieho webu metódy Cesta) zostávajú inde, alebo sa kompletne rušia.
Ak sa rušia, treba nastaviť 301 presmerovania zo starých URL na relevantné
nové stránky (pozri `next.config.ts` → `redirects()`), aby web neprišiel o
SEO hodnotu. **Zatiaľ nie je implementované — nemáme zoznam starých URL.**

## 8. Meditácie (audio/video)
Pridané 3 nové sekcie s textom od Moniky (`src/components/MeditationBlock.tsx`):
- Domov → "Meditácia vďačnosti"
- Harmonizácia čakier → "Meditácia so šungitom"
- Intuitívny tanec → "Ranná meditácia" (v texte opravené 2 zjavné preklepy:
  "Tponúkam" → "Ponúkam", "obráťiš" → "obrátiš" — potvrdiť s Monikou, že to
  tak malo byť)

Chýba samotný súbor/odkaz na meditáciu (mp3, video, alebo embed napr.
YouTube/SoundCloud) — momentálne len vizuálny placeholder prehrávača.
Treba doplniť: formát (audio vs. video), samotný súbor/odkaz, a podľa toho
nahradiť placeholder v `MeditationBlock.tsx` reálnym `<audio>`/`<iframe>`.

---

## Chýbajúce assety (fotografie, certifikáty)
Nasadené sú len jasne označené vizuálne "sloty"
(`src/components/PlaceholderImage.tsx`) — žiadne umelo generované fotografie.
Pred produkciou nahradiť skutočnými súbormi:
- [x] Portrét Moniky pre hero na Domove (`src/app/page.tsx`)
- [x] Portrét Moniky pre Môj príbeh (`src/app/moj-pribeh/page.tsx`)
- [x] Foto Moniky s Dalajlámom (nasadené na `/moj-pribeh` z roku 2008)
- [x] 3 fotografie certifikátov: Terapia Cesta (The Journey), Reiki Master,
  Kvantový dotyk (TKDM) — nasadené na `/moj-pribeh`, klikateľné na plnú
  veľkosť
- Vizuál/foto k Dvojplameňom (Domov + `/dvojplamene`)
- Foto atmosféry ženského kruhu (`/sluzby/zenske-kruhy`)
- Titulné fotografie ku každému blogovému článku
- [x] Logo — nasadené (mandala), pozri bod 6 vyššie
- [x] Favicon — nasadený z rovnakého loga

## Chýbajúci obsah blogu
Plný text 4 nových článkov ("Tanec srdca 1", "Tanec srdca 2", "Slzy na
parkete", "Čo je Intuitívny tanec?") nebol súčasťou dodaných podkladov do
tohto promptu — v `src/data/blog.ts` a na stránkach `/blog/[slug]` sú
pripravené ako TODO/koncept. Rovnako chýbajú staré články zo starého webu
(kategórie "Keď oči prehovoria", "Chanelingy", "Tajomný svet dvojplameňov")
— nemáme ich tituly ani text, treba dodať na migráciu.

## Staršie referencie zo starého webu
Zadanie spomína referencie k Terapii Cesta a k Ceste Dvojplameňa z pôvodného
webu, ktoré sa majú preniesť na `/skusenosti-klientov` — plný text nebol
súčasťou podkladov, treba doplniť (`src/data/testimonials.ts`).

## Ochrana osobných údajov — obsah schválený Monikou
Monika si stránku `/ochrana-osobnych-udajov` pozrela a text (mimo drobnej
jazykovej opravy "poptávka" → "požiadavka") jej vyhovuje. Výslovne si
zatiaľ neželá pridávať viac kontaktov, než mala na pôvodnom webe — takže
sa tu už nemá dopĺňať napr. telefón ani e-mail, iba ak si to sama vyžiada.
Zostávajúce TODO: doplniť fakturačné/IČO údaje pri "Prevádzkovateľ", ak sú
relevantné (pozri komentár priamo v `page.tsx`).
