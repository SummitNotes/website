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
    heading: "Magyar nyelvű átirat külön beállítás nélkül",
    paragraphs: [
      "A Summit a helyben futó Parakeet TDT v3 beszédfelismerő modellt használja. A modell 25 európai nyelvet támogat, köztük a magyart, és eleve ez az alapértelmezett beállítás. Semmit sem kell külön telepítened vagy átállítanod.",
      "A felvétel nyelvét a Summit automatikusan felismeri. Ha téved — például mert a megbeszélés angol köszönéssel kezdődik —, az adott felvételnél kézzel is kiválaszthatod a magyart.",
    ],
    features: [
      {
        title: "Internet nélkül is működik",
        body: "A modell közvetlenül a Maceden fut. Vonaton, repülőn vagy akadozó vendég-wifi mellett is készíthetsz átiratot — a minőség nem függ az internetkapcsolattól.",
      },
      {
        title: "Írásjelek és időbélyegek",
        body: "A modell maga teszi ki az írásjeleket és a nagybetűket, mellé szavankénti időbélyeget ad — az átirat egy sorára kattintva pontosan az a szakasz szólal meg a felvételből.",
      },
      {
        title: "Beszélők szétválasztása",
        body: "A Summit helyben különíti el a beszélőket, és hozzájuk rendeli a megszólalásokat. A neveket csak egyszer kell megadnod, ezután a rendszer automatikusan felismeri őket.",
      },
      {
        title: "Keresés az összes megbeszélésben",
        body: "Teljes szöveges és szemantikus keresés az átiratokban és összefoglalókban. A szemantikus keresés nyelveken átívelően működik, így egy magyar lekérdezés az angolul elhangzottakat is megtalálja.",
      },
    ],
  },

  mixed: {
    heading: "Amikor a hívásban keverednek a nyelvek",
    paragraphs: [
      "Gyakori helyzet: hárman kezditek a megbeszélést magyarul, később külföldi kollégák csatlakoznak, és a beszélgetés angolul folytatódik. A Summit minden szakaszt azon a nyelven ismer fel, amelyen elhangzott, és nem fordítja le. A magyar részek magyarul, az angol részek angolul maradnak.",
      "Magának a dokumentumnak a nyelvét a megbeszélés eleje határozza meg. A Summit az összefoglalót, a teendőket és a címet ezen a nyelven írja: ha a hívás magyarul indult, az eredmény magyar lesz, még ha a második fele angolul is zajlott.",
      "Ha más eredmény kell — például ha az összefoglaló angol nyelvű kollégákhoz megy —, a felvétel nyelve feldolgozás előtt kézzel is beállítható.",
    ],
    features: [
      {
        title: "Átirat",
        body: "Minden megszólalás a saját nyelvén marad. Nincs fordítás egy közös nyelvre — pontosan azt olvasod, ami elhangzott.",
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
      "Felhőmodell csak akkor kapcsolódik be, ha te magad adod meg a szolgáltatód kulcsát a beállításokban. Addig minden feldolgozás helyben történik — ez a GDPR szempontjából is fontos, mert személyes adat nem kerül továbbításra.",
      "Az iCloud-szinkronizálás külön funkció, amely alapértelmezés szerint ki van kapcsolva. Ha bekapcsolod, az átiratok és összefoglalók végpontok közötti titkosítással szinkronizálódnak a saját eszközeid között; néhány kapcsolódó metaadat — az időtartam, a szavak száma és a felismert nyelv — titkosítatlanul szinkronizálódik.",
    ],
    linkLabel: "Az architektúra és a teljes kimenő forgalom részletesen (angolul)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kiknek különösen hasznos a Summit",
    intro:
      "Néhány helyzet, amelyben a Summit különösen hasznos. A részletes oldalak egyelőre csak angolul érhetők el.",
    items: [
      {
        title: "Tanácsadás",
        body: "Az ügyfélmegbeszélések jegyzeteiből azonnal jelentés készül, miközben a bizalmas beszélgetések nem kerülnek külső felhőbe.",
        href: "/use-cases/consulting",
        linkLabel: "Tanácsadás",
      },
      {
        title: "Ügyvédek",
        body: "Az ügyfélbeszélgetések és a belső ügymegbeszélések a gépen maradnak, és nem kerülnek külső szerverekre.",
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
          "Nem. A felismerő modellt csak egyszer kell letöltened, utána offline fut a Maceden. Internet csak a modellek és frissítések letöltéséhez kell, vagy ha te magad kapcsoltál be felhőszolgáltatót az összefoglalóhoz.",
      },
      {
        question: "Mi történik, ha a megbeszélésen magyar és angol keveredik?",
        answer:
          "A Summit minden szakaszt az eredeti nyelvén ismer fel, és nem fordítja le. Az összefoglaló a dokumentum nyelvén készül, amelyet a megbeszélés eleje határoz meg. Ha más nyelvű eredményt szeretnél, a felvétel nyelvét feldolgozás előtt kézzel is beállíthatod.",
      },
      {
        question: "Felhőbe kerülnek a felvételek és átiratok?",
        answer:
          "Alapértelmezés szerint nem: a hang, az átirat, az összefoglaló és a keresési index kizárólag a Maceden marad. Adat csak a te döntésed alapján kerül ki: ha saját kulccsal felhőmodellt kapcsolsz be, vagy ha engedélyezed az iCloud-szinkronizálást. Ilyenkor a tartalom titkosítva szinkronizálódik az eszközeid között, néhány metaadat, például az időtartam és a nyelv, viszont titkosítatlanul.",
      },
      {
        question: "Milyen nyelveket tud a Summit a magyaron kívül?",
        answer:
          "Az alapértelmezett modell 25 európai nyelvet támogat, köztük a magyart, a németet, a franciát, a lengyelt, az ukránt és az oroszt. Más nyelvekhez a Summit a beépített Whispert használja. Összesen körülbelül száz nyelv támogatott, de a Whisper lassabban dolgozik.",
      },
      {
        question: "Be kell hívni egy botot a hívásba?",
        answer:
          "Nem. A Summit a rendszerhangot és a mikrofont a te oldaladon rögzíti, így nem jelenik meg plusz résztvevő a listán. A videohívás nélküli, személyes megbeszéléseket ugyanígy rögzítheted.",
      },
    ],
  },

  otherLanguages: {
    heading: "További nyelvek",
    intro: "Ugyanez a modell még 24 nyelvet ismer fel.",
  },

  finalCta: {
    heading: "Próbáld ki a következő megbeszéléseden",
    body: "Az első 15 felvétel ingyenes, és fiók sem kell hozzá. Ennyi elég ahhoz, hogy kipróbáld a Summitot a saját beszédeddel, szakmai kifejezéseiddel és valódi megbeszéléseken.",
    ctaLabel: "Letöltés a Mac App Store-ból",
    secondaryLabel: "Hogyan működik az adatvédelem",
    secondaryHref: "/security",
  },
};
