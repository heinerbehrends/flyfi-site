import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MotionConfig, AnimationFeature } from "framer-motion"

export default function Layout({ children }) {
  return (
    <MotionConfig features={[AnimationFeature]}>
      <Header />
      {children}
      <Footer />
    </MotionConfig>
  )
}
