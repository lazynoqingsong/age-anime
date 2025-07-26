<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Search, Download, Clock } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const input1 = ref(""); // 添加搜索输入框的响应式变量

const navigateTo = (path) => {
  router.push(path);
};

// 根据当前路由路径动态设置活动菜单项
const activeIndex = computed(() => {
  if (route.path === "/") return "1";
  if (route.path === "/catalog") return "2";
  if (route.path === "/weekly") return "3";
  if (route.path === "/ranking") return "4";
  return "1"; // 默认首页
});
</script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="logo" @click="navigateTo('/')">
        <span class="logo-text">AGE动漫</span>
      </div>

      <div class="nav-links">
        <el-menu
          mode="horizontal"
          :ellipsis="false"
          :default-active="activeIndex"
          router
          class="menu"
          background-color="#24292e"
          text-color="#fff"
          active-text-color="#f56c6c"
        >
          <el-menu-item index="1" route="/">首页</el-menu-item>
          <el-menu-item index="2" route="/catalog">目录</el-menu-item>
          <el-menu-item index="3" route="/weekly">一周更新</el-menu-item>
          <el-menu-item index="4" route="/ranking">排行榜</el-menu-item>
        </el-menu>
      </div>

      <div class="right-section">
        <div class="search-input">
          <el-input
            v-model="input1"
            style="max-width: 200px"
            placeholder="输入番名搜索"
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>

        <div class="auth-buttons">
          <el-button class="history-btn" circle>
            <el-icon>
              <Clock />
            </el-icon>
          </el-button>
          <el-button type="danger" class="login-btn">登录</el-button>
          <el-button type="danger" plain class="register-btn">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<style scoped>
.navbar {
  background-color: #24292e;
  color: white;
  height: 60px;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
}

.menu {
  border: none;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.login-btn,
.register-btn {
  font-size: 14px;
}

/* 自定义菜单样式 */
:deep(.el-menu--horizontal) {
    /* 移除 Element Plus 菜单底部的边框线 */
  border-bottom: none;
}

:deep(.el-menu-item) {
  color: white;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
}

:deep(.el-menu-item.is-active) {
  color: #f56c6c !important; /* 红色文字 */
  background-color: transparent !important;
  border-bottom: 2px solid #f56c6c !important; /* 红色下划线 */
}

:deep(.el-menu-item:hover) {
  background-color: #2c3136 !important;
}
</style>
