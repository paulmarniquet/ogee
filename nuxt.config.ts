// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
        },
    },
})