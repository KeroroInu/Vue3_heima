import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入持久化的插件
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia() // 创建 Pinia 实例
const app = createApp(App)  // 创建根实例

// app.use(pinia) // pinia 插件的安装配置
// app.mount('#app')  // 视图的挂载

app.use(pinia.use(persist)).mount('#app')

