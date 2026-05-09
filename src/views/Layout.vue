<template>
  <div class="layout-wrapper">
    <!-- 植物装饰 -->
    <PlantDecoration />
    
    <el-container class="layout-container">
      <!-- 顶部导航栏 -->
    <el-header class="el-header">
      <el-dropdown>
        <span class="el-dropdown__box">
          <div>
            <strong>当前用户：</strong>{{ loginUser.nickName }}
          </div>
          <el-icon>
            <User />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    
    <!-- 主体内容区域 -->
    <el-container class="main-container">
      <!-- 左侧侧边栏 -->
      <el-aside width="200px" class="el-aside">
        <el-menu class="el-menu" router>
          <el-menu-item index="/oj/layout/cuser">
            <el-icon>
              <Management />
            </el-icon>
            <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/oj/layout/question">
            <el-icon>
              <Management />
            </el-icon>
            <span>题目管理</span>
          </el-menu-item>
          <el-menu-item index="/oj/layout/exam">
            <el-icon>
              <Management />
            </el-icon>
            <span>竞赛管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <!-- 右侧主内容区 -->
      <el-main class="el-main">
        <RouterView />
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {
  Management,
  User,
  SwitchButton
} from '@element-plus/icons-vue'
import { reactive } from 'vue'
import router from '@/router'
import { getUserInfoService, logoutService } from '@/apis/suser'
import { removeToken } from '@/utils/cookie'
import PlantDecoration from '@/components/PlantDecoration.vue'

const loginUser = reactive({
    nickName: ''
})


async function getUserInfo() {
  // 响应拦截器已解包，userInfo 直接是后端返回的业务数据
  const userInfo = await getUserInfoService()
  loginUser.nickName = userInfo.nickName
}
getUserInfo()

async function logout(){
  await ElMessageBox.confirm(
    '确认退出吗？',
    '温馨提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
  await logoutService()
  removeToken()
  router.push('/oj/login')
}


</script>

<style lang="scss" scoped>
.layout-wrapper {
  position: relative;
  min-height: 100vh;
}

.layout-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    padding: 0 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    
    .el-dropdown__box {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      .el-icon {
        color: #4c4141;
        margin-left: 8px;
      }
      
      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  
  .main-container {
    flex: 1;
    overflow: hidden;
    
    .el-aside {
      background-color: #fff;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.02);
      
      .el-menu {
          border-right: none;
          height: 100%;
          
          .el-menu-item {
            &.is-active {
              color: #22c55e;
              background-color: #dcfce7;
            }
            
            &:hover {
              background: #f0fdf4;
              color: #16a34a;
            }
          }
        }
    }
    
    .el-main {
      background: #fff;
      margin: 0;
      padding: 20px;
      overflow-y: auto;
    }
  }
}
</style>