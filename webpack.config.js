const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports ={
    mode:'development',
    module: {
        rules:[
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
            filename:'[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[{
                from:'src/assets',
                to:'assets/'
            }],
        })
    ]
}