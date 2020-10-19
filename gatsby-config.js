const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: 'https://seyedalirezafatemi.github.io',
    title: `Seyed Alireza Fatemi Jahromi`,
    description: `Personal Website of Seyed Alireza Fatemi Jahromi`,
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
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-preact`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
}
