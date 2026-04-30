<template>
  <div class="login-page">
    <div class="orange"></div>
    <div class="blue"></div>
    <div class="blue small"></div>
    <div class="login-box">
      <div class="logo-box">
        <div class="right">
          <div class="sys-name">KOJ后台管理</div>
          <div class="sys-sub-name">思考者的聚集地</div>
        </div>
      </div>
      <div class="form-box">
        <div class="form-item">
          <img src="../assets/images/account.svg">
          <el-input v-model="userAccount" placeholder="请输入账号" />
        </div>
        <div class="form-item">
          <img src="../assets/images/password.svg">
          <el-input v-model="password" type="password" placeholder="请输入密码" show-password />
        </div>
        <div class="submit-box" @click="loginFun">
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { loginService } from '@/apis/suer'
import { setToken } from '@/utils/cookie'
import router from '@/router'
const userAccount = ref('')
const password = ref('')

async function loginFun() {
  try {
    const loginResult = await loginService(userAccount.value, password.value)
    console.log("loginResult:", loginResult)
    router.push("/oj/system")
    setToken(loginResult.data.data)
  } catch (error) {
    console.log("error:", error)
  }

  // if(loginResult.data.code === 1000){  //
  //   // 登录成功
  //   console.log("登录成功")
  //   router.push("/oj/system")
  //   setToken(loginResult.data.data)
  // }else{
  //   //登录失败
  //   console.log("登录失败")
  //   ElMessage.error(loginResult.data.msg)
  // }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

html, body {
  overflow: hidden !important;
  height: 100%;
  width: 100%;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.orange, .blue {
  position: absolute;
  inset: 50px;
  border: 1px solid #fff;
  transition: 0.5s;
}

.orange {
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: animate 6s linear infinite;
  border-color: #00ff0a;
  box-shadow: 0 0 15px rgba(0, 255, 10, 0.3);
}

.blue {
  border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
  animation: animate 4s linear infinite;
  border-color: #00cc08;
  box-shadow: 0 0 15px rgba(0, 204, 8, 0.3);
}

.blue.small {
  animation: animate2 10s linear infinite;
  border-color: #009906;
  box-shadow: 0 0 15px rgba(0, 153, 6, 0.3);
}

.login-page:hover .orange,
.login-page:hover .blue {
  border-width: 3px;
  filter: drop-shadow(0 0 30px #00ff0a);
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.login-box {
  position: absolute;
  width: 400px;
  padding: 40px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.logo-box {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.sys-name {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(45deg, #00ff0a, #00cc08, #009906);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 4px;
  text-shadow: none;
  margin: 0;
  filter: drop-shadow(0 0 10px rgba(0, 255, 10, 0.5));
}

.sys-sub-name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 2px;
}

.form-box {
  width: 100%;
}

.form-item {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-item img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 15px;
  z-index: 1;
}

.form-item :deep(.el-input) {
  width: 100%;
}

.form-item :deep(.el-input__wrapper) {
  background: transparent;
  border: 2px solid rgba(0, 255, 10, 0.3);
  border-radius: 30px;
  padding: 8px 15px 8px 45px;
  box-shadow: none;
}

.form-item :deep(.el-input__wrapper:hover),
.form-item :deep(.el-input__wrapper.is-focus) {
  border-color: #00ff0a;
  box-shadow: 0 0 10px rgba(0, 255, 10, 0.5);
}

.form-item :deep(.el-input__inner) {
  color: #fff;
  font-size: 16px;
}

.form-item :deep(.el-input__inner::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

/* 密码显示/隐藏图标颜色 - 荧光绿 */
.form-item :deep(.el-input__icon) {
  color: #00ff0a;
}

.form-item :deep(.el-input__icon:hover) {
  color: #00cc08;
}

.submit-box {
  width: 100%;
  padding: 12px 20px;
  background: #111;
  border: 2px solid #00ff0a;
  border-radius: 30px;
  color: #00ff0a;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;
  text-align: center;
}

.submit-box:hover {
  transform: scale(1.05);
  background: #00ff0a;
  color: #111;
  box-shadow: 0 0 20px rgba(0, 255, 10, 0.5);
}

@media (max-width: 520px) {
  .orange, .blue {
    width: 350px;
    height: 350px;
  }

  .login-box {
    width: 300px;
    padding: 30px 20px;
  }

  .sys-name {
    font-size: 36px;
  }

  .sys-sub-name {
    font-size: 12px;
  }

  .submit-box {
    padding: 10px 15px;
    font-size: 16px;
  }
}
</style>
