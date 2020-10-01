/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Greyhound from "./Greyhound"
import Button from "./Button"
import HeroParagraph from "./HeroParagraph"

export default function Hero() {
  const { scrollYProgress } = useViewportScroll()
  const xPos = useTransform(scrollYProgress, [0, 0.5], [0, 1200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleButton = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.25])

  return (
    <Box
      sx={{
        maxWidth: "960px",
        marginX: "auto",
        paddingY: "5",
      }}
    >
      <Styled.h1 sx={{ fontSize: ["5", "6", "6", "7"], marginTop: ["3", "5"] }}>
        Supersnelle webapps voor iedereen
      </Styled.h1>

      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3",
          flexDirection: ["column", "column", "column", "row"],
        }}
      >
        <motion.div
          animate={{ x: [0, 0, 700] }}
          transition={{ times: [0, 0.3, 1], duration: 3, ease: "easeOut" }}
        >
          <motion.div style={{ x: xPos }}>
            <Greyhound />
          </motion.div>
        </motion.div>
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
      <motion.div style={{ scale: scaleButton }}>
        <Box sx={{ textAlign: "center", marginTop: ["3", "5"] }}>
          <Button text="NIEUWSGIERIG?" location="/" />
        </Box>
      </motion.div>
    </Box>
  )
}
