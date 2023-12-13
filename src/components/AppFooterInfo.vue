<script>
export default {
    name: "AppFooterInfo",
}
</script>


<template>
    <div class="imgClass">
        <img src="../assets/corporate-landing/images/white-logo-2.png" alt="logoFooter">
        <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable</p>
    </div>
    <div class="quickLinks">
        <h3>Quick Links</h3>
        <a href="#ourService">Services</a>
        <a href="#contact">Contact</a>
        <a href="#ourBlog">Blog</a>
    </div>
    <div class="resources">
        <h3>Resources</h3>
        <a href="#">Art Design</a>
        <a href="#">Computer</a>
        <a href="#">IT News</a>
        <a href="#">Networking</a>
        <a href="#">Web Security</a>
    </div>
    <div id="contact" class="contactUs">
        <h3>Contact Us</h3>
        <p><span>Address :</span> Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
        <p><span>Phone:</span> +99 (0) 101 0000 888</p>
        <p><span>Email:</span> Info@yourdomain.com</p>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

div {
    width: 25%;
    padding-right: 2em;
}

p {
    margin-top: 3rem;
    color: grey;

    span {
        font-weight: 600;
        color: white;
    }
}

a {
    text-decoration: none;
    color: grey;
    display: block;
    margin-top: 2rem;
}

.quickLinks {
    a:hover {
        color: $colorRed;
    }
}

.resources {
    a:nth-child(2) {
        margin-top: 3rem;
    }

    a:hover {
        color: $colorRed;
    }
}

.contactUs {
    p:nth-last-child(1) {
        margin-top: 1rem;
    }
}
</style>
