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
    :autoplay="swiperOptions.autoplay"
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
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script lang="ts">
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay ,EffectFade} from 'swiper'
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
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade])
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
            stopOnLastSlide: true,
            disableOnInteraction: true
          },
          fadeEffect: {
            crossFade: true
          },
        }
      })
      const methods = reactive({
        onSwiper: () => {
          // console.log(1)
        },
        onSlideChange() {
          // console.log(2)
        },
        onProgress: function (swiper,progress) {
          //遍历所有slides轮播图
          for (let i = 0; i < swiper.slides.length; i++) {
            //获取到轮播
            var slide = swiper.slides.eq(i);
            var slideProgress = swiper.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 2) {
              slide.css('opacity', 0);
            }
          }},
        onSetTransition: function (swiper,transition) {
          for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i)
            slide.transition(transition);
          }}
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
    width: 80%;
    height: 400px;
  }
</style>
