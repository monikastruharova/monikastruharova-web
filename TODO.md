# TODO pred nasadením do produkcie

Tento súbor sleduje otvorené otázky zo zadania (sekcia 14) a chýbajúce assety.
Web je funkčne aj obsahovo hotový (statický Next.js build), ale **nejde ho
pustiť naostro**, kým nie sú tieto body vyriešené.

## 1. Štruktúra stránok — Dvojplamene / Ženské kruhy / Intuitívny tanec
Dvojplamene sú vyčlenené ako samostatná téma / špecializácia v hlavnom menu na `/dvojplamene` (nie pod službami).
Služby obsahujú: `/sluzby/terapia-cesta`, `/sluzby/harmonizacia-cakier`, `/sluzby/zenske-kruhy`, `/sluzby/intuitivny-tanec`.

## 2. ~~Ceny~~ — VYRIEŠENÉ
Potvrdené (Petr): ostávajú vyššie/novšie ceny. Terapia Cesta 120 €,
Harmonizácia čakier 40 € individuálne / 25 € skupinové. Staré ceny
z pôvodného cenníka (90 € / 25 €) sú neplatné, žiadna zmena v kóde
nebola potrebná (nový text bol už takto nasadený) — len odstránené
TODO komentáre.

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

## 8. ~~Meditácie (video)~~ — VYRIEŠENÉ
`MeditationBlock` teraz vie priamo prehrať YouTube video (znovupoužíva
`YouTubeEmbed`, rovnaká komponenta ako pri Terapii Cesta). Dodané 3
odkazy nasadené:
- Domov → "Meditácia vďačnosti" — https://youtu.be/ZuomJD3jE7s
- Intuitívny tanec → "Ranná meditácia" — https://youtu.be/RfzGQ1Uegys
- Harmonizácia čakier → "Meditácia so šungitom" — https://youtu.be/r5753H1sQ_8
  (Petr poslal tento odkaz pod názvom „Nalaďte si výnimočnú energiu" —
  to nesedí s nadpisom "Meditácia so šungitom" ani s textom o šungite,
  ktorý už bol na stránke. Video som napriek tomu vložil sem, keďže je
  to jediné voľné miesto z 3 odkazov, ale **potvrdiť s Monikou**, či ide
  o správne video pre túto sekciu, alebo či sa mal nadpis/text zmeniť na
  „Nalaďte si výnimočnú energiu".)

V texte "Ranná meditácia" ostávajú opravené 2 zjavné preklepy: "Tponúkam"
→ "Ponúkam", "obráťiš" → "obrátiš" — potvrdiť s Monikou, že to tak malo
byť (pozri aj bod nižšie o "Naučme sa dôverovať životu").

---

## Chýbajúce assety (fotografie, certifikáty)
Nasadené sú len jasne označené vizuálne "sloty"
(`src/components/PlaceholderImage.tsx`) — žiadne umelo generované fotografie.
Pred produkciou nahradiť skutočnými súbormi:
- **Portrét Moniky (`monika-struharova-portret.jpg`) presunutý na žiadosť
  z hera na Domove aj z Môjho príbehu na stránku Intuitívny tanec**
  (`src/app/sluzby/intuitivny-tanec/page.tsx` — nová dvojstĺpcová hero
  sekcia). Na Domove (`src/app/page.tsx`) aj na Môjom príbehu
  (`src/app/moj-pribeh/page.tsx`) je na jeho mieste opäť viditeľný
  placeholder — čaká sa na **inú, novú fotografiu** pre tieto 2 miesta.
- [x] Foto Moniky s Dalajlámom (nasadené na `/moj-pribeh` z roku 2008)
- [x] 3 fotografie certifikátov: Terapia Cesta (The Journey), Reiki Master,
  Kvantový dotyk (TKDM) — nasadené na `/moj-pribeh`, klikateľné na plnú
  veľkosť
- [x] Vizuál k Dvojplameňom na Domove — ruky držiace srdce (`src/app/page.tsx`,
  `public/images/h1-dvojplamene-vizual.jpg`)
- [x] Foto atmosféry ženského kruhu (`/sluzby/zenske-kruhy`,
  `public/images/h2-zenske-kruhy-atmosfera.jpg`) — voľnejšia symbolická
  fotka (žena s rozpaženými rukami v poli), nie priamo fotka z reálneho
  kruhu
- [x] 15 obrázkov v texte blogových článkov (Chanelingy, Keď oči
  prehovoria, Strach, Srí Lanka, Dvojplamene) — nasadené v
  `src/data/blog.ts`, zoznam pozri v pracovnom "Fotky na web" checkliste
  (artefakt zdieľaný v konverzácii). Zdrojové súbory dodané už
  pomenované presne podľa kódov z checklistu (H1, H2, B1–B15).
- [x] Titulné fotografie 29 blogových článkov stále chýbajú (checklist
  sekcia "3", zámerne odložené), ale viditeľný placeholder na ich mieste
  bol na žiadosť **odstránený** — vyzeral ako chyba, nie ako "pripravuje
  sa". `BlogPost` má teraz voliteľné `coverSrc`/`coverWidth`/
  `coverHeight` (`src/data/blog.ts`); `/blog/[slug]` zobrazí titulnú
  fotku iba keď je vyplnená, inak sekciu úplne vynechá — stačí neskôr
  doplniť len tieto 3 polia pre konkrétny článok, šablónu netreba meniť.
- [x] Logo — nasadené (mandala), pozri bod 6 vyššie
- [x] Favicon — nasadený z rovnakého loga

## Chýbajúci obsah blogu
- [x] **Kategórie blogu zjednodušené na 2** (na žiadosť Moniky) —
  zrušené podsekcie "Tanec", "Chanelingy", "Keď oči prehovoria" aj "Ako
  si správne želať" (odstránené polia `subcategory` v `src/data/blog.ts`).
  Všetky tieto články teraz patria len pod "Príbehy zo života", spolu s
  "Tajomný svet dvojplameňov" ostávajú jediné 2 kategórie — na `/blog`
  sú teraz len 3 záložky (Všetky / Príbehy zo života / Tajomný svet
  dvojplameňov).
- [x] Opravených 6 excerptov (krátkych "úvodov" pod názvom článku na
  `/blog`) podľa slovenčiny, ktorú poslala Monika: Srí Lanka, Tým že
  niečo odmietame tomu dávame silu, Čo je Intuitívny tanec?, Vojna v
  nás — Sloboda v nás, Čo pre nás znamená láska?, Život začína za
  hranicami kontroly.
- [x] Článok "Ako sa teda prejaví táto zmena v našom živote?" doplnený
  o chýbajúci úvod a premenovaný späť na pôvodný názov "Dvojplamene a
  veľká transformácia 2023" (Monika dodala celý pôvodný text). Pôvodné
  medzinadpisy "Ako sa teda prejaví táto zmena v našom živote?" a
  "dvojplamene-2" zostali zachované ako štruktúra článku (prvý ako
  medzititulok `h2`, druhý bol názov obrázka, nie text — nezobrazuje
  sa). Slug ostal nezmenený (`ako-sa-prejavi-tato-zmena-v-nasom-zivote`),
  aby sa nerozbili prípadné existujúce odkazy.
- [x] "Tanec srdca 1 — Z parketu do ambulancie" a "Tanec srdca 2 —
  Nečakaj a plň si sny" dodané a nasadené (`pending: false`,
  `src/data/blog.ts`). Zámerne **bez obrázkov v texte** (na žiadosť) —
  titulná fotka článku ostáva placeholder, rovnako ako u ostatných 27
  článkov (pozri "3 · Titulné fotky článkov" v checkliste).
