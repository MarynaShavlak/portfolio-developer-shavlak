import { projectsData } from "../../data/projectsData.js";
import { countCategoryOccurrences } from "../utils/countCategoryOccurrences.js";

export const generatePortfolioFilters = () => {
  const categories = countCategoryOccurrences(
    projectsData.map((item) => item.categories),
  );
  const totalProjects = projectsData.length;

  const filters = [
    { label: "All", filter: "*" },
    { label: "React", filter: ".react" },
    { label: "JavaScript", filter: ".javascript" },
    { label: "Typescript", filter: ".typescript" },
    { label: "jQuery", filter: ".jquery" },
    { label: "Redux Toolkit", filter: ".reduxToolkit" },
    { label: "Redux Persist", filter: ".reduxPersist" },
    { label: "Zustand", filter: ".zustand" },
    { label: "HTML", filter: ".html" },
    { label: "CSS", filter: ".css" },
    { label: "SAAS/SCSS", filter: ".saas" },
    { label: "Tailwind CSS", filter: ".tailwind" },
    { label: "Canvas", filter: ".canvas" },
    { label: "AST tree", filter: ".ast" },
    { label: "ESlint Plugin", filter: ".eslintPlugin" },
    { label: "Gulp", filter: ".gulp" },
    { label: "Webpack", filter: ".webpack" },
    { label: "Vite", filter: ".vite" },
    { label: "Parcel", filter: ".parcel" },
    { label: "Firebase", filter: ".firebase" },
    { label: "Web Games", filter: ".webGames" },
  ];

  const $portfolioFilter = $(".portfolio__filter");
  $.each(filters, function (index, item) {
    const categoryKey = item.filter.startsWith(".")
      ? item.filter.slice(1)
      : "all";

    const count =
      item.filter === "*" ? totalProjects : categories[categoryKey] || 0;
    const $li = $("<li>")
      .addClass("filter-btn")
      .attr("data-filter", item.filter)
      .text(`${item.label} (${count})`);

    if (index === 0) {
      $li.addClass("filter-btn--active");
    }

    $portfolioFilter.append($li);
  });
};
