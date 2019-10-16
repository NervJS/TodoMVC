const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/env']]
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: false,
  plugins: [
    new webpack.ProvidePlugin({
      'document': ['@tarojs/runtime', 'document'],
      'window': ['@tarojs/runtime', 'window']
    }),
    new VueLoaderPlugin()
  ]
};