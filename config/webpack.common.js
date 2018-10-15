var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    app: './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app/common': helpers.root('./src/app/common'),
      '@app/core': helpers.root('./src/app/core'),
      '@app/pages': helpers.root('./src/app/pages'),
      '@app/guards': helpers.root('./src/app/guards'),
      '@app/services': helpers.root('./src/app/services'),
      '@app/animations': helpers.root('./src/app/animations')
    }
  },

  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [
          'babel-loader',
          'ng-router-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('./tsconfig.json')
            }
          },
          'angular2-template-loader'
        ],
        exclude: [/node_modules/]
      },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: {
          system: true
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /^(?!.*\.(local|global)).+\.scss/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.local\.scss$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
