const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      entry: ["@babel/polyfill", APP_DIR],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {}
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              "css-loader",
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: "src/app" }])
      ]
    }
  ]);
};
