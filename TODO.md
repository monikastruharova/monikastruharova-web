# TODO pred nasadením do produkcie

Tento súbor sleduje otvorené otázky zo zadania (sekcia 14) a chýbajúce assety.
Web je funkčne aj obsahovo hotový (statický Next.js build), ale **nejde ho
pustiť naostro**, kým nie sú tieto body vyriešené.

## 1. Štruktúra stránok 5 / 7 / 8 (Dvojplameň / Ženské kruhy / Intuitívny tanec)
Zaradenie a poradie v menu je moja interpretácia zadania (chýbali explicitné
podklady k číslovaniu). Implementované ako:
`/sluzby/cesta-dvojplamena`, `/sluzby/zenske-kruhy`, `/sluzby/intuitivny-tanec`.
**Potvrdiť s Monikou pred spustením.**

## 2. Ceny — nesúlad medzi starým cenníkom a novým textom
- Terapia Cesta: nový text 120 € (implementované), starý cenník 90 €.
- Harmonizácia čakier: nový text 40 € / 25 € (skupina) (implementované),
  starý cenník 25 €.
**Potvrdiť aktuálne platné ceny.** Miesta v kóde: `src/app/sluzby/terapia-cesta/page.tsx`,
`src/app/sluzby/harmonizacia-cakier/page.tsx` (hľadaj komentár `TODO (sekcia 14, bod 2)`).

## 3. Kontaktný formulár → kam majú chodiť poptávky
Formulár (`src/components/ContactForm.tsx` → `src/app/api/kontakt/route.ts`) je
funkčný na strane frontendu, ale **zámerne neodosiela e-maily naostro** —
zatiaľ len validuje a loguje. Potrebné potvrdiť:
- cieľový e-mail / CRM, kam majú poptávky chodiť,
- či má odchádzať aj autoresponder klientovi,
a doplniť reálne odoslanie (napr. Resend/Nodemailer) + env premenné.

## 4. Videá Brandon Bays (stránka Terapia Cesta)
Potrebné embed odkazy z pôvodnej podstránky starého webu. Miesto v kóde:
`src/app/sluzby/terapia-cesta/page.tsx`, sekcia "Spoznaj silu Cesty priamo od
jej autorky" — momentálne 2 vyznačené placeholder boxy.

## 5. Facebook odkazy
Potrebné aktuálne URL na FB udalosti/skupiny ("Cestou srdca", "Dvojplameň
lásky" a pod.). Momentálne `siteConfig.facebookEvents` v `src/data/site.ts`
je prázdne — všetky odkazy na FB v UI to zobrazujú ako `#` / TODO.

## 6. Logo
Chýba súbor loga. Momentálne v hlavičke a v pätičke nahradené jednoduchým
kruhovým monogramom "M" — vyznačené `TODO` v `src/components/Header.tsx` a
`src/components/Footer.tsx`.

## 7. Staré URL / SEO presmerovania
Treba rozhodnúť, či staré podstránky (semináre, programy, terapeuti — pôvodne
súčasť širšieho webu metódy Cesta) zostávajú inde, alebo sa kompletne rušia.
Ak sa rušia, treba nastaviť 301 presmerovania zo starých URL na relevantné
nové stránky (pozri `next.config.ts` → `redirects()`), aby web neprišiel o
SEO hodnotu. **Zatiaľ nie je implementované — nemáme zoznam starých URL.**

---

## Chýbajúce assety (fotografie, certifikáty)
Nasadené sú len jasne označené vizuálne "sloty"
(`src/components/PlaceholderImage.tsx`) — žiadne umelo generované fotografie.
Pred produkciou nahradiť skutočnými súbormi:
- Portrét Moniky pre hero na Domove (`src/app/page.tsx`)
- Portrét Moniky pre Môj príbeh (`src/app/moj-pribeh/page.tsx`)
- Foto Moniky s Dalajlámom (`src/app/moj-pribeh/page.tsx`)
- 3 fotografie certifikátov: Terapia Cesta, Reiki Master III., Kvantový dotyk
  (`src/app/moj-pribeh/page.tsx`)
- Vizuál/foto k Ceste Dvojplameňa (Domov + `/sluzby/cesta-dvojplamena`)
- Foto atmosféry ženského kruhu (`/sluzby/zenske-kruhy`)
- Titulné fotografie ku každému blogovému článku
- Logo (SVG/PNG, svetlá aj prípadne tmavá verzia)
- Favicon (momentálne predvolený Next.js favicon)

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

## Ochrana osobných údajov
Stránka `/ochrana-osobnych-udajov` je len orientačná kostra (nebola súčasťou
zadania, doplnená ako praktická nutnosť ku cookie lište) — pred produkciou
skontrolovať/doplniť, ideálne s právnym poradenstvom, najmä pasáž o
príjemcovi údajov z kontaktného formulára (nadväzuje na bod 3 vyššie).
