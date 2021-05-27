/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Link } from "gatsby";
import { footerOverMijText } from "../data/aboutData";

export default function FooterOverMij() {
  return (
    <article sx={{ marginX: ["0", "4"], marginTop: "4" }}>
      <h3>
        <Link
          to={"/about"}
          sx={{
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            "&:focus": {
              outline: "none",
              textDecoration: "underline",
            },
          }}
        >
          <Themed.h3 sx={{ fontSize: "5", color: "#333", marginLeft: 0 }}>
            Over mij
          </Themed.h3>
        </Link>
      </h3>
      <p sx={{ lineHeight: "body", marginTop: "3" }}>
        {footerOverMijText}
        <br />
        <br />
        <p>© Heiner S. Behrends, {new Date().getFullYear()}</p>
      </p>
    </article>
  );
}
