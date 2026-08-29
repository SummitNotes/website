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
      "Summit nagrywa rozmowę, transkrybuje polski i przygotowuje podsumowanie z zadaniami do zrobienia. Nagranie, transkrypcja i notatki zostają na urządzeniu.",
    ctaLabel: "Pobierz z Mac App Store",
    ctaNote: "15 nagrań za darmo, bez rejestracji",
  },

  engine: {
    heading: "Polski rozumie domyślny silnik",
    paragraphs: [
      "Rozpoznawanie mowy odpowiada modelowi Parakeet TDT v3, który obsługuje 25 języków europejskich, w tym polski. Jest włączony domyślnie, więc do spotkań po polsku nie trzeba nic przestawiać.",
      "Język nagrania wykrywany jest automatycznie, mimo bogatej fleksji i odmiany przez przypadki. Jeśli wykrywanie się pomyli — na przykład bo spotkanie zaczyna się od angielskiego powitania — język można ustawić ręcznie dla konkretnego nagrania.",
    ],
    features: [
      {
        title: "Działa bez internetu",
        body: "Model leży na dysku i liczy na procesorze Twojego Maca. W pociągu, w samolocie czy w sali z gościnnym Wi-Fi wynik jest taki sam.",
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
        body: "Wyszukiwanie pełnotekstowe i wektorowe w transkrypcjach i podsumowaniach. Embeddingi są wielojęzyczne, więc polskie zapytanie znajdzie też to, co omawiano po angielsku.",
      },
    ],
  },

  mixed: {
    heading: "Kiedy na rozmowie miesza się języki",
    paragraphs: [
      "Typowy scenariusz: spotkanie zaczyna się we trójkę po polsku, po dziesięciu minutach dołączają zagraniczni koledzy i rozmowa toczy się dalej po angielsku. Nic tu nie pęka — każdy fragment jest rozpoznawany w języku, w którym został wypowiedziany, bez żadnego tłumaczenia. Polskie fragmenty w transkrypcji zostają polskie, angielskie zostają angielskie.",
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
    ],
    linkLabel: "Szczegóły architektury i całego ruchu wychodzącego (po angielsku)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kto korzysta z Summit najczęściej",
    intro:
      "Scenariusze, dla których zwykle wybiera się Summit. Strony w linkach są na razie po angielsku.",
    items: [
      {
        title: "Konsulting",
        body: "Notatki ze spotkań z klientami, z których od razu powstaje raport — bez wgrywania rozmów objętych NDA do obcej chmury.",
        href: "/use-cases/consulting",
        linkLabel: "Zobacz Konsulting",
      },
      {
        title: "Prawnicy",
        body: "Rozmowy z klientami i wewnętrzne dyskusje o sprawie zostają na urządzeniu, więc tajemnica zawodowa nie zależy od obcego serwera.",
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
          "Nie. Domyślnie audio, transkrypcja, podsumowanie i indeks wyszukiwania zostają wyłącznie na Twoim Macu. Coś wychodzi dopiero, gdy sam podłączysz model chmurowy własnym kluczem.",
      },
      {
        question: "Jakie języki obsługuje Summit poza polskim?",
        answer:
          "Domyślny silnik obsługuje 25 języków europejskich, w tym polski, niemiecki, francuski, hiszpański, ukraiński i rosyjski. Dla pozostałych języków wbudowany jest Whisper — jeszcze około stu języków, choć wolniej.",
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
    intro: "Ten sam silnik rozpoznaje jeszcze 24 języki.",
  },

  finalCta: {
    heading: "Wypróbuj na najbliższym spotkaniu",
    body: "Pierwsze 15 nagrań jest za darmo, bez zakładania konta. Wystarczy, żeby sprawdzić silnik na własnym głosie, własnej terminologii i własnych spotkaniach.",
    ctaLabel: "Pobierz z Mac App Store",
    secondaryLabel: "Jak działa prywatność",
    secondaryHref: "/security",
  },
};
