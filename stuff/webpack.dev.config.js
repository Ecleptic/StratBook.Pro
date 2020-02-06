var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  watch: true,
  entry: './src/browser/index.js',
  mode: 'dev',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    compress: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },watchOptions: {
    aggregateTimeout: 1000,
    poll: 500,
    ignored: /node_modules/
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new webpack.HotModuleReplacementPlugin(),

  ]
}

var serverConfig = {
  watch: true,
  entry: './src/server/index.js',
  mode: 'dev',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },devServer: {
    hot: true,
    compress: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
     new webpack.HotModuleReplacementPlugin(),

  ]
}

module.exports = [browserConfig, serverConfig]