import { initHireModal } from "./js/hireModal.js";
import { initCVModal } from "./js/cvModal.js";
import {initBlog} from "./js/blog.js";
import {initReviewsSlider} from "./js/reviewSlider.js";
import {initPortfolio} from "./js/portfolio.js";
import {loadPartial} from "./js/partials-loader.js";

$(document).ready(function () {
  loadPartial('header', '../partials/header.html');
  initPortfolio();
  initReviewsSlider();
  initBlog();
  initHireModal();
  initCVModal();
});
