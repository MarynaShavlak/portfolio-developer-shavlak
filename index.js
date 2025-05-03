import { initHireModal } from "./js/hireModal.js";

import {initBlog} from "./js/blog.js";
import {initReviewsSlider} from "./js/reviewSlider.js";
import {initPortfolio} from "./js/portfolio.js";
import {insertPartial} from "./js/partials-loader.js";
import {initCVModal} from "./js/cvModal.js";



$(document).ready(async function () {

  try {

    await insertPartial('#header', '../partials/header.html');
    await insertPartial('#main', '../partials/hero.html');
    await insertPartial('#main', '../partials/portfolio.html');
    await insertPartial('#main', '../partials/about.html');
    await insertPartial('#main', '../partials/workExperience.html');
    await insertPartial('#main', '../partials/reviews.html');
    await insertPartial('#main', '../partials/blog.html');
    await insertPartial('#footer', '../partials/footer.html');
    initPortfolio();
    initReviewsSlider();
    initBlog();
    initHireModal();
initCVModal();


  } catch (err) {
    console.error('Error loading one or more partials:', err);
  }
});
