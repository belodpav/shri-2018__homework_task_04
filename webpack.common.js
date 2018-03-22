const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        './src/index.css'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: './index.min.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: './src/public',
                to: ''
            }
        ])
    ]
};
