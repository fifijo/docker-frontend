const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './client/index.js'
    },
    module: {
        rules: [
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        ]
    },
    output: {
        path: path.resolve( __dirname, '../../build' ),
        publicPath: '/',
        filename: '[name].bundle.js',
    }
})
