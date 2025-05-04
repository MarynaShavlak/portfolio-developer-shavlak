import {educationData} from "../../data/educationData.js";

export function renderEducationSection() {
    educationData.forEach(data => {
        const educationItem = createEducationItem(data);
        $('.education__tooltips__container').append(educationItem);
    });
}

// Create a single education item element
function createEducationItem(data) {
    const educationItem = $('<li>').addClass('education-item');

    const icon = $('<div>').addClass('education-icon').html(`${data.icon}`);
    const rightPart = $('<div>').addClass('education__details')
        .append(`<p class="education__organization">${data.organization}</p>`)
        .append(`<p class="education__period">${data.period}</p>`)
        .append(`<p class="education__speciality">${data.speciality}</p>`);

    educationItem.append(icon).append(rightPart);
    return educationItem;
}
