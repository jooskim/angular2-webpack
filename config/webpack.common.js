/**
 * Created by jooskim on 6/30/16.
 */
const webpack = require('webpack');
const helpers = require('./helpers');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);

const METADATA = {
    title: "Angular 2 with Webpack Starter",
    baseUrl: "/"
};

module.exports = {
    metadata: METADATA,
    entry: {
        "polyfills": "./src/polyfills.ts",
        "vendor": "./src/vendor.ts",
        "main": "./src/main.browser.ts"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".scss", ".css", ".json", ".html"],
        root: helpers.root("src"),
        moduleDirectories: ["node_modules"]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/angular2'),
                ]

            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style')
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [],
    node: {
        global: "window",
        crypto: "empty",
        module: false,
        clearImmediate: false,
        setImmmediate: false
    }
}