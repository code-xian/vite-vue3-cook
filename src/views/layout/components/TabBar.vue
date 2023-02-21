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
          <van-uploader v-if="item.upLoad">
            <img :src="props.active ? item.icon.active : item.icon.inactive" :class="item.style?'fontsize':''"/>
          </van-uploader>
          <template v-if="!item.upLoad">
            <img :src="props.active ? item.icon.active : item.icon.inactive" :class="item.style?'fontsize':''"/>
          </template>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import {tabBar} from '../data'
  import { ref, reactive, defineComponent,toRefs } from 'vue'
  export default defineComponent({
    name: 'TabBar',
    emits: ['chang'],
    setup(props: any, context: any) {
      const active = ref(0)
      const handleChange = (value: any) => {
        context.emit('chang', value)
      }
      return {
        active,
        tabBar,
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
