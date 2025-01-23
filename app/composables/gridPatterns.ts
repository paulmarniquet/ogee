export function generateGridPattern({
                                        grid,
                                    }: {
    grid?: { pattern?: string; color?: string; opacity?: number };
}) {
    if (!grid || !grid.pattern || grid.pattern === 'none') return '';

    const size = 30;
    const sizeCircle = 12;
    const sizeGraph = 60;
    const {pattern = 'grid', color = '#ffffff', opacity = 1} = grid;

    const svgTemplates: Record<string, string> = {
        grid: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
            <path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="0.5" />
        </svg>`,
        dots: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeCircle}" height="${sizeCircle}">
            <circle cx="2" cy="2" r="1.75" fill="${color}" fill-opacity="${opacity}" />
            <circle cx="${sizeCircle / 2 + 2}" cy="${sizeCircle / 2 + 2}" r="1.75" fill="${color}" fill-opacity="${opacity}" />
            <circle cx="${sizeCircle + 2}" cy="2" r="1.75" fill="${color}" fill-opacity="${opacity}" />
        </svg>`,
        graph: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${sizeGraph}" height="${sizeGraph}" viewBox="0 0 100 100">
     <g fill-rule="evenodd" fill="${color}" fill-opacity="${opacity}">
     <g>
     <path
      opacity=".5"
      d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"/>
      <path d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z" />
      </g>
      </g>
            </svg>
`,
    };

    const svg = svgTemplates[pattern];
    if (!svg) return '';

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}")`;
}
