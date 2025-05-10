import { drawFigure } from "./canvas/canvas.js";
import { downloadPDF } from "./utils/downLoadPDF.js";

export function initCVModal() {
  $('[data-modal="cv-modal"]').on("click", showCVModal);
  $(".close-modal-btn").on("click", hideCVModal);
  drawFigure();
  downloadCV();
}

function downloadCV() {
  $(".download-cv-btn").on("click", function () {
    const pdfPath = "./Lewis_Nathaniel__CV.pdf";
    downloadPDF(pdfPath, "Lewis_Nathaniel__CV.pdf");
  });
}

function showCVModal() {
  $(".modal-backdrop-cv").fadeIn("slow", function () {
    $("body").addClass("modal-open");
  });
}

function hideCVModal() {
  $(".modal-backdrop-cv").fadeOut("slow", function () {
    $("body").removeClass("modal-open");
  });
}
