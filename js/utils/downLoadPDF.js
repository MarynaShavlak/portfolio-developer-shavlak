export function downloadPDF(pdfPath, fileName) {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
