const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  // 关闭 eslint 代码检查
  // vant 按需引入
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  // 服务器配置
  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    open: true,
    proxy: {
      "/api": {
        target: "https://autumnfish.cn",
        changeOrigin: true, // 表示是否跨域
        pathRewrite: {
          "^/api": " ",
        }
      }
    }
  }
})
