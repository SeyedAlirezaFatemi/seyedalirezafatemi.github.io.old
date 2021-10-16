const path = require("path")

module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@section": path.resolve(__dirname, "src/components"),
      },
    },
  })
}
