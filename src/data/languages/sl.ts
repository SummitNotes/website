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
      "Summit posname klic, prepiše govor v slovenščini in pripravi povzetek z opravili. Posnetek, prepis in zapiski ostanejo na vašem Macu.",
    ctaLabel: "Prenesite iz Mac App Store",
    ctaNote: "15 brezplačnih posnetkov, brez registracije",
  },

  engine: {
    heading: "Prepis v slovenščini brez dodatnih nastavitev",
    paragraphs: [
      "Summit uporablja lokalni model za prepoznavanje govora Parakeet TDT v3. Podpira 25 evropskih jezikov, med njimi slovenščino, in je že izbran kot privzeti model. Ni vam treba ničesar dodatno namestiti ali preklopiti.",
      "Jezik posnetka se prepozna samodejno. Če Summit zgreši — na primer ker se sestanek začne z angleškim pozdravom — lahko za ta posnetek ročno izberete slovenščino.",
    ],
    features: [
      {
        title: "Deluje brez interneta",
        body: "Model deluje neposredno na vašem Macu. Sestanke lahko prepisujete na vlaku, letalu ali ob nestabilnem omrežju Wi-Fi — kakovost ni odvisna od internetne povezave.",
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
        body: "Iskanje po celotnem besedilu in pomenu v prepisih ter povzetkih. Semantično iskanje deluje med jeziki, zato poizvedba v slovenščini najde tudi tisto, o čemer je bil govor v angleščini.",
      },
    ],
  },

  mixed: {
    heading: "Ko se v klicu mešajo jeziki",
    paragraphs: [
      "Pogosta situacija: trije ljudje začnejo sestanek v slovenščini, pozneje se pridružijo sodelavci iz tujine in pogovor se nadaljuje v angleščini. Summit vsak odsek prepozna v jeziku, v katerem je bil izgovorjen, in ga ne prevaja. Slovenski deli ostanejo v slovenščini, angleški pa v angleščini.",
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
      "Klicu se ne pridruži noben bot. Summit prek macOS posname sistemski zvok in mikrofon, zato se ne pojavi noben dodaten udeleženec — pa naj gre za Zoom, Teams, Meet ali sestanek v živo.",
      "Zvok, prepis, povzetek in iskalni indeks ostanejo na vašem Macu. Privzeto od tod ne odide nič: ne datoteke, ne besedilo, ne metapodatki o sestanku.",
      "Model v oblaku se vključi šele, ko sami vnesete ključ svojega ponudnika v nastavitvah. Do takrat celotna obdelava poteka lokalno — pomembno za GDPR, saj se tako ne prenaša noben osebni podatek.",
      "Sinhronizacija prek iCloud je ločena funkcija, privzeto izklopljena. Če jo vklopite, se prepisi in povzetki med vašimi napravami sinhronizirajo s šifriranjem od konca do konca; del pripadajočih metapodatkov — trajanje, število besed, zaznani jezik — se sinhronizira nešifrirano.",
    ],
    linkLabel: "Podrobnosti arhitekture in vsega odhodnega prometa (v angleščini)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Komu je Summit še posebej koristen",
    intro:
      "Nekaj primerov, v katerih je Summit še posebej koristen. Podrobne strani so za zdaj na voljo samo v angleščini.",
    items: [
      {
        title: "Svetovanje",
        body: "Zapiski s sestankov s strankami takoj postanejo osnova za poročilo, ne da bi zaupne pogovore nalagali v zunanji oblak.",
        href: "/use-cases/consulting",
        linkLabel: "Svetovanje",
      },
      {
        title: "Odvetniki",
        body: "Pogovori s strankami in notranje razprave o zadevi ostanejo na napravi in se ne pošiljajo na zunanje strežnike.",
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
          "Privzeto ne: zvok, prepis, povzetek in iskalni indeks ostanejo le na vašem Macu. Nekaj odide od tod le v dveh primerih, oba po vaši izbiri: če povežete model v oblaku z lastnim ključem, ali če vklopite sinhronizacijo prek iCloud — takrat se vsebina sinhronizira šifrirano med vašimi napravami, del metapodatkov (trajanje, jezik) pa nešifrirano.",
      },
      {
        question: "Katere jezike Summit razume poleg slovenščine?",
        answer:
          "Privzeti model podpira 25 evropskih jezikov, med drugim slovenščino, nemščino, francoščino, poljščino, ukrajinščino in ruščino. Za druge jezike ima Summit vgrajen Whisper. Skupaj podpira približno sto jezikov, vendar Whisper deluje počasneje.",
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
    intro: "Isti model prepozna še 24 drugih jezikov.",
  },

  finalCta: {
    heading: "Preizkusite na naslednjem sestanku",
    body: "Prvih 15 posnetkov je brezplačnih in račun ni potreben. To zadostuje, da Summit preizkusite s svojim govorom, strokovnim besediščem in resničnimi sestanki.",
    ctaLabel: "Prenesite iz Mac App Store",
    secondaryLabel: "Kako deluje zasebnost",
    secondaryHref: "/security",
  },
};
