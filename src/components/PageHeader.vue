<script>
import { store } from '../store.js'
export default {
    name: "PageHeader",
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
    <section class="backgroundHeader">
        <div class="container">
            <div>
                <img src="../assets/corporate-landing/images/logo.png" alt="img">
            </div>
            <div>
                <a v-for="element in store.navbar" href="#">{{ element }}</a>
                <a class="btnSignIn" href="#"> Sign In</a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.backgroundHeader {
    background-color: $colorBg;
    height: 100vh;
    color: $colorWhite;

    .container {
        width: 1500px;
        margin: 0 auto;
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

img {
    height: 5rem;
}

a {
    color: white;
    text-decoration: none;
    margin-left: 2rem;
    font-size: 1rem;
}

a:nth-child(1) {
    color: #F9636B;
}

.btnSignIn {
    margin-left: 3rem;
    background: rgb(8, 147, 195);
    background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
    padding: 0.7rem 1.5rem;
    border-radius: 50px;
}
</style>
