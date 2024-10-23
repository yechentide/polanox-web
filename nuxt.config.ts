import Aura from "@primevue/themes/aura"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],
  devtools: { enabled: true },
  css: [
    "primeicons/primeicons.css",
  ],
  compatibilityDate: "2024-04-03",
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Aura,
      },
    },
  },
})
