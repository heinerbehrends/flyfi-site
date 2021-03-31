/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function FooterOverMij() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      file(relativePath: { eq: "portret-01-small.jpg" }) {
        childImageSharp {
          id
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div sx={{ marginX: ["0", "4"] }}>
      <div sx={{ display: "flex", alignItems: "center" }}>
        <Img
          sx={{ borderRadius: "50%" }}
          fixed={data.file.childImageSharp.fixed}
          alt={"a recent portret of me"}
        />
        <Link
          to={"/about"}
          sx={{
            paddingY: 2,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            "&:focus": {
              outline: "none",
              textDecoration: "underline",
            },
          }}
        >
          <Themed.h3 sx={{ fontSize: "5", marginLeft: "3", color: "#333" }}>
            Over mij
          </Themed.h3>
        </Link>
      </div>
      <p sx={{ lineHeight: "body", marginTop: "3" }}>
        Creativiteit en liefde voor vakwerk zijn de drijfveren van flyfi. Ik
        streef er altijd na om een mooi resultaat neer te zetten, als ontwerper
        en programmeur, maar ook als veelzijdige muzikant en als faire
        verdediger in mijn voetbalelftal. <br />
        <br />
        <p>© Heiner S. Behrends, {new Date().getFullYear()}</p>
      </p>
    </div>
  );
}
