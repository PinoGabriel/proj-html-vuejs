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
                <img src="../assets/corporate-landing/images/white-logo-2.png" alt="img">
            </div>
            <div>
                <a v-for="element in store.navbar" href="#">{{ element }}</a>
                <a class="btnSignIn" href="#"> Sign In</a>
            </div>
        </div>

        <div class="container conatinerJumbo">
            <div class="w-40">
                <h1 class="title">Business Planning</h1>
                <div class="title">Digital Technology</div>
                <h1 class="title">Modern Solution !</h1>

                <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surfaces.
                </p>

                <a class="btnGeneric btnRed" href="#">Try it Now</a>
                <a class="btnGeneric btnBlue" href="#">Explore More</a>
            </div>

            <div class="w-60">
                <img src="../assets/corporate-landing/images/header.png" alt="header">
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.backgroundHeader {
    background: rgb(11, 24, 82);
    background: linear-gradient(180deg, rgba(11, 24, 82, 1) 0%, rgba(3, 6, 54, 1) 100%);
    min-height: 100vh;
    color: $colorWhite;

    .container {
        padding: 1.5rem 0;
        justify-content: space-between;
        align-items: center;

        img {
            width: 100%;
        }

        a {
            color: white;
            text-decoration: none;
            margin-left: 2rem;
            font-weight: 600;
        }

        a:nth-child(1) {
            color: $colorRed;
        }
    }

    .conatinerJumbo {
        padding: 1.5rem 0;
        justify-content: space-between;
        align-items: center;

        .title {
            font-size: 3.6rem;
        }

        p {
            margin: 4rem 0;
            color: $colorBlue;
        }

        .btnGeneric {
            margin-right: 3rem;
            margin-left: 0;
        }


    }
}



a {
    color: white;
    text-decoration: none;
}

.btnSignIn {
    margin-left: 3rem;
    background: rgb(8, 147, 195);
    background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
    padding: 0.7rem 1.5rem;
    border-radius: 50px;
}

.btnSignIn:hover {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    box-shadow: 0px 0px 50px 10px rgba(255, 255, 255, 0.1);
}

.btnGeneric {
    padding: 1rem 3rem;
    border-radius: 50px;
}

.btnBlue {
    background: rgb(8, 147, 195);
    background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
}

.btnBlue:hover {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    box-shadow: 0px 0px 50px 10px rgba(255, 255, 255, 0.1);
}

.btnRed {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
}

.btnRed:hover {
    background: rgb(8, 147, 195);
    background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
    box-shadow: 0px 0px 50px 10px rgba(255, 255, 255, 0.1);
}

@media screen and (max-width: 1290px) {
    .btnGeneric {
        padding: 1rem 2rem;
    }
}
</style>
