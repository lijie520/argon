const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
    // options...
    devServer: {
      proxy: {
        '/api': {
          target: '',   //代理接口
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''    //代理的路径
          }
        }
      }
    },
  lintOnSave: true,
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
