/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

export default function HeroParagraph() {
  return (
    <div sx={{ maxWidth: "420px" }}>
      <div
        sx={{
          display: ["none", "none", "none", "inherit"],
          shapeOutside: "ellipse(300px 200px at -80% 50%)",
          clipPath: "ellipse(300px 200px at -80% 50%)",
          width: "300px",
          height: "240px",
          float: "left",
        }}
      ></div>
      <p
        sx={{
          marginLeft: ["0", "0", "0", "4"],
          marginTop: ["4", "3"],
          marginX: ["3", "0"],
          fontSize: ["2", "2", "3"],
          maxWidth: "400px",
          lineHeight: "body",
          "@keyframes fadeIn": {
            from: { opacity: "0" },
            to: { opacity: "1" },
          },
          animation: "fadeIn 2s",
        }}
      >
        <i>flyfi</i> ontwikkelt niet alleen mooie, goed vindbare en supersnelle
        websites, maar biedt deze service ook voor zeer scherpe prijzen aan.
        <br />
        Ik gebruik de nieuwste open source software om het beste van mobiele
        apps en het web te combineren.
        {/* Met <i>flyfi’s</i> moderne webapps bent u de concurrentie één stap
        vooruit. */}
      </p>
    </div>
  )
}
