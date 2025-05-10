import {toRadians} from "../../utils/math.js";
import {centerX, centerY, radius} from "../../config/canvasConfig.js";

export function calculateHexagonCornersCoords() {
    const coordArr = [];
    for (let i = 0; i < 6; i++) {
        const angle = toRadians(60 * i - 90);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        coordArr.push({ x, y });
    }
    return coordArr;
}
