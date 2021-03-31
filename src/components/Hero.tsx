/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import Greyhound from "./Greyhound";
import Button from "./Button";
import HeroParagraph from "./HeroParagraph";

export default function Hero() {
  return (
    <div
      sx={{
        maxWidth: "960px",
        marginX: "auto",
      }}
    >
      <Themed.h1 sx={{ textAlign: "right" }}>
        Specialist in moderne snelle webapps
      </Themed.h1>

      <section
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3",
          flexDirection: ["column", "column", "column", "row"],
        }}
      >
        <Greyhound />
        <HeroParagraph />
      </section>
      <div sx={{ textAlign: "center", marginTop: ["3", "4"] }}>
        <Button text="Nieuwsgierig?" location="/contact" />
      </div>
    </div>
  );
}