- [x] "Slzy na parkete" a "Čo je Intuitívny tanec?" dodané a nasadené
  (`pending: false`) — rovnako bez obrázkov v texte, titulná fotka
  ostáva placeholder. **Celá séria "Tanec srdca" (4 články) je teraz
  kompletná**, blog už nemá žiadny rozpracovaný ("pripravuje sa")
  článok.
[x] Na žiadosť odstránené viditeľné slovo "TODO" z verejnej časti webu
  (excerpty aj stránka `/blog/[slug]`) — bolo omylom vidieť aj
  návštevníkom, nielen vo vývoji. Nahradené neutrálnym textom "Tento
  článok pripravujeme." Interná poznámka o chýbajúcom texte zostala len
  ako kódový komentár (neviditeľný na webe) + tu v TODO.md.

- [x] 4 staré "Chanelingy" články + 4 staré "Keď oči prehovoria" články
  dodané a nasadené v kategórii "Príbehy zo života" (`src/data/blog.ts`,
  formátované cez nový `BlogBody` komponent — medzititulky, zvýraznené
  citácie, zoznamy, miesta pre fotografie). Na žiadosť **nie sú splácané
  do jedného zoznamu** — každá stará rubrika má vlastné pole
  `subcategory` a na `/blog` sa zobrazuje ako samostatná sekcia s
  vlastným nadpisom ("Chanelingy" / "Keď oči prehovoria"). Tanečné
  články dostali vlastnú podsekciu "Tanec" pre symetriu so zvyškom
  (predtým boli bez nej).
