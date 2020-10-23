/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, { useState } from "react"
import { motion } from "framer-motion"
import PlusIcon from "../icons/add_circle_outline-24px.svg"
import MinIcon from "../icons/remove_circle_outline-24px.svg"

type faqT = {
  vraag: string
  antwoord: string
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  function isOpen(id, openIndex) {
    return id === openIndex
  }
  function setIndex(id, openIndex) {
    if (isOpen(id, openIndex)) {
      setOpenIndex(0)
    } else setOpenIndex(id)
  }
  function AccordionItem({ vraag, antwoord, id }) {
    return (
      <div sx={{ height: `${isOpen(id, openIndex) ? "auto" : "62px"}` }}>
        <button
          aria-controls={`accordion-panel-0${id}`}
          aria-expanded={isOpen(id, openIndex) ? true : false}
          id={`accordion-button-0${id}`}
          onClick={() => setIndex(id, openIndex)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "inherit",
            backgroundColor: "#fff",
            width: "100%",
            border: "none",
            fontSize: "4",
            fontFamily: "fira sans",
            paddingX: "3",
            paddingY: "3",
          }}
        >
          <h2 sx={{ width: "66ch", textAlign: "left" }}>{vraag}</h2>
          {isOpen(id, openIndex) ? <MinIcon /> : <PlusIcon />}
        </button>
        <Styled.p
          id={`accordion-panel-0${id}`}
          aria-labelledby={`accordion-button-0${id}`}
          sx={{
            paddingX: "3",
            display: `${isOpen(id, openIndex) ? "block" : "none"}`,
          }}
        >
          {antwoord}
        </Styled.p>
      </div>
    )
  }

  return (
    <section sx={{ maxWidth: "66ch", marginTop: "4" }}>
      {items.map((faq: faqT, i: number) => (
        <AccordionItem vraag={faq.vraag} antwoord={faq.antwoord} id={i + 1} />
      ))}
    </section>
  )
}
