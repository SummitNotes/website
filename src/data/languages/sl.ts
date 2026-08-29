import type { LanguagePage } from "../../lib/languages";

export const sl: LanguagePage = {
  code: "sl",
  locale: "sl",
  nativeName: "Slovenščina",
  englishName: "Slovenian",
  storeLocale: "si",

  meta: {
    title: "Prepis sestankov v slovenščini — lokalno na vašem Macu | Summit AI Notes",
    description:
      "Summit prepozna slovenščino neposredno na vašem Macu: brez bota v klicu, brez posnetkov, poslanih v oblak. Prepis, povzetek z opravili in iskanje po vseh sestankih.",
  },

  hero: {
    h1: "Zapiski sestankov v slovenščini — na vašem Macu, brez oblaka",
    subtitle:
      "Summit posname klic, prepiše slovenščino in pripravi povzetek z opravili. Posnetek, prepis in zapiski ostanejo na napravi.",
    ctaLabel: "Prenesite iz Mac App Store",
    ctaNote: "15 brezplačnih posnetkov, brez registracije",
  },

  engine: {
    heading: "Slovenščino razume privzeti mehanizem",
    paragraphs: [
      "Za prepoznavanje govora skrbi Parakeet TDT v3, model, ki pokriva 25 evropskih jezikov, med njimi tudi slovenščino. Vklopljen je privzeto, zato za sestanke v slovenščini ni treba ničesar spreminjati.",
      "Jezik posnetka se prepozna samodejno, kljub bogati sklanjatvi. Če prepoznavanje zgreši — na primer ker se sestanek začne z angleškim pozdravom — lahko jezik za ta posnetek nastavite ročno.",
    ],
    features: [
      {
        title: "Deluje brez interneta",
        body: "Model je shranjen na disku in računa na procesorju vašega Maca. Na vlaku, letalu ali v sejni sobi z gostujočim Wi-Fi omrežjem je rezultat enak.",
      },
      {
        title: "Ločila in časovne oznake",
        body: "Model sam doda ločila in velike začetnice ter časovne oznake po besedah — klik na vrstico v prepisu predvaja natanko ta del posnetka.",
      },
      {
        title: "Prepoznavanje govorcev",
        body: "Tudi ločevanje po govorcih poteka lokalno: replike so razporejene po govorcih, imena določite enkrat, nato jih sistem samodejno prepozna.",
      },
      {
        title: "Iskanje po vseh sestankih",
        body: "Celotno besedilno in vektorsko iskanje po prepisih in povzetkih. Vdelave so večjezične, zato slovensko poizvedovanje najde tudi tisto, o čemer je bil govor v angleščini.",
      },
    ],
  },

  mixed: {
    heading: "Ko se v klicu mešajo jeziki",
    paragraphs: [
      "Pogost scenarij: sestanek se začne s tremi ljudmi v slovenščini, po desetih minutah se pridružijo mednarodni sodelavci in pogovor se nadaljuje v angleščini. Tu se nič ne pokvari — vsak odsek se prepozna v jeziku, v katerem je bil izgovorjen, brez prevajanja. Slovenski deli ostanejo v prepisu slovenski, angleški ostanejo angleški.",
      "Jezik samega dokumenta se določi glede na začetek sestanka. Summit napiše povzetek, opravila in naslov v tem jeziku: če se klic začne v slovenščini, bo rezultat slovenski, tudi če je druga polovica potekala v angleščini.",
      "Za drugačen izid — na primer, če povzetek gre angleško govorečim sodelavcem — lahko jezik posnetka ročno nastavite pred obdelavo.",
    ],
    features: [
      {
        title: "Prepis",
        body: "Vsaka izjava v svojem jeziku. Ne prevaja se v en skupni jezik — berete natanko to, kar je bilo rečeno.",
      },
      {
        title: "Povzetek",
        body: "Napisan je v jeziku dokumenta, ki ga določajo prve minute sestanka.",
      },
      {
        title: "Če prepoznavanje zgreši",
        body: "Jezik posnetka nastavite ročno, nato lahko povzetek znova ustvarite.",
      },
    ],
  },

  privacy: {
    heading: "Posnetki ne zapustijo naprave",
    paragraphs: [
      "V klic ne vstopi noben bot. Summit zajame sistemski zvok in mikrofon z orodji macOS, zato se ne pojavi noben dodaten udeleženec — pa naj gre za Zoom, Teams, Meet ali sestanek v živo.",
      "Zvok, prepis, povzetek in iskalni indeks ostanejo na vašem Macu. Privzeto od tod ne odide nič: ne datoteke, ne besedilo, ne metapodatki o sestanku.",
      "Model v oblaku se vključi šele, ko sami vnesete ključ svojega ponudnika v nastavitvah. Do takrat celotna obdelava poteka lokalno — pomembno za GDPR, saj se tako ne prenaša noben osebni podatek.",
    ],
    linkLabel: "Podrobnosti arhitekture in vsega odhodnega prometa (v angleščini)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kdo najpogosteje uporablja Summit",
    intro:
      "Scenariji, zaradi katerih se Summit običajno kupi. Povezane strani so zaenkrat v angleščini.",
    items: [
      {
        title: "Svetovanje",
        body: "Zapiski s sestankov s strankami, ki neposredno napajajo poročilo — brez nalaganja pogovorov, zaščitenih z NDA, v tuj oblak.",
        href: "/use-cases/consulting",
        linkLabel: "Svetovanje",
      },
      {
        title: "Odvetniki",
        body: "Pogovori s strankami in notranje razprave o zadevi ostanejo na napravi, zato poklicna molčečnost ni odvisna od tujega strežnika.",
        href: "/use-cases/legal",
        linkLabel: "Odvetniki",
      },
      {
        title: "Finance",
        body: "Sestanki z vlagatelji in pogajanja s točnimi formulacijami in številkami, ki jih kasneje najdete z iskanjem.",
        href: "/use-cases/finance",
        linkLabel: "Finance",
      },
      {
        title: "Zdravstvo",
        body: "Posveti in pregledi primerov brez posredovanja podatkov o pacientu tretjim osebam.",
        href: "/use-cases/healthcare",
        linkLabel: "Zdravstvo",
      },
    ],
  },

  faq: {
    heading: "Pogosta vprašanja",
    items: [
      {
        question: "Ali za prepis sestanka v slovenščini potrebujem internet?",
        answer:
          "Ne. Model za prepoznavanje se prenese enkrat, nato deluje brez povezave na vašem Macu. Internet je potreben le za prenos modelov in posodobitev — ali če ste sami povezali ponudnika v oblaku za povzetke.",
      },
      {
        question: "Kaj se zgodi, če se na sestanku mešata slovenščina in angleščina?",
        answer:
          "Vsak odsek se prepozna v svojem jeziku, brez prevajanja v en skupni jezik. Povzetek je napisan v jeziku dokumenta, ki ga določa začetek sestanka. Za drugačen izid lahko jezik posnetka ročno nastavite pred obdelavo.",
      },
      {
        question: "Ali posnetki in prepisi odidejo v oblak?",
        answer:
          "Ne. Privzeto zvok, prepis, povzetek in iskalni indeks ostanejo le na vašem Macu. Nekaj odide od tod šele, ko sami povežete model v oblaku z lastnim ključem.",
      },
      {
        question: "Katere jezike Summit razume poleg slovenščine?",
        answer:
          "Privzeti mehanizem pokriva 25 evropskih jezikov, med drugim slovenščino, nemščino, francoščino, poljščino, ukrajinščino in ruščino. Za ostale jezike je vgrajen Whisper — še kakih sto jezikov, a počasneje.",
      },
      {
        question: "Ali mora bot vstopiti v klic?",
        answer:
          "Ne. Summit zajame sistemski zvok in mikrofon na vaši strani, zato se na seznamu udeležencev ne pojavi noben dodaten udeleženec. Na enak način se snemajo tudi sestanki v živo, brez kakršnegakoli klica.",
      },
    ],
  },

  otherLanguages: {
    heading: "Drugi jeziki",
    intro: "Isti mehanizem prepozna še 24 drugih jezikov.",
  },

  finalCta: {
    heading: "Preizkusite na naslednjem sestanku",
    body: "Prvih 15 posnetkov je brezplačnih, brez ustvarjanja računa. Dovolj, da preizkusite mehanizem na svojem govoru, svojih izrazih in svojih sestankih.",
    ctaLabel: "Prenesite iz Mac App Store",
    secondaryLabel: "Kako deluje zasebnost",
    secondaryHref: "/security",
  },
};
