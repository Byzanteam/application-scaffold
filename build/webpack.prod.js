const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash].js',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({sourceMap: true}),
    ],
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      minSize: 32768,
    },
  },
})
