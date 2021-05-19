/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./Card";
import { cardSectionStyle } from "./Cards-types";
import { cardsVoordelen } from "../data/voordelenData";

export default function CardsVoordelen() {
  return (
    <section
      sx={{
        ...cardSectionStyle,
        marginX: ["2", "4"],
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
  );
}
