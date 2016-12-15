const webpack = require('webpack');

module.exports = {
    entry: {
      app: './app'
    },
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
                    plugins: [
                                'transform-runtime'
                              ]
                }
            }
        ],
         plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
    }
};