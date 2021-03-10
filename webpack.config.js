const PATH = require('path'),
      HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/i,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_module/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
  ]
}