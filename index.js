import { initHireModal } from "./js/hireModal.js";
import { initCVModal } from "./js/cvModal.js";
import {initBlog} from "./js/blog.js";
import {initReviewsSlider} from "./js/reviewSlider.js";
import {initPortfolio} from "./js/portfolio.js";

$(document).ready(function () {
  initPortfolio();
  initReviewsSlider();
  initBlog();
  initHireModal();
  initCVModal();
});
