/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import React from "react"
import portret from "../jpgs/portret-01-small.jpg"

export default function FooterOverMij() {
  return (
    <Box sx={{ marginX: "4", marginTop: "4" }}>
      <Flex>
        <img sx={{ borderRadius: "50%" }} src={portret} />
        <h3 sx={{ fontSize: "5", marginLeft: "3" }}>Over mij</h3>
      </Flex>
      <p sx={{ lineHeight: "body" }}>
        Creativiteit en liefde voor vakwerk zijn de drijfveren van flyfi. Ik
        streef er altijd na om een zo goed mogelijk resultaat neer te zetten,
        als ik websites ontwerp en bouw, maar ook als muzikant en als faire
        verdediger in mijn voetbalelftal. © Heiner S. Behrends, 2020
      </p>
    </Box>
  )
}
