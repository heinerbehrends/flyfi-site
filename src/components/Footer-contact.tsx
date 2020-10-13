/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React from "react"
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
    <Flex sx={{ alignItems: "center", marginTop: "2" }}>
      {icon}
      <a
        sx={{
          color: "text",
          padding: "2",
          marginLeft: "2",
          fontSize: "2",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
          "&:focus": {
            outline: "none",
            boxShadow: "focus",
          },
        }}
        href={location}
      >
        {text}
      </a>
    </Flex>
  )
}

export default function FooterContact() {
  return (
    <address sx={{ marginX: "4", fontStyle: "normal" }}>
      <Styled.h3 sx={{ textAlign: "left", marginLeft: "0" }}>Connect</Styled.h3>
      <ContactItem
        text={"info@flyfi.nl"}
        location={"mailto:info@flyfi.nl"}
        icon={<MailIcon />}
      />
      <ContactItem
        text={"06-58910956"}
        location={"tel:0031658910956"}
        icon={<PhoneIcon />}
      />

      <ContactItem
        text={"linkedin.com/in/heiner-behrends/"}
        location={"https://linkedin.com/in/heiner-behrends/"}
        icon={<LinkedInIcon />}
      />

      <ContactItem
        text={"@HSBehrends"}
        location={"https://twitter.com/HSBehrends"}
        icon={<TwitterIcon />}
      />
      <ContactItem
        text={"github.com/heinerbehrends"}
        location={"https://github.com/heinerbehrends"}
        icon={<GithubIcon />}
      />
      <ContactItem
        text={"Travertijstraat 12, 9743 Groningen"}
        location={
          "https://www.google.com/maps/place/Travertijnstraat+12,+9743+SZ+Groningen/"
        }
        icon={<LocationIcon />}
      />
    </address>
  )
}
