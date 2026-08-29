import type { LanguagePage } from "../../lib/languages";

export const et: LanguagePage = {
  code: "et",
  locale: "et",
  nativeName: "Eesti",
  englishName: "Estonian",
  storeLocale: "ee",

  meta: {
    title: "Koosolekute transkriptsioon eesti keeles — lokaalselt sinu Macis | Summit AI Notes",
    description:
      "Summit tunneb eesti keelt ära otse sinu Macis: kõnesse ei liitu botti, salvestisi pilve ei laadita. Transkript, tegevustega kokkuvõte ja otsing kõigi koosolekute vahel.",
  },

  hero: {
    h1: "Koosolekumärkmed eesti keeles — sinu Macis, pilveta",
    subtitle:
      "Summit salvestab kõne, transkribeerib eesti keele ja koostab kokkuvõtte koos tegevustega. Salvestis, transkript ja märkmed jäävad seadmesse.",
    ctaLabel: "Laadi alla Mac App Store'ist",
    ctaNote: "15 salvestist tasuta, konto pole vaja luua",
  },

  engine: {
    heading: "Eesti keelest saab aru vaikimisi mootor",
    paragraphs: [
      "Kõnetuvastuse eest vastutab Parakeet TDT v3, mudel, mis katab 25 Euroopa keelt, sealhulgas eesti keele. See on vaikimisi sees, nii et eestikeelsete koosolekute jaoks pole midagi ümber lülitada.",
      "Salvestise keel tuvastatakse automaatselt, hoolimata eesti keele rikkalikust käänamisest. Kui tuvastus eksib — näiteks kui koosolek algab ingliskeelse tervitusega —, saab keele konkreetse salvestise jaoks käsitsi määrata.",
    ],
    features: [
      {
        title: "Töötab ilma internetita",
        body: "Mudel asub kettal ja arvutab sinu Maci protsessoril. Rongis, lennukis või külalis-wifiga koosolekuruumis on tulemus sama.",
      },
      {
        title: "Kirjavahemärgid ja ajatemplid",
        body: "Mudel lisab ise kirjavahemärgid ja suurtähed, samuti sõnapõhised ajatemplid — klõps transkripti reale mängib täpselt selle koha salvestisest.",
      },
      {
        title: "Kõnelejate eristamine",
        body: "Ka kõnelejate eristamine toimub lokaalselt: sõnavõtud on jaotatud kõnelejate kaupa, nimed määratakse üks kord ja tuntakse hiljem automaatselt ära.",
      },
      {
        title: "Otsing kõigi koosolekute vahel",
        body: "Täisteksti- ja vektorotsing transkriptides ja kokkuvõtetes. Manused on mitmekeelsed, nii et eestikeelne otsing leiab ka selle, millest räägiti inglise keeles.",
      },
    ],
  },

  mixed: {
    heading: "Kui kõnes keeled segunevad",
    paragraphs: [
      "Levinud olukord: koosolek algab kolmekesi eesti keeles, kümne minuti pärast liituvad rahvusvahelised kolleegid ja vestlus jätkub inglise keeles. Siin ei lähe midagi katki — iga lõik tuvastatakse keeles, milles seda räägiti, ilma tõlketa. Eestikeelsed osad jäävad transkriptis eestikeelseks, ingliskeelsed ingliskeelseks.",
      "Dokumendi enda keele määrab koosoleku algus. Summit kirjutab kokkuvõtte, tegevused ja pealkirja selles keeles: kui kõne algas eesti keeles, on tulemus eestikeelne, isegi kui teine pool toimus inglise keeles.",
      "Teistsuguse tulemuse jaoks — näiteks kui kokkuvõte läheb ingliskeelsetele kolleegidele — saab salvestise keele enne töötlust käsitsi määrata.",
    ],
    features: [
      {
        title: "Transkript",
        body: "Iga sõnavõtt oma keeles. Ühisesse keelde ei tõlgita — loed täpselt seda, mis öeldi.",
      },
      {
        title: "Kokkuvõte",
        body: "Kirjutatakse dokumendi keeles, mille määravad koosoleku esimesed minutid.",
      },
      {
        title: "Kui tuvastus eksib",
        body: "Salvestise keel määratakse käsitsi, mille järel saab kokkuvõtte uuesti genereerida.",
      },
    ],
  },

  privacy: {
    heading: "Salvestised ei lahku seadmest",
    paragraphs: [
      "Kõnesse ei liitu ükski bott. Summit jäädvustab süsteemiheli ja mikrofoni macOS-i vahenditega, nii et lisaosalejat ei ilmu — olgu tegu Zoomi, Teamsi, Meeti või näost näkku koosolekuga.",
      "Heli, transkript, kokkuvõte ja otsinguindeks jäävad sinu Maci. Vaikimisi ei lahku siit midagi: ei faile, teksti ega koosoleku metaandmeid.",
      "Pilvemudel lülitub sisse alles siis, kui sisestad ise oma teenusepakkuja võtme seadetesse. Kuni selleni toimub kogu töötlus lokaalselt — see on GDPR-i seisukohalt oluline, sest siis ei edastata ühtegi isikuandmet.",
      "iCloudi sünkroonimine on omaette funktsioon, mis on vaikimisi väljas. Kui lülitad selle sisse, sünkroonitakse transkriptid ja kokkuvõtted otsast lõpuni krüpteeritult sinu enda seadmete vahel; osa nendega seotud metaandmeid — kestus, sõnade arv, tuvastatud keel — sünkroonitakse krüpteerimata.",
    ],
    linkLabel: "Arhitektuuri ja kogu väljamineva liikluse ülevaade (inglise keeles)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kes kasutab Summitit kõige sagedamini",
    intro:
      "Stsenaariumid, mille jaoks Summit tavaliselt soetatakse. Lingitud lehed on praegu inglise keeles.",
    items: [
      {
        title: "Konsultatsioon",
        body: "Kliendikoosolekute märkmed, millest saab kohe raporti — ilma NDA-ga kaitstud vestlusi võõrasse pilve laadimata.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultatsioon",
      },
      {
        title: "Juristid",
        body: "Vestlused klientidega ja sisemised aruteludid jäävad seadmesse, nii et ametisaladus ei sõltu võõrast serverist.",
        href: "/use-cases/legal",
        linkLabel: "Juristid",
      },
      {
        title: "Finants",
        body: "Investoritega peetavad koosolekud ja tehinguarutelud täpsete sõnastuste ja arvudega, mis on hiljem otsingu abil leitavad.",
        href: "/use-cases/finance",
        linkLabel: "Finants",
      },
      {
        title: "Tervishoid",
        body: "Konsultatsioonid ja juhtumite läbivaatused ilma patsiendiandmeid kolmandale osapoolele edastamata.",
        href: "/use-cases/healthcare",
        linkLabel: "Tervishoid",
      },
    ],
  },

  faq: {
    heading: "Korduma kippuvad küsimused",
    items: [
      {
        question: "Kas eestikeelse koosoleku transkribeerimiseks on vaja internetti?",
        answer:
          "Ei. Tuvastusmudel laaditakse alla üks kord, seejärel töötab see sinu Macis võrguühenduseta. Internetti on vaja ainult mudelite ja uuenduste allalaadimiseks — või kui oled ise kokkuvõtete jaoks pilveteenusepakkuja ühendanud.",
      },
      {
        question: "Mis juhtub, kui koosolekul segunevad eesti ja inglise keel?",
        answer:
          "Iga lõik tuvastatakse oma keeles, ilma tõlketa ühisesse keelde. Kokkuvõte kirjutatakse dokumendi keeles, mille määrab koosoleku algus. Teistsuguse tulemuse jaoks saab salvestise keele enne töötlust käsitsi määrata.",
      },
      {
        question: "Kas salvestised ja transkriptid lähevad pilve?",
        answer:
          "Vaikimisi mitte: heli, transkript, kokkuvõte ja otsinguindeks jäävad ainult sinu Maci. Midagi väljub ainult kahel juhul, mõlemal juhul sinu enda valikul: kui ühendad pilvemudeli oma võtmega, või kui lülitad sisse iCloudi sünkroonimise — siis sünkroonitakse sisu krüpteeritult sinu seadmete vahel, osa metaandmeid (kestus, keel) aga krüpteerimata.",
      },
      {
        question: "Milliseid keeli Summit peale eesti keele veel oskab?",
        answer:
          "Vaikimisi mootor katab 25 Euroopa keelt, sealhulgas eesti, saksa, prantsuse, poola, ukraina ja vene keele. Teiste keelte jaoks on sisse ehitatud Whisper — kokku katab Summit nii umbes 99 keelt, ehkki Whisperiga aeglasemalt.",
      },
      {
        question: "Kas kõnesse tuleb kutsuda bott?",
        answer:
          "Ei. Summit jäädvustab süsteemiheli ja mikrofoni sinu poolelt, nii et osalejate nimekirja ei ilmu lisaosalejat. Samamoodi salvestatakse ka näost näkku koosolekuid, ilma igasuguse kõneta.",
      },
    ],
  },

  otherLanguages: {
    heading: "Teised keeled",
    intro: "Sama mootor tunneb ära veel 24 keelt.",
  },

  finalCta: {
    heading: "Proovi järgmisel koosolekul",
    body: "Esimesed 15 salvestist on tasuta, ilma kontot loomata. Piisab, et testida mootorit oma kõne, oma terminite ja oma koosolekute peal.",
    ctaLabel: "Laadi alla Mac App Store'ist",
    secondaryLabel: "Kuidas privaatsus toimib",
    secondaryHref: "/security",
  },
};
