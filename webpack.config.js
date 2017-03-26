const path = require('path'); // node path module to get full system path
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // module to save all extracted css as separate css file

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // __dirname = current working directory
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader', // load babel
                test: /\.js$/ // check that file is .js - if yes, apply babel
            },
            {
                //use: ['style-loader', 'css-loader'], // applied right to left, css-loader imports css, style loader injects css into bundle code, then injects into html via js
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }), // plugins have ability to stop code being included in bundle and output as separate files
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/, // set file types to handle
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    }, // depending on image size, will either incorporate img directly into bundle.js (< 40 kb) or supply link, use object rather than string so can set config
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    } // first to be applied
                ]
            }
        ] // loader rules for project e.g. babel
    },
    plugins: [
        new ExtractTextPlugin('style.css') // set export name for css file
    ]
};

module.exports = config;