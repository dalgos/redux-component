const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.hbs'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'roots'),
      path.resolve(__dirname, 'actions'),
      path.resolve(__dirname, 'reducers'),
      path.resolve(__dirname, 'libs'),
      path.resolve(__dirname, 'Core'),
      path.resolve(__dirname, 'DataComponents'),
      path.resolve(__dirname, 'ViewComponents'),
    ],
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js',
    }
  },
  entry: {
    redux: './src/index.js',
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
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'es3ify-loader',
      //   enforce: 'post'
      // }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   compress: {
    //     warnings: true,
    //     // optional: don't convert foo["bar"] to foo.bar
    //     properties: false,
    //   },
    //   output: {
    //     comments: false,
    //     quote_keys: true,
    //   },
    // })
  ],
  watch: true
};