import {ctx} from "../../config/canvasConfig.js";

export function drawPerpendicularLineAtCorner(x, y, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = '2';
    const width = 15;
    ctx.moveTo(x - width / 2, y);
    ctx.lineTo(x + width / 2, y);
    ctx.stroke();
}
