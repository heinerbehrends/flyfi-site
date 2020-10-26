/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import * as React from "react"
import { useState } from "react"
import Accordion from "../components/Accordion"

export default function FAQs() {
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <React.Fragment>
      <Styled.h1>Vaak gestelde vragen</Styled.h1>
      <main sx={{ maxWidth: "60ch", marginX: "auto" }}>
        {faqs.map((faq, i) => (
          <Accordion
            i={i}
            faq={faq}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </main>
    </React.Fragment>
  )
}

const faqs = [
  {
    vraag: "Wat is een Progressive Web App?",
    antwoord: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    vraag: "Hoe maak je een site sneller?",
    antwoord: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    vraag: "Hoe worden de foto's geoptimaliseerd?",
    antwoord: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
]
