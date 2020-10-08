/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import React from "react"
import portret from "../jpgs/portret-01-small.jpg"

export default function FooterOverMij() {
  return (
    <Box sx={{ marginX: ["0", "4"] }}>
      <Flex sx={{ alignItems: "center" }}>
        <img sx={{ borderRadius: "50%" }} src={portret} />
        <Styled.h3 sx={{ fontSize: "5", marginLeft: "3" }}>Over mij</Styled.h3>
      </Flex>
      <p sx={{ lineHeight: "body" }}>
        Creativiteit en liefde voor vakwerk zijn de drijfveren van flyfi. Ik
        streef er altijd na om een mooi resultaat neer te zetten, als ontwerper
        en programmeur, maar ook als veelzijdige muzikant en als faire
        verdediger in mijn voetbalelftal. <p>© Heiner S. Behrends, 2020</p>
      </p>
    </Box>
  )
}