- [x] `/blog` prerobený z dlhého scrollovania na preklikávacie záložky
  (nový `BlogBrowser` komponent, rovnaký vzor ako filter na
  `/skusenosti-klientov`) — "Všetky" ukáže prehľad po sekciách, kliknutím
  na konkrétnu záložku (Tanec / Chanelingy / Keď oči prehovoria / Tajomný
  svet dvojplameňov) sa zobrazí iba jej mriežka článkov, bez nutnosti
  scrollovať cez všetko.
  - Chanelingy: "Prečo venujeme viac pozornosti iným než sebe?", "Vojna
    v nás – Sloboda v nás", "Naučme sa dôverovať životu", "Čo pre nás
    znamená láska?"
  - Keď oči prehovoria: "Život začína za hranicami kontroly", "Boj o
    prežitie", "Ako vlastne vidíš?", "Tajomstvo"
  Pri vkladaní boli opravené zjavné preklepy/medzery (napr.
  "selý"→"celý", "žeak"→"že ak", "niekym"→"niekým", "urdžať"→"udržať",
  "víked"→"víkend", "starni"→"stajni" a pod.) a v "Chanelingoch"
  odstránené 2 zjavné artefakty vloženého obrázku v pôvodnom texte
  ("žena pred zrkadlomExistuje…", "obrazok2A v poslednom rohu…") — z
  týchto miest sa namiesto toho stali PlaceholderImage sloty.
  **Potvrdiť s Monikou:** jedna veta ostala nejasná a nebola opravovaná
  ("...až keď naplno vstúpi lido svojej energie..." v článku "Naučme sa
  dôverovať životu") — asi ide o preklep, ale nechali sme pôvodné
  znenie, kým nepríde spresnenie. Pridané medzititulky (napr.
  Prvý/Druhý/Tretí/Štvrtý roh…, "Stretnutie s Jerrym", "Náš úžasný
  orgán"…) sú moja formulácia, nie doslovný text od Moniky — voľne k
  úprave.
- [x] Ďalších 10 článkov dodaných a nasadených (`src/data/blog.ts`):
  "Srí Lanka mojimi očami", "Komfortná zóna a 5 krokov, ako z nej
  vystúpiť", "Strach", "Otvorme sa svojmu skutočnému potenciálu", "Do
  kedy ešte?", séria "Ako si správne želať 1–4" (vlastná podsekcia,
  zoskupená v záložkách), "Tým, že niečo odmietame, tomu dávame silu".
  3 duplicity z rovnakej dávky podkladov ("Život začína za hranicami
  kontroly", "Vojna v nás – Sloboda v nás", "Naučme sa dôverovať
  životu") preskočené, boli už na webe.
  Rovnaké pravidlá ako predtým: opravené len zjavné preklepy/medzery
  (napr. "vvždy"→"vždy", "predsalen"→"predsa len", "Zpanikárime"→
  "Spanikárime", "naddomovom"→"nad domovom"), artefakty vložených
  obrázkov v pôvodnom texte ("sri-lanka-2", "strach-ako-priatel",
  "strach-zo-straty-kontroly", "raj") nahradené PlaceholderImage slotmi.
  **Potvrdenie od Moniky, že "Ako si správne želať" a "Srí Lanka…" majú
  ostať v kategórii "Príbehy zo života"** (nebolo v zadaní explicitne
  povedané, len predpokladám podľa toho, ako boli dodané) — ak nie,
  ľahko presunúť do inej kategórie/podsekcie v `src/data/blog.ts`.
- **Otvorená otázka k podkladom:** posledná dávka textov sa v správe
  odťala na 50 000 znakoch uprostred článku "Naučme sa dôverovať
  životu" (ten duplicitný text sme už mali, nič sa nestratilo) — ale
  nevieme, či za ním nemali nasledovať ešte ďalšie články. Ak áno,
  pošli zvyšok, doplníme.
- [x] "Tajomný svet dvojplameňov" — kategória už nie je prázdna, dodaných
  a nasadených 7 článkov: "Dvojplamene a veľká transformácia 2023"
  (pôvodne nasadený neúplný, pod dočasným názvom "Ako sa teda prejaví
  táto zmena v našom živote?" — doplnený a premenovaný, pozri vyššie),
  "Dvojplameň a bolesť transformácie", "Kto je dvojplameň?"
  (opravený preklep v názve, pôvodne "dvoj plameň"), "Dva kľúčové
  faktory cesty dvojplameňa", "Dvojplameň – peklo alebo raj", "Kniha o
  dvojplameňoch", "Z obete do svojej sily". Rovnaké pravidlá: opravené
  len zjavné preklepy/medzery, artefakty vložených obrázkov z pôvodného
  textu ("dvojplamene-2", "cesta dvojplameňa") nahradené PlaceholderImage
  slotmi. CTA na všetkých vedie na `/dvojplamene`.

## ~~Staršie referencie zo starého webu~~ — VYRIEŠENÉ
Zadanie spomínalo referencie k Terapii Cesta a k Ceste Dvojplameňa z
pôvodného webu, ktoré sa mali preniesť na `/skusenosti-klientov`. Monika
postupne dodala plný text všetkých referencií (`src/data/testimonials.ts`)
— viď body nižšie.

- [x] 14 krátkych citátov o koučingu Dvojplameňov dodaných a nasadených
  (`src/data/dvojplamenQuotes.ts`, komponent `QuoteWall.tsx`, sekcia
  "Toto ste povedali o koučingu Dvojplameňov" na `/dvojplamene`).
  Na rozdiel od `testimonials.ts` **nemajú meno autora** (pôsobia ako
  útržky súkromných správ) — preto sa zobrazujú anonymne ako samostatná
  "stena citátov", nie ako plnohodnotné referencie s menom. Ak by
  Monika chcela k niektorým doplniť meno, presunúť ich radšej do
  `testimonials.ts` s `services: ["cesta-dvojplamena"]`.
  Opravené 2 preklepy ("Prišľa"→"Prišla", "intezívna"→"intenzívna").
- [x] **29 ďalších referencií dodaných a nasadených** (`src/data/testimonials.ts`):
  6× Ženské kruhy (predtým táto kategória nemala žiadnu referenciu —
  teraz sa zobrazujú aj na `/sluzby/zenske-kruhy`), 13× Terapia Cesta,
  9× Harmonizácia čakier, plus 1 samostatný klient podpísaný krstným
  menom "Monika" (zhoda mena s terapeutkou — 1:1 podľa podkladu,
  neprevažoval som ho). Dlhšie viacodsekové referencie (napr. "Udial sa
  zázrak", "Bolo treba otvoriť okno a vyvetrať") si zachovali pôvodné
  odseky — `TestimonialCard` má teraz `whitespace-pre-line`. Opravené
  len zjavné preklepy/medzery/úvodzovky (napr. "skovaný"→"schovaný",
  "obvinovaniu"→"obviňovaniu", chýbajúce "som"/čiarky); jedna referencia
  (Ľubomír, "Kalné vody sa upokojili") mala v podklade zalomené riadky
  uprostred viet (typicky pri kopírovaní z e-mailu) — preformátované na
  súvislé vety, obsah nezmenený.
  Ďalších **9 krátkych anonymných "momentiek"** o Harmonizácii čakier
  (bez mena autora) nasadených ako nová "stena citátov"
  (`src/data/harmonizaciaCakierQuotes.ts`, sekcia "A na záver vaše
  autentické momentky" na `/sluzby/harmonizacia-cakier`) — rovnaký
  princíp ako `dvojplamenQuotes.ts`.
- [x] **Ešte 12 posledných referencií dodaných a nasadených**: 7×
  Ženské kruhy (Andrea, Petra, Michaela, Eva, Viera, Denisa, Linda),
  4× Harmonizácia čakier (Juraj, Erika, Ingrid, Petra), 1× Terapia
  Cesta (Petra). Podklad k tejto dávke na začiatku obsahoval aj
  doslovnú duplicitu už nasadenej dávky Harmonizácie čakier (9
  referencií + 9 momentiek z bodu vyššie) — tá nebola znova pridaná,
  aby nevznikli duplicity v `testimonials.ts`. Rovnaké pravidlo pri
  preklepoch ako doteraz (len zjavné opravy, napr. "Neboľo"→"Nebolo",
  chýbajúce medzery/čiarky po interpunkcii). Referencie zo starého webu
  sú týmto **kompletne spracované**.

## Ochrana osobných údajov — obsah schválený Monikou
Monika si stránku `/ochrana-osobnych-udajov` pozrela a text (mimo drobnej
jazykovej opravy "poptávka" → "požiadavka") jej vyhovuje. Výslovne si
zatiaľ neželá pridávať viac kontaktov, než mala na pôvodnom webe — takže
sa tu už nemá dopĺňať napr. telefón ani e-mail, iba ak si to sama vyžiada.
Zostávajúce TODO: doplniť fakturačné/IČO údaje pri "Prevádzkovateľ", ak sú
relevantné (pozri komentár priamo v `page.tsx`).
