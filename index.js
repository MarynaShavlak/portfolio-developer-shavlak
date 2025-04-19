import { reviewsData, projectsData, articlesData } from './data.js';
import { drawFigure } from './canvas.js';
import { initProjectModal } from './js/projectModal.js';
import { initHireModal } from "./js/hireModal.js";
import { initCVModal } from "./js/cvModal.js";

$(document).ready(function () {
  initPortfolio();
  initReviewsSlider();
  initBlog();
  initHireModal();
  initCVModal();

  function initBlog() {
    generateBlogMarkup(articlesData);
    const visibleArticles = 3;
    const $articles = $('.articles__item');
    const total = $articles.length;
    hideExtraArticles($articles, visibleArticles);
    $('.blog__btn').on('click', function () {
      showMoreArticles($articles, total, visibleArticles);
    });
    $('.read-more-btn').on('click', function () {
      const $articleText = $(this).parent().find('.article__text');
      const isShowContent = $(this).parent().hasClass('showContent');

      $articleText.animate(
        {
          'max-height': isShowContent ? '96px' : '1000px',
        },
        300,
      );

      $(this).parent().toggleClass('showContent');
      const text = !isShowContent ? 'Read Less' : 'Read more';
      $(this).text(text);
    });
  }

  function hideExtraArticles($articles, visibleArticles) {
    $articles.slice(visibleArticles).hide();
  }

  function showMoreArticles($articles, total, visibleArticles) {
    $articles.filter(':hidden').slice(0, visibleArticles).slideDown('slow');
    const shownItemsQuantity = $articles.filter(':not(:hidden)').length;
    const remainingItems = total - shownItemsQuantity;
    if (remainingItems === 0) {
      $('.blog__btn').hide();
    }
  }

  function formatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    const shortMonths = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${day}<br />${shortMonths[parseInt(month, 10) - 1]}`;
  }

  function getDatetimeValue(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  function generateBlogMarkup(data) {
    const articlesHTML = data.map(
      ({ title, category, text, date }) => `
      <li class="articles__item">
        <div class="article__img-wrap">
          <time class="article__date" datetime="${getDatetimeValue(
            date,
          )}">${formatDate(date)}</time>
          <div class="articles__photo"></div>
        </div>
        <div class="article__meta">
          <a class="article__title" href="#">${title}</a>
          <p class="article__category">${category}</p>
          <p class="article__text">${text}</p>
        </div>
        <button type="button" class="read-more-btn">READ MORE</button>
      </li>
    `,
    );

    $('.articles-list').html(articlesHTML.join(''));
  }

  function initPortfolio() {
    const itemsPerPage = 6;
    let currentIndex = 0;
    let currentCategory = '*';

    renderAndFilterPortfolio();

    $('.load-more-btn').on('click', () => handleButtonClick('loadMore'));
    $('.show-less-btn').on('click', () => handleButtonClick('showLess'));
    initProjectModal();

    function handleButtonClick(action) {
      if (action === 'loadMore') {
        currentIndex += itemsPerPage;
      } else if (action === 'showLess') {
        currentIndex -= itemsPerPage;
      }
      updateIsotope(action);
      $('.portfolio__item').off('click', handleProjectModal);
      $('.portfolio__item').on('click', handleProjectModal);
      updateButtonsVisibility();
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
        let itemMarkup = `<li class="portfolio__item ${project.category}" data-category="${project.category}" data-id="${project.id}">`;
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
      const $portfolio = $('.portfolio-list').isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
          columnWidth: 370,
          gutter: 30,
        },
      });

      const filterValue = $('.filter-btn--active').attr('data-filter');

      $portfolio.isotope({filter: filterValue});
    }

    function updateFilterButtons(chosenFilterBtn) {
      const filters = $('[data-filter]');
      filters.removeClass('filter-btn--active');
      $(chosenFilterBtn).addClass('filter-btn--active');
    }

    $('.filter-btn').on('click', function () {
      updateFilterButtons(this);
      const filterValue = $(this).attr('data-filter');
      currentCategory =
          filterValue !== '*' ? filterValue.slice(1) : filterValue;
      currentIndex = 0;
      setPortfolioFilter();
      updateButtonsVisibility();
    });
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
        .attr('data-category', project.category)
        .attr('data-id', project.id);
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

  });
