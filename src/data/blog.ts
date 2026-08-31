export type BlogCategory = "pribehy-zo-zivota" | "tajomny-svet-dvojplamenov";

export const blogCategories: { slug: BlogCategory; title: string }[] = [
  { slug: "pribehy-zo-zivota", title: "Príbehy zo života" },
  { slug: "tajomny-svet-dvojplamenov", title: "Tajomný svet dvojplameňov" },
];

// Stavebné bloky pre formátovaný text článku — odstavec, medzititulok,
// zvýraznená citácia, odrážkový zoznam a miesto pre fotografiu (zatiaľ len
// PlaceholderImage "slot", kým Monika nedodá konkrétne obrázky).
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; label: string };

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
  body?: BlogBlock[];
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
  {
    slug: "preco-venujeme-viac-pozornosti-inym-nez-sebe",
    title: "Prečo venujeme viac pozornosti iným než sebe?",
    category: "pribehy-zo-zivota",
    excerpt:
      "Kedy naposledy ste si našli čas len pre seba? Prečo tak často dávame iným všetko, no nám musia stačiť omrvinky — a ako sa z tejto pasce vymaniť.",
    ctaLabel: "Objav terapiu Cesta",
    ctaHref: "/sluzby/terapia-cesta",
    pending: false,
    body: [
      { type: "p", text: "Kedy naposledy ste si našli čas len pre seba? Kedy ste sa naozaj zastavili a venovali pozornosť svojim potrebám a pocitom?" },
      { type: "p", text: "Tiež patríte k tým, čo sa starajú skôr o ostatných a seba posúvajú na posledné miesto?" },
      { type: "p", text: "Prečo je to tak? Prečo sa tak často prichytíme pri tom, že iným dávame všetko, no nám musia stačiť omrvinky?" },
      { type: "p", text: "Väčšina ľudí priznáva, že je vyčerpaná a má pocit, že na seba nemá dostatok času. Tento jav, nazývaný tiež „syndróm vyhorenia“, je často spojený s tým, že berieme príliš veľký ohľad na druhých, no zabúdame pritom na seba." },
      { type: "p", text: "Takéto dlhodobé zameriavanie sa na iných na úkor seba však môže úplne vyčerpať naše energetické rezervy a viesť k fyzickej i psychickej únave a strate radosti a životnej sily. Ak si z akéhokoľvek dôvodu nedobíjame vlastné baterky, skôr či neskôr nás dobehne frustrácia a nespokojnosť." },
      { type: "quote", text: "Zvláštnou iróniou však je, že vyhorenie ohrozuje najviac práve tých, čo sú najochotnejší pomáhať ostatným. A teda tí, ktorí prinášajú svetlo iným, sami ostávajú v tieni." },
      { type: "p", text: "Tiež patríte medzi obetavé mamy, ktoré dávajú všetok drahocenný čas svojmu dieťaťu, pričom zanedbávajú vlastný odpočinok a zabúdajú sa najesť? Alebo ste tým zodpovedným otcom, čo v snahe zabezpečiť rodinu dobrovoľne pracuje dlhé nadčasy, a preto chodieva domov až po zotmení?" },
      { type: "p", text: "Možno ste boli tým starším súrodencom, ktorý bol nútený vzdať sa svojich záľub, lebo musel pomáhať mladšiemu bratovi či sestre s domácimi úlohami. A možno ste ženou, tou bútľavou vŕbou, ktorá stále rieši neriešiteľné problémy svojho partnera, miesto toho, aby myslela viac na seba." },
      { type: "p", text: "Či ste skôr natoľko loajálnym zamestnancom, že ochotne súhlasíte s každou novou úlohou, aj keď máte práce vyše hlavy, len aby ste nesklamali nadriadeného? Alebo sa radšej vzdáte svojho názoru, len aby ste nevyčnievali z davu a zachovali harmóniu v tíme?" },
      { type: "image", label: "Žena pred zrkadlom" },
      { type: "p", text: "Existuje mnoho dôvodov, ktoré nás podnecujú k tomu, aby sme sa zaujímali viac o životy iných ako o ten svoj. A ako v dobrej detektívke, poďme si ich predstaviť a podložiť dôkazmi ukrytými v štyroch záhadných rohoch miestnosti, ktorá uchováva príbehy nášho života. Tieto tmavé kúty sú často neviditeľné, no napriek tomu vplývajú na naše rozhodnutia a činy. Ktorý z nich teda odhalí to najväčšie prekvapenie?" },
      { type: "h2", text: "Prvý roh: reťaze prostredia" },
      { type: "p", text: "V prvom, najbližšom rohu ležia pevné reťaze, ktoré nás zväzujú a nedovolia nám slobodne dýchať." },
      { type: "p", text: "Sú to reťaze prostredia, v ktorom vyrastáme a žijeme, pretože práve ono má výrazný dopad na to, ako vnímame seba a ako sa k sebe správame. Sme prirodzene formovaní normami a hodnotami, ktoré uznáva naša rodina, priatelia, ale aj spoločnosť." },
      { type: "p", text: "Výchova nás často pripravuje na to, aby sme boli súčasťou systému, a nie sami sebou. Preto sa na nás vyvíja silný tlak plniť očakávania, ktoré nás robia závislými na hodnotení druhých." },
      { type: "p", text: "Ak sa od detstva učíme, že za každých okolností máme byť milí, že máme iným pomáhať a prispôsobiť sa, tento postoj môže viesť k tomu, že naše vlastné potreby a želania automaticky odsúvame na vedľajšiu koľaj. Ľahko tak podľahneme mylnej predstave, že nie sme takí dôležití ako ostatní." },
      { type: "p", text: "Veľkú úlohu tu však zohrávajú aj sociálne médiá. Konzumná spoločnosť, v ktorej žijeme, nás permanentne vystavuje obrazom úspešných, krásnych a šťastných ľudí. To v nás môže vyvolať pocit nedostatočnosti a menejcennosti. Ak sa k tomu pridá stigmatizácia, napríklad kvôli vzhľadu, zdravotnému stavu, prípadne iným charakteristikám, môže nám to priniesť komplikácie s prijatím toho, akí naozaj sme. A tak spočiatku nevinná myšlienka o niečom úspechu v nás môže prerásť do stále zdrvujúcejšieho pocitu, že nie sme dosť dobrí." },
      { type: "h2", text: "Druhý roh: strach z odmietnutia" },
      { type: "p", text: "Ďalší roh miestnosti je temnejší, až klaustrofobický. Ukrýva sa tu strach z toho, že budeme odmietnutí." },
      { type: "p", text: "Ak sme v minulosti zažili bolestivé odmietnutie, je pravdepodobné, že máme tendenciu zažiť ho aj v budúcnosti. Naše podvedomie si trpkú skúsenosť dobre uloží do pamäte a pri najbližšej príležitosti nám ju určite pripomenie. A hoci si uvedomíme, že nová situácia je odlišná, zrazu pocítime neistotu a ohlušujúci strach, ktorý nám jednoznačne radí, aby sme všetko vzdali, lebo to nemá zmysel." },
      { type: "p", text: "Sme však pripravení ustúpiť a zmieriť sa s porážkou?" },
      { type: "p", text: "Sotva. A preto sa snažíme byť ešte lepší a ešte dokonalejší." },
      { type: "p", text: "Veríme, že ak budeme v očiach iných perfektní, vyhneme sa kritike. No práve nesúhlas a kritika sú tými najničivejšími zbraňami, ktoré vedia našu dušu kruto zraniť." },
      { type: "p", text: "Naše správanie môže taktiež silne ovplyvňovať hlboko zakorenené presvedčenie, že ak sa príliš zameriame na seba, ľudia nás budú považovať za sebeckých a narcistických. A tak sa beznádejne stále dokola točíme v pasci menejcennosti, perfekcionizmu a starého známeho odmietania, ktorého sa túžime za každú cenu zbaviť." },
      { type: "h2", text: "Tretí roh: skresľujúce zrkadlo" },
      { type: "p", text: "V treťom rohu visí zrkadlo, ktoré zmenšuje a skresľuje náš obraz. Jeho úlohou je poukázať na náš nedostatok sebavedomia." },
      { type: "p", text: "Nízka sebadôvera a neistota často vedie k tomu, že svoju pozornosť radšej sústredíme na potreby a pocity ostatných. Je to akoby sme sa snažili potvrdiť svoju hodnotu prostredníctvom toho, čo robíme pre iných." },
      { type: "p", text: "Veríme, že ak sa o niekoho postaráme, na oplátku dostaneme prijatie a uznanie. Túžba po chýbajúcej láske nás preto ambiciózne ženie vpred. Nedokážeme si ju dať sami a tak ju zúfalo potrebujeme od iných. A robíme všetko, aby sme prázdnotu v srdci rýchlo vyplnili." },
      { type: "p", text: "Ak trpíme nízkym sebavedomím, máme tendenciu porovnávať sa s inými. Prevláda v nás pocit, že nie sme dosť dobrí a to nás motivuje viac sa starať o druhých než o seba. A paradoxne, čím viac sa snažíme získať uznanie od druhých, tým viac si potvrdzujeme vlastnú nízku hodnotu." },
      { type: "h2", text: "Štvrtý roh: nekončiaci bežiaci pás" },
      { type: "image", label: "Ilustračný obrázok k článku" },
      { type: "p", text: "A v poslednom rohu čaká nekončiaci bežiaci pás. Keď naň nastúpime, rýchlosť sa začne zvyšovať. A keď spomalíme, spadneme." },
      { type: "p", text: "Je to situácia podobná životu: čím viac urobíme, tým viac sa od nás vyžaduje." },
      { type: "p", text: "V dnešnej dobe sa kladie veľký dôraz na úspech, produktivitu a neustále zvyšovanie výkonu." },
      { type: "p", text: "V takejto filozofii zameranej na súťaživosť a výsledky sa často hodnotíme podľa toho, čo dosiahneme a čo si o nás myslia iní. Stále viac sa snažíme uspokojiť ich očakávania a získať ich uznanie. A ako dôsledok venujeme menej pozornosti svojim vlastným potrebám a spokojnosti." },
      { type: "p", text: "Kultúra výkonu brilantne podporuje porovnávanie sa s ostatnými. Neustále meranie toho, ako sme na tom v porovnaní s kolegami, priateľmi, alebo dokonca celebritami, v nás môže vyvolať silný pocit nedostatočnosti, ktorý nás núti dosiahnuť rovnaké, či ešte lepšie výsledky." },
      { type: "p", text: "Neúspech sa tu priamo spája so zlyhaním a neschopnosťou. Aby sme predišli možnej prehre a pádu, musíme vyhovieť iným, lebo sa bojíme, že ak sa nám niečo nepodarí, budeme odmietnutí a utrpíme krutú porážku." },
      { type: "p", text: "V snahe dosiahnuť vysoké ciele a splniť cudzie očakávania neraz obetujeme vlastné pocity, zdravie a voľný čas." },
      { type: "p", text: "Ako by ste sa v temných zákutiach tejto miestnosti cítili Vy?" },
      { type: "p", text: "Mnohí z nás robia všetko pre to, aby vyhoveli očakávaniam svojich blízkych, rodiny, kolegov, či spoločnosti. Pritom však neraz potláčame svoje vlastné túžby. Venujme preto pozornosť aj sebe." },
      { type: "quote", text: "Ty si ten najdôležitejší človek v Tvojom živote!" },
      { type: "p", text: "Možno si poviete, že to znie egoisticky, ale je to pravda. Vy ste tí, ktorí s Vami sú 24 hodín denne bez prerušenia po celý život. Vy ste tí, čo poznáte seba najlepšie. Vy viete, čo Vám prináša bolesť, z čoho máte strach a čo si nedokážete pripustiť." },
      { type: "p", text: "Ak sa o seba nepostaráte Vy, kto iný to urobí?" },
      { type: "p", text: "Sebaláska je základom spokojného života. Ak máme radi sami seba, sme schopní milovať aj druhých." },
      { type: "p", text: "Najprv musíme naplniť vlastnú nádobu, aby sme vedeli ponúknuť aj ostatným. Inak budeme vyčerpaní a slabí." },
      { type: "h2", text: "Je to jednoduché" },
      { type: "list", items: [
        "Keď sa staráme o seba, zvyšujeme si sebavedomie a sebaúctu.",
        "Keď sme spokojní sami so sebou, sme schopní budovať zdravé a šťastné vzťahy.",
        "Dobrá starostlivosť o seba nám dodáva energiu a motiváciu, čo sa priaznivo prejaví aj na našom výkone a výsledkoch.",
        "Keď sa venujeme svojim potrebám, znižujeme svoju hladinu stresu a zlepšujeme svoje duševné zdravie.",
      ] },
      { type: "h2", text: "Ako na to" },
      { type: "list", items: [
        "Je dôležité si priznať, čo potrebujeme a čo nás robí šťastnými.",
        "Je úplne v poriadku povedať „nie“ a chrániť si svoj čas a energiu.",
        "Venujme sa svojim záľubám a robme veci, ktoré nás bavia a napĺňajú.",
        "Dbajme o svoje fyzické zdravie. Pravidelný pohyb, zdravá vyvážená strava a dostatok spánku sú základom pre našu pohodu.",
        "Už aj pár minút tichej meditácie každý deň dokáže urobiť veľké zázraky. Čas a energia, ktorú investujeme do seba, sa nám mnohonásobne vrátia.",
        "A ak máme problémy venovať sebe potrebnú pozornosť, vyhľadajme podporu. Porozprávajme sa s priateľom, príbuzným alebo terapeutom, ktorí nám podajú pomocnú ruku a nasmerujú na správnu cestu.",
      ] },
    ],
  },
  {
    slug: "vojna-v-nas-sloboda-v-nas",
    title: "Vojna v nás – Sloboda v nás",
    category: "pribehy-zo-zivota",
    excerpt:
      "Keď drvivé správy o vojne dorazia k hraniciam našej mysle, spustia búrku v tele aj v duši. Cesta cez strach k viere, že sloboda je vždy vo vlastných rukách.",
    ctaLabel: "Objav terapiu Cesta",
    ctaHref: "/sluzby/terapia-cesta",
    pending: false,
    body: [
      { type: "p", text: "Už niekoľko dní sa vznášalo vzduchom niečo zvláštne. Nútilo nás to obzerať sa a zisťovať, čo nie je v poriadku. Nedalo nám to pokoj. Zrazu sme mali pocit, že máme žalúdočné vredy. V hrudníku nami lomcoval tlak." },
      { type: "p", text: "Zvieralo nám hrdlo a začínali sme sa dusiť. Niečo v nás horelo a my sme to urýchlene potrebovali uhasiť. A potom prišlo to štvrtkové ráno. Ráno ako ktorékoľvek iné." },
      { type: "p", text: "No toto ráno nás šokovalo. Naše telo ostalo prikované k zemi a oči civeli na niečo, čo sme si nepredstavovali ani v najhoršom sne." },
      { type: "p", text: "Vredy sa v okamihu stratili, hrudník sa uvoľnil a opäť sme začali voľne dýchať. Alebo sme dýchať zabudli?" },
      { type: "p", text: "Naše vlastné telo sa stalo nepochybným dôkazom toho, že to, čo cítime, je skutočné. Keď drvivé informácie o vypuknutí vojny dorazili k hraniciam našej mysle, došlo k mohutnej explózii. A tá uvoľnila niečo, čo sme ešte nezažili." },
      { type: "p", text: "Ako na povel nás zachvátil taký strach, že keby sme ho nezastavili, tak nás privedie do nepríčetnosti. Ale museli sme sa vzchopiť. Nemohli sme podľahnúť." },
      { type: "p", text: "Keď však počujeme, ako ľudia zabíjajú bezbranných a nevinných, trhá nám to srdce. A ten strašný strach sa opäť začína predierať. Horlivo sa miesi s prekypujúcim hnevom. Už je to príliš silné, aby sa to dalo potlačiť. Narážame na priepastnú bezmocnosť a chceme pred tým všetkým utiecť. No niet kam." },
      { type: "p", text: "S týmto šialeným besnením naozaj nedokáže nikto nič urobiť? Strácame silu a schopnosť brániť sa. Nemá to zmysel. Sme príliš malí na to, aby sme niečo dosiahli. Vzdávame sa. A padáme. Hlboko. Veľmi hlboko." },
      { type: "p", text: "Strach úplne pominul. A my len padáme. Pomaly a pokojne. A z ničoho nič pocítime niečo nové. Jemné a krehké. No zároveň nesmierne silné." },
      { type: "quote", text: "V našom srdci začína pomaličky narastať viera. Viera, ktorá vie, čo je v nás. Vidí silu, ktorej sme sa tak dlho bránili." },
      { type: "p", text: "Silu, ktorej sme neverili. Zabudli sme na to, kým naozaj sme. Na to, že svoju slobodu máme vo vlastných rukách. A nikto na svete nám ju nemôže vziať. Žiada nás iba o to, aby sme jej verili. Aby sme nezradili seba. A aby sme ostali tým, čím sme v hĺbke svojej duše vždy boli. Slobodnými a silnými." },
      { type: "image", label: "Ilustračný obrázok k článku" },
      { type: "p", text: "Vojna, ktorá sa odohráva okolo nás, začína vojnou v našom srdci. Vyzýva nás, aby sme nazreli za oponu svojich strachov a urobili niečo zmysluplné. A ak sa pýtame, čo môžeme urobiť, aby sme túto skazu ľudstva zastavili, pozrime sa do seba. Vedzme, že naša maličkosť je oveľa silnejšia, ako sme si dokázali predstaviť." },
      { type: "p", text: "Upokojme vojnu v sebe. Nájdime svoju vlastnú slobodu. A dovoľme, aby sa udial zázrak aj vo svete navôkol. To, že vyliečime seba, má nesmierny vplyv na pokoj sveta, v ktorom žijeme." },
      { type: "p", text: "Dôverujme sebe." },
      { type: "quote", text: "Iba v sebe nájdeme slobodu, ktorú hľadáme. A s ňou oslobodíme celý svet." },
    ],
  },
  {
    slug: "naucme-sa-doverovat-zivotu",
    title: "Naučme sa dôverovať životu",
    category: "pribehy-zo-zivota",
    excerpt:
      "Dôvera neznamená mať všetko pod kontrolou. Príbeh o tom, ako sa naučiť pustiť domček z karát a dôverovať tomu, že aj pád má svoje posolstvo.",
    ctaLabel: "Objav terapiu Cesta",
    ctaHref: "/sluzby/terapia-cesta",
    pending: false,
    body: [
      { type: "p", text: "Do akej miery sa dokážeme odovzdať životu?" },
      { type: "p", text: "Možno veríme, že náš vzťah je dostatočne silný na to aby prekonal všetky nástrahy. Sme si istí, že svoju rodinu budeme vedieť vždy finančne zabezpečiť a niet pochýb o tom, že budeme šťastní. A sme presvedčení, že naša práca je zdrojom bezpečia a istoty." },
      { type: "p", text: "Dokážeme naplno dôverovať tomu, čo sa deje? Alebo nám pri týchto slovách zviera hrdlo a preto musíme okamžite konať a nenechať všetko na náhodu?" },
      { type: "p", text: "Dôvera neznamená mať všetko pod kontrolou. Práve naopak. Potreba držať veci pevne vo svojich rukách, vyplýva zo strachu, že sa nám náš domček z karát môže zrútiť. Nedokážeme sa mu pozrieť do očí, aby nás nepokoril. A radšej si na tvár prilepíme ukážkový úsmev, hoci vieme, že všetky naše bunky pod ním sú roztrasené." },
      { type: "p", text: "Ako však máme veriť tomu, že to, čo sa deje, je presne to, čo sa má diať? Keď vždy, keď spravíme krok vpred, padneme na kolená? Ak miesto radosti, cítime bolesť a neistotu? Ak robíme všetko preto, aby sme boli šťastní, no napriek tomu sa to nedeje?" },
      { type: "quote", text: "Naučiť sa dôverovať životu nie je vždy ľahké." },
      { type: "p", text: "Preto treba postupovať pomaly. O dôveru sa musíme starať a trénovať ju, aby mohla silnieť a rozvíjať sa. A to môže trvať mesiace, aj roky. Najmä vtedy, ak je naša cesta ťažšia. A život nám naďalej môže klásť do cesty nové a nové prekážky. Sú to však skutočne prekážky? Alebo prostriedky učenia?" },
      { type: "p", text: "V mojom živote priniesli tieto takzvané prekážky dva možné scenáre." },
      { type: "p", text: "V jednom som bola obeťou bez kúska nádeje, kým ten druhý vo mne odhalil bojovníčku za spravodlivosť. Obe potrebovali priestor a až keď naplno vstúpi lido svojej energie, uvoľnil sa ich tlak a zavládlo pokojné ticho. A vtedy mohol prísť môj moment pochopenia." },
      { type: "p", text: "Naučila som sa držať svoj život pod kontrolou. Verila som, že ak ho budem riadiť, nájdem šťastie a naplnenie. Až keď sa moja potreba rozhodovať rozplynula, uvedomila som si, že som bránila životu v hojnosti. Zrazu mi bolo úplne jasné, že život mi ponúka neporovnateľne viac, ako som si dokázala predstaviť. Stačilo mu iba dovoliť, aby tak urobil. Stačilo sa prestať hýbať v medziach očakávaní. Otvoriť srdce a prijať nemožné." },
      { type: "p", text: "Keď padneme na kolená, pokúsme sa v sebe nájsť vďaku za to, že sa to stalo práve nám. Vedzme, že náš pád je darom z nebies a preto má svoje posolstvo. Neostaňme teda ležať na zemi v slzách utrpenia. No nesnažme sa so životom ani tvrdohlavo bojovať, pretože túto vojnu nemôžme vyhrať." },
      { type: "p", text: "Nájdime štrbinku pomedzi a odhaľme hlbokú pravdu, ktorá sa za našim pádom ukrýva. Tento pohľad bude kľúčom k tomu, aby sme opäť neklesli k zemi a mohli kráčať ďalej s ľahkosťou a radostným úsmevom." },
      { type: "image", label: "Ilustračný obrázok k článku" },
      { type: "p", text: "Život mnohých z nás nie je jednoduchý. A je iba otázkou času, kedy pochopíme, že je presne taký, aký má byť. Poskytuje nám všetko k tomu, aby mohol náš domček z karát raz pevne stáť a aby ho nič nedokázalo zboriť. Už sa nebudeme triasť a každá naša bunka bude ladiť s ostatnými. Nebudeme si na pery lepiť očakávaný úsmev. Budeme sami sebou." },
      { type: "quote", text: "Budeme vedieť, kým sme. Budeme stáť pevne zakotvení vo svojom srdci a prijímať svoju esenciu, svoju podstatu a jedinečnosť." },
      { type: "p", text: "Budeme dôverovať tomu, čo je v nás a prijímať nielen svoju lásku, ale aj neistotu. Už sa nebudeme báť padnúť na kolená, pretože budeme vedieť, že ak sa tak stane, bude tu niekto, kto nám podá pomocnú ruku. A tým niekým bude naša milujúca duša. Duša odovzdaná životu." },
    ],
  },
  {
    slug: "co-pre-nas-znamena-laska",
    title: "Čo pre nás znamená láska?",
    category: "pribehy-zo-zivota",
    excerpt:
      "„Láska je len slovo,“ znela kedysi téma školskej úvahy. O tom, ako láska stráca iskru pod ťarchou očakávaní — a ako vyzerá tá, ktorá si nekladie podmienky.",
    ctaLabel: "Spoznaj Dvojplamene",
    ctaHref: "/dvojplamene",
    pending: false,
    body: [
      { type: "p", text: "Kedysi dávno sme v škole písali úvahu na tému „Láska je len slovo“. Bolo to pred mnohými rokmi, takže si nepamätám, ako moja práca dopadla. No táto myšlienka mnou stále rezonuje." },
      { type: "p", text: "Možno je to tým, že v predstave dospievajúceho dievčaťa, ktorým som vtedy bola, láska nebola iba obyčajným slovom. Znamenala pre mňa to, čo cítime, keď s niekým kráčame bok po boku tichými uličkami spiaceho mesta. Alebo, keď sa stretnú dva pohľady pri šálkach voňavého čaju a v tej chvíli zabudneme na všetko, čo bolo, a aj na to, čo bude." },
      { type: "p", text: "Tento nevinne krásny pohľad mladosti ešte nebol oklieštený trpkými skúsenosťami dospelých. Preto mi ani nenapadlo zamyslieť sa nad tým, v akom človeku sa mohla takáto myšlienka zrodiť." },
      { type: "p", text: "Pre ženu, ktorou sa to dievča stalo, sa však táto veta dnes stáva novým podnetom k úvahe. Môže takúto vetu povedať niekto, kto verí v lásku? Ten, kto miluje a je milovaný? … Nie, z týchto slov sála sklamanie. Tento človek ľúbil, ale láske už prestal veriť." },
      { type: "p", text: "Príliš často si ani nevšimneme, že kúzelný pocit lásky, ktorý bol živnou pôdou nášho začínajúceho vzťahu, stratil niekdajší nádych emócie. Moment, keď sa stretnú dva pohľady už nemá žiadnu iskru a na spoločnú prechádzku už nie je čas. Starosti dospeláka nám prerastajú cez hlavu a naše srdce sa v tichosti začne zatvárať." },
      { type: "quote", text: "Čo sa stalo s tou našou nežnou láskou, ktorá nás tak hriala pri srdci a s ktorou sme ako motýľ lietali v oblakoch?" },
      { type: "p", text: "Pod ťarchou nekonečných starostí zovšednela. A možno sa úplne stratila. Stala sa slovom, ktoré sme začali používať, keď sme od niekoho potrebovali niečo získať. Pohladenie, porozumenie, podporu či fyzické potešenie. Lásku sme ohraničili svojimi potrebami a očakávaniami." },
      { type: "p", text: "Láska sa stáva iba slovom, ak sa dostane do rúk našej mysle. Je to láska, ktorá kladie podmienky. Je to tá láska, ktorá hovorí, že ak chceme, aby nás niekto miloval, musíme preto niečo urobiť. Musíme vyhovieť, zmeniť sa, byť lepší." },
      { type: "p", text: "Je však toto naozaj láska? Alebo len naháňanie niečoho, čo nie je? Je to láska, čo nás núti presviedčať niekoho, že sme hodní jeho pozornosti? Prečo si želáme, aby nám niekto lásku neustále dokazoval?" },
      { type: "image", label: "Ilustračný obrázok k článku" },
      { type: "quote", text: "Skutočná láska predsa nič nemusí." },
      { type: "p", text: "Láska, ktorá pramení v srdci sa nepotrebuje vtesnať do tabuliek, ktoré ktosi vytvoril. Pravá láska si nekladie podmienky a nemá žiadne hranice. Nekáže, že ak niekoho milujeme, musíme byť s ním." },
      { type: "p", text: "Táto láska nás vezme na prechádzku a hoci po našom boku nebude kráčať nikto, pocit milujúceho srdca nám bude robiť spoločnosť. Pretože táto láska je navždy ukotvená v nás. Iba s ňou si užívame každý nádych. A kráčame v ústrety životu." },
    ],
  },
];

export function postsByCategory(category: BlogCategory) {
  return blogPosts.filter((p) => p.category === category);
}

export function postBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
