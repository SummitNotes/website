import type { LanguagePage } from "../../lib/languages";

export const hr: LanguagePage = {
  code: "hr",
  locale: "hr",
  nativeName: "Hrvatski",
  englishName: "Croatian",
  storeLocale: "hr",

  meta: {
    title: "Prijepis sastanaka na hrvatskom — lokalno na vašem Macu | Summit AI Notes",
    description:
      "Summit prepoznaje hrvatski jezik izravno na vašem Macu: bez bota u pozivu, bez snimki poslanih u oblak. Prijepis, sažetak sa zadacima i pretraga svih sastanaka.",
  },

  hero: {
    h1: "Bilješke sa sastanaka na hrvatskom — na vašem Macu, bez oblaka",
    subtitle:
      "Summit snima poziv, prepisuje hrvatski jezik i priprema sažetak sa zadacima. Snimka, prijepis i bilješke ostaju na uređaju.",
    ctaLabel: "Preuzmite s Mac App Storea",
    ctaNote: "15 besplatnih snimki, bez registracije",
  },

  engine: {
    heading: "Prijepis na hrvatskom bez dodatnog podešavanja",
    paragraphs: [
      "Summit koristi lokalni model za prepoznavanje govora Parakeet TDT v3. Podržava 25 europskih jezika, uključujući hrvatski, i već je postavljen kao zadani model. Ne morate ništa dodatno instalirati ni mijenjati.",
      "Jezik snimke prepoznaje se automatski. Ako prepoznavanje pogriješi — na primjer jer sastanak počinje engleskim pozdravom — jezik se za tu snimku može ručno postaviti.",
    ],
    features: [
      {
        title: "Radi bez interneta",
        body: "Model radi izravno na vašem Macu. Sastanke možete prepisivati u vlaku, avionu ili uz nepouzdan Wi-Fi — kvaliteta ne ovisi o internetskoj vezi.",
      },
      {
        title: "Interpunkcija i vremenske oznake",
        body: "Model sam postavlja interpunkciju i velika slova, uz vremenske oznake po riječi — klik na redak u prijepisu pušta upravo taj dio snimke.",
      },
      {
        title: "Prepoznavanje govornika",
        body: "Razdvajanje po govornicima također se odvija lokalno: replike su raspoređene po govornicima, imena se dodjeljuju jednom i potom se automatski prepoznaju.",
      },
      {
        title: "Pretraga svih sastanaka",
        body: "Pretraga cijelog teksta i semantička pretraga po prijepisima i sažecima. Semantička pretraga radi na više jezika, pa upit na hrvatskom pronalazi i ono što je izgovoreno na engleskom.",
      },
    ],
  },

  mixed: {
    heading: "Kad se u pozivu miješaju jezici",
    paragraphs: [
      "Uobičajen scenarij: troje ljudi započne sastanak na hrvatskom, zatim se pridruže međunarodni kolege i razgovor se nastavi na engleskom. Summit svaki dio prepoznaje na jeziku na kojem je izgovoren i ne prevodi ga. Hrvatski dijelovi ostaju na hrvatskom, a engleski na engleskom.",
      "Jezik samog dokumenta određuje se prema početku sastanka. Summit piše sažetak, zadatke i naslov na tom jeziku: ako poziv počne na hrvatskom, rezultat će biti hrvatski, čak i ako je druga polovica bila na engleskom.",
      "Za drukčiji ishod — na primjer ako sažetak ide kolegama koji govore engleski — jezik snimke može se ručno postaviti prije obrade.",
    ],
    features: [
      {
        title: "Prijepis",
        body: "Svaka replika na svom jeziku. Ne prevodi se na jedan zajednički jezik — čitate točno ono što je rečeno.",
      },
      {
        title: "Sažetak",
        body: "Piše se na jeziku dokumenta, koji određuju prve minute sastanka.",
      },
      {
        title: "Ako prepoznavanje pogriješi",
        body: "Jezik snimke postavlja se ručno, nakon čega se sažetak može ponovno generirati.",
      },
    ],
  },

  privacy: {
    heading: "Snimke ne napuštaju uređaj",
    paragraphs: [
      "Pozivu se ne pridružuje nikakav bot. Summit snima zvuk sustava i mikrofon putem macOS-a, pa se ne pojavljuje dodatni sudionik — bilo u Zoomu, Teamsu, Meetu ili na sastanku uživo.",
      "Zvuk, prijepis, sažetak i indeks pretrage ostaju na vašem Macu. Prema zadanim postavkama ništa odavde ne izlazi: ni datoteke, ni tekst, ni metapodaci o sastanku.",
      "Model u oblaku uključuje se tek kad sami unesete ključ svog pružatelja usluge u postavkama. Do tada se cijela obrada odvija lokalno — bitno za GDPR, jer se time ne prenosi nikakav osobni podatak.",
      "Sinkronizacija putem iCloud-a zasebna je značajka, prema zadanim postavkama isključena. Ako je uključite, prijepisi i sažeci sinkroniziraju se end-to-end šifrirano između vaših uređaja; dio pripadajućih metapodataka — trajanje, broj riječi, prepoznati jezik — sinkronizira se nešifrirano.",
    ],
    linkLabel: "Detalji arhitekture i cijelog izlaznog prometa (na engleskom)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kome je Summit posebno koristan",
    intro:
      "Nekoliko situacija u kojima je Summit posebno koristan. Detaljne stranice zasad su dostupne samo na engleskom.",
    items: [
      {
        title: "Savjetovanje",
        body: "Bilješke sa sastanaka s klijentima odmah postaju osnova za izvještaj, bez slanja povjerljivih razgovora u vanjski oblak.",
        href: "/use-cases/consulting",
        linkLabel: "Savjetovanje",
      },
      {
        title: "Odvjetnici",
        body: "Razgovori s klijentima i interne rasprave o predmetu ostaju na uređaju i ne šalju se na vanjske poslužitelje.",
        href: "/use-cases/legal",
        linkLabel: "Odvjetnici",
      },
      {
        title: "Financije",
        body: "Sastanci s investitorima i pregovori s preciznim formulacijama i brojkama, kasnije pronalaživim pretragom.",
        href: "/use-cases/finance",
        linkLabel: "Financije",
      },
      {
        title: "Zdravstvo",
        body: "Konzultacije i pregledi slučajeva bez prosljeđivanja podataka pacijenta trećoj strani.",
        href: "/use-cases/healthcare",
        linkLabel: "Zdravstvo",
      },
    ],
  },

  faq: {
    heading: "Česta pitanja",
    items: [
      {
        question: "Treba li internet za prijepis sastanka na hrvatskom?",
        answer:
          "Ne. Model za prepoznavanje preuzima se jednom, a zatim radi izvanmrežno na vašem Macu. Internet je potreban samo za preuzimanje modela i ažuriranja — ili ako ste sami povezali pružatelja usluge u oblaku za sažetke.",
      },
      {
        question: "Što se događa ako se na sastanku miješaju hrvatski i engleski?",
        answer:
          "Svaki se dio prepoznaje na svom jeziku, bez prijevoda na jedan zajednički jezik. Sažetak se piše na jeziku dokumenta, određenom početkom sastanka. Za drukčiji ishod jezik snimke može se ručno postaviti prije obrade.",
      },
      {
        question: "Idu li snimke i prijepisi u oblak?",
        answer:
          "Prema zadanim postavkama ne: zvuk, prijepis, sažetak i indeks pretrage ostaju samo na vašem Macu. Nešto izlazi samo u dva slučaja, oba prema vašem izboru: ako povežete model u oblaku vlastitim ključem, ili ako uključite sinkronizaciju putem iCloud-a — tada se sadržaj sinkronizira šifrirano između vaših uređaja, dok se dio metapodataka (trajanje, jezik) sinkronizira nešifrirano.",
      },
      {
        question: "Koje jezike Summit razumije osim hrvatskog?",
        answer:
          "Zadani model podržava 25 europskih jezika, među njima hrvatski, njemački, francuski, poljski, ukrajinski i ruski. Za druge jezike ugrađen je Whisper. Summit ukupno podržava stotinjak jezika, no Whisper radi sporije.",
      },
      {
        question: "Treba li pozvati bota u poziv?",
        answer:
          "Ne. Summit snima sistemski zvuk i mikrofon s vaše strane, pa se na popisu sudionika ne pojavljuje nitko dodatan. Na isti se način snimaju i sastanci uživo, bez ikakvog poziva.",
      },
    ],
  },

  otherLanguages: {
    heading: "Ostali jezici",
    intro: "Isti model prepoznaje još 24 jezika.",
  },

  finalCta: {
    heading: "Isprobajte na sljedećem sastanku",
    body: "Prvih 15 snimki besplatno je i ne morate otvarati račun. To je dovoljno da isprobate Summit sa svojim načinom govora, stručnim nazivima i stvarnim sastancima.",
    ctaLabel: "Preuzmite s Mac App Storea",
    secondaryLabel: "Kako funkcionira privatnost",
    secondaryHref: "/security",
  },
};
