const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode,
    target,
  // create images folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)$/i,

        // type: 'asset/resource',
       
        // for split images into folder & inline base64
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          },
        },
      },
      
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: ''}
          },
           'css-loader',
           'postcss-loader',
           'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), new htmlWebpackPlugin({
    template: './src/index.html',
  })],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
};
