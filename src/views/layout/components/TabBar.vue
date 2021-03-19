<template>
  <div>
    <van-tabbar
      fixed
      route
      placeholder
      v-model="active"
      @change="handleChange"
      active-color="#EE5331"
      inactive-color="#000"
    >
      <!--      <van-tabbar-item-->
      <!--        v-for="(item, index) in tabBar.tabBar"-->
      <!--        :key="index"-->
      <!--        :to="item.to"-->
      <!--        :icon="item.icon ? item.icon : ''"-->
      <!--      >-->
      <!--        {{ item.title }}-->
      <!--      </van-tabbar-item>-->
      <van-tabbar-item v-for="(item, index) in tabBar" :key="index" :to="item.to">
        <span>{{ item.title }}</span>
        <template #icon="props">
          <van-uploader v-show="item.upLoad">
            <img :src="props.active ? item.icon.active : item.icon.inactive" :class="item.style?'fontsize':''"/>
          </van-uploader>
          <template v-show="!item.upLoad">
            <img :src="props.active ? item.icon.active : item.icon.inactive" :class="item.style?'fontsize':''"/>
          </template>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, defineComponent,toRefs } from 'vue'
  export default defineComponent({
    name: 'TabBar',
    emits: ['chang'],
    setup(props: any, context: any) {
      const tabBar = reactive({
        tabBar: [
          {
            title: '首页',
            to: {
              name: 'Home'
            },
            icon: {
              active: '/@/assets/images/layout/home-active.png',
              inactive: '/@/assets/images/layout/home-inactive.png'
            }
          },
          {
            title: '发现',
            to: {
              path: '/explore'
            },
            icon: {
              active: '/@/assets/images/layout/explore-active.png',
              inactive: '/@/assets/images/layout/explore-inactive.png'
            }
          },
          {
            title: '',
            to: {
              name: ''
            },
            icon: {
              active: '/@/assets/images/layout/add2.png',
              inactive: '/@/assets/images/layout/add2.png'
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
              active: '/@/assets/images/layout/message-active.png',
              inactive: '/@/assets/images/layout/message-inactive.png'
            }
          },
          {
            title: '我的',
            to: {
              name: 'MyCenter'
            },
            icon: {
              active: '/@/assets/images/layout/mine-active.png',
              inactive: '/@/assets/images/layout/mine-inactive.png'
            }
          }
        ]
      })
      const active = ref(0)
      const handleChange = (value: any) => {
        context.emit('chang', value)
      }
      return {
        active,
        ...toRefs(tabBar),
        handleChange
      }
    }
  })
</script>

<style scoped lang="scss">
  .fontsize{
    height: 30px;
  }
</style>
