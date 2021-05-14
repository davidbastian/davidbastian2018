const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
var ip = require("ip")

module.exports = {
  // Where files should be sent once they are bundled
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    disableHostCheck: true, // That solved it
    port: 9293,
    host: ip.address()
  },
 
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: "common/media/images/[name].[ext]"
        },
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
      },
      {
        test: /\.(mp4)$/i,
        loader: 'file-loader',
        options: {
          name: "common/media/video/[name].[ext]"
        },
      },

      {
        test: /\.(csv|svg|html)$/,
        use: "raw-loader"
      },


      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [{
          from: "app/index.html"
        },
        {
          from: "app/common/media/",
          to: "common/media/"
        },
        {
          from: "app/common/social/",
          to: "common/social/"
        },
        {
          from: "app/common/doc/",
          to: "common/doc/"
        },
        {
          from: "app/favicon.png"
        }
      ]
    })
  ]

}