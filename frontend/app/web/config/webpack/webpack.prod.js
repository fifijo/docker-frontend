const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    entry: {
      app: 'client/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../build'),
        publicPath: '/',
        filename: '[name][contenthash].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})
