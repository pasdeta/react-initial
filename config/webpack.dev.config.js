const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval',
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                use: [
                    {
                        loader: 'url-loader' 
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};