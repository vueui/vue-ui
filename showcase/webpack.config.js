
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./main.js",
    output: {
        filename: "build.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jade/, loader: 'html!jade-html' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue-UI Components',
            template: './.webpack/templates/index.html'
        })
    ]
};