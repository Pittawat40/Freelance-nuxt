export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: "/Freelance-nuxt/",
    head: {
      link: [
        // Bootstrap CSS
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
        // Font Awesome CSS
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
      script: [
        // Bootstrap JS (Bundle = includes Popper)
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ],
    },
  },
});
