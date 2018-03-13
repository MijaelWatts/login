const path               = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template : './ui/src/index.html'
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['./ui/dist']);

module.exports = {
    entry  : './ui/src/js/app.js',
    output : {
        path     : path.resolve(__dirname, 'ui/dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.html$/,
                use  : ['html-loader']
            },
            {
                test : /\.js$/,
                use  : [
                    {
                        loader  : 'babel-loader',
                        options : {
                            presets : ['es2015']
                        }
                    }
                ]
            },
            {
                test : /\.scss$/,
                use  : extractPlugin.extract(
                    {
                        use : ['css-loader', 'sass-loader']
                    }
                )
            },
            {
                test : /\.(png|jpg)$/,
                use  : [
                    {
                        loader  : 'file-loader',
                        options : {
                            name       : '[name].[ext]',
                            outputPath : 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        extractPlugin,
        htmlWebpackPlugin,
        cleanWebpackPlugin
    ]
};