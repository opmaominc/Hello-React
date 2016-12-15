module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};