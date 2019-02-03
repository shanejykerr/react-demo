import path from 'path';

export default {
    entry: 'client/components/entry.ts',
    modules: {
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
            }
        ]
    }
}