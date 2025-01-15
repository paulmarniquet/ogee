// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  lucide: {
    namePrefix: 'Icon'
  }
})