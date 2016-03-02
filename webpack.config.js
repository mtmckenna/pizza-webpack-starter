var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: "./app/js/app.js",

  eslint: {
    configFile: __dirname + '/.eslintrc'
  },

  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader", "eslint-loader"] },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'app/html/index.html'
  })]
};
