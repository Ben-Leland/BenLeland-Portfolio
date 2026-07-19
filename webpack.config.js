const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
  const isProd = argv.mode == 'production';

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: isProd ? '/benleland/' : '/'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|pdf)$/i,
          type: 'asset/resource'
        }
      ]
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      historyApiFallback: true,
      hot: true
    },

    resolve: {
      extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, './src/components')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  };
};