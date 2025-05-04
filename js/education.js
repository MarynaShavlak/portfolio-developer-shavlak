// export function initEducationSection() {
//     const canvas = document.getElementById('roadCanvas');
//     const ctx = canvas.getContext('2d');
//
//
//     function drawRoadPath() {
//         ctx.beginPath();
//         ctx.moveTo(50 * 0.8357, 650 * 0.8357);
//         ctx.bezierCurveTo(
//             150 * 0.8357, 600 * 0.8357,
//             200 * 0.8357, 450 * 0.8357,
//             300 * 0.8357, 450 * 0.8357
//         );
//         ctx.bezierCurveTo(
//             400 * 0.8357, 450 * 0.8357,
//             450 * 0.8357, 600 * 0.8357,
//             550 * 0.8357, 400 * 0.8357
//         );
//         ctx.bezierCurveTo(
//             650 * 0.8357, 200 * 0.8357,
//             700 * 0.8357, 200 * 0.8357,
//             800 * 0.8357, 300 * 0.8357
//         );
//         ctx.bezierCurveTo(
//             900 * 0.8357, 400 * 0.8357,
//             950 * 0.8357, 400 * 0.8357,
//             1050 * 0.8357, 250 * 0.8357
//         );
//         ctx.bezierCurveTo(
//             1150 * 0.8357, 100 * 0.8357,
//             1200 * 0.8357, 100 * 0.8357,
//             1350 * 0.8357, 50 * 0.8357
//         );
//         return ctx;
//     }
//
// // Draw main road with drop shadow
//     ctx.lineWidth = 50 * 0.8357; // Scale stroke width
//     ctx.strokeStyle = '#FF5BA7';
//     ctx.lineCap = 'round';
//     ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//     ctx.shadowBlur = 3 * 0.8357; // Scale shadow blur
//     ctx.shadowOffsetX = 2 * 0.8357; // Scale shadow offset
//     ctx.shadowOffsetY = 2 * 0.8357;
//     drawRoadPath();
//     ctx.stroke();
//
// // Reset shadow for the dashed line
//     ctx.shadowColor = 'transparent';
//     ctx.shadowBlur = 0;
//     ctx.shadowOffsetX = 0;
//     ctx.shadowOffsetY = 0;
//
// // Draw center dashed line
//     ctx.lineWidth = 2 * 0.8357; // Scale stroke width
//     ctx.strokeStyle = 'white';
//     ctx.setLineDash([10 * 0.8357, 10 * 0.8357]); // Scale dash pattern
//     drawRoadPath();
//     ctx.stroke();
//
// }

