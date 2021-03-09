const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/main.js', './src/scss/main.scss'],
  output: {
    filename: '[name].js',
    path: path.resolve('./docs/build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
       test: /\.woff(2)?$/,
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 10000,
             name: './font/[hash].[ext]',
             mimetype: 'application/font-woff'
           }
         }
       ]
     },
     {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[hash].[ext]',
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].min.css',
    }),
  ]
};
