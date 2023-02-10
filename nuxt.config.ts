export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  app: {
    head: {
      title: "Alim Arslan Kaya",
      meta: [
        {
          name: "description",
          content: "A student and programmer from Germany.",
        },
      ],
    },
  },
});
