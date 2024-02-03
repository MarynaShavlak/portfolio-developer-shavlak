const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 190;

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function drawCorner(x, y, size, color) {
  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2c';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}
function drawEmptyCorner(x, y, size) {
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.strokeStyle = '#2b2a2c';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.stroke();
}

function drawPerpendicularLineAtCorner(x, y, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = '2';
  const width = 15;
  ctx.moveTo(x - width / 2, y);
  ctx.lineTo(x + width / 2, y);
  ctx.stroke();
}

function drawLineWithDash(coords, dashArray, color, width) {
  const { x1, y1, x2, y2 } = coords;
  ctx.setLineDash(dashArray);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawHexagon() {
  let coordArr = [];
  for (let i = 0; i < 6; i++) {
    const angle = toRadians(60 * i - 90);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    coordArr.push({ x: x, y: y });
  }
  const coords1 = {
    x1: coordArr[0].x,
    y1: coordArr[0].y,
    x2: coordArr[1].x,
    y2: coordArr[1].y,
  };
  drawLineWithDash(coords1, [2, 2], '#6a696b', 2);

  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[0].x, coordArr[0].y);
  ctx.lineTo(coordArr[0].x, coordArr[0].y - 60);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2c';
  ctx.lineWidth = '5';
  ctx.moveTo(coordArr[0].x, coordArr[0].y);
  ctx.lineTo(coordArr[5].x, coordArr[5].y);
  ctx.stroke();

  ctx.setLineDash([3, 2]);
  ctx.beginPath();
  ctx.strokeStyle = '#6a696b';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[5].x, coordArr[5].y);
  const finalX = coordArr[5].x - 80;
  const finalY = coordArr[5].y - 40;
  ctx.lineTo(finalX, finalY);
  ctx.stroke();
  ctx.setLineDash([]);
  drawCorner(finalX, finalY, 4, '#2b2a2c');

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[5].x, coordArr[5].y);
  ctx.lineTo(coordArr[4].x, coordArr[4].y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[4].x, coordArr[4].y);
  const final4X = coordArr[4].x - 70;
  const final4Y = coordArr[4].y + 40;
  ctx.lineTo(final4X, final4Y);
  ctx.stroke();
  drawEmptyCorner(final4X + 35, final4Y - 20, 4);
  drawEmptyCorner(final4X, final4Y, 4);

  ctx.setLineDash([3, 2]);
  ctx.beginPath();
  ctx.strokeStyle = '#6a696b';
  ctx.lineWidth = '2';
  ctx.moveTo(coordArr[4].x, coordArr[4].y);
  ctx.lineTo(coordArr[3].x, coordArr[3].y);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '5';
  ctx.moveTo(coordArr[3].x, coordArr[3].y);
  ctx.lineTo(coordArr[3].x, coordArr[3].y + 60);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[3].x, coordArr[3].y);
  ctx.lineTo(coordArr[2].x, coordArr[2].y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[2].x, coordArr[2].y);
  const final2X = coordArr[2].x + 70;
  const final2Y = coordArr[2].y + 40;
  ctx.lineTo(final2X, final2Y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(final2X - 10 / 2, final2Y + 10 / 2);
  ctx.lineTo(final2X + 10 / 2, final2Y - 10 / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[1].x, coordArr[1].y);
  ctx.lineTo(coordArr[2].x, centerY);
  ctx.stroke();

  ctx.setLineDash([1, 3]);
  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.lineWidth = '3';
  ctx.moveTo(coordArr[1].x, coordArr[1].y);
  const final1X = coordArr[1].x + 70;
  const final1Y = coordArr[1].y - 40;
  ctx.lineTo(final1X, final1Y);
  ctx.stroke();
  ctx.setLineDash([]);

  drawEmptyCorner(final1X, final1Y, 4);

  ctx.setLineDash([1, 3]);
  ctx.beginPath();
  ctx.strokeStyle = '#6a696b';
  ctx.lineWidth = '4';
  ctx.moveTo(coordArr[2].x, coordArr[2].y);
  ctx.lineTo(coordArr[2].x, centerY);
  ctx.stroke();
  ctx.setLineDash([]);

  coordArr.forEach(({ x, y }) => drawCorner(x, y, 8, '#2b2a2c'));

  // ctx.closePath();
  // ctx.stroke();
}

function drawQuarterCircle() {
  // 4
  ctx.setLineDash([3, 5]);
  ctx.lineDashOffset = 20;
  ctx.beginPath();
  ctx.lineWidth = '4';
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.arc(centerX, centerY, radius, toRadians(0), toRadians(90), false);
  ctx.stroke();
  ctx.setLineDash([]);

  // Third quarter
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.arc(centerX, centerY, radius, toRadians(240), toRadians(270), false);
  ctx.stroke();
  ctx.setLineDash([]);

  //

  ctx.beginPath();
  ctx.lineWidth = '3';
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.arc(centerX, centerY, radius, toRadians(200), toRadians(238), false);
  ctx.stroke();

  //
  ctx.setLineDash([3, 2]);
  ctx.lineDashOffset = 20;
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.strokeStyle = '#2b2a2cd6';
  ctx.arc(centerX, centerY, radius, toRadians(181), toRadians(199), false);
  ctx.stroke();
  ctx.setLineDash([]);

  // 1
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = '#2b2a2c';
  ctx.arc(centerX, centerY, radius, toRadians(270), toRadians(360), false);
  ctx.stroke();
  drawCorner(centerX, centerY - radius, 8, '#2b2a2c');
  drawPerpendicularLineAtCorner(centerX + radius, centerY, '#2b2a2c');

  // 2
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = '#2b2a2c';
  ctx.arc(centerX, centerY, radius, toRadians(90), toRadians(180), false);
  ctx.stroke();
  drawCorner(centerX, centerY + radius, 8, '#2b2a2c');
  drawPerpendicularLineAtCorner(centerX - radius, centerY, '#2b2a2c');
  drawHexagon();
}

drawQuarterCircle();
