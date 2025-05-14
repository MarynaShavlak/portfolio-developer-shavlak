import {
  handleProjectModal,
  initProjectModal,
} from "../projectModal/projectModal.js";
import { projectsData } from "../../data/projectsData.js";

export function initPortfolio() {
  const itemsPerPage = 6;
  let currentIndex = 0;
  let currentCategory = "*";

  const $portfolioList = $("#portfolio");

  initProjectModal();
  initIsotope();

  renderFilteredItems();

  $(".filter-btn").on("click", function () {
    updateFilterButtons(this);
    currentCategory = $(this).attr("data-filter").replace(".", "") || "*";
    currentIndex = 0;
    renderFilteredItems();
  });

  $(".load-more-btn").on("click", function () {
    currentIndex += itemsPerPage;
    renderFilteredItems();
  });

  $(".show-less-btn").on("click", function () {
    currentIndex = Math.max(currentIndex - itemsPerPage, 0);
    renderFilteredItems();
  });

  function initIsotope() {
    $portfolioList.isotope({
      itemSelector: ".portfolio__item",
      layoutMode: "masonry",
      percentPosition: true,
      masonry: {
        columnWidth: 370,
        gutter: 30,
      },
    });
  }

  function renderFilteredItems() {
    const filtered =
      currentCategory === "*"
        ? projectsData
        : projectsData.filter((p) => p.categories.includes(currentCategory));

    const paginated = filtered.slice(0, currentIndex + itemsPerPage);
    const markup = generatePortfolioMarkUp(paginated);

    // Clear and re-render
    $portfolioList
      .isotope("remove", $portfolioList.children())
      .isotope("layout");

    const $newItems = $(markup);
    $portfolioList.append($newItems).isotope("appended", $newItems);

    imagesLoaded($portfolioList, () => {
      $portfolioList.isotope("layout");
    });

    // Modal re-bind
    $(".portfolio__item")
      .off("click", handleProjectModal)
      .on("click", handleProjectModal);

    // Toggle buttons
    $(".load-more-btn").toggle(currentIndex + itemsPerPage < filtered.length);
    $(".show-less-btn").toggle(currentIndex > 0);
  }

  function updateFilterButtons(chosen) {
    $(".filter-btn").removeClass("filter-btn--active");
    $(chosen).addClass("filter-btn--active");
  }
}

// Shared function to return markup string for given data
function generatePortfolioMarkUp(data) {
  return data
    .map((project, index) => {
      const categories = project.categories.join(" ");
      const overview = project.descr.join(" ").slice(0, 117) + "...";
      return `
        <li class="portfolio__item ${categories}" data-category="${categories}" data-id="${project.id}">
            <div class="work" data-modal="#modal_project_${index + 1}">
                <div class="work__image">
                    <img src="assets/images/projects/${project.id}/${project.poster}" alt="${project.title}" width="370" height="300"/>
                </div>
                <div class="work__info">
                    <p class="work__title">${project.title}<span class="work__date">${project.date}</span></p>
                    <p class="work__category"><span class="work__subtext">category: </span> ${project.categories.join(", ")}</p>
                    <p class="work__type"><span class="work__subtext">type: </span>${project.type}</p>
                    <p class="work__short-overview">${overview}</p>
                    <button type="button" class="explore-project-btn star-btn">
                    <div class="star-1">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-2">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-3">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-4">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-5">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-6">
                        <img src="./assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    Explore Project
                    
                    </button>
                </div>
            </div>
        </li>`;
    })
    .join("");
}
