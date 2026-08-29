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
      "Summit enregistre l'appel, transcrit le français et produit un résumé avec les tâches à faire. Enregistrement, transcription et notes restent sur l'appareil.",
    ctaLabel: "Télécharger sur le Mac App Store",
    ctaNote: "15 enregistrements gratuits, sans inscription",
  },

  engine: {
    heading: "Le français est géré par le moteur par défaut",
    paragraphs: [
      "La reconnaissance vocale repose sur Parakeet TDT v3, un modèle qui couvre 25 langues européennes, dont le français. Il est actif par défaut : rien à configurer pour des réunions en français.",
      "La langue de l'enregistrement est détectée automatiquement. Si la détection se trompe — par exemple si la réunion commence par une salutation en anglais —, il suffit de fixer la langue manuellement pour cet enregistrement.",
    ],
    features: [
      {
        title: "Fonctionne sans connexion",
        body: "Le modèle est stocké sur le disque et calcule sur le processeur de votre Mac. Dans le train, en avion ou en salle de réunion sur un Wi-Fi invité, le résultat ne change pas.",
      },
      {
        title: "Ponctuation et horodatage",
        body: "Le modèle place seul la ponctuation et les majuscules, et fournit un horodatage au mot près : cliquer sur une réplique du transcript joue exactement ce passage de l'enregistrement.",
      },
      {
        title: "Distinction des intervenants",
        body: "La diarisation tourne aussi en local : les répliques sont réparties par intervenant, les noms se renseignent une fois et sont ensuite reconnus.",
      },
      {
        title: "Recherche dans toutes les réunions",
        body: "Recherche plein texte et vectorielle dans les transcriptions et les résumés. Les embeddings sont multilingues, une requête en français retrouve donc aussi ce qui a été dit en anglais.",
      },
    ],
  },

  mixed: {
    heading: "Quand un appel mélange les langues",
    paragraphs: [
      "Un cas fréquent : la réunion démarre à trois en français, puis des collègues internationaux rejoignent l'appel et la suite se déroule en anglais. Rien ne casse : chaque segment est reconnu dans la langue où il a été prononcé, sans traduction. Les répliques en français restent en français dans le transcript, celles en anglais restent en anglais.",
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
      "Aucun bot n'entre dans l'appel. Summit capture le son système et le micro via macOS, sans faire apparaître de participant supplémentaire — que ce soit sur Zoom, Teams, Meet ou lors d'un échange en présentiel.",
      "Audio, transcription, résumé et index de recherche restent sur votre Mac. Par défaut, rien n'en sort : ni fichiers, ni texte, ni métadonnées de réunion.",
      "Un modèle cloud n'intervient que si vous renseignez vous-même une clé de votre fournisseur dans les réglages. Tant que ce n'est pas fait, tout le traitement reste local — un point pertinent pour le RGPD, puisqu'aucune donnée personnelle n'est alors transmise.",
    ],
    linkLabel: "Détail de l'architecture et de tout le trafic sortant (en anglais)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Qui utilise Summit le plus souvent",
    intro:
      "Les usages pour lesquels Summit est généralement adopté. Les pages liées sont pour l'instant en anglais.",
    items: [
      {
        title: "Conseil",
        body: "Des notes de réunions clients qui alimentent directement un rapport, sans faire transiter des échanges couverts par un NDA vers un cloud tiers.",
        href: "/use-cases/consulting",
        linkLabel: "Voir Conseil",
      },
      {
        title: "Avocats",
        body: "Entretiens avec les clients et discussions internes sur un dossier restent sur l'appareil, sans faire reposer le secret professionnel sur un serveur tiers.",
        href: "/use-cases/legal",
        linkLabel: "Voir Avocats",
      },
      {
        title: "Finance",
        body: "Réunions avec des investisseurs et discussions de deals avec des formulations et des chiffres précis, retrouvables ensuite par la recherche.",
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
          "Non. Par défaut, l'audio, la transcription, le résumé et l'index de recherche restent uniquement sur votre Mac. Rien n'en sort tant que vous n'avez pas vous-même connecté un modèle cloud avec votre propre clé.",
      },
      {
        question: "Quelles langues Summit gère-t-il en plus du français ?",
        answer:
          "Le moteur par défaut couvre 25 langues européennes, dont le français, l'allemand, l'espagnol, le polonais, l'ukrainien et le russe. Pour les autres langues, Whisper est intégré — une centaine de langues supplémentaires, mais plus lent.",
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
    intro: "Le même moteur reconnaît 24 langues supplémentaires.",
  },

  finalCta: {
    heading: "À tester lors de votre prochaine réunion",
    body: "Les 15 premiers enregistrements sont gratuits, sans créer de compte. De quoi tester le moteur sur votre voix, votre vocabulaire et vos réunions.",
    ctaLabel: "Télécharger sur le Mac App Store",
    secondaryLabel: "Comment fonctionne la confidentialité",
    secondaryHref: "/security",
  },
};
