import { downloadPDF } from "../utils/downLoadPDF.js";

export function downloadCV() {
  $(".download-btn").on("click", function () {
    const pdfPath = "./Shavlak_Maryna_Frontend_Developer_CV.pdf";
    downloadPDF(pdfPath, "Shavlak_Maryna_Frontend_Developer_CV.pdf");
  });
}
