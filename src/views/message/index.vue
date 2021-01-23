<template>
  <div class="container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        @load="onLoad"
        ref="vanLoadRef"
      >
        <!--    <van-cell v-for="item in list" :key="item" :title="item" />-->
        <div class="flex">
          <van-cell title="单元格" value="内容" label="描述信息" v-for="(item, index) in messageList"
                    :key="index"
                    class="flex-item"
                    title-class="cell-title"
                    clickable
          >
            <template #icon>
              <van-image
                      round
                      width="46px"
                      height="46px"
                      :src="item.avatar"
              />
            </template>
            <template #title>
              <div>{{item.title}}</div>
            </template>
            <template #label>
              <div>{{item.description}}</div>
            </template>
            <template #default>
              <div>{{item.time}}</div>
              <van-badge :content="item.badge" max="99" />
            </template>
          </van-cell>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { defineComponent, reactive, toRefs ,ref} from 'vue'
  import { gourmetImgList } from '../home/data'
  import { messageList } from './data'
  export default defineComponent({
    name: 'Message',
    setup() {
      const vanLoadRef = ref(null)
      const data = reactive({
        messageList,
        loading: false,
        refreshing: false,
        finished: true,
        messageLists: []
      })
      const methods = reactive({
        onLoad() {
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          // setTimeout(() => {
          //   if (data.refreshing) {
          //     data.messageLists = []
          //     data.refreshing = false
          //   }
          //   for (let i = 0; i < 10; i++) {
          //     data.messageLists.push(messageList[data.messageLists.length])
          //   }
          //
          //   // 加载状态结束
          //   data.loading = false
          //
          //   // 数据全部加载完成
          //   if (data.messageLists.length >= gourmetImgList.length) {
          //     data.finished = true
          //   }
          // }, 1000)
        },
        onRefresh() {
          // 清空列表数据
          data.finished = false

          // 重新加载数据
          // 将 loading 设置为 true，表示处于加载状态
          data.loading = true
          setTimeout(()=>{
            data.finished = true
            data.refreshing =false
          },1000)
          methods.onLoad()
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods),
        vanLoadRef
      }
    }
  })
</script>

<style scoped lang="scss">
  .flex {
  height: calc(100vh - 100px);
  }
  ::v-deep .cell-title{
    text-align: left;
    padding-left: 10px;
  }
</style>
