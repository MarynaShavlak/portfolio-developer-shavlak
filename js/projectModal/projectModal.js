import { projectsData } from "../../data/projectsData.js";
import { generateProjectModalMarkup } from "./generateProjectModalMarkup.js";

export function initProjectModal() {
  $(".portfolio__item").on("click", handleProjectModal);
  $(".close-modal-btn").on("click", hideProjectModal);

  $(document).on("click", ".project-modal", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".modal-backdrop-project", function () {
    hideProjectModal();
  });
}

export function handleProjectModal(e) {
  const $clickedItem = $(e.currentTarget);
  const projectData = getProjectData($clickedItem);

  generateProjectModalMarkup(projectData);
  initProjectModalSlider();
  showProjectModal();
}

function getProjectData($el) {
  return projectsData.find((project) => project.id === $el.attr("data-id"));
}

function initProjectModalSlider() {
  const $slider = $(".project-slider");
  const $slides = $slider.children("img, video"); // Include both images and videos
  let currentIndex = 0;

  const updateSlider = () => {
    const offset = -currentIndex * 100 + "%";
    $slider.css("transform", `translateX(${offset})`);
  };

  $(".project-next-btn")
    .off("click")
    .on("click", () => {
      currentIndex = (currentIndex + 1) % $slides.length;
      updateSlider();
    });

  $(".project-prev-btn")
    .off("click")
    .on("click", () => {
      currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
      updateSlider();
    });
}

function showProjectModal() {
  $(".modal-backdrop-project").fadeIn("slow", () => {
    $("body").addClass("modal-open");
  });
}

function hideProjectModal() {
  $(".modal-backdrop-project").fadeOut("slow", () => {
    $("body").removeClass("modal-open");
  });
}
