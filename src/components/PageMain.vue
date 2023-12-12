<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue';
import AppSliderCard from './AppSliderCard.vue';
import AppCardPrice from './AppCardPrice.vue';

export default {
	name: "PageMain",
	components: {
		AppCard,
		AppSliderCard,
		AppCardPrice
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
			<div class="rightSide">
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

	<section class="portfolio">
		<p class="title">Portfolio</p>
		<div class="container">
			<div>
				<h2>Latest <span>work</span></h2>
			</div>
			<div>
				<i class="fa-solid fa-arrow-left"></i>
				<i class="fa-solid fa-arrow-right"></i>
			</div>
		</div>
		<div class="containerSlider">
			<AppSliderCard v-for="element in store.portfolio" :sliderProp="element" />
		</div>
		<div class="bullet">
			<div class="bulletRed"></div>
			<div class="bulletGrey"></div>
			<div class="bulletGrey"></div>
			<div class="bulletGrey"></div>
			<div class="bulletGrey"></div>
		</div>
	</section>

	<section class="PriceList">
		<p>Price List</p>
		<h2>Our <span>Pricing</span></h2>
		<p>When, while the lovely valley teems with vapour around meand the meridian sun <br> strikes the upper surfaces .
		</p>
		<div class="containerCardPrice">
			<AppCardPrice v-for="element in store.priceList" :cardPriceProp="element" />
		</div>
	</section>
</template>



<style scoped lang="scss">
@use '../styles/partials/variables' as *;


/***** mainServices *******/
.mainServices {
	max-width: 1500px;
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


/***** StartYourProject *******/
.StartYourProject {
	text-align: center;
	background: rgb(11, 24, 82);
	background: linear-gradient(180deg, rgba(11, 24, 82, 1) 0%, rgba(3, 6, 54, 1) 100%);

	.container {
		padding: 5rem 0;
		justify-content: space-between;
		color: white;
	}

	.rightSide {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40%;
		text-align: left;
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
		box-shadow: 0px 0px 50px 20px rgba(255, 255, 255, 0.1);
	}

	.btnRed:hover {
		background: rgb(8, 147, 195);
		background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
		box-shadow: 0px 0px 50px 20px rgba(255, 255, 255, 0.1);
	}
}


/***** PORTFOLIO *******/

.portfolio {
	margin: 5rem auto;
	overflow-x: hidden;

	.title {
		max-width: 1500px;
		margin: 0 auto;
		color: $colorRed;
		margin-bottom: 1rem;
	}

	.container {
		flex-wrap: nowrap;
		justify-content: space-between;

		h2 {
			font-size: 2.5rem;
		}

		span {
			font-weight: 400;
		}

		i {
			margin-left: 5rem;
			color: $colorRed;
			border: 1px solid $colorRed;
			padding: 15px;
			font-size: 1.2rem;
			border-radius: 50%;
			cursor: pointer;
		}

		i:hover {
			background: rgb(192, 46, 110);
			background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
			color: white;
		}
	}

	.containerSlider {
		margin: 6rem auto;
		display: flex;
		max-width: 1500px;
		flex-wrap: nowrap;
		justify-content: space-between;
		overflow: visible;
	}

	.bullet {
		max-width: 1500px;
		margin: 0 auto;
		justify-content: center;
		display: flex;

		.bulletRed {
			background: rgb(192, 46, 110);
			background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
			height: 10px;
			border-radius: 50%;
			width: 10px;
			margin-right: 0.4rem;
			cursor: pointer;
		}

		.bulletGrey {
			background-color: #E5E5EA;
			height: 10px;
			border-radius: 50%;
			width: 10px;
			margin: 0 0.4rem;
			cursor: pointer;
		}
	}
}


/***** PriceList *******/
.PriceList {
	background: rgb(11, 24, 82);
	background: linear-gradient(180deg, rgba(11, 24, 82, 1) 70%, rgba(255, 255, 255, 1) 30%);
	text-align: center;
	color: white;

	p:nth-child(1) {
		color: $colorRed;
		padding-top: 5rem;
	}

	h2 {
		font-size: 3rem;
		padding: 2rem 0;

		span {
			font-weight: 400
		}

		;
	}

	p:nth-child(3) {
		padding-bottom: 5rem;
	}

	.containerCardPrice {
		display: flex;
		max-width: 1500px;
		margin: 0 auto;
	}


}




/****** GENERICHE *****/
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
	max-width: 1500px;
	display: flex;
	margin: 0 auto;
}
</style>
