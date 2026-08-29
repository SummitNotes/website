import type { LanguagePage } from "../../lib/languages";

export const sk: LanguagePage = {
  code: "sk",
  locale: "sk",
  nativeName: "Slovenčina",
  englishName: "Slovak",
  storeLocale: "sk",

  meta: {
    title: "Prepis stretnutí v slovenčine — lokálne na vašom Macu | Summit AI Notes",
    description:
      "Summit rozpozná slovenčinu priamo na vašom Macu: žiadny bot v hovore, žiadny záznam nahratý do cloudu. Prepis, zhrnutie s úlohami a vyhľadávanie naprieč všetkými stretnutiami.",
  },

  hero: {
    h1: "Poznámky zo stretnutí v slovenčine — na vašom Macu, bez cloudu",
    subtitle:
      "Summit nahrá hovor, prepíše slovenčinu a pripraví zhrnutie s úlohami. Nahrávka, prepis aj poznámky zostávajú v zariadení.",
    ctaLabel: "Stiahnuť z Mac App Store",
    ctaNote: "15 nahrávok zadarmo, bez registrácie",
  },

  engine: {
    heading: "Slovenčinu zvláda predvolený engine",
    paragraphs: [
      "Rozpoznávanie reči zabezpečuje Parakeet TDT v3, model pokrývajúci 25 európskych jazykov vrátane slovenčiny. Je zapnutý predvolene, takže pre slovenské stretnutia netreba nič prepínať.",
      "Jazyk nahrávky sa rozpozná automaticky. Ak sa rozpoznanie pomýli — napríklad preto, že stretnutie začalo anglickým pozdravom — dá sa jazyk pre konkrétnu nahrávku nastaviť ručne.",
    ],
    features: [
      {
        title: "Funguje bez internetu",
        body: "Model je uložený na disku a počíta na procesore vášho Macu. Vo vlaku, v lietadle či v zasadačke s hosťovským Wi-Fi je výsledok rovnaký.",
      },
      {
        title: "Interpunkcia a časové značky",
        body: "Model sám dopĺňa interpunkciu a veľké písmená, plus časové značky na úrovni slov — kliknutím na riadok v prepise sa prehrá presne táto pasáž nahrávky.",
      },
      {
        title: "Rozlíšenie hovoriacich",
        body: "Diarizácia beží tiež lokálne: repliky sú rozdelené podľa hovoriacich, mená sa priradia raz a potom sa rozpoznávajú automaticky.",
      },
      {
        title: "Vyhľadávanie naprieč stretnutiami",
        body: "Fulltextové aj vektorové vyhľadávanie v prepisoch a zhrnutiach. Embeddingy sú viacjazyčné, takže slovenský dopyt nájde aj to, čo sa preberalo po anglicky.",
      },
    ],
  },

  mixed: {
    heading: "Keď sa v hovore miešajú jazyky",
    paragraphs: [
      "Bežný scenár: stretnutie začína traja ľudia po slovensky, po desiatich minútach sa pripoja zahraniční kolegovia a rozhovor pokračuje po anglicky. Nič sa tu nekazí — každý úsek sa rozpozná v jazyku, v ktorom bol povedaný, bez akéhokoľvek prekladu. Slovenské pasáže zostávajú v prepise slovenské, anglické zostávajú anglické.",
      "Jazyk samotného dokumentu sa určuje podľa začiatku stretnutia. Summit napíše zhrnutie, úlohy aj názov v tomto jazyku: ak hovor začal po slovensky, výsledok bude slovenský, aj keď druhá polovica prebehla po anglicky.",
      "Pre iný výsledok — napríklad keď zhrnutie smeruje k anglicky hovoriacim kolegom — sa dá jazyk nahrávky nastaviť ručne pred spracovaním.",
    ],
    features: [
      {
        title: "Prepis",
        body: "Každá replika vo svojom jazyku. Nič sa neprekladá do jedného spoločného jazyka — čítate presne to, čo bolo povedané.",
      },
      {
        title: "Zhrnutie",
        body: "Píše sa v jazyku dokumentu, ktorý určujú prvé minúty stretnutia.",
      },
      {
        title: "Keď rozpoznanie zlyhá",
        body: "Jazyk nahrávky sa nastaví ručne, potom sa zhrnutie dá vygenerovať znova.",
      },
    ],
  },

  privacy: {
    heading: "Nahrávky neopúšťajú zariadenie",
    paragraphs: [
      "Do hovoru nevstupuje žiadny bot. Summit zachytáva systémový zvuk a mikrofón nástrojmi macOS, takže sa neobjaví žiadny ďalší účastník — či už v Zoome, Teams, Meete alebo na stretnutí naživo.",
      "Zvuk, prepis, zhrnutie aj vyhľadávací index zostávajú na vašom Macu. Predvolene odtiaľto nič neodchádza: žiadne súbory, žiadny text, žiadne metadáta o stretnutí.",
      "Cloudový model sa zapojí, len ak sami zadáte kľúč svojho poskytovateľa v nastaveniach. Dovtedy prebieha celé spracovanie lokálne — čo je podstatné pre GDPR, pretože sa tak neprenáša žiadny osobný údaj.",
      "Synchronizácia cez iCloud je samostatná funkcia, predvolene vypnutá. Ak ju zapnete, prepisy a zhrnutia sa medzi vašimi zariadeniami synchronizujú end-to-end šifrovane; časť sprievodných metadát — dĺžka, počet slov, rozpoznaný jazyk — sa synchronizuje nešifrovane.",
    ],
    linkLabel: "Rozbor architektúry a všetkej odchádzajúcej prevádzky (v angličtine)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kto Summit využíva najčastejšie",
    intro:
      "Scenáre, kvôli ktorým sa Summit zvyčajne obstaráva. Odkazované stránky sú zatiaľ v angličtine.",
    items: [
      {
        title: "Konzultácie",
        body: "Poznámky z klientskych stretnutí, z ktorých rovno vzniká správa — bez nahrávania rozhovorov chránených NDA do cudzieho cloudu.",
        href: "/use-cases/consulting",
        linkLabel: "Konzultácie",
      },
      {
        title: "Právnici",
        body: "Rozhovory s klientmi a interné diskusie o prípade zostávajú v zariadení, takže mlčanlivosť nezávisí od cudzieho servera.",
        href: "/use-cases/legal",
        linkLabel: "Právnici",
      },
      {
        title: "Financie",
        body: "Stretnutia s investormi a rokovania o obchodoch s presnými formuláciami a číslami, ktoré sa neskôr dajú nájsť vyhľadávaním.",
        href: "/use-cases/finance",
        linkLabel: "Financie",
      },
      {
        title: "Zdravotníctvo",
        body: "Konzultácie a rozbory prípadov bez odovzdávania údajov o pacientovi tretej strane.",
        href: "/use-cases/healthcare",
        linkLabel: "Zdravotníctvo",
      },
    ],
  },

  faq: {
    heading: "Časté otázky",
    items: [
      {
        question: "Potrebujem internet na prepis stretnutia v slovenčine?",
        answer:
          "Nie. Rozpoznávací model sa stiahne raz, potom beží na vašom Macu offline. Internet je potrebný len na stiahnutie modelov a aktualizácií — alebo ak ste sami pripojili cloudového poskytovateľa pre zhrnutie.",
      },
      {
        question: "Čo sa stane, keď sa na stretnutí mieša slovenčina s angličtinou?",
        answer:
          "Každý úsek sa rozpozná vo svojom jazyku, bez prekladu do jedného spoločného jazyka. Zhrnutie sa píše v jazyku dokumentu, určenom začiatkom stretnutia. Pre iný výsledok sa dá jazyk nahrávky nastaviť ručne pred spracovaním.",
      },
      {
        question: "Odchádzajú nahrávky a prepisy do cloudu?",
        answer:
          "Predvolene nie: zvuk, prepis, zhrnutie aj vyhľadávací index zostávajú len na vašom Macu. Niečo odíde len v dvoch prípadoch, oboch podľa vášho rozhodnutia: keď pripojíte cloudový model vlastným kľúčom, alebo keď zapnete synchronizáciu cez iCloud — vtedy sa obsah synchronizuje šifrovane medzi vašimi zariadeniami, časť metadát (dĺžka, jazyk) však nešifrovane.",
      },
      {
        question: "Aké jazyky zvláda Summit okrem slovenčiny?",
        answer:
          "Predvolený engine pokrýva 25 európskych jazykov, okrem iného slovenčinu, nemčinu, francúzštinu, poľštinu, ukrajinčinu a ruštinu. Pre ostatné jazyky je zabudovaný Whisper — spolu tak Summit pokrýva zhruba sto jazykov, hoci s Whisperom pomalšie.",
      },
      {
        question: "Musí do hovoru vstúpiť bot?",
        answer:
          "Nie. Summit zaznamenáva systémový zvuk a mikrofón na vašej strane, takže sa v zozname účastníkov neobjaví nikto navyše. Rovnako sa nahrávajú aj stretnutia naživo, bez akéhokoľvek hovoru.",
      },
    ],
  },

  otherLanguages: {
    heading: "Ďalšie jazyky",
    intro: "Ten istý engine rozpozná ďalších 24 jazykov.",
  },

  finalCta: {
    heading: "Vyskúšajte na najbližšom stretnutí",
    body: "Prvých 15 nahrávok je zadarmo, bez zakladania účtu. Stačí to na otestovanie enginu na vlastnej reči, vlastnej terminológii aj vlastných stretnutiach.",
    ctaLabel: "Stiahnuť z Mac App Store",
    secondaryLabel: "Ako funguje súkromie",
    secondaryHref: "/security",
  },
};
