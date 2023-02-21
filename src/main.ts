// @ts-ignore
import { createApp } from 'vue'
import App from '@/App.vue'
import './index.css'
// @ts-ignore
import router from '@/router'
import 'vant/lib/index.css'
// @ts-ignore
import Vant from 'vant'
import 'lib-flexible'
// @ts-ignore
import moment from 'moment'
// @ts-ignore
import { Toast, Dialog, Notify } from 'vant';


let elementApp = createApp(App)
elementApp.config.globalProperties.$moment = moment
elementApp.config.globalProperties.$toast = Toast
elementApp.use(router)
elementApp.use(Vant)
elementApp.mount('#app')
