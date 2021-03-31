import MailIcon from "../icons/mail_outline-24px.svg";
import PhoneIcon from "../icons/phone-24px.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import TwitterIcon from "../icons/twitter-logo.svg";
import LocationIcon from "../icons/location_on-24px.svg";
import GithubIcon from "../icons/Octicons-mark-github.svg";

export type Contact = { text: string; location: string; icon: React.ReactNode };

export const contactInfo: Contact[] = [
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
];
