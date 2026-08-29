import type { LanguagePage } from "../../lib/languages";

export const hu: LanguagePage = {
  code: "hu",
  locale: "hu",
  nativeName: "Magyar",
  englishName: "Hungarian",
  storeLocale: "hu",

  meta: {
    title: "Megbeszélések átirata magyarul — helyben, a Macen | Summit AI Notes",
    description:
      "A Summit közvetlenül a Macen ismeri fel a magyar beszédet: nincs bot a hívásban, nincs felhőbe küldött felvétel. Átirat, feladatokkal ellátott összefoglaló és keresés az összes megbeszélésben.",
  },

  hero: {
    h1: "Megbeszélés-jegyzetek magyarul — a Macen, felhő nélkül",
    subtitle:
      "A Summit rögzíti a hívást, átírja a magyar beszédet, és összefoglalót készít a teendőkkel. A felvétel, az átirat és a jegyzetek a gépen maradnak.",
    ctaLabel: "Letöltés a Mac App Store-ból",
    ctaNote: "15 felvétel ingyen, regisztráció nélkül",
  },

  engine: {
    heading: "A magyart az alapértelmezett motor érti",
    paragraphs: [
      "A beszédfelismerést a Parakeet TDT v3 végzi, egy modell, amely 25 európai nyelvet fed le, köztük a magyart. Alapból be van kapcsolva, így magyar megbeszélésekhez nincs mit átállítani.",
      "A felvétel nyelvét a modell magától felismeri, a magyar toldalékolás ellenére is. Ha a felismerés téved — mondjuk mert a megbeszélés angol köszönéssel kezdődik —, a nyelv az adott felvételhez kézzel is beállítható.",
    ],
    features: [
      {
        title: "Internet nélkül is működik",
        body: "A modell a lemezen van, és a Mac processzorán számol. Vonaton, repülőn vagy vendég-wifis tárgyalóban ugyanaz az eredmény.",
      },
      {
        title: "Írásjelek és időbélyegek",
        body: "A modell maga teszi ki az írásjeleket és a nagybetűket, mellé szavankénti időbélyeget ad — az átirat egy sorára kattintva pontosan az a szakasz szólal meg a felvételből.",
      },
      {
        title: "Beszélők szétválasztása",
        body: "A diarizáció is helyben fut: a megszólalások beszélők szerint vannak szétosztva, a neveket egyszer kell hozzárendelni, utána a rendszer felismeri őket.",
      },
      {
        title: "Keresés az összes megbeszélésben",
        body: "Teljes szöveges és vektoros keresés az átiratokban és összefoglalókban. Az embeddingek többnyelvűek, így egy magyar keresés az angolul elhangzottakat is megtalálja.",
      },
    ],
  },

  mixed: {
    heading: "Amikor a hívásban keverednek a nyelvek",
    paragraphs: [
      "Gyakori helyzet: a megbeszélés hárman kezdődik magyarul, tíz perc múlva nemzetközi kollégák csatlakoznak, és onnantól angolul folytatódik. Itt semmi nem törik el: minden szakasz azon a nyelven ismerődik fel, amelyen elhangzott, fordítás nélkül. A magyar részek magyarok maradnak az átiratban, az angolok angolok.",
      "Magának a dokumentumnak a nyelvét a megbeszélés eleje határozza meg. A Summit az összefoglalót, a teendőket és a címet ezen a nyelven írja: ha a hívás magyarul indult, az eredmény magyar lesz, még ha a második fele angolul is zajlott.",
      "Ha más eredmény kell — például ha az összefoglaló angol nyelvű kollégákhoz megy —, a felvétel nyelve feldolgozás előtt kézzel is beállítható.",
    ],
    features: [
      {
        title: "Átirat",
        body: "Minden megszólalás a saját nyelvén. Nincs fordítás egy közös nyelvre — pontosan azt olvassa, ami elhangzott.",
      },
      {
        title: "Összefoglaló",
        body: "A dokumentum nyelvén készül, amelyet a megbeszélés első percei határoznak meg.",
      },
      {
        title: "Ha a felismerés téved",
        body: "A felvétel nyelve kézzel beállítható, ezután az összefoglaló újra elkészíthető.",
      },
    ],
  },

  privacy: {
    heading: "A felvételek nem hagyják el a gépet",
    paragraphs: [
      "A hívásba nem lép be bot. A Summit a rendszerhangot és a mikrofont macOS eszközökkel rögzíti, így nem jelenik meg plusz résztvevő — akár Zoomban, Teamsben, Meetben, akár személyes megbeszélésen.",
      "A hang, az átirat, az összefoglaló és a keresési index a Macen marad. Alapértelmezés szerint semmi nem hagyja el: se fájl, se szöveg, se a megbeszélésre vonatkozó metaadat.",
      "Felhőmodell csak akkor lép be, ha ön maga adja meg a szolgáltatója kulcsát a beállításokban. Addig minden feldolgozás helyben történik — ez a GDPR szempontjából lényeges, mert így nem továbbítódik személyes adat.",
      "Az iCloud-szinkronizálás önálló funkció, amely alapértelmezés szerint ki van kapcsolva. Ha bekapcsolja, az átiratok és összefoglalók végpontok közötti titkosítással szinkronizálódnak az ön saját eszközei között; a hozzájuk tartozó néhány metaadat — időtartam, szószám, felismert nyelv — titkosítatlanul szinkronizálódik.",
    ],
    linkLabel: "Az architektúra és a teljes kimenő forgalom részletesen (angolul)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kik használják leggyakrabban a Summitot",
    intro:
      "A forgatókönyvek, amelyekre a Summitot általában beszerzik. A hivatkozott oldalak egyelőre angolul vannak.",
    items: [
      {
        title: "Tanácsadás",
        body: "Ügyfélmegbeszélésekből származó jegyzetek, amelyekből azonnal jelentés készül — anélkül, hogy titoktartási megállapodás alá eső beszélgetéseket kellene idegen felhőbe feltölteni.",
        href: "/use-cases/consulting",
        linkLabel: "Tanácsadás",
      },
      {
        title: "Ügyvédek",
        body: "Az ügyfélbeszélgetések és a belső ügymegbeszélések a gépen maradnak, így az ügyvédi titoktartás nem múlik idegen szerveren.",
        href: "/use-cases/legal",
        linkLabel: "Ügyvédek",
      },
      {
        title: "Pénzügy",
        body: "Befektetői megbeszélések és tárgyalások pontos megfogalmazásokkal és számokkal, amelyek később kereséssel megtalálhatók.",
        href: "/use-cases/finance",
        linkLabel: "Pénzügy",
      },
      {
        title: "Egészségügy",
        body: "Konzultációk és esetmegbeszélések anélkül, hogy a beteg adatai harmadik félhez kerülnének.",
        href: "/use-cases/healthcare",
        linkLabel: "Egészségügy",
      },
    ],
  },

  faq: {
    heading: "Gyakori kérdések",
    items: [
      {
        question: "Kell internet a magyar nyelvű megbeszélés átírásához?",
        answer:
          "Nem. A felismerő modellt egyszer kell letölteni, utána offline fut a Macen. Internet csak a modellek és a frissítések letöltéséhez kell — vagy ha ön maga kapcsolt be felhőszolgáltatót az összefoglalóhoz.",
      },
      {
        question: "Mi történik, ha a megbeszélésen magyar és angol keveredik?",
        answer:
          "Minden szakasz a saját nyelvén ismerődik fel, közös nyelvre fordítás nélkül. Az összefoglaló a dokumentum nyelvén készül, amelyet a megbeszélés eleje határoz meg. Más eredményhez a felvétel nyelve feldolgozás előtt kézzel beállítható.",
      },
      {
        question: "Felhőbe kerülnek a felvételek és átiratok?",
        answer:
          "Alapértelmezés szerint nem: a hang, az átirat, az összefoglaló és a keresési index kizárólag a Macen marad. Csak két esetben megy ki bármi, mindkettő az ön döntése: ha felhőmodellt köt be saját kulccsal, vagy ha bekapcsolja az iCloud-szinkronizálást — ekkor a tartalom titkosítva szinkronizálódik az eszközei között, néhány metaadat (időtartam, nyelv) viszont titkosítatlanul.",
      },
      {
        question: "Milyen nyelveket tud a Summit a magyaron kívül?",
        answer:
          "Az alapértelmezett motor 25 európai nyelvet fed le, köztük a magyart, a németet, a franciát, a lengyelt, az ukránt és az oroszt. A többi nyelvhez a Whisper van beépítve — összesen így nagyjából száz nyelvet fed le a Summit, bár Whisperrel lassabban.",
      },
      {
        question: "Be kell hívni egy botot a hívásba?",
        answer:
          "Nem. A Summit a rendszerhangot és a mikrofont az ön oldalán rögzíti, így nem jelenik meg plusz résztvevő a listán. A videohívás nélküli, személyes megbeszélések ugyanígy rögzíthetők.",
      },
    ],
  },

  otherLanguages: {
    heading: "További nyelvek",
    intro: "Ugyanez a motor még 24 nyelvet ismer fel.",
  },

  finalCta: {
    heading: "Próbálja ki a következő megbeszélésen",
    body: "Az első 15 felvétel ingyenes, fiók nélkül. Elég ahhoz, hogy a motort a saját beszédén, saját szakkifejezésein és saját megbeszélésein tesztelje.",
    ctaLabel: "Letöltés a Mac App Store-ból",
    secondaryLabel: "Hogyan működik az adatvédelem",
    secondaryHref: "/security",
  },
};
