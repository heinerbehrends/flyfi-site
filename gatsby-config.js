/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://www.flyfi.com",
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flyfi webdevelopment`,
        short_name: `flyfi.nl`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#9FE5E5`,
        display: `standalone`,
        icon: `src/icons/flyfi-app-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.flyfi.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
