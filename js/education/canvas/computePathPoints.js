export function computePathPoints(roadPath, pointsPerSegment = 100) {
    const points = [];
    points.push({ x: roadPath[0].x, y: roadPath[0].y });

    for (let i = 0; i < roadPath.length - 1; i++) {
        const p0 = roadPath[i];
        const p1 = roadPath[i + 1];

        for (let j = 1; j <= pointsPerSegment; j++) {
            const t = j / pointsPerSegment;
            const x = Math.pow(1 - t, 3) * p0.x +
                3 * Math.pow(1 - t, 2) * t * p1.cp1x +
                3 * (1 - t) * Math.pow(t, 2) * p1.cp2x +
                Math.pow(t, 3) * p1.x;
            const y = Math.pow(1 - t, 3) * p0.y +
                3 * Math.pow(1 - t, 2) * t * p1.cp1y +
                3 * (1 - t) * Math.pow(t, 2) * p1.cp2y +
                Math.pow(t, 3) * p1.y;
            points.push({ x, y });
        }
    }

    return points;
}
