/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function FooterOverMij() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "portret-01-small.jpg" }) {
        childImageSharp {
          id
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data.file.childImageSharp.fixed)
  return (
    <Box sx={{ marginX: ["0", "4"] }}>
      <Flex sx={{ alignItems: "center" }}>
        <Img
          sx={{ borderRadius: "50%" }}
          fixed={data.file.childImageSharp.fixed}
          alt={"a recent portret of me"}
        />
        <Styled.h3 sx={{ fontSize: "5", marginLeft: "3" }}>Over mij</Styled.h3>
      </Flex>
      <p sx={{ lineHeight: "body", marginTop: "3" }}>
        Creativiteit en liefde voor vakwerk zijn de drijfveren van flyfi. Ik
        streef er altijd na om een mooi resultaat neer te zetten, als ontwerper
        en programmeur, maar ook als veelzijdige muzikant en als faire
        verdediger in mijn voetbalelftal. <p>© Heiner S. Behrends, 2020</p>
      </p>
    </Box>
  )
}
