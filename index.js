$(document).ready(function () {
  setPortfolioFilter();
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
      const filterValue = $(this).attr('data-filter');
      $portfolio.isotope({ filter: filterValue });
    });
  }
});
