import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server:{
    proxy:{
      "/dev-api":{
        target:"http://127.0.0.1:19090/system",
        rewrite:(p)=>p.replace(/^\/dev-api/,"")
      }
    }
  }
})
/**
 * 跨域请求解决方案：Vite 代理模式
 * 
 * 原理：通过 Vite 开发服务器转发请求，绕过浏览器同源策略
 * 
 * 请求流程：
 * 1. 前端调用 axios("/dev-api/sysUser/login")
 * 2. 请求发送到 http://localhost:5173/dev-api/sysUser/login（同源）
 * 3. Vite 拦截 /dev-api 路径，重写移除前缀 → /sysUser/login
 * 4. 转发到 target: http://127.0.0.1:19090/system/sysUser/login
 * 5. 后端响应 → Vite 转发回前端
 * 
 * 配置说明：
 * - request.js: baseURL = "/dev-api"      // 前端请求前缀
 * - vite.config.js: proxy "/dev-api"      // 拦截规则
 *   → target: 后端真实地址                 // 转发目标
 *   → rewrite: 移除 /dev-api 前缀          // 路径重写
 * 
 * 优点：开发环境无需后端配置 CORS，生产环境可通过 Nginx 实现相同转发
 */