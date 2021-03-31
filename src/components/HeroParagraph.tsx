/** @jsx jsx */
import { jsx } from "theme-ui";
import { heroText } from "../data/tekstData";

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
          marginTop: ["4", "0"],
          marginX: ["3", "0"],
          fontSize: ["2", "2", "3"],
          maxWidth: "400px",
          lineHeight: "body",
          "@keyframes fadeIn": {
            from: { opacity: "0" },
            to: { opacity: "1" },
          },
          animation: "fadeIn 1s",
        }}
      >
        {heroText}
      </p>
    </div>
  );
}
