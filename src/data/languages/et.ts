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
      "Summit tunneb eesti keelt ära otse sinu Macis: ükski bot ei liitu kõnega ja salvestisi ei laadita pilve. Saad transkriptsiooni, tegevustega kokkuvõtte ja otsingu kõigist koosolekutest.",
  },

  hero: {
    h1: "Koosolekumärkmed eesti keeles — sinu Macis, pilveta",
    subtitle:
      "Summit salvestab kõne, transkribeerib eestikeelse jutu ja koostab kokkuvõtte koos tegevustega. Salvestis, transkript ja märkmed jäävad sinu Maci.",
    ctaLabel: "Laadi alla Mac App Store'ist",
    ctaNote: "15 salvestist tasuta, konto pole vaja luua",
  },

  engine: {
    heading: "Eestikeelne transkriptsioon töötab kohe",
    paragraphs: [
      "Summit kasutab kohalikku kõnetuvastusmudelit Parakeet TDT v3. See toetab 25 Euroopa keelt, sealhulgas eesti keelt, ja on juba vaikimisi valitud. Midagi pole vaja juurde paigaldada ega ümber lülitada.",
      "Salvestise keel tuvastatakse automaatselt. Kui Summit eksib — näiteks seetõttu, et koosolek algab ingliskeelse tervitusega —, saad selle salvestise keele käsitsi eesti keeleks määrata.",
    ],
    features: [
      {
        title: "Töötab ilma internetita",
        body: "Mudel töötab otse sinu Macis. Koosolekuid saab transkribeerida rongis, lennukis või ebastabiilse wifi korral — kvaliteet ei sõltu internetiühendusest.",
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
        body: "Täisteksti- ja semantiline otsing transkriptides ning kokkuvõtetes. Otsing on mitmekeelne, nii et eestikeelne päring leiab ka inglise keeles räägitu.",
      },
    ],
  },

  mixed: {
    heading: "Kui kõnes keeled segunevad",
    paragraphs: [
      "Levinud olukord: kolm inimest alustavad koosolekut eesti keeles, hiljem liituvad väliskolleegid ja vestlus jätkub inglise keeles. Summit tuvastab iga lõigu selles keeles, milles see öeldi, ega tõlgi seda. Eestikeelne jutt jääb eesti keelde ja ingliskeelne inglise keelde.",
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
      "Pilvemudel lülitub sisse alles siis, kui sisestad ise oma teenusepakkuja võtme seadetesse. Seni toimub kogu töötlus lokaalselt — see on GDPR-i seisukohalt oluline, sest isikuandmeid ei edastata.",
      "iCloudi sünkroonimine on omaette funktsioon, mis on vaikimisi väljas. Kui lülitad selle sisse, sünkroonitakse transkriptid ja kokkuvõtted otsast lõpuni krüpteeritult sinu enda seadmete vahel; osa nendega seotud metaandmeid — kestus, sõnade arv, tuvastatud keel — sünkroonitakse krüpteerimata.",
    ],
    linkLabel: "Arhitektuuri ja kogu väljamineva liikluse ülevaade (inglise keeles)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kellele Summit eriti hästi sobib",
    intro:
      "Mõned olukorrad, kus Summit on eriti kasulik. Üksikasjalikud lehed on praegu saadaval ainult inglise keeles.",
    items: [
      {
        title: "Konsultatsioon",
        body: "Kliendikoosolekute märkmetest valmib kohe aruanne, ilma et konfidentsiaalseid vestlusi välisesse pilve laaditaks.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultatsioon",
      },
      {
        title: "Juristid",
        body: "Vestlused klientidega ja sisemised arutelud jäävad seadmesse ega liigu välistele serveritele.",
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
          "Vaikimisi mudel toetab 25 Euroopa keelt, sealhulgas eesti, saksa, prantsuse, poola, ukraina ja vene keelt. Muude keelte jaoks on Summitisse lisatud Whisper. Kokku toetab Summit umbes sadat keelt, kuid Whisper töötab aeglasemalt.",
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
    intro: "Sama mudel tunneb ära veel 24 keelt.",
  },

  finalCta: {
    heading: "Proovi järgmisel koosolekul",
    body: "Esimesed 15 salvestist on tasuta ja kontot pole vaja luua. Sellest piisab, et proovida Summitit oma kõne, erialase sõnavara ja päris koosolekutega.",
    ctaLabel: "Laadi alla Mac App Store'ist",
    secondaryLabel: "Kuidas privaatsus toimib",
    secondaryHref: "/security",
  },
};
