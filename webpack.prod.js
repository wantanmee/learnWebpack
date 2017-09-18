const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.HashedModuleIdsPlugin(), // 替换掉原来的`module.id`
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
