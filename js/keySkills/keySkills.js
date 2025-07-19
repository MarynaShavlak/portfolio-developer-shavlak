import { keySkillsData } from "../../data/keySkillsData.js";

export function initKeySkillsSection() {
  const skillsContainer = $(".keySkills__descr");

  if (skillsContainer.length) {
    const skillsMarkup = generateSkillsMarkup(keySkillsData);
    skillsContainer.append(skillsMarkup);
  }
}

function generateSkillsMarkup(skills) {
  const skillItems = skills
    .map((skill) => {
      const descriptionMarkup = Array.isArray(skill.description)
        ? skill.description
            .map(
              (item) =>
                `<li class="skill-item__description-point">${item}</li>`,
            )
            .join("")
        : `<p class="skill-item__description">${skill.description}</p>`;

      return `
        <div class="skill-item">
          <h3 class="skill-item__title">${skill.title}</h3>
          ${
            Array.isArray(skill.description)
              ? `<ul class="skill-item__description-list">${descriptionMarkup}</ul>`
              : descriptionMarkup
          }
         
        </div>
        
         
      `;
    })
    .join("");

  return `
    <div class="key-tech-skills-list">
      ${skillItems}
    </div>
  `;
}
