const path = require('path'); // node path module to get full system path

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // __dirname = current working directory
        filename: 'bundle.js'
    }
};

module.exports = config;