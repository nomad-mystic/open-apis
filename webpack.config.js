const webpack = require('webpack');
const path = require('path');
// import 'fs';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin({
//     filename: 'main.css'
// });

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        publicPath: './public/'
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
            },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							}
						},
						{
							loader: 'postcss-loader', // Run post css actions
								options: {
									plugins: function () { // post css plugins, can be exported to postcss.config.js
										return [
											require('precss'),
											require('autoprefixer'),
										];
									},
									sourceMap: true,
								}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
					publicPath: './public/assets/css/',
				}),
			},
        ],
    },
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'Tether': 'tether',
			'Popper': 'popper.js',
			// In case you imported plugins individually, you must also require them here:
			// Util: "exports-loader?Util!bootstrap/js/dist/util",
			// Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
		}),
		new ExtractTextPlugin('assets/css/styles.css'),
	],
};