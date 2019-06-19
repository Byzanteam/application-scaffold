const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: "dist",
    disableHostCheck: true,
    historyApiFallback: true,
    host: "0.0.0.0",
  }
})
