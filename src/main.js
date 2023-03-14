import { createApp } from 'vue'
import App from './App.vue'
import axios from "@/api/axios";

import router from './router'
import store from './store'

import '@/assets/css/global.scss'
// 移动端适配
import 'lib-flexible'
// 解决移动端点击延迟300ms问题
import FastClick from 'fastclick'

FastClick.attach(document.body)

const app = createApp(App)

app.config.globalProperties.$axios = axios  //配置axios的全局引用

app.use(router)
app.use(store)


app.mount('#app')
