/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

export default function HeroParagraph() {
  return (
    <div sx={{ maxWidth: "420px" }}>
      <div
        sx={{
          shapeOutside: "ellipse(300px 200px at -80% 50%)",
          clipPath: "ellipse(300px 200px at -80% 50%)",
          width: "300px",
          height: "240px",
          // backgroundColor: "purple",
          // opacity: ".2",
          float: "left",
        }}
      ></div>
      <p sx={{ marginLeft: "4", fontSize: "3" }}>
        <i>flyfi</i> ontwikkelt niet alleen mooie, goed vindbare en supersnelle
        websites, maar biedt deze service ook voor zeer scherpe prijzen aan.
        Hiervoor maken wij gebruik van de nieuwste open source webtechnologiën.
        <br />
        Met <i>flyfi’s</i> moderne webapps bent u de concurrentie één stap
        vooruit.
      </p>
    </div>
  )
}
