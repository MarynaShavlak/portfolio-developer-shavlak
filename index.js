const reviewsData = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum.',
    author: 'Edward M. Brooks',
    company: 'Marketing House',
    rating: 4,
  },
  {
    text: 'Vestibulum auctor mi sit amet mauris ultrices, vel tincidunt purus vulputate. Duis vitae leo a justo condimentum imperdiet vel in sapien. In hac habitasse platea dictumst. Nulla facilisi. Aliquam erat volutpat.',
    author: 'Alice R. Johnson',
    company: 'Tech Innovations',
    rating: 3,
  },
  {
    text: 'Suspendisse potenti. Cras eget nisi vel elit scelerisque posuere. Curabitur sit amet augue non nunc viverra scelerisque. Integer ullamcorper cursus lacus vel consequat. Sed eu orci auctor, malesuada odio ut, malesuada libero.',
    author: 'David K. Anderson',
    company: 'Data Systems Inc.',
    rating: 5,
  },
  {
    text: 'Phasellus vel quam vel est accumsan cursus. In hac habitasse platea dictumst. Suspendisse ut justo a urna facilisis scelerisque nec non neque. Nulla facilisi. Sed tincidunt risus nec purus euismod, at volutpat odio vulputate.',
    author: 'Emily L. Rodriguez',
    company: 'Digital Dynamics',
    rating: 3,
  },
  {
    text: 'Quisque at velit ut justo imperdiet varius in eu orci. Nulla facilisi. Sed fringilla nunc eu arcu facilisis, vitae placerat nisl efficitur. Sed vel sapien quis justo ullamcorper vehicula. Morbi euismod dapibus justo, nec fermentum justo mattis ut.',
    author: 'George W. Thompson',
    company: 'Innovate Tech',
    rating: 4,
  },
  {
    text: 'Integer vel urna eu ex feugiat euismod. Fusce vestibulum risus vel metus laoreet, vel eleifend purus suscipit. Maecenas aliquam metus eu metus luctus, in interdum justo auctor. Sed vel leo nec arcu vestibulum luctus nec eu ante.',
    author: 'Olivia P. Lewis',
    company: 'Tech Trends',
    rating: 5,
  },
  {
    text: 'Cras in tortor vel quam dictum pharetra. Ut sit amet purus non mauris cursus dapibus. Sed a orci vitae enim fermentum fermentum. Vestibulum vel sapien vel arcu elementum tincidunt. Vivamus tincidunt est eget odio ultricies, eu convallis felis dictum.',
    author: 'Michael E. Turner',
    company: 'Digital Solutions Co.',
    rating: 3,
  },
  {
    text: 'Duis id enim id elit malesuada suscipit eu eu lacus. Aenean at nisl vel mi dictum efficitur. Vestibulum a ligula vel sapien consectetur facilisis. Nam lacinia justo sit amet venenatis sodales. Etiam sed elit quis dolor tristique sodales.',
    author: 'Sophia J. White',
    company: 'InnoTech Innovations',
    rating: 3,
  },
  {
    text: 'Aliquam vel metus vel tellus scelerisque euismod a ac arcu. Duis tincidunt velit non nibh fermentum, vel bibendum nulla tristique. Integer cursus, odio a commodo tempus, quam dui bibendum purus, sit amet lacinia elit ex eu elit.',
    author: 'William M. Taylor',
    company: 'Data Innovations',
    rating: 4,
  },
  {
    text: 'Maecenas sit amet augue id urna feugiat iaculis vitae at erat. Sed luctus leo at congue pharetra. Proin nec felis tincidunt, placerat velit vel, auctor nisl. Nam nec est vitae justo accumsan hendrerit sit amet in lacus.',
    author: 'Emma R. Harris',
    company: 'Tech Solutions Plus',
    rating: 5,
  },
];

