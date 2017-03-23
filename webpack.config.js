const path = require('path'); // node path module to get full system path

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // __dirname = current working directory
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader', // load babel
                test: /\.js$/ // check that file is .js - if yes, apply babel
            }
        ] // loader rules for project e.g. babel
    }
};

module.exports = config;