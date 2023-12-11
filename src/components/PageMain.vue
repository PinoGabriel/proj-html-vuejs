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
		<p>When, While the lovely valley teems with vapour around meand the</p>
		<div class="container">
			<AppCard v-for="element in store.WWD" :cardElement="element" />
		</div>
		<a class="btnGeneric btnRed" href="#">View All Services</a>
	</section>

	<section class="StartYourProject">
		<div class="container">
			<div>
				<img src="../assets/corporate-landing/images/men-data.png" alt="menData">
			</div>
			<div class="w-35 text-align-left">
				<p>Start Your Project</p>
				<h2>Grow Your Business <span>With Our Strategy</span></h2>
				<p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surfaces
					.of the impenetrable foilage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
				<div>
					<a class="btnGeneric btnRed" href="#">Try it Now</a>
					<a class="btnGeneric btnBlue" href="#">Explore More</a>
				</div>
			</div>
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

	.btnRed {
		background: rgb(192, 46, 110);
		background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
		box-shadow: 0px 0px 39px 15px rgba(192, 46, 110, 0.3);
	}

	.btnGeneric:hover {
		background: rgb(8, 147, 195);
		background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
		box-shadow: 0px 0px 39px 15px rgba(8, 147, 195, 0.3);
	}

}

.StartYourProject {
	text-align: center;
	background: rgb(11, 24, 82);
	background: linear-gradient(180deg, rgba(11, 24, 82, 1) 0%, rgba(3, 6, 54, 1) 100%);

	.container {
		padding: 5rem 0;
		justify-content: space-between;
		color: white;
	}

	h2 {
		font-size: 3.6rem;
		padding: 2rem 0;
	}

	span {
		font-weight: 400;
	}

	p:nth-child(3) {
		color: $colorBlue;
		margin-bottom: 4rem;
	}

	a {
		margin-right: 2rem;
	}

	.btnBlue:hover {
		background: rgb(192, 46, 110);
		background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
		box-shadow: 0px 0px 50px 0px rgba(255, 255, 255, 0.1);
	}

	.btnRed:hover {
		background: rgb(8, 147, 195);
		background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
		box-shadow: 0px 0px 50px 0px rgba(255, 255, 255, 0.1);
	}
}

.btnGeneric {
	padding: 1rem 3rem;
	border-radius: 50px;
	text-decoration: none;
	color: white;
}

.btnBlue {
	background: rgb(8, 147, 195);
	background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);

}

.btnRed {
	background: rgb(192, 46, 110);
	background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
}

.container {
	width: 1500px;
	display: flex;
	margin: 0 auto;
}
</style>
