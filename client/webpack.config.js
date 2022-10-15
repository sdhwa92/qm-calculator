const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");

module.exports = (env) => {
  const isProduction = env.production;
  const mode = isProduction ? "production" : "development";

  return {
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        // images
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
                context: "src",
                outputPath: "assets/",
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
        filename: "index.html",
        manifest: "./public/manifest.json",
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode,
      }),
    ],
  };
};
