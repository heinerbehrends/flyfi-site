/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import * as React from "react"
import {
  m as motion,
  AnimatePresence,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
} from "framer-motion"
import PlusIcon from "../icons/add_circle_outline-24px.svg"
import MinIcon from "../icons/remove_circle_outline-24px.svg"

export default function Accordion({ i, expanded, setExpanded, faq }) {
  const isOpen = i === expanded

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <button
        id={`accordion-button-0${i}`}
        aria-controls={`accordion-panel-0${i}`}
        aria-expanded={isOpen ? true : false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "inherit",
          width: "100%",
          backgroundColor: "inherit",
          border: "none",
          fontSize: ["3", "4"],
          fontFamily: "fira sans",
          fontWeight: "bold",
          paddingX: "3",
          paddingY: "3",
          borderRadius: "3",
          cursor: "pointer",
          "&:focus": {
            outline: "none",
            boxShadow: "focus",
          },
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h2 sx={{ textAlign: "left", color: "text" }}>{faq.vraag}</h2>
        {isOpen ? (
          <MinIcon sx={{ fill: "text", minWidth: "32px" }} />
        ) : (
          <PlusIcon sx={{ fill: "text", minWidth: "32px" }} />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            id={`accordion-panel-0${i}`}
            aria-labelledby={`accordion-button-0${i}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            sx={{ overflow: "hidden", maxWidth: "72ch" }}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Styled.p sx={{ paddingX: "3" }}>{faq.antwoord}</Styled.p>
          </motion.section>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
