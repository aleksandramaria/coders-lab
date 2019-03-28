var path = require("path");module.exports = {
    entry: ['whatwg-fetch', "./js/zadanie00.jsx"],
    output: { filename: "out.js", path: path.resolve(__dirname, "dist") },
    mode: "development", watch: true,
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-2","react"]
                }
            }
        }]
    }
}