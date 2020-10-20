/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function filterByName(images, name) {
  return images.filter(obj => obj.node.base === name)[0].node.childImageSharp
    .fluid
}

type stackItemProps = {
  options: {
    id: number
    columnStart: number
    columnEnd: number
    rowStart: number
    rowEnd: number
    rotate: number
    pictures: any
  }
}

export default function ImageStack() {
  function ImageStackItem({ options }: stackItemProps) {
    return (
      <div
        sx={{
          gridColumnStart: `${options.columnStart}`,
          gridColumnEnd: `${options.columnEnd}`,
          gridRowStart: `${options.rowStart}`,
          gridRowEnd: `${options.rowEnd}`,
          transform: `rotate(${options.rotate}deg)`,
          zIndex: `${onTop === options.id ? 1 : 0}`,
        }}
        onClick={() => setOnTop(options.id)}
      >
        <Img fluid={options.pictures} />
      </div>
    )
  }

  const data = useStaticQuery(graphql`
    query AboutQuery {
      allFile(filter: { relativeDirectory: { eq: "about" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const [onTop, setOnTop] = useState(0)

  const nodes = data.allFile.edges
  const gideon = filterByName(nodes, "CosmicSpringGideon.jpg")
  const koelkast = filterByName(nodes, "Koelkast.jpg")

  const examen = filterByName(nodes, "Examen.jpg")
  const herfst = filterByName(nodes, "Herfst.jpg")
  const toBeOrNotToBe = filterByName(nodes, "to-be-kast-nnt.jpg")
  return (
    <Grid
      sx={{
        gridTemplateColumns:
          "auto auto auto auto auto auto auto auto auto auto",
        gridTemplateRows: "auto auto auto auto auto auto auto auto auto auto",
        minWidth: "400px",
      }}
    >
      <ImageStackItem
        options={{
          pictures: koelkast,
          columnStart: 1,
          columnEnd: 6,
          rowStart: 1,
          rowEnd: 6,
          rotate: 3,
          id: 1,
        }}
      />
      <ImageStackItem
        options={{
          pictures: examen,
          columnStart: 2,
          columnEnd: 7,
          rowStart: 2,
          rowEnd: 7,
          rotate: -2,
          id: 2,
        }}
      />
      <ImageStackItem
        options={{
          pictures: gideon,
          columnStart: 2,
          columnEnd: 8,
          rowStart: 3,
          rowEnd: 8,
          rotate: 4,
          id: 3,
        }}
      />
      <ImageStackItem
        options={{
          pictures: herfst,
          columnStart: 1,
          columnEnd: 8,
          rowStart: 4,
          rowEnd: 8,
          rotate: -2,
          id: 4,
        }}
      />
      <ImageStackItem
        options={{
          pictures: toBeOrNotToBe,
          columnStart: 3,
          columnEnd: 8,
          rowStart: 5,
          rowEnd: 10,
          rotate: 2,
          id: 4,
        }}
      />
    </Grid>
  )
}
