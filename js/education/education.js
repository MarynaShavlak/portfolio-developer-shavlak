import { getRoadPath } from "./canvas/getRoadPath.js";
import { computePathPoints } from "./canvas/computePathPoints.js";
import { drawNumberedPoints } from "./canvas/drawNumberedPoints.js";
import { renderEducationSection } from "./renderEducationSection.js";
import { setupEventListeners } from "./setupEventListeners.js";
import { AnimationController } from "./AnimationControllerClass.js";
import { setupCanvas } from "./canvas/setupCanvas.js";

export function initEducationSection(config = {}) {
  const {
    canvasId = "roadCanvas",
    numberedPointsCanvasId = "numbersCanvas",
    scale = 0.8357,
    // scale = 0.25,
    frameDuration = 16,
    pointsCount = 100,
  } = config;

  const { canvas, ctx } = setupCanvas(canvasId);
  const roadPath = getRoadPath(scale);
  const pathPoints = computePathPoints(roadPath, pointsCount);

  const animationController = new AnimationController(
    canvas,
    ctx,
    scale,
    frameDuration,
    pathPoints,
  );

  animationController.startAnimation();
  drawNumberedPoints(numberedPointsCanvasId, pathPoints, scale);
  renderEducationSection();
  setupEventListeners();

  return () => animationController.startAnimation();
}
