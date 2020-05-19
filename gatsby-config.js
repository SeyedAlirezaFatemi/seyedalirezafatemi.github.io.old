const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Seyed Alireza Fatemi Jahromi`,
    description: `Seyed Alireza Fatemi Jahromi`,
    author: `Seyed Alireza Fatemi Jahromi`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seyed Alireza Fatemi Jahromi`,
        short_name: `Fatemi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-107408319-2",
        // Puts tracking script in the head instead of the body
        // head: false,
        // enable ip anonymization
        // anonymize: true,
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
}
