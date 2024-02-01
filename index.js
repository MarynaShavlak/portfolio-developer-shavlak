$(document).ready(function () {
  $('.portfolio-list').isotope({
    itemSelector: '.portfolio__item',
    layoutMode: 'fitRows',
  });
  // setPortfolioFilter();

  // function updateFilterButtons(filters, chosenFilterBtn) {
  //   filters.removeClass('filter-btn--active');
  //   $(chosenFilterBtn).addClass('filter-btn--active');
  // }

  // function showFullPortfolio() {
  //   $('[data-category]').slideDown();
  // }

  // function showChosenCategoryWorks(chosenfilterCategory) {
  //   $('[data-category]').each(function () {
  //     const itemCategory = $(this).data('category');
  //     if (chosenfilterCategory !== itemCategory) {
  //       $(this).slideUp(300);
  //     } else {
  //       $(this).slideDown();
  //     }
  //   });
  // }

  function setPortfolioFilter() {
    let chosenfilterCategory = 'all';
    const filters = $('[data-filter]');
    filters.on('click', function () {
      updateFilterButtons(filters, this);

      chosenfilterCategory = $(this).data('filter');
      if (chosenfilterCategory === 'all') {
        showFullPortfolio();
      } else {
        showChosenCategoryWorks(chosenfilterCategory);
      }
    });
  }
});
