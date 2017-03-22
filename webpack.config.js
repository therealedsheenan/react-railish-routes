const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.resolve(__dirname + '/lib'),
    filename: 'react-railish-routes.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
