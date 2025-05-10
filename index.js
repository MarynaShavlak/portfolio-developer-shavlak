import { initEducationSection } from "./js/education/education.js";
import { initToolsSection } from "./js/tools/initToolsSection.js";
import { initHeroSection } from "./js/hero/initHeroSection.js";
import { initHireModal } from "./js/hireModal/hireModal.js";
import { initContactsSection } from "./js/contacts/contacts.js";
import { initWorkSection } from "./js/work/initWorkSection.js";
import { insertPartial } from "./js/utils/partials-loader.js";
import { initPortfolio } from "./js/portfolio/portfolio.js";
import { initReviewsSlider } from "./js/testimonials/reviewSlider.js";
import { initBlog } from "./js/blog/blog.js";
import { initCVModal } from "./js/cvModal/cvModal.js";

$(document).ready(async function () {
  try {
    await insertPartial("#header", "../partials/header.html");
    await insertPartial("#main", "../partials/hero.html");
    await insertPartial("#main", "../partials/about.html");
    await insertPartial("#main", "../partials/contacts.html");
    await insertPartial("#main", "../partials/tools.html");
    await insertPartial("#main", "../partials/education.html");
    await insertPartial("#main", "../partials/workExperience.html");
    await insertPartial("#main", "../partials/portfolio.html");
    await insertPartial("#main", "../partials/reviews.html");
    await insertPartial("#main", "../partials/blog.html");
    await insertPartial("#footer", "../partials/footer.html");
    await insertPartial("#hire-modal", "../partials/hireModal.html");
    initHeroSection();
    initPortfolio();
    initToolsSection();
    initReviewsSlider();
    initBlog();
    initHireModal();
    initEducationSection();
    initWorkSection();
    initContactsSection();
    initCVModal();
  } catch (err) {
    console.error("Error loading one or more partials:", err);
  }
});
