const webpack = require('webpack')
module.exports = {
  outputDir: "docs",
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ],
    externals: { "BMap": "BMap" }
  }
}