const projectsData = [
  {
    category: 'app',
    title: 'Project title 1',
    date: 2018,
  },
  {
    category: 'website',
    title: 'Project title 2',
    date: 2019,
  },
  {
    category: 'website',
    title: 'Project title 3',
    date: 2021,
  },
  {
    category: 'website',
    title: 'Project title 4 ',
    date: 2020,
  },
  {
    category: 'interaction',
    title: 'Project title 5',
    date: 2023,
  },
  {
    category: 'app',
    title: 'Project title 6',
    date: 2024,
  },
  {
    category: 'website',
    title: 'Project title 7',
    date: 2023,
  },
  {
    category: 'app',
    title: 'Project title 8',
    date: 2024,
  },
  {
    category: 'interaction',
    title: 'Project title 9',
    date: 2024,
  },
  {
    category: 'app',
    title: 'Project title 10',
    date: 2024,
  },
  {
    category: 'website',
    title: 'Project title 11',
    date: 2024,
  },
  {
    category: 'website',
    title: 'Project title 12',
    date: 2024,
  },
  {
    category: 'interaction',
    title: 'Project title 13',
    date: 2023,
  },
  {
    category: 'website',
    title: 'Project title 14',
    date: 2020,
  },
  {
    category: 'interaction',
    title: 'Project title 15',
    date: 2021,
  },
];

