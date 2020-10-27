/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Card from "./Card"
import { cardSectionStyle } from "./Cards-types"

export default function CardsVoordelen() {
  return (
    <section
      sx={{
        ...cardSectionStyle,
        gap: "0",
        gridTemplateColumns: [
          "repeat(auto-fill, minmax(30ch, 1fr))",
          "repeat(auto-fill, minmax(35ch, 1fr))",
        ],
      }}
    >
      {cardsVoordelen.map(voordeel => (
        <Card heading={voordeel.heading} text={voordeel.text} />
      ))}
    </section>
  )
}

const cardsVoordelen = [
  {
    heading: "Tot 15 keer sneller dan WordPress",
    text: (
      <React.Fragment>
        Wetenschappelijke studies hebben keer op keer bewezen dat veel
        gebruikers afhaken als een website te lang laadt. Een flyfi app laadt
        tot 15 keer sneller dan een WordPress website. Met de optimale
        performance van flyfi webapps kunt u uw doelen sneller bereiken.
      </React.Fragment>
    ),
  },
  {
    heading: "Optimale gebruikerservaring",
    text: (
      <React.Fragment>
        Flyfi sites zijn zo ontworpen en gebouwt dat de gebruikerservaring lijkt
        op die van een app, net zoals gmail of de twitter site. Een betere
        gebruikerservaring leidt tot een betere conversie en dus tot meer
        klanten voor uw bedrijf.
      </React.Fragment>
    ),
  },
  {
    heading: "Verbeterde vindbaarheid",
    text: (
      <React.Fragment>
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
      </React.Fragment>
    ),
  },
  {
    heading: "Veilig zonder onderhoud",
    text: (
      <React.Fragment>
        Anders dan een WordPress site hoeft een flyfi app niet onderhouden te
        worden. Er zijn geen veiligheidsrisico’s zoals gehackte of verouderde
        plugins en geen noodzaak voor updates. Dit bespaart u kosten en zorgen,
        zodat u kunt focussen op uw onderneming.
      </React.Fragment>
    ),
  },
  {
    heading: "Geen of zeer lage vaste kosten",
    text: (
      <React.Fragment>
        Met uitzondering van bvb. webshops zijn er aan flyfi apps geen vaste
        kosten verbonden. Voor de hosting werken wij samen met de supersnelle
        cloud hosting van Netlify. Voor de allermeeste bedrijven is het gratis
        pakket voldoende.
      </React.Fragment>
    ),
  },
  {
    heading: "Progressive Web Apps",
    text: (
      <React.Fragment>
        Flyfi's progressive web apps zijn een geschikt alternatief voor de
        ontwikkeling van Android en iOS apps. Ze zijn beter vindbaar,
        makkelijker te installeren en te updaten, gunstiger in de ontwikkeling
        en verhogen de conversie.
      </React.Fragment>
    ),
  },
]
