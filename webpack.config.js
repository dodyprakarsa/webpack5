const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';
// let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
//   target = 'browserlists';
}

module.exports = {
  mode,
  //   target,
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
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

  plugins: [new MiniCssExtractPlugin()],

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
