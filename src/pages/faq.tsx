/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import React from "react"
import Accordion from "../components/Accordion"

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
    antwoord: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
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

export default function FAQ() {
  return (
    <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
      <Styled.h1>Vaak gestelde vragen</Styled.h1>
      <Accordion items={faqs} />
    </Flex>
  )
}
