export function getRoadPath(scale) {
    return [
        { x: 50 * scale, y: 650 * scale },
        { cp1x: 150 * scale, cp1y: 600 * scale, cp2x: 200 * scale, cp2y: 450 * scale, x: 300 * scale, y: 450 * scale },
        { cp1x: 400 * scale, cp1y: 450 * scale, cp2x: 450 * scale, cp2y: 600 * scale, x: 550 * scale, y: 400 * scale },
        { cp1x: 650 * scale, cp1y: 200 * scale, cp2x: 700 * scale, cp2y: 200 * scale, x: 800 * scale, y: 300 * scale },
        { cp1x: 900 * scale, cp1y: 400 * scale, cp2x: 950 * scale, cp2y: 400 * scale, x: 1050 * scale, y: 250 * scale },
        { cp1x: 1150 * scale, cp1y: 100 * scale, cp2x: 1200 * scale, cp2y: 100 * scale, x: 1350 * scale, y: 50 * scale }
    ];
}
