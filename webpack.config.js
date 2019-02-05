const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/entry.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
};