import {drawInnerCircle} from "./draw/shapes/drawInnerCircle.js";
import {drawQuarterCircle} from "./draw/shapes/drawQuarterCircle.js";
import {drawElements} from "./draw/scenes/drawElements.js";

export function drawFigure() {
  drawInnerCircle();
  drawQuarterCircle(0, 90, 5, [1, 7], 20);
  drawQuarterCircle(240, 270, 5, [5, 5], 0);
  drawQuarterCircle(90, 180, 5, [], 0);
  drawQuarterCircle(200, 238, 3, [], 0);
  drawQuarterCircle(181, 199, 2, [3, 2], 20);
  drawQuarterCircle(270, 360, 5, [], 0);
  drawElements();
}
