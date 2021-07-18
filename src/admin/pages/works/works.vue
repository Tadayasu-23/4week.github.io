<template lang="pug">
.admincontainer
	section.works-admin.section-admin
		.container-admin.container-works.container
			.titlebox
				.titlebox__about Блок "Работы"
			sitesForm(
				:is-edit="isEdit"
				:for-edit="forEdit"
				:is-ready="isReady"
				@cancel-sites="isNot"
			)
			.sites
				addSites(@activate-form="activateForm")
				siteCard(
					v-for="work in works" 
					:work="work"
					:key="work.id"
					@delete-card="cardDelete"
					@edit-card="cardEdit"
				)
</template>

<script>
import $axios from "../../request";
export default {
	components: {
		addSites: () => import ("../../components/works/addSites.vue"),
		siteCard: () => import ("../../components/works/siteCard.vue"),
		sitesForm: () => import ("../../components/works/sitesForm.vue")
	},
	data() {
		return {
			works: [],
			forEdit: {},
			isEdit: false,
			isReady: false,
		}
	},

	async created() {
		const { data } = await $axios.get('/works/471');
		this.works = data;
	},
	methods: {
		isNot() {
			this.isReady = false;
			this.isEdit = false;
		},
		activateForm() {
			this.isReady = true;
		},
		cardDelete(someCard) {
			this.works.pop(someCard);
		},
		cardEdit(editedCard) {
			this.isEdit = true;
			this.isReady = true;
			this.forEdit = editedCard;
		},
	},
}
</script>

<style lang="postcss" scoped src='./works.pcss'></style>