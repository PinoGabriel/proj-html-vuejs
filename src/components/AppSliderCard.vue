<script>
export default {
    name: "AppSliderCard",
    props: ["sliderProp"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        }
    }
}
</script>


<template>
    <section class="sliderCards">
        <div class="bgCard">
            <img :src="getImgPath(sliderProp.img)" alt="imgs">
            <div class="underImg">
                <h2>{{ sliderProp.title }}</h2>
                <p>{{ sliderProp.subtitle }}</p>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.sliderCards {
    width: calc(100% / 3);
    padding-right: 40px;
}

.bgCard {
    background: white;
    box-shadow: 0px 0px 17px -11px rgba(66, 68, 90, 1);
    max-height: 500px;
    border-radius: 40px;
    transition: background-color 0.5s ease;
}

.bgCard:hover {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
}

.bgCard:hover h2 {
    color: white;
}

.underImg {
    width: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
}

p {
    color: lightgray;
}

img {
    width: 100%;
    border-radius: 40px;
}
</style>
