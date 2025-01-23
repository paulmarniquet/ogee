// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: {
        global: true,
        dirs: ['~/components', '~/components/templates', '~/components/properties', "~/components/preview"],
    },
    ui: {
        colorMode: false,
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'ogee - Sublimate Your Presence',
            meta: [
                {
                    name: 'description',
                    content: 'ogee is an open graph generator that helps you create beautiful images for your social media posts.'
                },
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'author', content: 'Paul Marniquet'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'},
            ],
        },
    },
    compatibilityDate: '2024-11-01',
    future: {
        compatibilityVersion: 4,
    },
    image: {
        provider: 'none'
    },
    modules: [
        '@nuxt/ui',
        '@nuxt/scripts',
        '@nuxt/image',
        [
            '@nuxtjs/google-fonts',
            {
                download: true,
                inject: true,
                overwriting: false,
                families: {
                    'Inter': '200..900',
                    'Open Sans': '200..900',
                    'Noto Sans': '200..900',
                    'Roboto': '200..900',
                    'Poppins': '200..900',
                    'Montserrat': '200..900',
                    'Lato': '200..900',
                    'Manrope': '200..900',
                    'Ubuntu': '200..900',
                    'Figtree': '200..900',
                    'Fira Sans': '200..900',
                    'Fira Code': '200..900',
                    'Fira Mono': '200..900',
                    'Source Code Pro': '200..900',
                    'IBM Plex Mono': '200..900',
                    'JetBrains Mono': '200..900',
                },
                display: 'swap', // Propriété "font-display" pour optimiser le rendu
                preload: true,   // Ajoute un préchargement pour des performances optimales
                subsets: ['latin', 'latin-ext'], // Ajoute les sous-ensembles nécessaires
            },
        ],
    ],
    css: ['~/assets/css/main.css'],
});
