const path = require('path');
module.exports = {
    entry: path.join(__dirname, '/app/jsxlib/home.js'),
    mode: 'development',
    output: {
        filename: 'home_jslib.js',
        path: path.join(__dirname, '/public/jslib')},
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }]
    }
};
                        