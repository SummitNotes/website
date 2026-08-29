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
    heading: "Transcrição em português sem configuração adicional",
    paragraphs: [
      "O Summit utiliza localmente o modelo de reconhecimento de voz Parakeet TDT v3. Suporta 25 línguas europeias, incluindo o português, e já vem selecionado por predefinição. Não precisa de instalar nem de alterar nada.",
      "A língua da gravação é detetada automaticamente. Se a deteção falhar — por exemplo, porque a reunião começa com uma saudação em inglês — a língua pode ser definida manualmente para essa gravação em concreto.",
    ],
    features: [
      {
        title: "Funciona sem internet",
        body: "O modelo é executado diretamente no seu Mac. Pode transcrever reuniões no comboio, no avião ou com uma ligação Wi-Fi instável — a qualidade não depende da internet.",
      },
      {
        title: "Pontuação e marcas temporais",
        body: "O modelo adiciona a pontuação, as maiúsculas e uma marca temporal para cada palavra. Clique numa intervenção da transcrição para ouvir esse momento exato da gravação.",
      },
      {
        title: "Reconhecimento de oradores",
        body: "O Summit também distingue os oradores localmente e atribui-lhes as respetivas intervenções. Basta indicar os nomes uma vez para que sejam reconhecidos nas reuniões seguintes.",
      },
      {
        title: "Pesquisa em todas as reuniões",
        body: "Pesquisa de texto integral e pesquisa semântica em transcrições e resumos. A pesquisa semântica funciona entre línguas, pelo que uma consulta em português também encontra o que foi discutido em inglês.",
      },
    ],
  },

  mixed: {
    heading: "Quando uma chamada mistura línguas",
    paragraphs: [
      "Um caso comum: três pessoas começam a reunião em português, mais tarde juntam-se colegas internacionais e a conversa passa para inglês. O Summit reconhece cada segmento na língua em que foi dito, sem o traduzir. As intervenções em português mantêm-se em português e as intervenções em inglês, em inglês.",
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
      "Não é preciso convidar nenhum bot. O Summit grava o som do sistema e o microfone através do macOS, sem que apareça qualquer participante adicional — seja no Zoom, Teams, Meet ou numa reunião presencial.",
      "Áudio, transcrição, resumo e índice de pesquisa ficam no seu Mac. Por predefinição, nada sai daqui: nem ficheiros, nem texto, nem metadados da reunião.",
      "Um modelo na nuvem só entra em ação se introduzir a chave do seu fornecedor nas definições. Até lá, todo o processamento é local — relevante para o RGPD, porque assim não é transmitido nenhum dado pessoal.",
      "A sincronização iCloud é uma funcionalidade separada, desativada por predefinição. Se a ativar, as transcrições e os resumos sincronizam-se cifrados de ponta a ponta entre os seus próprios dispositivos; alguns metadados associados — duração, número de palavras, língua detetada — sincronizam-se sem cifra.",
    ],
    linkLabel: "Detalhe da arquitetura e de todo o tráfego de saída (em inglês)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Para quem o Summit é especialmente útil",
    intro:
      "Algumas situações em que o Summit é especialmente útil. As páginas detalhadas estão, por enquanto, disponíveis apenas em inglês.",
    items: [
      {
        title: "Consultoria",
        body: "As notas de reuniões com clientes tornam-se logo a base de um relatório, sem enviar conversas confidenciais para uma nuvem externa.",
        href: "/use-cases/consulting",
        linkLabel: "Ver Consultoria",
      },
      {
        title: "Advogados",
        body: "Conversas com clientes e discussões internas sobre um processo ficam no dispositivo e não são enviadas para servidores externos.",
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
          "Por predefinição não: o áudio, a transcrição, o resumo e o índice de pesquisa ficam apenas no seu Mac. Só sai algo em dois casos, ambos por sua escolha: se ligar um modelo na nuvem com a sua própria chave, ou se ativar a sincronização iCloud — nesse caso o conteúdo sincroniza-se cifrado entre os seus dispositivos, mas alguns metadados (duração, língua) sincronizam-se sem cifra.",
      },
      {
        question: "Que línguas o Summit entende além do português?",
        answer:
          "O modelo predefinido suporta 25 línguas europeias, incluindo português, alemão, francês, polaco, ucraniano e russo. Para outras línguas, o Summit inclui o Whisper. No total, suporta cerca de cem línguas, embora o Whisper seja mais lento.",
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
    intro: "O mesmo modelo reconhece mais 24 línguas.",
  },

  finalCta: {
    heading: "Experimente na sua próxima reunião",
    body: "As primeiras 15 gravações são grátis e não exigem uma conta. São suficientes para experimentar o Summit com a sua voz, o seu vocabulário profissional e reuniões reais.",
    ctaLabel: "Descarregar na Mac App Store",
    secondaryLabel: "Como funciona a privacidade",
    secondaryHref: "/security",
  },
};
