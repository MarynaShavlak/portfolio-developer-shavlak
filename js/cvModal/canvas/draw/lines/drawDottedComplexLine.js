import { drawLineWithDash } from "./drawLineWithDash.js";
import { centerX, centerY, radius } from "../../config/canvasConfig.js";

export function drawDottedComplexLine(modifier = 0) {
  const complexLine0Coords = {
    x1: centerX + radius + 20,
    y1: centerY - 100 - 2 * modifier,
    x2: centerX + radius + 120,
    y2: centerY - 100 - 2 * modifier,
  };

  const complexLine1Coords = {
    x1: centerX + radius + 120,
    y1: centerY - 100 - 2 * modifier,
    x2: centerX + radius + 180,
    y2: centerY - 150 - 2 * modifier,
  };

  const complexLine1CoordsFinal2 = {
    x1: complexLine1Coords.x2,
    y1: complexLine1Coords.y2,
    x2: complexLine1Coords.x2 + 700,
    y2: complexLine1Coords.y2,
  };

  drawLineWithDash(complexLine0Coords, [1, 3 + modifier], "#FF5BA7", 3);

  drawLineWithDash(complexLine1Coords, [1, 3 + modifier], "#FF5BA7", 3);

  drawLineWithDash(complexLine1CoordsFinal2, [1, 3 + modifier], "#FF5BA7", 3);
}
