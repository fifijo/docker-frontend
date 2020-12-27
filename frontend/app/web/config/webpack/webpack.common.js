const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  stats: 'errors-only',
  context: path.join(__dirname, '../../src/'),
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../src/client/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      inject: 'body'
    })
  ]
}
