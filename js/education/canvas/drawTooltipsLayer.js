import {drawTooltip} from "./drawTooltip.js";
import {educationData} from "../../../data/educationData.js";

export function drawTooltipsLayer(points, spacing, baseRadius, numPoints) {
    const tooltipCanvas = document.getElementById('tooltipsCanvas');
    const ctx = tooltipCanvas.getContext('2d');

    ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height); // Clear old tooltips

    ctx.font = `bold 14px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 1; i <= numPoints; i++) {
        const index = i * spacing;
        const { x, y } = points[index];
        const data = educationData[i-1];

        let position;
        if (i === 5) {
            position = 'right';
        } else {
            position = i % 2 === 0 ? 'bottom' : 'top';
        }

        drawTooltip(ctx, x, y, data, position, baseRadius, i);
    }
}
