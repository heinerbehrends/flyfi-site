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
      <p sx={{ marginLeft: "4" }}>
        Ik ben er trots op dat flyfi niet alleen mooie, goed vindbare en
        supersnelle websites bouwt, maar dat ik deze service ook voor zeer
        scherpe prijzen aan kan bieden. Ik maak gebruik van de nieuwste open
        source webtechnologien zodat uw nieuwe webapp ook over een aantal jaren
        nog helemaal up to date is. <br></br>Met flyfi’s moderne webapps bent u
        de concurrentie een stap vooruit.
      </p>
    </div>
  )
}
