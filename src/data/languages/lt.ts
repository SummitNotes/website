import type { LanguagePage } from "../../lib/languages";

export const lt: LanguagePage = {
  code: "lt",
  locale: "lt",
  nativeName: "Lietuvių",
  englishName: "Lithuanian",
  storeLocale: "lt",

  meta: {
    title: "Susitikimų transkripcija lietuvių kalba — jūsų Mac kompiuteryje | Summit AI Notes",
    description:
      "Summit atpažįsta lietuvių kalbą tiesiai jūsų Mac kompiuteryje: jokio boto skambutyje, jokių įrašų, siunčiamų į debesį. Transkripcija, santrauka su užduotimis ir paieška visuose susitikimuose.",
  },

  hero: {
    h1: "Susitikimų užrašai lietuvių kalba — jūsų Mac kompiuteryje, be debesies",
    subtitle:
      "Summit įrašo pokalbį, transkribuoja lietuviškai sakomą kalbą ir parengia santrauką su užduotimis. Įrašas, transkripcija ir užrašai lieka jūsų Mac kompiuteryje.",
    ctaLabel: "Atsisiųsti iš Mac App Store",
    ctaNote: "15 įrašų nemokamai, be registracijos",
  },

  engine: {
    heading: "Transkripcija lietuvių kalba be papildomų nustatymų",
    paragraphs: [
      "Summit naudoja vietinį kalbos atpažinimo modelį Parakeet TDT v3. Jis palaiko 25 Europos kalbas, įskaitant lietuvių, ir jau yra pasirinktas pagal numatytuosius nustatymus. Nieko papildomai diegti ar keisti nereikia.",
      "Įrašo kalba atpažįstama automatiškai. Jei Summit suklysta — pavyzdžiui, nes susitikimas prasideda anglišku pasisveikinimu — tam įrašui galite rankiniu būdu pasirinkti lietuvių kalbą.",
    ],
    features: [
      {
        title: "Veikia be interneto",
        body: "Modelis veikia tiesiogiai jūsų Mac kompiuteryje. Susitikimus galite transkribuoti traukinyje, lėktuve ar esant nestabiliam Wi-Fi — kokybė nepriklauso nuo interneto ryšio.",
      },
      {
        title: "Skyrybos ženklai ir laiko žymos",
        body: "Modelis pats sudeda skyrybos ženklus ir didžiąsias raides, taip pat prideda laiko žymas žodžių lygmeniu — spustelėjus transkripcijos eilutę, atkuriamas būtent tas įrašo momentas.",
      },
      {
        title: "Kalbėtojų atpažinimas",
        body: "Summit taip pat atskiria kalbėtojus vietoje ir priskiria jiems pasisakymus. Vardus pakanka nurodyti vieną kartą — vėliau jie atpažįstami automatiškai.",
      },
      {
        title: "Paieška visuose susitikimuose",
        body: "Viso teksto ir semantinė paieška transkripcijose bei santraukose. Semantinė paieška veikia keliomis kalbomis, todėl lietuviška užklausa randa ir tai, kas buvo aptarta angliškai.",
      },
    ],
  },

  mixed: {
    heading: "Kai skambutyje maišosi kalbos",
    paragraphs: [
      "Įprastas scenarijus: trys žmonės pradeda susitikimą lietuviškai, vėliau prisijungia užsienio kolegos ir pokalbis tęsiasi angliškai. Summit atpažįsta kiekvieną atkarpą ta kalba, kuria ji buvo pasakyta, ir jos neverčia. Lietuviškos dalys lieka lietuviškos, o angliškos — angliškos.",
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
    heading: "Kam Summit ypač naudingas",
    intro:
      "Kelios situacijos, kuriose Summit ypač naudingas. Išsamūs puslapiai kol kas pateikiami tik anglų kalba.",
    items: [
      {
        title: "Konsultacijos",
        body: "Susitikimų su klientais užrašai iš karto tampa ataskaitos pagrindu, o konfidencialūs pokalbiai nekeliami į išorinį debesį.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultacijos",
      },
      {
        title: "Teisininkai",
        body: "Pokalbiai su klientais ir vidinės diskusijos apie bylą lieka įrenginyje ir nėra siunčiami į išorinius serverius.",
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
          "Numatytasis modelis palaiko 25 Europos kalbas, tarp jų lietuvių, vokiečių, prancūzų, lenkų, ukrainiečių ir rusų. Kitoms kalboms Summit turi integruotą Whisper. Iš viso palaikoma apie šimtą kalbų, tačiau Whisper veikia lėčiau.",
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
    intro: "Tas pats modelis atpažįsta dar 24 kalbas.",
  },

  finalCta: {
    heading: "Išbandykite kitame susitikime",
    body: "Pirmieji 15 įrašų nemokami, paskyros kurti nereikia. To pakanka, kad išbandytumėte Summit su savo kalba, profesiniais terminais ir tikrais susitikimais.",
    ctaLabel: "Atsisiųsti iš Mac App Store",
    secondaryLabel: "Kaip veikia privatumas",
    secondaryHref: "/security",
  },
};
