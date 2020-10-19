/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Card from "./Card"
import CustomIcon from "../icons/settings-24px.svg"
import PlayIcon from "../icons/play_circle_outline-24px.svg"
import PriceButton from "./Price-button"
import { cardBorderStyle } from "./Cards-types"
import { SystemStyleObject } from "@styled-system/css"
import { cardSectionStyle } from "./Cards-types"

const cardsPakkettenStyle: SystemStyleObject = {
  ...cardBorderStyle,
  justifyContent: "space-between",
}

export default function CardsPakketten() {
  return (
    <section sx={cardSectionStyle}>
      <Card
        sx={cardsPakkettenStyle}
        heading={"Onze starterspakketten"}
        text={`Op dit moment ontwikkel ik speciale sjablonen voor marketing sites, blogs, portfolio’s en webwinkels, die ik snel en eenvoudig kan aanpassen aan de voorwarden van uw bedrijf. 
        Zo kunt u als starter of creatieve onderneming voor een gunstige prijs profiteren van de vele voordelen van flyfi apps. Het ontwerp wordt voor elke klant aangepast zodat de vormgeving van de site past bij de huisstijl van uw bedrijf.  
        Door middel van het Netlify CMS kunt u de inhoud van uw site eenvoudig aanpassen en berichten ontvangen.`}
        icon={<PlayIcon />}
        cta={<PriceButton price={500} buttonText={"Meer weten?"} />}
      />
      <Card
        sx={cardsPakkettenStyle}
        heading={"Professioneel maatwerk"}
        text={`Voor grotere projecten bieden wij full service maatwerk aan. Hiervoor werken wij samen met marketeers, copy writers en fotografen om een product te ontwikkelen dat optimaal is afgestemd op de behoeftes van uw bedrijf.
        Geanimeerde logo’s of paginaovergangen, een donkere night mode weergave of een service worker, die zorgt dat uw webapp ook offline werkt? Flyfi zorgt ervoor dat uw wensen werkelijkheid worden.`}
        icon={<CustomIcon />}
        cta={<PriceButton price={1000} buttonText={"Meer weten?"} />}
      />
    </section>
  )
}
