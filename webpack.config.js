const path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'content-script.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
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
		],
	},
};
