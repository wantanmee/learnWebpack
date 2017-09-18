const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        hotOnly: true
    },
    entry: {
        app: './src/index.js',        
    },
    output: {
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'webpack demo demo',
          filename: 'index.html'
      }),
      new CleanWebpackPlugin(['dist']),
    //   new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()  
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eof|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },    
};