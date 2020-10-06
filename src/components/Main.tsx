/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"
import Card from "./Card"

export default function Main() {
  return (
    <React.Fragment>
      <h2
        sx={{
          fontSize: ["5", "6"],
          marginX: "3",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        De voordelen van <i>flyfi</i> webapps
      </h2>
      <Grid
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(35ch, 1fr))",
          paddingX: ["0", "3", "4"],
          maxWidth: "1280px",
          marginX: "auto",
        }}
      >
        <Card
          heading={"Tot 15 keer sneller dan WordPress"}
          text={`Wetenschappelijke studies hebben keer op keer bewezen dat veel gebruikers
             afhaken als een website te lang laadt. Een flyfi app laadt tot 10 keer 
             sneller dan een gewone website. Met de optimale performance van flyfi 
             webapps kunt u uw doelen sneller bereiken.`}
        />
        <Card
          heading={"Optimale gebruikerservaring"}
          text={`Flyfi sites zijn zo ontworpen en gebouwt dat de gebruikerservaring lijkt op 
          die van een app, net zoals gmail of de twitter site. Een betere gebruikerservaring 
          leidt tot een betere conversie en dus tot meer klanten voor uw bedrijf.`}
        />
        <Card
          heading={"Verbeterde vindbaarheid"}
          text={`Snelheid en gebruikerservaring zijn factoren die een steeds grotere rol 
          spelen in Google’s zoekresultaten. Een moderne webapp van flyfi kan zo niet alleen 
          der conversie verhogen, maar ook het bezoekersaantal van uw webapp.`}
        />
        <Card
          heading={"Veilig zonder onderhoud"}
          text={`Anders dan een WordPress site hoeft een flyfi app niet onderhouden te 
          worden. Er zijn geen veiligheidsrisico’s zoals gehackte of verouderde plugins en geen 
          noodzaak voor updates. Dit bespaart u kosten en zorgen, zodat u kunt focussen op 
          uw onderneming.`}
        />
        <Card
          heading={"Geen of zeer lage vaste kosten"}
          text={`Met uitzondering van bvb. webshops zijn er aan flyfi apps geen vaste kosten 
          verbonden. Voor de hosting werken wij samen met de supersnelle cloud hosting van 
          Netlify. Voor de allermeeste bedrijven is het gratis pakket voldoende.`}
        />
        <Card
          heading={"Klaar voor de toekomst"}
          text={`Vanaf volgend jaar introduceert Google de Core Web Vitals, een manier om de 
          gebruikerservaring te verwerken in de zoekresultaten. Met een flyfi app bent u nu 
          al voorbereid op de toekomst en zult u vanaf volgend jaar extra profiteren.`}
        />
      </Grid>
    </React.Fragment>
  )
}
