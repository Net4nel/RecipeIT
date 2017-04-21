// var path = require('path')
// var webpack = require('webpack')
//
// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loaders: [ 'babel' ],
//         exclude: /node_modules/,
//         include: __dirname
//       }
//     ]
//   }
// }
//


const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const source = path.join(__dirname, '');
const dest = path.join(__dirname, 'bundle');

module.exports = {
    context: source,
    entry: {
        app: ['babel-polyfill','./index.js']
    },
    output: {
        path: dest,
        filename: '[name].bundle.js'
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(ttf|eot|svg|png|gif|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].style.css")
    ],
    resolve: {
        root: [
            path.resolve('./')
        ]
    }
};