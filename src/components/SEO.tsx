import React from "react"
import { Helmet } from "react-helmet"
import OGImage from "../../static/og-image.png"

type SEOProps = {
  description: string
}

export default function SEO({ description }: SEOProps) {
  return (
    <Helmet>
      <title>flyfi web development</title>
      <meta name="description" content={description} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content="Webbureau flyfi - de specialist in snelle web apps"
      />
      <meta property="og:url" content="https://www.flyfi.nl" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.flyfi.nl/static/og-image.png"
      />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>
  )
}
