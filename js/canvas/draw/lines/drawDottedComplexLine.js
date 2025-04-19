import {drawLineWithDash} from "./drawLineWithDash.js";
import {centerX, centerY, radius} from "../../config/canvasConfig.js";

export function drawDottedComplexLine(modifier = 0) {
    const complexLine1Coords = {
        x1: centerX + radius + 50,
        y1: centerY - 80 - 2 * modifier,
        x2: centerX + radius + 120,
        y2: centerY - 110 - 2 * modifier,
    };
    const complexLine1CoordsFinal = {
        x1: complexLine1Coords.x2,
        y1: complexLine1Coords.y2,
        x2: complexLine1Coords.x2 + 700,
        y2: complexLine1Coords.y2,
    };

    drawLineWithDash(complexLine1Coords, [1, 3 + modifier], '#2b2a2cd6', 3);
    drawLineWithDash(complexLine1CoordsFinal, [1, 3 + modifier], '#2b2a2cd6', 3);
}
