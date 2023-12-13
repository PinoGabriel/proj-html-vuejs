<script>

export default {
    name: "AppCardBlog",
    props: ["cardBlogProp"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        }
    }
}
</script>


<template>
    <div :class="{ 'unique': cardBlogProp.class === 'unique', 'normal': cardBlogProp.class === 'normal' }">
        <p v-html="cardBlogProp.title"></p>
        <h2>{{ cardBlogProp.subtitle }}</h2>
        <div>
            <p>{{ cardBlogProp.text }}</p>
            <a href="#">{{ cardBlogProp.btn }}</a>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.unique {
    background-image: url(/src/assets/corporate-landing/images/headway-537308-unsplash-1380x703.jpg);
    width: 48%;
    height: 500px;
    border-radius: 3rem;
    color: white;
    padding: 2rem;
    margin: 1rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: end;

    h2 {
        padding: 1rem 0;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            width: 70%;
        }

        a {
            text-decoration: none;
            color: black;
            background-color: white;
            padding: 1rem 3rem;
            border-radius: 3rem;
        }
    }
}

.normal {
    background: linear-gradient(180deg, rgba(11, 24, 82, 1) 0%, rgba(3, 6, 54, 1) 100%);
    width: 23%;
    height: 500px;
    border-radius: 3rem;
    color: white;
    padding: 3rem;
    margin: 1rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h2 {
        padding: 2rem 0;
    }

    div {

        p {
            margin-bottom: 4rem;
        }

        a {
            text-decoration: none;
            color: black;
            background-color: white;
            padding: 1rem 3rem;
            border-radius: 3rem;
        }
    }
}

a:hover {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
}
</style>