//
// variant 2
// export function initEducationSection() {
//     const canvas = document.getElementById('roadCanvas');
//     const ctx = canvas.getContext('2d');
//     let progress = 0;
//     let animationId;
//
//     // Store the bezier curve points to use for animation
//     const roadPoints = [
//         { x: 50 * 0.8357, y: 650 * 0.8357 },
//         {
//             cp1x: 150 * 0.8357, cp1y: 600 * 0.8357,
//             cp2x: 200 * 0.8357, cp2y: 450 * 0.8357,
//             x: 300 * 0.8357, y: 450 * 0.8357
//         },
//         {
//             cp1x: 400 * 0.8357, cp1y: 450 * 0.8357,
//             cp2x: 450 * 0.8357, cp2y: 600 * 0.8357,
//             x: 550 * 0.8357, y: 400 * 0.8357
//         },
//         {
//             cp1x: 650 * 0.8357, cp1y: 200 * 0.8357,
//             cp2x: 700 * 0.8357, cp2y: 200 * 0.8357,
//             x: 800 * 0.8357, y: 300 * 0.8357
//         },
//         {
//             cp1x: 900 * 0.8357, cp1y: 400 * 0.8357,
//             cp2x: 950 * 0.8357, cp2y: 400 * 0.8357,
//             x: 1050 * 0.8357, y: 250 * 0.8357
//         },
//         {
//             cp1x: 1150 * 0.8357, cp1y: 100 * 0.8357,
//             cp2x: 1200 * 0.8357, cp2y: 100 * 0.8357,
//             x: 1350 * 0.8357, y: 50 * 0.8357
//         }
//     ];
//
//     function drawRoadPathAnimated(progress) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//         // Draw main road with drop shadow
//         ctx.beginPath();
//         ctx.lineWidth = 50 * 0.8357;
//         ctx.strokeStyle = '#FF5BA7';
//         ctx.lineCap = 'round';
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         ctx.shadowBlur = 3 * 0.8357;
//         ctx.shadowOffsetX = 2 * 0.8357;
//         ctx.shadowOffsetY = 2 * 0.8357;
//
//         // Start point
//         ctx.moveTo(roadPoints[0].x, roadPoints[0].y);
//
//         // Draw up to the current progress
//         const segments = roadPoints.length - 1;
//         const fullSegments = Math.floor(progress * segments);
//         const partialSegment = (progress * segments) - fullSegments;
//
//         // Draw complete segments
//         for (let i = 0; i < fullSegments; i++) {
//             const point = roadPoints[i + 1];
//             ctx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//
//         // Draw partial segment if needed
//         if (partialSegment > 0 && fullSegments < segments) {
//             const currentPoint = roadPoints[fullSegments];
//             const nextPoint = roadPoints[fullSegments + 1];
//
//             // Calculate points along the bezier curve for partial segment
//             const t = partialSegment;
//
//             // Bezier curve formula for point at time t (0 <= t <= 1)
//             const p0x = currentPoint.x;
//             const p0y = currentPoint.y;
//             const p1x = nextPoint.cp1x;
//             const p1y = nextPoint.cp1y;
//             const p2x = nextPoint.cp2x;
//             const p2y = nextPoint.cp2y;
//             const p3x = nextPoint.x;
//             const p3y = nextPoint.y;
//
//             // Calculate point on bezier curve at time t
//             const x = Math.pow(1 - t, 3) * p0x +
//                 3 * Math.pow(1 - t, 2) * t * p1x +
//                 3 * (1 - t) * Math.pow(t, 2) * p2x +
//                 Math.pow(t, 3) * p3x;
//
//             const y = Math.pow(1 - t, 3) * p0y +
//                 3 * Math.pow(1 - t, 2) * t * p1y +
//                 3 * (1 - t) * Math.pow(t, 2) * p2y +
//                 Math.pow(t, 3) * p3y;
//
//             // Draw partial segment
//             ctx.bezierCurveTo(
//                 p1x, p1y,
//                 // This is a simplification - for a proper partial bezier you would need to calculate intermediate control points
//                 // But for animation purposes, this approximate approach works well enough
//                 t > 0.5 ? p2x : p1x, t > 0.5 ? p2y : p1y,
//                 x, y
//             );
//         }
//
//         ctx.stroke();
//
//         // If we've reached the end, draw the dashed center line
//         if (progress >= 0.99) {
//             // Reset shadow for the dashed line
//             ctx.shadowColor = 'transparent';
//             ctx.shadowBlur = 0;
//             ctx.shadowOffsetX = 0;
//             ctx.shadowOffsetY = 0;
//
//             // Draw center dashed line
//             ctx.beginPath();
//             ctx.lineWidth = 2 * 0.8357;
//             ctx.strokeStyle = 'white';
//             ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//             ctx.moveTo(roadPoints[0].x, roadPoints[0].y);
//             for (let i = 0; i < roadPoints.length - 1; i++) {
//                 const point = roadPoints[i + 1];
//                 ctx.bezierCurveTo(
//                     point.cp1x, point.cp1y,
//                     point.cp2x, point.cp2y,
//                     point.x, point.y
//                 );
//             }
//             ctx.stroke();
//             ctx.setLineDash([]); // Reset dash pattern
//         }
//     }
//
//     function animate() {
//         if (progress < 1) {
//             progress += 0.01; // Speed of animation
//             drawRoadPathAnimated(progress);
//             animationId = requestAnimationFrame(animate);
//         } else {
//             // Animation complete
//             cancelAnimationFrame(animationId);
//         }
//     }
//
//     // Start the animation
//     animate();
//
//     // Return a function to restart animation if needed
//     return function restartAnimation() {
//         progress = 0;
//         cancelAnimationFrame(animationId);
//         animate();
//     };
// }


