<template>
  <div>
    <div class="top-container" ref="backgroundRef">
      <van-image
        class="avatar"
        round
        :width="(90/37.5)+'rem'"
        :height="(90/37.5)+'rem'"
        src="@/assets/images/avatar/avatar4.png"
      />
      <div class="name">玛丽</div>
      <div class="flex">
        <div class="flex-item">
          <div class="flex-item__number">1,222</div>
          <div class="flex-item__label">获赞</div>
        </div>
        <div class="flex-item">
          <div class="flex-item__number">80</div>
          <div class="flex-item__label">关注</div>
        </div>
        <div class="flex-item">
          <div class="flex-item__number">132</div>
          <div class="flex-item__label">粉丝</div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <van-tabs v-model:active="active" sticky swipeable :offset-top="0">
        <van-tab v-for="item in tabs" :title="item.tabName">
          <van-grid :gutter="10" :column-num="2" clickable class="van-grid">
            <van-grid-item v-for="(itemSon, index) in gourmetImgList" :key="itemSon.id">
              <div class="van-grid__flex">
                <van-image :src="itemSon.img" :width="(55/37.5)+'rem'" :height="(55/37.5)+'rem'" #icon class="van-grid__img"/>
                <div class="van-grid__text">{{ itemSon.description }}</div>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { tabs } from './data'
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  import { gourmetImgList } from '../home/data'

  export default defineComponent({
    name: 'MyCenter',
    setup() {
      const backgroundRef = ref(null)
      window.onscroll = function () {
        let scrollTop = +window.scrollY
        if (scrollTop > 180) {
          // backgroundRef.value.style.filter = 'blur(3px)'
          // backgroundRef.value.style.transition = 'all ,0.5s'
        } else {
          // backgroundRef.value.style.filter = 'none'
        }
      }
      const active = ref(1)
      const data = reactive({
        tabs,
        gourmetImgList
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
    height: 230px;
    background: url('../../assets/images/mine/mineBG.png');
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
  .avatar {
    margin-top: 40px;
  }
  .name {
    font-size: 18px;
    margin-top: 5px;
    font-weight: 700;
  }
  .flex {
    padding: 0 35px;
    margin-top: 18px;
    display: flex;
    .flex-item {
      flex-basis: 33%;
      &__number{
        font-size: 18px;
      }
      &__label{
        font-size: 10px;
        color: rgba(219, 219, 219, 0.62);
      }
    }
  }
  .van-grid {
    margin-top: 12px;
    &__flex {
      display: flex;
      justify-content: space-evenly;
    }
    &__img{
     ::v-deep img{
       width: 55px;
       border-radius: 10px;
     }
      flex: 1;
    }

    &__text{
      color: #000000;
      flex: 1.5;
      text-align: left;
    }
  }
</style>
