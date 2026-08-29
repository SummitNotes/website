import type { LanguagePage } from "../../lib/languages";

export const pl: LanguagePage = {
  code: "pl",
  locale: "pl",
  nativeName: "Polski",
  englishName: "Polish",
  storeLocale: "pl",

  meta: {
    title: "Transkrypcja spotkań po polsku — lokalnie na Twoim Macu | Summit AI Notes",
    description:
      "Summit rozpoznaje polski bezpośrednio na Twoim Macu: żadnego bota na rozmowie, żadnego nagrania wysyłanego do chmury. Transkrypcja, podsumowanie z zadaniami i wyszukiwanie po wszystkich spotkaniach.",
  },

  hero: {
    h1: "Notatki ze spotkań po polsku — na Twoim Macu, bez chmury",
    subtitle:
      "Summit nagrywa rozmowę, transkrybuje wypowiedzi po polsku i przygotowuje podsumowanie z listą zadań. Nagranie, transkrypcja i notatki zostają na Twoim Macu.",
    ctaLabel: "Pobierz z Mac App Store",
    ctaNote: "15 nagrań za darmo, bez rejestracji",
  },

  engine: {
    heading: "Transkrypcja po polsku bez dodatkowej konfiguracji",
    paragraphs: [
      "Summit korzysta z lokalnego modelu rozpoznawania mowy Parakeet TDT v3. Obsługuje on 25 języków europejskich, w tym polski, i jest już wybrany domyślnie. Nie musisz niczego dodatkowo instalować ani przełączać.",
      "Język nagrania jest wykrywany automatycznie. Jeśli Summit się pomyli — na przykład dlatego, że spotkanie zaczyna się od angielskiego powitania — możesz ręcznie wybrać polski dla tego nagrania.",
    ],
    features: [
      {
        title: "Działa bez internetu",
        body: "Model działa bezpośrednio na Twoim Macu. Możesz transkrybować spotkania w pociągu, w samolocie lub przy niestabilnym Wi-Fi — jakość nie zależy od połączenia z internetem.",
      },
      {
        title: "Interpunkcja i znaczniki czasu",
        body: "Model sam wstawia znaki interpunkcyjne i wielkie litery oraz dodaje znaczniki czasu dla każdego słowa — kliknięcie w linijkę transkrypcji odtwarza dokładnie ten fragment nagrania.",
      },
      {
        title: "Rozpoznawanie mówców",
        body: "Diaryzacja też działa lokalnie: wypowiedzi są przypisane do mówców, imiona nadaje się raz i są potem rozpoznawane.",
      },
      {
        title: "Wyszukiwanie po wszystkich spotkaniach",
        body: "Wyszukiwanie pełnotekstowe i semantyczne w transkrypcjach oraz podsumowaniach. Wyszukiwanie semantyczne działa między językami, więc polskie zapytanie znajdzie też to, co omawiano po angielsku.",
      },
    ],
  },

  mixed: {
    heading: "Kiedy na rozmowie miesza się języki",
    paragraphs: [
      "Typowa sytuacja: trzy osoby zaczynają spotkanie po polsku, później dołączają zagraniczni współpracownicy i rozmowa przechodzi na angielski. Summit rozpoznaje każdy fragment w języku, w którym został wypowiedziany, i go nie tłumaczy. Polskie wypowiedzi zostają po polsku, a angielskie po angielsku.",
      "Język samego dokumentu ustala się na podstawie początku spotkania. Summit napisze podsumowanie, zadania i tytuł w tym języku: jeśli rozmowa zaczęła się po polsku, wynik będzie po polsku, nawet jeśli druga połowa rozmowy toczyła się po angielsku.",
      "Jeśli potrzebny jest inny wynik — na przykład podsumowanie trafia do anglojęzycznych kolegów — język nagrania można ustawić ręcznie przed przetworzeniem.",
    ],
    features: [
      {
        title: "Transkrypcja",
        body: "Każda wypowiedź w swoim języku. Nie ma tłumaczenia na jeden wspólny język — czytasz dokładnie to, co zostało powiedziane.",
      },
      {
        title: "Podsumowanie",
        body: "Powstaje w języku dokumentu, który wyznacza początek spotkania.",
      },
      {
        title: "Gdy wykrywanie się pomyli",
        body: "Język nagrania ustawia się ręcznie, po czym podsumowanie można wygenerować ponownie.",
      },
    ],
  },

  privacy: {
    heading: "Nagrania nie opuszczają urządzenia",
    paragraphs: [
      "Do rozmowy nie dołącza żaden bot. Summit przechwytuje dźwięk systemowy i mikrofon narzędziami macOS, więc na liście uczestników nie pojawia się nikt dodatkowy — czy to w Zoomie, Teams, Meet, czy na spotkaniu na żywo.",
      "Audio, transkrypcja, podsumowanie i indeks wyszukiwania zostają na Twoim Macu. Domyślnie nic stąd nie wychodzi: ani pliki, ani tekst, ani metadane spotkania.",
      "Model chmurowy włącza się dopiero, gdy sam wpiszesz klucz swojego dostawcy w ustawieniach. Do tego momentu całe przetwarzanie jest lokalne — to istotne przy RODO, bo wtedy żadne dane osobowe nie są przesyłane.",
      "Synchronizacja iCloud to osobna funkcja, domyślnie wyłączona. Po jej włączeniu transkrypcje i podsumowania synchronizują się w pełni zaszyfrowane między Twoimi urządzeniami; część towarzyszących im metadanych — czas trwania, liczba słów, wykryty język — synchronizuje się bez szyfrowania.",
    ],
    linkLabel: "Szczegóły architektury i całego ruchu wychodzącego (po angielsku)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Dla kogo Summit jest szczególnie przydatny",
    intro:
      "Kilka sytuacji, w których Summit jest szczególnie przydatny. Szczegółowe strony są na razie dostępne tylko po angielsku.",
    items: [
      {
        title: "Konsulting",
        body: "Notatki ze spotkań z klientami od razu stają się podstawą raportu, bez przesyłania poufnych rozmów do zewnętrznej chmury.",
        href: "/use-cases/consulting",
        linkLabel: "Zobacz Konsulting",
      },
      {
        title: "Prawnicy",
        body: "Rozmowy z klientami i wewnętrzne dyskusje o sprawie zostają na urządzeniu i nie trafiają na zewnętrzne serwery.",
        href: "/use-cases/legal",
        linkLabel: "Zobacz Prawnicy",
      },
      {
        title: "Finanse",
        body: "Spotkania z inwestorami i negocjacje z dokładnymi sformułowaniami i liczbami, które później znajdziesz przez wyszukiwarkę.",
        href: "/use-cases/finance",
        linkLabel: "Zobacz Finanse",
      },
      {
        title: "Ochrona zdrowia",
        body: "Konsultacje i omówienia przypadków bez przekazywania danych pacjenta stronom trzecim.",
        href: "/use-cases/healthcare",
        linkLabel: "Zobacz Ochrona zdrowia",
      },
    ],
  },

  faq: {
    heading: "Najczęstsze pytania",
    items: [
      {
        question: "Czy potrzebny jest internet, żeby transkrybować spotkanie po polsku?",
        answer:
          "Nie. Model rozpoznawania pobiera się raz, potem działa offline na Twoim Macu. Internet potrzebny jest tylko do pobierania modeli i aktualizacji — albo gdy sam podłączysz dostawcę chmurowego do podsumowań.",
      },
      {
        question: "Co się dzieje, gdy na spotkaniu miesza się polski i angielski?",
        answer:
          "Każdy fragment jest rozpoznawany w swoim języku, bez tłumaczenia na jeden wspólny język. Podsumowanie powstaje w języku dokumentu, wyznaczonym przez początek spotkania. Jeśli potrzebny jest inny wynik, język nagrania można ustawić ręcznie przed przetworzeniem.",
      },
      {
        question: "Czy nagrania i transkrypcje trafiają do chmury?",
        answer:
          "Domyślnie nie: audio, transkrypcja, podsumowanie i indeks wyszukiwania zostają wyłącznie na Twoim Macu. Coś wychodzi tylko w dwóch przypadkach, oba z Twojego wyboru: gdy podłączysz model chmurowy własnym kluczem, albo gdy włączysz synchronizację iCloud — wtedy treść synchronizuje się zaszyfrowana między Twoimi urządzeniami, a część metadanych (czas trwania, język) bez szyfrowania.",
      },
      {
        question: "Jakie języki obsługuje Summit poza polskim?",
        answer:
          "Domyślny model obsługuje 25 języków europejskich, w tym polski, niemiecki, francuski, hiszpański, ukraiński i rosyjski. Dla innych języków Summit ma wbudowany Whisper. Łącznie obsługuje około stu języków, ale Whisper działa wolniej.",
      },
      {
        question: "Czy trzeba zapraszać bota na rozmowę?",
        answer:
          "Nie. Summit przechwytuje dźwięk systemowy i mikrofon po Twojej stronie, więc na liście uczestników nie pojawia się nikt dodatkowy. W ten sam sposób nagrywane są też spotkania na żywo, bez żadnej rozmowy wideo.",
      },
    ],
  },

  otherLanguages: {
    heading: "Inne języki",
    intro: "Ten sam model rozpoznaje jeszcze 24 języki.",
  },

  finalCta: {
    heading: "Wypróbuj na najbliższym spotkaniu",
    body: "Pierwsze 15 nagrań jest bezpłatnych i nie wymaga konta. To wystarczy, żeby wypróbować Summit z własnym głosem, branżową terminologią i prawdziwymi spotkaniami.",
    ctaLabel: "Pobierz z Mac App Store",
    secondaryLabel: "Jak działa prywatność",
    secondaryHref: "/security",
  },
};
