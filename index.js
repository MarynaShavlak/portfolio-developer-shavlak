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
    // header and hero
    await insertPartial("#header", "../partials/header.html");
    await insertPartial("#main", "../partials/hero.html");
    initHeroSection();

    // about
    await insertPartial("#main", "../partials/about.html");
    // soft skills
    await insertPartial("#main", "../partials/softSkills.html");
    // contacts
    await insertPartial("#main", "../partials/contacts.html");
    initContactsSection();

    // tools
    await insertPartial("#main", "../partials/tools.html");
    initToolsSection();

    //education
    await insertPartial("#main", "../partials/education.html");
    initEducationSection();

    //work experience
    await insertPartial("#main", "../partials/workExperience.html");
    initWorkSection();

    //portfolio
    await insertPartial("#main", "../partials/portfolio.html");
    initPortfolio();

    // testimonials
    await insertPartial("#main", "../partials/reviews.html");
    initReviewsSlider();

    // blog
    await insertPartial("#main", "../partials/blog.html");
    initBlog();

    // footer
    await insertPartial("#footer", "../partials/footer.html");

    //hire modal
    await insertPartial("#hire-modal", "../partials/hireModal.html");
    initHireModal();

    //cv modal
    await insertPartial(".cv-modal", "../partials/cvModal.html");
    initCVModal();
  } catch (err) {
    console.error("Error loading one or more partials:", err);
  }
});
