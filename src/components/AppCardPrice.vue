<script>

export default {
    name: "AppCardPrice",
    props: ["cardPriceProp"],
    methods: {
        getImgPath(img) {
            return new URL(`../assets/corporate-landing/images/${img}`, import.meta.url).href;
        }
    }
}
</script>


<template>
    <div class="cardPriceList">
        <div class="titlePrice">
            <h2>{{ cardPriceProp.title }}</h2>
            <h3>{{ cardPriceProp.subtitle }}</h3>
        </div>

        <div class="midPrice">
            <p class="money">&dollar;</p>
            <h1>{{ cardPriceProp.price }}</h1>
            <p>Per Month</p>
        </div>


        <div class="infoPrice">
            <h3>Creative <span>Design Enabled</span></h3>
            <h3>Vibrant <span>Color Usage</span></h3>
            <h3>Eye <span>Catching Design</span></h3>
            <h3>Extreme <span>Typography</span></h3>
            <h3>Exceptional <span>Design</span></h3>
        </div>

        <div class="btnPrice">
            <a href="#">Order Now
                <i class="fa-solid fa-right-long"></i>
            </a>
        </div>

        <p class="numberAbsolute">{{ cardPriceProp.price }}</p>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.cardPriceList {
    width: calc(100% / 3);
    background-color: white;
    border-radius: 2rem;
    margin: 20px;
    color: black;
    position: relative;
    box-shadow: 0px 0px 39px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .numberAbsolute {
        position: absolute;
        top: -150px;
        right: -25px;
        font-size: 24rem;
        font-weight: 700;
        opacity: 0.1;
    }
}

.titlePrice {
    h2 {
        font-size: 2.5rem;
        padding: 3rem 0 1rem 0;
    }

    h3 {
        font-weight: 600;
        padding-bottom: 4rem;
    }
}

.midPrice {

    .money {
        position: absolute;
        top: 28%;
        left: 38%;
        transform: translate(-50%, -50%);
        color: black;
        font-size: 1.2rem;
    }

    h1 {
        font-size: 6rem;
    }

    p:nth-child(3) {
        padding-bottom: 4rem;
    }
}

h3 {
    font-weight: 600;
    padding-bottom: 1rem;

    span {
        font-weight: 400;
    }
}

.btnPrice {
    padding: 4rem 0;

    a {
        text-decoration: none;
        font-weight: 600;
        color: white;
        background: rgb(192, 46, 110);
        background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
        margin: 0 auto;
        padding: 1rem 2rem;
        border-radius: 3rem;
        box-shadow: 0px 0px 30px 5px rgba(192, 46, 110, 0.3);

        i {
            margin-left: 4rem;
        }
    }

    a:hover {
        background: rgb(8, 147, 195);
        background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
        box-shadow: 0px 0px 30px 5px rgba(8, 147, 195, 0.3);
    }
}

.cardPriceList:nth-child(2) {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    color: white;

    .money {
        color: white;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: $colorRed;
        background: white;
        margin: 0 auto;
        padding: 1rem 2rem;
        border-radius: 3rem;
        box-shadow: 0px 0px 30px 5px rgba(192, 46, 110, 0.3);

        i {
            margin-left: 4rem;
        }
    }

    a:hover {
        background-color: white;
    }
}
</style>
