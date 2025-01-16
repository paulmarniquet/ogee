// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        '@nuxt/ui',
        ['@nuxtjs/google-fonts',
        {
            families: {
                'Righteous': '200..700',
            },
        },
    ],],
    css: ['~/assets/css/main.css'],
})