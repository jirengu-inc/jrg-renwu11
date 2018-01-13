var path = require('path')
var webpack = require('webpack')
var base = {
    index: './src/index.js'
}
module.exports = {
    entry: base,
    devtool:'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}