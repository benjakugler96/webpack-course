const path = require('path');

module.exports = {
	entry: {
		main: './src/main.js',
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	devServer: {
		contentBase: 'dist',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// This will run in reverse order
					{
						loader: 'style-loader', // This loader is responsible of injecting the css to the files.
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
};
