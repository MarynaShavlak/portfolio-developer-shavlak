
export function drawAnimationFrame(ctx, pathPoints, index, canvas, scale) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (index <= 0 || index >= pathPoints.length + 50) return;

    ctx.lineWidth = 50 * scale;
    ctx.strokeStyle = '#FF5BA7';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 3 * scale;
    ctx.shadowOffsetX = 2 * scale;
    ctx.shadowOffsetY = 2 * scale;

    ctx.beginPath();
    ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
    const max = Math.min(index, pathPoints.length - 1);
    for (let i = 1; i <= max; i++) {
        ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
    }
    ctx.stroke();

    if (index >= pathPoints.length - 1) {
        const dashProgress = Math.min(1, (index - (pathPoints.length - 1)) / 50);

        if (dashProgress > 0) {
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            ctx.lineWidth = 2 * scale;
            ctx.strokeStyle = 'white';
            ctx.setLineDash([10 * scale, 10 * scale]);

            const dashPoints = Math.floor(pathPoints.length * dashProgress);
            ctx.beginPath();
            ctx.moveTo(pathPoints[0].x, pathPoints[0].y);

            for (let i = 1; i <= dashPoints && i < pathPoints.length; i++) {
                ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
            }
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
;
}
