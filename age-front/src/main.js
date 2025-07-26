import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router' 
const app = createApp(App);

// 引入公共样式
import '@/assets/styles/common.css'
app.use(router)


app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')
