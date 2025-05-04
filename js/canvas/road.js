// const canvas = document.getElementById('roadCanvas');
// const ctx = canvas.getContext('2d');
//
// // Function to draw the Bezier curve path with scaled coordinates
// function drawRoadPath() {
//     ctx.beginPath();
//     ctx.moveTo(50 * 0.8357, 650 * 0.8357);
//     ctx.bezierCurveTo(
//         150 * 0.8357, 600 * 0.8357,
//         200 * 0.8357, 450 * 0.8357,
//         300 * 0.8357, 450 * 0.8357
//     );
//     ctx.bezierCurveTo(
//         400 * 0.8357, 450 * 0.8357,
//         450 * 0.8357, 600 * 0.8357,
//         550 * 0.8357, 400 * 0.8357
//     );
//     ctx.bezierCurveTo(
//         650 * 0.8357, 200 * 0.8357,
//         700 * 0.8357, 200 * 0.8357,
//         800 * 0.8357, 300 * 0.8357
//     );
//     ctx.bezierCurveTo(
//         900 * 0.8357, 400 * 0.8357,
//         950 * 0.8357, 400 * 0.8357,
//         1050 * 0.8357, 250 * 0.8357
//     );
//     ctx.bezierCurveTo(
//         1150 * 0.8357, 100 * 0.8357,
//         1200 * 0.8357, 100 * 0.8357,
//         1350 * 0.8357, 50 * 0.8357
//     );
//     return ctx;
// }
//
// // Draw main road with drop shadow
// ctx.lineWidth = 50 * 0.8357; // Scale stroke width
// ctx.strokeStyle = '#8288c9';
// ctx.lineCap = 'round';
// ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
// ctx.shadowBlur = 3 * 0.8357; // Scale shadow blur
// ctx.shadowOffsetX = 2 * 0.8357; // Scale shadow offset
// ctx.shadowOffsetY = 2 * 0.8357;
// drawRoadPath();
// ctx.stroke();
//
// // Reset shadow for the dashed line
// ctx.shadowColor = 'transparent';
// ctx.shadowBlur = 0;
// ctx.shadowOffsetX = 0;
// ctx.shadowOffsetY = 0;
//
// // Draw center dashed line
// ctx.lineWidth = 2 * 0.8357; // Scale stroke width
// ctx.strokeStyle = 'white';
// ctx.setLineDash([10 * 0.8357, 10 * 0.8357]); // Scale dash pattern
// drawRoadPath();
// ctx.stroke();









// const canvas = document.getElementById("roadCanvas");
// const ctx = canvas.getContext("2d");

// ctx.lineWidth = 60;
// ctx.strokeStyle = "#5D62FB"; // Main road color
// ctx.lineCap = "round";

// ctx.beginPath();
// ctx.moveTo(100, 600);
// ctx.bezierCurveTo(200, 500, 300, 500, 350, 600);
// ctx.bezierCurveTo(400, 700, 500, 700, 550, 600);
// ctx.bezierCurveTo(600, 500, 700, 500, 750, 600);
// ctx.bezierCurveTo(800, 700, 900, 700, 950, 600);
// ctx.bezierCurveTo(1000, 500, 1100, 500, 1150, 400);
// ctx.stroke();

// Dashed center line
// ctx.lineWidth = 4;
// ctx.setLineDash([20, 15]);
// ctx.strokeStyle = "#fff";
// ctx.beginPath();
// ctx.moveTo(100, 600);
// ctx.bezierCurveTo(200, 500, 300, 500, 350, 600);
// ctx.bezierCurveTo(400, 700, 500, 700, 550, 600);
// ctx.bezierCurveTo(600, 500, 700, 500, 750, 600);
// ctx.bezierCurveTo(800, 700, 900, 700, 950, 600);
// ctx.bezierCurveTo(1000, 500, 1100, 500, 1150, 400);
// ctx.stroke();




