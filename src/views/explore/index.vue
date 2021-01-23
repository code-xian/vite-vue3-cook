<template>
  <div>
    <van-search
      v-model="searchInput"
      shape="round"
      placeholder="请输入搜索关键词"
      class="search"
      @search="onSearch"
    />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!--    <van-cell v-for="item in list" :key="item" :title="item" />-->
        <div class="flex">
          <div
            v-for="(item, index) in gourmetImgLists"
            :key="index"
            class="flex-item"
            :style="{
              background:
                'linear-gradient(180.2deg, rgba(255, 255, 255, 0) 50%, #000000 99.82%), url(' +
                item.img +
                '), #FEA6A0',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px'
            }"
          >
            <div class="gourmetTitle">{{ item.title }}</div>
            <!--          <img :src="item && item.img" alt="" class="list-img" />-->
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { defineComponent, reactive, toRefs,getCurrentInstance } from 'vue'
  import { gourmetImgList } from '../home/data'

  export default defineComponent({
    name: 'Explore',
    setup(props,context) {
      const { ctx } = getCurrentInstance()
      const data = reactive({
        searchInput: '',
        loading: false,
        refreshing: false,
        finished: false,
        gourmetImgLists: []
      })
      const methods = reactive({
        onSearch() {
          ctx.$toast('没得搜')
        },
        onLoad() {
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
            if (data.refreshing) {
              data.gourmetImgLists = []
              data.refreshing = false
            }
            for (let i = 0; i < 10; i++) {
              data.gourmetImgLists.push(gourmetImgList[data.gourmetImgLists.length])
            }

            // 加载状态结束
            data.loading = false

            // 数据全部加载完成
            if (data.gourmetImgLists.length >= gourmetImgList.length) {
              data.finished = true
            }
          }, 1000)
        },
        onRefresh() {
          // 清空列表数据
          data.finished = false

          // 重新加载数据
          // 将 loading 设置为 true，表示处于加载状态
          data.loading = true
          methods.onLoad()
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>

<style scoped lang="scss">
  .search {
    margin: 10px auto;
  }
  .flex {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .flex-item {
      margin-bottom: 10px;
      height: 230px;
      flex-basis: 45%;
      transition: all 0.1s;
    }
    .flex-item:active {
      transform: scale(1.05);
      box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5);
    }
    .gourmetTitle {
      transform: translateY(200px);
      color: #fff;
      font-weight: 700;
    }
  }
</style>
