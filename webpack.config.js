module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
      inline: true,
      port: 4000
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    },
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json', '.coffee']
    }
};