// new
// window.onload = function() {
// const canvas = document.getElementById('roadCanvas');
// const ctx = canvas.getContext('2d');
//
// // Set background
// ctx.fillStyle = "#f1f1fa";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
//
// // Road path coordinates
// const roadPath = [
//     {x: 100, y: 400}, // Starting point
//     {x: 250, y: 380, control1: {x: 160, y: 400}, control2: {x: 200, y: 380}}, // First curve
//     {x: 370, y: 300, control1: {x: 300, y: 380}, control2: {x: 340, y: 350}}, // Second curve
//     {x: 460, y: 180, control1: {x: 400, y: 250}, control2: {x: 440, y: 210}}, // Third curve
//     {x: 550, y: 200, control1: {x: 480, y: 150}, control2: {x: 520, y: 170}}, // Fourth curve
//     {x: 650, y: 280, control1: {x: 580, y: 230}, control2: {x: 620, y: 260}}, // Fifth curve
//     {x: 750, y: 230, control1: {x: 680, y: 300}, control2: {x: 720, y: 250}}  // Final curve
// ];
//
// // Draw the road
// drawRoad(ctx, roadPath, 30);
//
// // Add milestone circles
// drawMilestones(ctx, roadPath);
//
// // Draw milestone labels
// drawMilestoneLabels(ctx, roadPath);
// };
//
// function drawRoad(ctx, path, roadWidth) {
//     // Draw the outer edges of the road
//     ctx.beginPath();
//     ctx.strokeStyle = "#6670b7";
//     ctx.lineWidth = roadWidth;
//     ctx.lineCap = 'round';
//     ctx.lineJoin = 'round';
//
//     // Move to the starting point
//     ctx.moveTo(path[0].x, path[0].y);
//
//     // Draw bezier curves for the path
//     for (let i = 1; i < path.length; i++) {
//         const point = path[i];
//         if (point.control1 && point.control2) {
//             ctx.bezierCurveTo(
//                 point.control1.x, point.control1.y,
//                 point.control2.x, point.control2.y,
//                 point.x, point.y
//             );
//         } else {
//             ctx.lineTo(point.x, point.y);
//         }
//     }
//     ctx.stroke();
//
//     // Draw the dashed center line
//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = 2;
//     ctx.setLineDash([10, 10]);
//
//     // Move to the starting point
//     ctx.moveTo(path[0].x, path[0].y);
//
//     // Draw bezier curves for the center line
//     for (let i = 1; i < path.length; i++) {
//         const point = path[i];
//         if (point.control1 && point.control2) {
//             ctx.bezierCurveTo(
//                 point.control1.x, point.control1.y,
//                 point.control2.x, point.control2.y,
//                 point.x, point.y
//             );
//         } else {
//             ctx.lineTo(point.x, point.y);
//         }
//     }
//     ctx.stroke();
//     ctx.setLineDash([]);
// }
//
// function drawMilestones(ctx, path) {
//     // Define milestone positions along the path (adjust as needed)
//     const milestonePositions = [
//         {index: 0, percent: 0.11}, // First milestone (01)
//         {index: 1, percent: 0.28}, // Second milestone (02)
//         {index: 2, percent: 0.58}, // Third milestone (03)
//         {index: 3, percent: 0.78}, // Fourth milestone
//         {index: 4, percent: 0.92}  // Fifth milestone
//     ];
//
//     const milestoneColors = [
//         "#ffffff", // White with blue border
//         "#ff7f7f", // Pinkish red
//         "#ffb347", // Orange
//         "#87cefa", // Light blue
//         "#90ee90"  // Light green
//     ];
//
//     // Draw each milestone
//     milestonePositions.forEach((pos, idx) => {
//         // Calculate position on the path
//         const pointOnPath = getPointOnPath(path, pos.percent);
//
//         // Draw outer circle
//         ctx.beginPath();
//         ctx.arc(pointOnPath.x, pointOnPath.y, 16, 0, Math.PI * 2);
//         ctx.fillStyle = "#ffffff";
//         ctx.fill();
//         ctx.strokeStyle = "#6670b7";
//         ctx.lineWidth = 1;
//         ctx.stroke();
//
//         // Draw inner circle
//         ctx.beginPath();
//         ctx.arc(pointOnPath.x, pointOnPath.y, 12, 0, Math.PI * 2);
//         ctx.fillStyle = milestoneColors[idx];
//         ctx.fill();
//
//         // Add number text
//         ctx.font = "bold 12px Arial";
//         ctx.fillStyle = "#000";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText(`0${idx + 1}`, pointOnPath.x, pointOnPath.y);
//     });
// }
//
// function drawMilestoneLabels(ctx, path) {
//     // Labels for each milestone
//     const labels = [
//         {text: "CLOUD SUPPORT", x: 80, y: 430},
//         {text: "USER SUPPORT", x: 250, y: 290},
//         {text: "SET GOALS", x: 510, y: 320},
//         {text: "EXPLORE", x: 640, y: 200},
//         {text: "SET LOCATION", x: 720, y: 170}
//     ];
//
//     // Draw each label
//     labels.forEach(label => {
//         // Draw label box
//         const textWidth = ctx.measureText(label.text).width;
//         const boxWidth = textWidth + 40;
//         const boxHeight = 40;
//
//         ctx.fillStyle = "#ffffff";
//         ctx.strokeStyle = "#e0e0e0";
//         ctx.lineWidth = 1;
//
//         // Draw rounded rectangle
//         roundRect(ctx, label.x, label.y, boxWidth, boxHeight, 5, true, true);
//
//         // Add label text
//         ctx.font = "bold 12px Arial";
//         ctx.fillStyle = "#333";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText(label.text, label.x + boxWidth/2, label.y + boxHeight/2);
//     });
// }
//
// // Helper function to calculate point on a bezier curve
// function getPointOnPath(path, percent) {
//     // Simple implementation - just interpolate between path points
//     // For a more accurate implementation, we would need to calculate points on the bezier curves
//     const totalPoints = path.length;
//     const index = Math.min(Math.floor(percent * (totalPoints - 1)), totalPoints - 2);
//     const t = (percent * (totalPoints - 1)) - index;
//
//     const p1 = path[index];
//     const p2 = path[index + 1];
//
//     // Simple linear interpolation
//     return {
//         x: p1.x + (p2.x - p1.x) * t,
//         y: p1.y + (p2.y - p1.y) * t
//     };
// }
//
// // Helper function to draw rounded rectangles
// function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
//     ctx.beginPath();
//     ctx.moveTo(x + radius, y);
//     ctx.lineTo(x + width - radius, y);
//     ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
//     ctx.lineTo(x + width, y + height - radius);
//     ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
//     ctx.lineTo(x + radius, y + height);
//     ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
//     ctx.lineTo(x, y + radius);
//     ctx.quadraticCurveTo(x, y, x + radius, y);
//     ctx.closePath();
//     if (fill) {
//         ctx.fill();
//     }
//     if (stroke) {
//         ctx.stroke();
//     }
// }


