const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],

  resolve: {
    unsafeCache: true,
  },

  output: {
    publicPath: '/dist/',
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!resolve-url!sass?sourceMap',
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      __DEVELOPMENT__: true,
    }),
    // new ExtractTextPlugin('bundle.css', {allChunks: true}),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
