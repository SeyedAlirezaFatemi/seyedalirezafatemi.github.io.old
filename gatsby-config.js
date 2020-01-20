module.exports = {
  siteMetadata: {
    title: `Seyed Alireza Fatemi Jahromi`,
    description: `Seyed Alireza Fatemi Jahromi`,
    author: `Seyed Alireza Fatemi Jahromi`,
  },
  plugins: [
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
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
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
  ],
}
