import homeActive from '@/assets/images/layout/home-active.png'
import homeInactive from '@/assets/images/layout/home-inactive.png'
import exploreActive from '@/assets/images/layout/explore-active.png'
import exploreInactive from '@/assets/images/layout/explore-inactive.png'
import messageActive from '@/assets/images/layout/message-active.png'
import messageInactive from '@/assets/images/layout/message-inactive.png'
import mineActive from '@/assets/images/layout/mine-active.png'
import mineInactive from '@/assets/images/layout/mine-inactive.png'
import add2 from '@/assets/images/layout/add2.png'
import { ref } from 'vue'
import type { Ref } from 'vue'
export const tabBar:Ref<any[]> = ref([
  {
    title: '首页',
    to: {
      name: 'Home'
    },
    icon: {
      active: homeActive,
      inactive: homeInactive
    },
  },
  {
    title: '发现',
    to: {
      path: '/explore'
    },
    icon: {
      active: exploreActive,
      inactive: exploreInactive
    }
  },
  {
    title: '',
    to: {
      name: ''
    },
    icon: {
      active: add2,
      inactive:add2
    },
    style:'fontsize',
    upLoad: true
  },
  {
    title: '消息',
    to: {
      name: 'Message'
    },
    icon: {
      active: messageActive,
      inactive: messageInactive
    }
  },
  {
    title: '我的',
    to: {
      name: 'MyCenter'
    },
    icon: {
      active: mineActive,
      inactive: mineInactive
    }
  }
])
