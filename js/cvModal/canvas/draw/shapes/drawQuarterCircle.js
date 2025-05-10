import {centerX, centerY, ctx, radius} from "../../config/canvasConfig.js";
import {toRadians} from "../../utils/math.js";

export function drawQuarterCircle(
    startAngle,
    endAngle,
    lineWidth,
    dashArray,
    dashOffset,
) {
    ctx.setLineDash(dashArray);
    ctx.lineDashOffset = dashOffset;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    if (dashArray.length) {
        ctx.strokeStyle = '#2b2a2cd6';
    } else {
        ctx.strokeStyle = '#2b2a2c';
    }

    ctx.arc(
        centerX,
        centerY,
        radius,
        toRadians(startAngle),
        toRadians(endAngle),
        false,
    );
    ctx.stroke();
    ctx.setLineDash([]);
}
