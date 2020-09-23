/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import React from "react"
import { motion } from "framer-motion"
import Greyhound from "./Greyhound"
import Button from "./Button"
import HeroParagraph from "./HeroParagraph"

export default function Hero() {
  return (
    <Box
      sx={{
        maxWidth: "960px",
        marginX: "auto",
      }}
    >
      <h1
        sx={{
          fontSize: "7",
          textAlign: "center",
          fontWeight: "thin",
          lineHeight: "heading",
        }}
      >
        Supersnelle webapps voor iedereen
      </h1>

      <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
        <motion.div animate={{ x: 500 }} transition={{ duration: 2 }}>
          <Greyhound />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          sx={{
            maxWidth: "360px",
            lineHeight: "body",
            opacity: "0",
          }}
        >
          <HeroParagraph />
        </motion.div>
      </Flex>
      <Box sx={{ textAlign: "center", marginTop: "4" }}>
        <Button text="Nieuwsgierig?" location="/contact" />
      </Box>
    </Box>
  )
}
