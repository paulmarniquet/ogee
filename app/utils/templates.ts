export const templateCategories = [
    {
        id: "opengraph",
        name: "Open Graph",
        icon: "lucide:globe",
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
            {
                id: 3,
                name: "project",
                preview: "project",
                properties: {
                    title: {
                        text: "ogee",
                        fontFamily: "Inter",
                        fontWeight: 900,
                        fontSize: 32,
                        color: "black",
                    },
                    description: {
                        text: "The open graph project",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 20,
                        color: "black",
                    },
                    logo: {
                        src: "logo.png",
                        width: 8,
                        height: 8
                    },
                    gradient: {
                        start: "#f5f7fa ",
                        end: "#c3cfe2 ",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'grid',
                        color: '#6B7280',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.2,
                    canvas: {
                        width: 1200,
                        height: 630,
                    }
                },
            },
            {
                id: 4,
                name: "changelog",
                preview: "changelog",
                properties: {
                    title: {
                        text: "Changelog #2",
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: 20,
                        color: "black",
                    },
                    description: {
                        text: "January 2025",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 18,
                        color: "black",
                    },
                    logo: {
                        src: "bun.png",
                        width: 8,
                        height: 8
                    },
                    gradient: {
                        start: "rgb(252, 227, 138)",
                        end: "rgb(252, 227, 138)",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'none',
                        color: '#6B7280',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.1,
                    canvas: {
                        width: 1200,
                        height: 630,
                    }
                },
            },
        ],
    },
    {
        id: "twitter",
        name: "Twitter",
        icon: "lucide:twitter",
        templates: [
            {
                id: 1,
                name: "banner",
                preview: "banner",
                properties: {
                    title: {
                        text: "endpts",
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: 22,
                        color: "#FFFFFF",
                    },
                    description: {
                        text: "| Deploy your API in seconds",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        start: "#434343",
                        end: "black",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'none',
                        color: '#000000',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.2,
                    canvas: {
                        width: 1500,
                        height: 500,
                    }
                },
            },
            {
                id: 2,
                name: "presentation",
                preview: "presentation",
                properties: {
                    title: {
                        text: "Hi, I'm Paul 👋",
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: 18,
                        color: "#FFFFFF",
                    },
                    description: {
                        text: "I build useful, everyday tools for developers.",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        start: "rgb(17, 24, 39)",
                        end: "rgb(75, 85, 99)",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'grid',
                        color: 'white',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.2,
                    canvas: {
                        width: 1500,
                        height: 500,
                    }
                },
            },
            {
                id: 3,
                name: "product",
                preview: "product",
                properties: {
                    description: {
                        text: "Organize and track tasks with clarity and speed.",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#FFFFFF",
                    },
                    logo: {
                        src: "linear.png",
                        width: 8,
                        height: 8
                    },
                    gradient: {
                        start: "rgb(233, 213, 255)",
                        end: "rgb(107, 33, 168)",
                        angle: 45,
                    },
                    grid: {
                        pattern: 'none',
                        color: '#000000',
                        opacity: 0.5,
                        blur: 4,
                    },
                    noise: 0.2,
                    canvas: {
                        width: 1500,
                        height: 500,
                    }
                },
            },
        ],
    }
];
