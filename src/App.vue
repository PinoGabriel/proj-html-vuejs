<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'
import ElementAlwaysVisible from './components/ElementAlwaysVisible.vue'
import { store } from './store.js'

export default {
	components: {
		PageHeader,
		PageMain,
		PageFooter,
		ElementAlwaysVisible,
	},
	data() {
		return {
			store,
		}
	},
}
</script>

<template>
	<div>
		<ElementAlwaysVisible />
	</div>
	<header>
		<PageHeader />
	</header>
	<main>
		<PageMain />
	</main>
	<footer>
		<PageFooter />
	</footer>
</template>

<style lang="scss">
@use './styles/general.scss';
@media screen and (max-width: 1290px) {
	.container {
		width: 1100px;
	}
}
</style>

<style scoped lang="scss">
@use './styles/partials/variables' as *;
</style>
