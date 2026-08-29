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
    heading: "Transcripción en español sin configurar nada",
    paragraphs: [
      "Summit utiliza el modelo local de reconocimiento de voz Parakeet TDT v3. Es compatible con 25 idiomas europeos, incluido el español, y ya viene seleccionado por defecto. No tienes que instalar ni cambiar nada.",
      "El idioma de la grabación se detecta automáticamente. Si la detección falla — por ejemplo, porque la reunión empieza con un saludo en inglés —, se puede fijar el idioma a mano para esa grabación en concreto.",
    ],
    features: [
      {
        title: "Funciona sin conexión",
        body: "El modelo se ejecuta directamente en tu Mac. Puedes transcribir reuniones en el tren, en el avión o con una wifi inestable: la calidad no depende de la conexión a internet.",
      },
      {
        title: "Puntuación y marcas de tiempo",
        body: "El modelo añade la puntuación, las mayúsculas y una marca de tiempo para cada palabra. Haz clic en una intervención de la transcripción para escuchar ese momento exacto de la grabación.",
      },
      {
        title: "Separación por interlocutor",
        body: "Summit también distingue a los interlocutores en local y reparte las intervenciones entre ellos. Solo tienes que asignar los nombres una vez para que los recuerde en próximas reuniones.",
      },
      {
        title: "Búsqueda en todas las reuniones",
        body: "Búsqueda de texto completo y semántica en transcripciones y resúmenes. La búsqueda semántica funciona entre idiomas, así que una consulta en español también encuentra lo que se habló en inglés.",
      },
    ],
  },

  mixed: {
    heading: "Cuando una llamada mezcla idiomas",
    paragraphs: [
      "Un caso habitual: tres personas empiezan la reunión en español, más tarde se suman compañeros internacionales y la conversación continúa en inglés. Summit reconoce cada fragmento en el idioma en que se dijo, sin traducirlo. Las intervenciones en español siguen en español y las de inglés, en inglés.",
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
      "No hace falta invitar a ningún bot. Summit graba el audio del sistema y el micrófono a través de macOS, así que no aparece ningún participante adicional, ya sea en Zoom, Teams, Meet o en una reunión presencial.",
      "El audio, la transcripción, el resumen y el índice de búsqueda están en tu Mac. Por defecto no sale nada de ahí: ni archivos, ni texto, ni metadatos de la reunión.",
      "Un modelo en la nube solo entra en juego si tú mismo introduces la clave de tu proveedor en los ajustes. Hasta entonces, todo el procesamiento es local, algo relevante para el RGPD porque no se transmite ningún dato personal.",
      "La sincronización con iCloud es una función aparte, desactivada por defecto. Si la activas, las transcripciones y los resúmenes se sincronizan cifrados de extremo a extremo entre tus propios dispositivos; parte de los metadatos que los acompañan —duración, número de palabras, idioma detectado— se sincronizan sin cifrar.",
    ],
    linkLabel: "Detalle de la arquitectura y todo el tráfico saliente (en inglés)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Para quién resulta especialmente útil Summit",
    intro:
      "Algunas situaciones en las que Summit resulta especialmente útil. Las páginas con más información solo están disponibles en inglés por ahora.",
    items: [
      {
        title: "Consultoría",
        body: "Las notas de las reuniones con clientes se convierten directamente en un informe, sin subir conversaciones confidenciales a una nube externa.",
        href: "/use-cases/consulting",
        linkLabel: "Para consultoría",
      },
      {
        title: "Abogados",
        body: "Las conversaciones con clientes y las discusiones internas sobre un caso se quedan en el dispositivo y no se envían a servidores externos.",
        href: "/use-cases/legal",
        linkLabel: "Para despachos",
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
          "Por defecto, no: el audio, la transcripción, el resumen y el índice de búsqueda solo están en tu Mac. Algo sale únicamente en dos casos, los dos por decisión tuya: si conectas un modelo en la nube con tu propia clave, o si activas la sincronización con iCloud —entonces el contenido se sincroniza cifrado entre tus dispositivos, aunque algunos metadatos (duración, idioma) se sincronizan sin cifrar.",
      },
      {
        question: "¿Qué idiomas entiende Summit además del español?",
        answer:
          "El modelo predeterminado es compatible con 25 idiomas europeos, entre ellos español, alemán, francés, polaco, ucraniano y ruso. Para otros idiomas, Summit incluye Whisper. En total admite cerca de cien idiomas, aunque Whisper funciona más despacio.",
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
    intro: "El mismo modelo reconoce otros 24 idiomas.",
  },

  finalCta: {
    heading: "Pruébalo en tu próxima reunión",
    body: "Las primeras 15 grabaciones son gratis y no requieren una cuenta. Son suficientes para probar Summit con tu forma de hablar, tu vocabulario profesional y reuniones reales.",
    ctaLabel: "Descargar en el Mac App Store",
    secondaryLabel: "Cómo funciona la privacidad",
    secondaryHref: "/security",
  },
};
