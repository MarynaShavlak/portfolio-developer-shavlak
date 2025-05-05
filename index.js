import { initHireModal } from "./js/hireModal.js";

import {initBlog} from "./js/blog.js";
import {initReviewsSlider} from "./js/reviewSlider.js";
import {initPortfolio} from "./js/portfolio.js";
import {insertPartial} from "./js/partials-loader.js";
import {initCVModal} from "./js/cvModal.js";
import {initEducationSection} from "./js/education/education.js";
import {initToolsSection} from "./js/tools/initToolsSection.js";



$(document).ready(async function () {

  try {

    await insertPartial('#header', '../partials/header.html');
    await insertPartial('#main', '../partials/hero.html');
    await insertPartial('#main', '../partials/tools.html');
    await insertPartial('#main', '../partials/education.html');
    await insertPartial('#main', '../partials/workExperience.html');
    await insertPartial('#main', '../partials/portfolio.html');
    await insertPartial('#main', '../partials/about.html');

    await insertPartial('#main', '../partials/reviews.html');
    await insertPartial('#main', '../partials/blog.html');
    await insertPartial('#footer', '../partials/footer.html');
    initPortfolio();
    initToolsSection();
    initReviewsSlider();
    initBlog();
    initHireModal();
    initEducationSection();
    initCVModal();


  } catch (err) {
    console.error('Error loading one or more partials:', err);
  }
});
