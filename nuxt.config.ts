export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

    googleFonts: {
        families: {
            "Cormorant Garamond": [500, 600, 700],
            Manrope: [400, 500, 600, 700],
        },
    },

    app: {
        head: {
            title: "Alim Arslan Kaya",
            meta: [
                {
                    name: "description",
                    content:
                        "My Portfolio - Alim Arslan Kaya",
                },
            ],
        },
    },

    compatibilityDate: "2025-04-17",
});
