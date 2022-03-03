const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  // const isProductionBuild = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src', 'components'),
        store: path.resolve(__dirname, 'src', 'store'),
        HOC: path.resolve(__dirname, 'src', 'HOC'),
      },
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
      compress: false,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]_[local]_[hash:base64]',
                },
                importLoaders: 1,
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
