const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepbackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(), 
  new HtmlWepbackPlugin({
    template: "./src/index.html",
  }),
];

if(process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
} else { // jeżeli w package.json zmienie na start: "SERVE=true wepack serve" to tutaj zamykam if i wstawiam drugiego 
  plugins.push(new ReactRefreshWebpackPlugin()) //if(process.env.SERVE){ plugins push....}
}; // gdy chce uruchomić npm run build-dev

module.exports = {
  mode: mode,
  target: target,

  entry: "./src/index.js",

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
        {
    test: /\.mp4$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "video"
            }
        }
    ]
},
{
    test: /\.html$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "html-loader",
            options: {
                sources: {
                    list: [
                        {
                            tag: "source",
                            attribute: "src",
                            type: "src"
                        }
                    ]
                }
            }
        }
    ]
}
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
}