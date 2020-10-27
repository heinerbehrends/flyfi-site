import React from "react"
import { Helmet } from "react-helmet"

type SEOProps = {
  description: string
}

export default function SEO({ description }: SEOProps) {
  return (
    <Helmet>
      <title>Flyfi webdevelopment</title>
      <meta
        name="description"
        content="Webbureau flyfi is gespecialiseerd in Progressive Web Apps"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  )
}
