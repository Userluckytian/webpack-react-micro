import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import qiankun  from 'vite-plugin-qiankun'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun ('vue-app', {
      //  'vue-app' 是子应用名，与主应用注册时保持一致
      useDevMode: true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: '5173',
    // 如下添加代码
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
    cors: true,
    origin: 'http://localhost:5173',  // 子应用引入到主应用之后，子应用中的图片在主应用下加载不出来、找不到，需要将origin设置成子应用本地运行地址
  }
})
