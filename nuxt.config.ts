// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ui: {
        colorMode: false
    },
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
        '@nuxt/scripts',
        [
            '@nuxtjs/google-fonts',
            {
                download: true, // Télécharge les polices pour un usage local
                inject: true,   // Injecte les polices dans le projet
                overwriting: false, // Évite de surcharger les polices téléchargées
                families: {
                    'Inter': true,
                    'Open Sans': true,
                    'Noto Sans': true,
                    'Roboto': true,
                    'Poppins': true,
                    'Montserrat': true,
                    'Lato': true,
                    'Manrope': true,
                    'Ubuntu': true,
                    'Figtree': true,
                    'Fira Sans': true,
                    'Fira Code': true,
                    'Fira Mono': true,
                    'Source Code Pro': true,
                    'IBM Plex Mono': true,
                    'JetBrains Mono': true,
                },
                display: 'swap', // Propriété "font-display" pour optimiser le rendu
                preload: true,   // Ajoute un préchargement pour des performances optimales
                subsets: ['latin', 'latin-ext'], // Ajoute les sous-ensembles nécessaires
            },
        ],
    ],
    css: ['~/assets/css/main.css'],
    components: [
        '~/components',
        { path: '~/components/properties', extensions: ['vue'] }
    ]
});
