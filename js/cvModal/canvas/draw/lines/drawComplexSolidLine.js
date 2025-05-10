import { centerX, centerY, radius } from "../../config/canvasConfig.js";
import { drawSolidLine } from "./drawSolidLine.js";

export function drawComplexSolidLine() {
  const complexLine1Coords = {
    x1: centerX + radius + 30,
    y1: centerY + 30,
    x2: centerX + radius + 100,
    y2: centerY + 30,
  };
  const complexLine1CoordsFinal = {
    x1: complexLine1Coords.x2,
    y1: complexLine1Coords.y2,
    x2: complexLine1Coords.x2 + 30,
    y2: complexLine1Coords.y2 + 20,
  };
  const complexLine1CoordsFinal2 = {
    x1: complexLine1CoordsFinal.x2,
    y1: complexLine1CoordsFinal.y2,
    x2: complexLine1CoordsFinal.x2 + 700,
    y2: complexLine1CoordsFinal.y2,
  };
  drawSolidLine(complexLine1Coords, "#FFC2D9", 3);
  drawSolidLine(complexLine1CoordsFinal, "#FFC2D9", 3);
  drawSolidLine(complexLine1CoordsFinal2, "#FFC2D9", 3);
}
