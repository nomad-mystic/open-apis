
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            // { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_nodes/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            }

        ]
    }
};