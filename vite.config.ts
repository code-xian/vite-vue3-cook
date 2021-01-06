import path from 'path'
// const path = require('path')
module.exports = {
    alias: {
        // 键必须以斜线开始和结束
        '/@/': path.resolve(__dirname, './src')
    },
    optimizeDeps: {
        include: ['lodash',"moment", "echarts", "axios", "mockjs"]
    },
    // 反向代理
    proxy: {
        '/api': {
            target: 'https://blog.csdn.net/weixin_45292658',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '')
        }
    },
    port: 8080,
    open: true,
    /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: './',
}
