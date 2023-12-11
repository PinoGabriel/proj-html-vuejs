<script>
export default {
    name: "AppCard",
    props: ["cardElement"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        }
    }
}
</script>


<template>
    <div class="cards">
        <img :src="getImgPath(cardElement.img)" alt="group">
        <h2>{{ cardElement.title }}</h2>
        <p>{{ cardElement.subtitle }}</p>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.cards {
    width: calc(100% / 4);
    position: relative;
    padding: 5rem;
    border-radius: 40px;
    color: black;
    transition: linear 0.3s;
    margin: 16rem 0 10rem 0;
}

.cards:hover {
    background: rgb(11, 24, 82);
    background: linear-gradient(180deg, rgba(11, 24, 82, 1) 0%, rgba(3, 6, 54, 1) 100%);
    color: white;
}

img {
    position: absolute;
    top: -30%;
    left: 17%;
    padding: 40px;
    border-radius: 40px;
    transition: linear 0.3s;
    width: 250px;
    height: 250px;
    object-fit: contain;
}

.cards:hover img {
    background-color: white;
    box-shadow: 0px 0px 39px 15px rgba(0, 0, 0, 0.1);
}

.cards:hover .fa-arrow-right {
    display: block;
}

h2 {
    margin: 5.5rem 0 2rem 0;
}

.fa-arrow-right {
    color: white;
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    padding: 20px;
    border-radius: 50px;
    position: absolute;
    left: 42%;
    bottom: -5%;
    transition: linear 0.3s;
    display: none;
}
</style>
