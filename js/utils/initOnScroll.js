export function initOnScroll(selector, initFunction) {
  let isInitialized = false;
  $(window).on("scroll", function () {
    const $section = $(selector);
    if ($section.length && !isInitialized) {
      const sectionTop = $section.offset().top;
      const sectionBottom = sectionTop + $section.outerHeight();
      const windowTop = $(window).scrollTop();
      const windowBottom = windowTop + $(window).height();

      if (windowBottom >= sectionTop && windowTop <= sectionBottom) {
        initFunction();
        isInitialized = true;
      }
    }
  });
}
