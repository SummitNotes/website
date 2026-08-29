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
      "Summit transkriberar svenska direkt på din Mac: ingen bot i samtalet och inga inspelningar som skickas till molnet. Du får transkript, en sammanfattning med uppgifter och sökning i alla möten.",
  },

  hero: {
    h1: "Mötesanteckningar på svenska — på din Mac, utan moln",
    subtitle:
      "Summit spelar in samtalet, transkriberar det som sägs på svenska och skapar en sammanfattning med uppgifter. Inspelning, transkript och anteckningar stannar på din Mac.",
    ctaLabel: "Hämta i Mac App Store",
    ctaNote: "15 inspelningar gratis, inget konto krävs",
  },

  engine: {
    heading: "Svensk transkribering utan extra inställningar",
    paragraphs: [
      "Summit använder den lokala taligenkänningsmodellen Parakeet TDT v3. Den stöder 25 europeiska språk, däribland svenska, och är redan vald som standard. Du behöver inte installera eller ändra något.",
      "Språket i inspelningen identifieras automatiskt. Om det blir fel — till exempel för att mötet börjar med en engelsk hälsning — går det att ställa in språket manuellt för just den inspelningen.",
    ],
    features: [
      {
        title: "Fungerar utan internet",
        body: "Modellen körs direkt på din Mac. Du kan transkribera möten på tåget, på flyget eller med instabilt wifi — kvaliteten är inte beroende av internetanslutningen.",
      },
      {
        title: "Skiljetecken och tidsstämplar",
        body: "Modellen sätter själv skiljetecken och versaler, plus tidsstämplar per ord — ett klick på en rad i transkriptet spelar upp exakt det avsnittet av inspelningen.",
      },
      {
        title: "Talaridentifiering",
        body: "Summit skiljer också talarna åt lokalt och kopplar varje replik till rätt person. Du behöver bara ange namnen en gång, sedan känns de igen automatiskt.",
      },
      {
        title: "Sökning i alla möten",
        body: "Fritext- och semantisk sökning i transkript och sammanfattningar. Den semantiska sökningen fungerar mellan språk, så en svensk fråga hittar även det som diskuterades på engelska.",
      },
    ],
  },

  mixed: {
    heading: "När ett samtal blandar språk",
    paragraphs: [
      "En vanlig situation: tre personer börjar mötet på svenska, senare ansluter internationella kollegor och samtalet övergår till engelska. Summit känner igen varje avsnitt på det språk som talas och översätter det inte. Svenska avsnitt förblir svenska och engelska förblir engelska.",
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
      "Ingen bot deltar i samtalet. Summit spelar in systemljud och mikrofon via macOS, så ingen extra deltagare syns — vare sig i Zoom, Teams eller Meet eller under ett möte på plats.",
      "Ljud, transkript, sammanfattning och sökindex ligger på din Mac. Som standard lämnar inget enheten: inga filer, ingen text, inga metadata om mötet.",
      "En molnmodell aktiveras bara om du själv anger en nyckel från din leverantör i inställningarna. Fram till dess sker all bearbetning lokalt — relevant för GDPR, eftersom inga personuppgifter då överförs.",
      "iCloud-synkronisering är en separat funktion som är avstängd som standard. Slår du på den synkroniseras transkript och sammanfattningar end-to-end-krypterat mellan dina egna enheter; en del av tillhörande metadata — längd, antal ord och identifierat språk — synkroniseras okrypterat.",
    ],
    linkLabel: "Arkitekturen och all utgående trafik i detalj (på engelska)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Vem Summit är särskilt användbart för",
    intro:
      "Några situationer där Summit är särskilt användbart. De utförliga sidorna finns tills vidare bara på engelska.",
    items: [
      {
        title: "Konsultverksamhet",
        body: "Anteckningar från kundmöten blir direkt underlag för en rapport, utan att konfidentiella samtal laddas upp till en extern molntjänst.",
        href: "/use-cases/consulting",
        linkLabel: "Till Konsultverksamhet",
      },
      {
        title: "Advokater",
        body: "Klientsamtal och interna diskussioner om ett ärende stannar på enheten och skickas inte till externa servrar.",
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
          "Standardmodellen stöder 25 europeiska språk, bland annat svenska, tyska, franska, polska, ukrainska och ryska. För andra språk finns Whisper inbyggt. Totalt stöder Summit omkring hundra språk, men Whisper arbetar långsammare.",
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
    intro: "Samma modell känner igen ytterligare 24 språk.",
  },

  finalCta: {
    heading: "Testa på ditt nästa möte",
    body: "De första 15 inspelningarna är gratis och kräver inget konto. Det räcker för att testa Summit med din röst, dina facktermer och riktiga möten.",
    ctaLabel: "Hämta i Mac App Store",
    secondaryLabel: "Så fungerar integriteten",
    secondaryHref: "/security",
  },
};
