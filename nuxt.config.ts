// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: {
        global: true,
        dirs: ['~/components', '~/components/templates', '~/components/properties', "~/components/preview"],
    },

    colorMode: {
        preference: 'light'
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'ogee • Open Graph Image Generator',
            meta: [
                {
                    name: 'description',
                    content: 'Sublimate your presence online by creating exceptional Open Graph images for your social media. ogee helps you maximize the visual impact of your links on LinkedIn, Twitter, Facebook, and more.'
                },
                // Basic metadata
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'author', content: 'Paul Marniquet'},
                {name: 'robots', content: 'index, follow'},
                {name: 'theme-color', content: '#ffffff'},

                // Basic Open Graph
                {property: 'og:type', content: 'website'},
                {property: 'og:title', content: 'ogee • Open Graph Image Generator'},
                {
                    property: 'og:description',
                    content: 'Transform your social media sharing with striking visual previews. Generate optimized Open Graph images in just a few clicks.'
                },
                {property: 'og:image', content: 'https://ogee.pro/ogee.png'},
                {property: 'og:url', content: 'https://ogee.pro'},
                {property: 'og:site_name', content: 'ogee'},

                // Twitter Card
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'ogee - Create Impressive Social Previews'},
                {
                    name: 'twitter:description',
                    content: 'Generate professional Open Graph images for your social media sharing. Maximize the impact of your online presence.'
                },
                {name: 'twitter:image', content: 'https://ogee.pro/ogee.png'},
                {name: 'twitter:creator', content: '@bypaulzer'},

                {
                    name: 'keywords',
                    content: 'open graph, image generator, social media, LinkedIn, Twitter, Facebook, link sharing, digital marketing'
                },
                // Localization
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:locale:alternate', content: 'fr_FR'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'},
                {rel: 'canonical', href: 'https://ogee.pro'},
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
        '@vueuse/nuxt',
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
