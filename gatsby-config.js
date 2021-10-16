const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://seyedalirezafatemi.github.io",
    title: "Seyed Alireza FatemiJahromi",
    description: "Personal Website of Seyed Alireza FatemiJahromi",
    author: "Seyed Alireza FatemiJahromi",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Seyed Alireza FatemiJahromi",
        short_name: "FatemiJahromi",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#fafafa",
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        display: "standalone",
        icon: "static/icon.png",
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
}
