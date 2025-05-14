import { softSkillsShowcases } from "../../data/softSkills.js";

export function generateSoftSkillsMarkup(data) {
  // Create the main container
  const newClass = data.title.split(" ")[0].toLowerCase();
  const $container = $("<div>").addClass(
    `softSkills__showcases softSkills__showcases--${newClass}`,
  );

  const $title = $("<p>")
    .addClass("softSkills__showcases__title")
    .text(data.title);
  $container.append($title);

  const $list = $("<ul>").addClass("showcase__list");

  data.items.forEach((item) => {
    const $item = $("<li>").addClass("showcase__list__item").html(item);
    $list.append($item);
  });

  $container.append($list);

  $(".softSkills__description").append($container);
}

export function initSoftSkillsSection() {
  softSkillsShowcases.forEach((item) => {
    generateSoftSkillsMarkup(item);
  });
}
