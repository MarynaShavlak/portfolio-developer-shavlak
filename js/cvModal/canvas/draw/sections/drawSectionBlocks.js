import { ctx } from "../../config/canvasConfig.js";

export function drawSectionBlocks(coordArr) {
  setElementParams(
    $(".block--education"),
    40,
    coordArr[2].x - 35,
    1050 - coordArr[2].x - 15,
  );
  setElementParams($(".block--experience"), 480, 25, coordArr[5].x - 50 - 50);
  setElementParams($(".block--software"), 60, 25, coordArr[5].x - 50 - 50);
  setElementParams(
    $(".block--expertise"),
    480, //670
    coordArr[2].x + -15, //+ 50
    1050 - (coordArr[2].x + 50),
  );
  setElementParams(
    $(".block--about"),
    15,
    coordArr[5].x - 20,
    coordArr[2].x - 30 - (coordArr[5].x + 30),
  );
  setElementParams(
    $(".block--languages"),
    510, //770
    coordArr[5].x - 20, // +30
    coordArr[2].x - 30 - (coordArr[5].x + 30),
  );
}

function setElementParams(el, top, left, width) {
  el.css({
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
  });
}

export function drawSectionLabels(coordArr) {
  ctx.beginPath(); //software
  ctx.strokeStyle = "#FF5BA7";
  ctx.lineWidth = "3";
  ctx.moveTo(50, 210);
  ctx.lineTo(coordArr[5].x - 50, 210);
  ctx.lineTo(coordArr[5].x - 50, 260);
  ctx.lineTo(50, 260);
  ctx.lineTo(70, 235);
  ctx.closePath();
  ctx.fillStyle = "#FF5BA7";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //education
  ctx.moveTo(1050, 190);
  ctx.lineTo(coordArr[2].x + 35, 190);
  ctx.lineTo(coordArr[2].x + 35, 240);
  ctx.lineTo(1050, 240);
  ctx.lineTo(1030, 215);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //experience
  ctx.moveTo(50, 670);
  ctx.lineTo(coordArr[5].x - 50, 670);
  ctx.lineTo(coordArr[5].x - 50, 720);
  ctx.lineTo(50, 720);
  ctx.lineTo(70, 685);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //expertise
  ctx.moveTo(1050, 670);
  ctx.lineTo(coordArr[2].x + 35, 670);
  ctx.lineTo(coordArr[2].x + 35, 720);
  ctx.lineTo(1050, 720);
  ctx.lineTo(1030, 685);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //about me
  ctx.strokeStyle = "#FF5BA7";
  ctx.lineWidth = "3";
  ctx.moveTo(coordArr[5].x + 30, 160); // 30
  ctx.lineTo(coordArr[2].x - 30, 160); // 30
  ctx.lineTo(coordArr[2].x - 50, 185); //55
  ctx.lineTo(coordArr[2].x - 30, 210); //80
  ctx.lineTo(coordArr[5].x + 30, 210); //80
  ctx.lineTo(coordArr[5].x + 50, 185); //55
  ctx.closePath();
  ctx.fillStyle = "#FF5BA7";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); // languages
  ctx.strokeStyle = "#FF5BA7";
  ctx.lineWidth = "3";
  ctx.moveTo(coordArr[5].x + 30, 710);
  ctx.lineTo(coordArr[2].x - 30, 710);
  ctx.lineTo(coordArr[2].x - 50, 735);
  ctx.lineTo(coordArr[2].x - 30, 760);
  ctx.lineTo(coordArr[5].x + 30, 760);
  ctx.lineTo(coordArr[5].x + 50, 735);
  ctx.closePath();
  ctx.fillStyle = "#FF5BA7";
  ctx.fill();
  ctx.stroke();
}
