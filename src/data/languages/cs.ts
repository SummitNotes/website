import type { LanguagePage } from "../../lib/languages";

export const cs: LanguagePage = {
  code: "cs",
  locale: "cs",
  nativeName: "Čeština",
  englishName: "Czech",
  storeLocale: "cz",

  meta: {
    title: "Přepis schůzek v češtině — lokálně na vašem Macu | Summit AI Notes",
    description:
      "Summit rozpozná češtinu přímo na vašem Macu: žádný bot v hovoru, žádný nahraný záznam do cloudu. Přepis, shrnutí s úkoly a vyhledávání napříč všemi schůzkami.",
  },

  hero: {
    h1: "Poznámky ze schůzek v češtině — na vašem Macu, bez cloudu",
    subtitle:
      "Summit nahraje hovor, přepíše češtinu a sestaví shrnutí s úkoly. Nahrávka, přepis i poznámky zůstávají v zařízení.",
    ctaLabel: "Stáhnout z Mac App Store",
    ctaNote: "15 nahrávek zdarma, bez registrace",
  },

  engine: {
    heading: "Češtinu zvládá výchozí engine",
    paragraphs: [
      "Rozpoznávání řeči zajišťuje Parakeet TDT v3, model pokrývající 25 evropských jazyků, včetně češtiny. Je zapnutý ve výchozím nastavení, takže pro české schůzky není třeba nic přepínat.",
      "Jazyk nahrávky se rozpozná automaticky, i přes bohatou skloňovací soustavu. Pokud se rozpoznání spletlo — třeba proto, že schůzka začala anglickým pozdravem — jde jazyk pro konkrétní nahrávku nastavit ručně.",
    ],
    features: [
      {
        title: "Funguje bez internetu",
        body: "Model leží na disku a počítá na procesoru vašeho Macu. Ve vlaku, letadle nebo v zasedačce s hostovským Wi-Fi je výsledek stejný.",
      },
      {
        title: "Interpunkce a časové značky",
        body: "Model sám doplňuje interpunkci a velká písmena, k tomu časové značky na úrovni slov — kliknutím na řádek v přepisu se přehraje přesně ta pasáž nahrávky.",
      },
      {
        title: "Rozlišení mluvčích",
        body: "Diarizace běží také lokálně: promluvy jsou rozdělené podle mluvčích, jména se přiřadí jednou a pak se rozpoznávají automaticky.",
      },
      {
        title: "Vyhledávání napříč schůzkami",
        body: "Fulltextové i vektorové vyhledávání v přepisech a shrnutích. Embeddingy jsou vícejazyčné, takže český dotaz najde i to, co se probíralo anglicky.",
      },
    ],
  },

  mixed: {
    heading: "Když se v hovoru míchají jazyky",
    paragraphs: [
      "Běžný scénář: schůzka začíná ve třech lidech česky, po deseti minutách se připojí zahraniční kolegové a dál pokračuje anglicky. Nic se tu neláme — každý úsek se rozpozná v jazyce, ve kterém byl řečen, bez jakéhokoli překladu. České pasáže zůstávají v přepisu české, anglické zůstávají anglické.",
      "Jazyk samotného dokumentu se určuje podle začátku schůzky. Summit napíše shrnutí, úkoly i název v tomto jazyce: pokud hovor začal česky, výsledek bude český, i když druhá polovina proběhla anglicky.",
      "Pro jiný výsledek — třeba když shrnutí míří k anglicky mluvícím kolegům — lze jazyk nahrávky nastavit ručně před zpracováním.",
    ],
    features: [
      {
        title: "Přepis",
        body: "Každá promluva ve svém jazyce. Nic se nepřekládá do jednoho společného jazyka — čtete přesně to, co bylo řečeno.",
      },
      {
        title: "Shrnutí",
        body: "Píše se v jazyce dokumentu, který určují první minuty schůzky.",
      },
      {
        title: "Když rozpoznání selže",
        body: "Jazyk nahrávky se nastaví ručně, poté lze shrnutí vygenerovat znovu.",
      },
    ],
  },

  privacy: {
    heading: "Nahrávky neopouštějí zařízení",
    paragraphs: [
      "Do hovoru nevstupuje žádný bot. Summit zachytává systémový zvuk a mikrofon nástroji macOS, takže se neobjeví žádný další účastník — ať už v Zoomu, Teams, Meetu nebo na schůzce naživo.",
      "Zvuk, přepis, shrnutí i vyhledávací index zůstávají na vašem Macu. Ve výchozím nastavení odsud nic neodchází: žádné soubory, žádný text, žádná metadata o schůzce.",
      "Cloudový model se zapojí, jen pokud sami zadáte klíč svého poskytovatele v nastavení. Do té doby probíhá celé zpracování lokálně — což je podstatné pro GDPR, protože se tak nepřenáší žádný osobní údaj.",
    ],
    linkLabel: "Rozbor architektury a veškerého odchozího provozu (v angličtině)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kdo Summit využívá nejčastěji",
    intro:
      "Scénáře, kvůli kterým se Summit obvykle pořizuje. Odkazované stránky jsou zatím v angličtině.",
    items: [
      {
        title: "Konzultace",
        body: "Poznámky z klientských schůzek, ze kterých rovnou vzniká zpráva — bez nahrávání rozhovorů chráněných NDA do cizího cloudu.",
        href: "/use-cases/consulting",
        linkLabel: "Konzultace",
      },
      {
        title: "Právníci",
        body: "Rozhovory s klienty a interní diskuse o případu zůstávají v zařízení, takže mlčenlivost nezávisí na cizím serveru.",
        href: "/use-cases/legal",
        linkLabel: "Právníci",
      },
      {
        title: "Finance",
        body: "Schůzky s investory a jednání o obchodech s přesnými formulacemi a čísly, které se pak dají najít vyhledáváním.",
        href: "/use-cases/finance",
        linkLabel: "Finance",
      },
      {
        title: "Zdravotnictví",
        body: "Konzultace a rozbory případů bez předávání údajů o pacientovi třetí straně.",
        href: "/use-cases/healthcare",
        linkLabel: "Zdravotnictví",
      },
    ],
  },

  faq: {
    heading: "Časté dotazy",
    items: [
      {
        question: "Potřebuji internet na přepis schůzky v češtině?",
        answer:
          "Ne. Rozpoznávací model se stáhne jednou, poté běží na vašem Macu offline. Internet je potřeba jen na stažení modelů a aktualizací — nebo pokud jste sami připojili cloudového poskytovatele pro shrnutí.",
      },
      {
        question: "Co se stane, když se na schůzce mísí čeština s angličtinou?",
        answer:
          "Každý úsek se rozpozná ve svém jazyce, bez překladu do jednoho společného jazyka. Shrnutí se píše v jazyce dokumentu, určeném začátkem schůzky. Pro jiný výsledek lze jazyk nahrávky nastavit ručně před zpracováním.",
      },
      {
        question: "Odcházejí nahrávky a přepisy do cloudu?",
        answer:
          "Ne. Ve výchozím nastavení zůstávají zvuk, přepis, shrnutí i vyhledávací index pouze na vašem Macu. Něco odejde teprve poté, co sami připojíte cloudový model vlastním klíčem.",
      },
      {
        question: "Jaké jazyky Summit zvládá kromě češtiny?",
        answer:
          "Výchozí engine pokrývá 25 evropských jazyků, mimo jiné češtinu, němčinu, francouzštinu, polštinu, ukrajinštinu a ruštinu. Pro ostatní jazyky je zabudovaný Whisper — dalších zhruba sto jazyků, ovšem pomaleji.",
      },
      {
        question: "Musí do hovoru vstoupit bot?",
        answer:
          "Ne. Summit zaznamenává systémový zvuk a mikrofon na vaší straně, takže se v seznamu účastníků neobjeví nikdo navíc. Stejně se nahrávají i schůzky naživo, bez jakéhokoli hovoru.",
      },
    ],
  },

  otherLanguages: {
    heading: "Další jazyky",
    intro: "Stejný engine rozpozná dalších 24 jazyků.",
  },

  finalCta: {
    heading: "Vyzkoušejte na příští schůzce",
    body: "Prvních 15 nahrávek je zdarma, bez zakládání účtu. Stačí to na otestování enginu na vlastní řeči, vlastní terminologii i vlastních schůzkách.",
    ctaLabel: "Stáhnout z Mac App Store",
    secondaryLabel: "Jak funguje soukromí",
    secondaryHref: "/security",
  },
};
