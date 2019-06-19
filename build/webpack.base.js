const {resolve} = require('path')
const merge = require('webpack-merge')
const {VueLoaderPlugin} = require('vue-loader')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge({
  devtool: 'source-map',
  resolve: {
    modules: [
      resolve('src'),
      'node_modules',
    ],
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx',
      '.scss',
      '.vue',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:jpe?g|gif|png|woff2?)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
          name: '[name]-[hash].[ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico',
      templateParameters: {
        name: '~name~',
      },
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
})
