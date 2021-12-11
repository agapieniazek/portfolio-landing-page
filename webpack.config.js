const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepbackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext][query]",
    },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), 
    new HtmlWepbackPlugin({
      template: "./src/index.html",
    })
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
}