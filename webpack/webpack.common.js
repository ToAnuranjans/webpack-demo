const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:
                            // ['@babel/env', '@babel/preset-react']
                            ['@babel/preset-react']

                    }
                }
            }, {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, '../', 'dist'),
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
}