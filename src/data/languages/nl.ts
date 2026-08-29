import type { LanguagePage } from "../../lib/languages";

export const nl: LanguagePage = {
  code: "nl",
  locale: "nl",
  nativeName: "Nederlands",
  englishName: "Dutch",
  storeLocale: "nl",

  meta: {
    title: "Vergadernotities in het Nederlands — lokaal op je Mac | Summit AI Notes",
    description:
      "Summit herkent Nederlands rechtstreeks op je Mac: geen bot in het gesprek, geen opname naar de cloud. Transcript, samenvatting met actiepunten en doorzoekbaar over alle vergaderingen.",
  },

  hero: {
    h1: "Vergadernotities in het Nederlands — op je Mac, zonder cloud",
    subtitle:
      "Summit neemt het gesprek op, transcribeert het Nederlands en stelt een samenvatting met actiepunten op. Opname, transcript en notities blijven op het apparaat.",
    ctaLabel: "Downloaden in de Mac App Store",
    ctaNote: "15 opnames gratis, geen account nodig",
  },

  engine: {
    heading: "Nederlands wordt begrepen door de standaardengine",
    paragraphs: [
      "De spraakherkenning draait op Parakeet TDT v3, een model dat 25 Europese talen dekt, Nederlands inbegrepen. Het staat standaard aan — voor Nederlandse vergaderingen hoef je niets om te zetten.",
      "De taal van de opname wordt automatisch herkend. Gaat dat mis — bijvoorbeeld omdat de vergadering met een Engelse begroeting begint — dan zet je de taal handmatig voor die ene opname.",
    ],
    features: [
      {
        title: "Werkt zonder internet",
        body: "Het model staat op de schijf en rekent op de processor van je Mac. In de trein, op het vliegtuig of in een vergaderzaal met gasten-wifi verandert het resultaat niet.",
      },
      {
        title: "Interpunctie en tijdstempels",
        body: "Het model zet zelf leestekens en hoofdletters en levert tijdstempels per woord: klik op een regel in het transcript en precies dat stuk van de opname speelt af.",
      },
      {
        title: "Sprekersherkenning",
        body: "Ook de sprekersscheiding gebeurt lokaal: bijdragen worden per spreker geordend, namen wijs je eenmalig toe en worden daarna herkend.",
      },
      {
        title: "Zoeken door alle vergaderingen",
        body: "Volledige tekst- en vectorzoekopdracht door transcripten en samenvattingen. De embeddings zijn meertalig, dus een Nederlandse zoekopdracht vindt ook wat in het Engels besproken is.",
      },
    ],
  },

  mixed: {
    heading: "Als een gesprek van taal wisselt",
    paragraphs: [
      "Een bekend scenario: de vergadering begint met drie mensen in het Nederlands, na tien minuten sluiten internationale collega's aan en het gesprek gaat verder in het Engels. Daar breekt niets: elk fragment wordt herkend in de taal waarin het gesproken is, zonder te vertalen. Nederlandse stukken blijven Nederlands in het transcript, Engelse stukken blijven Engels.",
      "De taal van het document zelf wordt bepaald door het begin van de vergadering. Summit schrijft de samenvatting, de actiepunten en de titel in die taal: begint het gesprek in het Nederlands, dan is het resultaat Nederlands, ook al verliep de tweede helft in het Engels.",
      "Voor een ander resultaat — bijvoorbeeld omdat de samenvatting naar Engelstalige collega's gaat — stel je de taal van de opname handmatig in voordat die wordt verwerkt.",
    ],
    features: [
      {
        title: "Transcript",
        body: "Elke bijdrage in zijn eigen taal. Er wordt niet vertaald naar één gezamenlijke taal — je leest precies wat er gezegd is.",
      },
      {
        title: "Samenvatting",
        body: "Geschreven in de taal van het document, die bepaald wordt door de eerste minuten van de vergadering.",
      },
      {
        title: "Bij een verkeerde herkenning",
        body: "De taal van de opname zet je handmatig, waarna de samenvatting opnieuw gegenereerd kan worden.",
      },
    ],
  },

  privacy: {
    heading: "Opnames verlaten je apparaat niet",
    paragraphs: [
      "Er komt geen bot in het gesprek. Summit legt systeemgeluid en microfoon vast via macOS, dus er verschijnt geen extra deelnemer — of het nu in Zoom, Teams, Meet of een gesprek zonder videobellen is.",
      "Audio, transcript, samenvatting en zoekindex blijven op je Mac. Standaard gaat er niets naar buiten: geen bestanden, geen tekst, geen metadata over de vergadering.",
      "Een cloudmodel wordt pas actief als je zelf een sleutel van je provider invoert bij de instellingen. Tot die tijd blijft alle verwerking lokaal — relevant voor de AVG, want dan wordt er simpelweg geen persoonsgegeven verzonden.",
    ],
    linkLabel: "Architectuur en al het uitgaande verkeer in detail (in het Engels)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Wie Summit het meest gebruikt",
    intro:
      "De scenario's waarvoor Summit meestal wordt aangeschaft. De gelinkte pagina's zijn voorlopig in het Engels.",
    items: [
      {
        title: "Consultancy",
        body: "Notities uit klantgesprekken die direct in een rapport landen — zonder gesprekken onder NDA naar een vreemde cloud te sturen.",
        href: "/use-cases/consulting",
        linkLabel: "Naar Consultancy",
      },
      {
        title: "Advocatuur",
        body: "Gesprekken met cliënten en interne dossierbesprekingen blijven op het apparaat, zodat de geheimhoudingsplicht niet afhangt van een vreemde server.",
        href: "/use-cases/legal",
        linkLabel: "Naar Advocatuur",
      },
      {
        title: "Financiën",
        body: "Gesprekken met investeerders en dealbesprekingen met exacte bewoordingen en cijfers, later terug te vinden met de zoekfunctie.",
        href: "/use-cases/finance",
        linkLabel: "Naar Financiën",
      },
      {
        title: "Zorg",
        body: "Consulten en dossierbesprekingen zonder patiëntgegevens aan derden door te geven.",
        href: "/use-cases/healthcare",
        linkLabel: "Naar Zorg",
      },
    ],
  },

  faq: {
    heading: "Veelgestelde vragen",
    items: [
      {
        question: "Is internet nodig om een vergadering in het Nederlands te transcriberen?",
        answer:
          "Nee. Het herkenningsmodel wordt eenmalig gedownload en werkt daarna offline op je Mac. Internet is alleen nodig voor het downloaden van modellen en updates, of als je zelf een cloudprovider hebt gekoppeld voor de samenvatting.",
      },
      {
        question: "Wat gebeurt er als een vergadering Nederlands en Engels mengt?",
        answer:
          "Elk fragment wordt herkend in zijn eigen taal, zonder vertaling naar één gezamenlijke taal. De samenvatting wordt geschreven in de taal van het document, bepaald door het begin van de vergadering. Voor een ander resultaat stel je de taal van de opname handmatig in voordat die verwerkt wordt.",
      },
      {
        question: "Gaan opnames en transcripten naar de cloud?",
        answer:
          "Nee. Standaard blijven audio, transcript, samenvatting en zoekindex uitsluitend op je Mac. Er gaat pas iets naar buiten zodra je zelf een cloudmodel met een eigen sleutel koppelt.",
      },
      {
        question: "Welke talen kan Summit naast het Nederlands?",
        answer:
          "De standaardengine dekt 25 Europese talen, waaronder Nederlands, Duits, Frans, Pools, Oekraïens en Russisch. Voor overige talen zit Whisper ingebouwd — nog eens zo'n honderd talen, wel trager.",
      },
      {
        question: "Moet er een bot bij het gesprek?",
        answer:
          "Nee. Summit legt systeemgeluid en microfoon aan jouw kant vast, dus er verschijnt geen extra deelnemer in de lijst. Gesprekken zonder videobellen worden op dezelfde manier opgenomen.",
      },
    ],
  },

  otherLanguages: {
    heading: "Andere talen",
    intro: "Dezelfde engine herkent nog 24 andere talen.",
  },

  finalCta: {
    heading: "Probeer het bij je volgende vergadering",
    body: "De eerste 15 opnames zijn gratis, zonder account aan te maken. Genoeg om de engine te testen op jouw stem, jouw vaktermen en jouw vergaderingen.",
    ctaLabel: "Downloaden in de Mac App Store",
    secondaryLabel: "Hoe privacy werkt",
    secondaryHref: "/security",
  },
};
