<script>

export default {
    name: "ElementAlwaysVisible",
    methods: {

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
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Export Section</p>
    </div>

    <div class="messageFixed">
        <i class="fa-regular fa-comment"></i>
    </div>
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
</style>
