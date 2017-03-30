var webpack = require("webpack");
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    "polyfills": "./app/polyfills",
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      { 
        test: /\.(html|css)$/, 
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    })
    //add uglify for release
    // new webpack.optimize.UglifyJsPlugin({
    //  sourceMap: false,
    //  mangle: false,
    //  compress: {
    //    warnings: false
    //  }
  ]
}
