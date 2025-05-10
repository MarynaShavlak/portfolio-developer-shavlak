import { drawAnimationFrame } from "./canvas/drawAnimationFrame.js";
import { computeSpeed } from "./canvas/computeSpeed.js";
import { drawFinalFrame } from "./canvas/drawFinalFrame.js";

export class AnimationController {
  constructor(canvas, ctx, scale, frameDuration, pathPoints) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.scale = scale;
    this.frameDuration = frameDuration;
    this.pathPoints = pathPoints;
    this.currentPointIndex = 0;
    this.animationId = null;
    this.lastFrameTime = 0;
  }

  shouldAdvanceFrame(timestamp) {
    return (
      !this.lastFrameTime || timestamp - this.lastFrameTime > this.frameDuration
    );
  }

  updateAnimationState(timestamp) {
    this.lastFrameTime = timestamp;
    drawAnimationFrame(
      this.ctx,
      this.pathPoints,
      this.currentPointIndex,
      this.canvas,
      this.scale,
    );

    if (this.currentPointIndex < this.pathPoints.length + 50) {
      this.currentPointIndex += Math.round(
        computeSpeed(this.pathPoints, this.currentPointIndex),
      );
      this.currentPointIndex = Math.min(
        this.currentPointIndex,
        this.pathPoints.length + 50,
      );
      this.animationId = requestAnimationFrame((ts) => this.animate(ts));
    } else {
      drawFinalFrame(this.ctx, this.pathPoints, this.scale, this.canvas);
      this.cancelAnimation();
    }
  }

  animate(timestamp) {
    if (this.shouldAdvanceFrame(timestamp)) {
      this.updateAnimationState(timestamp);
    } else {
      this.animationId = requestAnimationFrame((ts) => this.animate(ts));
    }
  }

  resetAnimationState() {
    this.currentPointIndex = 0;
    this.cancelAnimation();
    this.lastFrameTime = 0;
  }

  startAnimation() {
    this.resetAnimationState();
    this.animationId = requestAnimationFrame((ts) => this.animate(ts));
  }

  cancelAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
