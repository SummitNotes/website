import type { LanguagePage } from "../../lib/languages";

export const sv: LanguagePage = {
  code: "sv",
  locale: "sv",
  nativeName: "Svenska",
  englishName: "Swedish",
  storeLocale: "se",

  meta: {
    title: "Mötestranskribering på svenska — lokalt på din Mac | Summit AI Notes",
    description:
      "Summit tolkar svenska direkt på din Mac: ingen bot i samtalet, inga inspelningar som skickas till molnet. Transkript, sammanfattning med uppgifter och sökning i alla möten.",
  },

  hero: {
    h1: "Mötesanteckningar på svenska — på din Mac, utan moln",
    subtitle:
      "Summit spelar in samtalet, transkriberar svenskan och sätter ihop en sammanfattning med uppgifter. Inspelning, transkript och anteckningar stannar på enheten.",
    ctaLabel: "Hämta i Mac App Store",
    ctaNote: "15 inspelningar gratis, inget konto krävs",
  },

  engine: {
    heading: "Svenska hanteras av standardmotorn",
    paragraphs: [
      "Taligenkänningen sköts av Parakeet TDT v3, en modell som täcker 25 europeiska språk, svenska inräknat. Den är påslagen som standard, så inget behöver ställas om för svenska möten.",
      "Språket i inspelningen identifieras automatiskt. Om det blir fel — till exempel för att mötet börjar med en engelsk hälsning — går det att ställa in språket manuellt för just den inspelningen.",
    ],
    features: [
      {
        title: "Fungerar utan internet",
        body: "Modellen ligger på disken och körs på din Macs processor. På tåget, på flyget eller i ett mötesrum med gäst-wifi blir resultatet detsamma.",
      },
      {
        title: "Skiljetecken och tidsstämplar",
        body: "Modellen sätter själv skiljetecken och versaler, plus tidsstämplar per ord — ett klick på en rad i transkriptet spelar upp exakt det avsnittet av inspelningen.",
      },
      {
        title: "Talaridentifiering",
        body: "Diariseringen sker också lokalt: repliker delas upp per talare, namn sätts en gång och känns sedan igen.",
      },
      {
        title: "Sökning i alla möten",
        body: "Fritext- och vektorsökning i transkript och sammanfattningar. Embeddingarna är flerspråkiga, så en svensk sökning hittar även det som diskuterades på engelska.",
      },
    ],
  },

  mixed: {
    heading: "När ett samtal blandar språk",
    paragraphs: [
      "Ett vanligt scenario: mötet börjar mellan tre personer på svenska, efter tio minuter ansluter internationella kollegor och samtalet fortsätter på engelska. Inget går sönder här — varje avsnitt tolkas på det språk det talades på, utan att något översätts. Svenska partier i transkriptet förblir svenska, engelska förblir engelska.",
      "Själva dokumentets språk bestäms av mötets början. Summit skriver sammanfattningen, uppgifterna och titeln på det språket: börjar samtalet på svenska blir resultatet svenskt, även om andra halvan hölls på engelska.",
      "Behövs ett annat utfall — till exempel om sammanfattningen ska till engelskspråkiga kollegor — går det att ställa in inspelningens språk manuellt innan den bearbetas.",
    ],
    features: [
      {
        title: "Transkript",
        body: "Varje replik på sitt eget språk. Inget översätts till ett gemensamt språk — du läser precis det som sades.",
      },
      {
        title: "Sammanfattning",
        body: "Skrivs på dokumentets språk, som avgörs av mötets första minuter.",
      },
      {
        title: "Om identifieringen blir fel",
        body: "Inspelningens språk ställs in manuellt, varefter sammanfattningen kan genereras på nytt.",
      },
    ],
  },

  privacy: {
    heading: "Inspelningar lämnar inte enheten",
    paragraphs: [
      "Ingen bot går med i samtalet. Summit fångar systemljud och mikrofon via macOS, så ingen extra deltagare syns — vare sig i Zoom, Teams, Meet eller ett möte utan videosamtal.",
      "Ljud, transkript, sammanfattning och sökindex ligger på din Mac. Som standard lämnar inget enheten: inga filer, ingen text, inga metadata om mötet.",
      "En molnmodell aktiveras bara om du själv anger en nyckel från din leverantör i inställningarna. Fram till dess sker all bearbetning lokalt — relevant för GDPR, eftersom inga personuppgifter då överförs.",
      "iCloud-synkronisering är en separat funktion som är avstängd som standard. Slår du på den synkroniseras transkript och sammanfattningar totalsträckskrypterat mellan dina egna enheter; en del av metadatan kring dem — längd, antal ord, identifierat språk — synkroniseras okrypterat.",
    ],
    linkLabel: "Arkitekturen och all utgående trafik i detalj (på engelska)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Vem som använder Summit mest",
    intro:
      "Scenarierna Summit oftast skaffas för. De länkade sidorna är tills vidare på engelska.",
    items: [
      {
        title: "Konsultverksamhet",
        body: "Anteckningar från kundmöten som direkt matar en rapport — utan att ladda upp NDA-skyddade samtal till ett främmande moln.",
        href: "/use-cases/consulting",
        linkLabel: "Till Konsultverksamhet",
      },
      {
        title: "Advokater",
        body: "Klientsamtal och interna diskussioner om ett ärende stannar på enheten, så tystnadsplikten inte vilar på en främmande server.",
        href: "/use-cases/legal",
        linkLabel: "Till Advokater",
      },
      {
        title: "Finans",
        body: "Investerarmöten och affärsdiskussioner med exakta formuleringar och siffror, sökbara i efterhand.",
        href: "/use-cases/finance",
        linkLabel: "Till Finans",
      },
      {
        title: "Vård",
        body: "Konsultationer och fallgenomgångar utan att patientdata lämnas till tredje part.",
        href: "/use-cases/healthcare",
        linkLabel: "Till Vård",
      },
    ],
  },

  faq: {
    heading: "Vanliga frågor",
    items: [
      {
        question: "Behövs internet för att transkribera ett möte på svenska?",
        answer:
          "Nej. Igenkänningsmodellen laddas ner en gång och körs sedan offline på din Mac. Internet behövs bara för att hämta modeller och uppdateringar — eller om du själv har kopplat en molnleverantör för sammanfattningen.",
      },
      {
        question: "Vad händer om mötet blandar svenska och engelska?",
        answer:
          "Varje avsnitt tolkas på sitt eget språk, utan översättning till ett gemensamt språk. Sammanfattningen skrivs på dokumentets språk, som avgörs av mötets början. Behövs ett annat utfall går det att ställa in inspelningens språk manuellt innan den bearbetas.",
      },
      {
        question: "Går inspelningar och transkript till molnet?",
        answer:
          "Som standard nej: ljud, transkript, sammanfattning och sökindex ligger bara på din Mac. Något lämnar enheten bara i två fall, båda ditt eget val: om du kopplar en molnmodell med egen nyckel, eller om du slår på iCloud-synkronisering — då synkroniseras innehållet krypterat mellan dina enheter, medan viss metadata (längd, språk) synkroniseras okrypterat.",
      },
      {
        question: "Vilka språk klarar Summit förutom svenska?",
        answer:
          "Standardmotorn täcker 25 europeiska språk, bland annat svenska, tyska, franska, polska, ukrainska och ryska. För övriga språk finns Whisper inbyggt — sammanlagt täcker Summit på så vis ett hundratal språk, dock långsammare med Whisper.",
      },
      {
        question: "Måste en bot bjudas in till samtalet?",
        answer:
          "Nej. Summit fångar systemljud och mikrofon på din sida, så ingen extra deltagare syns i listan. Möten utan videosamtal spelas in på samma sätt.",
      },
    ],
  },

  otherLanguages: {
    heading: "Andra språk",
    intro: "Samma motor tolkar ytterligare 24 språk.",
  },

  finalCta: {
    heading: "Testa på ditt nästa möte",
    body: "De första 15 inspelningarna är gratis, utan att skapa konto. Tillräckligt för att testa motorn på din röst, din terminologi och dina möten.",
    ctaLabel: "Hämta i Mac App Store",
    secondaryLabel: "Så fungerar integriteten",
    secondaryHref: "/security",
  },
};
