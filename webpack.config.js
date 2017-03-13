const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  },
  entry: {
    redux: './src/index.js'
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015']
          ]
        },
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: true,
        // optional: don't convert foo["bar"] to foo.bar
        properties: false,
      },
      output: {
        comments: false,
        quote_keys: true,
      },
    })
  ],
  watch: true
};