// variant 3
// export function initEducationSection() {
//     const canvas = document.getElementById('roadCanvas');
//     const ctx = canvas.getContext('2d');
//     let progress = 0;
//     let animationId;
//
//     // Store the bezier curve points to use for animation
//     const roadPoints = [
//         { x: 50 * 0.8357, y: 650 * 0.8357 },
//         {
//             cp1x: 150 * 0.8357, cp1y: 600 * 0.8357,
//             cp2x: 200 * 0.8357, cp2y: 450 * 0.8357,
//             x: 300 * 0.8357, y: 450 * 0.8357
//         },
//         {
//             cp1x: 400 * 0.8357, cp1y: 450 * 0.8357,
//             cp2x: 450 * 0.8357, cp2y: 600 * 0.8357,
//             x: 550 * 0.8357, y: 400 * 0.8357
//         },
//         {
//             cp1x: 650 * 0.8357, cp1y: 200 * 0.8357,
//             cp2x: 700 * 0.8357, cp2y: 200 * 0.8357,
//             x: 800 * 0.8357, y: 300 * 0.8357
//         },
//         {
//             cp1x: 900 * 0.8357, cp1y: 400 * 0.8357,
//             cp2x: 950 * 0.8357, cp2y: 400 * 0.8357,
//             x: 1050 * 0.8357, y: 250 * 0.8357
//         },
//         {
//             cp1x: 1150 * 0.8357, cp1y: 100 * 0.8357,
//             cp2x: 1200 * 0.8357, cp2y: 100 * 0.8357,
//             x: 1350 * 0.8357, y: 50 * 0.8357
//         }
//     ];
//
//     function drawRoadPathAnimated(progress) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//         // Draw main road with drop shadow
//         ctx.beginPath();
//         ctx.lineWidth = 50 * 0.8357;
//         ctx.strokeStyle = '#FF5BA7';
//         ctx.lineCap = 'round';
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         ctx.shadowBlur = 3 * 0.8357;
//         ctx.shadowOffsetX = 2 * 0.8357;
//         ctx.shadowOffsetY = 2 * 0.8357;
//
//         // Start point
//         ctx.moveTo(roadPoints[0].x, roadPoints[0].y);
//
//         // Draw up to the current progress
//         const segments = roadPoints.length - 1;
//         const fullSegments = Math.floor(progress * segments);
//         const partialSegment = (progress * segments) - fullSegments;
//
//         // Draw complete segments
//         for (let i = 0; i < fullSegments; i++) {
//             const point = roadPoints[i + 1];
//             ctx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//
//         // Draw partial segment if needed
//         if (partialSegment > 0 && fullSegments < segments) {
//             const currentPoint = roadPoints[fullSegments];
//             const nextPoint = roadPoints[fullSegments + 1];
//
//             // Calculate points along the bezier curve for partial segment
//             const t = partialSegment;
//
//             // Bezier curve formula for point at time t (0 <= t <= 1)
//             const p0x = currentPoint.x;
//             const p0y = currentPoint.y;
//             const p1x = nextPoint.cp1x;
//             const p1y = nextPoint.cp1y;
//             const p2x = nextPoint.cp2x;
//             const p2y = nextPoint.cp2y;
//             const p3x = nextPoint.x;
//             const p3y = nextPoint.y;
//
//             // Calculate point on bezier curve at time t
//             const x = Math.pow(1 - t, 3) * p0x +
//                 3 * Math.pow(1 - t, 2) * t * p1x +
//                 3 * (1 - t) * Math.pow(t, 2) * p2x +
//                 Math.pow(t, 3) * p3x;
//
//             const y = Math.pow(1 - t, 3) * p0y +
//                 3 * Math.pow(1 - t, 2) * t * p1y +
//                 3 * (1 - t) * Math.pow(t, 2) * p2y +
//                 Math.pow(t, 3) * p3y;
//
//             // Draw partial segment
//             ctx.bezierCurveTo(
//                 p1x, p1y,
//                 // This is a simplification - for a proper partial bezier you would need to calculate intermediate control points
//                 // But for animation purposes, this approximate approach works well enough
//                 t > 0.5 ? p2x : p1x, t > 0.5 ? p2y : p1y,
//                 x, y
//             );
//         }
//
//         ctx.stroke();
//
//         // If we've reached the end, draw the dashed center line
//         if (progress >= 0.99) {
//             // Reset shadow for the dashed line
//             ctx.shadowColor = 'transparent';
//             ctx.shadowBlur = 0;
//             ctx.shadowOffsetX = 0;
//             ctx.shadowOffsetY = 0;
//
//             // Draw center dashed line
//             ctx.beginPath();
//             ctx.lineWidth = 2 * 0.8357;
//             ctx.strokeStyle = 'white';
//             ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//             ctx.moveTo(roadPoints[0].x, roadPoints[0].y);
//             for (let i = 0; i < roadPoints.length - 1; i++) {
//                 const point = roadPoints[i + 1];
//                 ctx.bezierCurveTo(
//                     point.cp1x, point.cp1y,
//                     point.cp2x, point.cp2y,
//                     point.x, point.y
//                 );
//             }
//             ctx.stroke();
//             ctx.setLineDash([]); // Reset dash pattern
//         }
//     }
//
//     function animate() {
//         if (progress < 1) {
//             progress += 0.003; // Reduced speed of animation (was 0.01)
//             drawRoadPathAnimated(progress);
//             animationId = requestAnimationFrame(animate);
//         } else {
//             // Animation complete
//             cancelAnimationFrame(animationId);
//         }
//     }
//
//     // Start the animation
//     animate();
//
//     // Return a function to restart animation if needed
//     return function restartAnimation() {
//         progress = 0;
//         cancelAnimationFrame(animationId);
//         animate();
//     };
// }


