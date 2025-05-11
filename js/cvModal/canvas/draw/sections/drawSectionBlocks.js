import { ctx } from "../../config/canvasConfig.js";

export function drawSectionBlocks(coordArr) {
  setElementParams(
    $(".block--education"),
    40,
    coordArr[2].x - 35,
    1050 - coordArr[2].x - 15,
  );
  setElementParams($(".block--techSkills"), 470, 25, coordArr[5].x - 50 - 50);
  setElementParams($(".block--experience"), 40, 25, coordArr[5].x - 50 - 50);
  setElementParams(
    $(".block--softSkills"),
    460, //670
    coordArr[2].x - 35, //+ 50
    1050 - coordArr[2].x - 15,
  );
  setElementParams(
    $(".block--about"),
    5,
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
  ctx.beginPath(); //experience
  ctx.strokeStyle = "#FF5BA7";
  ctx.lineWidth = "3";
  ctx.moveTo(50, 190);
  ctx.lineTo(coordArr[5].x - 50, 190);
  ctx.lineTo(coordArr[5].x - 50, 240);
  ctx.lineTo(50, 240);
  ctx.lineTo(70, 215);
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

  ctx.beginPath(); //techSkills
  ctx.moveTo(50, 660);
  ctx.lineTo(coordArr[5].x - 50, 660);
  ctx.lineTo(coordArr[5].x - 50, 710);
  ctx.lineTo(50, 710);
  ctx.lineTo(70, 675);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //softSkills
  ctx.moveTo(1050, 650);
  ctx.lineTo(coordArr[2].x + 35, 650);
  ctx.lineTo(coordArr[2].x + 35, 700);
  ctx.lineTo(1050, 700);
  ctx.lineTo(1030, 665);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); //about me
  ctx.strokeStyle = "#FF5BA7";
  ctx.lineWidth = "3";
  ctx.moveTo(coordArr[5].x + 30, 150); // 30
  ctx.lineTo(coordArr[2].x - 30, 150); // 30
  ctx.lineTo(coordArr[2].x - 50, 175); //55
  ctx.lineTo(coordArr[2].x - 30, 200); //80
  ctx.lineTo(coordArr[5].x + 30, 200); //80
  ctx.lineTo(coordArr[5].x + 50, 175); //55
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
