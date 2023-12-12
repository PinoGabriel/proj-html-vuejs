<script>
export default {
    name: "AppCardTestimonial",
    props: ["cardElement"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        },
        getMidNumber(number) {
            return Math.ceil(number)
        },
        getNumberStars(number) {
            const midNumber = this.getMidNumber(number)
            const fullStar = `<i class="fa-solid fa-star"></i>`.repeat(midNumber);
            const emptyStar = `<i class="fa-regular fa-star"></i>`.repeat(5 - midNumber);
            return `${fullStar}${emptyStar}`;
        }
    }
}
</script>


<template>
    <div class="cards">
        <img :src="getImgPath(cardElement.img)" alt="group">
        <p v-html="getNumberStars(cardElement.vote)"></p>
        <p>{{ cardElement.text }}</p>
        <h2>{{ cardElement.name }}</h2>
        <p>{{ cardElement.work }}</p>
        <div class="oblique-lines"></div>
        <div class="oblique-lines2"></div>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.cards {
    width: calc(100% / 3);
    position: relative;
    padding: 5rem;
    border-radius: 40px;
    color: black;
    transition: linear 0.3s;
    margin: 10rem 0 5rem 0;

    p:nth-child(2) {
        padding: 2rem 0;
        color: rgb(192, 46, 110);
        color: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
        font-size: 1.5rem;
    }
}



.cards:hover {
    background: white;
    box-shadow: 0px 0px 25px 8px rgba(211, 211, 211, 0.3);
}

img {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    border-radius: 100px;
    padding: 8px;
    transition: linear 0.3s;
    width: 150px;
    height: 150px;
    object-fit: contain;
}

h2 {
    margin: 2rem 0 1rem 0;
}

.oblique-lines::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 75px;
    background-color: #ccc;
    transform: skewX(-28deg);
    opacity: 0.1;
}

.oblique-lines2::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 54%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 75px;
    background-color: #ccc;
    transform: skewX(-28deg);
    opacity: 0.1;
}
</style>
