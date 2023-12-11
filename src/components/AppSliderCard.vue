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
    padding: 0 20px;
}

.bgCard {
    background-color: white;
    box-shadow: 0px 0px 17px -11px rgba(66, 68, 90, 1);
    max-height: 500px;
    border-radius: 50px;
}

.underImg {
    width: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

p {
    color: lightgray;
}

img {
    width: 100%;
    border-radius: 50px;
}
</style>
