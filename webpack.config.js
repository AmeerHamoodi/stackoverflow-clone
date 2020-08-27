const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/js/main.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", "jsx"]
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "./devBuild/client/js")
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./src/client/index.html"),
      filename: resolve(__dirname, "./devBuild/client/index.html"),
      cache: true
    })
  ]
};