/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { contactInfo, Contact } from "../data/contactData";

type ContactItemProps = {
  text: string;
  location: string;
  icon: React.ReactNode;
};

function ContactItem({ icon, text, location }: ContactItemProps) {
  return (
    <a
      sx={{
        display: "block",
        color: "#333",
        fontSize: "2",
        marginLeft: "-16px",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
        "&:focus": {
          textDecoration: "underline",
        },
      }}
      href={location}
    >
      <div sx={{ display: "flex", alignItems: "center", padding: "3" }}>
        {icon}

        <p sx={{ marginLeft: "2" }}>{text}</p>
      </div>
    </a>
  );
}

export default function FooterContact() {
  return (
    <address
      sx={{
        marginX: ["0", "4"],
        marginTop: ["3", "4"],
        fontStyle: "normal",
      }}
    >
      <Link
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
          "&:focus": {
            outline: "none",
            textDecoration: "underline",
          },
        }}
        to={"/contact"}
      >
        <Themed.h3
          sx={{
            color: "#333",
            textAlign: "left",
            marginLeft: "0",
            marginBottom: ["1", "2"],
          }}
        >
          Connect
        </Themed.h3>
      </Link>
      {contactInfo.map((item: Contact) => (
        <ContactItem
          text={item.text}
          location={item.location}
          icon={item.icon}
        />
      ))}
    </address>
  );
}
