<script>
import { store } from '../store.js'
import AppFooterInfo from './AppFooterInfo.vue';


export default {
    name: "PageFooter",
    components: {
        AppFooterInfo
    },
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
    <section class="backgroundFooter">
        <div class="container containerFooter">
            <div>
                <h1>
                    We Offer Awesome Services
                </h1>
                <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surfaces
                    .</p>
            </div>
            <div class="emailPositionRelative">
                <form>
                    <input type="email" id="emails" name="email" placeholder="Enter Your Email Address" required
                        pattern=".+@example\.com">
                    <button type="submit" class="subscribe">Subscribe</button>
                </form>
            </div>
        </div>

        <div class="container footerInfo">
            <AppFooterInfo />
        </div>

        <div class="footerCopyright">
            <div class="container justify-bewtween">
                <div>
                    <p>&copy; 2023 Phlox. All Rights Reserved.</p>
                </div>

                <div>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.backgroundFooter {
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 20%, rgba(11, 24, 82, 1) 20%);
    min-height: 800px;
    color: white;
    padding-top: 3rem;
}

.containerFooter {
    background: rgb(192, 46, 110);
    background: linear-gradient(90deg, rgba(192, 46, 110, 1) 0%, rgba(241, 92, 108, 1) 100%);
    min-height: 300px;
    border-radius: 3rem;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;
    margin-bottom: 5rem;

    i div:nth-child(1) {
        width: 65%;

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }

    div:nth-child(2) {
        width: 35%;
    }
}

.footerInfo {
    margin-bottom: 5rem;
}

.footerCopyright {
    border-top: 1px solid grey;
    padding: 3rem;

    p {
        color: grey;
    }

    i {
        margin-left: 2rem;
        cursor: pointer;
    }

    i:hover {
        color: $colorRed;
    }

}

#emails {
    width: 100%;
    padding: 1.5rem;
    border-radius: 2rem;
    border: 0px;
}

.emailPositionRelative {
    position: relative;
}

.subscribe {
    position: absolute;
    color: white;
    background: rgb(8, 147, 195);
    background: linear-gradient(90deg, rgba(8, 147, 195, 1) 0%, rgba(27, 77, 142, 1) 100%);
    top: 50%;
    right: -60px;
    transform: translate(-50%, -50%);
    width: 30%;
    padding: 1rem;
    border-radius: 2rem;
    border: 0px;
    cursor: pointer;

}
</style>
