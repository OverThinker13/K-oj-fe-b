/**
 * Axios 请求封装工具
 * 统一处理请求配置、响应拦截、错误处理
 * 
 * 跨域方案：使用 Vite 代理模式
 * 请求流程：
 *   前端请求 → /dev-api/xxx → Vite代理 → http://127.0.0.1:19090/system/xxx
 */

import axios from "axios";
import { ElMessage } from "element-plus";
import { getToken, removeToken } from "./cookie";
import router from "@/router";

/**
 * 创建 Axios 实例
 * @type {axios.AxiosInstance}
 */
const service = axios.create({
  // 基础路径，与 vite.config.js 中的代理配置对应
  baseURL: "/dev-api",
  // 请求超时时间（毫秒）
  timeout: 5000,
});

// 请求拦截器（【自动触发】无需手动调用）
/**
 * 工作原理：
 * 1. 任何通过 service 发送的请求，都会自动经过这个拦截器
 * 2. 拦截器会检查请求头是否包含 Authorization 字段
 * 3. 如果包含，说明已登录，将 token 添加到请求头
 * 4. 如果不包含，说明未登录，直接放行
 */
service.interceptors.request.use(
  (config) => {
    if(getToken()) {
      config.headers['Authorization'] = "Bearer " + getToken()
    }
    // 必须返回 config，否则 axios 会认为配置是 undefined
    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器（【自动触发】无需手动调用）
 * 
 * 工作原理：
 * 1. 任何通过 service 发送的请求完成后，都会自动经过这个拦截器
 * 2. 拦截器会统一处理响应格式和错误状态码
 * 3. 业务代码只需关注成功时的数据，失败情况会自动提示
 * 
 * 后端返回格式：
 * {
 *   code: 1000,        // 状态码：1000=成功，其他=失败
 *   msg: "success",     // 提示消息
 *   data: { ... }       // 实际业务数据
 * }
 */
service.interceptors.response.use(
  /**
   * 成功响应处理（HTTP 状态码 2xx）
   * @param {axios.AxiosResponse} res - axios 响应对象
   * @returns {Promise} 处理后的数据（业务层直接使用）
   */
  (res) => {
    // res.data 是后端返回的完整数据：{ code, msg, data }
    const code = res.data.code;
    const msg = res.data.msg;

    // 判断业务状态码
    if (code === 3001) {
      // token 过期/无效：清除 token 并跳转到登录页
      ElMessage.error(msg);
      removeToken(); // 清除本地 token
      router.push("/oj/login"); // 跳转到登录页
      return Promise.reject(new Error(msg));
    } else if (code !== 1000) {
      // 其他业务失败：显示错误提示，拒绝 Promise（进入 catch）
      ElMessage.error(msg);
      return Promise.reject(new Error(msg));
    } else {
      // 业务成功：直接返回最内层业务数据，简化业务代码调用
      return Promise.resolve(res.data.data);
    }
  },
  /**
   * 失败响应处理（HTTP 状态码非 2xx）
   * @param {Error} error - 错误对象（网络错误、超时、4xx/5xx 等）
   * @returns {Promise} 拒绝的 Promise
   */
  (error) => {
    // 网络错误、请求超时、服务器错误等情况
    return Promise.reject(error);
  }
);

export default service;

/**
 * 同源策略说明：
 * 浏览器出于安全考虑，只允许请求相同域名、相同端口、相同协议的资源
 * 不同源的请求会触发 CORS（跨域资源共享）检查
 * 
 * 当前项目解决方案：Vite 开发服务器代理
 * - 前端请求：http://localhost:5173/dev-api/xxx（同源）
 * - Vite代理转发：http://127.0.0.1:19090/system/xxx（后端真实地址）
 * - 服务器间通信不受同源策略限制
 */