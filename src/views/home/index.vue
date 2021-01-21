<template>
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
    <!--    <swiper-slide-->
    <!--      ><img src="/@/assets/images/swiper/food1.jpg" alt="" class="main-img"-->
    <!--    /></swiper-slide>-->
    <!--    <swiper-slide-->
    <!--      ><img src="/@/assets/images/swiper/food2.jpg" alt="" class="main-img"-->
    <!--    /></swiper-slide>-->
    <!--    <swiper-slide-->
    <!--      ><img src="/@/assets/images/swiper/food3.jpg" alt="" class="main-img"-->
    <!--    /></swiper-slide>-->
    <swiper-slide v-for="item in imgList" :key="item.id">
      <router-link :to="{name:item.route}">
        <img :src="item.img" class="main-img" />
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
  <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</template>

<script lang="ts">
  import { imgList } from './data'
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper'
  import { defineComponent, reactive, toRefs } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper-bundle.css'
  import 'swiper/swiper.scss'

  import 'swiper/components/pagination/pagination.scss'
  // Import Swiper styles
  // import 'swiper/swiper.scss'
  // import 'swiper/components/navigation/navigation.scss'
  // import 'swiper/components/pagination/pagination.scss'
  // import 'swiper/components/scrollbar/scrollbar.scss'
  // import 'swiper/swiper-bundle.min.css'
  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
  export default defineComponent({
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide
    },
    setup(content) {
      console.log(content)
    interface s{
      list: any;
      loading: boolean;
      finished: boolean;
    }
      const data:s = reactive({
        imgList,
        list: [],
        loading: false,
        finished: false,
        // swiperOptions: {
        //   slidesPerView: 3,
        //   grabCursor: true,
        //   spaceBetween: 50,
        //   centeredSlides: true,
        //   autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        //   },
        //   loop: true,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   }
        // },
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
        onLoad(){
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
            for (let i = 0; i < 10; i++) {
              data.list.push(data.list.length + 1);
            }

            // 加载状态结束
            data.loading = false;

            // 数据全部加载完成
            if (data.list.length >= 40) {
              data.finished = true;
            }
          }, 1000);
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
            let translate = slideProgress * modify * 260 + 'px'
            let scale = 1 - Math.abs(slideProgress) / 5
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
            slide.transform('translateX(' + translate + ') scale(' + scale + ')')
            slide.css('zIndex', zIndex)
            slide.css('opacity', 1)
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
    height: 400px;
    border-radius: 10px;
  }
  ::v-deep(.swiper-button-next):focus{
    outline: none;
  }
</style>
