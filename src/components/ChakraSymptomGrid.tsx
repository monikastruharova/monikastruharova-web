export type ChakraSymptom = {
  name: string;
  colorVar: string;
  colorLabel: string;
  text: string;
};

const chakraSymptoms: ChakraSymptom[] = [
  {
    name: "Koreňová",
    colorVar: "var(--color-chakra-root)",
    colorLabel: "červená",
    text: "Pocit neistoty a strachu — Chýba ti pôda pod nohami. Si v neustálom strachu o prežitie, o peniaze, alebo cítiš chronickú únavu, vyčerpanie a nechuť do života.",
  },
  {
    name: "Sakrálna",
    colorVar: "var(--color-chakra-sacral)",
    colorLabel: "oranžová",
    text: "Strata radosti a vášne — Tvoja kreativita zamrzla, vo vzťahoch to škrípe, vytratila sa tvoja prirodzená iskra a chuť užívať si život.",
  },
  {
    name: "Solárneho plexu",
    colorVar: "var(--color-chakra-solar)",
    colorLabel: "žltá",
    text: "Slabé sebavedomie a vnútorný nepokoj — Nevieš si nastaviť hranice, neustále sa prispôsobuješ iným na úkor seba, chýba ti osobná sila, alebo ťa valcuje skrytý hnev.",
  },
  {
    name: "Srdcová",
    colorVar: "var(--color-chakra-heart)",
    colorLabel: "zelená",
    text: "Ťarcha na hrudi a uzavretosť — Cítiš emočný chlad, neschopnosť odpustiť staré krivdy, strach z opätovného sklamania alebo bolesť z osamelosti.",
  },
  {
    name: "Krčná",
    colorVar: "var(--color-chakra-throat)",
    colorLabel: "modrá",
    text: "Hrča v krku — Nevieš vyjadriť svoju skutočnú pravdu, bojíš sa povedať jasné NIE, dusíš v sebe emócie, alebo máš pocit, že ťa nikto nepočúva.",
  },
  {
    name: "Tretieho oka",
    colorVar: "var(--color-chakra-third-eye)",
    colorLabel: "indigo",
    text: "Zmätené myšlienky a chaos — Nedokážeš sa sústrediť, tvoja intuícia mlčí, nedokážeš sa rozhodovať a chýba ti jasné smerovanie.",
  },
  {
    name: "Korunná",
    colorVar: "var(--color-chakra-crown)",
    colorLabel: "fialová/biela",
    text: "Strata zmyslu a odpojenie — Máš pocit, že na všetko ostávaš bez pomoci, chýba ti nadhľad a pýtaš sa, či má tvoje snaženie vôbec nejaký zmysel.",
  },
];

export function ChakraSymptomGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {chakraSymptoms.map((chakra) => (
        <div
          key={chakra.name}
          className="flex gap-4 rounded-2xl border border-sand bg-white/50 p-5"
        >
          <span
            aria-hidden
            className="mt-1 h-4 w-4 shrink-0 rounded-full ring-2 ring-white"
            style={{ background: chakra.colorVar }}
          />
          <div>
            <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
              {chakra.name} čakra <span className="opacity-60">· {chakra.colorLabel}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink md:text-base">{chakra.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
