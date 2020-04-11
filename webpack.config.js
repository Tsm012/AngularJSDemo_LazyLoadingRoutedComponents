const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    mode:'development',
    entry: {
        index: './index.js'
    },
    output: {
        publicPath: './',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular Component Demo',
            template: './index.html'
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: path.join(process.cwd(), "dist"),
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    //Splits up our npm dependencies for lazy loading
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }
        }
    }
}