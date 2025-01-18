export function generateGridPattern({grid}: {
    grid?: { pattern?: string; color?: string; opacity?: number; blur?: number }
}) {
    if (!grid || !grid.pattern || grid.pattern === 'none') return '';

    const size = 30;
    const sizeCircle = 12;
    const {pattern = 'grid', color = '#ffffff', opacity = 1} = grid;

    const svgTemplates: Record<string, string> = {
        grid: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
            <path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="0.5" />
        </svg>`,
        dots: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeCircle}" height="${sizeCircle}">
            <circle cx="2" cy="2" r="1.75" fill="${color}" fill-opacity="${opacity}" />
            <circle cx="${sizeCircle / 2 + 2}" cy="${sizeCircle / 2 + 2}" r="1.75" fill="${color}" fill-opacity="${opacity}" />
            <circle cx="${sizeCircle + 2}" cy="2" r="1.75" fill="${color}" fill-opacity="${opacity}" />
        </svg>`
    };

    const svg = svgTemplates[pattern];
    if (!svg) return '';

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
}