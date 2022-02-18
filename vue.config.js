'use strict'

const path = require('path');

const port = process.env.port || process.env.npm_config_port || 8077

module.exports = {
  // publicPath: '',
  pages: {
    index: {
      // 修改项目的入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      })
  },
  devServer: {
    port: port,
    open: true,
    overlay: {
        warnings: false,
        errors: true
    }
  },

}
