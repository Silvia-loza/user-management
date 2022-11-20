import { createApp } from 'vue'
import App from './App.vue'



// main.js
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// Create your Vue 3 app
const app = createApp(App).mount('#app')




// Choice #1: register all components. Impacts global bundle size
app.use(ElementPlus, {
  // options
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


