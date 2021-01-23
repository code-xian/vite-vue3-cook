<template>
  <div class="container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <swiper
        :slides-per-view="3"
        :space-between="50"
        Autoplay
        Pagination
        navigation
        EffectFade
        :loop="swiperOptions.loop"
        :slidesPerView="swiperOptions.slidesPerView"
        :centered-slides="swiperOptions.centeredSlides"
        :watch-slides-progress="swiperOptions.watchSlidesProgress"
        :pagination="swiperOptions.pagination"
        :loop-additional-slides="5"
        :fadeEffect="swiperOptions.fadeEffect"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @progress="onProgress"
        @setTransition="onSetTransition"
      >
        <swiper-slide v-for="item in swiperImgList" :key="item.id">
          <router-link :to="{ name: item.route }">
            <div
              class="main-img"
              :style="{
                background:
                  'linear-gradient(359.69deg, rgba(0, 0, 0, 0.5) 0.28%, rgba(255, 255, 255, 0) 56.07%), linear-gradient(213.76deg, rgba(33, 43, 54, 0.5) 1.48%, rgba(255, 255, 255, 0) 20.93%), url(' +
                  item.img +
                  '), #FFFFFF'
              }"
            >
              <div class="main-title">{{ item.title }}</div>
              <div class="main-info">{{ item.info }}</div>
              <div class="main-avatar">
                <van-image :width="(32/37.5)+'rem'" :height="(32/37.5)+'rem'" fit="cover" round :src="item.avatar" />
              </div>
              <div class="main-name">{{ item.name }}</div>
            </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <div class="title">Popular recipes</div>
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

<script lang="ts">
  import { swiperImgList, gourmetImgList } from './data'
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper'
  import { defineComponent, reactive, toRefs } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper-bundle.css'
  import 'swiper/swiper.scss'

  import 'swiper/components/pagination/pagination.scss'
  // import 'swiper/swiper.scss'
  // import 'swiper/components/navigation/navigation.scss'
  // import 'swiper/components/pagination/pagination.scss'
  // import 'swiper/components/scrollbar/scrollbar.scss'
  // import 'swiper/swiper-bundle.min.css'
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
  export default defineComponent({
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide
    },
    setup(content) {
      interface dataType {
        list: any
        loading: boolean
        finished: boolean
        refreshing: boolean
        swiperOptions: any
        gourmetImgLists: any
      }
      const data:dataType = reactive({
        swiperImgList,
        gourmetImgLists: [],
        list: [],
        loading: false,
        refreshing: false,
        finished: false,
        swiperOptions: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          watchSlidesProgress: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 1000,
            stopOnLastSlide: true,
            disableOnInteraction: true
          },
          fadeEffect: {
            crossFade: true
          }
        }
      })
      const methods = reactive({
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
        },
        onSwiper: () => {
          // console.log(1)
        },
        onSlideChange() {
          // console.log(2)
        },
        onProgress: function (swiper, progress) {
          // console.log(document.body.clientWidth,1);
          // console.log(document.documentElement.clientWidth,2);
          // console.log(window.screen.width,3);
          //遍历所有slides轮播图
          for (let i = 0; i < swiper.slides.length; i++) {
            //获取到轮播
            var slide = swiper.slides.eq(i)
            var slideProgress = swiper.slides[i].progress
            let modify = 1
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
            }
            let translate = (slideProgress * modify * 260)/37.5 + 'rem'  //改成rem
            // let translate = slideProgress * modify * 260 +'px'
            let scale = 1 - Math.abs(slideProgress) / 5
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
            slide.transform('translateX(' + translate + ') scale(' + scale + ')')
            slide.css('zIndex', zIndex)
            slide.css('opacity', 1)
            // slide.css('box-shadow', "0 0.3px 0.6px rgba(0, 0, 0, 0.056),0 0.7px 1.3px rgba(0, 0, 0, 0.081),0 1.3px 2.5px rgba(0, 0, 0, 0.1),0 2.2px 4.5px rgba(0, 0, 0, 0.119),0 4.2px 8.4px rgba(0, 0, 0, 0.144),0 10px 20px rgba(0, 0, 0, 0.2)")
            // if (Math.abs(slideProgress) > 2) {
            //   slide.css('opacity', 0);
            // }
            // if (document.body.clientWidth % 4 === 0) {
            //   if (Math.abs(slideProgress) > 0) {
            //     slide.css('opacity', 0.7);
            //   }
            //   if (Math.abs(slideProgress) > 1.5) {
            //     slide.css('opacity', 0);
            //   }
            // }else if (document.body.clientWidth % 3 === 0){
            if (Math.abs(slideProgress) > 0.1) {
              slide.css('opacity', 0.7)
            }
            if (Math.abs(slideProgress) > 1.5) {
              slide.css('opacity', 0)
            }
            // }
          }
        },
        onSetTransition: function (swiper, transition) {
          for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i)
            slide.transition(transition)
          }
        }
      })
      const refData = toRefs(data)
      const refMethods = toRefs(methods)
      return {
        ...refData,
        ...refMethods
      }
    }
  })
</script>

<style scoped lang="scss">
  //@import 'swiper.css';
  .main-img {
    object-fit: cover;
    width: 80%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 12px 8px -12px #000;
    margin: 0 auto 5px;
    background-size: cover !important;
    background-position: center !important;
  }
  ::v-deep(.swiper-button-next):focus {
    outline: none;
  }
  ::v-deep(.swiper-button-prev):focus {
    outline: none;
  }
  ::v-deep(.swiper-pagination-bullet):focus {
    outline: none;
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
  }
  .title {
    margin: 30px 10px 0;
    text-align: left;
    color: #ee5331;
    font-size: 18px;
    font-weight: 700;
  }
  .list-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 6px rgba(110, 116, 134, 0.24);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #000000 99.82%) #fea6a0;
  }
  .gourmetTitle {
    transform: translateY(200px);
    color: #fff;
    font-weight: 700;
  }
  .main-title {
    position: absolute;
    bottom: 22%;
    left: 15%;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
  }
  .main-info {
    position: absolute;
    bottom: 17%;
    left: 15%;
    color: #ffffff;
    font-size: 18px;
  }
  .main-avatar {
    position: absolute;
    bottom: 6%;
    left: 15%;
  }
  .main-name {
    position: absolute;
    bottom: 8%;
    left: 25%;
    color: #ffffff;
    font-size: 16px;
  }
  .container {
    padding-top: 30px;
    background: linear-gradient(rgba(254, 166, 160, 0.7), rgba(255, 255, 255, 0.5) 800px);
  }
</style>
