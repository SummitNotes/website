import type { LanguagePage } from "../../lib/languages";

export const it: LanguagePage = {
  code: "it",
  locale: "it",
  nativeName: "Italiano",
  englishName: "Italian",
  storeLocale: "it",

  meta: {
    title: "Trascrizione riunioni in italiano — in locale sul tuo Mac | Summit AI Notes",
    description:
      "Summit riconosce l'italiano direttamente sul tuo Mac: nessun bot nella chiamata, nessuna registrazione caricata sul cloud. Trascrizione, riassunto con attività e ricerca su tutte le riunioni.",
  },

  hero: {
    h1: "Note di riunione in italiano — sul tuo Mac, senza cloud",
    subtitle:
      "Summit registra la chiamata, trascrive l'italiano e prepara un riassunto con le attività da fare. Registrazione, trascrizione e note restano sul dispositivo.",
    ctaLabel: "Scarica dal Mac App Store",
    ctaNote: "15 registrazioni gratuite, senza registrazione account",
  },

  engine: {
    heading: "L'italiano lo capisce il motore predefinito",
    paragraphs: [
      "Il riconoscimento vocale è affidato a Parakeet TDT v3, un modello che copre 25 lingue europee, italiano incluso. È attivo di default, quindi per le riunioni in italiano non c'è nulla da configurare.",
      "La lingua della registrazione viene rilevata automaticamente. Se il rilevamento sbaglia — ad esempio perché la riunione inizia con un saluto in inglese — si può impostare manualmente per quella singola registrazione.",
    ],
    features: [
      {
        title: "Funziona senza internet",
        body: "Il modello è salvato sul disco e gira sul processore del tuo Mac. In treno, in aereo o in sala riunioni con un Wi-Fi ospiti, il risultato non cambia.",
      },
      {
        title: "Punteggiatura e timestamp",
        body: "Il modello inserisce da solo punteggiatura e maiuscole, oltre a un timestamp parola per parola: cliccando su una riga della trascrizione si riproduce esattamente quel punto della registrazione.",
      },
      {
        title: "Riconoscimento dei parlanti",
        body: "Anche la diarizzazione gira in locale: gli interventi sono suddivisi per parlante, i nomi si assegnano una volta e vengono poi riconosciuti automaticamente.",
      },
      {
        title: "Ricerca su tutte le riunioni",
        body: "Ricerca full-text e vettoriale su trascrizioni e riassunti. Gli embedding sono multilingue, quindi una ricerca in italiano trova anche ciò di cui si è discusso in inglese.",
      },
    ],
  },

  mixed: {
    heading: "Quando in chiamata si mescolano le lingue",
    paragraphs: [
      "Un caso frequente: la riunione parte in tre persone in italiano, dopo dieci minuti si aggiungono colleghi internazionali e si continua in inglese. Non c'è nulla che si rompa: ogni segmento viene riconosciuto nella lingua in cui è stato pronunciato, senza alcuna traduzione. Le parti in italiano restano in italiano nella trascrizione, quelle in inglese restano in inglese.",
      "La lingua del documento, invece, si fissa in base all'inizio della riunione. Summit scrive riassunto, attività e titolo in quella lingua: se la chiamata comincia in italiano, il risultato sarà in italiano, anche se la seconda metà si è svolta in inglese.",
      "Per un esito diverso — ad esempio se il riassunto è destinato a colleghi anglofoni — la lingua della registrazione si può impostare manualmente prima dell'elaborazione.",
    ],
    features: [
      {
        title: "Trascrizione",
        body: "Ogni intervento nella sua lingua. Non c'è traduzione verso una lingua comune: leggi esattamente ciò che è stato detto.",
      },
      {
        title: "Riassunto",
        body: "Scritto nella lingua del documento, determinata dai primi minuti della riunione.",
      },
      {
        title: "Se il rilevamento sbaglia",
        body: "La lingua della registrazione si imposta manualmente, dopodiché il riassunto può essere rigenerato.",
      },
    ],
  },

  privacy: {
    heading: "Le registrazioni non lasciano il dispositivo",
    paragraphs: [
      "Nessun bot entra in chiamata. Summit cattura audio di sistema e microfono tramite macOS, quindi non compare nessun partecipante in più, sia su Zoom, Teams, Meet, sia in un incontro di persona.",
      "Audio, trascrizione, riassunto e indice di ricerca restano sul tuo Mac. Di default non esce nulla: né file, né testo, né metadati della riunione.",
      "Un modello cloud entra in gioco solo se inserisci tu stesso la chiave del tuo provider nelle impostazioni. Fino a quel momento tutta l'elaborazione resta locale — un punto rilevante per il GDPR, perché così non viene trasmesso alcun dato personale.",
    ],
    linkLabel: "Dettaglio dell'architettura e di tutto il traffico in uscita (in inglese)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Chi usa Summit più spesso",
    intro:
      "Gli scenari per cui Summit viene solitamente adottato. Le pagine collegate sono per ora in inglese.",
    items: [
      {
        title: "Consulenza",
        body: "Note di riunioni con i clienti che alimentano direttamente un report, senza caricare conversazioni coperte da NDA su un cloud esterno.",
        href: "/use-cases/consulting",
        linkLabel: "Vai a Consulenza",
      },
      {
        title: "Avvocati",
        body: "Colloqui con i clienti e discussioni interne su un caso restano sul dispositivo, così il segreto professionale non dipende da un server esterno.",
        href: "/use-cases/legal",
        linkLabel: "Vai a Avvocati",
      },
      {
        title: "Finanza",
        body: "Riunioni con investitori e trattative con formulazioni e cifre precise, ritrovabili poi con la ricerca.",
        href: "/use-cases/finance",
        linkLabel: "Vai a Finanza",
      },
      {
        title: "Sanità",
        body: "Consulti e revisioni di casi senza passare i dati del paziente a terzi.",
        href: "/use-cases/healthcare",
        linkLabel: "Vai a Sanità",
      },
    ],
  },

  faq: {
    heading: "Domande frequenti",
    items: [
      {
        question: "Serve internet per trascrivere una riunione in italiano?",
        answer:
          "No. Il modello di riconoscimento si scarica una volta sola, poi funziona offline sul tuo Mac. Internet serve solo per scaricare modelli e aggiornamenti, oppure se hai collegato tu stesso un provider cloud per il riassunto.",
      },
      {
        question: "Cosa succede se nella riunione si mescolano italiano e inglese?",
        answer:
          "Ogni segmento viene riconosciuto nella sua lingua, senza traduzione verso una lingua comune. Il riassunto è scritto nella lingua del documento, determinata dall'inizio della riunione. Per un esito diverso, la lingua della registrazione si può impostare manualmente prima dell'elaborazione.",
      },
      {
        question: "Registrazioni e trascrizioni finiscono nel cloud?",
        answer:
          "No. Di default audio, trascrizione, riassunto e indice di ricerca restano solo sul tuo Mac. Esce qualcosa solo dopo che tu stesso colleghi un modello cloud con una tua chiave.",
      },
      {
        question: "Quali lingue capisce Summit oltre all'italiano?",
        answer:
          "Il motore predefinito copre 25 lingue europee, tra cui italiano, tedesco, francese, spagnolo, polacco, ucraino e russo. Per le altre lingue è integrato Whisper, un centinaio di lingue in più ma più lento.",
      },
      {
        question: "Bisogna far entrare un bot in chiamata?",
        answer:
          "No. Summit registra audio di sistema e microfono dal tuo lato, quindi non compare nessun partecipante in più nell'elenco. Allo stesso modo si registrano anche gli incontri di persona, senza alcuna chiamata.",
      },
    ],
  },

  otherLanguages: {
    heading: "Altre lingue",
    intro: "Lo stesso motore riconosce altre 24 lingue.",
  },

  finalCta: {
    heading: "Provalo alla prossima riunione",
    body: "Le prime 15 registrazioni sono gratuite, senza creare un account. Abbastanza per testare il motore sulla tua voce, i tuoi termini e le tue riunioni.",
    ctaLabel: "Scarica dal Mac App Store",
    secondaryLabel: "Come funziona la privacy",
    secondaryHref: "/security",
  },
};
