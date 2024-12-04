const { name } = require("./package");
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      return webpackConfig;
    },
    alias: {
      '@': path.resolve(__dirname, './src'), // 假设你的源代码在src目录下
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.historyApiFallback = true;
    devServerConfig.open = false;
    devServerConfig.hot = false;
    devServerConfig.watchFiles = [];
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    return devServerConfig;
  },
};