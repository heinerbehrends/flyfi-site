/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"
import Card from "./Card"
import TrendingUpIcon from "../icons/trending_up-24px.svg"
import CartIcon from "../icons/shopping_cart-24px.svg"
import PencilIcon from "../icons/edit-24px.svg"
import PortfolioIcon from "../icons/work_outline-24px.svg"
import { SystemStyleObject } from "@styled-system/css"

export const cardBorderStyle: SystemStyleObject = {
  borderWidth: "2px",
  borderColor: "secondary",
  borderStyle: "dashed",
  borderRadius: "3",
}

export const cardSectionStyle: SystemStyleObject = {
  display: "grid",
  gridTemplateColumns: [
    "repeat(auto-fill, minmax(30ch, 1fr))",
    "repeat(auto-fill, minmax(45ch, 1fr))",
  ],
  gap: "4",
  paddingX: ["3"],
  maxWidth: "1280px",
  marginX: "auto",
  marginTop: "4",
}

export default function CardsTypes() {
  return (
    <section sx={cardSectionStyle}>
      {cardsTypes.map(type => (
        <Card
          sx={cardBorderStyle}
          heading={type.heading}
          text={type.text}
          icon={type.icon}
        />
      ))}
    </section>
  )
}

const cardsTypes = [
  {
    heading: "Marketing site",
    text: (
      <React.Fragment>
        Bent u net begonnen met een nieuwe bedrijf of is uw oude website niet
        meer van deze tijd? Wij bouwen voor u de perfecte marketing site met een
        moderne uitstraling, supersnelle laadtijd en een gebruikerservaring die
        lijkt op die van een app. Betaald u te veel voor de hosting van een
        verouderde en trage website? De meeste websites voor midden- en
        kleinbedrijf bieden wij aan zonder vaste kosten. Met de kennis van flyfi
        haalt u meer uit uw website.
      </React.Fragment>
    ),
    icon: <TrendingUpIcon />,
  },
  {
    heading: "Webwinkel",
    text: (
      <React.Fragment>
        Wilt u een webwinkel beginnen om uw talenten te versilveren of uw winkel
        online te brengen en te profiteren van de digitalisering van de handel?
        flyfi’s moderne webwinkels baseren op shopify, waar u al vanaf 30 euro
        in de maand uw webwinkel kunt beheren. Uiteraard zijn flyfi’s webshops
        ongekend snel, wat u tevreden klanten oplevert en een hoge plek in
        Googles zoekresultaten.
      </React.Fragment>
    ),
    icon: <CartIcon />,
  },
  {
    heading: "Portfolio",
    text: (
      <React.Fragment>
        Speciaal voor creatieve bedrijven zoals grafische vormgevers,
        interieurontwerpers, kunstenaars, muzikanten en bands biedt flyfi een
        moderne portfolio website aan. Presenteer uw projecten met prachtige
        geoptimaliseerde foto’s en profiteer van de snelle laadtijden. Voor
        audio en videowerk hebben we een playlist ontwikkelt waarmee u
        mediabestanden van diverse videoplatforms als ook zelf gehoste bestanden
        kunt afspelen.
      </React.Fragment>
    ),
    icon: <PortfolioIcon />,
  },
  {
    heading: "Blog",
    text: (
      <React.Fragment>
        Of je over koken, kunst of politiek schrijft, met een flyfi blog heb je
        het gereedschap in handen om gehoord en gevonden te worden. Onze blogs
        werken met het populaire markdown, het hippe mdx of een content
        management system. Het is ook mogelijk om WordPress als ‘headless CMS’
        te gebruiken. Dan schrijf je posts gewoon in WordPress en profiteer je
        toch van onze supersnelle laadtijden en app-achtige gebruikerservaring.
      </React.Fragment>
    ),
    icon: <PencilIcon />,
  },
]
