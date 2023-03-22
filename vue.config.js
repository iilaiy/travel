const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭 eslint 代码检查
  // vant 按需引入
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
    externals: {
      'BMap': 'BMap' // 百度地图配置
    }
  },
  // 服务器配置
  devServer: {
    proxy: {
      '/api': {
        target: `http://apis.juhe.cn/fapigx`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + '/api'] : ''
        }
      }
    }
  }
})
