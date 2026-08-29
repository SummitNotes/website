import type { LanguagePage } from "../../lib/languages";

export const fi: LanguagePage = {
  code: "fi",
  locale: "fi",
  nativeName: "Suomi",
  englishName: "Finnish",
  storeLocale: "fi",

  meta: {
    title: "Kokousten litterointi suomeksi — paikallisesti Macillasi | Summit AI Notes",
    description:
      "Summit tunnistaa suomen kielen suoraan Macillasi: ei botteja puheluun, ei tallenteita pilveen. Litterointi, tehtävät sisältävä yhteenveto ja haku kaikista kokouksista.",
  },

  hero: {
    h1: "Kokousmuistiinpanot suomeksi — Macillasi, ilman pilveä",
    subtitle:
      "Summit tallentaa puhelun, litteroi suomen kielen ja kokoaa yhteenvedon tehtävineen. Tallenne, litterointi ja muistiinpanot pysyvät laitteella.",
    ctaLabel: "Lataa Mac App Storesta",
    ctaNote: "15 tallennetta ilmaiseksi, ei rekisteröitymistä",
  },

  engine: {
    heading: "Suomenkielinen litterointi toimii ilman lisäasetuksia",
    paragraphs: [
      "Summit käyttää paikallista Parakeet TDT v3 -puheentunnistusmallia. Se tukee 25:tä eurooppalaista kieltä, myös suomea, ja on valittu oletukseksi valmiiksi. Mitään ei tarvitse asentaa tai vaihtaa.",
      "Tallenteen kieli tunnistetaan automaattisesti. Jos Summit erehtyy — esimerkiksi siksi, että kokous alkaa englanninkielisellä tervehdyksellä — voit valita kyseiselle tallenteelle suomen käsin.",
    ],
    features: [
      {
        title: "Toimii ilman internetiä",
        body: "Malli toimii suoraan Macillasi. Voit litteroida kokouksia junassa, lentokoneessa tai epävakaassa vierailijaverkossa — laatu ei riipu internetyhteydestä.",
      },
      {
        title: "Välimerkit ja aikaleimat",
        body: "Malli lisää itse välimerkit ja isot alkukirjaimet sekä sanakohtaiset aikaleimat — litteroinnin rivin klikkaus toistaa juuri sen kohdan tallenteesta.",
      },
      {
        title: "Puhujien erottelu",
        body: "Puhujaerottelu tapahtuu myös laitteella: repliikit on jaettu puhujittain, nimet lisätään kerran ja tunnistetaan sen jälkeen automaattisesti.",
      },
      {
        title: "Haku kaikista kokouksista",
        body: "Kokoteksti- ja semanttinen haku litteroinneista ja yhteenvedoista. Semanttinen haku toimii kielten välillä, joten suomenkielinen kysely löytää myös englanniksi käsitellyt asiat.",
      },
    ],
  },

  mixed: {
    heading: "Kun puhelussa vaihdetaan kieltä",
    paragraphs: [
      "Tavallinen tilanne: kolme ihmistä aloittaa kokouksen suomeksi, myöhemmin mukaan liittyy kansainvälisiä kollegoita ja keskustelu jatkuu englanniksi. Summit tunnistaa jokaisen jakson puhutulla kielellä eikä käännä sitä. Suomenkieliset osuudet pysyvät suomeksi ja englanninkieliset englanniksi.",
      "Itse dokumentin kieli määräytyy kokouksen alun mukaan. Summit kirjoittaa yhteenvedon, tehtävät ja otsikon tällä kielellä: jos puhelu alkoi suomeksi, tulos on suomenkielinen, vaikka toinen puolisko käytäisiin englanniksi.",
      "Jos tarvitaan toisenlainen tulos — esimerkiksi yhteenveto menee englanninkielisille kollegoille — tallenteen kielen voi asettaa käsin ennen käsittelyä.",
    ],
    features: [
      {
        title: "Litterointi",
        body: "Jokainen puheenvuoro omalla kielellään. Mitään ei käännetä yhteiselle kielelle — luet juuri sen, mitä sanottiin.",
      },
      {
        title: "Yhteenveto",
        body: "Kirjoitetaan dokumentin kielellä, jonka kokouksen ensimmäiset minuutit määrittävät.",
      },
      {
        title: "Jos tunnistus menee väärin",
        body: "Tallenteen kieli asetetaan käsin, minkä jälkeen yhteenvedon voi luoda uudelleen.",
      },
    ],
  },

  privacy: {
    heading: "Tallenteet eivät poistu laitteelta",
    paragraphs: [
      "Puheluun ei liity bottia. Summit kaappaa järjestelmän äänen ja mikrofonin macOS-työkaluilla, joten ylimääräistä osallistujaa ei näy — olipa kyse Zoomista, Teamsista, Meetistä tai kasvokkaisesta tapaamisesta.",
      "Ääni, litterointi, yhteenveto ja hakuindeksi pysyvät Macillasi. Oletuksena mitään ei lähde ulos: ei tiedostoja, ei tekstiä, ei kokouksen metatietoja.",
      "Pilvimalli aktivoituu vasta, kun syötät itse palveluntarjoajasi avaimen asetuksiin. Siihen asti koko käsittely tapahtuu paikallisesti — tämä on olennaista GDPR:n kannalta, koska silloin mitään henkilötietoa ei siirretä.",
      "iCloud-synkronointi on erillinen, oletuksena pois päältä oleva ominaisuus. Jos otat sen käyttöön, litteroinnit ja yhteenvedot synkronoidaan päästä päähän salattuina omien laitteidesi välillä; osa niihin liittyvistä metatiedoista — kesto, sanamäärä, tunnistettu kieli — synkronoidaan salaamattomana.",
    ],
    linkLabel: "Arkkitehtuurin ja koko lähtevän liikenteen erittely (englanniksi)",
    linkHref: "/security/architecture",
  },

  useCases: {
    heading: "Kenelle Summit sopii erityisen hyvin",
    intro:
      "Muutamia tilanteita, joissa Summitista on erityisen paljon hyötyä. Tarkemmat sivut ovat toistaiseksi saatavilla vain englanniksi.",
    items: [
      {
        title: "Konsultointi",
        body: "Asiakastapaamisten muistiinpanoista syntyy suoraan raportti — ilman että salassapitosopimuksen alaisia keskusteluja ladataan vieraaseen pilveen.",
        href: "/use-cases/consulting",
        linkLabel: "Konsultointi",
      },
      {
        title: "Lakiala",
        body: "Asiakaskeskustelut ja sisäiset tapauskeskustelut pysyvät laitteella eikä niitä lähetetä ulkoisille palvelimille.",
        href: "/use-cases/legal",
        linkLabel: "Lakiala",
      },
      {
        title: "Rahoitusala",
        body: "Sijoittajatapaamiset ja kauppaneuvottelut tarkoin muotoiluin ja luvuin, jotka löytyvät myöhemmin haulla.",
        href: "/use-cases/finance",
        linkLabel: "Rahoitusala",
      },
      {
        title: "Terveydenhuolto",
        body: "Konsultaatiot ja tapauskatsaukset ilman potilastietojen luovuttamista kolmannelle osapuolelle.",
        href: "/use-cases/healthcare",
        linkLabel: "Terveydenhuolto",
      },
    ],
  },

  faq: {
    heading: "Usein kysyttyä",
    items: [
      {
        question: "Tarvitaanko internetiä suomenkielisen kokouksen litterointiin?",
        answer:
          "Ei. Tunnistusmalli ladataan kerran, minkä jälkeen se toimii offline Macillasi. Internetiä tarvitaan vain mallien ja päivitysten lataamiseen — tai jos olet itse yhdistänyt pilvipalveluntarjoajan yhteenvetoja varten.",
      },
      {
        question: "Mitä tapahtuu, jos kokouksessa sekoittuu suomi ja englanti?",
        answer:
          "Jokainen jakso tunnistetaan omalla kielellään, ilman käännöstä yhteiselle kielelle. Yhteenveto kirjoitetaan dokumentin kielellä, jonka määrää kokouksen alku. Toisenlaista tulosta varten tallenteen kielen voi asettaa käsin ennen käsittelyä.",
      },
      {
        question: "Menevätkö tallenteet ja litteroinnit pilveen?",
        answer:
          "Oletuksena ei: ääni, litterointi, yhteenveto ja hakuindeksi pysyvät vain Macillasi. Jotain lähtee ulos vain kahdessa tapauksessa, molemmat omalla valinnallasi: kun yhdistät pilvimallin omalla avaimellasi, tai kun otat käyttöön iCloud-synkronoinnin — silloin sisältö synkronoidaan salattuna laitteidesi välillä, osa metatiedoista (kesto, kieli) kuitenkin salaamattomana.",
      },
      {
        question: "Mitä kieliä Summit osaa suomen lisäksi?",
        answer:
          "Oletusmalli tukee 25:tä eurooppalaista kieltä, muun muassa suomea, saksaa, ranskaa, puolaa, ukrainaa ja venäjää. Muita kieliä varten Summitiin on sisäänrakennettu Whisper. Yhteensä Summit tukee noin sataa kieltä, mutta Whisper toimii hitaammin.",
      },
      {
        question: "Täytyykö puheluun kutsua botti?",
        answer:
          "Ei. Summit tallentaa järjestelmän äänen ja mikrofonin sinun puoleltasi, joten listalle ei ilmesty ylimääräistä osallistujaa. Samalla tavalla tallennetaan myös kasvokkaiset tapaamiset ilman mitään puhelua.",
      },
    ],
  },

  otherLanguages: {
    heading: "Muut kielet",
    intro: "Sama malli tunnistaa vielä 24 muuta kieltä.",
  },

  finalCta: {
    heading: "Kokeile seuraavassa kokouksessasi",
    body: "Ensimmäiset 15 tallennetta ovat ilmaisia, eikä tiliä tarvita. Se riittää Summitin kokeilemiseen omalla puheellasi, ammattisanastollasi ja oikeissa kokouksissa.",
    ctaLabel: "Lataa Mac App Storesta",
    secondaryLabel: "Miten tietosuoja toimii",
    secondaryHref: "/security",
  },
};
