export function drawTooltips(points, spacing, baseRadius, numPoints) {
    const tooltipCanvas = document.getElementById('tooltipsCanvas');
    const ctx = tooltipCanvas.getContext('2d');

    ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height); // Clear old tooltips

    ctx.font = `bold 14px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 1; i <= numPoints; i++) {
        const index = i * spacing;
        const { x, y } = points[index];
        const tooltipText = `Tooltip: ${i}`;

        const tooltipWidth = ctx.measureText(tooltipText).width + 20;
        const tooltipHeight = 30;
        const tooltipX = x - tooltipWidth / 2;
        const tooltipY = y - baseRadius - tooltipHeight - 10;

        // Draw background
        ctx.fillStyle = '#333333';
        ctx.fillRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight);

        // Draw text
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(tooltipText, x, tooltipY + tooltipHeight / 2);
    }
}
