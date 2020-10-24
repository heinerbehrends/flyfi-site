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
    alt: string
  }
}

export default function ImageStack() {
  function ImageStackItem({ options }: stackItemProps) {
    let isFocused = onTop === options.id
    return (
      <div
        sx={{
          gridColumnStart: `${options.columnStart}`,
          gridColumnEnd: `${options.columnEnd}`,
          gridRowStart: `${options.rowStart}`,
          gridRowEnd: `${options.rowEnd}`,
          transform: `rotate(${options.rotate}deg)`,
          zIndex: `${isFocused ? 1 : 0}`,
          height: "fit-content",
          boxShadow: "big",
          filter: `${isFocused ? "brightness(100%)" : "brightness(60%)"}`,
        }}
        onClick={() => setOnTop(options.id)}
        onMouseEnter={() => setOnTop(options.id)}
      >
        <Img fluid={options.pictures} alt={options.alt} />
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
  const hetDakje = filterByName(nodes, "HetDakje.jpg")
  const theBuzz = filterByName(nodes, "The-Buzz-Winterwelvaart-01.jpg")
  const zomor = filterByName(nodes, "zomor-kampioenen-7.jpg")
  const horumersiel = filterByName(nodes, "Horumersiel.jpg")
  return (
    <Grid
      sx={{
        gridTemplateColumns: "repeat(auto-fill, 1fr)",

        gridTemplateRows: "repeat(auto-fill, 1fr)",
        minWidth: ["280px", "320px", "400px", "400px"],
      }}
    >
      <ImageStackItem
        options={{
          pictures: koelkast,
          alt: "Tentoonstelling in Galerie Sign",
          columnStart: 5,
          columnEnd: 11,
          rowStart: 1,
          rowEnd: 5,
          rotate: 3,
          id: 1,
        }}
      />
      <ImageStackItem
        options={{
          pictures: examen,
          alt: "Eindexamen Academie Minerva",
          columnStart: 4,
          columnEnd: 10,
          rowStart: 2,
          rowEnd: 6,
          rotate: -2,
          id: 2,
        }}
      />
      <ImageStackItem
        options={{
          pictures: gideon,
          alt: "Optreden met Cosmic Spring",
          columnStart: 2,
          columnEnd: 11,
          rowStart: 3,
          rowEnd: 7,
          rotate: 4,
          id: 3,
        }}
      />
      <ImageStackItem
        options={{
          pictures: herfst,
          alt: "Familiefoto met herfstbladeren",
          columnStart: 1,
          columnEnd: 10,
          rowStart: 4,
          rowEnd: 8,
          rotate: -2,
          id: 4,
        }}
      />
      <ImageStackItem
        options={{
          pictures: toBeOrNotToBe,
          alt: "Decorbouw Hamlet voor NNT",
          columnStart: 6,
          columnEnd: 12,
          rowStart: 5,
          rowEnd: 9,
          rotate: -4,
          id: 5,
        }}
      />
      <ImageStackItem
        options={{
          pictures: hetDakje,
          alt: "Aankleding stadsschouwburg voor NNT",
          columnStart: 3,
          columnEnd: 12,
          rowStart: 6,
          rowEnd: 10,
          rotate: 5,
          id: 6,
        }}
      />
      <ImageStackItem
        options={{
          pictures: theBuzz,
          alt: "Bandfoto The Buzz",
          columnStart: 2,
          columnEnd: 11,
          rowStart: 7,
          rowEnd: 11,
          rotate: -3,
          id: 7,
        }}
      />
      <ImageStackItem
        options={{
          pictures: zomor,
          alt: "Voetbalteam Zomor",
          columnStart: 1,
          columnEnd: 11,
          rowStart: 9,
          rowEnd: 12,
          rotate: 2,
          id: 8,
        }}
      />
      <ImageStackItem
        options={{
          pictures: horumersiel,
          alt: "Vakantiefoto Noordzeekust",
          columnStart: 5,
          columnEnd: 12,
          rowStart: 8,
          rowEnd: 13,
          rotate: 1,
          id: 9,
        }}
      />
    </Grid>
  )
}
