/** @jsx jsx */
import { IconButton, jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import MailIcon from "../icons/mail_outline-24px.svg"
import PhoneIcon from "../icons/phone-24px.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import TwitterIcon from "../icons/twitter-logo.svg"
import LocationIcon from "../icons/location_on-24px.svg"
import GithubIcon from "../icons/Octicons-mark-github.svg"

type ContactItemProps = {
  text: string
  location: string
  icon: React.ReactNode
}

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
          outline: "none",
          boxShadow: "focus",
        },
      }}
      href={location}
    >
      <div sx={{ display: "flex", alignItems: "center", padding: "3" }}>
        {icon}

        <p sx={{ marginLeft: "2" }}>{text}</p>
      </div>
    </a>
  )
}

export default function FooterContact() {
  return (
    <address
      sx={{
        marginX: ["0", "3", "4"],
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
        <Styled.h3
          sx={{
            color: "#333",
            textAlign: "left",
            marginLeft: "0",
            marginBottom: "2",
          }}
        >
          Connect
        </Styled.h3>
      </Link>
      {contactInfo.map(item => (
        <ContactItem
          text={item.text}
          location={item.location}
          icon={item.icon}
        />
      ))}
    </address>
  )
}

const contactInfo = [
  {
    text: "info@flyfi.nl",
    location: "mailto:info@flyfi.nl",
    icon: <MailIcon />,
  },
  {
    text: "06-58910956",
    location: "tel:0031658910956",
    icon: <PhoneIcon />,
  },
  {
    text: "linkedin.com/in/heiner-behrends/",
    location: "https://linkedin.com/in/heiner-behrends/",
    icon: <LinkedInIcon />,
  },
  {
    text: "@HSBehrends",
    location: "https://twitter.com/HSBehrends",
    icon: <TwitterIcon />,
  },
  {
    text: "github.com/heinerbehrends",
    location: "https://github.com/heinerbehrends",
    icon: <GithubIcon />,
  },
  {
    text: "Travertijstraat 12, 9743 Groningen",
    location:
      "https://www.google.com/maps/place/Travertijnstraat+12,+9743+SZ+Groningen/",
    icon: <LocationIcon />,
  },
]
