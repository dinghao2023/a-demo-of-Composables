import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App);//创建应用实例对象（类似于vue2中的vm，但app比vm更“轻”）
app.mount("#app")//挂载