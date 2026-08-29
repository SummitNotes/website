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
      "Summit neemt het gesprek op, transcribeert wat er in het Nederlands wordt gezegd en maakt een samenvatting met actiepunten. Opname, transcript en notities blijven op je Mac.",
    ctaLabel: "Downloaden in de Mac App Store",
    ctaNote: "15 opnames gratis, geen account nodig",
  },

  engine: {
    heading: "Nederlandse transcriptie zonder extra instellingen",
    paragraphs: [
      "Summit gebruikt lokaal het spraakherkenningsmodel Parakeet TDT v3. Het ondersteunt 25 Europese talen, waaronder Nederlands, en is standaard al geselecteerd. Je hoeft niets extra's te installeren of in te stellen.",
      "De taal van de opname wordt automatisch herkend. Gaat dat mis — bijvoorbeeld omdat de vergadering met een Engelse begroeting begint — dan zet je de taal handmatig voor die ene opname.",
    ],
    features: [
      {
        title: "Werkt zonder internet",
        body: "Het model draait rechtstreeks op je Mac. Je kunt vergaderingen transcriberen in de trein, in het vliegtuig of met instabiele wifi — de kwaliteit is niet afhankelijk van je internetverbinding.",
      },
      {
        title: "Interpunctie en tijdstempels",
        body: "Het model voegt leestekens, hoofdletters en tijdstempels per woord toe. Klik op een passage in het transcript om direct dat moment van de opname af te spelen.",
      },
      {
        title: "Sprekersherkenning",
        body: "Ook de sprekersscheiding gebeurt lokaal: bijdragen worden per spreker geordend, namen wijs je eenmalig toe en worden daarna herkend.",
      },
      {
        title: "Zoeken door alle vergaderingen",
        body: "Zoeken op volledige tekst en betekenis in transcripten en samenvattingen. De semantische zoekfunctie werkt over talen heen, dus een Nederlandse zoekopdracht vindt ook wat in het Engels besproken is.",
      },
    ],
  },

  mixed: {
    heading: "Als een gesprek van taal wisselt",
    paragraphs: [
      "Een herkenbare situatie: drie mensen beginnen de vergadering in het Nederlands, later sluiten internationale collega's aan en het gesprek gaat verder in het Engels. Summit herkent elk fragment in de gesproken taal en vertaalt het niet. Nederlandse passages blijven Nederlands en Engelse passages Engels.",
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
      "Er neemt geen bot deel aan het gesprek. Summit neemt systeemgeluid en microfoon op via macOS, dus er verschijnt geen extra deelnemer — niet in Zoom, Teams of Meet en ook niet bij een gesprek in dezelfde ruimte.",
      "Audio, transcript, samenvatting en zoekindex blijven op je Mac. Standaard gaat er niets naar buiten: geen bestanden, geen tekst, geen metadata over de vergadering.",
      "Een cloudmodel wordt pas actief als je zelf een sleutel van je provider invoert bij de instellingen. Tot die tijd blijft alle verwerking lokaal — relevant voor de AVG, want dan wordt er simpelweg geen persoonsgegeven verzonden.",
      "iCloud-synchronisatie is een aparte functie die standaard uitstaat. Zet je hem aan, dan worden transcripten en samenvattingen end-to-end versleuteld gesynchroniseerd tussen je eigen apparaten; een deel van de bijbehorende metadata — duur, aantal woorden, herkende taal — wordt daarbij onversleuteld gesynchroniseerd.",
    ],
    linkLabel: "Architectuur en al het uitgaande verkeer in detail (in het Engels)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Voor wie Summit bijzonder nuttig is",
    intro:
      "Enkele situaties waarin Summit bijzonder nuttig is. De uitgebreide pagina's zijn voorlopig alleen in het Engels beschikbaar.",
    items: [
      {
        title: "Consultancy",
        body: "Notities uit klantgesprekken vormen direct de basis voor een rapport, zonder vertrouwelijke gesprekken naar een externe cloud te sturen.",
        href: "/use-cases/consulting",
        linkLabel: "Naar Consultancy",
      },
      {
        title: "Advocatuur",
        body: "Gesprekken met cliënten en interne dossierbesprekingen blijven op het apparaat en worden niet naar externe servers gestuurd.",
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
          "Standaard niet: audio, transcript, samenvatting en zoekindex blijven alleen op je Mac. Er gaat alleen iets naar buiten in twee gevallen, allebei jouw eigen keuze: als je een cloudmodel met een eigen sleutel koppelt, of als je iCloud-synchronisatie aanzet — dan wordt de inhoud versleuteld gesynchroniseerd tussen je apparaten, maar wordt sommige metadata (duur, taal) onversleuteld gesynchroniseerd.",
      },
      {
        question: "Welke talen kan Summit naast het Nederlands?",
        answer:
          "Het standaardmodel ondersteunt 25 Europese talen, waaronder Nederlands, Duits, Frans, Pools, Oekraïens en Russisch. Voor andere talen bevat Summit ook Whisper. In totaal worden ongeveer honderd talen ondersteund, al werkt Whisper langzamer.",
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
    intro: "Hetzelfde model herkent nog 24 andere talen.",
  },

  finalCta: {
    heading: "Probeer het bij je volgende vergadering",
    body: "De eerste 15 opnames zijn gratis en je hebt geen account nodig. Genoeg om Summit te testen met je eigen stem, vaktermen en echte vergaderingen.",
    ctaLabel: "Downloaden in de Mac App Store",
    secondaryLabel: "Hoe privacy werkt",
    secondaryHref: "/security",
  },
};
