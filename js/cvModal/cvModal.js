import { downloadPDF } from "../utils/downLoadPDF.js";
import { drawFigure } from "./canvas/canvas.js";

export function initCVModal() {
  $('[data-modal="cv-modal"]').on("click", showCVModal);
  $(".close-modal-btn").on("click", hideCVModal);
  drawFigure();
  downloadCV();
}

function downloadCV() {
  $(".download-cv-btn").on("click", function () {
    const pdfPath = "./Shavlak_Maryna_Frontend_Developer__CV.pdf";
    downloadPDF(pdfPath, "Shavlak_Maryna_Frontend_Developer__CV.pdf");
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
