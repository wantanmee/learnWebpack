const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    hotOnly: true,
  },
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // 在编译的代码里设置了`process.env.NODE_ENV`变量
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // 打印日志信息时 webpack 默认使用模块的数字 ID 指代模块，不便于 debug，这个插件可以将其替换为模块的真实路径
  ],
});
