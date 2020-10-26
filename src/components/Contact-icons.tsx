/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { SystemStyleObject } from "@styled-system/css"
import MailIcon from "../icons/mail_outline-24px.svg"
import PhoneIcon from "../icons/phone-24px.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import TwitterIcon from "../icons/twitter-logo.svg"
import LocationIcon from "../icons/location_on-24px.svg"
import GithubIcon from "../icons/Octicons-mark-github.svg"

const iconLinkStyles: SystemStyleObject = {
  borderRadius: "3",
  padding: "1",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
  svg: {
    fill: "#59bfbf",
    filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25))",
    height: ["90px"],
    width: ["90px"],
  },
}

export default function ContactIcons(props) {
  return (
    <address
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "5",
        marginX: "5",
        marginTop: "4",
      }}
      {...props}
    >
      <a sx={iconLinkStyles} href={"tel:0031658910956"}>
        <PhoneIcon />
      </a>
      <a sx={iconLinkStyles} href={"https://linkedin.com/in/heiner-behrends/"}>
        <LinkedInIcon />
      </a>
      <a sx={iconLinkStyles} href={"https://twitter.com/HSBehrends"}>
        <TwitterIcon />
      </a>
      <a
        sx={iconLinkStyles}
        href={
          "https://www.google.com/maps/place/Travertijnstraat+12,+9743+SZ+Groningen/"
        }
      >
        <LocationIcon />
      </a>
      <a sx={iconLinkStyles} href={"https://github.com/heinerbehrends"}>
        <GithubIcon />
      </a>
      <a sx={iconLinkStyles} href={"mailto:info@flyfi.nl"}>
        <MailIcon />
      </a>
    </address>
  )
}
