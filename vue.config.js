const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.douban.com", // 需要跨域的目标url，我这里用到的是豆瓣API
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        ws: true,
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  },
  // lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
