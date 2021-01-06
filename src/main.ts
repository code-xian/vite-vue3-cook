import { createApp } from 'vue'
import App from '/@/App.vue'
import './index.css'
import router from '/@/router'
import 'vant/lib/index.css'
import { Button } from 'vant';
import 'lib-flexible'

let elementApp = createApp(App);
elementApp.use(router)
elementApp.use(Button)
elementApp.mount('#app')
