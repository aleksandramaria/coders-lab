module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js"
    },
    watch: true,
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader',
                'sass-loader']
        }]
    },
};