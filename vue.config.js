const webpack = require('webpack')
module.exports = {
  publicPath: './',
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