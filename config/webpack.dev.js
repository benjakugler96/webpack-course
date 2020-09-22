const path = require('path');

module.exports = {
	entry: {
		main: ['core-js/fn/promise', './src/main.js'],
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	devServer: {
		contentBase: 'dist',
		overlay: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/,
			},
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
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].html',
						},
					},
					{
						loader: 'extract-loader', // Tells webpack that this is going to be a separate file and not include it the main bundle js
					},
					{
						loader: 'html-loader',
						options: {
							attributes: false,
						},
					}, // Do the linting.
				],
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } },
				],
			},
		],
	},
};
