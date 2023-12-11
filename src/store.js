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
    ]
});