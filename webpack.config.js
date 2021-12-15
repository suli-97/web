import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const __dirname=path.resolve()
export default {
	entry: './src/App.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					"style-loader",
					"css-loader",
					"less-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			  },
		],
	},
	resolve: {
		alias:{
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'App.js',
		path: __dirname+'/dist',
	},
	plugins: [new HtmlWebpackPlugin({
		publicPath:"/dist"
	})],
	mode: 'development',
	watch: true
};