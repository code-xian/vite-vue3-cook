<template>
  <div>
    <div class="top-container" ref="backgroundRef">
      <van-image
              class="avatar"
              round
              width="90px"
              height="90px"
              src="/@/assets/images/avatar/avatar4.png"
      />
      <div class="name">玛丽</div>
      <div class="flex">
        <div class="flex-item">
          <div>1,222</div>
          <div>获赞</div>
        </div>
        <div class="flex-item">
          <div>80</div>
          <div>关注</div>
        </div>
        <div class="flex-item">
          <div>132</div>
          <div>粉丝</div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <van-tabs v-model:active="active" sticky swipeable :offset-top="0">
        <van-tab v-for="item in tabs" :title="item.tabName">
          <van-grid :gutter="10" :column-num="2" clickable>
            <van-grid-item v-for="(items, index) in 40" :key="index" icon="photo-o" text="文字" />
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { tabs } from './data'
  import { defineComponent, reactive, toRefs, ref } from 'vue'

  export default defineComponent({
    name: 'MyCenter',
    setup() {
      const backgroundRef = ref(null)
      window.onscroll = function () {
        let scrollTop = +window.scrollY
        console.log(scrollTop)
        if (scrollTop > 180) {
          // backgroundRef.value.style.filter = 'blur(3px)'
          // backgroundRef.value.style.transition = 'all ,0.5s'
        } else {
          // backgroundRef.value.style.filter = 'none'
        }
      }
      const active = ref(1)
      const data = reactive({
        tabs
      })
      const methods = reactive({})
      return {
        ...toRefs(data),
        ...toRefs(methods),
        active,
        backgroundRef
      }
    }
  })
</script>

<style scoped lang="scss">
  .top-container {
    height: 220px;
    background: url('/@/assets/images/mine/mineBG.png');
    background-size: cover;
    opacity: 1;
  }
  .top-container {
  }
  .main-container {
    background: linear-gradient(#2a2a2b, #f2f2f2 10px);
  }
  ::v-deep .van-tabs__nav {
    border-radius: 10px;
  }
  .avatar{
    margin-top: 40px;
  }
  .name {
    font-size: 18px;
    margin-top: 5px;
  }
  .flex {
    margin-top: 22px;
    display: flex;
    .flex-item {
      flex-basis: 33%
    }
  }
</style>
