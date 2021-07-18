<template lang="pug">
   .sites__prev.reviews__prev
      .prev__imgbox.prev__imgbox--comments
         .prev__imgwrap.prev__imgwrap--comments
            img(:src="cover").prev__img
         .prev__titlewrap
            .prev__title.prev__title--comments {{copyRev.author}}
            .prev__position.prev__position--comments {{copyRev.occ}}
      .prev__desc.prev__desc--comments
         p.prev__text {{copyRev.text}}
      .prev__btns.prev__btns--comments
         button(type="button" @click="editBtn").prev__editbtn.prevbtn Править
         button(type="button" @click="deleteCard").prev__deletebtn.prevbtn Удалить
</template>

<script>
import $axios from "../../request";
export default {
	data() {
		return {
         copyRev: {...this.reviews},
		}
   },
   methods: {
      deleteCard() {
         $axios.delete(`/reviews/${this.reviews.id}`).then(() => {
            this.$emit('delete-card');
         })
      },
      editBtn() {
         this.$emit('edit-card', this.copyRev);
      }
   },
   computed: {
      cover() {
         return `https://webdev-api.loftschool.com/${this.copyRev.photo}`
      }
   },
   props: {
      reviews: Object,
   }
}
</script>

<style lang="postcss" scoped src='../../pages/reviews/reviews.pcss'></style>