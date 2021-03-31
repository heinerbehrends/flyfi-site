import React from "react";

type Voordelen = { heading: string; text: React.ReactNode }[];

export const cardsVoordelen: Voordelen = [
  {
    heading: "Tot 15 keer sneller dan Wordpress",
    text: (
      <>
        <a href="https://hostingtribunal.com/blog/how-speed-affects-website/">
          Onderzoek van bedrijven
        </a>{" "}
        heeft keer op keer bewezen dat veel gebruikers afhaken als een website
        te lang laadt. Een flyfi app laadt tot 15 keer sneller dan een WordPress
        website. Met de optimale performance van flyfi webapps kunt u uw doelen
        sneller bereiken.
      </>
    ),
  },
  {
    heading: "Optimale gebruikerservaring",
    text: (
      <>
        flyfi sites zijn zo ontworpen en gebouwt dat de gebruikerservaring lijkt
        op die van een app, net zoals gmail of de twitter site. Een betere
        gebruikerservaring leidt tot een betere conversie en dus tot meer
        klanten voor uw bedrijf.
      </>
    ),
  },
  {
    heading: "Verbeterde vindbaarheid",
    text: (
      <>
        <a href="https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html">
          Snelheid
        </a>{" "}
        en{" "}
        <a href="https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html">
          {" "}
          gebruikerservaring
        </a>{" "}
        zijn factoren die een steeds grotere rol spelen in Google’s
        zoekresultaten. Een moderne webapp van flyfi kan zo niet alleen de
        conversie verhogen, maar ook het bezoekersaantal van uw webapp.
      </>
    ),
  },
  {
    heading: "Veilig zonder onderhoud",
    text: (
      <>
        Anders dan een WordPress site hoeft een flyfi app niet onderhouden te
        worden. Er zijn geen veiligheidsrisico’s zoals gehackte of verouderde
        plugins en geen noodzaak voor updates. Dit bespaart u kosten en zorgen,
        zodat u kunt focussen op uw onderneming.
      </>
    ),
  },
  {
    heading: "Bijzonder lage vaste kosten",
    text: (
      <>
        Voor de hosting werken wij samen met de supersnelle cloud hosting van{" "}
        <a href="https://www.netlify.com/">Netlify</a>. Voor de allermeeste
        bedrijven is het gratis pakket voldoende. Sites met veel verkeer betalen
        alleen voor de hoeveelheid data die ze ook werkelijk gebruiken.
      </>
    ),
  },
  {
    heading: "Progressive Web Apps",
    text: (
      <>
        flyfi's{" "}
        <a href="https://themanifest.com/mobile-apps/should-you-consider-investing-progressive-web-app">
          Progressive Web Apps{" "}
        </a>
        zijn een geschikt alternatief voor de ontwikkeling van Android en iOS
        apps. Ze zijn beter vindbaar, makkelijker te installeren en te updaten,
        gunstiger in de ontwikkeling en verhogen de conversie.
      </>
    ),
  },
];
