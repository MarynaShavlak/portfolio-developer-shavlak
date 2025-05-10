import { ctx } from "../../config/canvasConfig.js";

function drawCircleDot(x, y, size, color) {
  ctx.beginPath();
  ctx.strokeStyle = "#FFC2D9";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

function drawEmptyCircleDot(x, y, size, color = "#FFC2D9") {
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = color;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.stroke();
}

export { drawCircleDot, drawEmptyCircleDot };
