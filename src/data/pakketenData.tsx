/** @jsxFrag React.Fragment */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import CustomIcon from "../icons/settings-24px.svg";
import PlayIcon from "../icons/play_circle_outline-24px.svg";
import PriceButton from "../components/Price-button";

type Pakketten = {
  heading: string;
  text: React.ReactNode;
  icon: React.ReactNode;
  cta: React.ReactNode;
}[];

export const cardsPakketten: Pakketten = [
  {
    heading: "Onze starterspakketten",
    text: (
      <>
        Op dit moment ontwikkel ik speciale sjablonen voor marketing sites,
        blogs, portfolio’s en webwinkels, die ik snel en eenvoudig kan aanpassen
        aan de voorwarden van uw bedrijf. Zo kunt u als starter of creatieve
        onderneming voor een gunstige prijs profiteren van de vele voordelen van
        flyfi apps. Het ontwerp wordt voor elke klant aangepast zodat de
        vormgeving van de site past bij de huisstijl van uw bedrijf. Door middel
        van het Netlify CMS kunt u de inhoud van uw site eenvoudig aanpassen en
        berichten ontvangen.
      </>
    ),
    icon: <PlayIcon />,
    cta: <PriceButton price={500} buttonText={"Meer weten?"} />,
  },
  {
    heading: "Professioneel Maatwerk",
    text: (
      <>
        Voor grotere projecten bieden wij full service maatwerk aan. Hiervoor
        werken wij samen met marketeers, copy writers en fotografen om een
        product te ontwikkelen dat optimaal is afgestemd op de behoeftes van uw
        bedrijf. Geanimeerde logo’s of paginaovergangen, een donkere night mode
        weergave of een service worker, die zorgt dat uw webapp ook offline
        werkt? flyfi zorgt ervoor dat uw wensen werkelijkheid worden.
      </>
    ),
    icon: <CustomIcon />,
    cta: <PriceButton price={1000} buttonText={"Geïnteresseerd?"} />,
  },
];
