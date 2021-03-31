/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "./Card";
import { cardBorderStyle } from "./Cards-types";
import { SystemStyleObject } from "@styled-system/css";
import { cardSectionStyle } from "./Cards-types";
import { cardsPakketten } from "../data/pakketenData";

const cardsPakkettenStyle: SystemStyleObject = {
  ...cardBorderStyle,
  justifyContent: "space-between",
};

export default function CardsPakketten() {
  return (
    <section sx={cardSectionStyle}>
      {cardsPakketten.map(pakket => (
        <Card
          sx={cardsPakkettenStyle}
          heading={pakket.heading}
          text={pakket.text}
          icon={pakket.icon}
          cta={pakket.cta}
        />
      ))}
    </section>
  );
}
