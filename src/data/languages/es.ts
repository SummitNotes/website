import type { LanguagePage } from "../../lib/languages";

export const es: LanguagePage = {
  code: "es",
  locale: "es",
  nativeName: "Español",
  englishName: "Spanish",
  storeLocale: "es",

  meta: {
    title: "Transcripción de reuniones en español — en local en tu Mac | Summit AI Notes",
    description:
      "Summit reconoce el español directamente en tu Mac: sin bots en la llamada y sin subir grabaciones a la nube. Transcripción, resumen con tareas y búsqueda en todas tus reuniones.",
  },

  hero: {
    h1: "Notas de reunión en español — en tu Mac, sin nube",
    subtitle:
      "Summit graba la llamada, transcribe el español y genera un resumen con las tareas pendientes. La grabación, la transcripción y las notas se quedan en el dispositivo.",
    ctaLabel: "Descargar en el Mac App Store",
    ctaNote: "15 grabaciones gratis, sin registro",
  },

  engine: {
    heading: "El español lo entiende el motor por defecto",
    paragraphs: [
      "El reconocimiento de voz lo hace Parakeet TDT v3, un modelo que cubre 25 idiomas europeos, entre ellos el español. Viene activado por defecto, así que no hay que configurar nada para reuniones en español.",
      "El idioma de la grabación se detecta automáticamente. Si la detección falla — por ejemplo, porque la reunión empieza con un saludo en inglés —, se puede fijar el idioma a mano para esa grabación en concreto.",
    ],
    features: [
      {
        title: "Funciona sin conexión",
        body: "El modelo está guardado en el disco y se ejecuta en el procesador de tu Mac. En el tren, en el avión o en una sala con wifi de invitados, el resultado es el mismo.",
      },
      {
        title: "Puntuación y marcas de tiempo",
        body: "El modelo pone solo los signos de puntuación y las mayúsculas, y añade marcas de tiempo por palabra: al hacer clic en una línea del transcript se reproduce exactamente ese momento de la grabación.",
      },
      {
        title: "Separación por interlocutor",
        body: "La diarización también se ejecuta en local: las intervenciones quedan repartidas por interlocutor, y los nombres se asignan una vez y se recuerdan después.",
      },
      {
        title: "Búsqueda en todas las reuniones",
        body: "Búsqueda de texto completo y vectorial en transcripciones y resúmenes. Los embeddings son multilingües, así que una búsqueda en español también encuentra lo que se habló en inglés.",
      },
    ],
  },

  mixed: {
    heading: "Cuando una llamada mezcla idiomas",
    paragraphs: [
      "Un caso habitual: la reunión empieza entre tres personas en español, a los diez minutos se suman compañeros internacionales y la conversación sigue en inglés. Aquí no pasa nada raro: cada fragmento se reconoce en el idioma en que se dijo, sin traducir nada. Las partes en español del transcript siguen en español, las que son en inglés siguen en inglés.",
      "El idioma del documento en sí se fija según el comienzo de la reunión. Summit escribe el resumen, las tareas y el título en ese idioma: si la llamada empieza en español, el resultado será en español, aunque la segunda mitad haya sido en inglés.",
      "Si hace falta otro resultado — por ejemplo, porque el resumen va a compañeros de habla inglesa —, el idioma de la grabación se puede fijar a mano antes de procesarla.",
    ],
    features: [
      {
        title: "Transcripción",
        body: "Cada intervención en su propio idioma. No se traduce nada a un idioma común: lees exactamente lo que se dijo.",
      },
      {
        title: "Resumen",
        body: "Se escribe en el idioma del documento, que se determina por los primeros minutos de la reunión.",
      },
      {
        title: "Si la detección falla",
        body: "El idioma de la grabación se fija a mano y luego se puede regenerar el resumen.",
      },
    ],
  },

  privacy: {
    heading: "Las grabaciones no salen de tu dispositivo",
    paragraphs: [
      "Ningún bot entra en la llamada. Summit captura el sonido del sistema y el micrófono con las herramientas de macOS, así que no aparece ningún participante adicional, ya sea en Zoom, Teams, Meet o en una reunión presencial.",
      "El audio, la transcripción, el resumen y el índice de búsqueda están en tu Mac. Por defecto no sale nada de ahí: ni archivos, ni texto, ni metadatos de la reunión.",
      "Un modelo en la nube solo entra en juego si tú mismo introduces la clave de tu proveedor en los ajustes. Hasta entonces, todo el procesamiento es local, algo relevante para el RGPD porque no se transmite ningún dato personal.",
    ],
    linkLabel: "Detalle de la arquitectura y todo el tráfico saliente (en inglés)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Quién usa Summit con más frecuencia",
    intro:
      "Los escenarios para los que se suele contratar Summit. Las páginas enlazadas están de momento en inglés.",
    items: [
      {
        title: "Consultoría",
        body: "Notas de reuniones con clientes que alimentan directamente un informe, sin subir conversaciones protegidas por un NDA a una nube ajena.",
        href: "/use-cases/consulting",
        linkLabel: "Ver Consultoría",
      },
      {
        title: "Abogados",
        body: "Las conversaciones con clientes y las discusiones internas sobre un caso se quedan en el dispositivo, así que el secreto profesional no depende de un servidor ajeno.",
        href: "/use-cases/legal",
        linkLabel: "Ver Abogados",
      },
      {
        title: "Finanzas",
        body: "Reuniones con inversores y negociaciones con formulaciones y cifras exactas que luego se encuentran con la búsqueda.",
        href: "/use-cases/finance",
        linkLabel: "Ver Finanzas",
      },
      {
        title: "Sanidad",
        body: "Consultas y revisiones de casos sin pasar los datos del paciente a terceros.",
        href: "/use-cases/healthcare",
        linkLabel: "Ver Sanidad",
      },
    ],
  },

  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Hace falta internet para transcribir una reunión en español?",
        answer:
          "No. El modelo de reconocimiento se descarga una vez y luego funciona sin conexión en tu Mac. Solo hace falta internet para descargar modelos y actualizaciones, o si tú mismo has conectado un proveedor en la nube para el resumen.",
      },
      {
        question: "¿Qué pasa si en la reunión se mezcla español e inglés?",
        answer:
          "Cada fragmento se reconoce en su propio idioma, sin traducir nada a un idioma común. El resumen se escribe en el idioma del documento, que se determina por el comienzo de la reunión. Si hace falta otro resultado, el idioma de la grabación se puede fijar a mano antes de procesarla.",
      },
      {
        question: "¿Las grabaciones y transcripciones se suben a la nube?",
        answer:
          "No. Por defecto, el audio, la transcripción, el resumen y el índice de búsqueda solo están en tu Mac. No sale nada hasta que tú mismo conectes un modelo en la nube con tu propia clave.",
      },
      {
        question: "¿Qué idiomas entiende Summit además del español?",
        answer:
          "El motor por defecto cubre 25 idiomas europeos, incluidos español, alemán, francés, polaco, ucraniano y ruso. Para el resto de idiomas hay integrado Whisper, unos cien idiomas más, aunque más lento.",
      },
      {
        question: "¿Hay que meter un bot en la llamada?",
        answer:
          "No. Summit graba el sonido del sistema y el micrófono desde tu lado, así que no aparece ningún participante adicional en la lista. Las reuniones presenciales se graban igual, sin ninguna llamada de por medio.",
      },
    ],
  },

  otherLanguages: {
    heading: "Otros idiomas",
    intro: "El mismo motor reconoce otros 24 idiomas.",
  },

  finalCta: {
    heading: "Pruébalo en tu próxima reunión",
    body: "Las primeras 15 grabaciones son gratis, sin crear cuenta. Suficiente para probar el motor con tu voz, tu vocabulario y tus reuniones.",
    ctaLabel: "Descargar en el Mac App Store",
    secondaryLabel: "Cómo funciona la privacidad",
    secondaryHref: "/security",
  },
};
