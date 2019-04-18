const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './js/bundle.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new CleanWebpackPlugin({})
	] 
}
