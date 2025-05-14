export function fadeInOnScroll(selector) {
  const $elements = $(selector);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass("visible");
          observer.unobserve(entry.target); // Stop observing after fade-in
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
    },
  );

  $elements.each(function () {
    observer.observe(this);
  });
}
