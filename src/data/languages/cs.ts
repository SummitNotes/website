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
      "Summit rozpoznává češtinu přímo na vašem Macu: bez bota v hovoru a bez nahrávání záznamů do cloudu. Získáte přepis, shrnutí s úkoly a vyhledávání napříč všemi schůzkami.",
  },

  hero: {
    h1: "Poznámky ze schůzek v češtině — na vašem Macu, bez cloudu",
    subtitle:
      "Summit nahraje hovor, přepíše češtinu a sestaví shrnutí s úkoly. Nahrávka, přepis i poznámky zůstávají v zařízení.",
    ctaLabel: "Stáhnout z Mac App Store",
    ctaNote: "15 nahrávek zdarma, bez registrace",
  },

  engine: {
    heading: "Čeština funguje bez dalšího nastavování",
    paragraphs: [
      "Summit používá lokální model rozpoznávání řeči Parakeet TDT v3. Podporuje 25 evropských jazyků včetně češtiny a je nastavený jako výchozí. Nemusíte tedy nic dalšího instalovat ani přepínat.",
      "Jazyk nahrávky se rozpozná automaticky. Pokud se Summit splete — třeba proto, že schůzka začala anglickým pozdravem — můžete pro danou nahrávku zvolit češtinu ručně.",
    ],
    features: [
      {
        title: "Funguje bez internetu",
        body: "Model běží přímo na vašem Macu. Schůzky můžete přepisovat ve vlaku, v letadle i v zasedačce s nespolehlivou Wi-Fi — kvalita nezávisí na připojení k internetu.",
      },
      {
        title: "Interpunkce a časové značky",
        body: "Model sám doplňuje interpunkci a velká písmena, k tomu časové značky na úrovni slov — kliknutím na řádek v přepisu se přehraje přesně ta pasáž nahrávky.",
      },
      {
        title: "Rozlišení mluvčích",
        body: "Také rozlišení mluvčích probíhá lokálně. Promluvy se rozdělí podle mluvčích, jména přiřadíte jednou a Summit je pak rozpozná automaticky.",
      },
      {
        title: "Vyhledávání napříč schůzkami",
        body: "Fulltextové i sémantické vyhledávání v přepisech a shrnutích. Sémantické hledání funguje napříč jazyky, takže český dotaz najde i to, co se probíralo anglicky.",
      },
    ],
  },

  mixed: {
    heading: "Když se v hovoru míchají jazyky",
    paragraphs: [
      "Běžný scénář: tři lidé začnou schůzku česky, po deseti minutách se připojí zahraniční kolegové a rozhovor pokračuje anglicky. Summit každý úsek rozpozná v jazyce, ve kterém zazněl, a nic nepřekládá. České pasáže zůstanou česky, anglické anglicky.",
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
      "K hovoru se nepřipojuje žádný bot. Summit zaznamenává systémový zvuk a mikrofon prostřednictvím macOS, takže se v seznamu účastníků nikdo navíc neobjeví — ať už používáte Zoom, Teams či Meet, nebo se scházíte osobně.",
      "Zvuk, přepis, shrnutí i vyhledávací index zůstávají na vašem Macu. Ve výchozím nastavení odsud nic neodchází: žádné soubory, žádný text, žádná metadata o schůzce.",
      "Cloudový model se zapojí, jen pokud sami zadáte klíč svého poskytovatele v nastavení. Do té doby probíhá celé zpracování lokálně — což je podstatné pro GDPR, protože se tak nepřenáší žádný osobní údaj.",
      "Synchronizace přes iCloud je samostatná funkce, ve výchozím nastavení vypnutá. Když ji zapnete, přepisy a shrnutí se mezi vašimi zařízeními synchronizují šifrovaně od konce ke konci; část metadat k nim — délka, počet slov, rozpoznaný jazyk — se přitom synchronizuje nešifrovaně.",
    ],
    linkLabel: "Rozbor architektury a veškerého odchozího provozu (v angličtině)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Pro koho se Summit hodí",
    intro:
      "Několik situací, ve kterých je Summit obzvlášť užitečný. Podrobné stránky jsou zatím jen v angličtině.",
    items: [
      {
        title: "Konzultace",
        body: "Poznámky z klientských schůzek se rovnou promění ve zprávu, aniž by se důvěrné rozhovory nahrávaly do externího cloudu.",
        href: "/use-cases/consulting",
        linkLabel: "Konzultace",
      },
      {
        title: "Právníci",
        body: "Rozhovory s klienty a interní diskuse o případu zůstávají v zařízení a neodesílají se na externí servery.",
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
          "Ve výchozím nastavení ne: zvuk, přepis, shrnutí i vyhledávací index zůstávají pouze na vašem Macu. Něco odejde jen ve dvou případech, oba na vaše rozhodnutí: když připojíte cloudový model vlastním klíčem, nebo když zapnete synchronizaci přes iCloud — obsah se pak synchronizuje šifrovaně, část metadat (délka, jazyk) ale nešifrovaně.",
      },
      {
        question: "Jaké jazyky Summit zvládá kromě češtiny?",
        answer:
          "Výchozí model podporuje 25 evropských jazyků, mimo jiné češtinu, němčinu, francouzštinu, polštinu, ukrajinštinu a ruštinu. Pro další jazyky je zabudovaný Whisper. Celkem tak Summit podporuje zhruba sto jazyků, s Whisperem však pracuje pomaleji.",
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
    intro: "Stejný model rozpozná dalších 24 jazyků.",
  },

  finalCta: {
    heading: "Vyzkoušejte na příští schůzce",
    body: "Prvních 15 nahrávek je zdarma a bez účtu. To stačí, abyste Summit vyzkoušeli na vlastním projevu, odborných výrazech i skutečných schůzkách.",
    ctaLabel: "Stáhnout z Mac App Store",
    secondaryLabel: "Jak funguje soukromí",
    secondaryHref: "/security",
  },
};
