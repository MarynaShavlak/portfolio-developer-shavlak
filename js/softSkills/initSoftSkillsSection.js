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

function initSoftSkillsHover() {
  $(".softSkills__item").hover(
    function () {
      const classes = $(this).attr("class").split(" ");
      const skillClass = classes.find((cls) =>
        cls.startsWith("softSkills__item--"),
      );
      if (skillClass) {
        const skillName = skillClass.replace("softSkills__item--", "");
        $(".softSkills__showcases").removeClass("visible");
        $(`.softSkills__showcases--${skillName}`).addClass("visible");
      }
    },
    function () {
      $(".softSkills__showcases").removeClass("visible");
    },
  );
}

export function initSoftSkillsSection() {
  softSkillsShowcases.forEach((item) => {
    generateSoftSkillsMarkup(item);
    initSoftSkillsHover();
  });
}
