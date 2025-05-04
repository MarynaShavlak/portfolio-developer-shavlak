import {getRoadPath} from "./canvas/getRoadPath.js";
import {computePathPoints} from "./canvas/computePathPoints.js";
import {createOffscreenCanvas} from "./canvas/createOffscreenCanvas.js";
import {drawAnimationFrame} from "./canvas/drawAnimationFrame.js";

export function initEducationSection() {
    const canvas = document.getElementById('roadCanvas');
    const ctx = canvas.getContext('2d');
    const SCALE = 0.8357;
    // Create an offscreen canvas for the full road (to reuse)
    const offscreenCanvas = createOffscreenCanvas(canvas);
    const offCtx = offscreenCanvas.getContext('2d');
    // Store the bezier curve points
    const roadPath = getRoadPath(SCALE);

    // Precompute points along the path for smooth animation
    const totalPoints = 500;
    const pathPoints = computePathPoints(roadPath, 100);// More points = smoother animation


    // Pre-render the complete road on the offscreen canvas
    function renderFullRoad() {
        // Draw main road with drop shadow
        offCtx.lineWidth = 50 * 0.8357;
        offCtx.strokeStyle = '#FF5BA7';
        offCtx.lineCap = 'round';
        offCtx.lineJoin = 'round';
        offCtx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        offCtx.shadowBlur = 3 * 0.8357;
        offCtx.shadowOffsetX = 2 * 0.8357;
        offCtx.shadowOffsetY = 2 * 0.8357;

        offCtx.beginPath();
        offCtx.moveTo(roadPath[0].x, roadPath[0].y);

        for (let i = 1; i < roadPath.length; i++) {
            const point = roadPath[i];
            offCtx.bezierCurveTo(
                point.cp1x, point.cp1y,
                point.cp2x, point.cp2y,
                point.x, point.y
            );
        }
        offCtx.stroke();

        // Reset shadow for the dashed line
        offCtx.shadowColor = 'transparent';
        offCtx.shadowBlur = 0;
        offCtx.shadowOffsetX = 0;
        offCtx.shadowOffsetY = 0;

        // Draw center dashed line
        offCtx.beginPath();
        offCtx.lineWidth = 2 * 0.8357;
        offCtx.strokeStyle = 'white';
        offCtx.setLineDash([10 * 0.8357, 10 * 0.8357]);

        offCtx.moveTo(roadPath[0].x, roadPath[0].y);
        for (let i = 1; i < roadPath.length; i++) {
            const point = roadPath[i];
            offCtx.bezierCurveTo(
                point.cp1x, point.cp1y,
                point.cp2x, point.cp2y,
                point.x, point.y
            );
        }
        offCtx.stroke();
        offCtx.setLineDash([]);
    }


    // Animation variables
    let currentPointIndex = 0;
    let animationId;
    let lastFrameTime = 0;
    const frameDuration = 16; // ms between frames (approx 60fps)

    // Animation function with time-based control
    function animate(timestamp) {
        if (!lastFrameTime) lastFrameTime = timestamp;
        const elapsed = timestamp - lastFrameTime;

        if (elapsed > frameDuration) {
            lastFrameTime = timestamp;

            // Draw the current frame

            drawAnimationFrame(ctx, pathPoints, currentPointIndex, canvas, SCALE);
            // Advance to next point at varying speeds for natural drawing effect
            // Slow down at curves and speed up on straighter sections
            if (currentPointIndex < pathPoints.length + 50) { // +50 for dashed line animation
                // Calculate how much to increment based on curvature
                let increment = 1;

                // Variable speed - if we're at a valid index
                if (currentPointIndex > 1 && currentPointIndex < pathPoints.length - 1) {
                    // Calculate angle change to detect curves
                    const prev = pathPoints[currentPointIndex - 1];
                    const curr = pathPoints[currentPointIndex];
                    const next = pathPoints[Math.min(currentPointIndex + 1, pathPoints.length - 1)];

                    // Calculate vectors
                    const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
                    const v2 = { x: next.x - curr.x, y: next.y - curr.y };

                    // Normalize
                    const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
                    const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);

                    // Check if vectors are long enough to measure angle accurately
                    if (len1 > 0.001 && len2 > 0.001) {
                        // Calculate dot product
                        const dot = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
                        // Angle in radians (0 = same direction, PI = opposite)
                        const angle = Math.acos(Math.max(-1, Math.min(1, dot)));

                        // Adjust speed based on angle - slower on curves
                        // angle of 0 = straight line, PI = sharp turn
                        increment = 3 - (angle / Math.PI) * 2.5; // Range from 0.5 to 3
                    }
                }

                // Base speed is slower at start and end
                if (currentPointIndex < 30) {
                    // Gradual start
                    increment *= currentPointIndex / 30;
                } else if (currentPointIndex > pathPoints.length - 30) {
                    // Slow down at the end
                    increment *= (pathPoints.length - currentPointIndex) / 30;
                }

                // Ensure minimum speed
                increment = Math.max(0.5, increment);

                // Advance to next point
                currentPointIndex += Math.round(increment);

                // Ensure we don't exceed bounds for dashed line animation
                currentPointIndex = Math.min(currentPointIndex, pathPoints.length + 50);

                // Continue animation
                animationId = requestAnimationFrame(animate);
            } else {
                // Animation complete - draw final frame once more to ensure it's visible
                drawFinalFrame();
                cancelAnimationFrame(animationId);
                return;
            }
        } else {
            // Continue animation
            animationId = requestAnimationFrame(animate);
        }
    }






    // Function to draw the final state of the road (complete with dashed line)
    function drawFinalFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw main road
        ctx.lineWidth = 50 * 0.8357;
        ctx.strokeStyle = '#FF5BA7';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 3 * 0.8357;
        ctx.shadowOffsetX = 2 * 0.8357;
        ctx.shadowOffsetY = 2 * 0.8357;

        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
            ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();

        // Draw dashed line
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.beginPath();
        ctx.lineWidth = 2 * 0.8357;
        ctx.strokeStyle = 'white';
        ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);

        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
            ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // Start the animation
    function startAnimation() {
        currentPointIndex = 0;
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        lastFrameTime = 0;
        animationId = requestAnimationFrame(animate);
    }

    // Start immediately
    startAnimation();

    // Return a function to restart animation if needed
    return startAnimation;
}
