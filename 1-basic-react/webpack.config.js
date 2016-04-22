const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: debug ? 'inline-source-map' : null,
  entry: './js/client',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-runtime',
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/src'),
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    // Позволяет исключить дублирование библиотек в коде
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
