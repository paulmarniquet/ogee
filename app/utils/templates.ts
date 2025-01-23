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
                    title: {
                        text: "Generate Beautiful Open Graph Images",
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: 32,
                        color: "#FFFFFF",
                    },
                    tag: {
                        text: "Marketing",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 11,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        colorStops: ["#434343", "black"],
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
                    image: {
                        src: "/opengraph/marketing.png",
                        width: 24,
                        height: 24,
                    },
                    title: {
                        text: "Introducting Supabase",
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: 30,
                        color: "#f9fafb",
                    },
                    tag: {
                        text: "Open Source",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 11,
                        color: "#f9fafb",
                    },
                    gradient: {
                        colorStops: ["#FF0080", "#FF8C00"],
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
                    logo: {
                        src: "logo.png",
                        width: 8,
                        height: 8
                    },
                    title: {
                        text: "ogee",
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: 30,
                        color: "black",
                    },
                    description: {
                        text: "The open graph project",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 18,
                        color: "black",
                    },
                    gradient: {
                        colorStops: ["#f5f7fa", "#c3cfe2"],
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
                    logo: {
                        src: "bun.png",
                        width: 8,
                        height: 8
                    },
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
                        fontSize: 16,
                        color: "black",
                    },
                    gradient: {
                        colorStops: ["rgb(252, 227, 138)", "rgb(252, 227, 138)"],
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
                        fontWeight: 600,
                        fontSize: 24,
                        color: "#FFFFFF",
                    },
                    description: {
                        text: "| Deploy your API in seconds",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 22,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        colorStops: ["#434343", "black"],
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
                        fontSize: 20,
                        color: "#FFFFFF",
                    },
                    description: {
                        text: "I build useful, everyday tools for developers.",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: 16,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        colorStops: ["rgb(17, 24, 39)", "rgb(75, 85, 99)"],
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
                    logo: {
                        src: "linear.png",
                        width: 8,
                        height: 8
                    },
                    description: {
                        text: "Organize and track tasks with clarity and speed.",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#FFFFFF",
                    },
                    gradient: {
                        colorStops: ["rgb(233, 213, 255)", "rgb(192, 132, 252)", "rgb(107, 33, 168)"],
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
