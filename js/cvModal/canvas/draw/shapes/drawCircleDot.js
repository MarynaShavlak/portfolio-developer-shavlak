import {ctx} from "../../config/canvasConfig.js";

function drawCircleDot(x, y, size, color) {
    ctx.beginPath();
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}
function drawEmptyCircleDot(x, y, size, color = '#2b2a2cd6') {
    ctx.beginPath();
    ctx.lineWidth = '2';
    ctx.strokeStyle = color;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
}

export {drawCircleDot, drawEmptyCircleDot};
