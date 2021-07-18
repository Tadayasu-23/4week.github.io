<template lang="pug">
.aboutcontainer
	section.works-admin.section-admin.reviews-admin
		.container-admin.container-works.container
			.titlebox
				.titlebox__about Блок "Отзывы"
			reviewsForm(
				:is-edit="isEdit"
				:for-edit="forEdit"
				:is-ready="isReady"
				@cancel-sites="isNot"
			)
			.sites
				addReviews(@activate-form="activateForm")
				reviewCard(
					v-for="review in reviews"
					:key="review.id"
					:reviews="review"
					@delete-card="cardDelete"
					@edit-card="cardEdit"
				)
</template>

<script>
import $axios from "../../request";
export default {
	components: {
		addReviews: () => import ("../../components/reviews/addReviews.vue"),
		reviewCard: () => import ("../../components/reviews/reviewCard.vue"),
		reviewsForm: () => import ("../../components/reviews/reviewsForm.vue")
	},
	data() {
		return {
			reviews: [],
			forEdit: {},
			isEdit: false,
			isReady: false,
		}
	},
	async created() {
		const { data } = await $axios.get('/reviews/471');
		this.reviews = data;
	},
	methods: {
		cardDelete(someCard) {
			this.reviews.pop(someCard);
		},
		isNot() {
			this.isReady = false;
			this.isEdit = false;
		},
		activateForm() {
			this.isReady = true;
		},
		cardEdit(editedCard) {
			this.isEdit = true;
			this.isReady = true;
			this.forEdit = editedCard;
		},
	},
}
</script>

<style lang="postcss" scoped src='./reviews.pcss' />