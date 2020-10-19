/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CardsVoordelen from "./Cards-voordelen"
import CardsTypes from "./Cards-types"
import CardsPakketten from "./Cards-pakketten"
import { SystemStyleObject } from "@styled-system/css"

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
      <motion.div ref={ref} animate={{ x: inView ? 0 : -800 }}>
        <Styled.h2>
          De voordelen van <i>flyfi</i> webapps {inView}
        </Styled.h2>
      </motion.div>
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
      <motion.div ref={ref3} animate={{ x: inView3 ? 0 : -800 }}>
        <Styled.h2>Hoe kan ik u helpen?</Styled.h2>
      </motion.div>
      <CardsTypes />
      <motion.div ref={ref4} animate={{ x: inView4 ? 0 : -800 }}>
        <Styled.h2>Maatwerk of starterspakket?</Styled.h2>
      </motion.div>
      <CardsPakketten />
    </React.Fragment>
  )
}
