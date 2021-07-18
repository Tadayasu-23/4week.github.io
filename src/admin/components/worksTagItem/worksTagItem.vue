<template lang="pug">
   li.prev__tag {{tech}} 
      
</template>

<script>
import $axios from "../../request";
export default {
   data() {
      return {
      }
   },
   props: {
      tech: String,
   }
   
}
</script>

<style lang="postcss" scoped src='./worksTagItem.pcss'>

</style>