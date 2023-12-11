<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue';

export default {
	name: "PageMain",
	components: {
		AppCard,
	},
	data() {
		return {
			store
		}
	},
	methods: {
	}
}
</script>

<template>
	<section class="mainServices">
		<p>Our Service</p>
		<h2>What <span>We Do</span></h2>
		<p class="mb-8">When, While the lovely valley teems with vapour around meand the</p>
		<div class="container">
			<AppCard v-for="element in store.WWD" :cardElement="element" />
		</div>
	</section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.mainServices {
	width: 1500px;
	margin: 5rem auto;
	text-align: center;

	p:nth-child(1) {
		color: $colorRed;
	}

	h2 {
		margin: 1rem 0;
		font-size: 3rem;
	}

	span {
		font-weight: 400;
	}

	.mb-8 {
		margin-bottom: 16rem;
	}

}

.container {
	width: 1500px;
	display: flex;
}
</style>
