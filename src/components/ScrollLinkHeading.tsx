/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Link as ScrollLink } from "react-scroll/";
import { Faq } from "../data/faqData";
import ArrowDownIcon from "../icons/arrow_circle_down-24px.svg";

export type FAQProps = { faq: Faq; index: number };

export default function ScrollLinkHeading({ faq, index }: FAQProps) {
  return (
    <ScrollLink
      href={"/"}
      sx={{
        "&:hover": {
          textDecoration: "underline",
          cursor: "pointer",
        },
      }}
      to={`question${index}`}
      smooth={true}
      offset={-150}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <div
          sx={{
            fill: "text",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ArrowDownIcon />
        </div>
        <Themed.h3 sx={{ marginX: 0, paddingLeft: 3 }} key={index}>
          {faq.vraag}
        </Themed.h3>
      </div>
    </ScrollLink>
  );
}
