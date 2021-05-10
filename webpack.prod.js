const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports ={
    mode:'production',
    optimization: {
        minimize: true,
        minimizer:[
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            })
        ],
    },
    output:{
        filename:'main.[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },

    module: {
        rules:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            }
        },
        {
            test:/\.css$/,
            exclude: /style\.css$/,
            use: [
                {loader:'style-loader'},
                {loader:'css-loader'}
            ]
        },
        {
            test: /style\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
                test:/\.html$/i,
                loader: 'html-loader',
                options:{
                    sources: false,
                }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:[
                {
                    loader: 'file-loader',
                    options:{
                        esModule:false
                    }
                }
            ]
        }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[{
                from:'src/assets',
                to:'assets/'
            }],
        }),
        new CleanWebpackPlugin(),
    ]
}