<script>

export default {
    name: "ElementAlwaysVisible",
    data() {
        return {
            scrollPosition: 0,
            showArrow: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
            this.showArrow = this.scrollPosition >= 300;
            this.applyTransitionClass();
        },
        applyTransitionClass() {
            const body = document.body;
            if (this.showArrow) {
                body.classList.add('show-arrow');
            } else {
                body.classList.remove('show-arrow');
            }
        },
    }
}
</script>

<template>
    <div class="general demo">
        <i class="fa-solid fa-table-cells-large"></i>
        <p>Browse Demos</p>
    </div>
    <div class="general shop">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Buy Now!</p>
    </div>
    <div class="general export">
        <i class="fa-solid fa-file-export"></i>
        <p>Export Section</p>
    </div>

    <div class="messageFixed">
        <i class="fa-regular fa-comment"></i>
    </div>

    <a v-if="showArrow" class="ArrowUp" href="#">
        <i class="fa-solid fa-arrow-up"></i></a>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.demo {
    top: 44.5%;
    transform: translate(-50%, -50%);
    transition: width 0.5s
}

.shop {
    top: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.5s
}

.export {
    top: 55.5%;
    transform: translate(-50%, -50%);
    transition: width 0.5s
}

.demo:hover,
.shop:hover,
.export:hover {
    width: 265px;
    background-color: #0062FF;
}

.general {
    position: fixed;
    z-index: 10;
    color: white;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.8rem;
    border-radius: 0.5rem 0 0 0.5rem;
    font-size: 0.8rem;
    width: 250px;
    right: -12%;
    cursor: pointer;

    i {
        font-size: 1.2rem;
    }

    p {
        margin-left: 0.5rem;
        z-index: 999;
        opacity: 1;
    }
}

.messageFixed {
    position: fixed;
    z-index: 10;
    color: white;
    background-color: rgba(82, 124, 235, 0.9);
    padding: 1rem;
    border-radius: 50%;
    bottom: 4%;
    right: 2%;
    cursor: pointer;

    i {
        font-size: 1.7rem;
        transform: scaleX(-1);
        opacity: 1;
    }
}

.messageFixed:hover {
    background-color: rgba(82, 124, 235, 1);
}

.ArrowUp {
    position: fixed;
    z-index: 10;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #3D3D3D;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    right: 6%;
    cursor: pointer;
    animation: slideIn 0.5s ease forwards;


    i {
        font-size: 0.7rem;
    }
}

@keyframes slideIn {
    from {
        bottom: -10%;
        opacity: 0;
    }

    to {
        bottom: 5%;
        opacity: 1;
    }
}

.ArrowUp:hover {
    background-color: #3D3D3D;
    color: white;
}
</style>