$(document).ready(function () {
  initPortfolio();
  initReviewsSlider();
  initHireModal();

  function initPortfolio() {
    const itemsPerPage = 6;
    let currentIndex = 0;
    let $portfolio = null;
    let currentCategory = '*';
    renderAndFilterPortfolio();

    $('.load-more-btn').on('click', () => handleButtonClick('loadMore'));
    $('.show-less-btn').on('click', () => handleButtonClick('showLess'));

    function handleButtonClick(action) {
      if (action === 'loadMore') {
        currentIndex += itemsPerPage;
      } else if (action === 'showLess') {
        currentIndex -= itemsPerPage;
      }
      updateIsotope(action);
      // renderAndFilterPortfolio();
      updateButtonsVisibility();
    }

    function updateButtonsVisibility() {
      const filteredData = filterDataByCategory();

      const isLoadMoreVisible =
        currentIndex < filteredData.length - itemsPerPage;
      const isShowLessVisible = currentIndex >= itemsPerPage;

      $('.load-more-btn').toggle(isLoadMoreVisible);
      $('.show-less-btn').toggle(isShowLessVisible);
    }

    function renderPortfolio() {
      const $portfolioList = $('#portfolio');
      $portfolioList.empty();
      const slicedData = filterDataByCategory().slice(
        0,
        currentIndex + itemsPerPage,
      );

      generatePortfolioMarkUp(slicedData);
    }

    function renderAndFilterPortfolio() {
      renderPortfolio();
      setPortfolioFilter();
    }

    function updateIsotope(action) {
      const $portfolioList = $('.portfolio-list');
      const totalItems = $portfolioList.children().length;

      const updateIsotopeLayout = () => $portfolioList.isotope('layout');

      if (action === 'loadMore') {
        const data = filterDataByCategory().slice(
          currentIndex,
          currentIndex + itemsPerPage,
        );
        const generatedMarkup = generatePortfolioMarkUp(data);
        const $items = $(generatedMarkup);

        $portfolioList.append($items).isotope('appended', $items);
      } else if (action === 'showLess') {
        const $itemsToRemove = $portfolioList
          .isotope('getItemElements')
          .slice(currentIndex + itemsPerPage, totalItems);

        $portfolioList.isotope('remove', $itemsToRemove);
        updateIsotopeLayout();
      }

      function generatePortfolioMarkUp(data) {
        let markup = '';

        data.forEach((project, index) => {
          markup += generatePortfolioItemMarkup(project, index);
        });

        return markup;
      }

      function generatePortfolioItemMarkup(project, index) {
        let itemMarkup = `<li class="portfolio__item ${project.category}" data-category="${project.category}">`;
        itemMarkup += `<div class="work" data-modal="#modal_project_${
          index + 1
        }">`;
        itemMarkup += '<div class="work__image"></div>';
        itemMarkup += '<div class="work__info">';
        itemMarkup += `<div class="work__category">category: ${project.category}</div>`;
        itemMarkup += `<div class="work__title">${project.title}<span class="work__date">${project.date}</span></div>`;
        itemMarkup += '</div></div></li>';

        return itemMarkup;
      }
    }

    function filterDataByCategory() {
      return currentCategory !== '*'
        ? projectsData.filter(project => project.category === currentCategory)
        : projectsData;
    }

    function setPortfolioFilter() {
      if ($portfolio) {
        $portfolio.isotope('destroy');
      }
      $portfolio = $('.portfolio-list').isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
          columnWidth: 370,
          gutter: 30,
        },
      });

      const filterValue = $('.filter-btn--active').attr('data-filter');
      $portfolio.isotope({ filter: filterValue });

      $('.filter-btn').on('click', function () {
        updateFilterButtons(this);
        const filterValue = $(this).attr('data-filter');
        currentCategory =
          filterValue !== '*' ? filterValue.slice(1) : filterValue;
        currentIndex = 0;

        renderAndFilterPortfolio();
        updateButtonsVisibility();
      });

      function updateFilterButtons(chosenFilterBtn) {
        const filters = $('[data-filter]');
        filters.removeClass('filter-btn--active');
        $(chosenFilterBtn).addClass('filter-btn--active');
      }
    }
  }

  function generatePortfolioMarkUp(data) {
    const $portfolioList = $('.portfolio-list');
    data.forEach((project, index) => {
      const item = generatePortfolioItem(project, index);
      $portfolioList.append(item);
    });

    function generatePortfolioItem(project, index) {
      const $portfolioItem = $('<li>')
        .addClass(`portfolio__item ${project.category}`)
        .attr('data-category', project.category);
      const $work = $('<div>')
        .addClass('work')
        .attr('data-modal', `#modal_project_${index + 1}`);
      const $workImage = $('<div>').addClass('work__image');
      const $workInfo = $('<div>').addClass('work__info');
      const $workCategory = $('<div>')
        .addClass('work__category')
        .text(`category: ${project.category}`);
      const $workTitle = $('<div>').addClass('work__title').text(project.title);
      const $workDate = $('<span>').addClass('work__date').text(project.date);

      $workTitle.append($workDate);
      $workInfo.append($workCategory, $workTitle);
      $work.append($workImage, $workInfo);
      $portfolioItem.append($work);
      return $portfolioItem;
    }
  }
  function initReviewsSlider() {
    generateReviewsMarkup(reviewsData);
    setReviewsSlider();
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
  function generateReviewsMarkup(data) {
    const $reviewsSlider = $('.reviews-slider');
    $.each(data, function (index, review) {
      const $reviewItem = generateReviewItem(index, review);
      $reviewsSlider.append($reviewItem);
    });

    function generateReviewItem(index, review) {
      const $reviewItem = $('<li>').addClass('reviews__item');
      if (index === 0) {
        $reviewItem.addClass('reviews__item--active');
      }
      const $reviewsDescr = generateReviewDescription(review.text);
      const $reviewsAuthor = generateReviewAuthor(
        review.author,
        review.company,
      );
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
  }

  function initHireModal() {
    setHireModalInfo();
    setHireModal();
  }
  function setHireModal() {
    $('[data-modal="hire-modal"]').on('click', showHireModal);
    $('.close-modal-btn').on('click', hideHireModal);
    $('.hire-form').on('submit', sendMessage);
  }

  function sendMessage(e) {
    e.preventDefault();
    const isValid = isFormValid();
    if (isValid) {
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),
      };
      handleModalCloseButtonClick();
      resetSendFormData();
      $('.contact-wrap').toggleClass('active');
    }
  }

  function isFormValid() {
    $('.error-message').text('');
    let hasError = false;
    hasError =
      validateField(
        '#name',
        'Name is required',
        'Name should have at least 2 characters',
      ) || hasError;
    hasError =
      validateField(
        '#email',
        'Email is required',
        'Invalid email address',
        isValidEmail,
      ) || hasError;
    hasError =
      validateField(
        '#phone',
        'Phone number is required',
        'Invalid phone number',
        isValidPhone,
      ) || hasError;
    hasError = validateField('#message', 'Message is required') || hasError;
    return !hasError;

    function validateField(
      selector,
      requiredError,
      formatError,
      validationFunction = null,
    ) {
      let fieldValue = $(selector).val().trim();

      if (fieldValue === '') {
        $(`${selector}-error`).text(requiredError);
        return true;
      }

      if (validationFunction && !validationFunction(fieldValue)) {
        $(`${selector}-error`).text(formatError);
        return true; // Indicates an error
      }

      return false;
    }

    function isValidEmail(email) {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isValidPhone(phone) {
      let phoneRegex = /^\d{10,}$/;
      return phoneRegex.test(phone);
    }
  }

  function resetSendFormData() {
    $('#name').text('');
    $('#name').val('');
    $('#email').text('');
    $('#email').val('');
    $('#phone').text('');
    $('#phone').val('');
    $('#message').text('');
    $('#message').val('');
    $('.error-message').text('');
  }

  function showHireModal() {
    $('.modal-backdrop').fadeIn('slow', function () {
      $('body').addClass('modal-open');
    });
  }

  function hideHireModal() {
    $('.modal-backdrop').fadeOut('slow', function () {
      $('body').removeClass('modal-open');
    });
  }

  function setHireModalInfo() {
    $('.card-toggle').on('click', function () {
      $('.card-toggle').removeClass('active');
      $(this).addClass('active');
      handleCardToggleClick($(this));
    });

    $('input,textarea').blur(function () {
      $(this)
        .parent()
        .toggleClass('filled', $(this).val().trim() !== '');
    });

    $('.hire-btn').on('click', function () {
      $('.contact-wrap').toggleClass('active');
    });

    $('.contact-wrap .close').on('click', function () {
      $('.contact-wrap').toggleClass('active');
      resetSendFormData();
    });

    const allCardToggleLinks = $('.card-toggle');
    allCardToggleLinks.on('mouseover', handleOverViewMouseOver);
    allCardToggleLinks.on('mouseout', handleMouseOut);

    function handleCardToggleClick(clickedToggle) {
      let isAnimating = false;
      if (!isAnimating) {
        isAnimating = true;
        deactivateAllCards();
        clickedToggle.siblings().css('z-index', 1);
        setTimeout(function () {
          activateClickedCard(clickedToggle);
          const isOverViewActive = $('.card--overview').hasClass('active');
          updateCardToggleStyles(isOverViewActive);
        }, 10);
      } else {
        return;
      }

      $('.card-toggle').on('mouseover', handleOverViewMouseOver);
      $('.card-toggle').on('mouseout', handleMouseOut);
    }

    function deactivateAllCards() {
      $('.card').find('.card-content').css('z-index', 0);
      $('.card').removeClass('active');
    }

    function activateClickedCard(clickedToggle) {
      clickedToggle
        .parent()
        .toggleClass('active')
        .find('.card-content')
        .on('transitionend', function () {
          isAnimating = false;
        });
    }

    function updateCardToggleStyles(isOverViewActive) {
      const $cardToggleLinks = $('.card-toggle');

      $cardToggleLinks.each(function () {
        const $link = $(this);
        const $icon = $link.find('.card-toggle__icon');

        if (isOverViewActive) {
          updateStylesForOverView($link, $icon);
        } else {
          updateStylesForNormalView($link, $icon);
        }
      });
    }

    function updateStylesForOverView($link, $icon) {
      $link.css('border-color', 'transparent');
      $icon.css('color', '#161616');
      $link.on('mouseover', handleOverViewMouseOver);
      $link.on('mouseout', handleMouseOut);
    }

    function updateStylesForNormalView($link, $icon) {
      if (!$link.hasClass('active')) {
        $link.css('border-color', 'transparent');
        $icon.css('color', '#161616');
      } else {
        $link.css('border-color', '#fff');
        $icon.css('color', '#fff');
      }
      $link.off('mouseover', handleOverViewMouseOver);
      $link.off('mouseout', handleMouseOut);
      $link.on('mouseover', handleBlockMouseOver);
      $link.on('mouseout', handleMouseOut);
    }

    function handleOverViewMouseOver(event) {
      const $link = $(event.currentTarget);
      const $icon = $link.find('.card-toggle__icon');
      $icon.css('color', '#000');
      $link.css('border-color', '#000');
    }

    function handleMouseOut(event) {
      const $link = $(event.currentTarget);
      const $icon = $link.find('.card-toggle__icon');

      if (!$link.hasClass('active')) {
        $icon.css('color', '#161616');
        $link.css('border-color', 'transparent');
      }
    }

    function handleBlockMouseOver(event) {
      const $link = $(event.currentTarget);
      const $icon = $link.find('.card-toggle__icon');
      $icon.css('color', '#fff');
      $link.css('border-color', '#fff');
    }
  }
});
