const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production일때는
  devtool: "eval", // hidden-source-map 사용
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  },
  entry: {
    app: "./client"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  // 삭제됨
  // plugins:[
  //   new webpack.LoaderOptionsPlugin({debug:true})
  // ],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  }
};
