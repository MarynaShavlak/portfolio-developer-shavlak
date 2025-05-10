import {ctx} from "../../config/canvasConfig.js";

export function drawSolidLine(coords, color, width) {
    const { x1, y1, x2, y2 } = coords;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
