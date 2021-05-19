/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Link } from "gatsby";

type FooterLinkProps = {
  text: string;
  location: string;
};

function FooterLink({ text, location }: FooterLinkProps) {
  return (
    <Link
      sx={{
        display: "block",
        color: "#333",
        fontSize: "3",
        padding: "3",
        marginLeft: "-16px",
        fontWeight: "medium",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
        "&:focus": {
          outline: "none",
          textDecoration: "underline",
        },
      }}
      to={`${location}/`}
    >
      {text}
    </Link>
  );
}

export default function FooterLinks() {
  return (
    <nav sx={{ marginX: ["0", "4"], marginTop: ["3", "4"] }}>
      <Themed.h3
        sx={{
          textAlign: "left",
          marginLeft: "0",
          marginBottom: ["1", "2"],
          color: "#333",
        }}
      >
        Menu
      </Themed.h3>
      <FooterLink location={"/contact"} text={"Contact"} />
      <FooterLink location={"/about"} text={"Over mij"} />
      <FooterLink location={"/faq"} text={"FAQ"} />
      <FooterLink
        location={"/algemene-voorwarden"}
        text={"Algemene voorwarden"}
      />
    </nav>
  );
}
