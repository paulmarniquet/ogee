export const templateCategories = [
    {
        id: "social-media",
        name: "Réseaux Sociaux",
        templates: [
            {
                id: 1,
                name: "Post Instagram",
                preview: "InstagramPreview",
                properties: {
                    title: {
                        text: "Beautiful Open Graph Images",
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: 32,
                        color: "#FFFFFF",
                    },
                    tag: {
                        text: "Marketing",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#FFFFFF",
                    },
                    logo: null,
                    gradient: {
                        start: "#434343",
                        end: "black",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'dots',
                        color: 'white',
                        opacity: 0.2,
                        blur: 4,
                    },
                    noise: 0.6,
                },
            },
            {
                id: 2,
                name: "Post Facebook",
                preview: "FacebookPreview",
                properties: {
                    title: {
                        text: "Votre texte ici",
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: 32,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        start: "#FF0080",
                        end: "#FF8C00",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'none', // Options: 'none', 'grid', 'graph', 'dots'
                        color: '#000000',
                        opacity: 1,
                        blur: 0,
                    },
                    noise: 0.6,
                },
            },
        ],
    },
];
