/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import PlusIcon from "../icons/add_circle_outline-24px.svg"
import MinIcon from "../icons/remove_circle_outline-24px.svg"

export default function Accordion({ i, expanded, setExpanded, faq }) {
  const isOpen = i === expanded

  return (
    <React.Fragment>
      <motion.button
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "inherit",
          width: "60ch",
          backgroundColor: "inherit",
          border: "none",
          fontSize: "4",
          fontFamily: "fira sans",
          fontWeight: "bold",
          paddingX: "3",
          paddingY: "3",
          borderRadius: "3",
          "&:focus": {
            outline: "none",
            boxShadow: "focus",
          },
        }}
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h2>{faq.vraag}</h2>
        {isOpen ? <MinIcon /> : <PlusIcon />}
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            sx={{ overflow: "hidden" }}
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
    </React.Fragment>
  )
}
