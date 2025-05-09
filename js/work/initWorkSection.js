import { workData } from "../../data/workData.js";

export function initWorkSection() {
  const workWrapper = $(".work__wrapper");

  workData.forEach((item, index) => {
    const responsibilitiesList = generateResponsibilitiesMarkup(
      item.responsibilities,
    );

    let additionalClass;
    if (index === 0 || index === 3) {
      additionalClass = "delay-2s timeline__event--type2";
    } else if (index === 1) {
      additionalClass = "delay-1s timeline__event--type3";
    } else {
      additionalClass = "timeline__event--type1";
    }

    const markup = `
            <div class="timeline__event animated fadeInUp ${additionalClass}">
                <div class="timeline__event__icon">
                    <i class="fa-solid fa-business-time"></i>
                </div>
                <div class="timeline__event__date">
                    ${item.date}
                </div>
                <div class="timeline__event__content">
                    <p class="timeline__event__title">
                        ${item.title}
                    </p>
                    <p class="timeline__event__text">${item.company}</p>
                    <div class="timeline__event__description">
                     ${responsibilitiesList}  
                            
                        
                        <p class="timeline__event__results"><i class="fa-solid fa-trophy resp-item__prize"></i> <span>Achievement:</span>
                            ${item.achievement}
                        </p>
                    </div>
                </div>
            </div>
        `;
    workWrapper.append(markup);
  });
}

function generateResponsibilitiesMarkup(items) {
  const responsibilitiesItems = items
    .map(
      (resp) =>
        `<li class="timeline__event__resp-item"><i class="fa-solid fa-gear resp-item__icon"></i>${resp}</li>`,
    )
    .join("");
  return `
    <ul class="timeline__event__responsibilities">
                            ${responsibilitiesItems}
                        </ul>`;
}
