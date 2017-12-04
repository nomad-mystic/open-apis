const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin({
//     filename: 'main.css'
// });

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        publicPath: './public/assets/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
            // ,
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     use: extractPlugin.extract({
            //         use: ['css-loader', 'sass-loader', 'postcss-loader']
            //     })
            // }

        ]
    }
};