import { createApp } from 'vue'
import App from '/@/App.vue'
import './index.css'
import router from '/@/router'
import 'vant/lib/index.css'
import Vant from 'vant'
import 'lib-flexible'
import 'swiper/swiper-bundle.css'

let elementApp = createApp(App)
elementApp.use(router)
elementApp.use(Vant)
elementApp.mount('#app')
