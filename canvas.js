const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 190;

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function drawCircleDot(x, y, size, color) {
  ctx.beginPath();
  ctx.strokeStyle = '#2b2a2c';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}
function drawEmptyCircleDot(x, y, size) {
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
function drawSolidLine(coords, color, width) {
  const { x1, y1, x2, y2 } = coords;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function calculateHexagonCornersCoords() {
  const coordArr = [];
  for (let i = 0; i < 6; i++) {
    const angle = toRadians(60 * i - 90);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    coordArr.push({ x, y });
  }
  return coordArr;
}

function drawElements() {
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
    y2: coordArr[3].y + 60,
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
  drawLineWithDash(coords1, [2, 2], '#6a696b', 2);
  drawLineWithDash(coords2, [2, 2], '#2b2a2cd6', 3);
  drawSolidLine(coords8, '#2b2a2c', 5);
  drawLineWithDash(coords3, [3, 2], '#6a696b', 3);
  drawCircleDot(coords3.x2, coords3.y2, 4, '#2b2a2c');
  drawSolidLine(coords9, '#2b2a2cd6', 3);
  drawSolidLine(coords10, '#2b2a2cd6', 3);
  drawEmptyCircleDot(coords10.x2 + 35, coords10.y2 - 20, 4);
  drawEmptyCircleDot(coords10.x2, coords10.y2, 4);
  drawLineWithDash(coords4, [3, 2], '#6a696b', 2);
  drawLineWithDash(coords5, [2, 2], '#2b2a2cd6', 5);
  drawSolidLine(coords11, '#2b2a2cd6', 3);
  drawSolidLine(coords12, '#2b2a2cd6', 3);
  drawSolidLine(coords13, '#2b2a2cd6', 3);
  drawSolidLine(coords14, '#2b2a2cd6', 3);
  drawLineWithDash(coords6, [1, 3], '#2b2a2cd6', 3);
  drawEmptyCircleDot(coords6.x2, coords6.y2, 4);
  drawLineWithDash(coords7, [1, 3], '#6a696b', 4);

  coordArr.forEach(({ x, y }) => drawCircleDot(x, y, 8, '#2b2a2c'));
  drawCircleDot(centerX, centerY - radius, 8, '#2b2a2c');
  drawCircleDot(centerX, centerY + radius, 8, '#2b2a2c');
  drawPerpendicularLineAtCorner(centerX + radius, centerY, '#2b2a2c');
  drawPerpendicularLineAtCorner(centerX - radius, centerY, '#2b2a2c');
}

function drawQuarterCircle(
  startAngle,
  endAngle,
  lineWidth,
  dashArray,
  dashOffset,
) {
  ctx.setLineDash(dashArray);
  ctx.lineDashOffset = dashOffset;
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  if (dashArray.length) {
    ctx.strokeStyle = '#2b2a2cd6';
  } else {
    ctx.strokeStyle = '#2b2a2c';
  }

  ctx.arc(
    centerX,
    centerY,
    radius,
    toRadians(startAngle),
    toRadians(endAngle),
    false,
  );
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawFigure() {
  drawQuarterCircle(0, 90, 5, [3, 5], 20);
  drawQuarterCircle(240, 270, 5, [5, 5], 0);
  drawQuarterCircle(90, 180, 5, [], 0);
  drawQuarterCircle(200, 238, 3, [], 0);
  drawQuarterCircle(181, 199, 2, [3, 2], 20);
  drawQuarterCircle(270, 360, 5, [], 0);
  drawElements();
}

drawFigure();
