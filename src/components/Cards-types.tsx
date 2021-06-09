/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import React from "react";
import Card from "./Card";
import { cardsTypes } from "../data/typesData";

export const cardBorderStyle: ThemeUIStyleObject = {
  borderWidth: "2px",
  borderColor: "secondary",
  borderStyle: "dashed",
  borderRadius: "3",
};

export const cardSectionStyle: ThemeUIStyleObject = {
  display: "grid",
  gridTemplateColumns: [
    "repeat(auto-fill, minmax(30ch, 1fr))",
    "repeat(auto-fill, minmax(45ch, 1fr))",
  ],
  gap: "4",
  maxWidth: "1280px",
  marginX: ["2", "3", "4", "5 "],
  marginTop: "4",
};

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
  );
}
