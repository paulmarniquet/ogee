export function generateGridPattern({grid}: {
    grid?: { pattern?: string; color?: string; opacity?: number; blur?: number }
}) {
    if (!grid || !grid.pattern || grid.pattern === 'none') return '';

    const size = 30;
    const {pattern = 'dots', color = '#000000', opacity = 1} = grid;

    const svgTemplates: Record<string, string> = {
        grid: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <rect width="${size}" height="${size}" fill="none" stroke="${color}" stroke-opacity="${opacity}" />
    </svg>`,
        graph: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="2" fill="${color}" fill-opacity="${opacity}" />
    </svg>`,
        dots: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <circle cx="5" cy="5" r="2" fill="${color}" fill-opacity="${opacity}" />
    </svg>`,
    };

    const svg = svgTemplates[pattern];
    if (!svg) return '';

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
}
