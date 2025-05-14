import { downloadPDF } from "../utils/downLoadPDF.js";

export function getModifierValue(button) {
  console.log(button);
  const liElement = button.closest("li");
  const liClasses = liElement ? liElement.className : "";
  const modifierMatch = liClasses.match(/--([\w-]+)/);
  const modifierValue = modifierMatch ? modifierMatch[1] : "";
  return modifierValue;
}

export function handleDownloadCertificate(button) {
  const company = getModifierValue(button);

  let waitClass = "waiting",
    runClass = "running",
    cl = button.classList;

  if (!cl.contains(waitClass) && !cl.contains(runClass)) {
    const pdfPath = `./assets/docs/Maryna_Shavlak_certificate_${company}.pdf`;
    downloadPDF(pdfPath, `Maryna_Shavlak_certificate_${company}.pdf`);
    cl.add(waitClass);
    setTimeout(function () {
      cl.remove(waitClass);
      setTimeout(function () {
        cl.add(runClass);
        setTimeout(function () {
          cl.remove(runClass);
        }, 4000);
      }, 200);
    }, 1800);
  }
}
