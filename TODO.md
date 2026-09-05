# TODO pred nasadením do produkcie

Tento súbor sleduje otvorené otázky zo zadania (sekcia 14) a chýbajúce assety.
Web je funkčne aj obsahovo hotový (statický Next.js build), ale **nejde ho
pustiť naostro**, kým nie sú tieto body vyriešené.

## 1. Štruktúra stránok — Dvojplameň / Ženské kruhy / Intuitívny tanec
Dvojplameň je vyčlenený ako samostatná téma v hlavnom menu na `/dvojplamen`
(nie pod službami). Služby obsahujú: `/sluzby/terapia-cesta`,
`/sluzby/harmonizacia-cakier`, `/sluzby/zenske-kruhy`,
`/sluzby/intuitivny-tanec`.

**Aktualizácia (na žiadosť Moniky):** stránka aj URL premenované z
množného čísla "Dvojplamene"/`/dvojplamene` na jednotné číslo
"Dvojplameň"/`/dvojplamen` — všade, kde ide o názov sekcie/tlačidlo
(menu, nadpis, CTA na Domove a v blogu). Pôvodná URL `/dvojplamene` má
trvalé (301) presmerovanie na `/dvojplamen` (`next.config.ts`).
Nezmenené ostali gramatické tvary v texte blogových článkov ("Dvojplamene
sú...", "Dvojplamene majú...") a názov článku "Dvojplamene a veľká
transformácia 2023" — to je Monikin pôvodný text, nie názov sekcie.
Zároveň odstránený "eyebrow" nadpis "Špecializácia" nad H1 (na žiadosť),
zmenená úvodná veta pred citátmi a text CTA na konci stránky.

## 2. ~~Ceny~~ — VYRIEŠENÉ
Potvrdené (Petr): ostávajú vyššie/novšie ceny. Terapia Cesta 120 €,
Harmonizácia čakier 40 € individuálne / 25 € skupinové. Staré ceny
z pôvodného cenníka (90 € / 25 €) sú neplatné, žiadna zmena v kóde
nebola potrebná (nový text bol už takto nasadený) — len odstránené
TODO komentáre.

**Aktualizácia (na žiadosť Moniky):**
- Pri každej cene odstránené doplnkové slovné spojenia "energetická
  výmena" a "/ osoba" — pri cene je teraz už len suma (Terapia Cesta,
  Harmonizácia čakier, Ženské kruhy, Intuitívny tanec).
- Pri Terapii Cesta a Harmonizácii čakier doplnená informácia
  "Osobne alebo online." (tieto 2 služby robí Monika oboma spôsobmi).
- Pri Harmonizácii čakier vymazaná veta "Skupinové harmonizácie
  organizujem príležitostne."

## 3. ~~Kontakt~~ — VYRIEŠENÉ (viackanálovo)
Pôvodne (skôr v projekte) sa Monika rozhodla pre Facebook ako jediný
kontaktný kanál, neskôr chcela späť aj e-mail. Teraz (nová požiadavka):
nie každý klient má Facebook, takže `/kontakt` je prestavaný na
rovnocenný výber zo 4 kanálov — Telefón, WhatsApp, Facebook Messenger,
E-mail (`src/app/kontakt/page.tsx`, hodnoty v `siteConfig` v
`src/data/site.ts`: `phone`, `whatsapp`, `email`, `facebook`). Telefónne
číslo `+421 905 281 561` poslala Monika priamo. Položka "Facebook
Messenger" pôvodne viedla na priamy `m.me/cestou.srdca` odkaz na
Messenger chat — na žiadosť zmenené tak, aby viedla na jej Facebook
stránku (`siteConfig.facebook`) rovnako ako všade inde na webe.

