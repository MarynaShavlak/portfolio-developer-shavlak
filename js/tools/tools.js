import { toolsData } from "../../data/libs.js";

export function renderToolsSection() {
  toolsData.forEach((data) => {
    const toolsItem = createToolItem(data);
    $(".tools__container").append(toolsItem);
  });

  const appearanceOrder = [
    1, 5, 20, 6, 3, 9, 11, 13, 23, 15, 17, 19, 14, 22, 16, 18, 12, 21, 10, 2, 4,
    7, 8, 24, 25, 26, 27, 28,
  ];

  $(".tools__item").each(function (index) {
    const orderIndex = appearanceOrder[index] - 1;
    const delay = orderIndex * 0.1;
    $(this).css("--delay", `${delay}s`);
  });

  $(".tools__container").masonry({
    itemSelector: ".tools__item",
    columnWidth: 220,
    gutter: 10,
  });
}

function createToolItem(data) {
  const modifierClass = data.title.split(" ")[0].toLowerCase();
  const toolsItem = $("<div>").addClass(
    `tools__item tools__item--${modifierClass}`,
  );
  const toolsItemContent = $("<div>").addClass("tools__item__content");

  const title = $("<div>").addClass("tools__title").text(data.title);
  const itemList = $("<ul>").addClass("tools__list");

  data.items.forEach((item) => {
    const itemLink = $("<a>")
      .attr("href", item.link)
      .attr("target", "_blank")
      .addClass("tools__list-link")
      .text(item.name);
    const listItem = $("<li>").addClass("tools__list-item").append(itemLink);
    itemList.append(listItem);
  });

  const toolsItemOverlay = $("<div>").addClass("tools__item__overlay");
  for (let i = 1; i <= data.items.length; i++) {
    const icon = $("<div>").addClass(`floating-icon icon-${i}`);
    toolsItemOverlay.append(icon);
  }

  toolsItemOverlay.prepend(title);
  toolsItemContent.append(itemList);
  toolsItem.append(toolsItemContent, toolsItemOverlay);

  return toolsItem;
}
