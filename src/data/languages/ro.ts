import type { LanguagePage } from "../../lib/languages";

export const ro: LanguagePage = {
  code: "ro",
  locale: "ro",
  nativeName: "Română",
  englishName: "Romanian",
  storeLocale: "ro",

  meta: {
    title: "Transcrierea întâlnirilor în română — local, pe Mac | Summit AI Notes",
    description:
      "Summit recunoaște limba română direct pe Mac: fără bot în apel, fără înregistrări trimise în cloud. Transcriere, rezumat cu sarcini și căutare în toate întâlnirile.",
  },

  hero: {
    h1: "Notițe de întâlnire în română — pe Mac-ul tău, fără cloud",
    subtitle:
      "Summit înregistrează apelul, transcrie limba română și pregătește un rezumat cu sarcinile de făcut. Înregistrarea, transcrierea și notițele rămân pe dispozitiv.",
    ctaLabel: "Descarcă din Mac App Store",
    ctaNote: "15 înregistrări gratuite, fără cont",
  },

  engine: {
    heading: "Româna este înțeleasă de motorul implicit",
    paragraphs: [
      "Recunoașterea vocală este făcută de Parakeet TDT v3, un model care acoperă 25 de limbi europene, inclusiv româna. Este activ implicit, așa că pentru întâlniri în română nu trebuie schimbat nimic.",
      "Limba înregistrării este detectată automat. Dacă detectarea greșește — de exemplu pentru că întâlnirea începe cu un salut în engleză —, limba poate fi setată manual pentru acea înregistrare.",
    ],
    features: [
      {
        title: "Funcționează fără internet",
        body: "Modelul stă pe disc și calculează pe procesorul Mac-ului tău. În tren, în avion sau într-o sală de ședințe cu wifi pentru vizitatori, rezultatul e același.",
      },
      {
        title: "Punctuație și marcaje de timp",
        body: "Modelul adaugă singur semnele de punctuație și literele mari, plus marcaje de timp pe cuvinte — un clic pe o linie din transcriere redă exact acel moment din înregistrare.",
      },
      {
        title: "Separarea vorbitorilor",
        body: "Diarizarea rulează tot local: replicile sunt împărțite pe vorbitori, numele se atribuie o dată și sunt recunoscute automat după aceea.",
      },
      {
        title: "Căutare în toate întâlnirile",
        body: "Căutare full-text și vectorială în transcrieri și rezumate. Embeddings-urile sunt multilingve, așa că o căutare în română găsește și ce s-a discutat în engleză.",
      },
    ],
  },

  mixed: {
    heading: "Când apelul amestecă limbile",
    paragraphs: [
      "Un scenariu obișnuit: întâlnirea începe cu trei persoane în română, după zece minute se alătură colegi internaționali și discuția continuă în engleză. Nimic nu se strică aici — fiecare segment este recunoscut în limba în care a fost rostit, fără nicio traducere. Părțile în română rămân în română în transcriere, cele în engleză rămân în engleză.",
      "Limba documentului în sine este stabilită de începutul întâlnirii. Summit scrie rezumatul, sarcinile și titlul în această limbă: dacă apelul începe în română, rezultatul va fi în română, chiar dacă a doua jumătate s-a desfășurat în engleză.",
      "Pentru un rezultat diferit — de exemplu, dacă rezumatul merge la colegi vorbitori de engleză — limba înregistrării poate fi setată manual înainte de procesare.",
    ],
    features: [
      {
        title: "Transcriere",
        body: "Fiecare replică în limba ei. Nu există traducere într-o limbă comună — citești exact ce s-a spus.",
      },
      {
        title: "Rezumat",
        body: "Se scrie în limba documentului, stabilită de primele minute ale întâlnirii.",
      },
      {
        title: "Dacă detectarea greșește",
        body: "Limba înregistrării se setează manual, apoi rezumatul poate fi regenerat.",
      },
    ],
  },

  privacy: {
    heading: "Înregistrările nu părăsesc dispozitivul",
    paragraphs: [
      "Niciun bot nu intră în apel. Summit captează sunetul sistemului și microfonul prin macOS, deci nu apare niciun participant în plus — fie în Zoom, Teams, Meet, fie la o întâlnire față în față.",
      "Sunetul, transcrierea, rezumatul și indexul de căutare rămân pe Mac-ul tău. Implicit, nimic nu iese de aici: nici fișiere, nici text, nici metadate despre întâlnire.",
      "Un model din cloud intră în funcțiune doar dacă introduci tu însuți o cheie de la furnizorul tău în setări. Până atunci, toată prelucrarea este locală — relevant pentru GDPR, pentru că astfel nu se transmite nicio dată cu caracter personal.",
      "Sincronizarea iCloud este o funcție separată, dezactivată implicit. Dacă o activezi, transcrierile și rezumatele se sincronizează criptat integral între propriile tale dispozitive; o parte din metadatele asociate — durata, numărul de cuvinte, limba detectată — se sincronizează necriptat.",
    ],
    linkLabel: "Detalii despre arhitectură și tot traficul de ieșire (în engleză)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Cine folosește Summit cel mai des",
    intro:
      "Scenariile pentru care se achiziționează de obicei Summit. Paginile legate sunt momentan în engleză.",
    items: [
      {
        title: "Consultanță",
        body: "Notițe din întâlnirile cu clienții care alimentează direct un raport — fără a încărca discuții protejate de NDA într-un cloud străin.",
        href: "/use-cases/consulting",
        linkLabel: "Consultanță",
      },
      {
        title: "Avocați",
        body: "Discuțiile cu clienții și dezbaterile interne despre un caz rămân pe dispozitiv, așa că secretul profesional nu depinde de un server străin.",
        href: "/use-cases/legal",
        linkLabel: "Avocați",
      },
      {
        title: "Finanțe",
        body: "Întâlniri cu investitori și negocieri cu formulări și cifre exacte, ușor de regăsit ulterior prin căutare.",
        href: "/use-cases/finance",
        linkLabel: "Finanțe",
      },
      {
        title: "Sănătate",
        body: "Consultații și analize de caz fără a transmite datele pacientului către terți.",
        href: "/use-cases/healthcare",
        linkLabel: "Sănătate",
      },
    ],
  },

  faq: {
    heading: "Întrebări frecvente",
    items: [
      {
        question: "Este nevoie de internet pentru a transcrie o întâlnire în română?",
        answer:
          "Nu. Modelul de recunoaștere se descarcă o singură dată, apoi rulează offline pe Mac-ul tău. Internetul e necesar doar pentru descărcarea modelelor și a actualizărilor — sau dacă ai conectat tu însuți un furnizor din cloud pentru rezumate.",
      },
      {
        question: "Ce se întâmplă dacă întâlnirea amestecă româna cu engleza?",
        answer:
          "Fiecare segment este recunoscut în limba lui, fără traducere într-o limbă comună. Rezumatul se scrie în limba documentului, stabilită de începutul întâlnirii. Pentru un rezultat diferit, limba înregistrării se poate seta manual înainte de procesare.",
      },
      {
        question: "Înregistrările și transcrierile ajung în cloud?",
        answer:
          "Implicit, nu: sunetul, transcrierea, rezumatul și indexul de căutare rămân doar pe Mac-ul tău. Ceva iese de aici doar în două cazuri, ambele la alegerea ta: dacă conectezi un model din cloud cu propria cheie, sau dacă activezi sincronizarea iCloud — atunci conținutul se sincronizează criptat între dispozitivele tale, dar unele metadate (durată, limbă) se sincronizează necriptat.",
      },
      {
        question: "Ce limbi mai știe Summit în afară de română?",
        answer:
          "Motorul implicit acoperă 25 de limbi europene, printre care română, germană, franceză, poloneză, ucraineană și rusă. Pentru restul limbilor este integrat Whisper — în total, Summit acoperă astfel circa o sută de limbi, deși mai lent cu Whisper.",
      },
      {
        question: "Trebuie invitat un bot în apel?",
        answer:
          "Nu. Summit înregistrează sunetul sistemului și microfonul de partea ta, deci nu apare niciun participant în plus în listă. Întâlnirile față în față se înregistrează la fel, fără niciun apel.",
      },
    ],
  },

  otherLanguages: {
    heading: "Alte limbi",
    intro: "Același motor recunoaște încă 24 de limbi.",
  },

  finalCta: {
    heading: "Încearcă la următoarea ta întâlnire",
    body: "Primele 15 înregistrări sunt gratuite, fără a crea un cont. Suficient cât să testezi motorul pe vocea ta, pe termenii tăi și pe întâlnirile tale.",
    ctaLabel: "Descarcă din Mac App Store",
    secondaryLabel: "Cum funcționează confidențialitatea",
    secondaryHref: "/security",
  },
};
