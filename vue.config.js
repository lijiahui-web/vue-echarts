const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV == "development" ? "./" : "https://github.com/lijiahui-web/vue-echarts/tree/master/dist",
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