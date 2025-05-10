import { educationData } from "../../data/educationData.js";
import { downloadCloudButton } from "../../markup/downloadCloudButton.js";
import { getImageName } from "../utils/getImageName.js";

export function renderEducationSection() {
  educationData.forEach((data) => {
    const educationItem = createEducationItem(data);
    $(".education__tooltips__container").append(educationItem);
  });
}

// Create a single education item element
function createEducationItem(data) {
  const orgName = getImageName(data.icon)?.toLowerCase();
  const educationItem = $("<li>").addClass(
    `education-item ${orgName ? `education-item--${orgName}` : ""}`,
  );

  const icon = $("<div>").addClass("education-icon").html(`${data.icon}`);
  const rightPart = $("<div>")
    .addClass("education__details")
    .append(`<p class="education__organization">${data.organization}</p>`)
    .append(`<p class="education__period">${data.period}</p>`)
    .append(`<p class="education__speciality">${data.speciality}</p>`);

  if (data.certificate) {
    const certificateWrapper = $("<div>").addClass(
      "education__certificateWrapper",
    );
    const certificateBtn = downloadCloudButton + "<span>See Certificate</span>";
    certificateWrapper.append(certificateBtn);
    educationItem.append(icon, certificateWrapper, rightPart);
  } else {
    educationItem.append(icon, rightPart);
  }
  return educationItem;
}