// variant4
// export function initEducationSection() {
//     const canvas = document.getElementById('roadCanvas');
//     const ctx = canvas.getContext('2d');
//
//     // Create an offscreen canvas for the full road (to reuse)
//     const offscreenCanvas = document.createElement('canvas');
//     offscreenCanvas.width = canvas.width;
//     offscreenCanvas.height = canvas.height;
//     const offCtx = offscreenCanvas.getContext('2d');
//
//     // Store the bezier curve points
//     const roadPath = [
//         { x: 50 * 0.8357, y: 650 * 0.8357 },
//         {
//             cp1x: 150 * 0.8357, cp1y: 600 * 0.8357,
//             cp2x: 200 * 0.8357, cp2y: 450 * 0.8357,
//             x: 300 * 0.8357, y: 450 * 0.8357
//         },
//         {
//             cp1x: 400 * 0.8357, cp1y: 450 * 0.8357,
//             cp2x: 450 * 0.8357, cp2y: 600 * 0.8357,
//             x: 550 * 0.8357, y: 400 * 0.8357
//         },
//         {
//             cp1x: 650 * 0.8357, cp1y: 200 * 0.8357,
//             cp2x: 700 * 0.8357, cp2y: 200 * 0.8357,
//             x: 800 * 0.8357, y: 300 * 0.8357
//         },
//         {
//             cp1x: 900 * 0.8357, cp1y: 400 * 0.8357,
//             cp2x: 950 * 0.8357, cp2y: 400 * 0.8357,
//             x: 1050 * 0.8357, y: 250 * 0.8357
//         },
//         {
//             cp1x: 1150 * 0.8357, cp1y: 100 * 0.8357,
//             cp2x: 1200 * 0.8357, cp2y: 100 * 0.8357,
//             x: 1350 * 0.8357, y: 50 * 0.8357
//         }
//     ];
//
//     // Precompute points along the path for smooth animation
//     const totalPoints = 500; // More points = smoother animation
//     const pathPoints = [];
//
//     // Calculate points along the entire path
//     function calculatePathPoints() {
//         // Start with the first point
//         pathPoints.push({ x: roadPath[0].x, y: roadPath[0].y });
//
//         // For each segment of the path
//         for (let i = 0; i < roadPath.length - 1; i++) {
//             const p0 = roadPath[i];
//             const p1 = roadPath[i + 1];
//
//             // Number of points to generate for this segment (proportional to segment length)
//             const pointsPerSegment = 100;
//
//             // Generate points along this bezier curve segment
//             for (let j = 1; j <= pointsPerSegment; j++) {
//                 const t = j / pointsPerSegment;
//
//                 // Bezier curve formula
//                 const x = Math.pow(1-t, 3) * p0.x +
//                     3 * Math.pow(1-t, 2) * t * p1.cp1x +
//                     3 * (1-t) * Math.pow(t, 2) * p1.cp2x +
//                     Math.pow(t, 3) * p1.x;
//
//                 const y = Math.pow(1-t, 3) * p0.y +
//                     3 * Math.pow(1-t, 2) * t * p1.cp1y +
//                     3 * (1-t) * Math.pow(t, 2) * p1.cp2y +
//                     Math.pow(t, 3) * p1.y;
//
//                 pathPoints.push({ x, y });
//             }
//         }
//     }
//
//     // Precompute all the points
//     calculatePathPoints();
//
//     // Pre-render the complete road on the offscreen canvas
//     function renderFullRoad() {
//         // Draw main road with drop shadow
//         offCtx.lineWidth = 50 * 0.8357;
//         offCtx.strokeStyle = '#FF5BA7';
//         offCtx.lineCap = 'round';
//         offCtx.lineJoin = 'round';
//         offCtx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         offCtx.shadowBlur = 3 * 0.8357;
//         offCtx.shadowOffsetX = 2 * 0.8357;
//         offCtx.shadowOffsetY = 2 * 0.8357;
//
//         offCtx.beginPath();
//         offCtx.moveTo(roadPath[0].x, roadPath[0].y);
//
//         for (let i = 1; i < roadPath.length; i++) {
//             const point = roadPath[i];
//             offCtx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//         offCtx.stroke();
//
//         // Reset shadow for the dashed line
//         offCtx.shadowColor = 'transparent';
//         offCtx.shadowBlur = 0;
//         offCtx.shadowOffsetX = 0;
//         offCtx.shadowOffsetY = 0;
//
//         // Draw center dashed line
//         offCtx.beginPath();
//         offCtx.lineWidth = 2 * 0.8357;
//         offCtx.strokeStyle = 'white';
//         offCtx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//         offCtx.moveTo(roadPath[0].x, roadPath[0].y);
//         for (let i = 1; i < roadPath.length; i++) {
//             const point = roadPath[i];
//             offCtx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//         offCtx.stroke();
//         offCtx.setLineDash([]);
//     }
//
//     // Draw the animation frame
//     function drawAnimationFrame(pointIndex) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//         if (pointIndex <= 0) return;
//
//         // Draw the road up to the current point
//         ctx.lineWidth = 50 * 0.8357;
//         ctx.strokeStyle = '#FF5BA7';
//         ctx.lineCap = 'round';
//         ctx.lineJoin = 'round';
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         ctx.shadowBlur = 3 * 0.8357;
//         ctx.shadowOffsetX = 2 * 0.8357;
//         ctx.shadowOffsetY = 2 * 0.8357;
//
//         // Draw the path up to the current point
//         ctx.beginPath();
//         ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
//
//         // Draw a smooth line through all points up to current index
//         for (let i = 1; i <= pointIndex; i++) {
//             ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
//         }
//         ctx.stroke();
//
//         // Draw a "drawing head" at the current position for a more natural drawing effect
//         const currentPoint = pathPoints[pointIndex];
//         ctx.beginPath();
//         ctx.arc(currentPoint.x, currentPoint.y, (25 * 0.8357), 0, Math.PI * 2);
//         ctx.fillStyle = '#FF5BA7';
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//         ctx.shadowBlur = 10 * 0.8357;
//         ctx.fill();
//
//         // If we're at the end, draw the dashed line
//         if (pointIndex >= pathPoints.length - 1) {
//             // Create a growing effect for the dashed line
//             const dashProgress = Math.min(1, (pointIndex - (pathPoints.length - 1)) / 50);
//
//             if (dashProgress > 0) {
//                 ctx.shadowColor = 'transparent';
//                 ctx.shadowBlur = 0;
//                 ctx.shadowOffsetX = 0;
//                 ctx.shadowOffsetY = 0;
//
//                 // Draw dashed line with animation
//                 ctx.beginPath();
//                 ctx.lineWidth = 2 * 0.8357;
//                 ctx.strokeStyle = 'white';
//                 ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//                 // Gradual reveal of dashed line
//                 const dashPoints = Math.floor(pathPoints.length * dashProgress);
//
//                 if (dashPoints > 0) {
//                     ctx.beginPath();
//                     ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
//
//                     for (let i = 1; i <= dashPoints; i++) {
//                         ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
//                     }
//                     ctx.stroke();
//                 }
//
//                 ctx.setLineDash([]);
//             }
//         }
//     }
//
//     // Animation variables
//     let currentPointIndex = 0;
//     let animationId;
//     let lastFrameTime = 0;
//     const frameDuration = 16; // ms between frames (approx 60fps)
//
//     // Animation function with time-based control
//     function animate(timestamp) {
//         if (!lastFrameTime) lastFrameTime = timestamp;
//
//         const elapsed = timestamp - lastFrameTime;
//
//         if (elapsed > frameDuration) {
//             lastFrameTime = timestamp;
//
//             // Draw the current frame
//             drawAnimationFrame(currentPointIndex);
//
//             // Advance to next point at varying speeds for natural drawing effect
//             // Slow down at curves and speed up on straighter sections
//             if (currentPointIndex < pathPoints.length + 50) { // +50 for dashed line animation
//                 // Calculate how much to increment based on curvature
//                 let increment = 1;
//
//                 // Variable speed - if we're at a valid index
//                 if (currentPointIndex > 1 && currentPointIndex < pathPoints.length - 1) {
//                     // Calculate angle change to detect curves
//                     const prev = pathPoints[currentPointIndex - 1];
//                     const curr = pathPoints[currentPointIndex];
//                     const next = pathPoints[Math.min(currentPointIndex + 1, pathPoints.length - 1)];
//
//                     // Calculate vectors
//                     const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
//                     const v2 = { x: next.x - curr.x, y: next.y - curr.y };
//
//                     // Normalize
//                     const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
//                     const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
//
//                     // Check if vectors are long enough to measure angle accurately
//                     if (len1 > 0.001 && len2 > 0.001) {
//                         // Calculate dot product
//                         const dot = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
//                         // Angle in radians (0 = same direction, PI = opposite)
//                         const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
//
//                         // Adjust speed based on angle - slower on curves
//                         // angle of 0 = straight line, PI = sharp turn
//                         increment = 3 - (angle / Math.PI) * 2.5; // Range from 0.5 to 3
//                     }
//                 }
//
//                 // Base speed is slower at start and end
//                 if (currentPointIndex < 30) {
//                     // Gradual start
//                     increment *= currentPointIndex / 30;
//                 } else if (currentPointIndex > pathPoints.length - 30) {
//                     // Slow down at the end
//                     increment *= (pathPoints.length - currentPointIndex) / 30;
//                 }
//
//                 // Ensure minimum speed
//                 increment = Math.max(0.5, increment);
//
//                 // Advance to next point
//                 currentPointIndex += Math.round(increment);
//
//                 // Ensure we don't exceed bounds for dashed line animation
//                 currentPointIndex = Math.min(currentPointIndex, pathPoints.length + 50);
//             } else {
//                 // Animation complete
//                 cancelAnimationFrame(animationId);
//                 return;
//             }
//         }
//
//         // Continue animation
//         animationId = requestAnimationFrame(animate);
//     }
//
//     // Start the animation
//     function startAnimation() {
//         currentPointIndex = 0;
//         if (animationId) {
//             cancelAnimationFrame(animationId);
//         }
//         lastFrameTime = 0;
//         animationId = requestAnimationFrame(animate);
//     }
//
//     // Start immediately
//     startAnimation();
//
//     // Return a function to restart animation if needed
//     return startAnimation;
// }


