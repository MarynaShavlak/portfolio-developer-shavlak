import { initApp } from "./js/initApp.js";
import { fadeInOnScroll } from "./js/animation/fadeInOnScroll.js";

$(document).ready(async function () {
  await initApp();
  fadeInOnScroll("section");
});
