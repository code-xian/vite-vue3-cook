<template>
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>Slide 1<img src="/@/assets/images/swiper/food1.jpg" alt="" /></swiper-slide>
    <swiper-slide>Slide 2<img src="/@/assets/images/swiper/food2.jpg" alt="" /></swiper-slide>
    <swiper-slide>Slide 1113<img src="/@/assets/images/swiper/food3.jpg" alt="" /></swiper-slide>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>

<script lang="ts">
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
  import { defineComponent, reactive, toRefs } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'

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
        swiperOptions: {
          slidesPerView: 3,
          grabCursor: true,
          spaceBetween: 50,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      })
      const methods = reactive({
        onSwiper: () => {
          console.log(1)
        },
        onSlideChange() {
          console.log(2)
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

<style scoped></style>
