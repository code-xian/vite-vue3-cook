<template>
  <div>
  <div>发现11</div>
  <div>{{ddd()}}</div>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from "vue";

  export default defineComponent({
    name: 'Explore',
    setup() {
      const time = reactive({
        // sss:moment().format('MMMM Do YYYY, h:mm:ss a'),
        ddd() {
          console.log(this.$moment())
        }
      })
      const refTime = toRefs(time)
      return {
        ...refTime
      }
    }
  })
</script>

<style scoped></style>
