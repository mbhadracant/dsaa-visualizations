const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, '.');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: './index.html'
});

module.exports = {
  context: srcPath,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false
  },
  entry: ["@babel/polyfill", "./src/app.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist/')
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    htmlPlugin

  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};
