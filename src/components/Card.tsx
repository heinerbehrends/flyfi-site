/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type CardProps = {
  icon?: React.ReactNode
  cta?: React.ReactNode
  heading: string
  text: string
}

export default function Card({ icon, heading, text, cta, ...rest }: CardProps) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      {...rest}
      style={{ opacity: 0 }}
      ref={ref}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      sx={{
        padding: ["3", "4"],
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Flex sx={{ alignItems: "center", fontSize: "5" }}>
          {icon}
          <Styled.h3
            sx={{
              marginLeft: icon ? "3" : "0",
            }}
          >
            {heading}
          </Styled.h3>
        </Flex>
        <p
          sx={{
            marginBlockEnd: "0",
            marginBlockStart: "0",
            marginTop: ["3", "4"],
            lineHeight: "body",
            color: "text",
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </p>
      </div>
      {cta}
    </motion.div>
  )
}
