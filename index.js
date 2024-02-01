$(document).ready(function () {
  setPortfolioFilter();

  function updateFilterButtons(chosenFilterBtn) {
    const filters = $('[data-filter]');
    filters.removeClass('filter-btn--active');
    $(chosenFilterBtn).addClass('filter-btn--active');
  }

  function setPortfolioFilter() {
    let $portfolio = $('.portfolio-list').isotope({
      itemSelector: '.portfolio__item',
      percentPosition: true,
      masonry: {
        columnWidth: 370,
        gutter: 30,
      },
    });

    $('.filter-btn').on('click', function () {
      updateFilterButtons(this);
      const filterValue = $(this).attr('data-filter');
      $portfolio.isotope({ filter: filterValue });
    });
  }
});