Položka "Kontakt" je späť v hlavnej navigácii aj v pätičke (na konci,
presne ako v úplne prvej verzii webu). Tlačidlo "Objednať sa" v hlavičke
aj všetky CTA "Chcem sa objednať"/"Rezervovať si miesto..." naprieč
webom teraz vedú na `/kontakt` namiesto priamo na Facebook — výnimka sú
2 tlačidlá, ktoré sú zámerne o FB **udalostiach**, nie o kontaktovaní
("Aktuálne podujatia na Facebooku" na Harmonizácii čakier, "Pozri si
najbližšie termíny" na Intuitívnom tanci) — tie ostávajú viesť na
`siteConfig.facebookEvents`.

Pôvodný `ContactForm` + `/api/kontakt` route zostávajú v kóde nenapojené
(pozri komentár na začiatku oboch súborov) pre prípad, že by Monika
predsa len chcela aj webový formulár popri týchto 4 kanáloch.

## ~~4. Videá Brandon Bays (stránka Terapia Cesta)~~ — VYRIEŠENÉ
Monika poslala 3 YouTube odkazy, nasadené v
`src/app/sluzby/terapia-cesta/page.tsx` (predtým sme sa ich márne
snažili dohľadať zo starého webu — jeho video-slider sa načítaval cez
JavaScript, automatizovaný prístup naň nevidel):
1. „Duše K: rozhovor s Brandon Bays o transformačnej Ceste (2024)" —
   https://youtu.be/omQynw97v-A
2. „Dokument o metóde Cesta — Brandon Bays v Bratislave (2013)" —
   https://youtu.be/C1omEQWuxgM
3. „Duše K: rozhovor s Brandon Bays o liečivej Ceste (2018)" —
   https://youtu.be/vBxtkzlJbRY

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
  **Možno chýba ešte jedna:** pri overovaní na starom webe sa mihla aj
  momentka "Ja si harmonizujem čakry často. Vždy je to výborný pocit.",
  ktorú v podkladoch nemám — ak ju Monika chce doplniť, stačí poslať
  potvrdenie/text a pridá sa.
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

## ~~7 najstarších referencií boli len skrátené úryvky~~ — VYRIEŠENÉ
Monika (nevidiaca, web si necháva čítať telefónom) upozornila, že
niektoré referencie znejú neúplne. Potvrdené: 7 referencií z úplne
prvej dávky (ešte z prvého commitu webu, predtým, než sa v tejto
konverzácii doplnili plné texty ostatných ~40) obsahovalo v strede vety
"…", čo znamenalo skrátený výťah, nie plný pôvodný text. Nešlo o žiadne
nastavenie telefónu/čítačky — text bol v dátach naozaj kratší. Monika
poslala plné pôvodné znenie všetkých 7 a sú teraz doplnené v
`src/data/testimonials.ts` (zachované pôvodné odseky cez
`whitespace-pre-line`, opravené len zjavné preklepy — napr.
"softwér"→"softvér", "v v hrudi"→"v hrudi", "Bolo som"→"Bol som"):
- "Život je niečo fantastické!" — Peter
- "Navraciam sa do vlastnej sily" — Zlatica
- "Som vnútorne šťastný" — Marián
- "Ešte si takéto prosím" — Eva
- "Dokázala som ísť hlbšie, než som si myslela" — Diana
- "Moja duša žiari šťastím" — Peter
- "Proces mi priniesol nové uvedomenia" — Zlatica

## ~~Recenzia "Rozviazala mi ruky" (Juraj) bola neúplná~~ — VYRIEŠENÉ
Monika poslala plný text, doplnené v `src/data/testimonials.ts` (id
`juraj-rozviazala-mi-ruky`) — pribudol chýbajúci úvodný odsek pred už
existujúcou vetou. Opravený aj drobný preklep "Terapia cesta" →
"Terapia Cesta" (veľké C, konzistentne s názvom metódy všade inde na
webe).

## Opravená "pomlčka" pri čítaní nahlas (na potvrdenie)
Monika (číta si web cez čítačku) nahlásila rušivú dlhú pomlčku po
skúsenosti Zuzky na Harmonizácii čakier a po skúsenostiach na
Intuitívnom tanci. Overené char-by-char — jediné spojovníky/pomlčky v
zobrazených referenciách boli: "Pracovali sme spolu 2-3 krát denne"
(Zuzana) → zmenené na "2 až 3 krát denne"; "...nedá úplne opísať –
treba ho zažiť." (Marián) → rozdelené na dve vety. **Zatiaľ nepotvrdené
Monikou** — ak pomlčka po nasadení stále znie, potrebujem presnejšie
miesto.

## Kurátorstvo referencií — presné umiestnenie podľa Moniky
Na žiadosť sme prestali spoliehať na automatický výber "prvé 2 podľa
poradia v poli" a namiesto toho je presne určené, čo sa kde zobrazuje:

- **Kategória "Dvojplamene" v referenciách úplne zrušená**
  (`ServiceSlug` už neobsahuje `"cesta-dvojplamena"`, zmizla aj záložka
  v `TestimonialsBrowser`). Jediná referencia, čo v nej bola (Zlatica,
  "Navraciam sa do vlastnej sily"), presunutá k `"terapia-cesta"`.
  Sekcia s referenciami na `/dvojplamene` (predtým `testimonialsFor
  ("cesta-dvojplamena", 2)`) bola preto úplne odstránená — na stránke
  zostala len "stena citátov" (momenty), tá dostala aj nový nadpis
  a úvodnú vetu, pozri nižšie.
- **Domov ("Povedali o mne…"):** teraz ručne vybrané 2 referencie podľa
  `id`, nezávisle od `featured` — nová funkcia `testimonialsByIds()` v
  `src/data/testimonials.ts`. Zobrazené: "V toľkých rokoch som sa
  znova zrodil!" (Rado) a "Som vnútorne šťastný" (Marián). Predtým tam
  bola "Život je niečo fantastické!" (Peter) — tá bola na žiadosť
  presunutá **na úplný koniec** zoznamu referencií (`testimonials.ts`),
  aby nebola nikde prvá.
- **Terapia Cesta:** zobrazené 2 referencie sú teraz "Udial sa zázrak"
  (Lenka) a "Rozviazala mi ruky" (Juraj) — nastavené cez `featured`.
  Predtým zobrazované "Život je niečo fantastické!" (Peter) a "Dokázala
  som ísť hlbšie..." (Diana) už `featured` nemajú.
- **Harmonizácia čakier:** zobrazené 2 referencie "Mojím telom znovu
  začínal pretekať život" (Zuzana, tá tam bola už predtým) a "Kalné
  vody sa upokojili" (Ľubomír, novo pridané `featured`).
- Ženské kruhy a Intuitívny tanec neboli spomenuté, zostali bez zmeny.

## Vaše aha-momenty na ceste Dvojplameňov (predtým iný nadpis)
Na žiadosť premenovaný nadpis sekcie so "stenou citátov" na
`/dvojplamene` z "Toto ste povedali o koučingu Dvojplameňov" na "Vaše
aha-momenty na ceste Dvojplameňov" a doplnená chýbajúca úvodná veta
(predtým nadpis prechádzal rovno do citátov bez kontextu).

## ~~Ochrana osobných údajov~~ — VYRIEŠENÉ, stránka je finálna
Monika potvrdila, že k GDPR obsahu už nič nové neplánuje posielať — text
je definitívny. Preto:
- odstránený viditeľný orientačný "TODO" rámček navrchu stránky aj veta
  "(TODO: doplniť fakturačné/IČO údaje...)" pri "Prevádzkovateľ" (obe
  boli reálne viditeľné pre návštevníkov, nielen vo vývoji)
- `robots: { index: false }` odstránené z metadát (stránka už nie je
  rozpracovaná, nemá dôvod byť schovaná pred vyhľadávačmi)
- sekcia "Prevádzkovateľ" teraz odkazuje na `/kontakt` namiesto priameho
  Facebook odkazu (kvôli viackanálovému kontaktu, pozri bod 3 vyššie);
  sekcia "Aké údaje spracúvame" rozšírená o telefón/WhatsApp/e-mail
  (predtým spomínala len Facebook)
- **pridaná nová podsekcia "Vylúčenie zodpovednosti"** — návrh textu
  odo mňa (bežná formulka pre terapeutické/koučovacie weby: obsah je
  informačný, nenahrádza odbornú/lekársku starostlivosť, účasť na
  sedeniach je dobrovoľná). **Monika si ho môže upraviť/prepísať** —
  zatiaľ ide len o môj návrh, nie o jej vlastné schválené znenie.
