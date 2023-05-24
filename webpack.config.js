const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'content-script.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	devtool: 'source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/styles.css',
		}),
	],
};
