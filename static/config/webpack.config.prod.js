const merge = require('webpack-merge');
const webpack = require('webpack');
// const baseWebpackConfig = require('./webpack.config.base');
const path = require('path');
const outputPath = path.join(__dirname, './../build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rootPath = path.join(__dirname, './../../');
function resolve(dir) {
  return path.join(__dirname, './../../', dir)
}
module.exports = {
  context: rootPath,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: resolve('static/src'),
        exclude: resolve('node_modules'),
        // loader: ['babel-loader', 'awesome-typescript-loader']
        loader: ['babel-loader', 'ts-loader']
      }, {
        test: /\.(js|jsx)$/,
        exclude: resolve('node_modules'),
        loader: ['babel-loader']
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
        ],
        // use:['css-loader','less-loader'], include: []
      }, {
        test: /\.css$/,
        // use:['css-loader','postcss-loader'],
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
        ],
        // include:['../node_modules/element-theme-default']
      }, {
        test: [
          /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/
        ],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'assets/images/[name].[hash:8].[ext]'
        }
      }, {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
              context: rootPath
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx'
    ],
    modules: [resolve('static/src'), resolve('node_modules')]
  },
  entry: {
    'main': ['./static/src/index.tsx'],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-router-config',
      'react-loadable',
      'mobx',
      'mobx-react'
    ]
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'assets/js/[name].js?v=[hash:8]',
    chunkFilename: 'assets/js/[id].js?v=[hash:8]'
  },
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  // watch:true,
  // watchOptions : {
  //   ignored: resolve('node_modules'),
  //   aggregateTimeout: 500,
  //   poll: 1000
  // },
  plugins: [
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: resolve('static/public/index.html')
    }),
    // new MiniCssExtractPlugin({filename: "assets/css/app.[contenthash].css", chunkFilename: "assets/css/app.[contenthash].css"})
    new MiniCssExtractPlugin({filename: "assets/css/[name].css?v=[hash:8]", chunkFilename: "assets/css/[id].css?v=[hash:8]"})
    // new MiniCssExtractPlugin({filename: "assets/css/[name].[contenthash].css", chunkFilename: "assets/css/[id].[contenthash].css"})
  ]
}



