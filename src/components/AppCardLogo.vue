<script>
export default {
    name: "AppCardLogo",
    props: ["cardElement"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        },
    }
}
</script>


<template>
    <div class="cards">
        <img :src="getImgPath(cardElement)" alt="logo">
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.cards {
    width: calc(100% / 5);
    padding: 0 5rem;
    margin: 3rem 0;
    display: flex;
    align-items: center;
}

img {
    width: 100%;
}
</style>
