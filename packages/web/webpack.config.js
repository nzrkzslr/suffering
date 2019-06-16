const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'src', 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'import',
                { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Suffering',
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'public', 'index.tpl.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src', 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
