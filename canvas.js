$(document).ready(function () {
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
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
  }
  function drawEmptyCircleDot(x, y, size, color = '#2b2a2cd6') {
    ctx.beginPath();
    ctx.lineWidth = '2';
    ctx.strokeStyle = color;
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
  function drawDottedComplexLine(modifier = 0) {
    const complexLine1Coords = {
      x1: centerX + radius + 50,
      y1: centerY - 80 - 2 * modifier,
      x2: centerX + radius + 120,
      y2: centerY - 110 - 2 * modifier,
    };
    const complexLine1CoordsFinal = {
      x1: complexLine1Coords.x2,
      y1: complexLine1Coords.y2,
      x2: complexLine1Coords.x2 + 700,
      y2: complexLine1Coords.y2,
    };

    drawLineWithDash(complexLine1Coords, [1, 3 + modifier], '#2b2a2cd6', 3);
    drawLineWithDash(
      complexLine1CoordsFinal,
      [1, 3 + modifier],
      '#2b2a2cd6',
      3,
    );
  }

  function drawComplexSolidLine() {
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
    drawSolidLine(complexLine1Coords, '#2b2a2cd6', 3);
    drawSolidLine(complexLine1CoordsFinal, '#2b2a2cd6', 3);
    drawSolidLine(complexLine1CoordsFinal2, '#2b2a2cd6', 3);
  }
  function drawLineFigure() {
    drawCircleDot(363, 465, 3, '#2b2a2cd6');
    drawSolidLine({ x1: 363, y1: 465, x2: 310, y2: 465 }, '#2b2a2cd6', 3);
    drawLineWithDash(
      { x1: 300, y1: 465, x2: 260, y2: 465 },
      [3, 4],
      '#2b2a2cd6',
      3,
    );
    drawLineWithDash(
      { x1: 255, y1: 465, x2: 210, y2: 495 },
      [3, 4],
      '#2b2a2cd6',
      3,
    );
    drawLineWithDash(
      { x1: 205, y1: 495, x2: 120, y2: 495 },
      [3, 4],
      '#2b2a2cd6',
      3,
    );
    drawLineWithDash(
      { x1: 115, y1: 495, x2: 110, y2: 495 },
      [2, 2],
      '#2b2a2cd6',
      15,
    );
    drawSolidLine({ x1: 108, y1: 495, x2: 0, y2: 495 }, '#2b2a2cd6', 3);
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
    console.log('coordArr: ', coordArr);
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
    drawSolidLine(coords8, '#2b2a2cd6', 5);
    drawLineWithDash(coords3, [3, 2], '#6a696b', 3);
    drawCircleDot(coords3.x2, coords3.y2, 4, '#2b2a2cd6');
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
    drawEmptyCircleDot(670, 650, 5, '#2b2a2cd6');
    drawEmptyCircleDot(630, 670, 5, '#2b2a2cd6');
    drawEmptyCircleDot(centerX + radius + 20, centerY + 30, 5, '#2b2a2cd6');
    drawComplexSolidLine();
    drawDottedComplexLine();
    drawDottedComplexLine(5);
    drawLineFigure();
    drawSectionLabels(coordArr);
    drawPerpendicularLineAtCorner(centerX + radius, centerY, '#2b2a2cd6');
    drawPerpendicularLineAtCorner(centerX - radius, centerY, '#2b2a2cd6');
    coordArr.forEach(({ x, y }) => drawCircleDot(x, y, 8, '#2b2a2c'));
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

  function drawInnerCircle() {
    const pi = Math.PI;
    ctx.beginPath();
    ctx.lineWidth = '15';
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.arc(centerX, centerY, 140, 0, 2 * pi, false);
    ctx.stroke();
  }

  function drawSectionLabels(coordArr) {
    ctx.beginPath();
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.lineWidth = '3';
    ctx.moveTo(50, 80);
    ctx.lineTo(coordArr[5].x - 50, 80);
    ctx.lineTo(coordArr[5].x - 50, 130);
    ctx.lineTo(50, 130);
    ctx.lineTo(70, 105);
    ctx.closePath();
    ctx.fillStyle = '#2b2a2cd6';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1050, 80);
    ctx.lineTo(coordArr[2].x + 50, 80);
    ctx.lineTo(coordArr[2].x + 50, 130);
    ctx.lineTo(1050, 130);
    ctx.lineTo(1030, 105);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    setElementParams(
      $('.block--education'),
      80,
      coordArr[2].x + 50,
      1050 - (coordArr[2].x + 50),
    );

    ctx.beginPath();
    ctx.moveTo(50, 670);
    ctx.lineTo(coordArr[5].x - 50, 670);
    ctx.lineTo(coordArr[5].x - 50, 720);
    ctx.lineTo(50, 720);
    ctx.lineTo(70, 685);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    setElementParams($('.block--experience'), 670, 50, coordArr[5].x - 50 - 50);

    ctx.beginPath();
    ctx.moveTo(1050, 670);
    ctx.lineTo(coordArr[2].x + 50, 670);
    ctx.lineTo(coordArr[2].x + 50, 720);
    ctx.lineTo(1050, 720);
    ctx.lineTo(1030, 685);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.lineWidth = '3';
    ctx.moveTo(coordArr[5].x + 30, 30);
    ctx.lineTo(coordArr[2].x - 30, 30);
    ctx.lineTo(coordArr[2].x - 50, 55);
    ctx.lineTo(coordArr[2].x - 30, 80);
    ctx.lineTo(coordArr[5].x + 30, 80);
    ctx.lineTo(coordArr[5].x + 50, 55);
    ctx.closePath();
    ctx.fillStyle = '#2b2a2cd6';
    ctx.fill();
    ctx.stroke();
    setElementParams(
      $('.block--about'),
      30,
      coordArr[5].x + 30,
      coordArr[2].x - 30 - (coordArr[5].x + 30),
    );

    ctx.beginPath();
    ctx.strokeStyle = '#2b2a2cd6';
    ctx.lineWidth = '3';
    ctx.moveTo(coordArr[5].x + 30, 770);
    ctx.lineTo(coordArr[2].x - 30, 770);
    ctx.lineTo(coordArr[2].x - 50, 795);
    ctx.lineTo(coordArr[2].x - 30, 820);
    ctx.lineTo(coordArr[5].x + 30, 820);
    ctx.lineTo(coordArr[5].x + 50, 795);
    ctx.closePath();
    ctx.fillStyle = '#2b2a2cd6';
    ctx.fill();
    ctx.stroke();
  }

  function setElementParams(el, top, left, width) {
    el.css({
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
    });
  }

  function drawFigure() {
    drawInnerCircle();
    drawQuarterCircle(0, 90, 5, [1, 7], 20);
    drawQuarterCircle(240, 270, 5, [5, 5], 0);
    drawQuarterCircle(90, 180, 5, [], 0);
    drawQuarterCircle(200, 238, 3, [], 0);
    drawQuarterCircle(181, 199, 2, [3, 2], 20);
    drawQuarterCircle(270, 360, 5, [], 0);
    drawElements();
  }

  drawFigure();
});
