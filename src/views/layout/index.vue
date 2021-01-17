<template>
  <div class="app-container">
    <div class="layout-content">
<!--      <keep-alive v-if="$route.meta.keepAlive">-->
        <router-view></router-view>
<!--      </keep-alive>-->
<!--      <keep-alive v-else>-->
<!--        <router-view></router-view>-->
<!--      </keep-alive>-->
    </div>
    <div class="layout-footer">
      <TabBar @chang="handleChange"></TabBar>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, reactive ,defineComponent} from 'vue'
  import TabBar from './components/TabBar.vue'
  export default defineComponent({
    name: 'index',
    components: {
      TabBar
    },
    setup() {
      const handleChange = (value: any) => {
        console.log(value)
      }
      return {
        handleChange
      }
    }
  })
</script>

<style scoped lang="scss"></style>
