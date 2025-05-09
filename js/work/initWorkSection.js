import { workData } from "../../data/workData.js";

export function initWorkSection() {
  const workWrapper = $(".work__wrapper");

  workData.forEach((item) => {
    const responsibilitiesList = item.responsibilities
      .map(
        (resp) =>
          `<li class="timeline__event__resp-item"><i class="fa-solid fa-gear resp-item__icon"></i>${resp}</li>`,
      )
      .join("");
    const markup = `
            <div class="timeline__event animated fadeInUp">
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
                        <ul class="timeline__event__responsibilities">
                            ${responsibilitiesList}
                        </ul>
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
