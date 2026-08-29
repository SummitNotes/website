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
      "Summit registra la chiamata, trascrive ciò che viene detto in italiano e prepara un riepilogo con le attività da svolgere. Registrazione, trascrizione e note restano sul tuo Mac.",
    ctaLabel: "Scarica dal Mac App Store",
    ctaNote: "15 registrazioni gratuite, senza registrazione account",
  },

  engine: {
    heading: "Trascrizione in italiano senza configurazioni aggiuntive",
    paragraphs: [
      "Summit usa in locale il modello di riconoscimento vocale Parakeet TDT v3. Supporta 25 lingue europee, compreso l'italiano, ed è già selezionato come modello predefinito. Non devi installare o modificare nulla.",
      "La lingua della registrazione viene rilevata automaticamente. Se il rilevamento sbaglia — ad esempio perché la riunione inizia con un saluto in inglese — si può impostare manualmente per quella singola registrazione.",
    ],
    features: [
      {
        title: "Funziona senza internet",
        body: "Il modello viene eseguito direttamente sul tuo Mac. Puoi trascrivere una riunione in treno, in aereo o con una connessione Wi-Fi instabile: la qualità non dipende da internet.",
      },
      {
        title: "Punteggiatura e timestamp",
        body: "Il modello inserisce da solo punteggiatura e maiuscole, oltre a un timestamp parola per parola: cliccando su una riga della trascrizione si riproduce esattamente quel punto della registrazione.",
      },
      {
        title: "Riconoscimento dei parlanti",
        body: "Summit distingue i parlanti in locale e assegna a ciascuno i relativi interventi. Basta indicare i nomi una volta perché vengano riconosciuti nelle riunioni successive.",
      },
      {
        title: "Ricerca su tutte le riunioni",
        body: "Ricerca full-text e semantica su trascrizioni e riassunti. La ricerca semantica funziona tra lingue diverse, quindi una domanda in italiano trova anche ciò di cui si è discusso in inglese.",
      },
    ],
  },

  mixed: {
    heading: "Quando in chiamata si mescolano le lingue",
    paragraphs: [
      "Un caso frequente: tre persone iniziano la riunione in italiano, poi si aggiungono colleghi internazionali e la conversazione passa all'inglese. Summit riconosce ogni segmento nella lingua in cui è stato pronunciato, senza tradurlo. Le parti in italiano restano in italiano e quelle in inglese in inglese.",
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
      "Non serve invitare alcun bot. Summit registra l'audio di sistema e il microfono tramite macOS, quindi non compare nessun partecipante in più, né su Zoom, Teams o Meet né durante un incontro di persona.",
      "Audio, trascrizione, riassunto e indice di ricerca restano sul tuo Mac. Di default non esce nulla: né file, né testo, né metadati della riunione.",
      "Un modello cloud entra in gioco solo se inserisci tu stesso la chiave del tuo provider nelle impostazioni. Fino a quel momento tutta l'elaborazione resta locale — un punto rilevante per il GDPR, perché così non viene trasmesso alcun dato personale.",
      "La sincronizzazione iCloud è una funzione separata, disattivata di default. Se la attivi, trascrizioni e riassunti si sincronizzano cifrati end-to-end tra i tuoi dispositivi; alcuni metadati che li accompagnano — durata, numero di parole, lingua rilevata — si sincronizzano invece in chiaro.",
    ],
    linkLabel: "Dettaglio dell'architettura e di tutto il traffico in uscita (in inglese)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Per chi è particolarmente utile Summit",
    intro:
      "Alcune situazioni in cui Summit è particolarmente utile. Le pagine di approfondimento sono per ora disponibili solo in inglese.",
    items: [
      {
        title: "Consulenza",
        body: "Le note delle riunioni con i clienti diventano subito la base per un report, senza caricare conversazioni riservate su un cloud esterno.",
        href: "/use-cases/consulting",
        linkLabel: "Per la consulenza",
      },
      {
        title: "Avvocati",
        body: "Colloqui con i clienti e discussioni interne su un caso restano sul dispositivo e non vengono inviati a server esterni.",
        href: "/use-cases/legal",
        linkLabel: "Per gli avvocati",
      },
      {
        title: "Finanza",
        body: "Riunioni con investitori e trattative con formulazioni e cifre precise, ritrovabili poi con la ricerca.",
        href: "/use-cases/finance",
        linkLabel: "Per la finanza",
      },
      {
        title: "Sanità",
        body: "Consulti e revisioni di casi senza passare i dati del paziente a terzi.",
        href: "/use-cases/healthcare",
        linkLabel: "Per la sanità",
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
          "Di default no: audio, trascrizione, riassunto e indice di ricerca restano solo sul tuo Mac. Esce qualcosa solo in due casi, entrambi a tua scelta: se colleghi un modello cloud con una tua chiave, o se attivi la sincronizzazione iCloud — il contenuto si sincronizza cifrato tra i tuoi dispositivi, ma alcuni metadati (durata, lingua) si sincronizzano in chiaro.",
      },
      {
        question: "Quali lingue capisce Summit oltre all'italiano?",
        answer:
          "Il modello predefinito supporta 25 lingue europee, tra cui italiano, tedesco, francese, spagnolo, polacco, ucraino e russo. Per le altre lingue Summit integra Whisper. In totale sono supportate circa cento lingue, anche se Whisper è più lento.",
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
    intro: "Lo stesso modello riconosce altre 24 lingue.",
  },

  finalCta: {
    heading: "Provalo alla prossima riunione",
    body: "Le prime 15 registrazioni sono gratuite e non serve creare un account. Sono sufficienti per provare Summit con la tua voce, il tuo lessico professionale e riunioni reali.",
    ctaLabel: "Scarica dal Mac App Store",
    secondaryLabel: "Come funziona la privacy",
    secondaryHref: "/security",
  },
};
