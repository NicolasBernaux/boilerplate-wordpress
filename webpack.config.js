const path = require('path');
const Jarvis = require('webpack-jarvis');
const UglifyJS = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
require('dotenv').config();

const dev = process.env.NODE_ENV === 'development';

const theme = process.env.THEME_DIRECTORY

let cssLoaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: loader => [
        require('autoprefixer'),
      ]
    }
  }
];

if (!dev) {
  cssLoaders.push({
    loader: 'postcss-loader',
    options: {
      plugins: loader => [
        require('autoprefixer'),
        require('cssnano')({preset: 'default'}),
      ],
      minimize: true,
    },
  });
}

const config = {
  entry: [`./web/app/themes/${theme}/src/js/app.js`, `./web/app/themes/${theme}/src/scss/app.scss`],
  watch: dev,
  output: {
    path: path.resolve(`./web/app/themes/${theme}/dist`),
    filename: 'bundle.js',
  },
  devtool: dev ? 'cheap-module-eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components|.idea)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoaders
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...cssLoaders, 'sass-loader']
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]'
            }
          },
          {
            loader: 'img-loader',
            options: {
              enabled: !dev
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([`./web/app/themes/${theme}/dist`]),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
  ],
};

if (!dev) {
  config.plugins.push(new UglifyJS());
} else {
  // config.plugins.push(new Jarvis({ port: 1337 }));
}


module.exports = config;