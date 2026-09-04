export type ServiceSlug =
  | "terapia-cesta"
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
    id: "zlatica-navraciam-sa",
    title: "Navraciam sa do vlastnej sily",
    quote:
      "Prechádzam si cestou dvojplameňa, ktorá je veľmi náročná. Monika mi je obrovskou oporou... Po každom rozhovore s ňou sa navraciam do vlastnej sily.",
    author: "Zlatica",
    services: ["terapia-cesta"],
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

  // Ďalšia dávka referencií zo starého webu (dodané dodatočne, plný text).
  // Rovnaké pravidlá ako vyššie: text 1:1 z podkladov, opravené len zjavné
  // preklepy/medzery/úvodzovky, dlhšie viacodsekové referencie zachovávajú
  // pôvodné odseky (whitespace-pre-line v TestimonialCard).

  // Ženské kruhy
  {
    id: "petra-hlboky-nadych-a-vydych",
    title: "Je to hlboký nádych a výdych",
    quote:
      "Kruhy sú pre mňa miestom intímnym, kde ako ženy ženám môžeme odhaliť svoje emócie bez toho aby sme sa báli, ako budeme pôsobiť, pretože sa v tú chvíľu cítime prijaté zo všetkým a všade. Nie posudzované alebo odsudzované no rešpektované a vypočuté.\nV Ženských kruhoch je priestor pre všetko skutočné bez pocitov hanby alebo neprijatia.\nTo sú jedny z hlavných a základných kameňov, pilierov Ženských kruhov.\nCítiť sa a byť prijatá, videná, pochopená, podporovaná a nasmerovaná na tú lepšie cestu životom. Je to dôvera.\nBez týchto stavebných prvkov by Ženské kruhy boli pre mňa ničím a nie niečim, niečim omnoho viac.\nToto prostredie, v ktorom sa stretávame si vytvárame my samé navzájom a je plne dôverné.\nPocity, o ktoré sa môžeme medzi sebou podeliť, ktoré nás ťažia alebo naopak povznášajú, uvedomené postrehy počas dní, znamenia ktoré nám utkveli v pamäti aj z možno iných „svetov“ ako len tých konzumných a materiálnych, kde sa len za niečim naháňame, ktoré mnoho ľudí žije v domnení, že žijú „bohatý a zdravý, naplnený“ život…\nJe to únik od toho všetkého chaosu tam „vonku“, spomalenie, byť v prítomnom okamihu a samozrejme vedená meditácia… Stabilizovanie. Je to hlboký nádych a výdych medzi tým všetkým lapaním po vzduchu v zhone, ktorý sa stal neodmysliteľnou súčasťou mnohých ľudských životov.",
    author: "Petra",
    services: ["zenske-kruhy"],
  },
  {
    id: "majka-pokoj-vsade-okolo-mna",
    title: "Ten pokoj bol všade okolo mňa",
    quote:
      "Keď som prišla prvý krát, vôbec som nevedela, čo mám očakávať. Ale našla som taký pokoj, aký som nepoznala. Večer som sa cítila veľmi dobre a ten pokoj bol aj na druhý deň všade okolo mňa. 😃\nA najlepšie bolo, že keď som prišla večer domov, dostala som menštruáciu. Vtedy mávam vždy obrovské bolesti a potrebujem 2-3 tabletky, aby bolesť ustúpila. A navyše, cítim vždy taký silný hnev, že môj manžel radšej odíde, lebo vie, že je zle a je lepšie, ak mi vtedy dá pokoj. 😀\nAle teraz som necítila žiadnu bolesť ani hnev. ☺️\nEšte aj manžel sa čudoval, že čo sa deje.\nVeľmi ďakujem, že to môžem zažívať. Som nadšená a veľmi zvedavá, čo ďalšie mi tieto stretnutia ešte prinesú 😗",
    author: "Majka",
    services: ["zenske-kruhy"],
  },
  {
    id: "erika-vnimat-vsetko-srdcom",
    title: "Je to miesto, ktoré ma naučilo vnímať srdcom",
    quote:
      "Monika a jej „Ženské kruhy“ mi prišli do života práve v období, keď som potrebovala rozumieť nejakým mojim situáciám, ktoré som riešila v sebe už dlhšiu dobu.\nVedela som, že niečo musím zmeniť vo svojom živote – niečo pochopiť, inak vnímať tie situácie, odosobniť sa od nich, ale hlavne nájsť v sebe vnútorný pokoj a rovnováhu.\nAle nevedela som ako?\nMonika a jej sedenia mi pomohli toto všetko pochopiť a zmeniť… Na týchto ženských kruhoch som čoraz viac chápala súvislosti, prečo sa mi niektoré veci dejú… Ale čo je dôležité, našla som vnútorný pokoj a rovnováhu.\nNa Monikine sedenia sa vždy veľmi teším, je to miesto, ktoré ma naučilo vnímať všetko viac srdcom. Ďakujem, Monika ❤️",
    author: "Erika",
    services: ["zenske-kruhy"],
    featured: true,
  },
  {
    id: "linda-spoluputnicky",
    title: "Stali ste sa mojimi spolupútničkami",
    quote:
      "Pre mňa priniesli ženské kruhy nové možnosti v živote, ako lepšie spoznať svoje vnútro, pochopiť seba a pochopiť veci, ktoré sa dejú okolo nás. Vidieť nádej a možnosť vyriešiť problém. A tiež spoznať pár nových žien, z ktorých niektoré sa stali súčasťou môjho života.\nA som preto vďačná za takúto možnosť.\nA chcem ísť ďalej. Som na ceste.\nNa ceste, ktorá nech trvá dlho. Vtedy sa budem cítiť bezpečne.\nA hlavne som spoznala Teba, Monika. Veď ty vieš. 😘🙏 Ďakujem Ti.\nA Andy a Peťka, aj Vy ste sa stali mojimi spolupútničkami. 😘",
    author: "Linda",
    services: ["zenske-kruhy"],
  },
  {
    id: "jarmila-prijata-taka-aka-som",
    title: "Cítila som sa prijatá taká, aká som",
    quote:
      "V príjemnej a komornej atmosfére v bezpečnom kruhu žien sa dejú zaujímavé veci. Odbúravajú sa bloky, nahromadená energia a potlačené emócie a myšlienky. Ženy tu majú možnosť otvoriť sa bez strachu, že budú posudzované alebo odsudzované či hodnotené. Môžu načúvať jedna druhej a učiť sa od seba. Môžu v bezpečí vysloviť aj dovtedy nevyslovené. Pretože len žena môže pochopiť to, čo tá druhá cíti a čo prežíva v duchu prijatia, podpory a pochopenia. Tak som sa cítila medzi Vami. V bezpečí, prijatá taká, aká som. Ďakujem za takúto možnosť a príjemný zážitok. ❤️",
    author: "Jarmila",
    services: ["zenske-kruhy"],
    featured: true,
  },
  {
    id: "marika-uz-to-vidim-aj-ja",
    title: "Už to vidím aj ja",
    quote:
      "Bolo to úžasné! Fakt, tak dobre som sa cítila, že sa to nedá ani opísať.\nSom veľmi rada, že som ťa mohla spoznať. Nebola to náhoda. A ver mi, asi toto potrebovala moja duša, aby som sa upokojila vo vnútri a aby som viac verila v seba.\nStále som od vás počúvala o zrkadle. Veľa o tom hovoríte, ale pre mňa to bolo nepochopiteľné. Nerozumela som tomu.\nA dnes som sa nevedela dočkať, kedy prídem. Musela som vám povedať, že už tomu rozumiem.\nDoteraz som o zrkadle iba počúvala, ale teraz to už konečne vidím aj ja!\nZažila som to a zrazu vidím to zrkadlo aj vo vlastnom živote! Ľudia mi to ukazujú.\nJe to úžasné! Ďakujem a teším sa na ďalší ženský kruh 😙",
    author: "Marika",
    services: ["zenske-kruhy"],
  },

  // Terapia Cesta
  {
    id: "ingrid-najdolezitejsia-osoba-som-ja",
    title: "Najdôležitejšia osoba v mojom živote som ja",
    quote:
      "Terapia Cesta mi pomohla odhaliť samú seba a uvidieť svoju hodnotu po veľmi veľmi dlhom čase, ktorý som strávila v bludnom kruhu. V kruhu, v ktorom som sa snažila vyhovieť každému vo svojom okolí, keď som potreby a šťastie svojich najbližších stavala nad všetko, nehľadiac na seba a na svoje vlastné šťastie a svoje vlastné túžby. Až táto cesta mi otvorila oči, že najdôležitejšia osoba v mojom živote som ja, pretože ak ja nie som šťastná a nedokážem ľúbiť samú seba, tak šťastným a ľúbeným nedokážem urobiť nikoho v mojom okolí. Pod vedením Moniky, ktorá je podotýkam neskutočne dobrý a vnímavý človek, som odhalila samú seba v momente terapie (toto odhalenie bolo ako rana pod pás) a aj to, aká by som chcela byť v budúcnosti. A postupne sa k tejto predstave dopracúvam.\nTerapiu Cesta odporúčam každému. Je to poznanie a prijatie samého seba a postupná transformácia do svojho najlepšieho ja.",
    author: "Ingrid",
    services: ["terapia-cesta"],
  },
  {
    id: "lenka-udial-sa-zazrak",
    title: "Udial sa zázrak",
    quote:
      "Prvý krát som sa o terapii s názvom Cesta dozvedela počas vianočných sviatkov od mojej veľmi dobrej kamarátky. Spomenula, že by mi táto terapia alebo proces mohol pomôcť pri splnení môjho veľkého sna. Dokonca mi požičala knihu s názvom Cesta od Brandon Bays.\nNejakú dobu mi táto kniha len tak ležala na nočnom stolíku. Len som sa na ňu pozrela, a pomyslela som si, že ešte nenastal správny čas na jej prečítanie.\nAž raz som sa na ňu pozrela s pocitom, že teraz ju otvorím a uvidím, čo sa dočítam. Tak rýchlo ako túto knihu som prečítala len máloktorú. Pri dočítaní poslednej kapitoly som bola pevne rozhodnutá vyskúšať tento proces. Od spomínanej kamarátky som si vypýtala kontakt na terapeutku tu v Nových Zámkoch. Pomyslela som si, aké je super, že je v rovnakom meste ako ja. Tak som jej napísala správu, kto som, čo ma roky trápi a či by mi vedela pomôcť. Monika Struhárová mi odpísala a dohodli sme sa na dátume mojej terapie u nej.\nMojím veľkým snom je otehotnieť, vynosiť a porodiť zdravé dieťatko a tak sa stať matkou. Už 10 rokov sme sa o to s manželom pokúšali. Podstúpili sme rôzne vyšetrenia a všade nám povedali, že nám nič nebráni k prirodzenému počatiu. To je síce krásna veta, ale neriešila našu situáciu. Podstúpili sme naozaj všeličo. V roku 2022 sa mi síce podarilo otehotnieť, ale na začiatku piateho mesiaca tehotenstva sa nášmu drobčekovi zastavilo srdiečko. No a ja som bola odhodlaná vyskúšať všetko, čo by mi mohlo pomôcť.\nA tak s pocitom nádeje som išla na terapiu Cesta. S Monikou sme si hneď potykali. Ani som nečakala, čo všetko sa počas toho procesu vo mne udeje a čo sa odhalí. To jednoducho musíte zažiť, aby ste pochopili. A ja som pochopila to, ako sa hovorí, kde je pes zakopaný. Zistenie, že roky odmietania mojej mami, spôsobuje moje odmietanie mňa ako mami, ma prekvapilo. Vtedy som vedela, že to musím zmeniť.\nA zmenila som to. Po nejakej dobe som sa ozvala mojej mame. Odvtedy sme v pravidelnom kontakte. Naše spory z minulosti sme si vyrozprávali a teraz náš vzťah budujeme odznovu na nových základoch. Pomaly ale isto. Dokonca som jej mohla osobne oznámiť, že som opäť tehotná a ona bude babka. Udial sa zázrak.\nVďaka procesu Cesta u Moniky, sa mi zmenil život. A verím, že rok 2025 bude rokom materstva, rodičovstva, šťastnej babky a zdravého bábätka.\nTakže terapeutku Moniku a proces Cesty odporúčam každej nešťastnej duši, ktorá chce zmeniť svoj svet na lepší a spokojnejší.",
    author: "Lenka",
    services: ["terapia-cesta"],
    featured: true,
  },
  {
    id: "majka-oslobodila-som-sa",
    title: "Oslobodila som sa",
    quote:
      "Terapia Cesta bola pre mňa ako jedna z ciest mojej liečby. Počas terapie som sa oslobodila z myšlienok a negatívnych pocitov a osôb, od ktorých som bola v minulosti zranená. Odpustila som. Po tejto terapii som ostala veľmi pokojná a spokojná. Som vďačná Monike, že bola súčasťou mojej liečby. Ďakujem ❤️",
    author: "Majka",
    services: ["terapia-cesta"],
  },
  {
    id: "juraj-rozviazala-mi-ruky",
    title: "Rozviazala mi ruky",
    quote:
      "Som nesmierne vďačný, že som sa k terapii dostal. Vniesla do môjho života pokoj a vzala napätie, v ktorom som dlho žil.",
    author: "Juraj",
    services: ["terapia-cesta"],
    featured: true,
  },
  {
    id: "barbora-vysledok-za-to-stoji",
    title: "Výsledok za to stojí",
    quote:
      "Pre mňa je terapia Cesta ako potápanie.\nPostupne popri tom, ako prebiehal proces, som sa ponárala hlbšie a hlbšie do svojho vnútra z miest pri hladine až do hĺbky. Moje objavy neboli prelomové, dokonca som ani nenašla iné veci, ako som predpokladala, že nájdem, čo sa môže ľahko stať. Získala som však nový pohľad na to, čo už sa udialo. Bol to pre mňa krok k zmiereniu, vyrovnaniu a pokoju.\nTieto riadky píšem s odstupom takmer dvoch týždňov od terapie a odkedy som ju absolvovala, môj život získal väčšiu ľahkosť. Je pre mňa jednoduchšie rozhodnúť sa robiť to, čo je v súlade s tým, čo je pre mňa dobré a veľa vecí v živote mi robí väčšiu radosť. Cesta je veľmi príjemný proces, uvoľňujúci, ale v istom zmysle aj náročný. Prirovnala by som to k fyzickému cvičeniu, ibaže tu nejde o fyzickú námahu, ale prácu so svojím vnútrom a pocitmi. Proces nemusí byť jednoduchý, ale výsledok za to stojí 😊. Som veľmi vďačná, že som ho absolvovala.",
    author: "Barbora",
    services: ["terapia-cesta"],
  },
  {
    id: "marian-cesta-vyvedie-z-cyklov",
    title: "Cesta vyvedie z dlhoročných cyklov",
    quote:
      "Človek častokrát hľadá odpovede na otázky a žiaľ zostáva dlho uväznený v cykloch bez odpovedí a bez ich riešenia.\nCesta pomáha pochopiť a hlavne prísť na odpovede. Dokáže ušetriť čas nájdením riešení a hlavne vyviesť z dlhoročných cyklov.\nMonika je úžasný človek, žena, ktorá dokáže plne navnímať človeka a vďaka jej citu a vnímavosti postupne pomáha nachádzať odpovede na nezodpovedané otázky.\nSom vďačný za ňu a za jej ľudský a profesionálny prístup, ktorý je doslova transformačný.",
    author: "Marián",
    services: ["terapia-cesta"],
  },
  {
    id: "juraj-strachy-pri-liecbe",
    title: "Pomohla mi vysporiadať sa so strachmi",
    quote:
      "Terapiu u Moniky som využíval popri svojej klasickej konvenčnej liečbe rakoviny. Pomohla mi vysporiadať sa so strachmi, ktoré táto choroba prináša a tiež mi pomohla vysporiadať sa s blokmi z minulosti. Spomínam si na radu od nej, ktorú mi dala: „Nesústreď sa len na jednu metódu. Využi všetky možnosti, ktoré ti život prinesie.“ Na záver ešte dodám, že z medicínskeho hľadiska bola moja diagnóza považovaná za liečiteľnú.",
    author: "Juraj",
    services: ["terapia-cesta"],
  },
  {
    id: "andrea-pocuvam-srdcom",
    title: "Teraz počúvam srdcom a cítim sa dobre",
    quote:
      "Monika mi otvorila oči, keď mi povedala, že hnev je prejavom toho, že nemám niečo vyčistené. Ale najsilnejším momentom pre mňa bolo uvedomenie si prvého veľkého bloku. Netušila som, koľko ich mám. Naučila som sa, čo je ísť do pocitu. A prestala som si priťahovať situácie, ktoré sa mi nepáčia. Oveľa viac prijímam svoj život. Ďakujem ľuďom za to, čo mi dali, a že som sa s nimi mohla posunúť.\nOdkedy viem, ako funguje zrkadlo, mám radosť a zimomriavky zo stretnutia s nimi. A keďže som sa zmenila, menia sa aj oni.\nPochopenie je úžasné. Úplne mi otvára obzor. Posilnilo ma vo viere, že všetko je tak, ako má byť. Stále to tak cítim.\nMusela som porozumieť vine a obviňovaniu.\nVždy som to vnímala negatívne a bolo to silnejšie ako ja. Ale už je to inak. Teraz počúvam srdcom a cítim sa dobre. Som veľmi vďačná.",
    author: "Andrea",
    services: ["terapia-cesta"],
  },
  {
    id: "rado-znova-zrodil",
    title: "V toľkých rokoch som sa znova zrodil!",
    quote:
      "Žil som v hmle. Roky som trpel ťažkými depresiami. Bol som zavretý doma, nevedel som s nikým prehovoriť. Iba som ležal, celé dni schovaný. Keď som niekde išiel, bolo to nasilu.\nMonika mi ukázala smer.\nPo prečítaní knihy Cesta som bol vysmiaty ako lečo 🙂 a po cvičení „Kto si?“ akoby mi niekto povedal: „Tu máš a buď šťastný!“ A proces to všetko zastabilizoval. Hmlu vystriedalo slnko.\nOdvtedy mi ľudia hovoria, že akoby ma vymenili. Bolo pre mňa utrpením sa s niekým stretnúť. A teraz sa nedám vypnúť. Bolo to peklo na zemi, z ktorého sa nedá vymotať. Môžeš si to zdôvodňovať, ako chceš. Že ti nič nie je. Ale predsa ti je.\nTeraz si život vážim. Viem to porovnať. Prejavujem city a som šťastný. Voľakedy som bol iný. V toľkých rokoch som sa znovu zrodil!",
    author: "Rado",
    services: ["terapia-cesta"],
  },
  {
    id: "martina-po-kazdom-procese-uzasne",
    title: "Po každom procese sa cítim úžasne",
    quote:
      "Každý proces s Monikou je úžasný zážitok plný emócií, no pre mňa je najdôležitejší pocit prečistenia a zároveň vyliečenia.\nPo každom procese sa cítim úžasne a priam sa vznášam. Vrelo odporúčam každému.\nMonika, si skvelá ❤️",
    author: "Martina",
    services: ["terapia-cesta"],
  },
  {
    id: "pavol-okno-a-vyvetrat",
    title: "Bolo treba otvoriť okno a vyvetrať",
    quote:
      "Spoluprácu s Monikou som nadviazal v mojom najťažšom životnom období. Život sa mi snažil naznačiť, že je čas postúpiť na vyšší stupeň. Bolo potrebné čeliť svojej vnútornej temnote, vystúpiť z niektorých naučených či vrodených vzorcov a prekonať rôzne bloky. Bolo to pre mňa náročné obdobie plné samoty, smútku, ľútosti, hnevu, strachov, ale aj učeniu sa schopnosti prijať „to dobré v živote. Som veľmi rád, že na začiatku tohto obdobia som sa (nie náhodne) spojil práve s Monikou. Bola pre mňa tým správnym sprievodcom v daný čas na danom mieste. Naše rozhovory a práca na sebe bola jednoznačne obohacujúca. To nám len uľahčilo spoluprácu, ktorej plody žijem dodnes.\nKeď sme si po prvý raz zavolali, bol som po rozchode s partnerkou, zlomený zo života, ubytovaný v podnájme s hypotékou na byt, ktorý bol neobývateľný. Neustále sa mi opakovali tie isté lekcie života, ktorým som celkom nerozumel a moja frustrácia prerastala cez depresiu až do apatie. Bolo treba „otvoriť okno a vyvetrať“, no nemal som vedomosť, ako na to.\nDnes, štyri roky neskôr, žijem v inom meste, v novom dome s priateľkou. Máme nádherného synčeka, ktorý ma spolu s partnerkou učí láske, radosti zo života a ľahkosti bytia. Staré vo veľkej miere odišlo a urobilo miesto novému, ľahšiemu a spokojnejšiemu. Nie, život mi neprestal predkladať výzvy a skúšky, no naučil som sa ho brať s väčším nadhľadom a odstupom. A čo je dôležitejšie, miera pociťovanej lásky v mojom vnútri bola výrazne navýšená.\nĎakujem Ti, Monika, za tvoj prínos do môjho života. Veľmi si to cením…",
    author: "Pavol",
    services: ["terapia-cesta"],
  },
  {
    id: "zuzana-uvedomovat-jedinecnost",
    title: "Začala som si uvedomovať svoju jedinečnosť",
    quote:
      "Terapia Cesta u Moniky bola ozaj zážitok.\nTrpezlivo ma viedla cez moje traumy a bolesti.\nBola mi veľkou oporou, keď sa začali vynárať všetky tie dávno zabudnuté krivdy. S jej pomocou sa mi výrazne zmiernila fóbia z vtákov, opustila som niektoré nezdravé vzorce správania a začala si uvedomovať svoju jedinečnosť a silu.\nĎakujem, Monika",
    author: "Zuzana",
    services: ["terapia-cesta"],
  },
  {
    id: "monika-obrovska-vnutorna-sila",
    title: "Získala som obrovskú vnútornú silu",
    quote:
      "Terapia Cesta mi dala neuveriteľne veľa. Otvorila mi chuť do života. Môj život závisel od mojich očí. Bola som presvedčená o tom, že pokiaľ nebudem vidieť, nebudem mať chuť žiť.\nVtedy mi prišla do života Monika.\nChcela som si vyliečiť oči, ale keď začal môj prvý proces, zrazu to vôbec nebolo o očiach.\nObjavila som svetlo vo svojom živote, uvedomila som si hodnotu života a tiež samej seba. Predtým som vôbec nevnímala, čo všetko dokážem aj napriek handicapu.\nVďaka procesom som získala obrovskú vnútornú silu a sebadôveru.",
    author: "Monika",
    services: ["terapia-cesta"],
  },

  // Harmonizácia čakier
  {
    id: "zuzana-pretekat-zivot",
    title: "Mojím telom znovu začínal pretekať život",
    quote:
      "Pred 2 rokmi som bola v nemocnici vo veľmi vážnom stave. Zo dňa na deň sa mi pohoršovalo a bolesti boli neznesiteľné. Chodila som po vyšetreniach a lekári mi oznamovali samé zlé správy. Bola som zúfalá a nahnevaná a cítila som sa bezmocne. Môj pobyt v nemocnici sa z 3 dní natiahol na vyše 3 týždne.\nJedného dňa mi Monika navrhla terapiu.\nDôverovala som jej a okamžite som súhlasila, keďže som potrebovala všetku pomoc, ktorá sa ponúkala.\nPracovali sme spolu 2-3 krát denne. Hneď od začiatku som cítila, akoby mojím telom znovu začínal pretekať život. Konečne sa so mnou dialo niečo, čo som vnímala veľmi pozitívne. Moja rodina po každom sedení u mňa videla novú iskru v očiach, čo im aj mne dodávalo veľmi potrebnú nádej. Môj zdravotný stav sa konečne začal zlepšovať 🥳. Odvtedy si na prácu s energiou nedajú dopustiť. A ja tiež. 😁\nZo srdca odporúčam každému! Mne táto energia pomohla vo veľmi ťažkých chvíľach a som za ňu veľmi vďačná 🤗😀❤️",
    author: "Zuzana",
    services: ["harmonizacia-cakier"],
    featured: true,
  },
  {
    id: "milan-nocne-mory",
    title: "Odvtedy nočné mory nemám",
    quote:
      "Chystal som sa na operáciu a požiadal som Moniku o pomoc so strachom, ktorý ma prenasledoval. Počas sedení som si vždy oddýchol alebo zaspal. A raz mi Monika povedala niečo, čo nemala odkiaľ vedieť. Bolo to niečo, čo sa objavovalo v mojich nočných morách. Odvtedy tie nočné mory nemám. A na operáciu som išiel bez strachu a v pohode.",
    author: "Milan",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "milan-bolo-to-zaujimave",
    title: "Bolo to zaujímavé",
    quote:
      "Uprostred leta som prechladol a skončil som so zápalom priedušiek. Strašne ma bolelo hrdlo a skoro nič som nejedol, lebo sa mi nedalo prehĺtať. Bolo mi hrozne. Bral som už druhú krabičku antibiotík, ale nezlepšovalo sa to. Raz sa to už nedalo vydržať a o druhej v noci som letel na pohotovosť. Pani doktorka zistila, že všetko je v poriadku a mám pokračovať v liečbe. Vtedy mi manželka povedala, aby som napísal Monike a poprosil ju o pomoc.\nNeviem, či je to náhoda, ale zrazu som sa začal cítiť trochu lepšie. Liečenie prebiehalo niekoľko dní a ja som sa vždy upokojil a uvoľnil. Dokonca sme pracovali aj s kameňmi a polodrahokamami a to sa páčilo aj mojej rodine 🫡.\nBolo to zaujímavé a celkom príjemné. Dôležité je, že moja choroba začala konečne ustupovať.",
    author: "Milan",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "barbora-neuvolnenejsia-spokojnejsia",
    title: "Dlho som sa necítila taká uvoľnená a spokojná",
    quote:
      "Mala som za sebou vcelku stresové obdobie. Študujem na VŠ a posledné dva semestre boli pre mňa dosť náročné vzhľadom na vypracovanie záverečnej práce. Tiež som začala cítiť stuhnutie v oblasti krčnej chrbtice, ktoré pri určitom pohybe prechádzalo do pichajúcej bolesti. Tri mesiace prešli prakticky bez zmeny. Cvičenie ani nič iné nemalo výsledok. Dokonca ani mesiac po odovzdaní práce sa nedostavila zmena.\nPrvú terapiu som vnímala veľmi intenzívne. Opísala by som to ako mravčenie, ktoré postupne prechádzalo od končekov prstov na rukách a nohách ďalej do tela. Behom terapie sa tento pocit výrazne zintenzívnil. V problematickej oblasti som vyslovene nadobudla pocit tlaku. Pripomínalo mi to dotyk, ibaže nie na pokožke, ale hlbšie. Večer po terapii som cítila únavu. Mala som pocit, že to je únava, ktorá sa vo mne usadzovala za dlhý čas a že je krok k jej odstráneniu.\nDruhá terapia na ďalší deň bola podobne intenzívna. Mravčenie v prstoch sa mi dokonca zdalo výraznejšie. Pri uvoľnení sa mi prsty na rukách samé prirodzene roztvárali. Po druhej terapii som necítila takú únavu, skôr som mala chuť zamyslieť sa.\nTretia terapia bola kratšia a spokojnejšia ako tie predchádzajúce. Vyvolala zo mňa celkový dojem pokoja. Tieto riadky píšem s odstupom približne jedného týždňa a od začiatku terapie som si všimla, že moje problémy začali výrazne ustupovať. Nezmizli ešte celkom, ale problém sa tvoril dlho a v porovnaní s tým, koľko vznikal a ako rýchlo teraz odchádza, je to úžasné. Momentálne stuhnutie a bolesť skoro úplne zmizli a stále sa to zlepšuje. Okrem toho som sa dlho necítila taká uvoľnená a spokojná.\nCelá terapia bola veľmi príjemná a považujem ju za výnimočný zážitok.\nTeším sa, že som mala možnosť ju absolvovať a ďakujem pani Monike.",
    author: "Barbora",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "iveta-pocitila-som-ulavu",
    title: "Pocítila som úľavu",
    quote:
      "Asi rok som mala zdravotné problémy. Po vyčerpaní lekárskych návštev som už nevedela, ako ďalej.\nK Monike ma priviedli moje dcéry, pre ktoré som hľadala pomoc. Najprv som váhala, ale nakoniec som absolvovala tri terapie, ktoré boli pre mňa veľmi intenzívne. Už po prvej terapii som pocítila úľavu a mohla som konečne fungovať s výrazne menšou bolesťou. S Monikou sme sa dohodli na ďalších terapiách, ktoré boli pre mňa opäť veľmi silné a nastavili ďalší proces liečenia.\nDnes s odstupom času sa cítim oveľa lepšie a som Monike veľmi vďačná za ochotu pomôcť s mojimi ťažkosťami ☺️. Ďakujem.",
    author: "Iveta",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "lubomir-kalne-vody",
    title: "Kalné vody sa upokojili",
    quote:
      "Popísať verbálne hĺbku oceánu je veľmi jednoduché a zároveň pre človeka, ktorý neprežil túto skúsenosť, veľmi ťažko predstaviteľné. Ak sa však telo odovzdá a myseľ ukľudní, zážitok je naozaj hlboký, pokoj je iný, pretrváva. Svet okolo vás akoby prestal dávať zmysel. Čo bolo pred vami je už za vami. Prázdnota dáva zmysel a vy sa máte radi, aj keď vás iní opúšťajú.\nDovolím si jeden citát, aj keď neviem, kto to už povedal, ale znie asi takto nejak: „Keď je žiak pripravený, učiteľ sa vždy objaví.“\nPani Monike som sa pri tzv. procese čistenia čakier odovzdal, vnímal a prijímal som každý moment bez očakávaní. Výsledok bol energický, kalné vody sa upokojili a ja som hneď pochopil silu lásky, nevinnosť a malichernosť svojho ega.\nĎakujem, zmenili ste mi život. Začal som byť pokojnejší, vnímavejší. Aj keď sú v živote situácie, kedy moje ego stále bojuje o pozornosť, učím sa prijímať a milovať sa aj v týchto momentoch. Ďakujem.\nAk cítite a nielen myslíte, ak vás ťahá niečo, čo ešte nechápete a je to silnejšie a silnejšie, je namieste splynúť s prúdom energie a dôverovať sebe, iným, životu. Tak neváhajte a odovzdajte sa životu.",
    author: "Ľubomír",
    services: ["harmonizacia-cakier"],
    featured: true,
  },
  {
    id: "silvia-slobodne-dychat",
    title: "Konečne môžem slobodne dýchať",
    quote:
      "Monika je úžasná terapeutka, ktorá sa dokáže navnímať na človeka, či už na blízko, tak aj na diaľku a dokáže ukázať, s čím súvisí to, čo sa človeku práve deje. Viackrát mi pomohla rozlúsknuť problém a posunúť ma na mojej životnej ceste. A teraz najnovšie mi pomohla odblokovať dlhodobý problém s mojím dychom. Už sa viem normálne nadýchnuť a konečne môžem slobodne dýchať. Monika, ďakujem ti veľmi pekne.",
    author: "Silvia",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "veronika-po-3-sedeniach-fit",
    title: "Po 3 sedeniach som bola fit",
    quote:
      "Dlhodobo som musela užívať lieky a po pár týždňoch som začala mať bolesti žalúdka a nechutilo mi jesť. Monika mi ponúkla pomoc. Prvé sedenie trvalo veľmi dlho, ale po druhom mi bolo oveľa lepšie. A po treťom, krátkom sedení som bola fit.",
    author: "Veronika",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "jozef-nabije-ma-energiou",
    title: "Nabije ma to energiou",
    quote:
      "Keď som unavený a vyčerpaný a čaká ma náročná skúška alebo ťažké stretnutie, požiadam Moniku o harmonizáciu čakier. Cítim sa po tom oveľa lepšie. Nabije ma to energiou, mám chuť pracovať a som pripravený čeliť výzvam.",
    author: "Jozef",
    services: ["harmonizacia-cakier"],
  },

  // Posledná dávka referencií (poznámka: podklad obsahoval na začiatku aj
  // duplicitu už nasadenej dávky Harmonizácie čakier — tá sem nebola znova
  // pridaná, pozri TODO.md). Rovnaké pravidlá: text 1:1, opravené len
  // zjavné preklepy/medzery/úvodzovky.

  // Ženské kruhy
  {
    id: "andrea-dusa-naplnena-laskou",
    title: "Moja duša je naplnená láskou",
    quote:
      "Naše ženské kruhy mi dávajú obrovské pochopenie, spoznanie samej seba. Moja duša je viac a viac naplnená krásnou energiou lásky a porozumenia.\nObrovská vďaka tebe, Monika, že ma učíš byť lepším človekom a pochopiť svet okolo seba. Je to úžasné! Ďakujem ti 🤗",
    author: "Andrea",
    services: ["zenske-kruhy"],
  },
  {
    id: "petra-krasna-dusa",
    title: "Užívať si svoju krásnu dušu",
    quote:
      "Mne prinášajú kruhy zo všetkého trošku, hlavne vnímať prítomnosť bez Ega, stíšiť sa a užívať si svoju krásnu dušu ❤️",
    author: "Petra",
    services: ["zenske-kruhy"],
  },
  {
    id: "michaela-citia-to-aj-najblizsi",
    title: "Cítia to aj naši najbližší",
    quote:
      "Tieto stretnutia mi pomohli zbaviť sa strachu. Odkedy som bola prvý krát, už ho nemám! A najúžasnejšie na tom je, že ten obrovský príval energie, lásky a sebaprijatia pretrváva a cítia ho aj naši najbližší. ♥️",
    author: "Michaela",
    services: ["zenske-kruhy"],
  },
  {
    id: "eva-bolo-mi-dobre",
    title: "Bolo mi dobre",
    quote:
      "Nebolo ľahké rozhodnúť sa a ísť. Bála som sa, že sa nedokážem uvoľniť.\nAle keď som ťa počas meditácie počúvala, ani neviem ako, prestala som myslieť. Uvoľnila som sa a bolo mi dobre.",
    author: "Eva",
    services: ["zenske-kruhy"],
  },
  {
    id: "viera-najviac-tvoje-meditacie",
    title: "Najviac sa mi páčia tvoje meditácie",
    quote:
      "Nikdy som nemeditovala. Ale teraz sa už snažím robiť to čo najčastejšie. Skúšam rôzne meditácie, ako si mi povedala. Ale najviac sa mi páčia tie tvoje. ☺️",
    author: "Viera",
    services: ["zenske-kruhy"],
  },
  {
    id: "denisa-citila-som-sa-vyborne",
    title: "Cítila som sa výborne",
    quote:
      "Keď som prišla domov, môj syn sa ma spýtal, čo sme tam robili. Tak som sa snažila nejako mu vysvetliť, že sme meditovali. Cítila som sa výborne! A on mi na to hovorí, že nabudúce pôjde aj on. 😃❤️",
    author: "Denisa",
    services: ["zenske-kruhy"],
  },
  {
    id: "linda-hned-som-vedela",
    title: "Hneď som vedela, že tam chcem ísť",
    quote:
      "Pre mňa to znamenalo veľký pokrok, veľký krok vpred. Zmenil sa mi na veľa vecí názor. Vidím a cítim veci, ktoré som predtým neregistrovala.\nDalo mi to veľký vnútorný pokoj. Ceniť si svet a život. Vďaka tebe aj Andy, ktorá ma zavolala na toto stretnutie. A zaujímavé bolo, že hneď som vedela a cítila, že tam chcem ísť.\nUž som to veľmi potrebovala. A pomáha mi to uvedomiť si a prekonať isté veci. A ja ti za to nesmierne ďakujem. Som vďačná Bohu, že som ťa mohla spoznať. Si veľmi cenný, dobrý a obetavý človek ❤️🙏",
    author: "Linda",
    services: ["zenske-kruhy"],
  },

  // Harmonizácia čakier
  {
    id: "juraj-cenny-zazitok",
    title: "Bol to pre mňa veľmi cenný zážitok",
    quote:
      "Ešte raz veľká vďaka za dnešné stretnutie.\nBol to pre mňa veľmi cenný zážitok 🙏😇 Rád prídem aj nabudúce a už si vezmem aj podložku, je dobré ležať pri takýchto vedených meditáciách alebo hudbe.",
    author: "Juraj",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "erika-plnohodnotny-cas",
    title: "Bol to plnohodnotne strávený čas s úžasnými ľuďmi",
    quote:
      "Ďakujem, Monika, že som mala tú česť sa zúčastniť tohoto stretnutia… ❤️\n…za spoločný čas plný emócií a hľadania toho správneho nasmerovania na cestu životom…\nBol to plnohodnotne strávený čas s úžasnými ľuďmi 😉 ešte raz obrovská vďaka ❤️👍",
    author: "Erika",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "ingrid-skvely-den",
    title: "Skvelý deň",
    quote: "Ďakujem, Monika, za skvelý deň. ❤️ Som rada, že sa veci tak vyvinuli, že som mohla ísť.",
    author: "Ingrid",
    services: ["harmonizacia-cakier"],
  },
  {
    id: "petra-pritomny-okamih",
    title: "Boli sme v prítomnom okamihu",
    quote:
      "Bolo to veľmi poučné a umožnilo nám to, myslím, že môžem hovoriť v množnom čísle, byť na sto percent v prítomnom okamihu a sami so sebou. Umožnilo nám to stretnutie s vnútorným dieťaťom a taktiež aj so ženskou a mužskou stránkou, našou energiou a pomohlo nám ju pochopiť, respektíve emócie, ktoré sme práve v danom okamihu riešili a plne si ich mohli dovoliť aj cítiť, čiže prežiť.\nMôžem povedať za seba, že určite by som to v budúcnosti absolvovala zas a znovu 😊",
    author: "Petra",
    services: ["harmonizacia-cakier"],
  },

  // Terapia Cesta
  {
    id: "petra-silne-zazitky",
    title: "Mala som silné zážitky",
    quote:
      "Drahá Monika,\nbolo to skvelé!\nSom veľmi vďačná za túto skúsenosť a skúsenosť s tebou. Nemala som pred začiatkom žiadne predstavy, len očakávania, alebo skôr vieru, že ma bude čakať určite niečo nové, a tešila som sa na to, no s rešpektom.\nVeľmi silné osobné zážitky som mala počas našich sedení, a nikdy by ma ani len nenapadlo, kam ma sprevádzanie s tebou, Monika, a vnímanie energie a mojich pocitov zavedie.\nĎakujem 😉 určite to stojí za vyskúšanie a absolvovanie, ak človek túži spoznať sám seba lepšie a nahliadnuť do svojej duše a srdca.",
    author: "Petra",
    services: ["terapia-cesta"],
  },

  // Presunuté na koniec zoznamu na žiadosť (nemá byť ako prvá referencia).
  {
    id: "peter-zivot-fantasticke",
    title: "Život je niečo fantastické!",
    quote:
      "Bol som sám prekvapený, že keď som ochorel, tak som bol psychicky v pohode... Myslím, že obdobie temnej duše mám za sebou. Už ma to nehádže psychicky dole.",
    author: "Peter",
    services: ["terapia-cesta"],
  },
];

export function testimonialsFor(service: ServiceSlug, limit = 2): Testimonial[] {
  const matches = testimonials.filter((t) => t.services.includes(service));
  const featuredFirst = [...matches].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return featuredFirst.slice(0, limit);
}

// Ručný výber konkrétnych referencií podľa id (napr. pre výber na Domov),
// nezávislý od `featured`/poradia v poli — takto sa dá kedykoľvek presne
// zmeniť, čo sa kde zobrazuje, bez vplyvu na výber na iných stránkach.
export function testimonialsByIds(ids: string[]): Testimonial[] {
  return ids
    .map((id) => testimonials.find((t) => t.id === id))
    .filter((t): t is Testimonial => Boolean(t));
}
