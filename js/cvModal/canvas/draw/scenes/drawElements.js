import { calculateHexagonCornersCoords } from "./calculateHexagonCornersCoords.js";
import { centerX, centerY, radius } from "../../config/canvasConfig.js";
import { drawLineWithDash } from "../lines/drawLineWithDash.js";
import { drawSolidLine } from "../lines/drawSolidLine.js";
import { drawCircleDot, drawEmptyCircleDot } from "../shapes/drawCircleDot.js";
import { drawDottedComplexLine } from "../lines/drawDottedComplexLine.js";
import { drawLineFigure } from "../lines/drawLineFigure.js";
import { drawPerpendicularLineAtCorner } from "../shapes/drawPerpendicularLineAtCorner.js";
import { drawComplexSolidLine } from "../lines/drawComplexSolidLine.js";
import {
  drawSectionBlocks,
  drawSectionLabels,
} from "../sections/drawSectionBlocks.js";

export function drawElements() {
  const coordArr = calculateHexagonCornersCoords();
  const coords1 = {
    x1: coordArr[0].x,
    y1: coordArr[0].y,
    x2: coordArr[1].x,
    y2: coordArr[1].y,
  };
  const coords2 = {
    x1: coordArr[0].x,
    y1: coordArr[0].y,
    x2: coordArr[0].x,
    y2: coordArr[0].y - 60,
  };
  const coords3 = {
    x1: coordArr[5].x,
    y1: coordArr[5].y,
    x2: coordArr[5].x - 80,
    y2: coordArr[5].y - 40,
  };
  const coords4 = {
    x1: coordArr[4].x,
    y1: coordArr[4].y,
    x2: coordArr[3].x,
    y2: coordArr[3].y,
  };
  const coords5 = {
    x1: coordArr[3].x,
    y1: coordArr[3].y,
    x2: coordArr[3].x,
    y2: coordArr[3].y + 30,
  };
  const coords6 = {
    x1: coordArr[1].x,
    y1: coordArr[1].y,
    x2: coordArr[1].x + 70,
    y2: coordArr[1].y - 40,
  };
  const coords7 = {
    x1: coordArr[2].x,
    y1: coordArr[2].y,
    x2: coordArr[2].x,
    y2: centerY,
  };
  const coords8 = {
    x1: coordArr[0].x,
    y1: coordArr[0].y,
    x2: coordArr[5].x,
    y2: coordArr[5].y,
  };
  const coords9 = {
    x1: coordArr[5].x,
    y1: coordArr[5].y,
    x2: coordArr[4].x,
    y2: coordArr[4].y,
  };
  const coords10 = {
    x1: coordArr[4].x,
    y1: coordArr[4].y,
    x2: coordArr[4].x - 70,
    y2: coordArr[4].y + 40,
  };
  const coords11 = {
    x1: coordArr[3].x,
    y1: coordArr[3].y,
    x2: coordArr[2].x,
    y2: coordArr[2].y,
  };
  const coords12 = {
    x1: coordArr[2].x,
    y1: coordArr[2].y,
    x2: coordArr[2].x + 70,
    y2: coordArr[2].y + 40,
  };
  const coords13 = {
    x1: coordArr[2].x + 70 - 5,
    y1: coordArr[2].y + 40 + 5,
    x2: coordArr[2].x + 70 + 5,
    y2: coordArr[2].y + 40 - 5,
  };
  const coords14 = {
    x1: coordArr[1].x,
    y1: coordArr[1].y,
    x2: coordArr[2].x,
    y2: centerY,
  };
  drawLineWithDash(coords1, [2, 2], "#FF5BA7", 2);
  drawLineWithDash(coords2, [2, 2], "#FF5BA7", 3);
  drawSolidLine(coords8, "#FF5BA7", 5);
  drawLineWithDash(coords3, [3, 2], "#FF5BA7", 3);
  drawCircleDot(coords3.x2, coords3.y2, 4, "#FF5BA7");
  drawSolidLine(coords9, "#FF5BA7", 3);
  drawSolidLine(coords10, "#FF5BA7", 3);
  drawEmptyCircleDot(coords10.x2 + 35, coords10.y2 - 20, 4);
  drawEmptyCircleDot(coords10.x2, coords10.y2, 4);
  drawLineWithDash(coords4, [3, 2], "#FF5BA7", 2);
  drawLineWithDash(coords5, [2, 2], "#FFC2D9", 5);
  drawSolidLine(coords11, "#FF5BA7", 3);
  drawSolidLine(coords12, "#FF5BA7", 3);
  drawSolidLine(coords13, "#FF5BA7", 3);
  drawSolidLine(coords14, "#FF5BA7", 3);
  drawLineWithDash(coords6, [1, 3], "#FF5BA7", 3);
  drawEmptyCircleDot(coords6.x2, coords6.y2, 4);
  drawLineWithDash(coords7, [1, 3], "#FF5BA7", 4);
  drawEmptyCircleDot(670, 650, 5, "#FF5BA7");
  drawEmptyCircleDot(630, 670, 5, "#FF5BA7");
  drawEmptyCircleDot(centerX + radius + 20, centerY + 30, 5, "#FF5BA7");
  drawComplexSolidLine();
  drawDottedComplexLine();
  drawDottedComplexLine(5);
  drawLineFigure();
  drawSectionLabels(coordArr);
  drawSectionBlocks(coordArr);
  drawPerpendicularLineAtCorner(centerX + radius, centerY, "#FF5BA7");
  drawPerpendicularLineAtCorner(centerX - radius, centerY, "#FF5BA7");
  coordArr.forEach(({ x, y }) => drawCircleDot(x, y, 8, "#FF5BA7"));
}
