/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CardsVoordelen from "./Cards-voordelen"
import CardsTypes from "./Cards-types"
import CardsPakketten from "./Cards-pakketten"
import { SystemStyleObject } from "@styled-system/css"

const h2Style: SystemStyleObject = {
  marginTop: "5",
  marginBottom: "4",
  fontSize: ["5", "6"],
  marginX: ["3", "3", "4", "5"],
  fontWeight: "900",
}

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

  return (
    <React.Fragment>
      <motion.h2 ref={ref} animate={{ x: inView ? 0 : -800 }} sx={h2Style}>
        De voordelen van <i>flyfi</i> webapps {inView}
      </motion.h2>
      <CardsVoordelen />
      <motion.blockquote
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
          whiteSpace: "pre-line",
        }}
      >
        Wist u dat 53% van alle bezoekers afhaken <br></br>als een site langer
        dan 3 seconden laadt?
      </motion.blockquote>
      <motion.h2 ref={ref3} animate={{ x: inView3 ? 0 : -800 }} sx={h2Style}>
        Hoe kan ik u helpen?
      </motion.h2>
      <CardsTypes />
      <motion.h2 ref={ref4} animate={{ x: inView4 ? 0 : -800 }} sx={h2Style}>
        Maatwerk of starterspakket?
      </motion.h2>
      <CardsPakketten />
    </React.Fragment>
  )
}