// variant 5

// export function initEducationSection() {
//     const canvas = document.getElementById('roadCanvas');
//     const ctx = canvas.getContext('2d');
//
//     // Create an offscreen canvas for the full road (to reuse)
//     const offscreenCanvas = document.createElement('canvas');
//     offscreenCanvas.width = canvas.width;
//     offscreenCanvas.height = canvas.height;
//     const offCtx = offscreenCanvas.getContext('2d');
//
//     // Store the bezier curve points
//     const roadPath = [
//         { x: 50 * 0.8357, y: 650 * 0.8357 },
//         {
//             cp1x: 150 * 0.8357, cp1y: 600 * 0.8357,
//             cp2x: 200 * 0.8357, cp2y: 450 * 0.8357,
//             x: 300 * 0.8357, y: 450 * 0.8357
//         },
//         {
//             cp1x: 400 * 0.8357, cp1y: 450 * 0.8357,
//             cp2x: 450 * 0.8357, cp2y: 600 * 0.8357,
//             x: 550 * 0.8357, y: 400 * 0.8357
//         },
//         {
//             cp1x: 650 * 0.8357, cp1y: 200 * 0.8357,
//             cp2x: 700 * 0.8357, cp2y: 200 * 0.8357,
//             x: 800 * 0.8357, y: 300 * 0.8357
//         },
//         {
//             cp1x: 900 * 0.8357, cp1y: 400 * 0.8357,
//             cp2x: 950 * 0.8357, cp2y: 400 * 0.8357,
//             x: 1050 * 0.8357, y: 250 * 0.8357
//         },
//         {
//             cp1x: 1150 * 0.8357, cp1y: 100 * 0.8357,
//             cp2x: 1200 * 0.8357, cp2y: 100 * 0.8357,
//             x: 1350 * 0.8357, y: 50 * 0.8357
//         }
//     ];
//
//     // Precompute points along the path for smooth animation
//     const totalPoints = 500; // More points = smoother animation
//     const pathPoints = [];
//
//     // Calculate points along the entire path
//     function calculatePathPoints() {
//         // Start with the first point
//         pathPoints.push({ x: roadPath[0].x, y: roadPath[0].y });
//
//         // For each segment of the path
//         for (let i = 0; i < roadPath.length - 1; i++) {
//             const p0 = roadPath[i];
//             const p1 = roadPath[i + 1];
//
//             // Number of points to generate for this segment (proportional to segment length)
//             const pointsPerSegment = 100;
//
//             // Generate points along this bezier curve segment
//             for (let j = 1; j <= pointsPerSegment; j++) {
//                 const t = j / pointsPerSegment;
//
//                 // Bezier curve formula
//                 const x = Math.pow(1-t, 3) * p0.x +
//                     3 * Math.pow(1-t, 2) * t * p1.cp1x +
//                     3 * (1-t) * Math.pow(t, 2) * p1.cp2x +
//                     Math.pow(t, 3) * p1.x;
//
//                 const y = Math.pow(1-t, 3) * p0.y +
//                     3 * Math.pow(1-t, 2) * t * p1.cp1y +
//                     3 * (1-t) * Math.pow(t, 2) * p1.cp2y +
//                     Math.pow(t, 3) * p1.y;
//
//                 pathPoints.push({ x, y });
//             }
//         }
//     }
//
//     // Precompute all the points
//     calculatePathPoints();
//
//     // Pre-render the complete road on the offscreen canvas
//     function renderFullRoad() {
//         // Draw main road with drop shadow
//         offCtx.lineWidth = 50 * 0.8357;
//         offCtx.strokeStyle = '#FF5BA7';
//         offCtx.lineCap = 'round';
//         offCtx.lineJoin = 'round';
//         offCtx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         offCtx.shadowBlur = 3 * 0.8357;
//         offCtx.shadowOffsetX = 2 * 0.8357;
//         offCtx.shadowOffsetY = 2 * 0.8357;
//
//         offCtx.beginPath();
//         offCtx.moveTo(roadPath[0].x, roadPath[0].y);
//
//         for (let i = 1; i < roadPath.length; i++) {
//             const point = roadPath[i];
//             offCtx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//         offCtx.stroke();
//
//         // Reset shadow for the dashed line
//         offCtx.shadowColor = 'transparent';
//         offCtx.shadowBlur = 0;
//         offCtx.shadowOffsetX = 0;
//         offCtx.shadowOffsetY = 0;
//
//         // Draw center dashed line
//         offCtx.beginPath();
//         offCtx.lineWidth = 2 * 0.8357;
//         offCtx.strokeStyle = 'white';
//         offCtx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//         offCtx.moveTo(roadPath[0].x, roadPath[0].y);
//         for (let i = 1; i < roadPath.length; i++) {
//             const point = roadPath[i];
//             offCtx.bezierCurveTo(
//                 point.cp1x, point.cp1y,
//                 point.cp2x, point.cp2y,
//                 point.x, point.y
//             );
//         }
//         offCtx.stroke();
//         offCtx.setLineDash([]);
//     }
//
//     // Draw the animation frame
//     function drawAnimationFrame(pointIndex) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//         if (pointIndex <= 0 || pointIndex >= pathPoints.length + 50) return;
//
//         // Draw the road up to the current point
//         ctx.lineWidth = 50 * 0.8357;
//         ctx.strokeStyle = '#FF5BA7';
//         ctx.lineCap = 'round';
//         ctx.lineJoin = 'round';
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
//         ctx.shadowBlur = 3 * 0.8357;
//         ctx.shadowOffsetX = 2 * 0.8357;
//         ctx.shadowOffsetY = 2 * 0.8357;
//
//         // Draw the path up to the current point
//         ctx.beginPath();
//         ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
//
//         // Draw a smooth line through all points up to current index
//         // Make sure we don't exceed the pathPoints array bounds
//         const maxIndex = Math.min(pointIndex, pathPoints.length - 1);
//         for (let i = 1; i <= maxIndex; i++) {
//             ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
//         }
//         ctx.stroke();
//
//         // Draw a "drawing head" at the current position for a more natural drawing effect
//         // const currentPoint = pathPoints[pointIndex];
//         // ctx.beginPath();
//         // ctx.arc(currentPoint.x, currentPoint.y, (25 * 0.8357), 0, Math.PI * 2);
//         // ctx.fillStyle = '#FF5BA7';
//         // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//         // ctx.shadowBlur = 10 * 0.8357;
//         // ctx.fill();
//
//         // If we're at the end, draw the dashed line
//         if (pointIndex >= pathPoints.length - 1) {
//             // Create a growing effect for the dashed line
//             const dashProgress = Math.min(1, (pointIndex - (pathPoints.length - 1)) / 50);
//
//             if (dashProgress > 0) {
//                 ctx.shadowColor = 'transparent';
//                 ctx.shadowBlur = 0;
//                 ctx.shadowOffsetX = 0;
//                 ctx.shadowOffsetY = 0;
//
//                 // Draw dashed line with animation
//                 ctx.beginPath();
//                 ctx.lineWidth = 2 * 0.8357;
//                 ctx.strokeStyle = 'white';
//                 ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);
//
//                 // Gradual reveal of dashed line
//                 const dashPoints = Math.floor(pathPoints.length * dashProgress);
//
//                 if (dashPoints > 0) {
//                     ctx.beginPath();
//                     ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
//
//                     // Make sure we don't exceed the array bounds
//                     const maxDashIndex = Math.min(dashPoints, pathPoints.length - 1);
//                     for (let i = 1; i <= maxDashIndex; i++) {
//                         ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
//                     }
//                     ctx.stroke();
//                 }
//
//                 ctx.setLineDash([]);
//             }
//         }
//     }
//
//     // Animation variables
//     let currentPointIndex = 0;
//     let animationId;
//     let lastFrameTime = 0;
//     const frameDuration = 16; // ms between frames (approx 60fps)
//
//     // Animation function with time-based control
//     function animate(timestamp) {
//         if (!lastFrameTime) lastFrameTime = timestamp;
//
//         const elapsed = timestamp - lastFrameTime;
//
//         if (elapsed > frameDuration) {
//             lastFrameTime = timestamp;
//
//             // Draw the current frame
//             drawAnimationFrame(currentPointIndex);
//
//             // Advance to next point at varying speeds for natural drawing effect
//             // Slow down at curves and speed up on straighter sections
//             if (currentPointIndex < pathPoints.length + 50) { // +50 for dashed line animation
//                 // Calculate how much to increment based on curvature
//                 let increment = 1;
//
//                 // Variable speed - if we're at a valid index
//                 if (currentPointIndex > 1 && currentPointIndex < pathPoints.length - 1) {
//                     // Calculate angle change to detect curves
//                     const prev = pathPoints[currentPointIndex - 1];
//                     const curr = pathPoints[currentPointIndex];
//                     const next = pathPoints[Math.min(currentPointIndex + 1, pathPoints.length - 1)];
//
//                     // Calculate vectors
//                     const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
//                     const v2 = { x: next.x - curr.x, y: next.y - curr.y };
//
//                     // Normalize
//                     const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
//                     const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
//
//                     // Check if vectors are long enough to measure angle accurately
//                     if (len1 > 0.001 && len2 > 0.001) {
//                         // Calculate dot product
//                         const dot = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
//                         // Angle in radians (0 = same direction, PI = opposite)
//                         const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
//
//                         // Adjust speed based on angle - slower on curves
//                         // angle of 0 = straight line, PI = sharp turn
//                         increment = 3 - (angle / Math.PI) * 2.5; // Range from 0.5 to 3
//                     }
//                 }
//
//                 // Base speed is slower at start and end
//                 if (currentPointIndex < 30) {
//                     // Gradual start
//                     increment *= currentPointIndex / 30;
//                 } else if (currentPointIndex > pathPoints.length - 30) {
//                     // Slow down at the end
//                     increment *= (pathPoints.length - currentPointIndex) / 30;
//                 }
//
//                 // Ensure minimum speed
//                 increment = Math.max(0.5, increment);
//
//                 // Advance to next point
//                 currentPointIndex += Math.round(increment);
//
//                 // Ensure we don't exceed bounds for dashed line animation
//                 currentPointIndex = Math.min(currentPointIndex, pathPoints.length + 50);
//             } else {
//                 // Animation complete
//                 cancelAnimationFrame(animationId);
//                 return;
//             }
//         }
//
//         // Continue animation
//         animationId = requestAnimationFrame(animate);
//     }
//
//     // Start the animation
//     function startAnimation() {
//         currentPointIndex = 0;
//         if (animationId) {
//             cancelAnimationFrame(animationId);
//         }
//         lastFrameTime = 0;
//         animationId = requestAnimationFrame(animate);
//     }
//
//     // Start immediately
//     startAnimation();
//
//     // Return a function to restart animation if needed
//     return startAnimation;
// }


