import type { LanguagePage } from "../../lib/languages";

export const lt: LanguagePage = {
  code: "lt",
  locale: "lt",
  nativeName: "Lietuvių",
  englishName: "Lithuanian",
  storeLocale: "lt",

  meta: {
    title: "Susitikimų transkripcija lietuvių kalba — vietoje jūsų Mac | Summit AI Notes",
    description:
      "Summit atpažįsta lietuvių kalbą tiesiai jūsų Mac kompiuteryje: jokio boto skambutyje, jokių įrašų, siunčiamų į debesį. Transkripcija, santrauka su užduotimis ir paieška visuose susitikimuose.",
  },

  hero: {
    h1: "Susitikimų užrašai lietuvių kalba — jūsų Mac, be debesies",
    subtitle:
      "Summit įrašo skambutį, transkribuoja lietuvių kalbą ir parengia santrauką su užduotimis. Įrašas, transkripcija ir užrašai lieka įrenginyje.",
    ctaLabel: "Atsisiųsti iš Mac App Store",
    ctaNote: "15 įrašų nemokamai, be registracijos",
  },

  engine: {
    heading: "Lietuvių kalbą supranta numatytasis variklis",
    paragraphs: [
      "Kalbos atpažinimą atlieka Parakeet TDT v3 — modelis, apimantis 25 Europos kalbas, tarp jų ir lietuvių. Jis įjungtas pagal numatytuosius nustatymus, todėl lietuviškiems susitikimams nieko keisti nereikia.",
      "Įrašo kalba atpažįstama automatiškai, nepaisant turtingos linksniavimo sistemos. Jei atpažinimas suklysta — pavyzdžiui, susitikimas prasideda angliška pasveikinimo fraze —, kalbą galima nustatyti rankiniu būdu tam konkrečiam įrašui.",
    ],
    features: [
      {
        title: "Veikia be interneto",
        body: "Modelis saugomas diske ir skaičiuoja jūsų Mac procesoriuje. Traukinyje, lėktuve ar posėdžių kambaryje su svečių Wi-Fi rezultatas nesikeičia.",
      },
      {
        title: "Skyrybos ženklai ir laiko žymos",
        body: "Modelis pats sudeda skyrybos ženklus ir didžiąsias raides, taip pat prideda laiko žymas žodžių lygmeniu — spustelėjus transkripcijos eilutę, atkuriamas būtent tas įrašo momentas.",
      },
      {
        title: "Kalbėtojų atpažinimas",
        body: "Diarizacija taip pat vyksta vietoje: pasisakymai paskirstyti pagal kalbėtojus, vardai priskiriami vieną kartą ir vėliau atpažįstami automatiškai.",
      },
      {
        title: "Paieška visuose susitikimuose",
        body: "Viso teksto ir vektorinė paieška transkripcijose ir santraukose. Įterpiniai yra daugiakalbiai, todėl lietuviška paieška randa ir tai, kas buvo aptarta angliškai.",
      },
    ],
  },

  mixed: {
    heading: "Kai skambutyje maišosi kalbos",
    paragraphs: [
      "Įprastas scenarijus: susitikimas prasideda trise lietuviškai, po dešimties minučių prisijungia tarptautiniai kolegos, ir pokalbis toliau vyksta angliškai. Čia niekas nesugenda — kiekviena atkarpa atpažįstama ta kalba, kuria ji buvo pasakyta, be jokio vertimo. Lietuviškos dalys transkripcijoje lieka lietuviškos, angliškos lieka angliškos.",
      "Paties dokumento kalba nustatoma pagal susitikimo pradžią. Summit parašys santrauką, užduotis ir pavadinimą ta kalba: jei skambutis prasidėjo lietuviškai, rezultatas bus lietuviškas, net jei antra pusė vyko angliškai.",
      "Norint kitokio rezultato — pavyzdžiui, kai santrauka keliauja angliškai kalbantiems kolegoms — įrašo kalbą galima nustatyti rankiniu būdu prieš apdorojimą.",
    ],
    features: [
      {
        title: "Transkripcija",
        body: "Kiekvienas pasisakymas savo kalba. Į vieną bendrą kalbą neverčiama — skaitote lygiai tai, kas buvo pasakyta.",
      },
      {
        title: "Santrauka",
        body: "Rašoma dokumento kalba, kurią nulemia pirmosios susitikimo minutės.",
      },
      {
        title: "Jei atpažinimas suklydo",
        body: "Įrašo kalba nustatoma rankiniu būdu, po to santrauką galima sugeneruoti iš naujo.",
      },
    ],
  },

  privacy: {
    heading: "Įrašai nepalieka įrenginio",
    paragraphs: [
      "Į skambutį neprisijungia joks botas. Summit fiksuoja sistemos garsą ir mikrofoną macOS priemonėmis, todėl neatsiranda jokio papildomo dalyvio — nesvarbu, ar tai Zoom, Teams, Meet, ar gyvas susitikimas.",
      "Garsas, transkripcija, santrauka ir paieškos indeksas lieka jūsų Mac. Pagal numatytuosius nustatymus iš čia niekas neišeina: nei failai, nei tekstas, nei susitikimo metaduomenys.",
      "Debesijos modelis įsijungia tik tada, kai patys nustatymuose įvedate savo tiekėjo raktą. Iki tol visas apdorojimas vyksta vietoje — tai svarbu BDAR atžvilgiu, nes tuomet neperduodami jokie asmens duomenys.",
      "„iCloud Sync“ yra atskira funkcija, pagal numatytuosius nustatymus išjungta. Ją įjungus, transkripcijos ir santraukos sinchronizuojamos ištisiniu šifravimu tarp jūsų pačių įrenginių; dalis su jomis susijusių metaduomenų — trukmė, žodžių skaičius, atpažinta kalba — sinchronizuojama nešifruota.",
    ],
    linkLabel: "Architektūros ir viso siunčiamo srauto detalės (anglų kalba)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kas dažniausiai naudoja Summit",
    intro:
      "Scenarijai, dėl kurių Summit paprastai ir įsigyjamas. Susietuose puslapiuose kol kas tik anglų kalba.",
    items: [
      {
        title: "Konsultacijos",
        body: "Užrašai iš susitikimų su klientais, iš kurių iš karto susidaro ataskaita — neįkeliant NDA saugomų pokalbių į svetimą debesį.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultacijos",
      },
      {
        title: "Teisininkai",
        body: "Pokalbiai su klientais ir vidinės diskusijos apie bylą lieka įrenginyje, todėl profesinė paslaptis nepriklauso nuo svetimo serverio.",
        href: "/use-cases/legal",
        linkLabel: "Teisininkai",
      },
      {
        title: "Finansai",
        body: "Susitikimai su investuotojais ir sandorių derybos su tiksliomis formuluotėmis ir skaičiais, vėliau randamais per paiešką.",
        href: "/use-cases/finance",
        linkLabel: "Finansai",
      },
      {
        title: "Sveikatos priežiūra",
        body: "Konsultacijos ir atvejų aptarimai neperduodant paciento duomenų trečiosioms šalims.",
        href: "/use-cases/healthcare",
        linkLabel: "Sveikatos priežiūra",
      },
    ],
  },

  faq: {
    heading: "Dažniausiai užduodami klausimai",
    items: [
      {
        question: "Ar reikia interneto, norint transkribuoti susitikimą lietuvių kalba?",
        answer:
          "Ne. Atpažinimo modelis atsisiunčiamas vieną kartą, po to jis veikia jūsų Mac neprisijungus prie interneto. Interneto reikia tik modeliams ir atnaujinimams atsisiųsti — arba jei patys prijungėte debesijos tiekėją santraukoms.",
      },
      {
        question: "Kas nutinka, jei susitikime maišosi lietuvių ir anglų kalbos?",
        answer:
          "Kiekviena atkarpa atpažįstama sava kalba, be vertimo į vieną bendrą kalbą. Santrauka rašoma dokumento kalba, kurią nulemia susitikimo pradžia. Norint kitokio rezultato, įrašo kalbą galima nustatyti rankiniu būdu prieš apdorojimą.",
      },
      {
        question: "Ar įrašai ir transkripcijos keliauja į debesį?",
        answer:
          "Pagal numatytuosius nustatymus ne: garsas, transkripcija, santrauka ir paieškos indeksas lieka tik jūsų Mac. Kažkas išeina tik dviem atvejais, abu — jūsų pasirinkimu: kai prijungiate debesijos modelį su savo raktu, arba kai įjungiate „iCloud Sync“ — tuomet turinys sinchronizuojamas šifruotas tarp jūsų įrenginių, o dalis metaduomenų (trukmė, kalba) — nešifruota.",
      },
      {
        question: "Kokias kalbas Summit moka be lietuvių?",
        answer:
          "Numatytasis variklis apima 25 Europos kalbas, tarp jų lietuvių, vokiečių, prancūzų, lenkų, ukrainiečių ir rusų. Kitoms kalboms integruotas Whisper — iš viso Summit taip apima maždaug šimtą kalbų, tačiau su Whisper lėčiau.",
      },
      {
        question: "Ar reikia kviesti botą į skambutį?",
        answer:
          "Ne. Summit įrašo sistemos garsą ir mikrofoną jūsų pusėje, todėl dalyvių sąraše neatsiranda jokio papildomo dalyvio. Taip pat įrašomi ir gyvi susitikimai be jokio skambučio.",
      },
    ],
  },

  otherLanguages: {
    heading: "Kitos kalbos",
    intro: "Tas pats variklis atpažįsta dar 24 kalbas.",
  },

  finalCta: {
    heading: "Išbandykite kitame susitikime",
    body: "Pirmi 15 įrašų nemokami, be paskyros kūrimo. Pakanka, kad išbandytumėte variklį su savo kalba, savais terminais ir savais susitikimais.",
    ctaLabel: "Atsisiųsti iš Mac App Store",
    secondaryLabel: "Kaip veikia privatumas",
    secondaryHref: "/security",
  },
};
