export const templateCategories = [
    {
        id: "opengraph",
        name: "Open Graph",
        templates: [
            {
                id: 1,
                name: "marketing",
                preview: "marketing",
                properties: {
                    title: {
                        text: "Generate Beautiful Open Graph Images",
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: 36,
                        color: "#FFFFFF",
                    },
                    tag: {
                        text: "Marketing",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 12,
                        color: "#FFFFFF",
                    },
                    logo: {
                        src: "logo.png",
                        width: 12,
                        height: 12
                    },
                    image: {
                        src: "/opengraph/marketing.png",
                        width: 24,
                        height: 24,
                    },
                    gradient: {
                        start: "#434343",
                        end: "black",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'grid',
                        color: 'white',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.6,
                    canvas: {
                        width: 1200,
                        height: 630,
                    }
                },
            },
            {
                id: 2,
                name: "opensource",
                preview: "opensource",
                properties: {
                    title: {
                        text: "Introducting Supabase",
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: 32,
                        color: "#f9fafb",
                    },
                    tag: {
                        text: "Open Source",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#f9fafb",
                    },
                    image: {
                        src: "/opengraph/marketing.png",
                        width: 24,
                        height: 24,
                    },
                    gradient: {
                        start: "#FF0080",
                        end: "#FF8C00",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'grid',
                        color: '#f9fafb',
                        opacity: 0.5,
                        blur: 20,
                    },
                    noise: 0.2,
                    canvas: {
                        width: 1200,
                        height: 630,
                    }
                },
            },
        ],
    },
    {
        id: "reseaux",
        name: "Réseaux sociaux",
        templates: [
            {
                id: 3,
                name: "Banner",
                preview: "BannerPreview",
                properties: {
                    title: {
                        text: "Votre titre ici",
                        fontFamily: "Roboto",
                        fontWeight: 700,
                        fontSize: 48,
                        color: "#FFFFFF",
                    },
                    tag: {
                        text: "Promotion",
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: 24,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        start: "#FF0080",
                        end: "#FF8C00",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'grid',
                        color: '#000000',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.6,
                    canvas: {
                        width: 900,
                        height: 400,
                    }
                },
            },
        ],
    }
];
