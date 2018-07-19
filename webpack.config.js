// store webpack in a constant and require path to make sure files and folders are used from good paths
const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");


// set config to define entry point and output for compiled
let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader', 'postcss-loader'],
            }))
          }]
      },
      plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new UglifyJSPlugin(),
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
      },
      devtool: "eval-source-map",
      mode: 'development'
  }
  module.exports = config;
  

  if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new OptimizeCSSAssets()
    );
  }


