export function computeSpeed(pathPoints, index) {
    if (index <= 1 || index >= pathPoints.length - 1) return 1;

    const prev = pathPoints[index - 1];
    const curr = pathPoints[index];
    const next = pathPoints[Math.min(index + 1, pathPoints.length - 1)];

    const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
    const v2 = { x: next.x - curr.x, y: next.y - curr.y };

    const len1 = Math.hypot(v1.x, v1.y);
    const len2 = Math.hypot(v2.x, v2.y);

    if (len1 === 0 || len2 === 0) return 1;

    const dot = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
    const angle = Math.acos(Math.max(-1, Math.min(1, dot)));

    let increment = 3 - (angle / Math.PI) * 2.5;

    if (index < 30) {
        increment *= index / 30;
    } else if (index > pathPoints.length - 30) {
        increment *= (pathPoints.length - index) / 30;
    }

    return Math.max(0.5, increment);
}
