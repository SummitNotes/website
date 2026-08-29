import type { LanguagePage } from "../../lib/languages";

export const fr: LanguagePage = {
  code: "fr",
  locale: "fr",
  nativeName: "Français",
  englishName: "French",
  storeLocale: "fr",

  meta: {
    title: "Transcription de réunions en français — en local sur votre Mac | Summit AI Notes",
    description:
      "Summit reconnaît le français directement sur votre Mac : aucun bot dans l'appel, aucun enregistrement envoyé dans le cloud. Transcription, résumé avec tâches et recherche dans toutes vos réunions.",
  },

  hero: {
    h1: "Comptes rendus de réunion en français — sur votre Mac, sans cloud",
    subtitle:
      "Summit enregistre l'appel, transcrit les échanges en français et prépare un résumé avec les tâches à suivre. Enregistrement, transcription et notes restent sur votre Mac.",
    ctaLabel: "Télécharger sur le Mac App Store",
    ctaNote: "15 enregistrements gratuits, sans inscription",
  },

  engine: {
    heading: "La transcription en français, sans configuration supplémentaire",
    paragraphs: [
      "Summit utilise en local le modèle de reconnaissance vocale Parakeet TDT v3. Il prend en charge 25 langues européennes, dont le français, et est déjà sélectionné par défaut. Vous n'avez rien d'autre à installer ni à régler.",
      "La langue de l'enregistrement est détectée automatiquement. Si la détection se trompe — par exemple si la réunion commence par une salutation en anglais —, il suffit de fixer la langue manuellement pour cet enregistrement.",
    ],
    features: [
      {
        title: "Fonctionne sans connexion",
        body: "Le modèle s'exécute directement sur votre Mac. Vous pouvez transcrire une réunion dans le train, en avion ou avec un Wi-Fi instable : la qualité ne dépend pas de la connexion internet.",
      },
      {
        title: "Ponctuation et horodatage",
        body: "Le modèle ajoute la ponctuation, les majuscules et un horodatage au mot près. Cliquez sur une réplique dans la transcription pour écouter directement ce passage de l'enregistrement.",
      },
      {
        title: "Distinction des intervenants",
        body: "La distinction des intervenants se fait elle aussi en local. Attribuez les noms une première fois : Summit les reconnaîtra lors des réunions suivantes.",
      },
      {
        title: "Recherche dans toutes les réunions",
        body: "Recherche plein texte et recherche sémantique dans les transcriptions et les résumés. La recherche sémantique fonctionne entre les langues : une requête en français retrouve aussi ce qui a été dit en anglais.",
      },
    ],
  },

  mixed: {
    heading: "Quand un appel mélange les langues",
    paragraphs: [
      "Un cas fréquent : trois personnes commencent la réunion en français, puis des collègues internationaux les rejoignent et la discussion passe à l'anglais. Summit reconnaît chaque passage dans la langue parlée, sans le traduire. Les interventions en français restent en français, celles en anglais en anglais.",
      "La langue du document, elle, se fixe sur le début de la réunion. Summit rédige le résumé, les tâches et le titre dans cette langue : si l'appel démarre en français, le résultat est en français, même si la seconde moitié s'est déroulée en anglais.",
      "Pour un autre réglage — par exemple si le résumé part vers des collègues anglophones —, la langue de l'enregistrement se fixe manuellement avant le traitement.",
    ],
    features: [
      {
        title: "Transcription",
        body: "Chaque réplique dans sa propre langue. Il n'y a pas de traduction vers une langue commune — vous lisez exactement ce qui a été dit.",
      },
      {
        title: "Résumé",
        body: "Rédigé dans la langue du document, elle-même déterminée par les premières minutes de la réunion.",
      },
      {
        title: "En cas d'erreur de détection",
        body: "La langue de l'enregistrement se règle manuellement, puis le résumé peut être régénéré.",
      },
    ],
  },

  privacy: {
    heading: "Les enregistrements ne quittent pas votre appareil",
    paragraphs: [
      "Aucun bot ne rejoint l'appel. Summit enregistre le son système et le micro via macOS, sans faire apparaître de participant supplémentaire — que ce soit sur Zoom, Teams, Meet ou lors d'un échange en présentiel.",
      "Audio, transcription, résumé et index de recherche restent sur votre Mac. Par défaut, rien n'en sort : ni fichiers, ni texte, ni métadonnées de réunion.",
      "Un modèle cloud n'intervient que si vous renseignez vous-même une clé de votre fournisseur dans les réglages. Tant que ce n'est pas fait, tout le traitement reste local — un point pertinent pour le RGPD, puisqu'aucune donnée personnelle n'est alors transmise.",
      "La synchronisation iCloud est une fonctionnalité à part, désactivée par défaut. Si vous l'activez, les transcriptions et les résumés se synchronisent chiffrés de bout en bout entre vos propres appareils ; certaines métadonnées qui les accompagnent — durée, nombre de mots, langue détectée — se synchronisent, elles, en clair.",
    ],
    linkLabel: "Détail de l'architecture et de tout le trafic sortant (en anglais)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "À qui Summit est particulièrement utile",
    intro:
      "Quelques situations dans lesquelles Summit est particulièrement utile. Les pages détaillées sont pour l'instant disponibles uniquement en anglais.",
    items: [
      {
        title: "Conseil",
        body: "Les notes de réunions clients servent directement à préparer vos rapports, sans envoyer de conversations confidentielles vers un cloud tiers.",
        href: "/use-cases/consulting",
        linkLabel: "Voir Conseil",
      },
      {
        title: "Avocats",
        body: "Les échanges avec les clients et les discussions internes sur un dossier restent sur l'appareil et ne sont pas envoyés à des serveurs tiers.",
        href: "/use-cases/legal",
        linkLabel: "Voir Avocats",
      },
      {
        title: "Finance",
        body: "Les formulations et chiffres précis des réunions avec les investisseurs et des négociations se retrouvent facilement grâce à la recherche.",
        href: "/use-cases/finance",
        linkLabel: "Voir Finance",
      },
      {
        title: "Santé",
        body: "Consultations et revues de dossiers sans transmettre les données du patient à un tiers.",
        href: "/use-cases/healthcare",
        linkLabel: "Voir Santé",
      },
    ],
  },

  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        question: "Faut-il une connexion internet pour transcrire une réunion en français ?",
        answer:
          "Non. Le modèle de reconnaissance se télécharge une fois, puis il tourne hors ligne sur votre Mac. Internet n'est nécessaire que pour télécharger les modèles et les mises à jour, ou si vous avez vous-même connecté un fournisseur cloud pour le résumé.",
      },
      {
        question: "Que se passe-t-il si la réunion mélange français et anglais ?",
        answer:
          "Chaque segment est reconnu dans sa propre langue, sans traduction vers une langue commune. Le résumé est rédigé dans la langue du document, déterminée par le début de la réunion. Pour un autre réglage, la langue de l'enregistrement se fixe manuellement avant le traitement.",
      },
      {
        question: "Les enregistrements et transcriptions partent-ils dans le cloud ?",
        answer:
          "Par défaut, non : l'audio, la transcription, le résumé et l'index de recherche restent uniquement sur votre Mac. Quelque chose n'en sort que dans deux cas, tous deux à votre initiative : si vous connectez un modèle cloud avec votre propre clé, ou si vous activez la synchronisation iCloud — le contenu se synchronise alors chiffré entre vos appareils, mais certaines métadonnées (durée, langue) se synchronisent en clair.",
      },
      {
        question: "Quelles langues Summit gère-t-il en plus du français ?",
        answer:
          "Le modèle par défaut prend en charge 25 langues européennes, dont le français, l'allemand, l'espagnol, le polonais, l'ukrainien et le russe. Pour les autres langues, Summit intègre Whisper. Au total, près d'une centaine de langues sont prises en charge, avec un traitement plus lent sous Whisper.",
      },
      {
        question: "Faut-il inviter un bot dans l'appel ?",
        answer:
          "Non. Summit capture le son système et le micro de votre côté, aucun participant supplémentaire n'apparaît donc dans la liste. Les réunions en présentiel s'enregistrent de la même manière, sans aucun appel.",
      },
    ],
  },

  otherLanguages: {
    heading: "Autres langues",
    intro: "Le même modèle reconnaît 24 langues supplémentaires.",
  },

  finalCta: {
    heading: "À tester lors de votre prochaine réunion",
    body: "Les 15 premiers enregistrements sont gratuits, sans compte à créer. De quoi tester Summit avec votre voix, votre vocabulaire métier et de vraies réunions.",
    ctaLabel: "Télécharger sur le Mac App Store",
    secondaryLabel: "Comment fonctionne la confidentialité",
    secondaryHref: "/security",
  },
};
