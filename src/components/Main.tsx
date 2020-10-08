/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import CardsVoordelen from "./Cards-voordelen"

export default function Main() {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  })
  const [ref2, inView2] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  })
  console.log(inView)
  return (
    <React.Fragment>
      <motion.h2
        ref={ref}
        animate={{ x: inView ? 0 : -800 }}
        sx={{
          marginTop: ["5"],
          fontSize: ["5", "6"],
          marginX: ["3", "3", "4", "5"],
          fontWeight: "900",
        }}
      >
        De voordelen van <i>flyfi</i> webapps {inView}
      </motion.h2>
      <CardsVoordelen />
      <motion.h3
        ref={ref2}
        animate={{ x: inView2 ? 0 : -800 }}
        sx={{
          marginTop: ["5"],
          fontSize: ["4", "5"],
          marginX: ["3", "3", "4", "5"],
          fontWeight: "900",
        }}
      >
        53% van alle bezoekers haakt af als een site langer dan 3 seconden
        laadt.
      </motion.h3>
    </React.Fragment>
  )
}
