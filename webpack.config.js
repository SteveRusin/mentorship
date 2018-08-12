var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
       'app': './src/main.ts' 
    },
    output: {
        path: (path.resolve(__dirname, 'dist')),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: '/\.ts$/',
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                    }, 'angular2-template-loader'
                ]
            }, {
                test: '/\.html$/',
                loader: 'html-loader'
            }, {
                test: '/\.css$/',
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            }
        ]
    }
}
