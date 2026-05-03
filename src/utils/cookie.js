/**
 * Cookie 工具函数
 * 用于管理登录 Token 的存储和读取
 */

import Cookies from "js-cookie";

// Token 的 Cookie 键名
const TokenKey = "Admin-Oj-b-Token";

/**
 * 获取 Token
 * @returns {string|undefined} Token 值，如果不存在返回 undefined
 */
export function getToken() {
    return Cookies.get(TokenKey);
}

/**
 * 设置 Token
 * @param {string} token - 要存储的 Token 值
 * @returns {string} 设置成功的 Cookie 值
 */
export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

/**
 * 删除 Token
 * @returns {void}
 */
export function removeToken() {
    return Cookies.remove(TokenKey);
}

