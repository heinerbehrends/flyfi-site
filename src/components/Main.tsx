/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import CardsVoordelen from "./Cards-voordelen"
import CardsTypes from "./Cards-types"
import CardsPakketten from "./Cards-pakketten"

export default function Main() {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  })
  const [ref2, inView2] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  })
  const [ref3, inView3] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  })
  const [ref4, inView4] = useInView({
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
        animate={{ opacity: inView2 ? 1 : 0 }}
        sx={{
          backgroundColor: "muted",
          color: "#fff",
          width: "100%",
          marginTop: ["5"],
          fontSize: ["4", "5"],
          paddingX: ["3", "3", "4", "5"],
          paddingY: "3",
          fontWeight: "900",
        }}
      >
        Wist u dat 53% van alle bezoekers afhaken als een site langer dan 3
        seconden laadt?
      </motion.h3>
      <motion.h2
        ref={ref3}
        animate={{ x: inView3 ? 0 : -800 }}
        sx={{
          marginTop: ["5"],
          fontSize: ["5", "6"],
          marginX: ["3", "3", "4", "5"],
          fontWeight: "900",
        }}
      >
        Hoe kan ik u helpen?
      </motion.h2>
      <CardsTypes />
      <motion.h2
        ref={ref4}
        animate={{ x: inView4 ? 0 : -800 }}
        sx={{
          marginTop: ["5"],
          fontSize: ["5", "6"],
          marginX: ["3", "3", "4", "5"],
          fontWeight: "900",
        }}
      >
        Profiteer nu van onze pakketten
      </motion.h2>
      <CardsPakketten />
    </React.Fragment>
  )
}
