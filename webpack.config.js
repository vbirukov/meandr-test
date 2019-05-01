const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({   
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [
                    // apply multiple loaders and options
                    "htmllint-loader",
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['svg-loader']
            },
            {
                test: /\.(eot|woff|otf|woff2|svg|ttf|png|jpg)([\?]?.*)$/,
                use: ['file-loader']
            }
        ]
    }
};



