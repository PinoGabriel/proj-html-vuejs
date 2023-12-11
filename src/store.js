import { reactive } from 'vue'

export const store = reactive({
    navbar: [
        "Home", "About", "Services", "Blog", "Contact", "Portfolio",
    ],
    WWD: [
        {
            img: "./assets/corporate-landing/images/Group-247.png",
            title: "Data Analysis",
            subtitle: "",
        },
        {
            img: "",
            title: "Seo Optimization",
            subtitle: "",
        },
        {
            img: "",
            title: "Security Data",
            subtitle: "",
        },
        {
            img: "",
            title: "Branding Strategy",
            subtitle: "",
        }
    ]
});