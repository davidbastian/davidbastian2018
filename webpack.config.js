var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ip = require("ip");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //compress: true,

    port: 9996,
    host: ip.address()
  },

  externals: {
    TweenLite: "TweenLite"
  },
  module: {
    rules: [
      {
        test: /\.(rhtml|csv|svg|html|app.html)$/,
        use: "raw-loader"
      },
      
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader", "postcss-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "common/media/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "common/fonts/[name].[ext]"
        }
      },
      {
        test: /\.(mp3|wav)$/,
        loader: "file-loader",
        options: {
          name: "common/media/audio/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [autoprefixer] } }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: "app/index.html" },
      { from: "app/common/media/", to: "common/media/" },
      { from: "app/common/social/", to: "common/social/" },
      { from: "app/favicon.png" }
    ])
  ]
};
