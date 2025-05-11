import { drawSolidLine } from "./drawSolidLine.js";
import { drawLineWithDash } from "./drawLineWithDash.js";
import { drawCircleDot } from "../shapes/drawCircleDot.js";

export function drawLineFigure() {
  drawCircleDot(363, 545, 3, "#FFC2D9");
  drawSolidLine({ x1: 363, y1: 545, x2: 240, y2: 545 }, "#FFC2D9", 3);
  drawLineWithDash(
    { x1: 230, y1: 545, x2: 200, y2: 545 },
    [3, 4],
    "#FFC2D9",
    3,
  );
  drawLineWithDash(
    { x1: 195, y1: 545, x2: 115, y2: 575 },
    [3, 4],
    "#FFC2D9",
    3,
  );
  drawLineWithDash({ x1: 110, y1: 575, x2: 70, y2: 575 }, [3, 4], "#FFC2D9", 3);
  drawLineWithDash({ x1: 70, y1: 575, x2: 65, y2: 575 }, [2, 2], "#FFC2D9", 15);
  drawSolidLine({ x1: 60, y1: 575, x2: 0, y2: 575 }, "#FFC2D9", 3);
}
