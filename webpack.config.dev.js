var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'js/index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
        },
        {
          test: /\.(gif|jpe?g|png|ico|jpg|jpeg)$/,
          loader: 'url-loader?limit=25000'
        },
        {
          test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
          loader: 'url-loader?limit=25000'
        }
      ]
    }
};
