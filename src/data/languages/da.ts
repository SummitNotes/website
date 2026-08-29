import type { LanguagePage } from "../../lib/languages";

export const da: LanguagePage = {
  code: "da",
  locale: "da",
  nativeName: "Dansk",
  englishName: "Danish",
  storeLocale: "dk",

  meta: {
    title: "Transskribering af møder på dansk — lokalt på din Mac | Summit AI Notes",
    description:
      "Summit genkender dansk direkte på din Mac: ingen bot i opkaldet, ingen optagelse sendt til skyen. Transskription, opsummering med opgaver og søgning på tværs af alle møder.",
  },

  hero: {
    h1: "Mødenotater på dansk — på din Mac, uden sky",
    subtitle:
      "Summit optager opkaldet, transskriberer dansk og laver en opsummering med opgaver. Optagelse, transskription og notater bliver på enheden.",
    ctaLabel: "Hent i Mac App Store",
    ctaNote: "15 optagelser gratis, ingen oprettelse",
  },

  engine: {
    heading: "Dansk virker uden ekstra opsætning",
    paragraphs: [
      "Summit bruger den lokale talegenkendelsesmodel Parakeet TDT v3. Den understøtter 25 europæiske sprog, herunder dansk, og er valgt som standard. Du behøver hverken installere eller ændre noget.",
      "Sproget i optagelsen genkendes automatisk. Går det galt — for eksempel fordi mødet starter med en engelsk hilsen — kan sproget sættes manuelt for netop den optagelse.",
    ],
    features: [
      {
        title: "Virker uden internet",
        body: "Modellen kører direkte på din Mac. Du kan transskribere møder i toget, i flyet eller på ustabilt gæste-wifi — kvaliteten afhænger ikke af internetforbindelsen.",
      },
      {
        title: "Tegnsætning og tidsstempler",
        body: "Modellen sætter selv tegnsætning og store bogstaver samt tidsstempler pr. ord — et klik på en linje i transskriptionen afspiller præcis det stykke af optagelsen.",
      },
      {
        title: "Genkendelse af talere",
        body: "Også adskillelsen af talere foregår lokalt. Replikker fordeles mellem talerne, og når du har tildelt navnene én gang, genkender Summit dem fremover.",
      },
      {
        title: "Søgning på tværs af alle møder",
        body: "Fuldtekst- og semantisk søgning i transskriptioner og opsummeringer. Den semantiske søgning fungerer på tværs af sprog, så en dansk søgning også finder det, der blev drøftet på engelsk.",
      },
    ],
  },

  mixed: {
    heading: "Når et opkald blander sprog",
    paragraphs: [
      "Et velkendt scenarie: Tre personer starter mødet på dansk, efter ti minutter kommer internationale kolleger til, og samtalen fortsætter på engelsk. Summit genkender hvert afsnit på det sprog, det blev sagt på, uden at oversætte. Danske dele forbliver på dansk, og engelske på engelsk.",
      "Selve dokumentets sprog fastsættes ud fra mødets begyndelse. Summit skriver opsummeringen, opgaverne og titlen på det sprog: starter opkaldet på dansk, bliver resultatet dansk, selv hvis anden halvdel foregik på engelsk.",
      "Skal resultatet være anderledes — for eksempel fordi opsummeringen går til engelsktalende kolleger — kan optagelsens sprog sættes manuelt før behandling.",
    ],
    features: [
      {
        title: "Transskription",
        body: "Hver replik på sit eget sprog. Der oversættes ikke til ét fælles sprog — du læser præcis det, der blev sagt.",
      },
      {
        title: "Opsummering",
        body: "Skrives på dokumentets sprog, som bestemmes af mødets første minutter.",
      },
      {
        title: "Hvis genkendelsen fejler",
        body: "Optagelsens sprog sættes manuelt, hvorefter opsummeringen kan genereres på ny.",
      },
    ],
  },

  privacy: {
    heading: "Optagelser forlader ikke enheden",
    paragraphs: [
      "Der deltager ingen bot i opkaldet. Summit optager systemlyd og mikrofon via macOS, så der ikke dukker en ekstra deltager op — hverken i Zoom, Teams, Meet eller til et fysisk møde.",
      "Lyd, transskription, opsummering og søgeindeks bliver på din Mac. Som standard forlader intet enheden: hverken filer, tekst eller metadata om mødet.",
      "En skymodel aktiveres først, når du selv indtaster en nøgle fra din udbyder i indstillingerne. Indtil da foregår al behandling lokalt — relevant for GDPR, fordi der så ikke overføres nogen personoplysninger.",
      "iCloud-synkronisering er en separat funktion, som er slået fra som standard. Slår du den til, synkroniseres transskriptioner og opsummeringer end-to-end-krypteret mellem dine egne enheder; noget af metadataene omkring dem — varighed, antal ord, registreret sprog — synkroniseres ukrypteret.",
    ],
    linkLabel: "Arkitektur og al udgående trafik i detaljer (på engelsk)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Hvem Summit er særligt nyttig for",
    intro:
      "Nogle af de situationer, hvor Summit gør størst gavn. De uddybende sider er indtil videre kun på engelsk.",
    items: [
      {
        title: "Konsulentvirksomhed",
        body: "Noter fra kundemøder bliver hurtigt til en rapport, uden at fortrolige samtaler uploades til en ekstern skytjeneste.",
        href: "/use-cases/consulting",
        linkLabel: "Konsulentvirksomhed",
      },
      {
        title: "Advokater",
        body: "Klientsamtaler og interne sagsdrøftelser bliver på enheden og sendes ikke til eksterne servere.",
        href: "/use-cases/legal",
        linkLabel: "Advokater",
      },
      {
        title: "Finans",
        body: "Investormøder og forhandlinger med præcise formuleringer og tal, der senere kan findes med søgning.",
        href: "/use-cases/finance",
        linkLabel: "Finans",
      },
      {
        title: "Sundhedsvæsen",
        body: "Konsultationer og sagsgennemgange uden at videregive patientdata til tredjepart.",
        href: "/use-cases/healthcare",
        linkLabel: "Sundhedsvæsen",
      },
    ],
  },

  faq: {
    heading: "Ofte stillede spørgsmål",
    items: [
      {
        question: "Kræver det internet at transskribere et møde på dansk?",
        answer:
          "Nej. Genkendelsesmodellen hentes én gang og kører derefter offline på din Mac. Internet er kun nødvendigt til at hente modeller og opdateringer — eller hvis du selv har tilsluttet en skyudbyder til opsummeringer.",
      },
      {
        question: "Hvad sker der, hvis mødet blander dansk og engelsk?",
        answer:
          "Hvert afsnit genkendes på sit eget sprog, uden oversættelse til ét fælles sprog. Opsummeringen skrives på dokumentets sprog, som bestemmes af mødets begyndelse. Skal resultatet være anderledes, kan optagelsens sprog sættes manuelt før behandling.",
      },
      {
        question: "Går optagelser og transskriptioner til skyen?",
        answer:
          "Som standard nej: lyd, transskription, opsummering og søgeindeks bliver kun på din Mac. Der går kun noget ud i to tilfælde, begge dit eget valg: hvis du tilslutter en skymodel med egen nøgle, eller hvis du slår iCloud-synkronisering til — så synkroniseres indhold krypteret mellem dine enheder, mens noget metadata (varighed, sprog) synkroniseres ukrypteret.",
      },
      {
        question: "Hvilke sprog kan Summit ud over dansk?",
        answer:
          "Standardmodellen understøtter 25 europæiske sprog, heriblandt dansk, tysk, fransk, polsk, ukrainsk og russisk. Til andre sprog er Whisper indbygget. Samlet understøtter Summit omkring hundrede sprog, men Whisper arbejder langsommere.",
      },
      {
        question: "Skal der inviteres en bot ind i opkaldet?",
        answer:
          "Nej. Summit optager systemlyd og mikrofon på din side, så der dukker ingen ekstra deltager op på listen. Møder uden videoopkald optages på samme måde.",
      },
    ],
  },

  otherLanguages: {
    heading: "Andre sprog",
    intro: "Samme model genkender yderligere 24 sprog.",
  },

  finalCta: {
    heading: "Prøv det til dit næste møde",
    body: "De første 15 optagelser er gratis, og du behøver ingen konto. Det er nok til at prøve Summit med din egen stemme, dine fagudtryk og rigtige møder.",
    ctaLabel: "Hent i Mac App Store",
    secondaryLabel: "Sådan beskytter Summit dine data",
    secondaryHref: "/security",
  },
};
