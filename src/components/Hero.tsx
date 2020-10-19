/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Greyhound from "./Greyhound"
import Button from "./Button"
import HeroParagraph from "./HeroParagraph"

export default function Hero() {
  const { scrollYProgress } = useViewportScroll()
  const xPos = useTransform(scrollYProgress, [0, 0.075, 0.15], [0, 50, 1200])
  const opacity = useTransform(scrollYProgress, [0, 0.075, 0.15], [1, 1, 0])
  const [ref, inView] = useInView({
    initialInView: true,
  })
  return (
    <Box
      sx={{
        paddingTop: ["3", "4", "4", "5"],
        maxWidth: "960px",
        marginX: "auto",
      }}
    >
      <Styled.h1>Supersnelle webapps voor iedereen</Styled.h1>

      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3",
          flexDirection: ["column", "column", "column", "row"],
        }}
      >
        <motion.div
          sx={{ display: `${inView ? "block" : "none"}` }}
          ref={ref}
          animate={{ x: [0, 0, 800] }}
          transition={{ times: [0, 0.3, 1], duration: 3, ease: "easeOut" }}
        >
          <motion.div style={{ x: xPos }}>
            <Greyhound />
          </motion.div>
        </motion.div>
        {inView ? null : <Greyhound sx={{ position: "static" }} />}
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          sx={{
            maxWidth: "400px",
            lineHeight: "body",
            opacity: "0",
          }}
        >
          <motion.div style={{ opacity: opacity }}>
            <HeroParagraph />
          </motion.div>
        </motion.div>
      </Flex>
      <Box sx={{ textAlign: "center", marginTop: ["3", "4"] }}>
        <Button text="NIEUWSGIERIG?" location="/contact" />
      </Box>
    </Box>
  )
}
