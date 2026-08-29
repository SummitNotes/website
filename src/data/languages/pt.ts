import type { LanguagePage } from "../../lib/languages";

export const pt: LanguagePage = {
  code: "pt",
  locale: "pt",
  nativeName: "Português",
  englishName: "Portuguese",
  storeLocale: "pt",

  meta: {
    title: "Transcrição de reuniões em português — localmente no seu Mac | Summit AI Notes",
    description:
      "O Summit reconhece português diretamente no seu Mac: sem bots na chamada, sem gravações enviadas para a nuvem. Transcrição, resumo com tarefas e pesquisa em todas as reuniões.",
  },

  hero: {
    h1: "Notas de reunião em português — no seu Mac, sem nuvem",
    subtitle:
      "O Summit grava a chamada, transcreve o português e produz um resumo com as tarefas a fazer. Gravação, transcrição e notas ficam no dispositivo.",
    ctaLabel: "Descarregar na Mac App Store",
    ctaNote: "15 gravações grátis, sem registo",
  },

  engine: {
    heading: "O português é entendido pelo motor predefinido",
    paragraphs: [
      "O reconhecimento de voz é feito pelo Parakeet TDT v3, um modelo que cobre 25 línguas europeias, incluindo o português. Está ativo por predefinição, por isso não há nada a configurar para reuniões em português.",
      "A língua da gravação é detetada automaticamente. Se a deteção falhar — por exemplo, porque a reunião começa com uma saudação em inglês — a língua pode ser definida manualmente para essa gravação em concreto.",
    ],
    features: [
      {
        title: "Funciona sem internet",
        body: "O modelo fica guardado no disco e é processado no processador do seu Mac. No comboio, no avião ou numa sala com Wi-Fi de convidados, o resultado é o mesmo.",
      },
      {
        title: "Pontuação e marcas temporais",
        body: "O modelo coloca sozinho a pontuação e as maiúsculas, além de marcas temporais por palavra: clicar numa linha do transcript reproduz exatamente esse ponto da gravação.",
      },
      {
        title: "Reconhecimento de oradores",
        body: "A diarização também corre localmente: as intervenções ficam divididas por orador, os nomes atribuem-se uma vez e são depois reconhecidos.",
      },
      {
        title: "Pesquisa em todas as reuniões",
        body: "Pesquisa de texto integral e vetorial em transcrições e resumos. Os embeddings são multilingues, pelo que uma pesquisa em português também encontra o que foi discutido em inglês.",
      },
    ],
  },

  mixed: {
    heading: "Quando uma chamada mistura línguas",
    paragraphs: [
      "Um caso comum: a reunião começa entre três pessoas em português, ao fim de dez minutos juntam-se colegas internacionais e a conversa continua em inglês. Nada se parte aqui: cada segmento é reconhecido na língua em que foi dito, sem qualquer tradução. As partes em português mantêm-se em português no transcript, as em inglês mantêm-se em inglês.",
      "A língua do documento em si é definida pelo início da reunião. O Summit escreve o resumo, as tarefas e o título nessa língua: se a chamada começar em português, o resultado será em português, mesmo que a segunda metade tenha decorrido em inglês.",
      "Para um resultado diferente — por exemplo, se o resumo se destina a colegas anglófonos — a língua da gravação pode ser definida manualmente antes do processamento.",
    ],
    features: [
      {
        title: "Transcrição",
        body: "Cada intervenção na sua própria língua. Não há tradução para uma língua comum — lê exatamente o que foi dito.",
      },
      {
        title: "Resumo",
        body: "Escrito na língua do documento, determinada pelos primeiros minutos da reunião.",
      },
      {
        title: "Se a deteção falhar",
        body: "A língua da gravação define-se manualmente, e depois o resumo pode ser gerado novamente.",
      },
    ],
  },

  privacy: {
    heading: "As gravações não saem do dispositivo",
    paragraphs: [
      "Nenhum bot entra na chamada. O Summit capta o som do sistema e o microfone através do macOS, sem que apareça nenhum participante adicional — seja no Zoom, Teams, Meet ou numa reunião presencial.",
      "Áudio, transcrição, resumo e índice de pesquisa ficam no seu Mac. Por predefinição, nada sai daqui: nem ficheiros, nem texto, nem metadados da reunião.",
      "Um modelo na nuvem só entra em ação se introduzir a chave do seu fornecedor nas definições. Até lá, todo o processamento é local — relevante para o RGPD, porque assim não é transmitido nenhum dado pessoal.",
    ],
    linkLabel: "Detalhe da arquitetura e de todo o tráfego de saída (em inglês)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Quem usa o Summit com mais frequência",
    intro:
      "Os cenários para os quais o Summit costuma ser adotado. As páginas ligadas estão por agora em inglês.",
    items: [
      {
        title: "Consultoria",
        body: "Notas de reuniões com clientes que alimentam diretamente um relatório, sem enviar conversas protegidas por NDA para uma nuvem externa.",
        href: "/use-cases/consulting",
        linkLabel: "Ver Consultoria",
      },
      {
        title: "Advogados",
        body: "Conversas com clientes e discussões internas sobre um processo ficam no dispositivo, sem depender de um servidor externo para o sigilo profissional.",
        href: "/use-cases/legal",
        linkLabel: "Ver Advogados",
      },
      {
        title: "Finanças",
        body: "Reuniões com investidores e negociações com formulações e números exatos, mais tarde encontráveis pela pesquisa.",
        href: "/use-cases/finance",
        linkLabel: "Ver Finanças",
      },
      {
        title: "Saúde",
        body: "Consultas e revisões de casos sem passar dados do doente a terceiros.",
        href: "/use-cases/healthcare",
        linkLabel: "Ver Saúde",
      },
    ],
  },

  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        question: "É preciso internet para transcrever uma reunião em português?",
        answer:
          "Não. O modelo de reconhecimento é descarregado uma vez e depois funciona offline no seu Mac. É preciso internet apenas para descarregar modelos e atualizações, ou se ligar você mesmo um fornecedor na nuvem para o resumo.",
      },
      {
        question: "O que acontece se a reunião misturar português e inglês?",
        answer:
          "Cada segmento é reconhecido na sua própria língua, sem tradução para uma língua comum. O resumo é escrito na língua do documento, determinada pelo início da reunião. Para um resultado diferente, a língua da gravação pode ser definida manualmente antes do processamento.",
      },
      {
        question: "As gravações e transcrições vão para a nuvem?",
        answer:
          "Não. Por predefinição, o áudio, a transcrição, o resumo e o índice de pesquisa ficam apenas no seu Mac. Só sai algo depois de você ligar um modelo na nuvem com a sua própria chave.",
      },
      {
        question: "Que línguas o Summit entende além do português?",
        answer:
          "O motor predefinido cobre 25 línguas europeias, incluindo português, alemão, francês, polaco, ucraniano e russo. Para outras línguas está integrado o Whisper — mais uma centena de línguas, embora mais lento.",
      },
      {
        question: "É preciso convidar um bot para a chamada?",
        answer:
          "Não. O Summit capta o som do sistema e o microfone do seu lado, por isso não aparece nenhum participante adicional na lista. Reuniões presenciais gravam-se da mesma forma, sem qualquer chamada.",
      },
    ],
  },

  otherLanguages: {
    heading: "Outras línguas",
    intro: "O mesmo motor reconhece mais 24 línguas.",
  },

  finalCta: {
    heading: "Experimente na sua próxima reunião",
    body: "As primeiras 15 gravações são grátis, sem criar conta. Suficiente para testar o motor com a sua voz, os seus termos e as suas reuniões.",
    ctaLabel: "Descarregar na Mac App Store",
    secondaryLabel: "Como funciona a privacidade",
    secondaryHref: "/security",
  },
};
