/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { m as motion, MotionConfig, AnimationFeature } from "framer-motion"
import { useInView } from "react-intersection-observer"

type CardProps = {
  icon?: React.ReactNode
  cta?: React.ReactNode
  heading: string
  text: React.ReactNode
}

export default function Card({ icon, heading, text, cta, ...rest }: CardProps) {
  const [ref, inView] = useInView()
  return (
    <MotionConfig features={[AnimationFeature]}>
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
          <div sx={{ display: "flex", alignItems: "center", fontSize: "5" }}>
            <span sx={{ fill: "accent" }}>{icon}</span>
            <Styled.h3
              sx={{
                marginLeft: icon ? "3" : "0",
              }}
            >
              {heading}
            </Styled.h3>
          </div>
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
    </MotionConfig>
  )
}
