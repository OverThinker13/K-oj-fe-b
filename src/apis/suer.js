import service from '@/utils/request'

// 登录接口 127.0.0.1:19090/sysUser/login
export function loginService(userAccount, password) {
    return service({
        url: "/sysUser/login",
        method: "post",
        data: {
            userAccount, password
        }
    })
}

