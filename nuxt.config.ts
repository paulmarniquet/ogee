// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'ogeez - Sublimate Your Presence',
            meta: [
                { name: 'description', content: 'ogeez is an open graph generator that helps you create beautiful images for your social media posts.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'author', content: 'Paul Marniquet' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ],
        },
    },
    compatibilityDate: '2024-11-01',
    modules: [
        '@nuxt/ui',
        ['@nuxtjs/google-fonts',
        {
            families: {
                'Inter': '200..700',
            },
        },
    ],],
    css: ['~/assets/css/main.css'],
    components: [
        '~/components',
        { path: '~/components/properties', extensions: ['vue'] }
    ]
})