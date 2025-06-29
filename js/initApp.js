import { insertPartial } from "./utils/partials-loader.js";
import { initHeroSection } from "./hero/initHeroSection.js";
import { initSoftSkillsSection } from "./softSkills/initSoftSkillsSection.js";
import { initContactsSection } from "./contacts/contacts.js";
import { initToolsSection } from "./tools/initToolsSection.js";
import { initEducationSection } from "./education/education.js";
import { initWorkSection } from "./work/initWorkSection.js";
import { initPortfolio } from "./portfolio/portfolio.js";
import { initReviewsSlider } from "./testimonials/reviewSlider.js";
import { initBlog } from "./blog/blog.js";
import { initHireModal } from "./hireModal/hireModal.js";
import { initCVModal } from "./cvModal/cvModal.js";
import { initOnScroll } from "./utils/initOnScroll.js";
import { initMobileMenu } from "./mobileMenu/initMobileMenu.js";

// Configuration for partials and their initialization
const sections = [
  {
    selector: "#header",
    partial: "./partials/header.html",
  },
  {
    selector: "#main",
    partial: "./partials/mobileMenu.html",
    init: initMobileMenu,
  },
  {
    selector: "#main",
    partial: "./partials/hero.html",
    init: initHeroSection,
  },
  {
    selector: "#main",
    partial: "./partials/about.html",
  },
  {
    selector: "#main",
    partial: "./partials/softSkills.html",
    init: initSoftSkillsSection,
  },
  {
    selector: "#main",
    partial: "./partials/contacts.html",
    init: initContactsSection,
  },
  {
    selector: "#main",
    partial: "./partials/tools.html",
    init: initToolsSection,
    lazy: true,
    scrollSelector: "#tools",
  },
  {
    selector: "#main",
    partial: "./partials/education.html",
    init: initEducationSection,
    lazy: true,
    scrollSelector: "#education",
  },
  {
    selector: "#main",
    partial: "./partials/educationMobile.html",
    init: initEducationSection,
    lazy: true,
    scrollSelector: "#educationMobile",
    config: {
      canvasId: "roadCanvas--mobile",
      numberedPointsCanvasId: "numbersCanvas--mobile",
      tooltipsWrapperClass: ".education__tooltips__container--mobile",
      scale: 0.25,
      frameDuration: 16,
      pointsCount: 100,
    },
  },
  {
    selector: "#main",
    partial: "./partials/workExperience.html",
    init: initWorkSection,
  },
  {
    selector: "#main",
    partial: "./partials/portfolio.html",
    init: initPortfolio,
  },
  {
    selector: "#main",
    partial: "./partials/reviews.html",
    init: initReviewsSlider,
    lazy: true,
    scrollSelector: ".reviews.section__reviews",
  },
  {
    selector: "#main",
    partial: "./partials/blog.html",
    init: initBlog,
  },
  {
    selector: "#footer",
    partial: "./partials/footer.html",
  },
  {
    selector: "#hire-modal",
    partial: "./partials/hireModal.html",
    init: initHireModal,
  },
  {
    selector: ".cv-modal",
    partial: "./partials/cvModal.html",
    init: initCVModal,
  },
];

export async function initApp() {
  try {
    // Load all partials and initialize sections
    for (const section of sections) {
      await insertPartial(section.selector, section.partial);
      if (section.init && !section.lazy) {
        section.config ? section.init(section.config) : section.init();
      } else if (section.lazy && section.scrollSelector) {
        initOnScroll(section.scrollSelector, () =>
          section.config ? section.init(section.config) : section.init(),
        );
      }
    }
  } catch (err) {
    console.error("Error initializing app:", err);
  }
}
