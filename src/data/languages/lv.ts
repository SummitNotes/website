import type { LanguagePage } from "../../lib/languages";

export const lv: LanguagePage = {
  code: "lv",
  locale: "lv",
  nativeName: "Latviešu",
  englishName: "Latvian",
  storeLocale: "lv",

  meta: {
    title: "Sanāksmju transkripcija latviešu valodā — lokāli jūsu Mac datorā | Summit AI Notes",
    description:
      "Summit atpazīst latviešu valodu tieši jūsu Mac datorā: bez bota zvanā, bez ierakstiem, kas tiek augšupielādēti mākonī. Transkripcija, kopsavilkums ar uzdevumiem un meklēšana visās sanāksmēs.",
  },

  hero: {
    h1: "Sanāksmju piezīmes latviešu valodā — jūsu Mac datorā, bez mākoņa",
    subtitle:
      "Summit ieraksta zvanu, transkribē latviešu valodu un sagatavo kopsavilkumu ar veicamajiem uzdevumiem. Ieraksts, transkripcija un piezīmes paliek ierīcē.",
    ctaLabel: "Lejupielādēt no Mac App Store",
    ctaNote: "15 ieraksti bez maksas, bez konta izveides",
  },

  engine: {
    heading: "Transkripcija latviešu valodā bez papildu iestatīšanas",
    paragraphs: [
      "Summit izmanto lokālo runas atpazīšanas modeli Parakeet TDT v3. Tas atbalsta 25 Eiropas valodas, tostarp latviešu, un jau ir izvēlēts pēc noklusējuma. Nekas papildus nav jāinstalē vai jāpārslēdz.",
      "Ieraksta valoda tiek noteikta automātiski. Ja Summit kļūdās — piemēram, tāpēc, ka sanāksme sākas ar sveicienu angļu valodā —, konkrētajam ierakstam varat manuāli izvēlēties latviešu valodu.",
    ],
    features: [
      {
        title: "Darbojas bez interneta",
        body: "Modelis darbojas tieši jūsu Mac datorā. Sanāksmes var transkribēt vilcienā, lidmašīnā vai ar nestabilu Wi-Fi — kvalitāte nav atkarīga no interneta savienojuma.",
      },
      {
        title: "Pieturzīmes un laika zīmogi",
        body: "Modelis pats liek pieturzīmes un lielos burtus, kā arī vārdu līmeņa laika zīmogus — klikšķis uz rindas transkripcijā atskaņo tieši šo ieraksta brīdi.",
      },
      {
        title: "Runātāju atpazīšana",
        body: "Arī runātāju nodalīšana notiek lokāli: repliekas ir sadalītas pa runātājiem, vārdi tiek piešķirti vienreiz un pēc tam atpazīti automātiski.",
      },
      {
        title: "Meklēšana visās sanāksmēs",
        body: "Pilna teksta un semantiskā meklēšana transkripcijās un kopsavilkumos. Semantiskā meklēšana darbojas vairākās valodās, tāpēc vaicājums latviešu valodā atrod arī angliski apspriesto.",
      },
    ],
  },

  mixed: {
    heading: "Kad zvanā sajaucas valodas",
    paragraphs: [
      "Ierasta situācija: trīs cilvēki sāk sanāksmi latviešu valodā, vēlāk pievienojas ārvalstu kolēģi un saruna turpinās angliski. Summit atpazīst katru fragmentu valodā, kurā tas izteikts, un netulko to. Latviešu valodā teiktais paliek latviski, bet angļu valodā teiktais — angliski.",
      "Paša dokumenta valoda tiek noteikta pēc sanāksmes sākuma. Summit uzraksta kopsavilkumu, uzdevumus un nosaukumu šajā valodā: ja zvans sākās latviešu valodā, rezultāts būs latviešu valodā, pat ja otra puse notika angļu valodā.",
      "Citam iznākumam — piemēram, ja kopsavilkums nonāk pie angliski runājošiem kolēģiem — ieraksta valodu var iestatīt manuāli pirms apstrādes.",
    ],
    features: [
      {
        title: "Transkripcija",
        body: "Katra replika savā valodā. Tulkojums vienotā valodā nenotiek — jūs lasāt tieši to, kas teikts.",
      },
      {
        title: "Kopsavilkums",
        body: "Tiek rakstīts dokumenta valodā, ko nosaka sanāksmes pirmās minūtes.",
      },
      {
        title: "Ja noteikšana kļūdās",
        body: "Ieraksta valoda tiek iestatīta manuāli, pēc tam kopsavilkumu var izveidot no jauna.",
      },
    ],
  },

  privacy: {
    heading: "Ieraksti nepamet ierīci",
    paragraphs: [
      "Zvanā neieiet neviens bots. Summit uztver sistēmas skaņu un mikrofonu, izmantojot macOS rīkus, tāpēc neparādās neviens papildu dalībnieks — vai tas būtu Zoom, Teams, Meet, vai klātienes tikšanās.",
      "Skaņa, transkripcija, kopsavilkums un meklēšanas indekss paliek jūsu Mac datorā. Pēc noklusējuma no šejienes nekas neaiziet: ne faili, ne teksts, ne sanāksmes metadati.",
      "Mākoņa modelis iesaistās tikai tad, ja jūs pats ievadāt sava pakalpojumu sniedzēja atslēgu iestatījumos. Līdz tam visa apstrāde notiek lokāli — tas ir būtiski GDPR ziņā, jo tādā gadījumā netiek pārsūtīti nekādi personas dati.",
      "iCloud sinhronizācija ir atsevišķa funkcija, pēc noklusējuma izslēgta. To ieslēdzot, transkripcijas un kopsavilkumi tiek sinhronizēti ar pilnīgu šifrēšanu starp jūsu pašu ierīcēm; daļa ar tiem saistīto metadatu — ilgums, vārdu skaits, noteiktā valoda — tiek sinhronizēti nešifrēti.",
    ],
    linkLabel: "Detalizēti par arhitektūru un visu izejošo datplūsmu (angļu valodā)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kam Summit ir īpaši noderīgs",
    intro:
      "Dažas situācijas, kurās Summit ir īpaši noderīgs. Detalizētās lapas pagaidām ir pieejamas tikai angļu valodā.",
    items: [
      {
        title: "Konsultācijas",
        body: "Klientu sanāksmju piezīmes uzreiz kļūst par pārskata pamatu, bet konfidenciālās sarunas netiek augšupielādētas ārējā mākonī.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultācijas",
      },
      {
        title: "Juristi",
        body: "Sarunas ar klientiem un iekšējās diskusijas par lietu paliek ierīcē un netiek nosūtītas uz ārējiem serveriem.",
        href: "/use-cases/legal",
        linkLabel: "Juristi",
      },
      {
        title: "Finanses",
        body: "Sanāksmes ar investoriem un darījumu apspriešana ar precīziem formulējumiem un cipariem, kas vēlāk atrodami ar meklēšanu.",
        href: "/use-cases/finance",
        linkLabel: "Finanses",
      },
      {
        title: "Veselības aprūpe",
        body: "Konsultācijas un gadījumu apskates, nenododot pacienta datus trešajām personām.",
        href: "/use-cases/healthcare",
        linkLabel: "Veselības aprūpe",
      },
    ],
  },

  faq: {
    heading: "Biežāk uzdotie jautājumi",
    items: [
      {
        question: "Vai sanāksmes transkribēšanai latviešu valodā nepieciešams internets?",
        answer:
          "Nē. Atpazīšanas modelis tiek lejupielādēts vienreiz, pēc tam tas darbojas bezsaistē jūsu Mac datorā. Internets nepieciešams tikai modeļu un atjauninājumu lejupielādei — vai ja jūs pats esat pievienojis mākoņpakalpojumu sniedzēju kopsavilkumiem.",
      },
      {
        question: "Kas notiek, ja sanāksmē sajaucas latviešu un angļu valoda?",
        answer:
          "Katrs fragments tiek atpazīts savā valodā, bez tulkojuma vienotā valodā. Kopsavilkums tiek rakstīts dokumenta valodā, ko nosaka sanāksmes sākums. Citam iznākumam ieraksta valodu var iestatīt manuāli pirms apstrādes.",
      },
      {
        question: "Vai ieraksti un transkripcijas nonāk mākonī?",
        answer:
          "Pēc noklusējuma nē: skaņa, transkripcija, kopsavilkums un meklēšanas indekss paliek tikai jūsu Mac datorā. Kaut kas iziet ārā tikai divos gadījumos, abi pēc jūsu izvēles: ja pievienojat mākoņa modeli ar savu atslēgu, vai ja ieslēdzat iCloud sinhronizāciju — tad saturs tiek sinhronizēts šifrēts starp jūsu ierīcēm, bet daļa metadatu (ilgums, valoda) — nešifrēti.",
      },
      {
        question: "Kādas valodas Summit prot papildus latviešu valodai?",
        answer:
          "Noklusējuma modelis atbalsta 25 Eiropas valodas, tostarp latviešu, vācu, franču, poļu, ukraiņu un krievu. Citām valodām Summit ir iebūvēts Whisper. Kopumā tiek atbalstītas aptuveni simts valodas, taču Whisper darbojas lēnāk.",
      },
      {
        question: "Vai zvanā jāuzaicina bots?",
        answer:
          "Nē. Summit ieraksta sistēmas skaņu un mikrofonu jūsu pusē, tāpēc dalībnieku sarakstā neparādās neviens papildu dalībnieks. Tāpat tiek ierakstītas arī klātienes sanāksmes bez jebkāda zvana.",
      },
    ],
  },

  otherLanguages: {
    heading: "Citas valodas",
    intro: "Tas pats modelis atpazīst vēl 24 valodas.",
  },

  finalCta: {
    heading: "Izmēģiniet savā nākamajā sanāksmē",
    body: "Pirmie 15 ieraksti ir bez maksas, un konts nav jāveido. Ar to pietiek, lai izmēģinātu Summit ar savu balsi, profesionālo terminoloģiju un īstām sanāksmēm.",
    ctaLabel: "Lejupielādēt no Mac App Store",
    secondaryLabel: "Kā darbojas privātums",
    secondaryHref: "/security",
  },
};
