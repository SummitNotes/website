import type { LanguagePage } from "../../lib/languages";

export const mt: LanguagePage = {
  code: "mt",
  locale: "mt",
  nativeName: "Malti",
  englishName: "Maltese",
  storeLocale: "mt",

  meta: {
    title: "Traskrizzjoni tal-laqgħat bil-Malti — lokalment fuq il-Mac tiegħek | Summit AI Notes",
    description:
      "Summit jagħraf il-Malti direttament fuq il-Mac tiegħek: l-ebda bot fis-sejħa, l-ebda reġistrazzjoni mibgħuta lejn il-cloud. Traskrizzjoni, sommarju bil-kompiti u tfittxija fil-laqgħat kollha.",
  },

  hero: {
    h1: "Noti tal-laqgħat bil-Malti — fuq il-Mac tiegħek, mingħajr cloud",
    subtitle:
      "Summit jirreġistra s-sejħa, jitraskrivi l-Malti u jħejji sommarju bil-kompiti li jridu jsiru. Ir-reġistrazzjoni, it-traskrizzjoni u n-noti jibqgħu fuq l-apparat.",
    ctaLabel: "Niżżel mill-Mac App Store",
    ctaNote: "15-il reġistrazzjoni b'xejn, mingħajr reġistrazzjoni ta' kont",
  },

  engine: {
    heading: "Il-Malti mifhum mill-magna default",
    paragraphs: [
      "L-għarfien tad-diskors isir minn Parakeet TDT v3, mudell li jkopri 25 lingwa Ewropea, fosthom il-Malti. Din tkun mixgħula b'mod default, għalhekk għal laqgħat bil-Malti m'hemm xejn x'tibdel.",
      "Il-lingwa tar-reġistrazzjoni tiġi identifikata awtomatikament. Jekk l-identifikazzjoni tiżbalja — pereżempju għax il-laqgħa tibda b'tislima bl-Ingliż — il-lingwa tista' tiġi stabbilita manwalment għal dik ir-reġistrazzjoni.",
    ],
    features: [
      {
        title: "Jaħdem mingħajr internet",
        body: "Il-mudell jinsab fuq id-disk u jaħdem fuq il-proċessur tal-Mac tiegħek. Fil-ferrovija, fuq l-ajruplan jew f'kamra tal-laqgħat b'Wi-Fi tal-mistiedna, ir-riżultat huwa l-istess.",
      },
      {
        title: "Punteġġjatura u timestamps",
        body: "Il-mudell iqiegħed hu stess il-punteġġjatura u l-ittri kapitali, flimkien ma' timestamps kelma b'kelma — klikk fuq linja fit-traskrizzjoni ddoqq eżattament dak il-mument mir-reġistrazzjoni.",
      },
      {
        title: "Għarfien tal-kelliema",
        body: "Ukoll id-diviżjoni bejn il-kelliema ssir lokalment: it-tweġibiet huma maqsuma skont il-kelliem, l-ismijiet jingħataw darba u wara jiġu magħrufa awtomatikament.",
      },
      {
        title: "Tfittxija fil-laqgħat kollha",
        body: "Tfittxija tat-test sħiħ u vettorjali fit-traskrizzjonijiet u s-sommarji. L-embeddings huma multilingwi, għalhekk tfittxija bil-Malti ssib ukoll dak li ġie diskuss bl-Ingliż.",
      },
    ],
  },

  mixed: {
    heading: "Meta f'sejħa jitħalltu l-lingwi",
    paragraphs: [
      "Xenarju komuni: il-laqgħa tibda bejn tliet persuni bil-Malti, wara għaxar minuti jingħaqdu kollegi internazzjonali u l-konversazzjoni tkompli bl-Ingliż. Xejn ma jinkiser hawn — kull silta tiġi identifikata bil-lingwa li ntqalet biha, mingħajr ebda traduzzjoni. Il-partijiet bil-Malti jibqgħu bil-Malti fit-traskrizzjoni, dawk bl-Ingliż jibqgħu bl-Ingliż.",
      "Il-lingwa tad-dokument innifsu tiġi stabbilita skont il-bidu tal-laqgħa. Summit jikteb is-sommarju, il-kompiti u t-titlu b'dik il-lingwa: jekk is-sejħa tibda bil-Malti, ir-riżultat ikun bil-Malti, anke jekk it-tieni nofs sar bl-Ingliż.",
      "Għal riżultat differenti — pereżempju jekk is-sommarju jmur għand kollegi li jitkellmu bl-Ingliż — il-lingwa tar-reġistrazzjoni tista' tiġi stabbilita manwalment qabel l-ipproċessar.",
    ],
    features: [
      {
        title: "Traskrizzjoni",
        body: "Kull tweġiba bil-lingwa tagħha stess. Ma ssirx traduzzjoni għal lingwa komuni — taqra eżattament dak li ntqal.",
      },
      {
        title: "Sommarju",
        body: "Jinkiteb bil-lingwa tad-dokument, stabbilita mill-ewwel minuti tal-laqgħa.",
      },
      {
        title: "Jekk l-identifikazzjoni tiżbalja",
        body: "Il-lingwa tar-reġistrazzjoni tiġi stabbilita manwalment, u mbagħad is-sommarju jista' jiġi ġġenerat mill-ġdid.",
      },
    ],
  },

  privacy: {
    heading: "Ir-reġistrazzjonijiet ma jitilqux mill-apparat",
    paragraphs: [
      "L-ebda bot ma jidħol fis-sejħa. Summit jaqbad il-ħoss tas-sistema u l-mikrofonu permezz ta' għodod ta' macOS, għalhekk ma jidhirx ebda parteċipant addizzjonali — kemm f'Zoom, Teams, Meet, kif ukoll f'laqgħa personali.",
      "L-awdjo, it-traskrizzjoni, is-sommarju u l-indiċi tat-tfittxija jibqgħu fuq il-Mac tiegħek. B'mod default xejn ma joħroġ minn hawn: la fajls, la test, la metadata dwar il-laqgħa.",
      "Mudell tal-cloud jidħol fis-seħħ biss jekk int stess iddaħħal ċavetta tal-fornitur tiegħek fl-issettjar. Sa dak iż-żmien, l-ipproċessar kollu jsir lokalment.",
    ],
    linkLabel: "Dettalji tal-arkitettura u t-traffiku ħiereġ kollu (bl-Ingliż)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Min juża Summit l-aktar spiss",
    intro:
      "Ix-xenarji li għalihom normalment jinxtara Summit. Il-paġni marbuta bħalissa huma bl-Ingliż.",
    items: [
      {
        title: "Konsulenza",
        body: "Noti minn laqgħat mal-klijenti li direttament jgħinu fi rrappurtar — mingħajr ma jittellgħu konversazzjonijiet protetti bi NDA f'cloud barrani.",
        href: "/use-cases/consulting",
        linkLabel: "Konsulenza",
      },
      {
        title: "Avukati",
        body: "Konversazzjonijiet mal-klijenti u diskussjonijiet interni dwar każ jibqgħu fuq l-apparat, għalhekk is-segretezza professjonali ma tiddependix minn server barrani.",
        href: "/use-cases/legal",
        linkLabel: "Avukati",
      },
      {
        title: "Finanzi",
        body: "Laqgħat mal-investituri u negozjati bi kliem u ċifri preċiżi, li aktar tard jinstabu bit-tfittxija.",
        href: "/use-cases/finance",
        linkLabel: "Finanzi",
      },
      {
        title: "Kura tas-saħħa",
        body: "Konsultazzjonijiet u analiżi ta' każijiet mingħajr ma jingħaddew data tal-pazjent lil terzi partijiet.",
        href: "/use-cases/healthcare",
        linkLabel: "Kura tas-saħħa",
      },
    ],
  },

  faq: {
    heading: "Mistoqsijiet frekwenti",
    items: [
      {
        question: "Neħtieġ internet biex nittraskrivi laqgħa bil-Malti?",
        answer:
          "Le. Il-mudell tal-għarfien jitniżżel darba, imbagħad jaħdem offline fuq il-Mac tiegħek. L-internet meħtieġ biss biex jitniżżlu mudelli u aġġornamenti — jew jekk int stess ikkonnettjajt fornitur tal-cloud għas-sommarji.",
      },
      {
        question: "X'jiġri jekk fil-laqgħa jitħallat il-Malti mal-Ingliż?",
        answer:
          "Kull silta tiġi identifikata bil-lingwa tagħha stess, mingħajr traduzzjoni għal lingwa komuni. Is-sommarju jinkiteb bil-lingwa tad-dokument, stabbilita mill-bidu tal-laqgħa. Għal riżultat differenti, il-lingwa tar-reġistrazzjoni tista' tiġi stabbilita manwalment qabel l-ipproċessar.",
      },
      {
        question: "Ir-reġistrazzjonijiet u t-traskrizzjonijiet imorru fuq il-cloud?",
        answer:
          "Le. B'mod default, l-awdjo, it-traskrizzjoni, is-sommarju u l-indiċi tat-tfittxija jibqgħu biss fuq il-Mac tiegħek. Xi ħaġa toħroġ biss wara li int stess tikkonnettja mudell tal-cloud b'ċavetta tiegħek stess.",
      },
      {
        question: "Liema lingwi jifhem Summit minbarra l-Malti?",
        answer:
          "Il-magna default tkopri 25 lingwa Ewropea, fosthom il-Malti, il-Ġermaniż, il-Franċiż, il-Pollakk, l-Ukrain u r-Russu. Għal-lingwi l-oħra hemm Whisper integrat — madwar mija oħra ta' lingwi, iżda aktar bil-mod.",
      },
      {
        question: "Irid jissejjaħ bot fis-sejħa?",
        answer:
          "Le. Summit jirreġistra l-ħoss tas-sistema u l-mikrofonu min-naħa tiegħek, għalhekk ma jidher ebda parteċipant addizzjonali fil-lista. Laqgħat personali jiġu rreġistrati bl-istess mod, mingħajr ebda sejħa.",
      },
    ],
  },

  otherLanguages: {
    heading: "Lingwi oħra",
    intro: "L-istess magna tagħraf 24 lingwa oħra.",
  },

  finalCta: {
    heading: "Ipprova fil-laqgħa li jmiss tiegħek",
    body: "L-ewwel 15-il reġistrazzjoni huma b'xejn, mingħajr ma toħloq kont. Biżżejjed biex tipprova l-magna fuq id-diskors tiegħek, it-termini tiegħek u l-laqgħat tiegħek.",
    ctaLabel: "Niżżel mill-Mac App Store",
    secondaryLabel: "Kif taħdem il-privatezza",
    secondaryHref: "/security",
  },
};
