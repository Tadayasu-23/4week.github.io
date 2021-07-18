<template lang="pug">
   ul.prev__tags
      tagItem(
         v-for="(tech, ind) in techsArray"
         :key="ind"
         :tech="tech"
      )
</template>

<script>
import $axios from "../../request";

export default {
   components: {
      tagItem: () => import("./tagItem.vue"),
   },
   data() {
      return {
         techsArray: [],
         copyTech: this.techs,
      }
   },
   props: {
      techs: String,
   },
   methods: {
      arrSplit() {
         this.techsArray = this.copyTech.split(', ', 3);
         console.log(this.techs.split);
      }
   },
   created() {
      this.techsArray = this.copyTech.split(', ', 3);
      console.log(this.techs.split);
   },
}
</script>

<style lang="postcss" scoped src='../../pages/works/works.pcss'></style>