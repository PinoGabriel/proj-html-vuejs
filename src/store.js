import { reactive } from 'vue'

export const store = reactive({
    navbar: [
        "Home", "About", "Services", "Blog", "Contact", "Portfolio",
    ],
    WWD: [
        {
            img: "Group-247.png",
            title: "Data Analysis",
            subtitle: "When, While the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
            img: "Group-567.png",
            title: "Seo Optimization",
            subtitle: "When, While the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
            img: "Group-538.png",
            title: "Security Data",
            subtitle: "When, While the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
            img: "Group-566.png",
            title: "Branding Strategy",
            subtitle: "When, While the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        }
    ],
    portfolio: [
        {
            img: "8wa60okr-1-790x576.jpg",
            title: "Basket of Flowers on table",
            subtitle: "Branding Strategy",
        },
        {
            img: "DRY-1-790x576.jpg",
            title: "Purinky Products",
            subtitle: "Digital Experience",
        },
        {
            img: "a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
            title: "Satisfy Poster",
            subtitle: "Branding Strategy",
        },
        {
            img: "84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg",
            title: "Mock-upTemplate",
            subtitle: "Ecommerce",
        },
        {
            img: "a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
            title: "Landing Page",
            subtitle: "Digital Experience",
        },
    ],
    priceList: [
        {
            price: 40,
            title: "Designing",
            subtitle: "PROCESS",
        },
        {
            price: 60,
            title: "Developing",
            subtitle: "PRODUCT",
        },
        {
            price: 80,
            title: "Supporting",
            subtitle: "Clients",
        },
    ],
    blogPosts: [
        {
            title: "April 21, 2019 &bull; by Paul",
            subtitle: "Amazon gets CCI nod to acquire",
            text: "When, while the lovely valley teems with vapour around me, and the meridian sun s .. ",
            btn: "Read More",
            class: "unique"
        },
        {
            title: "April 21, 2019 &bull; by Paul",
            subtitle: "Clearing Corporations get SEBI nod to invest in overnight funds",
            text: "When, while the lovely valley teems with vapour around me, and the meridian sun s .. ",
            btn: "Read More",
            class: "normal"
        },
        {
            title: "April 21, 2019 &bull; by Paul",
            subtitle: "Shabnam Dhillion wife of RSSB chief Gurinder Dhillon, passes away in London",
            text: "When, while the lovely valley teems with vapour around me, and the meridian sun s .. ",
            btn: "Read More",
            class: "normal"
        },
    ]
});