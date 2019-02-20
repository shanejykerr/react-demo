const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./client/entry.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'style-loader',
                    'sass-loader',
                ]
            }
        ]
    },
};