<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    Autoplay
    Pagination
    :loop="swiperOptions.loop"
    :slidesPerView="swiperOptions.slidesPerView"
    :centered-slides="swiperOptions.centeredSlides"
    :watch-slides-progress="swiperOptions.watchSlidesProgress"
    :pagination="swiperOptions.pagination"
    :loop-additional-slides="5"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    @progress="onProgress"
    @setTransition="onSetTransition"
  >
    <swiper-slide
      ><img src="/@/assets/images/swiper/food1.jpg" alt="" class="main-img"
    /></swiper-slide>
    <swiper-slide
      ><img src="/@/assets/images/swiper/food2.jpg" alt="" class="main-img"
    /></swiper-slide>
    <swiper-slide
      ><img src="/@/assets/images/swiper/food3.jpg" alt="" class="main-img"
    /></swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
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
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
  export default defineComponent({
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide
    },
    setup(content) {
      console.log(content)
      const data = reactive({
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
            stopOnLastSlide: false,
            disableOnInteraction: true
          }
        }
      })
      const methods = reactive({
        onSwiper: () => {
          // console.log(1)
        },
        onSlideChange() {
          // console.log(2)
        },
        onProgress: function (a) {
          // var b, c, d;
          // for (b = 0; b < a.slides.length; b++) c = a.slides[b], d = c.progress, scale = 1 - Math.min(Math.abs(.2 * d), 1), es = c.style, es.opacity = 1 - Math.min(Math.abs(d / 2), 1), es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
        },
        onSetTransition: function (a, b) {
          // for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style, es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
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
  }
</style>
