const path = require("path");

module.exports = {
	entry: {
		main: "./src/js/index.js",
	},

	output: {
		filename: "[name].js",
		chunkFilename: "[name].js",
		publicPath: "/",
	},

	optimization: {
		minimize: false,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					enforce: true,
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: require.resolve("babel-loader"),
					options: {
						presets: [["@babel/preset-env", { modules: false }]],
					},
				},
			},
			{
				test: /\.(sass|scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	resolve: {
		alias: {
			"%modules%": path.resolve(__dirname, "src/blocks/modules"),
			"%components%": path.resolve(__dirname, "src/blocks/components"),
		},
	},
};
