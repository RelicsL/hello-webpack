const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const package = require('./package.json');
const oem = process.env.OEM ? process.env.OEM : 'default';
console.log('oem is ' + oem);
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(NODE_ENV);

const config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.tsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    hot: true,
    port: 2333,
    // progress: true,  //运行进度打印在控制台
    historyApiFallback: true, //404响应被替代为index.html
    overlay: { //浏览器全屏显示警告和错误
      warnings: true,
      errors: true,
    },
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          // { loader: 'babel-loader' },
          // { loader: 'source-map-loader' }
          "source-map-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'src/styles'),
              ],
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process': {
        version: JSON.stringify(package.version),
        env: {
          oem: JSON.stringify(oem)
        }
      }
    })
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],  //配置扩展名
  }
}

module.exports = config;