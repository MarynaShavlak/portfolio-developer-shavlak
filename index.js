const reviewsData = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum.',
    // author: 'Edward M. Brooks',
    author: '1',
    company: 'Marketing House',
    rating: 4,
  },
  {
    text: 'Vestibulum auctor mi sit amet mauris ultrices, vel tincidunt purus vulputate. Duis vitae leo a justo condimentum imperdiet vel in sapien. In hac habitasse platea dictumst. Nulla facilisi. Aliquam erat volutpat.',
    // author: 'Alice R. Johnson',
    author: '2',
    company: 'Tech Innovations',
    rating: 3,
  },
  {
    text: 'Suspendisse potenti. Cras eget nisi vel elit scelerisque posuere. Curabitur sit amet augue non nunc viverra scelerisque. Integer ullamcorper cursus lacus vel consequat. Sed eu orci auctor, malesuada odio ut, malesuada libero.',
    // author: 'David K. Anderson',
    author: '3',
    company: 'Data Systems Inc.',
    rating: 5,
  },
  {
    text: 'Phasellus vel quam vel est accumsan cursus. In hac habitasse platea dictumst. Suspendisse ut justo a urna facilisis scelerisque nec non neque. Nulla facilisi. Sed tincidunt risus nec purus euismod, at volutpat odio vulputate.',
    // author: 'Emily L. Rodriguez',
    author: '4',
    company: 'Digital Dynamics',
    rating: 4,
  },
  {
    text: 'Quisque at velit ut justo imperdiet varius in eu orci. Nulla facilisi. Sed fringilla nunc eu arcu facilisis, vitae placerat nisl efficitur. Sed vel sapien quis justo ullamcorper vehicula. Morbi euismod dapibus justo, nec fermentum justo mattis ut.',
    // author: 'George W. Thompson',
    author: '5',
    company: 'Innovate Tech',
    rating: 4,
  },
  {
    text: 'Integer vel urna eu ex feugiat euismod. Fusce vestibulum risus vel metus laoreet, vel eleifend purus suscipit. Maecenas aliquam metus eu metus luctus, in interdum justo auctor. Sed vel leo nec arcu vestibulum luctus nec eu ante.',
    // author: 'Olivia P. Lewis',
    author: '6',
    company: 'Tech Trends',
    rating: 5,
  },
  {
    text: 'Cras in tortor vel quam dictum pharetra. Ut sit amet purus non mauris cursus dapibus. Sed a orci vitae enim fermentum fermentum. Vestibulum vel sapien vel arcu elementum tincidunt. Vivamus tincidunt est eget odio ultricies, eu convallis felis dictum.',
    // author: 'Michael E. Turner',
    author: '7',
    company: 'Digital Solutions Co.',
    rating: 3,
  },
  {
    text: 'Duis id enim id elit malesuada suscipit eu eu lacus. Aenean at nisl vel mi dictum efficitur. Vestibulum a ligula vel sapien consectetur facilisis. Nam lacinia justo sit amet venenatis sodales. Etiam sed elit quis dolor tristique sodales.',
    // author: 'Sophia J. White',
    author: '8',
    company: 'InnoTech Innovations',
    rating: 4,
  },
  {
    text: 'Aliquam vel metus vel tellus scelerisque euismod a ac arcu. Duis tincidunt velit non nibh fermentum, vel bibendum nulla tristique. Integer cursus, odio a commodo tempus, quam dui bibendum purus, sit amet lacinia elit ex eu elit.',
    // author: 'William M. Taylor',
    author: '9',
    company: 'Data Innovations',
    rating: 4,
  },
  {
    text: 'Maecenas sit amet augue id urna feugiat iaculis vitae at erat. Sed luctus leo at congue pharetra. Proin nec felis tincidunt, placerat velit vel, auctor nisl. Nam nec est vitae justo accumsan hendrerit sit amet in lacus.',
    // author: 'Emma R. Harris',
    author: '10',
    company: 'Tech Solutions Plus',
    rating: 5,
  },
];

$(document).ready(function () {
  setPortfolioFilter();
  generateReviewsMarkup(reviewsData);
  setReviewsSlider();

  function generateReviewItem(index, review) {
    const $reviewItem = $('<li>').addClass('reviews__item');
    if (index === 0) {
      $reviewItem.addClass('reviews__item--active');
    }
    const $reviewsDescr = generateReviewDescription(review.text);
    const $reviewsAuthor = generateReviewAuthor(review.author, review.company);
    const $reviewsRating = $('<ul>').addClass('reviews__rating');
    generateRatingStarList($reviewsRating, review.rating);
    $reviewItem.append($reviewsDescr, $reviewsAuthor.append($reviewsRating));
    return $reviewItem;
  }
  function generateReviewDescription(text) {
    const $reviewsDescr = $('<div>').addClass('reviews__descr');
    const $p = $('<p>').text(text);
    $reviewsDescr.append($p);
    return $reviewsDescr;
  }

  function generateReviewAuthor(author, company) {
    const $reviewsAuthor = $('<div>').addClass('reviews__author');
    const $reviewsPhoto = $('<div>').addClass('reviews__photo');
    $reviewsAuthor.append($reviewsPhoto);
    const $reviewsName = $('<p>').addClass('reviews__name').text(author);
    const $reviewsText = $('<p>').addClass('reviews__text').text(company);
    $reviewsAuthor.append($reviewsName, $reviewsText);
    return $reviewsAuthor;
  }

  function generateReviewsMarkup(data) {
    const $reviewsSlider = $('.reviews-slider');
    $.each(data, function (index, review) {
      const $reviewItem = generateReviewItem(index, review);
      $reviewsSlider.append($reviewItem);
    });
  }

  function generateRatingStarList($reviewsRating, rating) {
    for (let i = 1; i <= 5; i++) {
      const $ratingItem = $('<li>').addClass('rating__item');
      const $star = $('<img>')
        .addClass('reviews__star')
        .attr('src', 'images/star.svg')
        .attr('width', '15')
        .attr('height', '15')
        .attr('alt', 'rating star');

      if (i > rating) {
        $star.addClass('reviews__star--unactive');
      }

      $ratingItem.append($star);
      $reviewsRating.append($ratingItem);
    }
  }
  function setReviewsSlider() {
    let intervalId;
    function nextSlide() {
      const activeSlide = $('.reviews__item--active');
      const activeSlideIndex = activeSlide.index();
      const totalSlides = $('.reviews__item').length;
      const nextSlideIndex = (activeSlideIndex + 1) % totalSlides;
      const nextSlide = $('.reviews__item').eq(nextSlideIndex);
      activeSlide.fadeOut(500);
      activeSlide.removeClass('reviews__item--active');
      nextSlide.fadeIn(500);
      nextSlide.addClass('reviews__item--active');
    }

    function startSlider() {
      intervalId = setInterval(nextSlide, 2000);
    }

    function stopSlider() {
      clearInterval(intervalId);
    }

    $('.next-btn, .prev-btn').on('click', function () {
      stopSlider();
      nextSlide();
      startSlider();
    });

    $('.reviews__item').hover(
      function () {
        stopSlider();
      },
      function () {
        startSlider();
      },
    );
    startSlider();
  }

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
