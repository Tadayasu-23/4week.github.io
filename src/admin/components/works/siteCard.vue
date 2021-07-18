<template lang="pug">
   .sites__prev.item
      .prev__imgbox
         img(:src="`https://webdev-api.loftschool.com/${copyWork.photo}`").prev__img
         tagList(:techs="copyWork.techs")
      .prev__desc.prev__desc--works
         .prev__title {{ copyWork.title }}
         p.prev__text {{ copyWork.description }}
         a.prev__link(:href="`${copyWork.link}`") {{ copyWork.link }}
      .prev__btns
         button(type="button" @click="editBtn").prev__editbtn.prevbtn Править
         button(type="button" @click="deleteCard").prev__deletebtn.prevbtn Удалить   
</template>

<script>
import $axios from "../../request";
export default {
   components: {
     tagList: () => import("./tagList.vue"),
   },
	data() {
		return {
         copyWork: {...this.work},
		}
   },
   methods: {
      deleteCard() {
         $axios.delete(`/works/${this.work.id}`).then(() => {
            this.$emit('delete-card');
         })
      },
      editBtn() {
         this.$emit('edit-card', this.copyWork);
      }
   },
   props: {
      work: Object,
   }
}
</script>

<style lang="postcss" scoped src='../../pages/works/works.pcss'></style>