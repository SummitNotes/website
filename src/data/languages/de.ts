import type { LanguagePage } from "../../lib/languages";

export const de: LanguagePage = {
  code: "de",
  locale: "de",
  nativeName: "Deutsch",
  englishName: "German",
  storeLocale: "de",

  meta: {
    title: "Meeting-Transkription auf Deutsch — lokal auf deinem Mac | Summit AI Notes",
    description:
      "Summit erkennt deutsche Sprache direkt auf deinem Mac: kein Bot im Call, keine Aufnahme in der Cloud. Transkript, Zusammenfassung mit Aufgaben und Volltextsuche über alle Meetings.",
  },

  hero: {
    h1: "Meeting-Notizen auf Deutsch — auf deinem Mac, ohne Cloud",
    subtitle:
      "Summit nimmt den Call auf, transkribiert die deutsche Sprache und erstellt eine Zusammenfassung mit Aufgaben. Aufnahme, Transkript und Notizen bleiben auf dem Gerät.",
    ctaLabel: "Im Mac App Store laden",
    ctaNote: "15 Aufnahmen gratis, keine Anmeldung nötig",
  },

  engine: {
    heading: "Deutsch versteht die Standard-Engine",
    paragraphs: [
      "Die Spracherkennung übernimmt Parakeet TDT v3, ein Modell für 25 europäische Sprachen, Deutsch eingeschlossen. Es ist standardmäßig aktiv — für deutsche Meetings musst du nichts umstellen.",
      "Zusammengesetzte Wörter, wie sie im Deutschen ständig vorkommen, erkennt das Modell als Ganzes statt sie falsch zu trennen. Die Sprache erkennt es selbst; bleibt sie unklar — etwa weil das Meeting mit einer englischen Begrüßung beginnt —, lässt sie sich pro Aufnahme manuell setzen.",
    ],
    features: [
      {
        title: "Funktioniert ohne Internet",
        body: "Das Modell liegt auf der Festplatte und rechnet auf dem Prozessor deines Mac. Im Zug, im Flugzeug oder im Besprechungsraum mit Gäste-WLAN ändert sich am Ergebnis nichts.",
      },
      {
        title: "Zeichensetzung und Zeitmarken",
        body: "Satzzeichen und Großschreibung setzt das Modell selbst, dazu Zeitstempel auf Wortebene — ein Klick im Transkript spielt genau diese Stelle der Aufnahme ab.",
      },
      {
        title: "Sprechererkennung",
        body: "Die Zuordnung zu Sprechern läuft ebenfalls lokal. Namen werden einmal manuell zugewiesen und danach wiedererkannt.",
      },
      {
        title: "Suche über alle Meetings",
        body: "Volltext- und Vektorsuche über Transkripte und Zusammenfassungen. Die Embeddings sind mehrsprachig, eine deutsche Suche findet also auch Passagen, die auf Englisch besprochen wurden.",
      },
    ],
  },

  mixed: {
    heading: "Wenn im Call die Sprache wechselt",
    paragraphs: [
      "Ein gängiges Szenario: Das Meeting beginnt zu dritt auf Deutsch, nach zehn Minuten kommen internationale Kollegen dazu — und es geht auf Englisch weiter. Das ist kein Problem: Jeder Abschnitt wird in der Sprache erkannt, in der er gesprochen wurde, ohne zu übersetzen. Deutsche Passagen im Transkript bleiben deutsch, englische bleiben englisch.",
      "Die Sprache des Dokuments selbst richtet sich nach dem Beginn des Meetings. Zusammenfassung, Aufgaben und Titel schreibt Summit in dieser Sprache: Startet der Call auf Deutsch, ist das Ergebnis deutsch — auch wenn die zweite Hälfte auf Englisch verlief.",
      "Soll es anders laufen, etwa weil die Zusammenfassung an englischsprachige Kollegen geht, lässt sich die Sprache der Aufnahme vor der Verarbeitung manuell festlegen.",
    ],
    features: [
      {
        title: "Transkript",
        body: "Jeder Redebeitrag in seiner eigenen Sprache. Es wird nicht in eine gemeinsame Sprache übersetzt — du liest genau das, was gesagt wurde.",
      },
      {
        title: "Zusammenfassung",
        body: "Sie entsteht in der Sprache des Dokuments, die sich aus den ersten Minuten des Meetings ergibt.",
      },
      {
        title: "Falsch erkannt?",
        body: "Die Sprache der Aufnahme lässt sich manuell setzen, danach kann die Zusammenfassung neu erstellt werden.",
      },
    ],
  },

  privacy: {
    heading: "Aufnahmen verlassen dein Gerät nicht",
    paragraphs: [
      "Kein Bot betritt den Call. Summit nimmt Systemton und Mikrofon über macOS auf, sichtbar wird also kein zusätzlicher Teilnehmer — egal ob in Zoom, Teams, Meet oder bei einem Gespräch ohne Videocall.",
      "Audio, Transkript, Zusammenfassung und Suchindex liegen auf deinem Mac. Standardmäßig verlässt nichts das Gerät — keine Dateien, kein Text, keine Metadaten zum Meeting.",
      "Ein Cloud-Modell wird nur aktiv, wenn du selbst einen Schlüssel deines Anbieters in den Einstellungen einträgst. Bis dahin läuft die gesamte Verarbeitung lokal — relevant für DSGVO-Anforderungen, weil dann schlicht keine personenbezogenen Daten übertragen werden.",
      "iCloud-Synchronisierung ist eine separate, standardmäßig deaktivierte Funktion. Schaltest du sie ein, werden Transkripte und Zusammenfassungen Ende-zu-Ende-verschlüsselt zwischen deinen eigenen Geräten synchronisiert; einige Metadaten dazu — Dauer, Wortzahl, erkannte Sprache — werden dabei unverschlüsselt synchronisiert.",
    ],
    linkLabel: "Architektur und gesamter Netzwerkverkehr im Detail (auf Englisch)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Wer Summit besonders häufig einsetzt",
    intro:
      "Die Szenarien, für die Summit meistens angeschafft wird. Die verlinkten Seiten sind aktuell auf Englisch.",
    items: [
      {
        title: "Consulting",
        body: "Notizen aus Kundengesprächen, aus denen sich direkt ein Bericht erstellen lässt — ohne NDA-geschützte Gespräche in eine fremde Cloud hochzuladen.",
        href: "/use-cases/consulting",
        linkLabel: "Zu Consulting",
      },
      {
        title: "Rechtsanwälte",
        body: "Mandantengespräche und interne Fallbesprechungen bleiben auf dem Gerät, sodass die anwaltliche Schweigepflicht nicht an einem fremden Server hängt.",
        href: "/use-cases/legal",
        linkLabel: "Zu Rechtsanwälte",
      },
      {
        title: "Finanzen",
        body: "Gespräche mit Investoren und Deal-Besprechungen mit präzisen Formulierungen und Zahlen, die sich später per Suche wiederfinden lassen.",
        href: "/use-cases/finance",
        linkLabel: "Zu Finanzen",
      },
      {
        title: "Gesundheitswesen",
        body: "Konsultationen und Fallbesprechungen, ohne Patientendaten an Dritte weiterzugeben.",
        href: "/use-cases/healthcare",
        linkLabel: "Zu Gesundheitswesen",
      },
    ],
  },

  faq: {
    heading: "Häufige Fragen",
    items: [
      {
        question: "Braucht es Internet, um ein Meeting auf Deutsch zu transkribieren?",
        answer:
          "Nein. Das Erkennungsmodell wird einmal heruntergeladen, danach läuft es offline auf deinem Mac. Internet ist nur für Modell-Downloads und Updates nötig — oder wenn du selbst einen Cloud-Anbieter für die Zusammenfassung verbunden hast.",
      },
      {
        question: "Was passiert, wenn im Meeting Deutsch und Englisch gemischt werden?",
        answer:
          "Jeder Abschnitt wird in seiner eigenen Sprache erkannt, es wird nicht in eine gemeinsame Sprache übersetzt. Die Zusammenfassung entsteht in der Sprache des Dokuments, die sich aus dem Beginn des Meetings ergibt. Soll es anders sein, lässt sich die Sprache der Aufnahme vor der Verarbeitung manuell setzen.",
      },
      {
        question: "Gehen Aufnahmen und Transkripte in die Cloud?",
        answer:
          "Standardmäßig nein: Audio, Transkript, Zusammenfassung und Suchindex liegen ausschließlich auf deinem Mac. Etwas verlässt das Gerät nur, wenn du selbst ein Cloud-Modell mit eigenem Schlüssel einrichtest, oder wenn du iCloud-Synchronisierung einschaltest — dabei werden Inhalte verschlüsselt zwischen deinen Geräten synchronisiert, einige Metadaten wie Dauer und Sprache aber unverschlüsselt.",
      },
      {
        question: "Welche Sprachen kann Summit außer Deutsch?",
        answer:
          "Die Standard-Engine beherrscht 25 europäische Sprachen, darunter Deutsch, Französisch, Spanisch, Polnisch, Ukrainisch und Russisch. Für weitere Sprachen ist Whisper integriert — insgesamt kommt Summit so auf rund 99 Sprachen, wobei Whisper langsamer arbeitet.",
      },
      {
        question: "Muss ein Bot dem Call beitreten?",
        answer:
          "Nein. Summit zeichnet Systemton und Mikrofon auf deiner Seite auf, es erscheint also kein zusätzlicher Teilnehmer in der Liste. Auf dieselbe Weise werden auch persönliche Gespräche ohne jeden Videocall aufgenommen.",
      },
    ],
  },

  otherLanguages: {
    heading: "Weitere Sprachen",
    intro: "Dieselbe Engine erkennt 24 weitere Sprachen.",
  },

  finalCta: {
    heading: "Beim nächsten Meeting ausprobieren",
    body: "Die ersten 15 Aufnahmen sind kostenlos, ohne Konto. Genug, um die Engine an eigener Sprache, eigenen Fachbegriffen und eigenen Meetings zu testen.",
    ctaLabel: "Im Mac App Store laden",
    secondaryLabel: "Wie der Datenschutz funktioniert",
    secondaryHref: "/security",
  },
};
