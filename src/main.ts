import { createApp } from 'vue'
import App from '/@/App.vue'
import './index.css'
import router from '/@/router'
import 'vant/lib/index.css'
import Vant from 'vant'
import 'lib-flexible'
import moment from 'moment'

let elementApp = createApp(App)
elementApp.config.globalProperties.$moment = moment
elementApp.use(router)
elementApp.use(Vant)
elementApp.mount('#app')
