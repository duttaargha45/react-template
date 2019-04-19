const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './bundle.js'
	},
	mode: 'development',
	devServer: {
		open: true,
		hot: true
	},
	module: {
		rules: [  
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}  
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' })
	]
}