// variant 7
export function initEducationSection() {
    const canvas = document.getElementById('roadCanvas');
    const ctx = canvas.getContext('2d');

    // Create an offscreen canvas for the full road (to reuse)
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offCtx = offscreenCanvas.getContext('2d');

    // Store the bezier curve points
    const roadPath = [
        { x: 50 * 0.8357, y: 650 * 0.8357 },
        {
            cp1x: 150 * 0.8357, cp1y: 600 * 0.8357,
            cp2x: 200 * 0.8357, cp2y: 450 * 0.8357,
            x: 300 * 0.8357, y: 450 * 0.8357
        },
        {
            cp1x: 400 * 0.8357, cp1y: 450 * 0.8357,
            cp2x: 450 * 0.8357, cp2y: 600 * 0.8357,
            x: 550 * 0.8357, y: 400 * 0.8357
        },
        {
            cp1x: 650 * 0.8357, cp1y: 200 * 0.8357,
            cp2x: 700 * 0.8357, cp2y: 200 * 0.8357,
            x: 800 * 0.8357, y: 300 * 0.8357
        },
        {
            cp1x: 900 * 0.8357, cp1y: 400 * 0.8357,
            cp2x: 950 * 0.8357, cp2y: 400 * 0.8357,
            x: 1050 * 0.8357, y: 250 * 0.8357
        },
        {
            cp1x: 1150 * 0.8357, cp1y: 100 * 0.8357,
            cp2x: 1200 * 0.8357, cp2y: 100 * 0.8357,
            x: 1350 * 0.8357, y: 50 * 0.8357
        }
    ];

    // Precompute points along the path for smooth animation
    const totalPoints = 500; // More points = smoother animation
    const pathPoints = [];

    // Calculate points along the entire path
    function calculatePathPoints() {
        // Start with the first point
        pathPoints.push({ x: roadPath[0].x, y: roadPath[0].y });

        // For each segment of the path
        for (let i = 0; i < roadPath.length - 1; i++) {
            const p0 = roadPath[i];
            const p1 = roadPath[i + 1];

            // Number of points to generate for this segment (proportional to segment length)
            const pointsPerSegment = 100;

            // Generate points along this bezier curve segment
            for (let j = 1; j <= pointsPerSegment; j++) {
                const t = j / pointsPerSegment;

                // Bezier curve formula
                const x = Math.pow(1-t, 3) * p0.x +
                    3 * Math.pow(1-t, 2) * t * p1.cp1x +
                    3 * (1-t) * Math.pow(t, 2) * p1.cp2x +
                    Math.pow(t, 3) * p1.x;

                const y = Math.pow(1-t, 3) * p0.y +
                    3 * Math.pow(1-t, 2) * t * p1.cp1y +
                    3 * (1-t) * Math.pow(t, 2) * p1.cp2y +
                    Math.pow(t, 3) * p1.y;

                pathPoints.push({ x, y });
            }
        }
    }

    // Precompute all the points
    calculatePathPoints();

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

    // Draw the animation frame
    function drawAnimationFrame(pointIndex) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (pointIndex <= 0 || pointIndex >= pathPoints.length + 50) return;

        // Draw the road up to the current point
        ctx.lineWidth = 50 * 0.8357;
        ctx.strokeStyle = '#FF5BA7';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 3 * 0.8357;
        ctx.shadowOffsetX = 2 * 0.8357;
        ctx.shadowOffsetY = 2 * 0.8357;

        // Draw the path up to the current point
        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);

        // Draw a smooth line through all points up to current index
        // Make sure we don't exceed the pathPoints array bounds
        const maxIndex = Math.min(pointIndex, pathPoints.length - 1);
        for (let i = 1; i <= maxIndex; i++) {
            ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();

        // Draw a "drawing head" at the current position for a more natural drawing effect
        // const currentPoint = pathPoints[pointIndex];
        // ctx.beginPath();
        // ctx.arc(currentPoint.x, currentPoint.y, (25 * 0.8357), 0, Math.PI * 2);
        // ctx.fillStyle = '#FF5BA7';
        // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        // ctx.shadowBlur = 10 * 0.8357;
        // ctx.fill();

        // If we're at the end, draw the dashed line
        if (pointIndex >= pathPoints.length - 1) {
            // Create a growing effect for the dashed line
            const dashProgress = Math.min(1, (pointIndex - (pathPoints.length - 1)) / 50);

            if (dashProgress > 0) {
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                // Draw dashed line with animation
                ctx.beginPath();
                ctx.lineWidth = 2 * 0.8357;
                ctx.strokeStyle = 'white';
                ctx.setLineDash([10 * 0.8357, 10 * 0.8357]);

                // Gradual reveal of dashed line
                const dashPoints = Math.floor(pathPoints.length * dashProgress);

                if (dashPoints > 0) {
                    ctx.beginPath();
                    ctx.moveTo(pathPoints[0].x, pathPoints[0].y);

                    // Make sure we don't exceed the array bounds
                    const maxDashIndex = Math.min(dashPoints, pathPoints.length - 1);
                    for (let i = 1; i <= maxDashIndex; i++) {
                        ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
                    }
                    ctx.stroke();
                }

                ctx.setLineDash([]);
            }
        }
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
            drawAnimationFrame(currentPointIndex);

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
