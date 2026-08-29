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
      "Summit zeichnet den Call auf, transkribiert das Gesprochene und erstellt eine Zusammenfassung mit Aufgaben. Aufnahme, Transkript und Notizen bleiben auf deinem Mac.",
    ctaLabel: "Im Mac App Store laden",
    ctaNote: "15 Aufnahmen gratis, keine Anmeldung nötig",
  },

  engine: {
    heading: "Deutsch funktioniert ohne zusätzliche Einrichtung",
    paragraphs: [
      "Summit nutzt das lokale Spracherkennungsmodell Parakeet TDT v3. Es unterstützt 25 europäische Sprachen, darunter Deutsch, und ist bereits als Standard ausgewählt. Du musst nichts zusätzlich installieren oder umstellen.",
      "Die Sprache einer Aufnahme wird automatisch erkannt. Falls Summit danebenliegt — etwa weil das Meeting mit einer englischen Begrüßung beginnt —, kannst du Deutsch für diese Aufnahme manuell auswählen.",
    ],
    features: [
      {
        title: "Funktioniert ohne Internet",
        body: "Das Modell läuft direkt auf deinem Mac. Du kannst Meetings im Zug, im Flugzeug oder bei unzuverlässigem Gäste-WLAN transkribieren — die Qualität hängt nicht von der Internetverbindung ab.",
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
        body: "Volltext- und semantische Suche über Transkripte und Zusammenfassungen. Die semantische Suche funktioniert sprachübergreifend: Eine deutsche Anfrage findet auch Passagen, die auf Englisch besprochen wurden.",
      },
    ],
  },

  mixed: {
    heading: "Wenn im Call die Sprache wechselt",
    paragraphs: [
      "Ein typischer Fall: Drei Personen beginnen das Meeting auf Deutsch, später kommen internationale Kollegen dazu und das Gespräch wechselt ins Englische. Summit erkennt jeden Abschnitt in der gesprochenen Sprache, ohne ihn zu übersetzen. Deutsche Passagen bleiben deutsch, englische englisch.",
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
      "Kein Bot nimmt an deinem Call teil. Summit zeichnet Systemton und Mikrofon über macOS auf, deshalb erscheint kein zusätzlicher Teilnehmer — weder in Zoom, Teams oder Meet noch bei einem persönlichen Gespräch.",
      "Audio, Transkript, Zusammenfassung und Suchindex liegen auf deinem Mac. Standardmäßig verlässt nichts das Gerät — keine Dateien, kein Text, keine Metadaten zum Meeting.",
      "Ein Cloud-Modell wird nur aktiv, wenn du selbst einen Schlüssel deines Anbieters in den Einstellungen einträgst. Bis dahin läuft die gesamte Verarbeitung lokal — relevant für DSGVO-Anforderungen, weil dann schlicht keine personenbezogenen Daten übertragen werden.",
      "iCloud-Synchronisierung ist eine separate, standardmäßig deaktivierte Funktion. Schaltest du sie ein, werden Transkripte und Zusammenfassungen Ende-zu-Ende-verschlüsselt zwischen deinen eigenen Geräten synchronisiert; einige Metadaten dazu — Dauer, Wortzahl, erkannte Sprache — werden dabei unverschlüsselt synchronisiert.",
    ],
    linkLabel: "Architektur und gesamter Netzwerkverkehr im Detail (auf Englisch)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Für wen sich Summit besonders eignet",
    intro:
      "Einige Situationen, in denen Summit besonders hilfreich ist. Die ausführlichen Seiten sind derzeit nur auf Englisch verfügbar.",
    items: [
      {
        title: "Consulting",
        body: "Notizen aus Kundengesprächen werden direkt zur Grundlage für Berichte, ohne vertrauliche Gespräche in eine externe Cloud hochzuladen.",
        href: "/use-cases/consulting",
        linkLabel: "Zu Consulting",
      },
      {
        title: "Rechtsanwälte",
        body: "Mandantengespräche und interne Fallbesprechungen bleiben auf dem Gerät und werden nicht an externe Server übertragen.",
        href: "/use-cases/legal",
        linkLabel: "Mehr für Kanzleien",
      },
      {
        title: "Finanzen",
        body: "Gespräche mit Investoren und Deal-Besprechungen mit präzisen Formulierungen und Zahlen, die sich später per Suche wiederfinden lassen.",
        href: "/use-cases/finance",
        linkLabel: "Mehr für Finanzteams",
      },
      {
        title: "Gesundheitswesen",
        body: "Konsultationen und Fallbesprechungen, ohne Patientendaten an Dritte weiterzugeben.",
        href: "/use-cases/healthcare",
        linkLabel: "Mehr zum Gesundheitswesen",
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
          "Das Standardmodell unterstützt 25 europäische Sprachen, darunter Deutsch, Französisch, Spanisch, Polnisch, Ukrainisch und Russisch. Für weitere Sprachen ist Whisper integriert. Insgesamt unterstützt Summit damit rund hundert Sprachen, wobei Whisper langsamer arbeitet.",
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
    intro: "Dasselbe Modell erkennt 24 weitere Sprachen.",
  },

  finalCta: {
    heading: "Beim nächsten Meeting ausprobieren",
    body: "Die ersten 15 Aufnahmen sind kostenlos und ohne Konto nutzbar. Das reicht, um Summit mit deiner Stimme, deinen Fachbegriffen und echten Meetings zu testen.",
    ctaLabel: "Im Mac App Store laden",
    secondaryLabel: "Wie der Datenschutz funktioniert",
    secondaryHref: "/security",
  },
};
