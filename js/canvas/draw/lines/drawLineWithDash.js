import {ctx} from "../../config/canvasConfig.js";

export function drawLineWithDash(coords, dashArray, color, width) {
    const { x1, y1, x2, y2 } = coords;
    ctx.setLineDash(dashArray);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
}
