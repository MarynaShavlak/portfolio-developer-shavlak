import { handleDownloadCertificate } from "./handleDownloadCertificate.js";

export function setupEventListeners() {
  document.querySelectorAll(".downloadCloudBtnIcon").forEach((button) => {
    button.addEventListener("click", function () {
      handleDownloadCertificate(this);
    });
  });
}
