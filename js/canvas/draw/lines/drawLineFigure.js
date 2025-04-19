import {drawSolidLine} from "./drawSolidLine.js";
import {drawLineWithDash} from "./drawLineWithDash.js";
import {drawCircleDot} from "../shapes/drawCircleDot.js";

export function drawLineFigure() {
    drawCircleDot(363, 465, 3, '#2b2a2cd6');
    drawSolidLine({ x1: 363, y1: 465, x2: 310, y2: 465 }, '#2b2a2cd6', 3);
    drawLineWithDash(
        { x1: 300, y1: 465, x2: 260, y2: 465 },
        [3, 4],
        '#2b2a2cd6',
        3,
    );
    drawLineWithDash(
        { x1: 255, y1: 465, x2: 210, y2: 495 },
        [3, 4],
        '#2b2a2cd6',
        3,
    );
    drawLineWithDash(
        { x1: 205, y1: 495, x2: 120, y2: 495 },
        [3, 4],
        '#2b2a2cd6',
        3,
    );
    drawLineWithDash(
        { x1: 115, y1: 495, x2: 110, y2: 495 },
        [2, 2],
        '#2b2a2cd6',
        15,
    );
    drawSolidLine({ x1: 108, y1: 495, x2: 0, y2: 495 }, '#2b2a2cd6', 3);
}
